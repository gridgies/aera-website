"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

type Mode = "login" | "signup";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/companion";

  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error" | "duplicate" | "reset-sent">("idle");
  const [errorMsg, setErrorMsg] = useState(
    searchParams.get("error") === "verification_failed"
      ? "Der Bestätigungslink ist ungültig oder abgelaufen. Bitte registriere dich erneut."
      : ""
  );
  const [consent, setConsent] = useState(false);

  // Stable ref so useEffect doesn't re-run on every render
  const supabase = useRef(
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  ).current;

  // Redirect only if already signed in on mount
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) router.replace(redirect);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signup" && !consent) return;
    setState("loading");
    setErrorMsg("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm?next=${encodeURIComponent(redirect)}`,
        },
      });
      if (error) {
        if (error.message.toLowerCase().includes("already registered") || error.message.toLowerCase().includes("already exists")) {
          setState("duplicate");
        } else {
          setState("error");
          setErrorMsg(error.message);
        }
      } else {
        setState("success");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setState("error");
        setErrorMsg(error.message);
      } else {
        router.replace(redirect);
      }
    }
  };

  const handleForgotPassword = async () => {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/confirm?next=/companion`,
    });
    setState("reset-sent");
  };

  if (state === "duplicate") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">person</span>
          </div>
          <h1 className="text-2xl font-headline font-bold text-on-surface mb-3">
            Du hast bereits ein Konto
          </h1>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
            Die E-Mail-Adresse <strong>{email}</strong> ist bereits bei Aera registriert.
            Melde dich einfach an oder setze dein Passwort zurück.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setMode("login"); setState("idle"); setErrorMsg(""); }}
              className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm font-body hover:opacity-90 transition-all"
            >
              Jetzt anmelden →
            </button>
            <button
              onClick={handleForgotPassword}
              className="w-full border border-outline-variant text-on-surface-variant py-3.5 rounded-xl font-semibold text-sm font-body hover:border-primary hover:text-primary transition-all"
            >
              Passwort vergessen?
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (state === "reset-sent") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
          </div>
          <h1 className="text-2xl font-headline font-bold text-on-surface mb-3">
            E-Mail gesendet
          </h1>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Wir haben dir einen Link zum Zurücksetzen deines Passworts an <strong>{email}</strong> geschickt.
            Schau in dein Postfach (und ggf. den Spam-Ordner).
          </p>
        </div>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fbf9f4" }}>
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">mark_email_read</span>
          </div>
          <h1 className="text-2xl font-headline font-bold text-on-surface mb-3">
            Bestätige deine E-Mail
          </h1>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Wir haben dir einen Bestätigungslink an <strong>{email}</strong> geschickt.
            Klick den Link, um dein Konto zu aktivieren und dich anzumelden.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fbf9f4" }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="font-headline text-3xl font-bold text-primary">Aera</span>
          </Link>
          <p className="text-on-surface-variant font-body text-sm mt-2">
            {mode === "signup"
              ? "Erstelle dein Konto für Aera Companion (Beta)"
              : "Willkommen zurück"}
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex bg-surface-container rounded-full p-1 mb-6">
          {(["signup", "login"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setState("idle"); setErrorMsg(""); }}
              className={`flex-1 py-2 rounded-full text-sm font-body font-semibold transition-all ${
                mode === m
                  ? "bg-surface shadow text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {m === "signup" ? "Registrieren" : "Anmelden"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-1.5">
              E-Mail-Adresse
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-body text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-1.5">
              Passwort
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "signup" ? "Mindestens 8 Zeichen" : "Dein Passwort"}
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition font-body text-sm"
            />
          </div>

          {mode === "signup" && (
            <label className="flex items-start gap-3 cursor-pointer group">
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
                Ich akzeptiere die{" "}
                <Link href="/agb" className="text-primary underline" target="_blank">AGB</Link>{" "}
                und{" "}
                <Link href="/datenschutz" className="text-primary underline" target="_blank">Datenschutzerklärung</Link>{" "}
                und stimme ausdrücklich zu, dass meine <strong>Gesundheitsdaten</strong> (Hormonprofil,
                Symptome) zur KI-gestützten Begleitung verarbeitet und dafür an{" "}
                <strong>Anthropic (USA)</strong> übermittelt werden.
              </span>
            </label>
          )}

          {errorMsg && (
            <p className="text-sm text-error font-body">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={state === "loading" || (mode === "signup" && !consent)}
            className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm font-body transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                Bitte warten…
              </span>
            ) : mode === "signup" ? (
              "Konto erstellen →"
            ) : (
              "Anmelden →"
            )}
          </button>
        </form>

        <p className="text-center text-xs text-on-surface-variant font-body mt-6">
          {mode === "signup" ? "Bereits ein Konto?" : "Noch kein Konto?"}{" "}
          <button
            onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setState("idle"); }}
            className="text-primary underline"
          >
            {mode === "signup" ? "Anmelden" : "Registrieren"}
          </button>
        </p>
      </div>
    </div>
  );
}
