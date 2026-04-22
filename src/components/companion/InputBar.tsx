"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  limitReached?: boolean;
}

export function InputBar({ onSend, disabled, placeholder = "Schreib Aera eine Nachricht…", limitReached }: Props) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-grow textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 144)}px`;
  }, [value]);

  const handleSubmit = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (limitReached) {
    return (
      <div
        className="border-t border-outline-variant/20 px-4 py-4"
        style={{ backgroundColor: "#edecea" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-on-surface font-body mb-1">
            Beta-Limit erreicht
          </p>
          <p className="text-xs text-on-surface-variant font-body leading-relaxed">
            Du hast deine 5 Beta-Nachrichten aufgebraucht. Wir melden uns, sobald wir mehr Kapazität freischalten – danke für dein Verständnis!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-t border-outline-variant/20 px-4 py-3"
      style={{ backgroundColor: "#edecea" }}
    >
      <div className="max-w-3xl mx-auto">
      <div
        className="flex items-end gap-3 bg-surface rounded-2xl px-4 py-3 shadow-sm border border-outline-variant/20"
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 resize-none bg-transparent font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none leading-relaxed min-h-[24px] max-h-36"
        />
        <button
          onClick={handleSubmit}
          disabled={!value.trim() || disabled}
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            value.trim() && !disabled
              ? "bg-primary text-on-primary hover:opacity-90"
              : "bg-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed"
          }`}
          aria-label="Senden"
        >
          <span className="material-symbols-outlined text-base" style={{ fontSize: "18px" }}>
            arrow_upward
          </span>
        </button>
      </div>
      <p className="text-center text-xs text-on-surface-variant/50 font-body mt-2">
        Aera ersetzt keine ärztliche Beratung.
      </p>
      </div>
    </div>
  );
}
