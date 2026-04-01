"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const SUBJECT_OPTIONS = [
  { value: "allgemein", label: "Allgemeine Anfrage" },
  { value: "warteliste", label: "Frage zur Warteliste" },
  { value: "presse", label: "Presse & Medien" },
  { value: "kooperation", label: "Kooperation & Partnerschaft" },
  { value: "datenschutz", label: "Datenschutz & Deine Daten" },
  { value: "sonstiges", label: "Sonstiges" },
];

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Ein Fehler ist aufgetreten.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Verbindungsfehler. Bitte versuche es erneut.");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
            Schreib uns.
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed">
            Fragen, Feedback oder eine Kooperation? Wir freuen uns von dir zu hören und
            melden uns so schnell wie möglich bei dir.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Kontakt-Info Links */}
          <aside className="md:col-span-2 space-y-8">
            <div className="bg-surface-container-low rounded-3xl p-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container text-lg">mail</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">E-Mail</p>
                  <a
                    href="mailto:hello@aerahealth.de"
                    className="text-primary font-semibold hover:underline underline-offset-4"
                  >
                    hello@aerahealth.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-lg">schedule</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">Antwortzeit</p>
                  <p className="text-on-surface font-medium">Innerhalb von 2 Werktagen</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container text-lg">location_on</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">Standort</p>
                  <p className="text-on-surface font-medium">[STADT], Deutschland</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-container rounded-3xl p-8">
              <span className="material-symbols-outlined text-on-primary-container text-2xl mb-4 block">
                favorite
              </span>
              <h3 className="text-lg font-headline font-bold text-on-primary-container mb-3">
                Noch auf der Warteliste?
              </h3>
              <p className="text-on-primary-container/80 text-sm font-body leading-relaxed mb-4">
                Trag dich ein und erhalte als Erste Zugang, wenn Aera startet.
              </p>
              <a
                href="/#warteliste"
                className="inline-flex items-center gap-2 text-on-primary-container font-bold text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Zur Warteliste
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </aside>

          {/* Formular */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="bg-secondary-container rounded-3xl p-16 text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span
                    className="material-symbols-outlined text-on-secondary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">
                  Nachricht gesendet!
                </h2>
                <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                  Vielen Dank für deine Nachricht. Wir melden uns innerhalb von 2 Werktagen bei dir.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-container-lowest rounded-3xl p-10 md:p-12 shadow-sm space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dein Name"
                      className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 font-body text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="deine@email.de"
                      className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 font-body text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2"
                  >
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface-variant font-body text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Bitte wählen…</option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Wie können wir dir helfen?"
                    className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 font-body text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-error text-sm text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/10 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
                </button>

                <p className="text-[10px] text-on-surface-variant/50 text-center uppercase tracking-widest">
                  Deine Daten werden gemäß unserer{" "}
                  <a href="/datenschutz" className="underline underline-offset-4 hover:text-primary transition-colors">
                    Datenschutzerklärung
                  </a>{" "}
                  verarbeitet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
