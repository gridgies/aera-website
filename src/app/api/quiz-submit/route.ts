import { NextRequest, NextResponse } from "next/server";
import { QUIZ_QUESTIONS } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────
interface QuizSubmitBody {
  email: string;
  answers: { questionId: number; selectedOption: number | number[] }[];
  result: {
    primaryKey: string;
    primaryTitel: string;
    klarheit: number;
    ageGroup: string;
    scores: Record<string, number>;
    noPattern: boolean;
    lowScore: boolean;
  };
}

// ─── Brand colors (from tailwind.config.ts) ───────────────────────────────────
const BRAND = {
  primary: "#6f5b53",
  primaryContainer: "#f8ddd2",
  background: "#fbf9f4",
  surfaceLow: "#f5f4ee",
  surface: "#efeee8",
  onSurface: "#31332e",
  onSurfaceVariant: "#5e605a",
  outlineVariant: "#b2b2ab",
  onPrimary: "#fff7f5",
};

// Per-profile accent colors (hero section only)
const PROFILE_ACCENT: Record<string, { bg: string; border: string; text: string; light: string }> = {
  PP: { bg: "#92400e", border: "#d97706", text: "#ffffff", light: "#fffbeb" }, // amber — perimenopause
  M:  { bg: "#9a3412", border: "#ea580c", text: "#ffffff", light: "#fff7ed" }, // orange — menopause
  PM: { bg: "#854d0e", border: "#ca8a04", text: "#ffffff", light: "#fefce8" }, // yellow — postmenopause
  H:  { bg: "#1e40af", border: "#2563eb", text: "#ffffff", light: "#eff6ff" }, // blue — hashimoto
  C:  { bg: "#5b21b6", border: "#7c3aed", text: "#ffffff", light: "#f5f3ff" }, // violet — cortisol
  E:  { bg: "#9f1239", border: "#e11d48", text: "#ffffff", light: "#fff1f2" }, // rose — estrogen
  A:  { bg: "#0f5e57", border: "#0d9488", text: "#ffffff", light: "#f0fdfa" }, // teal — PCOS/androgen
  Fe: { bg: "#991b1b", border: "#dc2626", text: "#ffffff", light: "#fef2f2" }, // red — iron deficiency
};

// ─── Derive signals from the user's actual selected answers ──────────────────
function buildSignalsFromAnswers(answers: QuizSubmitBody["answers"]): string[] {
  const signals: string[] = [];

  for (const answer of answers) {
    if (answer.questionId === 1) continue; // skip age question — not a symptom
    const question = QUIZ_QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) continue;

    const indices = Array.isArray(answer.selectedOption)
      ? answer.selectedOption
      : [answer.selectedOption];

    for (const idx of indices) {
      const option = question.options[idx];
      if (!option) continue;
      // Only include options that actually carry symptom scores (neutral / "none" options have all-zero scores)
      const hasScore = Object.values(option.scores).some((v) => v > 0);
      if (hasScore) {
        signals.push(`${option.label} – ${option.description}`);
      }
    }
  }

  return signals;
}

// Per-profile blood tests and next steps (static, curated medical content)
const PROFILE_CONTENT: Record<string, {
  bluttests: { wert: string; warum: string }[];
  naechsteSchritte: string[];
  conditionUrl: string;
}> = {
  PP: {
    bluttests: [
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Zeigt die Eierstockreserve – frühester Marker der Perimenopause" },
      { wert: "Progesteron (Tag 19–22)", warum: "Sinkt als erstes Hormon in der frühen Perimenopause" },
      { wert: "FSH & Östradiol (E2)", warum: "FSH beginnt zu steigen, Östradiol schwankt stark" },
      { wert: "TSH, fT3, fT4", warum: "Schilddrüse ausschließen – überschneidet sich mit frühen Symptomen" },
      { wert: "Ferritin & Vitamin D", warum: "Häufige Mangelzustände, die Beschwerden verstärken" },
    ],
    naechsteSchritte: [
      "Gynäkologin ansprechen: AMH und Progesteron messen lassen – frühzeitige Diagnose erleichtert alles",
      "Symptomtagebuch führen: Zyklusveränderungen, Stimmung, Schlaf dokumentieren",
      "Hormontherapie frühzeitig besprechen: Frühzeitiger Beginn zeigt bessere Langzeitergebnisse",
      "Lebensstil als Fundament: Bewegung, Schlafhygiene und Stressreduktion mildern frühe Symptome",
    ],
    conditionUrl: "https://www.aerahealth.de/menopause",
  },
  M: {
    bluttests: [
      { wert: "FSH (follikelstimulierend)", warum: "Wichtigster Wechseljahres-Marker – deutlich erhöht" },
      { wert: "Östradiol (E2)", warum: "Zeigt den aktuellen Östrogenstatus; schwankt stark in der Menopause" },
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Misst die verbleibende Eierstockreserve" },
      { wert: "TSH, fT3, fT4", warum: "Schilddrüse ausschließen – viele Symptome überschneiden sich" },
      { wert: "Vitamin D & Calcium", warum: "Knochenschutz in den Wechseljahren besonders wichtig" },
    ],
    naechsteSchritte: [
      "Gynäkologin ansprechen – explizit nach FSH, Östradiol und AMH fragen",
      "Symptomtagebuch führen: Wann treten Hitzewallungen auf?",
      "Hormontherapie (HRT) besprechen: Aktuelle Leitlinien sehen HRT als sicher und wirksam für gesunde Frauen unter 60",
      "Pflanzliche Alternativen: Traubsilberkerze und Rotklee-Isoflavone haben die stärkste Evidenz",
    ],
    conditionUrl: "https://www.aerahealth.de/menopause",
  },
  PM: {
    bluttests: [
      { wert: "Östradiol (E2, Basislinie)", warum: "Ausgangswert für HRT-Entscheidung und Symptomkorrelation" },
      { wert: "FSH", warum: "Bestätigt Postmenopause-Status (typisch: FSH >40 mIU/ml)" },
      { wert: "Calcium & Vitamin D (25-OH)", warum: "Knochenstoffwechsel – Zielwert Vitamin D >40 ng/ml" },
      { wert: "Cholesterin, HDL, LDL", warum: "Östrogenmangel verschlechtert kardiovaskuläres Risikoprofil" },
      { wert: "TSH", warum: "Schilddrüse prüfen – Fehlfunktionen häufig in der Postmenopause" },
    ],
    naechsteSchritte: [
      "Knochendichte messen (DXA-Scan): Goldstandard für Osteoporose-Früherkennung",
      "Kardiovaskuläre Risikofaktoren besprechen: Cholesterin, Blutdruck, Gewicht",
      "HRT-Entscheidung fundiert treffen: Nutzen für Knochen, Herz und Lebensqualität in ersten 10 Jahren am höchsten",
      "Vitamin D + Calcium täglich: Basis für Knochen- und Immungesundheit",
    ],
    conditionUrl: "https://www.aerahealth.de/menopause",
  },
  P: {
    bluttests: [
      { wert: "FSH (follikelstimulierend)", warum: "Wichtigster Perimenopause-Marker – steigt bei nachlassender Eierstockfunktion" },
      { wert: "Östradiol (E2)", warum: "Zeigt den aktuellen Östrogenstatus; schwankt stark in der Perimenopause" },
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Misst die Eierstockreserve" },
      { wert: "TSH, fT3, fT4", warum: "Schilddrüse ausschließen – viele Symptome überschneiden sich" },
      { wert: "Ferritin & Vitamin D", warum: "Häufige Mangelzustände, die Beschwerden verstärken" },
    ],
    naechsteSchritte: [
      "Gynäkologin ansprechen – explizit nach FSH, Östradiol und AMH fragen",
      "Symptomtagebuch führen: Wann treten Hitzewallungen auf? Zusammenhang mit Zyklus?",
      "Hormontherapie (HRT) besprechen: Aktuelle Leitlinien (DGGG 2020) sehen HRT als sicher und wirksam",
      "Pflanzliche Alternativen prüfen: Traubsilberkerze und Rotklee-Isoflavone haben die stärkste Evidenz",
    ],
    conditionUrl: "https://www.aerahealth.de/menopause",
  },
  H: {
    bluttests: [
      { wert: "TSH", warum: "Erstes Screening – allein aber nicht ausreichend" },
      { wert: "fT3 & fT4", warum: "Die aktiven Hormone; TSH kann normal sein, obwohl fT3 zu niedrig ist" },
      { wert: "TPO-Antikörper", warum: "Entscheidender Hashimoto-Marker; bei 90 % der Betroffenen erhöht" },
      { wert: "Ferritin", warum: "Eisenspeicher unter 70 µg/l verstärkt Müdigkeit und Haarausfall erheblich" },
      { wert: "Vitamin D (25-OH)", warum: "Mangel verstärkt Autoimmunaktivität; Zielwert >40 ng/ml" },
    ],
    naechsteSchritte: [
      "Beim Arzt explizit TPO-Antikörper anfragen – TSH allein schließt Hashimoto nicht aus",
      "Selen 200 µg täglich: Metaanalysen zeigen signifikante Senkung der TPO-Antikörper",
      "Vitamin D optimieren: Zielwert 40–60 ng/ml",
      "Glutenfreier Selbstversuch für 3 Monate erwägen",
    ],
    conditionUrl: "https://www.aerahealth.de/hashimoto",
  },
  C: {
    bluttests: [
      { wert: "Cortisol-Tagesprofil (Speichel, 4 Punkte)", warum: "Zeigt den Tagesrhythmus – aussagekräftiger als ein Bluttest" },
      { wert: "DHEA-S", warum: "Gegen-Hormon zu Cortisol; sinkt bei chronischem Stress" },
      { wert: "Nüchterninsulin & HbA1c", warum: "Cortisol erhöht Blutzucker; Insulinresistenz ist häufige Folge" },
      { wert: "Progesteron (Tag 19–22)", warum: "Pregnenolon-Steal reduziert Progesteronproduktion unter Stress" },
      { wert: "Magnesium (intrazellulär)", warum: "Cortisol erschöpft Magnesiumspeicher; Mangel verstärkt Angst" },
    ],
    naechsteSchritte: [
      "Cortisol-Tagesprofil durchführen: Morgens, mittags, abends, nachts (Speicheltest, z.B. Cerascreen)",
      "Magnesiumglycinat abends: 300–400 mg fördert GABA und entspannt das Nervensystem",
      "Ashwagandha: Adaptogen mit stärkster Cortisol-senkender Evidenz",
      "Schlafzeit auf 22–23 Uhr vorziehen: Nebennieren erholen sich hauptsächlich zwischen 22 und 2 Uhr",
    ],
    conditionUrl: "https://www.aerahealth.de/hormone",
  },
  E: {
    bluttests: [
      { wert: "Progesteron (Tag 19–22 des Zyklus)", warum: "Muss in der Lutealphase gemessen werden; Zielwert >10 ng/ml" },
      { wert: "Östradiol (E2, Tag 3–5)", warum: "Basismessung zu Zyklus-Beginn für Vergleich mit Lutealphase" },
      { wert: "LH & FSH", warum: "Verhältnis gibt Hinweis auf Eierstockreserve und Zyklusqualität" },
      { wert: "Testosteron & DHEA-S", warum: "Androgenüberschuss als Differentialdiagnose ausschließen" },
      { wert: "Schilddrüse (TSH, fT3, TPO)", warum: "Hashimoto stört Progesteronproduktion und Zykluslänge" },
    ],
    naechsteSchritte: [
      "Zyklusprotokoll führen: Symptome täglich notieren, um das Muster der Lutealphase zu erkennen",
      "Mönchspfeffer (Vitex agnus-castus): Metaanalysen zeigen Wirksamkeit bei PMS und Progesteronmangel",
      "Gynäkologin fragen: Bioidentisches Progesteron (Utrogest) – verschreibungspflichtig, sehr wirksam",
      "Lebergesundheit unterstützen: Die Leber baut Östrogen ab – weniger Alkohol, mehr Kreuzblütler",
    ],
    conditionUrl: "https://www.aerahealth.de/hormone",
  },
  A: {
    bluttests: [
      { wert: "Testosteron (gesamt + frei) & SHBG", warum: "Freies Testosteron ist der entscheidende Androgenmarker" },
      { wert: "LH:FSH-Verhältnis", warum: "Erhöhtes LH:FSH (>2:1) ist ein klassisches PCOS-Muster" },
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Bei PCOS oft deutlich erhöht (>5 ng/ml)" },
      { wert: "Nüchterninsulin & HbA1c", warum: "Insulinresistenz liegt bei ca. 70 % aller PCOS-Betroffenen vor" },
      { wert: "DHEA-S", warum: "Nebennieren-Androgen; wichtig zur Differenzierung der Androgenquelle" },
    ],
    naechsteSchritte: [
      "Gynäkologin mit PCOS-Erfahrung aufsuchen und die Rotterdam-Kriterien ansprechen",
      "Myo-Inositol (4 g/d) + D-Chiro-Inositol (400 mg/d): Stärkste nicht-medikamentöse Evidenz für PCOS (Unfer et al. 2017)",
      "Insulinsensitivität optimieren: Proteinreiches Frühstück, keine schnellen Kohlenhydrate morgens",
      "Spearmint-Tee 2× täglich: Randomisierte Studie zeigt Reduktion freier Androgene (Grant 2010)",
    ],
    conditionUrl: "https://www.aerahealth.de/hormone",
  },
  Fe: {
    bluttests: [
      { wert: "Ferritin", warum: "Der entscheidende Marker – nicht nur Hämoglobin! Zielwert >50 µg/l, bei Haarausfall >70 µg/l" },
      { wert: "Hämoglobin & Hämatokrit", warum: "Für die Schweregrad-Einschätzung; kann bei Ferritinmangel noch normal sein" },
      { wert: "Serum-Eisen & Transferrinsättigung", warum: "Bei Ferritin <20 µg/l zusätzlich messen" },
      { wert: "Vitamin B12 & Folsäure", warum: "Häufige Begleitmängel; verstärken Erschöpfung" },
      { wert: "TSH", warum: "Schilddrüsenunterfunktion und Eisenmangel treten häufig gemeinsam auf" },
    ],
    naechsteSchritte: [
      "Ferritin explizit anfragen – sag deiner Ärztin: Zielwert >50 µg/l, nicht nur Normbereich",
      "Eiseninfusion erwägen: Bei Ferritin <20 µg/l oder schlechter oraler Verträglichkeit deutlich effektiver",
      "Orales Eisen: Eisen-Bisglycinat bevorzugen (nicht Eisensulfat) – bessere Verträglichkeit",
      "Ursache klären: Starke Blutungen? Vegane Ernährung? Resorptionsstörung?",
    ],
    conditionUrl: "https://www.aerahealth.de/hormone",
  },
};

// ─── Plain-text version ───────────────────────────────────────────────────────
// Required alongside HTML to avoid spam filters. Mirrors the HTML structure.
function buildEmailText(body: QuizSubmitBody): string {
  const { result, answers } = body;
  const content = PROFILE_CONTENT[result.primaryKey] ?? PROFILE_CONTENT.H;
  const signals = buildSignalsFromAnswers(answers);

  const klarheitText =
    result.klarheit >= 60 ? "Starkes Signal" : result.klarheit >= 40 ? "Klares Muster" : "Erstes Orientierungsbild";

  const signalLines = signals.length > 0
    ? signals.map((s) => `  ✓ ${s}`).join("\n")
    : "  Keine spezifischen Symptome angegeben.";

  const testLines = content.bluttests
    .map((t) => `  • ${t.wert}: ${t.warum}`)
    .join("\n");

  const stepLines = content.naechsteSchritte
    .map((s, i) => `  ${i + 1}. ${s}`)
    .join("\n");

  return `Aera Health – Dein persönlicher Symptom-Check
==============================================

DEIN HORMONPROFIL: ${result.primaryTitel}
${klarheitText} · Übereinstimmung: ${result.klarheit}%

DEINE ANGABEN
${signalLines}

EMPFOHLENE BLUTTESTS
Zeige diese Liste bei deinem nächsten Arzttermin:
${testLines}

NÄCHSTE SCHRITTE
${stepLines}

Mehr erfahren: ${content.conditionUrl}

──────────────────────────────────────────────
Diese Auswertung ersetzt keine ärztliche Diagnose.
Sie dient als erste Orientierung und Gesprächsgrundlage.

Aera Health · aerahealth.de
Datenschutz: https://www.aerahealth.de/datenschutz
Impressum: https://www.aerahealth.de/impressum
`;
}

// ─── Email HTML template ──────────────────────────────────────────────────────
function buildEmailHtml(body: QuizSubmitBody): string {
  const { result, answers } = body;

  const accent = PROFILE_ACCENT[result.primaryKey] ?? PROFILE_ACCENT.H;
  const content = PROFILE_CONTENT[result.primaryKey] ?? PROFILE_CONTENT.H;

  const klarheitText =
    result.klarheit >= 60
      ? "Starkes Signal"
      : result.klarheit >= 40
      ? "Klares Muster"
      : "Erstes Orientierungsbild";

  // Signals derived from user's actual selected answers
  const signals = buildSignalsFromAnswers(answers);

  const testRows = content.bluttests
    .map(
      (t) =>
        `<tr>
          <td style="padding:10px 14px;font-weight:600;font-size:13px;color:${BRAND.onSurface};border-bottom:1px solid ${BRAND.outlineVariant};">${t.wert}</td>
          <td style="padding:10px 14px;font-size:13px;color:${BRAND.onSurfaceVariant};border-bottom:1px solid ${BRAND.outlineVariant};">${t.warum}</td>
        </tr>`
    )
    .join("");

  const stepRows = content.naechsteSchritte
    .map(
      (s, i) =>
        `<tr>
          <td style="padding:10px 0;vertical-align:top;width:32px;">
            <span style="display:inline-block;width:24px;height:24px;background:${BRAND.primary};color:${BRAND.onPrimary};border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;">${i + 1}</span>
          </td>
          <td style="padding:10px 0 10px 10px;color:${BRAND.onSurfaceVariant};font-size:13px;line-height:1.6;">${s}</td>
        </tr>`
    )
    .join("");

  const signalRows =
    signals.length > 0
      ? signals
          .map(
            (s) =>
              `<li style="margin-bottom:10px;padding:12px 14px;background:${BRAND.background};border-radius:8px;color:${BRAND.onSurfaceVariant};font-size:13px;line-height:1.5;list-style:none;">
                <span style="color:${BRAND.primary};font-weight:700;margin-right:6px;">✓</span>${s}
              </li>`
          )
          .join("")
      : `<li style="margin-bottom:0;color:${BRAND.onSurfaceVariant};font-size:13px;list-style:none;">Keine spezifischen Symptome angegeben.</li>`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dein Aera Symptom-Check: ${result.primaryTitel}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.background};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.background};padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:${BRAND.primary};border-radius:16px 16px 0 0;padding:28px 40px;">
          <p style="margin:0;font-size:20px;font-weight:700;color:${BRAND.onPrimary};letter-spacing:-0.3px;">Aera Health</p>
          <p style="margin:4px 0 0;font-size:12px;color:${BRAND.onPrimary};opacity:0.7;letter-spacing:0.05em;">Dein persönlicher Symptom-Check</p>
        </td></tr>

        <!-- Hero -->
        <tr><td style="background:${accent.light};padding:36px 40px;border-left:4px solid ${accent.border};">
          <p style="margin:0 0 6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2.5px;color:${accent.border};">Dein Hormonprofil</p>
          <h1 style="margin:0 0 10px;font-size:24px;font-weight:700;color:${accent.bg};line-height:1.25;">${result.primaryTitel}</h1>
          <p style="margin:0;font-size:13px;color:${accent.bg};opacity:0.8;">${klarheitText} · Übereinstimmung: ${result.klarheit}%</p>
          ${result.lowScore
            ? `<p style="margin:14px 0 0;font-size:12px;color:${BRAND.onSurfaceVariant};background:white;padding:10px 14px;border-radius:8px;line-height:1.5;">Dein Signal ist schwach – diese Auswertung ist eine erste Orientierung. Bitte besprich deine Symptome mit einer Ärztin.</p>`
            : ""}
        </td></tr>

        <!-- Signals from your answers -->
        <tr><td style="background:white;padding:32px 40px;">
          <h2 style="margin:0 0 6px;font-size:15px;font-weight:700;color:${BRAND.onSurface};">Signale aus deinen Antworten</h2>
          <p style="margin:0 0 16px;font-size:12px;color:${BRAND.onSurfaceVariant};">Diese Symptome hast du selbst angegeben.</p>
          <ul style="margin:0;padding:0;">${signalRows}</ul>
        </td></tr>

        <!-- Blood tests -->
        <tr><td style="background:${BRAND.surfaceLow};padding:32px 40px;">
          <h2 style="margin:0 0 6px;font-size:15px;font-weight:700;color:${BRAND.onSurface};">Empfohlene Bluttests</h2>
          <p style="margin:0 0 16px;font-size:12px;color:${BRAND.onSurfaceVariant};">Zeige diese Liste bei deinem nächsten Arzttermin.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:white;border-radius:10px;overflow:hidden;border:1px solid ${BRAND.outlineVariant};">
            <thead><tr>
              <th style="padding:10px 14px;text-align:left;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:${BRAND.onSurfaceVariant};border-bottom:1px solid ${BRAND.outlineVariant};background:${BRAND.surface};">Wert</th>
              <th style="padding:10px 14px;text-align:left;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:${BRAND.onSurfaceVariant};border-bottom:1px solid ${BRAND.outlineVariant};background:${BRAND.surface};">Warum</th>
            </tr></thead>
            <tbody>${testRows}</tbody>
          </table>
        </td></tr>

        <!-- Next steps -->
        <tr><td style="background:white;padding:32px 40px;">
          <h2 style="margin:0 0 6px;font-size:15px;font-weight:700;color:${BRAND.onSurface};">Nächste Schritte</h2>
          <p style="margin:0 0 16px;font-size:12px;color:${BRAND.onSurfaceVariant};">Konkrete Empfehlungen basierend auf deinem Profil.</p>
          <table width="100%" cellpadding="0" cellspacing="0">${stepRows}</table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="background:${BRAND.primaryContainer};padding:32px 40px;text-align:center;">
          <p style="margin:0 0 6px;font-size:16px;font-weight:700;color:${BRAND.primary};">Mehr erfahren auf aerahealth.de</p>
          <p style="margin:0 0 20px;font-size:13px;color:${BRAND.onSurfaceVariant};">Ratgeber, Experteninfos und alles zu deinem Hormonstatus.</p>
          <a href="${content.conditionUrl}" style="display:inline-block;background:${BRAND.primary};color:${BRAND.onPrimary};padding:13px 30px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;letter-spacing:0.03em;">Ratgeber lesen →</a>
        </td></tr>

        <!-- Disclaimer + Footer -->
        <tr><td style="background:${BRAND.surface};padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;">
          <p style="margin:0 0 8px;font-size:11px;color:${BRAND.onSurfaceVariant};line-height:1.6;">
            Diese Auswertung ersetzt keine ärztliche Diagnose. Sie dient als erste Orientierung und Gesprächsgrundlage.
          </p>
          <p style="margin:0;font-size:11px;color:${BRAND.outlineVariant};">
            Aera Health ·
            <a href="https://www.aerahealth.de/datenschutz" style="color:${BRAND.onSurfaceVariant};text-decoration:none;">Datenschutz</a> ·
            <a href="https://www.aerahealth.de/impressum" style="color:${BRAND.onSurfaceVariant};text-decoration:none;">Impressum</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: QuizSubmitBody = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const errors: string[] = [];

    // ── Supabase: store submission ──────────────────────────────────────────
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        const { error } = await supabase.from("quiz_submissions").insert({
          email: body.email,
          answers: body.answers,
          primary_profile: body.result.primaryKey,
          primary_titel: body.result.primaryTitel,
          klarheit: body.result.klarheit,
          age_group: body.result.ageGroup,
          scores: body.result.scores,
          no_pattern: body.result.noPattern,
          low_score: body.result.lowScore,
        });
        if (error) errors.push(`Supabase: ${error.message}`);
      } catch (e) {
        errors.push(`Supabase import failed: ${e}`);
      }
    }

    // ── Resend: send email ──────────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
          from: "Aera Health <check@aerahealth.de>",
          replyTo: "hello@aerahealth.de",
          to: body.email,
          subject: `Dein Aera Check: ${body.result.primaryTitel}`,
          html: buildEmailHtml(body),
          text: buildEmailText(body),
          headers: {
            // Allows one-click unsubscribe — required by Gmail/Yahoo for bulk senders
            "List-Unsubscribe": "<mailto:hello@aerahealth.de?subject=unsubscribe>",
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        });
        if (error) errors.push(`Resend: ${error.message}`);
      } catch (e) {
        errors.push(`Resend import failed: ${e}`);
      }
    }

    if (errors.length > 0) {
      console.error("quiz-submit errors:", errors);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("quiz-submit fatal:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
