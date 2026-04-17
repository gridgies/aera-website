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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  // Scroll the container to the bottom (avoids scrollIntoView overshooting the page)
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
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
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto pt-8 pb-6">
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

// ─── Profile greeting ────────────────────────────────────────────────────────

const PROFILE_SUMMARIES: Record<string, { titel: string; summary: string; labor: string }> = {
  PP: {
    titel: "PMS & Progesteron-Mangel",
    summary:
      "Dein Muster deutet auf ein Ungleichgewicht in der zweiten Zyklushälfte hin: relativer Progesteron-Mangel im Verhältnis zu Östrogen. Das erklärt PMS-typische Beschwerden wie Reizbarkeit, Schlafprobleme, Brustspannen und Stimmungstiefen in den Tagen vor der Periode.",
    labor: "Progesteron (21. Zyklustag), Östradiol, FSH",
  },
  M: {
    titel: "Menopausales Hormonmuster",
    summary:
      "Dein Profil zeigt die klassischen Zeichen der Menopause: dauerhaft niedrige Östrogen- und Progesteronspiegel nach dem Ausbleiben der Periode. Das ist ein natürlicher Übergang – und trotzdem gibt es viele Wege, die Lebensqualität gezielt zu verbessern.",
    labor: "FSH, LH, Östradiol, TSH, Ferritin",
  },
  PM: {
    titel: "Perimenopausales Hormonmuster",
    summary:
      "Dein Körper befindet sich im Übergang: Die Hormonspiegel schwanken unregelmäßig, bevor die Menopause eintritt. Diese Phase kann Jahre dauern und erklärt viele scheinbar widersprüchliche Beschwerden – von Hitzewallungen bis zu Stimmungsschwankungen.",
    labor: "FSH, LH, Östradiol (Zyklusmitte), AMH",
  },
  H: {
    titel: "Schilddrüsendysfunktion / Hashimoto-Verdacht",
    summary:
      "Deine Beschwerden – wahrscheinlich Erschöpfung, Kältegefühl, Haarausfall und/oder Gewichtszunahme – passen zu einer Schilddrüsenunterfunktion, die häufig durch die Autoimmunerkrankung Hashimoto verursacht wird. Sie ist bei Frauen sehr häufig und wird oft erst spät erkannt.",
    labor: "TSH, fT3, fT4, Anti-TPO, Anti-Thyreoglobulin",
  },
  C: {
    titel: "Cortisol-Dysregulation / Stressachse",
    summary:
      "Dein Muster zeigt Zeichen einer überlasteten Stressachse (HPA-Achse). Chronisch erhöhtes Cortisol greift direkt in die Produktion von Sexualhormonen ein, stört den Schlaf und verstärkt die Erschöpfung – eine messbare hormonelle Verschiebung, keine Frage der Willenskraft.",
    labor: "Cortisol (nüchtern morgens), DHEA-S, ggf. Tagesprofil im Speichel",
  },
  E: {
    titel: "Östrogen-Dominanz",
    summary:
      "Im Verhältnis zu Progesteron ist dein Östrogenspiegel erhöht – oder Progesteron ist zu niedrig, um den Gegenpol zu bilden. Typische Zeichen sind starke Perioden, Wassereinlagerungen, Brustspannen und Stimmungsschwankungen in der Zyklushälfte.",
    labor: "Östradiol, Progesteron, Prolaktin, ggf. Schilddrüsenwerte",
  },
  A: {
    titel: "Androgen-Überschuss / PCOS-Muster",
    summary:
      "Dein Muster passt zu erhöhten Androgenwerten – den sogenannten \"männlichen\" Hormonen, die auch Frauen in kleinen Mengen brauchen. Bei Überschuss entstehen oft Akne, Haarausfall am Kopf, vermehrter Körperhaarwuchs oder unregelmäßige Zyklen. PCOS ist die häufigste hormonelle Erkrankung bei Frauen im reproduktiven Alter.",
    labor: "Testosteron (gesamt & frei), DHEA-S, LH/FSH-Quotient, Insulin nüchtern",
  },
  Fe: {
    titel: "Eisenmangel / Ferritin-Erschöpfung",
    summary:
      "Deine Beschwerden passen zu einem Eisenmangel – besonders wenn Ferritin (der Eisenspeicher) niedrig ist, auch wenn der Hämoglobinwert noch normal erscheint. Typische Zeichen: bleierne Müdigkeit, Haarausfall, Konzentrationsprobleme und Kältegefühl.",
    labor: "Ferritin, Hämoglobin, MCV, Transferrinsättigung, Vitamin B12",
  },
};

const PROFILE_LABELS_SHORT: Record<string, string> = {
  PP: "PMS / Progesteron",
  M:  "Menopause",
  PM: "Perimenopause",
  H:  "Hashimoto",
  C:  "Cortisol / Stress",
  E:  "Östrogen-Dominanz",
  A:  "Androgene / PCOS",
  Fe: "Eisenmangel",
};

function buildProfileGreeting(
  vorname: string | null,
  hormoneProfile: string | null,
  secondaryProfile: string | null,
): string {
  const name = vorname ? `${vorname}` : null;
  const greeting = name ? `Hallo ${name}!` : "Hallo!";
  const key = hormoneProfile ?? "M";
  const p = PROFILE_SUMMARIES[key] ?? PROFILE_SUMMARIES.M;

  let text = `${greeting}\n\nHier ist deine persönliche Auswertung auf Basis deines Fragebogens:\n\n**${p.titel}**\n\n${p.summary}`;

  if (secondaryProfile && secondaryProfile !== hormoneProfile && PROFILE_SUMMARIES[secondaryProfile]) {
    const secLabel = PROFILE_LABELS_SHORT[secondaryProfile] ?? secondaryProfile;
    text += `\n\nErgänzend zeigt dein Profil auch Hinweise auf **${secLabel}**.`;
  }

  text += `\n\n**Empfohlene Laborwerte als erster Schritt:**\n${p.labor}\n\nIch bin hier, um all deine Fragen zu beantworten – zu Blutwerten, Symptomen, Ernährung oder nächsten Schritten. Womit möchtest du anfangen?`;

  return text;
}

// ─── Main exported component ─────────────────────────────────────────────────
export function CompanionChat({ hormoneProfile, secondaryProfile, vorname, ageGroup }: Props) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [initialMessages, setInitialMessages] = useState<UIMessage[]>([]);
  const [loadingConvs, setLoadingConvs] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const supabase = useRef(getSupabaseBrowser()).current;

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

    // Seed a greeting message based on the user's hormone profile
    const greeting = buildProfileGreeting(vorname, hormoneProfile, secondaryProfile);
    const { data: msgData } = await supabase
      .from("messages")
      .insert({ conversation_id: newConv.id, role: "assistant", content: greeting })
      .select("id, role, content")
      .single();

    setConversations((prev) => [newConv, ...prev]);
    setActiveId(newConv.id);
    setInitialMessages(msgData ? toUIMessages([msgData]) : []);
  }, [vorname, hormoneProfile, secondaryProfile, supabase]);

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
