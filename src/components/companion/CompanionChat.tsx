"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, UIMessage } from "ai";
import { createBrowserClient } from "@supabase/ssr";
import { ConversationSidebar, Conversation } from "./ConversationSidebar";
import { MessageBubble, TypingIndicator } from "./MessageBubble";
import { InputBar } from "./InputBar";

interface Props {
  hormoneProfile: string | null;
  secondaryProfile: string | null;
  vorname: string | null;
  ageGroup: string | null;
}

function getSupabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Converts raw Supabase messages to UIMessage format
function toUIMessages(rows: { id: string; role: string; content: string }[]): UIMessage[] {
  return rows.map((row) => ({
    id: row.id,
    role: row.role as UIMessage["role"],
    parts: [{ type: "text" as const, text: row.content }],
  }));
}

// Inner chat pane — re-mounts on conversationId change via key prop
function ChatPane({
  conversationId,
  initialMessages,
  isFirstConversation,
  hormoneProfile,
  onTitleGenerated,
}: {
  conversationId: string;
  initialMessages: UIMessage[];
  isFirstConversation: boolean;
  hormoneProfile: string | null;
  onTitleGenerated: (title: string) => void;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasTitleRef = useRef(initialMessages.length > 0);

  const { messages, sendMessage, status } = useChat({
    messages: initialMessages,
    transport: new DefaultChatTransport({
      api: "/api/companion/chat",
      prepareSendMessagesRequest: ({ messages }) => ({
        body: { messages, conversationId },
      }),
    }),
  });

  const isStreaming = status === "streaming" || status === "submitted";

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  // Generate title after first user message
  useEffect(() => {
    const userMessages = messages.filter((m) => m.role === "user");
    if (userMessages.length === 1 && !hasTitleRef.current) {
      hasTitleRef.current = true;
      const firstText = userMessages[0].parts
        .filter((p) => p.type === "text")
        .map((p) => (p as { text: string }).text)
        .join("");

      fetch("/api/companion/title", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId, firstMessage: firstText }),
      })
        .then((r) => r.json())
        .then(({ title }) => title && onTitleGenerated(title));
    }
  }, [messages, conversationId, onTitleGenerated]);

  const handleSend = useCallback(
    (text: string) => {
      sendMessage({ text });
    },
    [sendMessage]
  );

  const handleChipClick = useCallback(
    (label: string) => {
      sendMessage({ text: label });
    },
    [sendMessage]
  );

  const showWelcome = messages.length === 0;

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {showWelcome ? (
            <WelcomeScreen hormoneProfile={hormoneProfile} onChipClick={handleChipClick} />
          ) : (
            <>
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                  onChipClick={handleChipClick}
                />
              ))}
              {isStreaming && <TypingIndicator />}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <InputBar onSend={handleSend} disabled={isStreaming} />
    </div>
  );
}

function WelcomeScreen({
  hormoneProfile,
  onChipClick,
}: {
  hormoneProfile: string | null;
  onChipClick: (label: string) => void;
}) {
  const STARTER_CHIPS: Record<string, string[]> = {
    PP: ["Warum bin ich vor meiner Periode so gereizt?", "Was hilft gegen PMS?", "Progesteron erklären"],
    M:  ["Meine Hauptsymptome verstehen", "Welche Laborwerte sind wichtig?", "Was kann ich jetzt tun?"],
    PM: ["Was passiert in der Perimenopause?", "Hitzewallungen & Schlaf", "Soll ich Hormone nehmen?"],
    H:  ["Hashimoto-Verdacht: Was tun?", "Schilddrüsen-Blutwerte erklärt", "Warum bin ich so müde?"],
    C:  ["Cortisol & Erschöpfung", "Warum schlafe ich schlecht?", "Stress und mein Zyklus"],
    E:  ["Östrogen-Dominanz verstehen", "Starke Perioden: Ursachen", "Ernährung & Hormone"],
    A:  ["PCOS – was bedeutet das für mich?", "Androgene & Akne", "Zyklusregulation bei PCOS"],
    Fe: ["Eisenmangel & Müdigkeit", "Welche Eisenwerte brauche ich?", "Eisenreiche Ernährung"],
  };

  const chips = STARTER_CHIPS[hormoneProfile ?? "M"] ?? STARTER_CHIPS.M;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center pt-8 pb-4">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <span className="font-headline text-2xl font-bold text-primary">Ae</span>
      </div>
      <h2 className="text-xl font-headline font-bold text-on-surface mb-2">
        Willkommen bei Aera
      </h2>
      <p className="text-sm text-on-surface-variant font-body max-w-xs leading-relaxed mb-8">
        Deine persönliche Begleiterin für Hormongesundheit.
        Frag mich alles – ich erkläre Zusammenhänge, Blutwerte und nächste Schritte.
      </p>
      <div className="flex flex-wrap gap-2 justify-center max-w-sm">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => onChipClick(chip)}
            className="px-4 py-2 rounded-full border border-primary/30 bg-surface text-primary text-sm font-body font-medium hover:bg-primary/8 transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

// Main exported component
export function CompanionChat({ hormoneProfile, secondaryProfile, vorname, ageGroup }: Props) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [initialMessages, setInitialMessages] = useState<UIMessage[]>([]);
  const [loadingConvs, setLoadingConvs] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const supabase = getSupabaseBrowser();

  // Load conversations list
  const loadConversations = useCallback(async () => {
    const res = await fetch("/api/companion/conversations");
    if (!res.ok) return;
    const data = await res.json();
    setConversations(data.conversations ?? []);
    return data.conversations as Conversation[];
  }, []);

  // On mount: load conversations, then open latest or create new
  useEffect(() => {
    (async () => {
      setLoadingConvs(true);
      const convs = await loadConversations();
      setLoadingConvs(false);
      if (convs && convs.length > 0) {
        selectConversation(convs[0].id);
      } else {
        createNewConversation();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectConversation = useCallback(async (id: string) => {
    setLoadingMessages(true);
    setActiveId(id);
    const res = await fetch(`/api/companion/messages?conversationId=${id}`);
    if (res.ok) {
      const data = await res.json();
      setInitialMessages(toUIMessages(data.messages ?? []));
    }
    setLoadingMessages(false);
  }, []);

  const createNewConversation = useCallback(async () => {
    const res = await fetch("/api/companion/conversations", { method: "POST" });
    if (!res.ok) return;
    const data = await res.json();
    const newConv: Conversation = data.conversation;
    setConversations((prev) => [newConv, ...prev]);
    setActiveId(newConv.id);
    setInitialMessages([]);
  }, []);

  const handleTitleGenerated = useCallback((id: string, title: string) => {
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, title } : c))
    );
  }, []);

  const handleSignOut = useCallback(async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  }, [supabase]);

  return (
    <div
      className="flex h-[calc(100vh-4rem)]"
      style={{ backgroundColor: "#edecea" }}
    >
      <ConversationSidebar
        conversations={conversations}
        activeId={activeId}
        onSelect={selectConversation}
        onNew={createNewConversation}
        onSignOut={handleSignOut}
        isLoading={loadingConvs}
        userProfile={{ vorname, ageGroup, hormoneProfile, secondaryProfile }}
      />

      <main className="flex-1 flex flex-col min-w-0 h-full">
        {loadingMessages ? (
          <div className="flex-1 flex items-center justify-center">
            <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : activeId ? (
          <ChatPane
            key={activeId}
            conversationId={activeId}
            initialMessages={initialMessages}
            isFirstConversation={conversations.length <= 1}
            hormoneProfile={hormoneProfile}
            onTitleGenerated={(title) => handleTitleGenerated(activeId, title)}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}
      </main>
    </div>
  );
}
