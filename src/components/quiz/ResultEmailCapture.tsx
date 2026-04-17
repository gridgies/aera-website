"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { QuizAnswer } from "@/types";
import { QuizResult } from "@/lib/quizEngine";

interface Props {
  result: QuizResult;
  answers: QuizAnswer[];
}

type Mode = "companion" | "email-only";
type FormState = "idle" | "loading" | "success" | "error";

function getSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// ─── Companion signup mode ────────────────────────────────────────────────────
function CompanionSignup({ result, answers }: Props) {
  const router = useRouter();
  const [vorname, setVorname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValid = vorname.trim() && email.includes("@") && password.length >= 8 && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setState("loading");
    setErrorMsg("");

    try {
      // 1. Create auth user + write profile (server-side, auto-confirms email)
      const signupRes = await fetch("/api/companion/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vorname: vorname.trim(),
          email,
          password,
          profile: {
            primaryKey:    result.primary.key,
            secondaryKey:  result.secondary?.key ?? null,
            endoFlag:      result.endoFlag,
            poiWarning:    result.poiWarning,
            hpOverlap:     result.hpOverlap,
            scores:        result.scores,
            answers,
            ageGroup:      result.ageGroup,
            klarheit:      result.klarheit,
          },
        }),
      });

      if (!signupRes.ok) {
        const data = await signupRes.json();
        throw new Error(data.error ?? "Anmeldung fehlgeschlagen");
      }

      // 2. Sign in to create a session cookie
      const supabase = getSupabase();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) throw new Error(signInError.message);

      // 3. Send welcome email (reuse existing quiz-submit route)
      await fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          answers,
          result: {
            primaryKey:   result.primary.key,
            primaryTitel: result.primary.titel,
            klarheit:     result.klarheit,
            ageGroup:     result.ageGroup,
            scores:       result.scores,
            noPattern:    result.noPattern,
            lowScore:     result.lowScore,
          },
        }),
      });

      // 4. Go to companion
      router.push("/companion");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
    }
  };

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary">psychology</span>
        </div>
        <div>
          <h2 className="text-xl font-headline font-bold text-on-surface mb-1">
            Companion freischalten
          </h2>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Deine KI-Begleiterin kennt dein Hormonprofil und beantwortet deine Fragen
            zu Blutwerten, Symptomen und nächsten Schritten – jederzeit, kostenlos.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { icon: "chat", text: "Persönlicher Chat" },
          { icon: "science", text: "Blutwerte erklären" },
          { icon: "calendar_month", text: "Zyklusbegleitung" },
          { icon: "lock", text: "Datenschutz first" },
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

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="c-vorname" className="block text-sm font-semibold text-on-surface mb-1.5">
            Vorname
          </label>
          <input
            id="c-vorname"
            type="text"
            required
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            placeholder="Wie heißt du?"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-body text-sm"
          />
        </div>

        <div>
          <label htmlFor="c-email" className="block text-sm font-semibold text-on-surface mb-1.5">
            E-Mail-Adresse
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-body text-sm"
          />
        </div>

        <div>
          <label htmlFor="c-password" className="block text-sm font-semibold text-on-surface mb-1.5">
            Passwort
          </label>
          <div className="relative">
            <input
              id="c-password"
              type={showPw ? "text" : "password"}
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mindestens 8 Zeichen"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-body text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-surface transition-colors"
              aria-label={showPw ? "Passwort verbergen" : "Passwort anzeigen"}
            >
              <span className="material-symbols-outlined text-lg">
                {showPw ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer group pt-1">
          <div className="relative mt-0.5 flex-shrink-0">
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
          <span className="text-xs text-on-surface-variant font-body leading-relaxed">
            Ich stimme zu, dass Aera Health meine Angaben, mein Hormonprofil und meine
            Gesprächsverläufe speichert und mich per E-Mail informiert.{" "}
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
              Konto wird erstellt…
            </span>
          ) : (
            "Companion freischalten →"
          )}
        </button>

        <p className="text-center text-xs text-on-surface-variant font-body">
          Kostenlos · Keine Kreditkarte · Jederzeit kündbar
        </p>
      </form>
    </div>
  );
}

// ─── Email-only mode (existing flow) ─────────────────────────────────────────
function EmailOnlyForm({ result, answers }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<FormState>("idle");
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
            primaryKey:   result.primary.key,
            primaryTitel: result.primary.titel,
            klarheit:     result.klarheit,
            ageGroup:     result.ageGroup,
            scores:       result.scores,
            noPattern:    result.noPattern,
            lowScore:     result.lowScore,
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
      <div className="bg-surface-container-low rounded-3xl p-8 text-center">
        <span className="material-symbols-outlined text-primary text-3xl mb-3 block">mark_email_read</span>
        <p className="font-body text-sm text-on-surface-variant">
          Deine Auswertung ist unterwegs – check dein Postfach (und ggf. den Spam-Ordner).
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low rounded-3xl p-6">
      <h3 className="font-body text-sm font-semibold text-on-surface mb-4">
        Nur Auswertung per E-Mail
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-body text-sm"
        />

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 flex-shrink-0">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="sr-only" />
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                consent ? "bg-primary border-primary" : "border-outline-variant group-hover:border-primary/60"
              }`}
            >
              {consent && <span className="material-symbols-outlined text-on-primary text-xs">check</span>}
            </div>
          </div>
          <span className="text-xs text-on-surface-variant font-body leading-relaxed">
            Ich stimme zu, dass Aera Health meine Angaben und mein Ergebnis speichert und mir
            meine Auswertung sowie Updates per E-Mail sendet.{" "}
            <a href="/datenschutz" className="text-primary underline" target="_blank">Datenschutz</a>
          </span>
        </label>

        {errorMsg && <p className="text-sm text-error font-body">{errorMsg}</p>}

        <button
          type="submit"
          disabled={!isValid || state === "loading"}
          className={`w-full border border-primary text-primary py-3 rounded-xl font-semibold text-sm transition-all ${
            !isValid || state === "loading"
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-primary/5"
          }`}
        >
          {state === "loading" ? "Wird gesendet…" : "Ergebnis per E-Mail →"}
        </button>
      </form>
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────
export function ResultEmailCapture({ result, answers }: Props) {
  const [mode, setMode] = useState<Mode>("companion");

  return (
    <section className="px-6 max-w-4xl mx-auto pb-16 space-y-4">
      {/* Mode tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode("companion")}
          className={`flex-1 py-2.5 rounded-full text-sm font-semibold font-body transition-all border ${
            mode === "companion"
              ? "bg-primary text-on-primary border-primary"
              : "border-outline-variant text-on-surface-variant hover:border-primary/40"
          }`}
        >
          Companion freischalten
        </button>
        <button
          onClick={() => setMode("email-only")}
          className={`flex-1 py-2.5 rounded-full text-sm font-semibold font-body transition-all border ${
            mode === "email-only"
              ? "bg-primary text-on-primary border-primary"
              : "border-outline-variant text-on-surface-variant hover:border-primary/40"
          }`}
        >
          Nur per E-Mail
        </button>
      </div>

      {mode === "companion" ? (
        <CompanionSignup result={result} answers={answers} />
      ) : (
        <EmailOnlyForm result={result} answers={answers} />
      )}
    </section>
  );
}
