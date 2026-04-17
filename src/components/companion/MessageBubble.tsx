"use client";

import { UIMessage, isTextUIPart } from "ai";

interface RoutineCard {
  title: string;
  subtitle: string;
}

interface ParsedContent {
  textBlocks: string[];
  routine: RoutineCard | null;
  chips: string[];
}

function parseAssistantContent(text: string): ParsedContent {
  let cleaned = text;
  let routine: RoutineCard | null = null;
  const chips: string[] = [];

  // Parse [ROUTINE: title | subtitle]
  cleaned = cleaned.replace(/\[ROUTINE:\s*([^|]+)\|([^\]]+)\]/g, (_, title, subtitle) => {
    routine = { title: title.trim(), subtitle: subtitle.trim() };
    return "";
  });

  // Parse [CHIPS: label1 | label2 | ...]
  cleaned = cleaned.replace(/\[CHIPS:\s*([^\]]+)\]/g, (_, labels) => {
    chips.push(...labels.split("|").map((l: string) => l.trim()).filter(Boolean));
    return "";
  });

  // Split into paragraph blocks, filter empty
  const textBlocks = cleaned
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return { textBlocks, routine, chips };
}

interface Props {
  message: UIMessage;
  onChipClick?: (label: string) => void;
}

export function MessageBubble({ message, onChipClick }: Props) {
  const isUser = message.role === "user";

  const rawText = message.parts
    .filter(isTextUIPart)
    .map((p) => p.text)
    .join("");

  if (isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div
          className="max-w-[75%] px-5 py-3 font-body text-sm leading-relaxed text-white"
          style={{
            backgroundColor: "#5a4a42",
            borderRadius: "20px 20px 4px 20px",
          }}
        >
          {rawText}
        </div>
      </div>
    );
  }

  // Assistant message — parse special tags
  const { textBlocks, routine, chips } = parseAssistantContent(rawText);

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[82%] space-y-3">
        {/* Text content */}
        {textBlocks.length > 0 && (
          <div
            className="px-5 py-4 font-body text-sm leading-relaxed text-on-surface"
            style={{
              backgroundColor: "#f5f3f0",
              borderRadius: "20px 20px 20px 4px",
            }}
          >
            {textBlocks.map((block, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {block}
              </p>
            ))}
          </div>
        )}

        {/* [ROUTINE] card */}
        {routine && (
          <div
            className="px-5 py-4 border border-primary/20"
            style={{
              backgroundColor: "#fdf6f2",
              borderRadius: "16px",
            }}
          >
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                routine
              </span>
              <div>
                <p className="font-headline font-semibold text-sm text-on-surface">
                  {routine.title}
                </p>
                <p className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  {routine.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* [CHIPS] quick replies */}
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => onChipClick?.(chip)}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/30 bg-surface text-primary text-xs font-semibold font-body hover:bg-primary/8 transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Typing indicator shown while streaming
export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div
        className="px-5 py-4 flex items-center gap-1.5"
        style={{
          backgroundColor: "#f5f3f0",
          borderRadius: "20px 20px 20px 4px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-on-surface-variant/40 animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
