"use client";

import { useState } from "react";
import { QuizAnswer } from "@/types";
import { QuizResult } from "@/lib/quizEngine";

interface Props {
  result: QuizResult;
  answers: QuizAnswer[];
}

type State = "idle" | "loading" | "success" | "error";

export function ResultEmailCapture({ result, answers }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValid = email.includes("@") && email.includes(".") && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          answers,
          result: {
            primaryKey: result.primary.key,
            primaryTitel: result.primary.titel,
            klarheit: result.klarheit,
            ageGroup: result.ageGroup,
            scores: result.scores,
            noPattern: result.noPattern,
            lowScore: result.lowScore,
          },
        }),
      });

      if (!res.ok) throw new Error("Server error");
      setState("success");
    } catch {
      setState("error");
      setErrorMsg("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    }
  };

  if (state === "success") {
    return (
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <div className="bg-surface-container-low rounded-3xl p-8 md:p-10 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">mark_email_read</span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-3">
            Geschafft! Check dein Postfach.
          </h2>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-md mx-auto">
            Wir haben dir deine persönliche Auswertung per E-Mail geschickt.
            Schau auch im Spam-Ordner nach, falls sie nicht sofort auftaucht.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 max-w-4xl mx-auto pb-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
          </div>
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-1">
              Ergebnis per E-Mail erhalten
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              Erhalte deine persönliche Auswertung mit Profil, Blutwert-Empfehlungen und nächsten Schritten
              — als übersichtliche E-Mail, die du jederzeit nachschlagen kannst. Außerdem wirst du als Erste
              benachrichtigt, wenn Aera Health startet.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { icon: "science", text: "Dein Hormonprofil" },
            { icon: "lab_panel", text: "Empfohlene Blutwerte" },
            { icon: "checklist", text: "Nächste Schritte" },
            { icon: "notifications", text: "Früher Zugang zu Aera" },
          ].map((item) => (
            <span
              key={item.text}
              className="inline-flex items-center gap-1.5 bg-primary/8 text-primary px-3 py-1.5 rounded-full text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quiz-email" className="block text-sm font-semibold text-on-surface mb-2">
              Deine E-Mail-Adresse
            </label>
            <input
              id="quiz-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  consent ? "bg-primary border-primary" : "border-outline-variant group-hover:border-primary/60"
                }`}
              >
                {consent && <span className="material-symbols-outlined text-on-primary text-xs">check</span>}
              </div>
            </div>
            <span className="text-sm text-on-surface-variant font-body leading-relaxed">
              Ich stimme zu, dass Aera Health meine Angaben und mein Ergebnis speichert und mir meine
              Auswertung sowie Updates per E-Mail sendet. Ich kann mich jederzeit abmelden.{" "}
              <a href="/datenschutz" className="text-primary underline hover:opacity-70" target="_blank">
                Datenschutz
              </a>
            </span>
          </label>

          {errorMsg && (
            <p className="text-sm text-error font-body">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={!isValid || state === "loading"}
            className={`w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-base transition-all ${
              !isValid || state === "loading"
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90 active:scale-[0.99]"
            }`}
          >
            {state === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                Wird gesendet…
              </span>
            ) : (
              "Ergebnis per E-Mail erhalten →"
            )}
          </button>

          <p className="text-center text-xs text-on-surface-variant font-body">
            Kostenlos · Kein Spam · Jederzeit abmeldbar
          </p>
        </form>
      </div>
    </section>
  );
}
