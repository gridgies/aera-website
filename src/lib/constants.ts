import { QuizQuestion, Condition, Step, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Lösungen", href: "/#loesungen" },
  { label: "Wie es funktioniert", href: "/#wie-es-funktioniert" },
  { label: "Expert:innen", href: "/experten" },
  { label: "Wissenschaft", href: "/wissenschaft" },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Was ist dein Hauptanliegen bezüglich deiner Gesundheit?",
    subtitle: "Wähle die Option, die am besten zu dir passt.",
    options: [
      { icon: "bolt", label: "Energie & Erschöpfung", description: "Ich fühle mich oft müde und antriebslos." },
      { icon: "cyclone", label: "Zyklus & Hormone", description: "Mein Zyklus ist unregelmäßig oder ich habe starke PMS-Symptome." },
      { icon: "light_mode", label: "Wechseljahre", description: "Ich erlebe Symptome der Perimenopause oder Menopause." },
      { icon: "favorite", label: "Kinderwunsch", description: "Ich möchte meinen Körper auf eine Schwangerschaft vorbereiten." },
    ],
  },
  {
    id: 2,
    question: "Wie schätzt du dein aktuelles Energielevel über den Tag ein?",
    subtitle: "Wähle die Option, die am besten zu deinem Alltag passt.",
    options: [
      { icon: "light_mode", label: "Strahlend & Aktiv", description: "Ich fühle mich den ganzen Tag über vital und fokussiert." },
      { icon: "waves", label: "Schwankend", description: "Vormittags gut, aber am Nachmittag falle ich oft in ein tiefes Loch." },
      { icon: "battery_low", label: "Erschöpft", description: "Ich fühle mich oft schon beim Aufwachen müde und antriebslos." },
      { icon: "bolt", label: "Gehetzt", description: "Ich habe Energie, aber sie fühlt sich nervös und stressgetrieben an." },
    ],
  },
  {
    id: 3,
    question: "Wie würdest du deine Schlafqualität beschreiben?",
    subtitle: "Guter Schlaf ist essenziell für hormonelle Balance.",
    options: [
      { icon: "bedtime", label: "Erholsam", description: "Ich schlafe durch und wache erholt auf." },
      { icon: "nights_stay", label: "Unruhig", description: "Ich wache nachts häufig auf oder habe Einschlafprobleme." },
      { icon: "schedule", label: "Zu kurz", description: "Ich schlafe weniger als 7 Stunden pro Nacht." },
      { icon: "wb_twilight", label: "Schwankend", description: "Meine Schlafqualität variiert stark von Nacht zu Nacht." },
    ],
  },
  {
    id: 4,
    question: "Wie oft erlebst du Stimmungsschwankungen?",
    subtitle: "Hormone beeinflussen maßgeblich unsere emotionale Balance.",
    options: [
      { icon: "sentiment_satisfied", label: "Selten", description: "Meine Stimmung ist generell stabil und ausgeglichen." },
      { icon: "sync_alt", label: "Zyklusabhängig", description: "Vor meiner Periode erlebe ich deutliche Stimmungstiefs." },
      { icon: "mood_bad", label: "Häufig", description: "Ich erlebe regelmäßig unerklärliche emotionale Schwankungen." },
      { icon: "psychology", label: "Stressbedingt", description: "Bei Stress kippt meine Stimmung schnell." },
    ],
  },
  {
    id: 5,
    question: "Was erwartest du dir von Aera?",
    subtitle: "Das hilft uns, deine Erfahrung zu personalisieren.",
    options: [
      { icon: "search", label: "Ursachenforschung", description: "Ich möchte verstehen, warum ich mich so fühle." },
      { icon: "menu_book", label: "Konkrete Empfehlungen", description: "Ich suche praktische Tipps für Ernährung und Lifestyle." },
      { icon: "group", label: "Expert:innen-Zugang", description: "Ich möchte mit Fachleuten sprechen." },
      { icon: "monitoring", label: "Tracking & Monitoring", description: "Ich möchte meinen Fortschritt verfolgen können." },
    ],
  },
];

export const CONDITIONS: Condition[] = [
  { icon: "eco", title: "Schilddrüse & Hashimoto", description: "Stoffwechsel optimieren und Entzündungen reduzieren.", href: "/check" },
  { icon: "light_mode", title: "Wechseljahre", description: "Souverän durch die Transition mit sanfter Balance.", href: "/check" },
  { icon: "favorite", title: "Kinderwunsch & Hormone", description: "Deinen Körper optimal auf eine Schwangerschaft vorbereiten.", href: "/check" },
  { icon: "cyclone", title: "Zyklus & PMS", description: "Beschwerdefrei leben in jeder Phase deines Monats.", href: "/check" },
  { icon: "bolt", title: "Erschöpfung & Energie", description: "Zurück zu deiner vollen Kraft und Lebensfreude.", href: "/check" },
];

export const STEPS: Step[] = [
  {
    number: "Eins",
    title: "Fragen beantworten",
    description: "In einem fundierten digitalen Fragebogen erfassen wir deine Symptome, deinen Lebensstil und deine Ziele.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa92dzA0uVUD4DwL08n7hlGsDUKyQdxMyyE57fDdME7uzJeHM9cKgaUKpZvhBvOwVzh-Jdsx-UqlPC-pMFxGO9DveA60rT8jnqfMB-Gpw_OI3ZDjgJnnCGDtBlVDhBtxUL9awaZbhyrEikRsQQPRfUjkAnA1f2oWgtUb_1CmnXafG0c7En-DoZGeFO-uPShURTDGlShYDijdXIgn9Abbqnr0ZX7_hzqZgg2c81Q8tm2oC26UGzlulB8uofwJnUCerRYWNmjqXiZlge",
  },
  {
    number: "Zwei",
    title: "Erkenntnisse erhalten",
    description: "Du erhältst eine erste Auswertung, die dir erklärt, warum du dich so fühlst und was deine Hormone damit zu tun haben.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn76Mslg8j3mTZfcfDQROTNrTWZmX1Hgbnb6Cs80R5BqnTGcnzYIJMz7K8NcOFz9G_1Ev6_h4oOooWa4S7LV5RRO3awhW43i4h4pvqt_YZ2xvpA59QqmZmIpz7s8u4c-GU76CCkp2D0iPbVUS8eIaKTDVVP_31ogLN9U8cfHPHY6vVQa6Cl-gajnqA0N2G-xXVYlygAhvNeZWkdIlYK4T8sSNRpg_eMBP5GYcNS0hFts3VtSYBjvdpxmwRcytMIwsm6V7QXot4y1Sj",
  },
  {
    number: "Drei",
    title: "Unterstützung bekommen",
    description: "Erhalte einen personalisierten Plan mit Empfehlungen für Ernährung, Supplements und Zugang zu Fachärzt:innen.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa92dzA0uVUD4DwL08n7hlGsDUKyQdxMyyE57fDdME7uzJeHM9cKgaUKpZvhBvOwVzh-Jdsx-UqlPC-pMFxGO9DveA60rT8jnqfMB-Gpw_OI3ZDjgJnnCGDtBlVDhBtxUL9awaZbhyrEikRsQQPRfUjkAnA1f2oWgtUb_1CmnXafG0c7En-DoZGeFO-uPShURTDGlShYDijdXIgn9Abbqnr0ZX7_hzqZgg2c81Q8tm2oC26UGzlulB8uofwJnUCerRYWNmjqXiZlge",
  },
];

export const WAITLIST_TOPICS = [
  { value: "hormone-zyklus", label: "Hormone & Zyklus" },
  { value: "wechseljahre", label: "Wechseljahre" },
  { value: "energie-stoffwechsel", label: "Energie & Stoffwechsel" },
  { value: "allgemeine-vitalitaet", label: "Allgemeine Vitalität" },
];

export const TRUST_BADGES = [
  { icon: "verified", label: "Mit ärztlicher Expertise entwickelt" },
  { icon: "science", label: "Wissenschaftsbasiert" },
  { icon: "public", label: "Entwickelt in Deutschland" },
  { icon: "lock_outline", label: "DSGVO-konform" },
];

export const SCIENCE_PRINCIPLES = [
  "Evidenzbasierte Medizin als Grundlage",
  "Kontinuierliche wissenschaftliche Überprüfung",
  "Transparente Methodik und Algorithmen",
  "Patientensicherheit als oberste Priorität",
];

export const METHODOLOGY_STEPS = [
  {
    number: 1,
    icon: "analytics",
    title: "Präzise Analyse",
    description: "Wir erfassen deine individuellen Daten durch Biomarker-Tests und KI-gestützte Lebensstil-Analysen.",
  },
  {
    number: 2,
    icon: "architecture",
    title: "Adaptives Design",
    description: "Kein starrer Plan. Unsere Algorithmen passen deine Empfehlungen täglich an deine hormonelle Phase und dein Stresslevel an.",
  },
  {
    number: 3,
    icon: "auto_awesome",
    title: "Nachhaltige Vitalität",
    description: "Durch kontinuierliches Feedback erreichst du einen Zustand der Homöostase und langfristigen Gesundheit.",
  },
];

export const PROBLEM_ITEMS = [
  {
    icon: "clinical_notes",
    title: "Symptome werden ignoriert",
    description: "Häufige Beschwerden werden oft als 'normal' abgetan, anstatt nach den eigentlichen Ursachen zu suchen.",
  },
  {
    icon: "schedule",
    title: "Jahre ohne klare Antworten",
    description: "Viele Frauen warten durchschnittlich 7–10 Jahre auf eine klare Diagnose hormoneller Ungleichgewichte.",
  },
  {
    icon: "hub",
    title: "Versorgung ist fragmentiert",
    description: "Medizinische Fachbereiche arbeiten isoliert und verlieren dabei oft den ganzheitlichen Blick auf deine Gesundheit.",
  },
  {
    icon: "waves",
    title: "Hormonelle Ursachen bleiben unerkannt",
    description: "Das hormonelle Fundament für Energie und Wohlbefinden wird in Standard-Vorsorgeuntersuchungen oft übersehen.",
  },
];
