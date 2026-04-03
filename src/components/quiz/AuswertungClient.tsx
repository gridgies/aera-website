"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QuizAnswer } from "@/types";
import { berechneErgebnis, QuizResult, PROFILE_DEFINITIONS } from "@/lib/quizEngine";

function ProfilBadge({ label, color, textColor }: { label: string; color: string; textColor: string }) {
  return (
    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${color} ${textColor}`}>
      {label}
    </span>
  );
}

function ScoreBalken({
  label,
  score,
  maxScore,
  color,
}: {
  label: string;
  score: number;
  maxScore: number;
  color: string;
}) {
  const pct = Math.min(100, Math.round((score / maxScore) * 100));
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-body text-on-surface-variant">{label}</span>
        <span className="text-xs font-bold text-on-surface-variant">{pct}%</span>
      </div>
      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function AuswertungClient() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("aera_quiz_answers");
      if (raw) {
        const answers: QuizAnswer[] = JSON.parse(raw);
        if (answers.length > 0) {
          setResult(berechneErgebnis(answers));
        }
      }
    } catch {
      // Ungültige Daten ignorieren
    }
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Kein Quiz ausgefüllt → zum Check weiterleiten
  if (!result) {
    return (
      <div className="max-w-xl mx-auto px-6 pt-40 pb-32 text-center">
        <h1 className="text-3xl font-headline font-bold text-on-surface mb-4">
          Noch kein Symptom-Check durchgeführt
        </h1>
        <p className="text-on-surface-variant font-body mb-8">
          Beantworte zuerst die 5 Fragen, damit wir eine persönliche Auswertung für dich erstellen können.
        </p>
        <Link
          href="/check"
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Zum Symptom-Check
        </Link>
      </div>
    );
  }

  const { primary, secondary, scores, klarheit, noPattern, lowScore } = result;
  const maxScore = Math.max(...Object.values(scores));

  const profileColors: Record<string, string> = {
    P: "bg-amber-400",
    H: "bg-blue-400",
    C: "bg-violet-400",
    E: "bg-rose-400",
  };

  const profileLabels: Record<string, string> = {
    P: "Perimenopause",
    H: "Schilddrüse & Hashimoto",
    C: "Stress & HPA-Achse",
    E: "Östrogendominanz",
  };

  // No pattern: all-zero or near-zero answers → reassuring result, no diagnosis
  if (noPattern) {
    return (
      <div className="min-h-screen">
        <section className="px-6 max-w-4xl mx-auto pt-40 pb-16">
          <div className="rounded-3xl p-10 md:p-14 bg-teal-50">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 text-teal-700 opacity-70">
              Deine persönliche Auswertung
            </span>
            <h1 className="text-3xl md:text-4xl font-headline font-bold leading-tight mb-4 text-teal-800">
              Kein auffälliges hormonelles Muster
            </h1>
            <p className="text-lg font-body leading-relaxed max-w-2xl text-teal-800 opacity-80">
              Deine Antworten zeigen kein klares Signal für eine hormonelle Dysbalance – das ist eine gute Nachricht.
            </p>
          </div>
        </section>

        <section className="px-6 max-w-4xl mx-auto pb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-2xl font-extralight text-teal-600">check_circle</span>
              <h2 className="text-xl font-headline font-bold text-on-surface">Was das bedeutet</h2>
            </div>
            <p className="text-sm text-on-surface-variant font-body leading-relaxed">
              Basierend auf deinen Antworten gibt es aktuell keine starken Hinweise auf Perimenopause, Hashimoto, eine Stresshormon-Dysbalance oder Östrogendominanz. Das bedeutet nicht, dass du keine Beschwerden haben kannst – aber die klassischen Symptommuster dieser Erkrankungen treten in deinen Antworten nicht deutlich hervor.
            </p>
          </div>
          <div className="bg-surface-container-low rounded-3xl p-8">
            <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Empfehlung</h2>
            <ul className="space-y-3">
              {[
                "Falls du trotzdem Beschwerden hast, die dich belasten, besprich diese mit deiner Ärztin oder deinem Arzt.",
                "Hormonelle Veränderungen entwickeln sich manchmal langsam. Ein jährlicher Check (TSH, Hormonstatus) kann sinnvoll sein.",
                "Du kannst den Check jederzeit wiederholen, wenn sich deine Symptome verändern.",
              ].map((text) => (
                <li key={text} className="flex gap-3 text-sm text-on-surface-variant font-body">
                  <span className="material-symbols-outlined text-base font-extralight flex-shrink-0 mt-0.5 text-teal-600">
                    arrow_forward
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 max-w-4xl mx-auto pb-16">
          <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Zur Information</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/themen" className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary font-extralight text-xl mb-3 block">menu_book</span>
              <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors mb-1">Alle Gesundheitsthemen</p>
              <p className="text-xs text-on-surface-variant font-body">Menopause, Hashimoto, Schilddrüse & Hormone</p>
            </Link>
            <Link href="/fragen" className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary font-extralight text-xl mb-3 block">help</span>
              <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors mb-1">Häufige Fragen</p>
              <p className="text-xs text-on-surface-variant font-body">Medizinisch fundierte Antworten</p>
            </Link>
            <Link href="/check" className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary font-extralight text-xl mb-3 block">replay</span>
              <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors mb-1">Check wiederholen</p>
              <p className="text-xs text-on-surface-variant font-body">Andere Antworten ausprobieren</p>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 max-w-4xl mx-auto pt-40 pb-16">
        <div className={`rounded-3xl p-10 md:p-14 ${primary.color}`}>
          <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 ${primary.textColor} opacity-70`}>
            Deine persönliche Auswertung
          </span>
          <h1 className={`text-3xl md:text-4xl font-headline font-bold leading-tight mb-4 ${primary.textColor}`}>
            {primary.titel}
          </h1>
          <p className={`text-lg font-body leading-relaxed max-w-2xl ${primary.textColor} opacity-80`}>
            {lowScore
              ? `Deine Antworten könnten auf ${primary.titel} hinweisen – das Signal ist jedoch schwach und muss ärztlich abgeklärt werden.`
              : primary.untertitel}
          </p>

          {/* Klarheits-Indikator */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className={`relative w-16 h-16`}>
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="transparent" stroke="currentColor" strokeWidth="10" className="opacity-20" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="263.8"
                    strokeDashoffset={263.8 - (263.8 * klarheit) / 100}
                    className={primary.textColor}
                  />
                </svg>
                <div className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${primary.textColor}`}>
                  {klarheit}%
                </div>
              </div>
            </div>
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest ${primary.textColor} opacity-60 mb-0.5`}>
                Übereinstimmung
              </p>
              <p className={`text-sm font-body ${primary.textColor} opacity-80`}>
                {klarheit >= 60
                  ? "Starkes Signal – deine Symptome passen klar zu diesem Profil"
                  : klarheit >= 40
                  ? "Klares Muster – typisch für diesen Hormontyp"
                  : "Gemischtes Bild – mehrere Faktoren spielen eine Rolle"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Low-score notice */}
      {lowScore && (
        <section className="px-6 max-w-4xl mx-auto pb-8">
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex gap-4 items-start">
            <span className="material-symbols-outlined text-on-surface-variant font-extralight flex-shrink-0 mt-0.5">info</span>
            <div>
              <p className="text-sm font-bold text-on-surface mb-1">Schwaches Signal – Ergebnis vorläufig</p>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Deine Symptome sind nur leicht ausgeprägt. Dieses Profil ist eine erste Orientierung, aber kein Hinweis auf eine gesicherte hormonelle Störung. Bitte besprich deine Beschwerden mit einer Ärztin oder einem Arzt, bevor du Schlussfolgerungen ziehst.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 max-w-4xl mx-auto pb-16 grid md:grid-cols-2 gap-8">
        {/* Hauptprofil: Beschreibung */}
        <div className="bg-surface-container-low rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className={`material-symbols-outlined text-2xl font-extralight ${primary.textColor}`}>
              {primary.icon}
            </span>
            <h2 className="text-xl font-headline font-bold text-on-surface">Was das bedeutet</h2>
          </div>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed">
            {primary.beschreibung}
          </p>
        </div>

        {/* Signale aus den Antworten */}
        <div className="bg-surface-container-low rounded-3xl p-8">
          <h2 className="text-xl font-headline font-bold text-on-surface mb-6">
            Signale aus deinen Antworten
          </h2>
          <ul className="space-y-3">
            {primary.signale.map((signal) => (
              <li key={signal} className="flex gap-3 text-sm text-on-surface-variant font-body">
                <span className={`material-symbols-outlined text-base font-extralight flex-shrink-0 mt-0.5 ${primary.textColor}`}>
                  check_circle
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Empfohlene Bluttests */}
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary font-extralight">biotech</span>
            <h2 className="text-xl font-headline font-bold text-on-surface">Empfohlene Bluttests</h2>
          </div>
          <p className="text-xs text-on-surface-variant font-body mb-8">
            Diese Werte helfen dir und deiner Ärztin, das Bild zu vervollständigen. Zeige diese Liste beim nächsten Termin.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {primary.bluttests.map((test) => (
              <div key={test.wert} className="flex gap-3 p-4 bg-surface-container rounded-2xl">
                <span className="material-symbols-outlined text-primary font-extralight text-lg flex-shrink-0 mt-0.5">
                  lab_panel
                </span>
                <div>
                  <p className="font-bold text-sm text-on-surface">{test.wert}</p>
                  <p className="text-xs text-on-surface-variant font-body mt-0.5 leading-relaxed">{test.warum}</p>
                </div>
              </div>
            ))}
          </div>
          <aside className="mt-6 p-4 bg-surface-container rounded-xl text-xs text-on-surface-variant font-body flex gap-2 items-start">
            <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 mt-0.5">info</span>
            Diese Auswertung ersetzt keine ärztliche Diagnose. Sie dient als erste Orientierung und Gesprächsgrundlage mit medizinischem Fachpersonal.
          </aside>
        </div>
      </section>

      {/* Nächste Schritte */}
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Nächste Schritte</h2>
        <div className="space-y-4">
          {primary.naechsteSchritte.map((schritt, i) => (
            <div key={i} className="flex gap-4 p-5 bg-surface-container-low rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed pt-1">{schritt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hormon-Profil Übersicht */}
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <div className="bg-surface-container-low rounded-3xl p-8">
          <h2 className="text-xl font-headline font-bold text-on-surface mb-2">Dein vollständiges Profil</h2>
          <p className="text-xs text-on-surface-variant font-body mb-8">
            Alle vier Hormon-Dimensionen im Überblick – ein Wert über 50% deutet auf ein relevantes Muster hin.
          </p>
          <div className="space-y-5">
            {(Object.keys(scores) as Array<keyof typeof scores>).map((key) => (
              <ScoreBalken
                key={key}
                label={profileLabels[key]}
                score={scores[key]}
                maxScore={20}
                color={profileColors[key]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sekundär-Profil */}
      {secondary && (
        <section className="px-6 max-w-4xl mx-auto pb-16">
          <div className={`rounded-3xl p-8 ${secondary.color}`}>
            <ProfilBadge label="Sekundäres Signal" color="bg-white/30" textColor={secondary.textColor} />
            <h2 className={`text-xl font-headline font-bold mt-3 mb-3 ${secondary.textColor}`}>
              {secondary.titel}
            </h2>
            <p className={`text-sm font-body leading-relaxed mb-6 ${secondary.textColor} opacity-80`}>
              Neben deinem Hauptprofil zeigen deine Antworten auch Hinweise auf {secondary.untertitel.toLowerCase()}.
              Das ist häufig – mehrere Hormonsysteme beeinflussen sich gegenseitig.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {secondary.signale.slice(0, 2).map((signal) => (
                <div key={signal} className={`flex gap-2 text-xs font-body ${secondary.textColor} opacity-80`}>
                  <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">arrow_forward</span>
                  {signal}
                </div>
              ))}
            </div>
            <Link
              href={`/${secondary.conditionSlug}`}
              className={`inline-flex items-center gap-2 mt-6 text-sm font-bold ${secondary.textColor} hover:underline`}
            >
              Mehr zu {PROFILE_DEFINITIONS[secondary.key].titel}
              <span className="material-symbols-outlined text-sm font-extralight">arrow_forward</span>
            </Link>
          </div>
        </section>
      )}

      {/* Mehr lesen */}
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Passende Inhalte für dich</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href={`/${primary.conditionSlug}`}
            className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-primary font-extralight text-xl mb-3 block">menu_book</span>
            <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors mb-1">
              Ratgeber: {profileLabels[primary.key]}
            </p>
            <p className="text-xs text-on-surface-variant font-body">Hintergründe, Symptome und Behandlung</p>
          </Link>
          <Link
            href="/fragen"
            className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-primary font-extralight text-xl mb-3 block">help</span>
            <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors mb-1">
              Häufige Fragen & Antworten
            </p>
            <p className="text-xs text-on-surface-variant font-body">Medizinisch fundierte Antworten</p>
          </Link>
          <Link
            href="/check"
            className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-primary font-extralight text-xl mb-3 block">replay</span>
            <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors mb-1">
              Check wiederholen
            </p>
            <p className="text-xs text-on-surface-variant font-body">Andere Antworten ausprobieren</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-container py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold text-on-primary-container mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-on-primary-container/80 font-body mb-8 leading-relaxed">
            Trag dich in die Warteliste ein und sei unter den Ersten, die Zugang zu personalisierten Empfehlungen, Laborauswertungen und Expert:innen-Gesprächen bekommen.
          </p>
          <Link
            href="/#warteliste"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Zur Warteliste
          </Link>
        </div>
      </section>
    </div>
  );
}
