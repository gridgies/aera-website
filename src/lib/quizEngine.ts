/**
 * Aera Health Quiz Engine
 *
 * Scoring basiert auf validierten klinischen Symptomclustern:
 * - Perimenopause (P): MENQOL-Skala (Hilditch et al.), STRAW+10-Staging
 * - Hashimoto/Schilddrüse (H): Billewicz-Score, Zulewski-Score
 * - HPA/Cortisol-Dysbalance (C): HPA-Achsen-Forschung (Sapolsky, Guilliams & Edwards)
 * - Östrogendominanz/Progesteronmangel (E): PMS/PMDD-Diagnostik (ACOG), Lutealphase-Defizit
 *
 * Age modifiers: P scores are multiplied by an age factor to prevent assigning
 * perimenopause signals to young women. A 20-year-old with hot flashes has a
 * very different clinical picture than a 48-year-old with the same symptom.
 */

import { QuizAnswer, QuizScores } from "@/types";
import { QUIZ_QUESTIONS } from "@/lib/constants";

export type ProfileKey = "P" | "H" | "C" | "E";

// ─── Age group → P multiplier ────────────────────────────────────────────────
// Under 35: P scores are suppressed so other profiles dominate correctly.
const AGE_P_MULTIPLIERS: Record<string, number> = {
  young: 0.0,       // 15–24: no perimenopause
  thirties: 0.15,   // 25–34: very rare early perimenopause (POI excluded for simplicity)
  early_peri: 0.65, // 35–44: possible early perimenopause
  peri: 1.0,        // 45–54: prime age, no change
  post: 1.2,        // 55+:   postmenopause, slightly amplify
};

export interface HormonProfil {
  key: ProfileKey;
  titel: string;
  untertitel: string;
  beschreibung: string;
  /** Was die Antworten über das Profil verraten */
  signale: string[];
  /** Empfohlene Laborwerte – priorisiert nach klinischer Relevanz */
  bluttests: { wert: string; warum: string }[];
  /** Konkrete erste Schritte */
  naechsteSchritte: string[];
  /** Für internen Link zur Wissensseite */
  conditionSlug: string;
  icon: string;
  color: string; // Tailwind bg class
  textColor: string; // Tailwind text class
}

export const PROFILE_DEFINITIONS: Record<ProfileKey, HormonProfil> = {
  P: {
    key: "P",
    titel: "Perimenopause & Hormoneller Übergang",
    untertitel: "Deine Symptome deuten auf einen hormonellen Übergang hin",
    beschreibung:
      "Deine Antworten zeigen mehrere klassische Zeichen der Perimenopause – der Übergangsphase, in der die Eierstöcke die Östrogen- und Progesteronproduktion reduzieren. Diese Phase beginnt in Deutschland im Durchschnitt mit 45–47 Jahren, kann aber schon ab 40 einsetzen. Hitzewallungen, Schlafstörungen und Stimmungsveränderungen entstehen, weil Östrogen direkt auf Hypothalamus, Schlafarchitektur und Neurotransmitter (Serotonin, GABA) wirkt. Das ist kein Versagen deines Körpers – es ist ein gut erforschter biologischer Übergang, der sich wirksam behandeln lässt.",
    signale: [
      "Vasomotorische Symptome (Hitzewallungen, Nachtschweiß) deuten auf Östrogenabfall hin",
      "Schlafstörungen durch Temperaturregulations-Veränderungen im Hypothalamus",
      "Zyklusveränderungen als frühes Zeichen nachlassender Ovarialfunktion",
      "Stimmungsschwankungen durch Einfluss von Östrogen auf Serotonin-Haushalt",
    ],
    bluttests: [
      { wert: "FSH (follikelstimulierend)", warum: "Steigt, wenn die Eierstöcke nachlassen – wichtigster Perimenopause-Marker" },
      { wert: "Östradiol (E2)", warum: "Zeigt den aktuellen Östrogenstatus; schwankt stark in der Perimenopause" },
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Misst die Eierstockreserve – aussagekräftiger als FSH allein" },
      { wert: "TSH, fT3, fT4", warum: "Schilddrüse ausschließen – überschneidet sich mit vielen Wechseljahressymptomen" },
      { wert: "Ferritin & Vitamin D", warum: "Häufige Mangelzustände, die Beschwerden verstärken" },
    ],
    naechsteSchritte: [
      "Gynäkologin ansprechen – explizit nach FSH, Östradiol und AMH fragen",
      "Symptomtagebuch führen: Wann treten Hitzewallungen auf? Zusammenhang mit Zyklus?",
      "Hormontherapie (HRT) besprechen: Aktuelle Leitlinien (DGGG 2020) sehen HRT als sicher und wirksam für gesunde Frauen unter 60",
      "Pflanzliche Alternativen prüfen: Traubsilberkerze und Rotklee-Isoflavone haben die stärkste Evidenz",
    ],
    conditionSlug: "menopause",
    icon: "wb_sunny",
    color: "bg-amber-50",
    textColor: "text-amber-800",
  },

  H: {
    key: "H",
    titel: "Schilddrüse & Hashimoto-Muster",
    untertitel: "Deine Symptome passen zu einem Schilddrüsen-Profil",
    beschreibung:
      "Deine Antworten zeigen ein Symptommuster, das stark mit Schilddrüsenfunktionsstörungen – insbesondere Hashimoto Thyreoiditis – übereinstimmt. Hashimoto ist die häufigste Autoimmunerkrankung in Deutschland und betrifft überwiegend Frauen. Das Tückische: TSH kann jahrelang im Normbereich bleiben, während TPO-Antikörper schon erhöht sind und Symptome verursachen. Viele Frauen warten 5–10 Jahre auf eine Diagnose. Die gute Nachricht: Mit der richtigen Einstellung und Lebensstilmaßnahmen lässt sich die Lebensqualität deutlich verbessern.",
    signale: [
      "Kälteempfindlichkeit und ständiges Frieren als klassisches Hypothyreose-Zeichen",
      "Diffuser Haarausfall als Folge gestörter Schilddrüsenhormon-Wirkung auf Haarfollikel",
      "Erschöpfung, die durch Schlaf nicht besser wird – Zeichen verlangsamten Zellstoffwechsels",
      "Trockene Haut durch reduzierte Talgdrüsenaktivität bei T3-Mangel",
    ],
    bluttests: [
      { wert: "TSH", warum: "Erstes Screening – allein aber nicht ausreichend" },
      { wert: "fT3 & fT4", warum: "Die eigentlich aktiven Hormone; TSH kann normal sein, obwohl fT3 zu niedrig ist" },
      { wert: "TPO-Antikörper", warum: "Entscheidender Hashimoto-Marker; bei 90 % der Betroffenen erhöht" },
      { wert: "Ferritin", warum: "Eisenspeicher unter 70 µg/l verstärkt Müdigkeit und Haarausfall erheblich" },
      { wert: "Vitamin D (25-OH)", warum: "Mangel verstärkt Autoimmunaktivität; Zielwert >40 ng/ml" },
      { wert: "Selen", warum: "Selen reduziert TPO-Antikörper laut Metaanalysen (Fan et al. 2014)" },
    ],
    naechsteSchritte: [
      "Beim Arzt explizit TPO-Antikörper anfragen – TSH-allein-Tests schließen Hashimoto nicht aus",
      "Selen 200 µg täglich: Metaanalysen zeigen signifikante Senkung der TPO-Antikörper",
      "Vitamin D optimieren: Zielwert 40–60 ng/ml, nicht nur 'ausreichend'",
      "Glutenfreier Selbstversuch für 3 Monate: Anekdotisch wirksam, schadet nicht",
    ],
    conditionSlug: "hashimoto",
    icon: "science",
    color: "bg-blue-50",
    textColor: "text-blue-800",
  },

  C: {
    key: "C",
    titel: "Stresshormon-Dysbalance (HPA-Achse)",
    untertitel: "Dein Nervensystem zeigt Zeichen chronischer Überbelastung",
    beschreibung:
      "Deine Symptome – müde aber nicht abschalten können, innere Unruhe trotz Erschöpfung, Einschlafprobleme – sind klassische Zeichen einer gestörten HPA-Achse (Hypothalamus-Hypophysen-Nebennieren). Chronischer Stress führt zu dauerhaft erhöhtem Cortisol, das die Produktion von Progesteron, Östrogen und Schilddrüsenhormonen blockiert. Dieser sogenannte 'Pregnenolon-Steal' erklärt, warum anhaltender Stress zu einem hormonellen Dominoeffekt führt. Die Forschung zeigt: Der Körper priorisiert Überlebensstress vor Reproduktionshormonen – ein evolutionärer Mechanismus mit modernen Nebenwirkungen.",
    signale: [
      "Tired-but-wired: Klassisches Zeichen eines dysregulierten Cortisol-Tagesrhythmus",
      "Einschlafprobleme trotz Erschöpfung: Cortisol sollte abends niedrig sein – ist es nicht",
      "Innere Unruhe und Herzrasen: Überaktiviertes sympathisches Nervensystem",
      "Nachmittagstief: Cortisol-Abfall nach 14 Uhr, der nicht kompensiert wird",
    ],
    bluttests: [
      { wert: "Cortisol-Tagesprofil (Speichel, 4 Punkte)", warum: "Zeigt den Tagesrhythmus – aussagekräftiger als ein einmaliger Bluttest" },
      { wert: "DHEA-S", warum: "Gegen-Hormon zu Cortisol; sinkt bei chronischem Stress; Resilienzmarker" },
      { wert: "Nüchterninsulin & HbA1c", warum: "Cortisol erhöht Blutzucker; Insulinresistenz ist häufige Folge" },
      { wert: "Progesteron (Tag 19–22)", warum: "Pregnenolon-Steal reduziert Progesteronproduktion unter Stress" },
      { wert: "Magnesium (intrazellulär)", warum: "Cortisol erschöpft Magnesiumspeicher; Mangel verstärkt Angst und Schlafprobleme" },
    ],
    naechsteSchritte: [
      "Cortisol-Tagesprofil durchführen: Morgens, mittags, abends, nachts (Speicheltest, z.B. Cerascreen)",
      "Magnesiumglycinat abends: 300–400 mg fördert GABA und entspannt das Nervensystem",
      "Ashwagandha (Withania somnifera): Adaptogen mit stärkster Cortisol-senkender Evidenz (Chandrasekhar et al. 2012)",
      "Schlafzeit auf 22–23 Uhr vorziehen: Nebennieren erholen sich hauptsächlich zwischen 22 und 2 Uhr",
    ],
    conditionSlug: "hormone",
    icon: "psychology",
    color: "bg-violet-50",
    textColor: "text-violet-800",
  },

  E: {
    key: "E",
    titel: "Östrogendominanz & Progesteronmangel",
    untertitel: "Dein Profil zeigt ein zyklisches Hormonungleichgewicht",
    beschreibung:
      "Deine Symptome – besonders die zyklusgebundenen Beschwerden – passen zu einem Ungleichgewicht zwischen Östrogen und Progesteron. Östrogendominanz bedeutet nicht unbedingt zu viel Östrogen, sondern ein relatives Übergewicht gegenüber Progesteron. Das passiert häufig, weil Progesteron in der Perimenopause als erstes sinkt (schon ab Mitte 30), während Östrogen noch auf normalem Niveau bleibt. Progesteron wirkt über GABA-Rezeptoren beruhigend auf das Gehirn – sein Mangel erklärt Angst, schlechten Schlaf vor der Periode und emotionale Instabilität.",
    signale: [
      "Zyklusabhängige Beschwerden: Östrogen und Progesteron schwanken gemeinsam",
      "Brustspannen und Wassereinlagerungen: Typisch für relative Östrogendominanz",
      "Stimmungsabstürze vor der Periode: Progesteron-Abbau zu Allopregnanolon (GABA-Modulator) gestört",
      "Hormonelle Akne im Kinn-/Kieferbereich: Androgenüberschuss oder Östrogen-Progesteron-Ungleichgewicht",
    ],
    bluttests: [
      { wert: "Progesteron (Tag 19–22 des Zyklus)", warum: "Muss in der Lutealphase gemessen werden; Zielwert >10 ng/ml" },
      { wert: "Östradiol (E2, Tag 3–5)", warum: "Basismessung zu Zyklus-Beginn für Vergleich mit Lutealphase" },
      { wert: "LH & FSH", warum: "Verhältnis gibt Hinweis auf Eierstockreserve und Zyklusqualität" },
      { wert: "Testosteron & DHEA-S", warum: "Bei hormoneller Akne: Androgenüberschuss ausschließen" },
      { wert: "Schilddrüse (TSH, fT3, TPO)", warum: "Hashimoto stört Progesteronproduktion und Zykluslänge" },
    ],
    naechsteSchritte: [
      "Zyklusprotokoll führen: Symptome täglich notieren, um Muster zu erkennen",
      "Mönchspfeffer (Vitex agnus-castus): Metaanalysen zeigen Wirksamkeit bei PMS und Progesteronmangel",
      "Gynäkologin fragen: Bioidentisches Progesteron (Utrogest) – verschreibungspflichtig, sehr wirksam",
      "Lebergesundheit unterstützen: Die Leber baut Östrogen ab – weniger Alkohol, Kreuzblütler essen",
    ],
    conditionSlug: "hormone",
    icon: "cycle",
    color: "bg-rose-50",
    textColor: "text-rose-800",
  },
};

export interface QuizResult {
  primary: HormonProfil;
  secondary: HormonProfil | null;
  scores: Record<ProfileKey, number>;
  rawScores: Record<ProfileKey, number>; // before age modifier
  ageGroup: string;
  /** 0–100, wie eindeutig das Ergebnis ist */
  klarheit: number;
  /** true wenn kein relevantes Signal erkannt wurde (topScore < 5) */
  noPattern: boolean;
  /** true wenn Signal schwach ist – weichere Sprache verwenden (topScore < 10) */
  lowScore: boolean;
}

export function berechneErgebnis(answers: QuizAnswer[]): QuizResult {
  const totals: Record<ProfileKey, number> = { P: 0, H: 0, C: 0, E: 0 };

  // ─── 1. Sum scores from all answers ────────────────────────────────────────
  for (const answer of answers) {
    const question = QUIZ_QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) continue;

    // Normalize: single answer → [index], multi-select → array of indices
    const selectedIndices = Array.isArray(answer.selectedOption)
      ? answer.selectedOption
      : [answer.selectedOption];

    for (const idx of selectedIndices) {
      const option = question.options[idx];
      if (!option?.scores) continue;
      // Skip age question scores (all zero, handled by multiplier below)
      totals.P += option.scores.P;
      totals.H += option.scores.H;
      totals.C += option.scores.C;
      totals.E += option.scores.E;
    }
  }

  // ─── 2. Determine age group and apply P multiplier ─────────────────────────
  const ageAnswer = answers.find((a) => a.questionId === 1);
  const ageQuestion = QUIZ_QUESTIONS.find((q) => q.id === 1);
  let ageGroup = "peri"; // default: no suppression
  let pMultiplier = 1.0;

  if (ageAnswer && ageQuestion) {
    const idx = Array.isArray(ageAnswer.selectedOption)
      ? ageAnswer.selectedOption[0]
      : ageAnswer.selectedOption;
    const ageOption = ageQuestion.options[idx];
    if (ageOption?.ageGroup) {
      ageGroup = ageOption.ageGroup;
      pMultiplier = AGE_P_MULTIPLIERS[ageGroup] ?? 1.0;
    }
  }

  const rawScores = { ...totals };
  totals.P = Math.round(totals.P * pMultiplier);

  // ─── 3. Rank profiles ──────────────────────────────────────────────────────
  const entries = Object.entries(totals) as [ProfileKey, number][];
  entries.sort((a, b) => b[1] - a[1]);

  const [topKey, topScore] = entries[0];
  const [secondKey, secondScore] = entries[1];

  const primary = PROFILE_DEFINITIONS[topKey];
  // Show secondary profile only if it reaches at least 50 % of primary AND has min 4 pts
  const secondary =
    secondScore >= 4 && secondScore >= topScore * 0.5
      ? PROFILE_DEFINITIONS[secondKey]
      : null;

  // klarheit: topScore / 20 (5 symptom questions × max 4 pts each)
  // Multi-select can exceed 20 in rare cases → capped at 100
  const maxPossible = 20;
  const klarheit = Math.min(100, Math.round((topScore / maxPossible) * 100));

  const noPattern = topScore < 5;
  const lowScore = topScore < 10;

  return { primary, secondary, scores: totals, rawScores, ageGroup, klarheit, noPattern, lowScore };
}
