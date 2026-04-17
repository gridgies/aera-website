import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { getSupabaseServer } from "@/lib/supabase-server";

// POST /api/companion/title — generate a short title from the first user message
export async function POST(request: NextRequest) {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { conversationId, firstMessage } = body;
  if (!conversationId || !firstMessage) {
    return NextResponse.json({ error: "Missing conversationId or firstMessage" }, { status: 400 });
  }

  const { text } = await generateText({
    model: "anthropic/claude-sonnet-4.6",
    maxOutputTokens: 30,
    messages: [
      {
        role: "user",
        content: `Erstelle einen kurzen Titel (max. 5 Wörter, kein Anführungszeichen) für ein Gespräch, das mit dieser Nachricht beginnt:\n\n"${firstMessage}"`,
      },
    ],
  });

  const title = text.trim().slice(0, 60);

  await supabase
    .from("conversations")
    .update({ title })
    .eq("id", conversationId)
    .eq("user_id", user.id);

  return NextResponse.json({ title });
}
