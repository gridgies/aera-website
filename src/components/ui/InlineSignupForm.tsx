"use client";

import { useState } from "react";
import { trackWaitlistSignup } from "@/lib/analytics";

interface Props {
  source?: string;
  headline?: string;
  subline?: string;
}

export function InlineSignupForm({
  source = "inline-article",
  headline = "Bleib auf dem Laufenden",
  subline = "Erhalte fundierte Infos zu Hormonen, Wechseljahren und Hashimoto – direkt in dein Postfach.",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, topic: source }),
      });

      if (res.status === 201 || res.status === 200) {
        setStatus(res.status === 201 ? "success" : "duplicate");
        trackWaitlistSignup(source);
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success" || status === "duplicate") {
    return (
      <div className="flex items-center gap-3 text-sm text-on-surface-variant">
        <span
          className="material-symbols-outlined text-secondary text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <span>
          {status === "success"
            ? "Du bist eingetragen – danke!"
            : "Du bist bereits auf der Liste."}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-primary-container/30 border border-primary/10 rounded-2xl p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{headline}</p>
      <p className="text-sm text-on-surface-variant font-body mb-5 leading-relaxed">{subline}</p>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Deine E-Mail-Adresse"
          className="flex-1 px-5 py-3 rounded-full bg-white border border-outline-variant/20 text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary/30 placeholder:text-on-surface-variant/40"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "…" : "Eintragen"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-error mt-3">Fehler beim Eintragen – bitte versuche es erneut.</p>
      )}
      <p className="text-[10px] text-on-surface-variant/40 mt-4 uppercase tracking-wider">
        Kein Spam. Jederzeit abmeldbar.
      </p>
    </div>
  );
}
