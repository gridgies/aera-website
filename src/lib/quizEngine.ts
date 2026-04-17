/**
 * Aera Health Quiz Engine v3.0
 *
 * Scoring basiert auf validierten klinischen Symptomclustern:
 * - Perimenopause-Spektrum (PP/M/PM): MENQOL-Skala (Hilditch et al.), STRAW+10-Staging
 * - Hashimoto/Schilddrüse (H): Billewicz-Score, Zulewski-Score
 * - HPA/Cortisol-Dysbalance (C): HPA-Achsen-Forschung (Sapolsky, Guilliams & Edwards)
 * - Östrogendominanz/Progesteronmangel (E): PMS/PMDD-Diagnostik (ACOG), Lutealphase-Defizit
 * - Androgen-Überschuss/PCOS (A): Rotterdam-Kriterien (ESHRE/ASRM), Teede et al. 2018
 * - Eisenmangel (Fe): WHO-Ferritin-Schwellenwerte, Camaschella NEJM 2015
 *
 * v3.1: Merged Q4+Q5 → single multi-select Q4; 7-question structure.
 * v3.0: Added PCOS (A) and Iron deficiency (Fe) profiles; endometriosis flag;
 * 8-question structure; age multipliers extended to A; multi-select cap raised to 8.
 */

import { QuizAnswer } from "@/types";
import { QUIZ_QUESTIONS } from "@/lib/constants";

export type ProfileKey = "PP" | "M" | "PM" | "H" | "C" | "E" | "A" | "Fe";
type RawProfileKey = "P" | "H" | "C" | "E" | "A" | "Fe";
type RawScores = Record<RawProfileKey, number>;

// ─── Age multipliers ──────────────────────────────────────────────────────────
// P: perimenopause signal — rises with age
const AGE_P_MULTIPLIERS: Record<string, number> = {
  young: 0.0,        // 15–24: perimenopause impossible
  thirties: 0.30,    // 25–34: suppressed; allows POI detection
  early_peri: 0.65,  // 35–44: early perimenopause possible
  peri: 1.0,         // 45–54: prime perimenopause/menopause window
  post: 1.2,         // 55+: amplify postmenopause signals
};

// A: PCOS/androgen — reproductive-age condition, declines sharply after 45
const AGE_A_MULTIPLIERS: Record<string, number> = {
  young: 1.0,        // 15–24: peak PCOS onset age
  thirties: 1.0,     // 25–34: peak diagnosis age
  early_peri: 0.7,   // 35–44: still plausible, often undiagnosed
  peri: 0.3,         // 45–54: new-onset PCOS uncommon
  post: 0.0,         // 55+: PCOS does not present de novo
};

// Fe: iron deficiency — affects all ages equally (no multiplier needed)

// Tiebreaker: H > P > A > C > Fe > E (medical specificity / urgency)
const TIEBREAKER_ORDER: RawProfileKey[] = ["H", "P", "A", "C", "Fe", "E"];

// Q4 multi-select: cap total contribution across all profiles
const Q4_TOTAL_CAP = 8;

export interface HormonProfil {
  key: ProfileKey;
  titel: string;
  untertitel: string;
  beschreibung: string;
  signale: string[];
  bluttests: { wert: string; warum: string }[];
  naechsteSchritte: string[];
  conditionSlug: string;
  icon: string;
  color: string;    // Tailwind bg class
  textColor: string; // Tailwind text class
}

export const PROFILE_DEFINITIONS: Record<ProfileKey, HormonProfil> = {
  // ─── Perimenopause-Spektrum ────────────────────────────────────────────────
  PP: {
    key: "PP",
    titel: "Perimenopause – Erste Zeichen des Wandels",
    untertitel: "Dein Körper beginnt sich zu verändern – Hormone in Bewegung",
    beschreibung:
      "Deine Antworten deuten auf die frühe Perimenopause hin – die erste Phase eines natürlichen hormonellen Wandels. Progesteron beginnt oft schon ab Mitte 30 zu sinken, während Östrogen noch schwankt. Die Eierstöcke reagieren unregelmäßiger auf FSH; Zyklen werden kürzer oder länger. Diese Übergangsphase kann 2–10 Jahre dauern und ist schwer zu erkennen, weil die Symptome dezent beginnen. Früh erkannt lässt sie sich gut begleiten.",
    signale: [
      "Erste Zyklusveränderungen als frühes Zeichen nachlassender Ovarialfunktion",
      "Leichte Schlafveränderungen durch abfallenden Progesteronspiegel",
      "Gelegentliche Stimmungsschwankungen durch Östrogenschwankungen",
      "AMH (Eierstockreserve) beginnt zu sinken",
    ],
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
    conditionSlug: "menopause",
    icon: "wb_twilight",
    color: "bg-amber-50",
    textColor: "text-amber-800",
  },

  M: {
    key: "M",
    titel: "Wechseljahre – Mitten in der Transition",
    untertitel: "Deutliche Symptome, aktiver hormoneller Wandel",
    beschreibung:
      "Deine Antworten zeigen ein klassisches Wechseljahres-Bild. Der Östrogenspiegel sinkt deutlich, FSH steigt, und der Körper befindet sich im aktiven hormonellen Übergang. Hitzewallungen, Schlafstörungen und Stimmungsveränderungen entstehen, weil Östrogen direkt auf Hypothalamus, Schlafarchitektur und Neurotransmitter (Serotonin, GABA) wirkt. Aktuelle Leitlinien (DGGG 2020) bewerten Hormontherapie für gesunde Frauen unter 60 als sicher und wirksam.",
    signale: [
      "Vasomotorische Symptome (Hitzewallungen, Nachtschweiß) durch Östrogenabfall",
      "Schlafstörungen durch Temperaturregulations-Veränderungen im Hypothalamus",
      "Zyklusveränderungen und zunehmend unregelmäßige oder ausbleibende Perioden",
      "Stimmungsschwankungen durch Einfluss von Östrogen auf den Serotonin-Haushalt",
    ],
    bluttests: [
      { wert: "FSH (follikelstimulierend)", warum: "Wichtigster Wechseljahres-Marker – deutlich erhöht" },
      { wert: "Östradiol (E2)", warum: "Zeigt den aktuellen Östrogenstatus; schwankt stark in der Menopause" },
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Misst die verbleibende Eierstockreserve" },
      { wert: "TSH, fT3, fT4", warum: "Schilddrüse ausschließen – viele Symptome überschneiden sich" },
      { wert: "Vitamin D & Calcium", warum: "Knochenschutz in den Wechseljahren besonders wichtig" },
    ],
    naechsteSchritte: [
      "Gynäkologin ansprechen – explizit nach FSH, Östradiol und AMH fragen",
      "Symptomtagebuch führen: Wann treten Hitzewallungen auf? Zusammenhang mit Zyklus?",
      "Hormontherapie (HRT) besprechen: Aktuelle Leitlinien sehen HRT als sicher und wirksam für gesunde Frauen unter 60",
      "Pflanzliche Alternativen: Traubsilberkerze und Rotklee-Isoflavone haben die stärkste Evidenz",
    ],
    conditionSlug: "menopause",
    icon: "wb_sunny",
    color: "bg-orange-50",
    textColor: "text-orange-800",
  },

  PM: {
    key: "PM",
    titel: "Postmenopause – Nach den Wechseljahren",
    untertitel: "Stabiles Hormonniveau, langfristige Gesundheit im Fokus",
    beschreibung:
      "Deine Antworten passen zum Postmenopause-Profil – du bist seit mehr als 12 Monaten ohne Periode. Der hormonelle Sturm hat sich gelegt: Östrogen und Progesteron sind auf einem stabilen, niedrigeren Niveau. Akute Symptome wie Hitzewallungen nehmen oft ab, aber die langfristigen Folgen des Östrogenmangels – für Knochen, Herz-Kreislauf und Schleimhäute – rücken in den Fokus. Diese Phase bietet die Chance für gezielte Prävention und eine fundierte Entscheidung über Hormontherapie.",
    signale: [
      "Mehr als 12 Monate ohne Periode – stabiler Postmenopause-Status",
      "Anhaltende Östrogenmangel-Symptome (Trockenheit, Energieflauten) bleiben möglich",
      "Langzeitrisiken für Knochen (Osteoporose) und Herz-Kreislauf nehmen zu",
      "HRT-Entscheidung in den ersten 10 Jahren nach Menopause besonders relevant",
    ],
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
    conditionSlug: "menopause",
    icon: "nights_stay",
    color: "bg-yellow-50",
    textColor: "text-yellow-800",
  },

  // ─── Hashimoto / Schilddrüse ───────────────────────────────────────────────
  H: {
    key: "H",
    titel: "Schilddrüse & Hashimoto-Muster",
    untertitel: "Deine Symptome passen zu einem Schilddrüsen-Profil",
    beschreibung:
      "Deine Antworten zeigen ein Symptommuster, das stark mit Schilddrüsenfunktionsstörungen – insbesondere Hashimoto Thyreoiditis – übereinstimmt. Hashimoto ist die häufigste Autoimmunerkrankung in Deutschland und betrifft überwiegend Frauen. Das Tückische: TSH kann jahrelang im Normbereich bleiben, während TPO-Antikörper schon erhöht sind und Symptome verursachen. Viele Frauen warten 5–10 Jahre auf eine Diagnose. Mit der richtigen Einstellung und Lebensstilmaßnahmen lässt sich die Lebensqualität deutlich verbessern.",
    signale: [
      "Kälteempfindlichkeit und ständiges Frieren als klassisches Hypothyreose-Zeichen",
      "Diffuser Haarausfall als Folge gestörter Schilddrüsenhormon-Wirkung auf Haarfollikel",
      "Erschöpfung, die durch Schlaf nicht besser wird – Zeichen verlangsamten Zellstoffwechsels",
      "Trockene Haut durch reduzierte Talgdrüsenaktivität bei T3-Mangel",
    ],
    bluttests: [
      { wert: "TSH", warum: "Erstes Screening – allein aber nicht ausreichend" },
      { wert: "fT3 & fT4", warum: "Die aktiven Hormone; TSH kann normal sein, obwohl fT3 zu niedrig ist" },
      { wert: "TPO-Antikörper", warum: "Entscheidender Hashimoto-Marker; bei 90 % der Betroffenen erhöht" },
      { wert: "Ferritin", warum: "Eisenspeicher unter 70 µg/l verstärkt Müdigkeit und Haarausfall erheblich" },
      { wert: "Vitamin D (25-OH)", warum: "Mangel verstärkt Autoimmunaktivität; Zielwert >40 ng/ml" },
      { wert: "Selen", warum: "Selen reduziert TPO-Antikörper laut Metaanalysen (Fan et al. 2014)" },
    ],
    naechsteSchritte: [
      "Beim Arzt explizit TPO-Antikörper anfragen – TSH-allein-Tests schließen Hashimoto nicht aus",
      "Selen 200 µg täglich: Metaanalysen zeigen signifikante Senkung der TPO-Antikörper",
      "Vitamin D optimieren: Zielwert 40–60 ng/ml, nicht nur 'ausreichend'",
      "Glutenfreier Selbstversuch für 3 Monate: Anekdotisch wirksam bei Hashimoto, schadet nicht",
    ],
    conditionSlug: "hashimoto",
    icon: "science",
    color: "bg-blue-50",
    textColor: "text-blue-800",
  },

  // ─── Stresshormon / HPA-Achse ─────────────────────────────────────────────
  C: {
    key: "C",
    titel: "Stresshormon-Dysbalance (HPA-Achse)",
    untertitel: "Dein Nervensystem zeigt Zeichen chronischer Überbelastung",
    beschreibung:
      "Deine Symptome – müde aber nicht abschalten können, innere Unruhe trotz Erschöpfung, Einschlafprobleme – sind klassische Zeichen einer gestörten HPA-Achse (Hypothalamus-Hypophysen-Nebennieren). Chronischer Stress führt zu dauerhaft erhöhtem Cortisol, das die Produktion von Progesteron, Östrogen und Schilddrüsenhormonen blockiert. Dieser sogenannte 'Pregnenolon-Steal' erklärt, warum anhaltender Stress zu einem hormonellen Dominoeffekt führt. Der Körper priorisiert Überlebensstress vor Reproduktionshormonen – ein evolutionärer Mechanismus mit modernen Nebenwirkungen.",
    signale: [
      "Tired-but-wired: Klassisches Zeichen eines dysregulierten Cortisol-Tagesrhythmus",
      "Einschlafprobleme trotz Erschöpfung: Cortisol sollte abends niedrig sein – ist es nicht",
      "Innere Unruhe und Herzrasen: Überaktiviertes sympathisches Nervensystem",
      "Zyklische Energieeinbrüche: Cortisol-Überbelastung stört die Hormonbalance insgesamt",
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
      "Schlafzeit vorziehen (vor 23 Uhr): Stabilisiert den Cortisol-Rhythmus – der natürliche Cortisol-Peak liegt zwischen 6 und 8 Uhr morgens",
    ],
    conditionSlug: "hormone",
    icon: "psychology",
    color: "bg-violet-50",
    textColor: "text-violet-800",
  },

  // ─── Östrogendominanz / Progesteronmangel ─────────────────────────────────
  E: {
    key: "E",
    titel: "Östrogendominanz & Progesteronmangel",
    untertitel: "Dein Profil zeigt ein zyklisches Hormonungleichgewicht",
    beschreibung:
      "Deine Symptome – besonders die zyklusgebundenen Beschwerden – passen zu einem Ungleichgewicht zwischen Östrogen und Progesteron. Östrogendominanz bedeutet nicht unbedingt zu viel Östrogen, sondern ein relatives Übergewicht gegenüber Progesteron. Das passiert häufig, weil Progesteron in der Perimenopause als erstes sinkt (schon ab Mitte 30), während Östrogen noch auf normalem Niveau bleibt. Progesteron wirkt über GABA-Rezeptoren beruhigend auf das Gehirn – sein Mangel erklärt Angst, schlechten Schlaf vor der Periode und emotionale Instabilität.",
    signale: [
      "Zyklusabhängige Beschwerden: Symptome verschlechtern sich deutlich in der Lutealphase",
      "Brustspannen und Wassereinlagerungen: Typisch für relative Östrogendominanz",
      "Stimmungsabstürze vor der Periode: Progesteron-Abbau zu Allopregnanolon (GABA-Modulator) gestört",
      "Starke PMS oder emotionale Instabilität in der zweiten Zyklushälfte",
    ],
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
      "Lebergesundheit unterstützen: Die Leber baut Östrogen ab – weniger Alkohol, Kreuzblütler essen",
    ],
    conditionSlug: "hormone",
    icon: "cycle",
    color: "bg-rose-50",
    textColor: "text-rose-800",
  },

  // ─── Androgen-Überschuss / PCOS ───────────────────────────────────────────
  A: {
    key: "A",
    titel: "Androgen-Überschuss & PCOS-Muster",
    untertitel: "Die häufigste hormonelle Erkrankung im reproduktiven Alter",
    beschreibung:
      "Deine Antworten zeigen ein Muster, das stark mit dem Polyzystischen Ovarialsyndrom (PCOS) übereinstimmt – der häufigsten endokrinen Erkrankung bei Frauen im gebärfähigen Alter (betrifft 8–13 %). PCOS ist kein einfaches Hormonproblem: Im Kern geht es um Androgenüberschuss (erhöhtes Testosteron oder DHEA-S), der Zyklusunregelmäßigkeiten, Akne, Haarausfall nach männlichem Muster und unerwünschten Körperbehaarung verursacht. Hinzu kommt häufig eine Insulinresistenz – was erklärt, warum viele Frauen trotz gesunder Ernährung zunehmen. Die Diagnose erfordert mindestens 2 der 3 Rotterdam-Kriterien: unregelmäßige Zyklen, erhöhte Androgenwerte und/oder polyzystische Ovarien im Ultraschall. Viele Frauen warten 2–3 Jahre auf eine Diagnose, weil die Symptome einzeln betrachtet werden statt als Muster.",
    signale: [
      "Unregelmäßige oder sehr seltene Zyklen (Oligomenorrhoe) als Leitsymptom",
      "Akne im Kinn- und Kieferbereich durch erhöhte Androgenwirkung auf Talgdrüsen",
      "Haarausfall an Schläfen und Scheitel (androgenetisches Muster) trotz jungen Alters",
      "Hirsutismus (Körper-/Gesichtsbehaarung) als spezifischstes äußeres Androgenzeichen",
      "Insulinresistenz-bedingtes Gewicht am Bauch, unabhängig von der Kalorienmenge",
    ],
    bluttests: [
      { wert: "Testosteron (gesamt + frei) & SHBG", warum: "Freies Testosteron ist der entscheidende Androgenmarker; SHBG bestimmt die Bioverfügbarkeit" },
      { wert: "LH:FSH-Verhältnis", warum: "Erhöhtes LH:FSH (>2:1) ist ein klassisches PCOS-Muster" },
      { wert: "AMH (Anti-Müller-Hormon)", warum: "Bei PCOS oft deutlich erhöht (>5 ng/ml) durch viele unreife Follikel" },
      { wert: "Nüchterninsulin & HbA1c", warum: "Insulinresistenz liegt bei ca. 70 % aller PCOS-Betroffenen vor" },
      { wert: "DHEA-S", warum: "Nebennieren-Androgens; wichtig zur Differenzierung der Androgenquelle" },
      { wert: "Transvaginaler Ultraschall", warum: "Polyzystische Ovarien (≥12 Follikel pro Ovar) als Rotterdam-Kriterium" },
    ],
    naechsteSchritte: [
      "Gynäkologin mit PCOS-Erfahrung aufsuchen und explizit die Rotterdam-Kriterien ansprechen",
      "Myo-Inositol (4 g/d) + D-Chiro-Inositol (400 mg/d): Stärkste nicht-medikamentöse Evidenz für PCOS-Zyklusregulation (Unfer et al. 2017)",
      "Insulinsensitivität optimieren: Proteinreiches Frühstück, keine schnellen Kohlenhydrate morgens",
      "Spearmint-Tee 2× täglich: Randomisierte Studie zeigt Reduktion freier Androgene (Grant 2010)",
    ],
    conditionSlug: "hormone",
    icon: "biotech",
    color: "bg-teal-50",
    textColor: "text-teal-800",
  },

  // ─── Eisenmangel ──────────────────────────────────────────────────────────
  Fe: {
    key: "Fe",
    titel: "Eisenmangel-Muster",
    untertitel: "Einer der häufigsten und am meisten übersehenen Auslöser",
    beschreibung:
      "Deine Antworten deuten auf einen Eisenmangel hin – nicht unbedingt eine Anämie, sondern einen Ferritinmangel, der noch unter dem Radar liegt. Das ist der wichtigste Unterschied: Hämoglobin kann im Normbereich sein, während Ferritin (der eigentliche Eisenspeicher) bei 15–30 µg/l liegt. Viele Labore melden das als 'low-normal' – doch Forschung zeigt, dass Ferritin unter 50 µg/l bereits deutliche Symptome verursacht: Erschöpfung, Haarausfall, Konzentrationsprobleme, Herzrasen. Das ist der Grund, warum dein Arzt vielleicht sagte 'dein Blutbild ist normal' – und du dich trotzdem erschöpft fühlst. Eisenmangel tritt häufig sekundär auf: bei starken Blutungen, Endometriose, veganer Ernährung oder eingeschränkter Resorption.",
    signale: [
      "Chronische Erschöpfung, die durch Schlaf nicht besser wird – klassisches Ferritin-Mangel-Zeichen",
      "Diffuser Haarausfall durch gestörte Haarfollikel-Versorgung (Ferritin-Schwellenwert: >70 µg/l für Haare)",
      "Herzrasen oder Herzklopfen in Ruhe durch kompensatorisch erhöhte Herzfrequenz",
      "Konzentrationsprobleme und Gedankennebel durch reduzierte Sauerstoffversorgung",
      "Kälteempfindlichkeit durch verringerten Sauerstofftransport in der Peripherie",
    ],
    bluttests: [
      { wert: "Ferritin", warum: "Der entscheidende Marker – nicht nur Hämoglobin! Zielwert >50 µg/l, bei Haarausfall >70 µg/l" },
      { wert: "Hämoglobin & Hämatokrit", warum: "Für die Schweregrad-Einschätzung; kann bei Ferritinmangel noch normal sein" },
      { wert: "Serum-Eisen & Transferrinsättigung", warum: "Bei Ferritin <20 µg/l zusätzlich messen" },
      { wert: "MCV (mittleres Erythrozytenvolumen)", warum: "Mikrozytäre Anämie als Spätzeichen eines länger bestehenden Eisenmangels" },
      { wert: "Vitamin B12 & Folsäure", warum: "Häufige Begleitmängel; verstärken Erschöpfung und Konzentrationsprobleme" },
      { wert: "TSH", warum: "Schilddrüsenunterfunktion und Eisenmangel treten häufig gemeinsam auf" },
    ],
    naechsteSchritte: [
      "Ferritin explizit anfragen – nicht nur 'großes Blutbild'. Sage deiner Ärztin: Zielwert >50 µg/l, nicht nur Normbereich",
      "Eiseninfusion erwägen: Bei Ferritin <20 µg/l oder schlechter oraler Verträglichkeit deutlich effektiver als Tabletten",
      "Orales Eisen: Eisen-Bisglycinat bevorzugen (nicht Eisensulfat) – bessere Verträglichkeit, weniger Magenprobleme",
      "Ursache klären: Starke Blutungen? Vegane Ernährung? Resorptionsstörung? Ferritin kommt ohne Ursachenklärung immer wieder ab",
    ],
    conditionSlug: "hormone",
    icon: "bloodtype",
    color: "bg-red-50",
    textColor: "text-red-700",
  },
};

// ─── P sub-profile determination ─────────────────────────────────────────────
// Reads from Q2 (id=2). Option indices:
// 0 = regular, 1 = irregular, 2 = oligomenorrhea, 3 = strong PMS, 4 = >12 months no period
function getPSubProfile(
  ageGroup: string,
  q2OptionIndex: number | null
): { profile: "PP" | "M" | "PM"; poiWarning: boolean } {
  const is12MonthsNoPeriod = q2OptionIndex === 4;
  const isIrregularOrOligo = q2OptionIndex === 1 || q2OptionIndex === 2;

  if (is12MonthsNoPeriod) {
    if (ageGroup === "thirties") {
      return { profile: "PP", poiWarning: true }; // POI: amenorrhea under 35
    }
    return { profile: "PM", poiWarning: false };
  }

  if (isIrregularOrOligo) {
    return ageGroup === "early_peri"
      ? { profile: "PP", poiWarning: false }
      : { profile: "M", poiWarning: false };
  }

  // Fallback by age
  if (ageGroup === "early_peri") return { profile: "PP", poiWarning: false };
  if (ageGroup === "post") return { profile: "PM", poiWarning: false };
  return { profile: "M", poiWarning: false };
}

export interface QuizResult {
  primary: HormonProfil;
  secondary: HormonProfil | null;
  /** Raw P/H/C/E/A/Fe scores (after age multipliers) — used for score bar chart */
  scores: RawScores;
  rawScores: RawScores;
  ageGroup: string;
  /** 0–100, Klarheit des Ergebnisses */
  klarheit: number;
  /** true wenn kein klares Muster erkennbar (topScore < 5) */
  noPattern: boolean;
  /** true wenn Signal schwach ist (topScore < 11) */
  lowScore: boolean;
  /** Mögliche vorzeitige Ovarialinsuffizienz (Alter 25–34 + Amenorrhoe) */
  poiWarning: boolean;
  /** Hashimoto + Wechseljahres-Überlappung erkannt */
  hpOverlap: boolean;
  /** Endometriose-Schmerzmuster erkannt — transvaginaler Ultraschall empfohlen */
  endoFlag: boolean;
}

export function berechneErgebnis(answers: QuizAnswer[]): QuizResult {
  const totals: RawScores = { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 };

  // ─── 1. Q4 (multi-select) — process separately with 8-pt cap ─────────────
  const q4Answer = answers.find((a) => a.questionId === 4);
  const q4Question = QUIZ_QUESTIONS.find((q) => q.id === 4);
  if (q4Answer && q4Question) {
    const indices = Array.isArray(q4Answer.selectedOption)
      ? q4Answer.selectedOption
      : [q4Answer.selectedOption];

    const q4Raw: RawScores = { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 };
    for (const idx of indices) {
      const opt = q4Question.options[idx];
      if (!opt?.scores) continue;
      q4Raw.P += opt.scores.P;
      q4Raw.H += opt.scores.H;
      q4Raw.C += opt.scores.C;
      q4Raw.E += opt.scores.E;
      q4Raw.A += opt.scores.A;
      q4Raw.Fe += opt.scores.Fe;
    }

    const q4Total = q4Raw.P + q4Raw.H + q4Raw.C + q4Raw.E + q4Raw.A + q4Raw.Fe;
    if (q4Total > Q4_TOTAL_CAP) {
      const scale = Q4_TOTAL_CAP / q4Total;
      totals.P += Math.round(q4Raw.P * scale);
      totals.H += Math.round(q4Raw.H * scale);
      totals.C += Math.round(q4Raw.C * scale);
      totals.E += Math.round(q4Raw.E * scale);
      totals.A += Math.round(q4Raw.A * scale);
      totals.Fe += Math.round(q4Raw.Fe * scale);
    } else {
      totals.P += q4Raw.P;
      totals.H += q4Raw.H;
      totals.C += q4Raw.C;
      totals.E += q4Raw.E;
      totals.A += q4Raw.A;
      totals.Fe += q4Raw.Fe;
    }
  }

  // ─── 2. All other questions — normal accumulation (skip Q1 and Q4) ────────
  for (const answer of answers) {
    if (answer.questionId === 1 || answer.questionId === 4) continue;

    const question = QUIZ_QUESTIONS.find((q) => q.id === answer.questionId);
    if (!question) continue;

    const indices = Array.isArray(answer.selectedOption)
      ? answer.selectedOption
      : [answer.selectedOption];

    for (const idx of indices) {
      const opt = question.options[idx];
      if (!opt?.scores) continue;
      totals.P += opt.scores.P;
      totals.H += opt.scores.H;
      totals.C += opt.scores.C;
      totals.E += opt.scores.E;
      totals.A += opt.scores.A;
      totals.Fe += opt.scores.Fe;
    }
  }

  // ─── 3. Age group — read from Q1 ─────────────────────────────────────────
  const ageAnswer = answers.find((a) => a.questionId === 1);
  const ageQuestion = QUIZ_QUESTIONS.find((q) => q.id === 1);
  let ageGroup = "peri";

  if (ageAnswer && ageQuestion) {
    const idx = Array.isArray(ageAnswer.selectedOption)
      ? ageAnswer.selectedOption[0]
      : ageAnswer.selectedOption;
    const ageOpt = ageQuestion.options[idx];
    if (ageOpt?.ageGroup) ageGroup = ageOpt.ageGroup;
  }

  const rawScores: RawScores = { ...totals };

  // ─── 4. Apply age multipliers ─────────────────────────────────────────────
  const pMultiplier = AGE_P_MULTIPLIERS[ageGroup] ?? 1.0;
  const aMultiplier = AGE_A_MULTIPLIERS[ageGroup] ?? 0.0;

  totals.P = Math.round(totals.P * pMultiplier);
  totals.A = Math.round(totals.A * aMultiplier);
  // Fe has no age multiplier (iron deficiency affects all ages equally)

  // ─── 5. Sort profiles with tiebreaker ────────────────────────────────────
  const entries = (Object.entries(totals) as [RawProfileKey, number][]).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return TIEBREAKER_ORDER.indexOf(a[0]) - TIEBREAKER_ORDER.indexOf(b[0]);
  });

  const [topRawKey, topScore] = entries[0];
  const [secondRawKey, secondScore] = entries[1];

  // ─── 6. Resolve P → sub-profile (PP / M / PM) — reads from Q2 ────────────
  const q2Answer = answers.find((a) => a.questionId === 2);
  const q2OptionIndex = q2Answer
    ? Array.isArray(q2Answer.selectedOption)
      ? q2Answer.selectedOption[0]
      : q2Answer.selectedOption
    : null;

  const { profile: pSubProfile, poiWarning: directPoiWarning } =
    getPSubProfile(ageGroup, q2OptionIndex);

  function resolveProfile(rawKey: RawProfileKey): HormonProfil {
    return rawKey === "P" ? PROFILE_DEFINITIONS[pSubProfile] : PROFILE_DEFINITIONS[rawKey];
  }

  const primary = resolveProfile(topRawKey);

  // Secondary: show if score >= 35% of primary and > 0
  const showSecondary = secondScore > 0 && secondScore >= topScore * 0.35;
  const secondary = showSecondary ? resolveProfile(secondRawKey) : null;

  // ─── 7. Endometriosis flag — reads endoSignal from Q3 ────────────────────
  const q3Answer = answers.find((a) => a.questionId === 3);
  const q3OptionIdx = q3Answer
    ? Array.isArray(q3Answer.selectedOption)
      ? q3Answer.selectedOption[0]
      : q3Answer.selectedOption
    : null;
  const q3Question = QUIZ_QUESTIONS.find((q) => q.id === 3);
  const rawEndoSignal =
    q3OptionIdx !== null && q3Question
      ? (q3Question.options[q3OptionIdx]?.endoSignal ?? 0)
      : 0;

  const endoFlag =
    rawEndoSignal >= 2 && ["young", "thirties", "early_peri"].includes(ageGroup);

  // ─── 8. Special flags ────────────────────────────────────────────────────
  const primaryIsPFamily = ["PP", "M", "PM"].includes(primary.key);
  const secondaryIsPFamily = secondary ? ["PP", "M", "PM"].includes(secondary.key) : false;
  const hpOverlap =
    (primaryIsPFamily && secondary?.key === "H") ||
    (primary.key === "H" && secondaryIsPFamily);

  const poiFromSecondary =
    ageGroup === "thirties" && q2OptionIndex === 4 && secondaryIsPFamily;
  const poiWarning = directPoiWarning || poiFromSecondary;

  // ─── 9. Klarheit & result type ────────────────────────────────────────────
  const klarheit = Math.min(100, Math.round((topScore / 22) * 100));
  const noPattern = topScore < 5;
  const lowScore = topScore < 11;

  return {
    primary,
    secondary,
    scores: totals,
    rawScores,
    ageGroup,
    klarheit,
    noPattern,
    lowScore,
    poiWarning,
    hpOverlap,
    endoFlag,
  };
}
