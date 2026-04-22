import { NextRequest, NextResponse } from "next/server";
import { streamText, UIMessage, convertToModelMessages, isTextUIPart } from "ai";
import { getSupabaseServer } from "@/lib/supabase-server";
import { buildSystemPrompt } from "@/lib/companionPrompt";

const MAX_MESSAGES_PER_CONVERSATION = 30;
const MAX_HISTORY_SENT_TO_AI = 6;
const MAX_TOKENS_PER_RESPONSE = 600;
const BETA_USER_MESSAGE_LIMIT = 5;

export async function POST(request: NextRequest) {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { messages, conversationId }: { messages: UIMessage[]; conversationId: string } = body;

  if (!conversationId) {
    return NextResponse.json({ error: "Missing conversationId" }, { status: 400 });
  }

  // Verify conversation belongs to user
  const { data: conversation } = await supabase
    .from("conversations")
    .select("id")
    .eq("id", conversationId)
    .eq("user_id", user.id)
    .single();

  if (!conversation) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
  }

  // Beta limit: max 5 user messages total across all conversations
  const { data: userConvs } = await supabase
    .from("conversations")
    .select("id")
    .eq("user_id", user.id);
  const convIds = userConvs?.map((c) => c.id) ?? [];
  if (convIds.length > 0) {
    const { count: totalUserMessages } = await supabase
      .from("messages")
      .select("id", { count: "exact", head: true })
      .in("conversation_id", convIds)
      .eq("role", "user");
    if ((totalUserMessages ?? 0) >= BETA_USER_MESSAGE_LIMIT) {
      return NextResponse.json(
        { error: "beta_limit_reached", message: "Du hast das Beta-Limit von 5 Nachrichten erreicht. Wir melden uns, sobald wir mehr Kapazität freischalten." },
        { status: 429 }
      );
    }
  }

  // Check per-conversation message cap
  const { count } = await supabase
    .from("messages")
    .select("id", { count: "exact", head: true })
    .eq("conversation_id", conversationId);

  if ((count ?? 0) >= MAX_MESSAGES_PER_CONVERSATION) {
    return NextResponse.json(
      { error: "limit_reached", message: "Dieses Gespräch hat sein Maximum erreicht. Starte ein neues Gespräch." },
      { status: 429 }
    );
  }

  // Load user's hormone profile for system prompt
  const { data: profile } = await supabase
    .from("profiles")
    .select("hormone_profile, endo_flag, poi_warning, quiz_scores, age_group")
    .eq("id", user.id)
    .single();

  const systemPrompt = buildSystemPrompt(profile ?? {
    hormone_profile: null,
    endo_flag: false,
    poi_warning: false,
    quiz_scores: null,
    age_group: null,
  });

  // Only send the last N messages to the model (cost control)
  const recentMessages = messages.slice(-MAX_HISTORY_SENT_TO_AI);

  // Persist the latest user message (extract text from parts)
  const lastMessage = messages[messages.length - 1];
  if (lastMessage?.role === "user") {
    const userText = lastMessage.parts.filter(isTextUIPart).map((p) => p.text).join("");
    await supabase.from("messages").insert({
      conversation_id: conversationId,
      role: "user",
      content: userText,
    });
  }

  const result = streamText({
    model: "anthropic/claude-sonnet-4.6",
    system: systemPrompt,
    messages: await convertToModelMessages(recentMessages),
    maxOutputTokens: MAX_TOKENS_PER_RESPONSE,
    onFinish: async ({ text }) => {
      // Persist assistant reply after stream completes
      await supabase.from("messages").insert({
        conversation_id: conversationId,
        role: "assistant",
        content: text,
      });
    },
  });

  return result.toUIMessageStreamResponse();
}
