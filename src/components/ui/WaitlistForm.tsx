"use client";

import { useState } from "react";
import { WAITLIST_TOPICS } from "@/lib/constants";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, topic }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setTopic("");
      } else if (res.status === 200) {
        setStatus("duplicate");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error || "Ein Fehler ist aufgetreten.");
      }
    } catch {
      setStatus("error");
      setMessage("Verbindungsfehler. Bitte versuche es erneut.");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto text-center py-8">
        <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-on-secondary-container text-3xl filled"
            style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <h3 className="text-2xl font-headline font-bold text-primary mb-3">Du bist dabei!</h3>
        <p className="text-on-surface-variant font-body">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-primary font-semibold text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Weitere E-Mail eintragen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Deine E-Mail-Adresse"
        className="w-full px-8 py-5 rounded-full bg-white border border-outline-variant/20 focus:ring-1 focus:ring-primary/20 focus:border-primary/20 transition-all placeholder:text-on-surface-variant/40 font-body text-sm"
      />
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full px-8 py-5 rounded-full bg-white border border-outline-variant/20 focus:ring-1 focus:ring-primary/20 focus:border-primary/20 transition-all text-on-surface-variant font-body text-sm appearance-none cursor-pointer"
      >
        <option value="">Dein Hauptthema wählen</option>
        {WAITLIST_TOPICS.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>

      {(status === "error" || status === "duplicate") && (
        <p className={`text-sm text-center px-4 ${status === "duplicate" ? "text-secondary" : "text-error"}`}>
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary-dim transition-all shadow-xl shadow-primary/10 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Wird eingetragen…" : "Warteliste beitreten"}
      </button>
      <p className="text-[9px] text-on-surface-variant/50 mt-8 uppercase tracking-[0.2em] font-bold text-center">
        Datenschutz garantiert. Jederzeit abmeldbar.
      </p>
    </form>
  );
}
