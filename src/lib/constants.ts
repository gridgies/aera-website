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
    question: "In welcher Situation befindest du dich aktuell?",
    subtitle: "Auch wenn du dir nicht sicher bist – wähle, was am ehesten zutrifft.",
    options: [
      {
        icon: "science",
        label: "Bekannte Schilddrüsen- oder Autoimmundiagnose",
        description: "Ich habe bereits Hashimoto, Schilddrüsenunterfunktion oder eine andere Autoimmunerkrankung.",
        scores: { P: 0, H: 5, C: 0, E: 0 },
      },
      {
        icon: "wb_twilight",
        label: "40+ mit spürbaren Veränderungen",
        description: "Mein Zyklus, mein Schlaf oder meine Stimmung haben sich in den letzten Jahren verändert.",
        scores: { P: 3, H: 0, C: 1, E: 1 },
      },
      {
        icon: "cyclone",
        label: "Zyklusbedingte Beschwerden",
        description: "Ich leide regelmäßig unter PMS, Krämpfen, Stimmungsabstürzen oder starken Blutungen.",
        scores: { P: 0, H: 0, C: 1, E: 3 },
      },
      {
        icon: "battery_low",
        label: "Anhaltende Erschöpfung ohne klare Ursache",
        description: "Ich bin dauerhaft erschöpft oder ausgebrannt, ohne dass Ärzte etwas finden.",
        scores: { P: 1, H: 2, C: 2, E: 0 },
      },
    ],
  },
  {
    id: 2,
    question: "Was belastet dich aktuell am stärksten?",
    subtitle: "Wähle das Symptom, das deinen Alltag am meisten einschränkt.",
    options: [
      {
        icon: "thermostat",
        label: "Hitzewallungen oder Nachtschweiß",
        description: "Ich werde von plötzlicher Hitze oder Schwitzen überrascht – oft nachts.",
        scores: { P: 4, H: 0, C: 0, E: 0 },
      },
      {
        icon: "battery_low",
        label: "Tiefe Erschöpfung – Schlaf hilft nicht",
        description: "Ich bin nach dem Aufwachen schon müde. Kein Schlaf der Welt macht mich wirklich erholt.",
        scores: { P: 1, H: 3, C: 1, E: 0 },
      },
      {
        icon: "sentiment_very_dissatisfied",
        label: "Stimmungsabstürze oder Weinen ohne Grund",
        description: "Meine Emotionen fühlen sich unkontrollierbar an – besonders vor der Periode.",
        scores: { P: 1, H: 0, C: 1, E: 3 },
      },
      {
        icon: "sentiment_worried",
        label: "Innere Unruhe, obwohl ich erschöpft bin",
        description: "Ich bin müde, aber kann nicht abschalten. Angst oder Nervosität ohne klaren Auslöser.",
        scores: { P: 0, H: 0, C: 4, E: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "Was beobachtest du an deinem Körper?",
    subtitle: "Körperliche Signale sind oft die ersten Hinweise auf hormonelle Veränderungen.",
    options: [
      {
        icon: "ac_unit",
        label: "Frieren, Haarausfall, trockene Haut",
        description: "Ich friere leicht, verliere mehr Haare als früher und meine Haut ist deutlich trockener.",
        scores: { P: 0, H: 4, C: 0, E: 0 },
      },
      {
        icon: "monitor_weight",
        label: "Bauchgewichtszunahme trotz gleicher Ernährung",
        description: "Ich nehme am Bauch zu, ohne mehr zu essen – und nehme trotz Sport kaum ab.",
        scores: { P: 2, H: 1, C: 1, E: 0 },
      },
      {
        icon: "water_drop",
        label: "Blähungen, Brustspannen, Akne vor der Periode",
        description: "In der Woche vor meiner Periode fühle ich mich aufgedunsen, meine Brust ist empfindlich oder ich bekomme Pickeln.",
        scores: { P: 0, H: 0, C: 0, E: 4 },
      },
      {
        icon: "favorite",
        label: "Herzrasen oder Herzklopfen in Ruhephasen",
        description: "Mein Herz rast oder stolpert – oft abends oder ohne körperliche Anstrengung.",
        scores: { P: 1, H: 0, C: 3, E: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "Wie schläfst du?",
    subtitle: "Schlafmuster spiegeln den Hormonhaushalt direkt wider.",
    options: [
      {
        icon: "device_thermostat",
        label: "Ich wache durch Hitze oder Schwitzen auf",
        description: "Nachts werde ich von Hitzewallungen oder Schwitzen geweckt – manchmal mehrfach.",
        scores: { P: 4, H: 0, C: 0, E: 0 },
      },
      {
        icon: "bedtime",
        label: "Durchschlafen, aber morgens trotzdem erschöpft",
        description: "Ich schlafe durch, aber das Aufwachen fühlt sich an wie gar nicht geschlafen.",
        scores: { P: 0, H: 3, C: 1, E: 0 },
      },
      {
        icon: "psychology",
        label: "Nicht einschlafen können – Gedankenkarussell",
        description: "Abends dreht sich mein Kopf, obwohl ich müde bin. Ich komme nicht zur Ruhe.",
        scores: { P: 0, H: 0, C: 4, E: 1 },
      },
      {
        icon: "calendar_month",
        label: "Schlechter Schlaf nur rund um meine Periode",
        description: "In der Woche vor oder während meiner Blutung schlafe ich deutlich schlechter.",
        scores: { P: 0, H: 0, C: 1, E: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "Wie ist dein Zyklus aktuell?",
    subtitle: "Der Zyklus ist das sensibelste Barometer des weiblichen Hormonhaushalts.",
    options: [
      {
        icon: "change_history",
        label: "Kürzer, unregelmäßiger oder setzt manchmal aus",
        description: "Mein Zyklus hat sich verändert – er ist kürzer, länger oder kommt unregelmäßig.",
        scores: { P: 3, H: 0, C: 0, E: 1 },
      },
      {
        icon: "crisis_alert",
        label: "Starke PMS: Schmerzen, Stimmungsschwankungen, Erschöpfung",
        description: "Die Woche vor meiner Periode ist wie eine andere Person – körperlich und emotional.",
        scores: { P: 0, H: 0, C: 1, E: 4 },
      },
      {
        icon: "block",
        label: "Seit mehr als 12 Monaten keine Periode mehr",
        description: "Meine Periode ist dauerhaft ausgeblieben – ich bin in der Menopause.",
        scores: { P: 4, H: 0, C: 0, E: 0 },
      },
      {
        icon: "help",
        label: "Zyklus regelmäßig, aber ich fühle mich trotzdem nicht gut",
        description: "Mein Zyklus ist unauffällig, aber ich fühle mich dauerhaft erschöpft oder unwohl.",
        scores: { P: 0, H: 2, C: 2, E: 1 },
      },
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
