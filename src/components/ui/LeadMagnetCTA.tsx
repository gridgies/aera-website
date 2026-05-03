"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { trackWaitlistSignup } from "@/lib/analytics";

const DOWNLOAD_URL = "/downloads/blutwerte-schilddruese";
const SOURCE = "lead-magnet-tsh";
const SESSION_KEY = "aera_blutwerte_magnet";

function useLeadMagnetForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) setStatus("done");
  }, []);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, topic: SOURCE }),
        });
        if (res.status === 200 || res.status === 201) {
          trackWaitlistSignup(SOURCE);
          sessionStorage.setItem(SESSION_KEY, "1");
          setStatus("done");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [email]
  );

  return { email, setEmail, status, submit };
}

type Form = ReturnType<typeof useLeadMagnetForm>;

function FormFields({ form, buttonLabel = "Kostenlos herunterladen" }: { form: Form; buttonLabel?: string }) {
  if (form.status === "done") {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
        <div className="flex items-center gap-2 text-sm text-secondary">
          <span
            className="material-symbols-outlined text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span className="font-medium">Super! Du bist dabei.</span>
        </div>
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-base">download</span>
          PDF öffnen
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={form.submit} className="flex gap-2 flex-col sm:flex-row mt-4">
      <input
        type="email"
        required
        value={form.email}
        onChange={(e) => form.setEmail(e.target.value)}
        placeholder="Deine E-Mail-Adresse"
        className="flex-1 px-4 py-2.5 rounded-full bg-white border border-outline-variant/20 text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary/30 placeholder:text-on-surface-variant/40"
      />
      <button
        type="submit"
        disabled={form.status === "loading"}
        className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
      >
        {form.status === "loading" ? "…" : buttonLabel}
      </button>
      {form.status === "error" && (
        <p className="text-xs text-error mt-2 w-full">Fehler – bitte versuche es erneut.</p>
      )}
    </form>
  );
}

export function LeadMagnetCTA() {
  const form = useLeadMagnetForm();
  const [popupOpen, setPopupOpen] = useState(false);
  const exitShownRef = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShownRef.current && form.status !== "done") {
        exitShownRef.current = true;
        setPopupOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [form.status]);

  // Auto-close popup 2s after successful signup
  useEffect(() => {
    if (form.status === "done" && popupOpen) {
      const t = setTimeout(() => setPopupOpen(false), 2000);
      return () => clearTimeout(t);
    }
  }, [form.status, popupOpen]);

  return (
    <>
      {/* Inline CTA */}
      <div className="bg-secondary-container/30 border border-secondary/20 rounded-2xl p-6 sm:p-8 my-10">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-secondary text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              picture_as_pdf
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
              Kostenloser Download
            </p>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2 leading-snug">
              Die 5 wichtigsten Schilddrüsen-Blutwerte auf einen Blick
            </h3>
            <p className="text-sm text-on-surface-variant font-body mb-3 leading-relaxed">
              TSH allein reicht nicht. Hol dir die kompakte Referenztabelle mit allen 5 Werten,
              Normalwerten und der einen Frage, die du deiner Ärztin stellen solltest.
            </p>
            <ul className="text-xs text-on-surface-variant font-body space-y-1.5 mb-1">
              {[
                "TSH · fT3 · fT4 mit Optimal- und Normalwerten",
                "Anti-TPO & Anti-TG Antikörper (Hashimoto-Check)",
                "Wann messen lassen & was du fragen solltest",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-secondary shrink-0"
                    style={{ fontSize: "14px", fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <FormFields form={form} />
            <p className="text-[10px] text-on-surface-variant/40 mt-3 uppercase tracking-wider">
              Kein Spam. Jederzeit abmeldbar.
            </p>
          </div>
        </div>
      </div>

      {/* Exit-intent popup */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPopupOpen(false);
          }}
        >
          <div className="bg-surface rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Schließen"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-5">
              <span
                className="material-symbols-outlined text-secondary text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                picture_as_pdf
              </span>
            </div>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">
              Nimm diese Checkliste mit
            </h2>
            <p className="text-sm text-on-surface-variant font-body mb-1 leading-relaxed">
              Die 5 Schilddrüsen-Blutwerte, die du kennen solltest — als kompaktes PDF
              zum Ausdrucken oder Speichern.
            </p>
            <FormFields form={form} buttonLabel="Jetzt herunterladen" />
            <button
              onClick={() => setPopupOpen(false)}
              className="text-xs text-on-surface-variant/50 hover:text-on-surface-variant mt-4 block transition-colors"
            >
              Nein danke
            </button>
          </div>
        </div>
      )}
    </>
  );
}
