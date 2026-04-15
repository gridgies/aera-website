import { QuizQuestion, Condition, Step, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Themen", href: "/themen" },
  { label: "Expert:innen", href: "/experten" },
  { label: "Wissenschaft", href: "/wissenschaft" },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ─── Q1: Alter ────────────────────────────────────────────────────────────────
  // Scores are all zero; the engine reads ageGroup to apply profile multipliers.
  {
    id: 1,
    question: "Wie alt bist du?",
    subtitle: "Dein Alter ist der wichtigste Kontext – er bestimmt, welche Hormonsysteme relevant sind.",
    options: [
      {
        icon: "school",
        label: "15–24 Jahre",
        description: "Reproduktive Phase, Hormonsystem noch im Aufbau.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        ageGroup: "young",
      },
      {
        icon: "work",
        label: "25–34 Jahre",
        description: "Peak-Reproduktionsjahre – PCOS und Eisenmangel am häufigsten.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        ageGroup: "thirties",
      },
      {
        icon: "family_restroom",
        label: "35–44 Jahre",
        description: "Frühe hormonelle Verschiebungen, Perimenopause kann beginnen.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        ageGroup: "early_peri",
      },
      {
        icon: "spa",
        label: "45–54 Jahre",
        description: "Klassische Perimenopause- und Menopause-Phase.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        ageGroup: "peri",
      },
      {
        icon: "favorite",
        label: "55+ Jahre",
        description: "Postmenopause – neues hormonelles Gleichgewicht, Langzeitprävention im Fokus.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        ageGroup: "post",
      },
    ],
  },

  // ─── Q2: Zyklus ──────────────────────────────────────────────────────────────
  // Also used by the engine for P sub-profile (PP/M/PM) and POI warning.
  {
    id: 2,
    question: "Wie ist dein Zyklus aktuell?",
    subtitle: "Der Zyklus ist das sensibelste Barometer des weiblichen Hormonhaushalts.",
    options: [
      {
        icon: "check_circle",
        label: "Regelmäßig (25–35 Tage), keine größeren Probleme",
        description: "Mein Zyklus kommt verlässlich und ohne starke Beschwerden.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
      {
        icon: "change_history",
        label: "Unregelmäßig – mal früher, mal später",
        description: "Mein Zyklus schwankt deutlich – manchmal 3–4 Wochen, manchmal 5–6.",
        scores: { P: 1, H: 0, C: 1, E: 1, A: 2, Fe: 0 },
      },
      {
        icon: "schedule",
        label: "Sehr selten – mehr als 5 Wochen zwischen Perioden",
        description: "Ich bekomme weniger als 8 Perioden pro Jahr oder sie bleiben wochenlang aus.",
        scores: { P: 2, H: 0, C: 0, E: 1, A: 4, Fe: 0 },
      },
      {
        icon: "crisis_alert",
        label: "Regelmäßig, aber starke PMS – die Woche davor ist die Hölle",
        description: "Mein Zyklus ist pünktlich, aber die Tage vorher sind körperlich und emotional extrem.",
        scores: { P: 0, H: 0, C: 1, E: 4, A: 0, Fe: 0 },
      },
      {
        icon: "block",
        label: "Seit über 12 Monaten keine Periode",
        description: "Meine Blutung ist dauerhaft ausgeblieben.",
        scores: { P: 4, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
    ],
  },

  // ─── Q3: Schmerz & Blutung ────────────────────────────────────────────────────
  // endoSignal is read separately by the engine for the endometriosis flag.
  {
    id: 3,
    question: "Wie erlebst du deine Periode?",
    subtitle: "Schmerz und Blutungsstärke sind klinisch wichtige Signale – sprich sie ruhig deutlich an.",
    options: [
      {
        icon: "sentiment_satisfied",
        label: "Unauffällig – keine starken Schmerzen, normale Blutung",
        description: "Meine Periode kommt ohne besondere Beschwerden.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        endoSignal: 0,
      },
      {
        icon: "emergency",
        label: "Starke Krämpfe, die mich im Alltag einschränken",
        description: "Meine Regelschmerzen sind so stark, dass ich Schmerzmittel brauche oder nicht arbeitsfähig bin.",
        scores: { P: 0, H: 0, C: 0, E: 2, A: 1, Fe: 0 },
        endoSignal: 2,
      },
      {
        icon: "warning",
        label: "Beckenschmerzen auch außerhalb der Periode oder beim Sex",
        description: "Ich habe Unterleibsschmerzen auch zwischen den Perioden oder Schmerzen beim Geschlechtsverkehr.",
        scores: { P: 0, H: 0, C: 0, E: 1, A: 0, Fe: 0 },
        endoSignal: 3,
      },
      {
        icon: "water_drop",
        label: "Sehr starke oder sehr lange Blutungen",
        description: "Ich blute länger als 7 Tage, bilde Klumpen oder muss Binden/Tampons sehr häufig wechseln.",
        scores: { P: 0, H: 0, C: 0, E: 2, A: 0, Fe: 3 },
        endoSignal: 1,
      },
      {
        icon: "report",
        label: "Sowohl starke Schmerzen als auch starke Blutungen",
        description: "Beides trifft auf mich zu – starke Krämpfe und sehr starke Blutung.",
        scores: { P: 0, H: 0, C: 0, E: 2, A: 1, Fe: 3 },
        endoSignal: 3,
      },
      {
        icon: "do_not_disturb",
        label: "Keine Periode (nicht zutreffend)",
        description: "Ich habe keine Menstruation (Menopause, Schwangerschaft, Verhütung etc.).",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        endoSignal: 0,
      },
    ],
  },

  // ─── Q4: Stärkstes Symptom ───────────────────────────────────────────────────
  {
    id: 4,
    question: "Was belastet dich aktuell am stärksten?",
    subtitle: "Wähle das Symptom, das deinen Alltag am meisten einschränkt.",
    options: [
      {
        icon: "thermostat",
        label: "Hitzewallungen oder Nachtschweiß",
        description: "Plötzliche Hitzeschübe oder Schwitzen – oft nachts oder ohne erkennbaren Auslöser.",
        scores: { P: 4, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
      {
        icon: "battery_low",
        label: "Tiefe Erschöpfung – Schlafen hilft nicht",
        description: "Ich bin nach dem Aufwachen bereits erschöpft. Kein Schlaf macht mich wirklich erholt.",
        scores: { P: 1, H: 2, C: 1, E: 0, A: 0, Fe: 2 },
      },
      {
        icon: "ac_unit",
        label: "Haarausfall, Kälteempfindlichkeit oder trockene Haut",
        description: "Ich verliere deutlich mehr Haare, friere ständig oder meine Haut ist ausgetrocknet.",
        scores: { P: 0, H: 4, C: 0, E: 0, A: 0, Fe: 1 },
      },
      {
        icon: "sentiment_worried",
        label: "Stimmungsabstürze, Angst oder innere Unruhe",
        description: "Ich bin emotional instabil, reizbar oder angespannt – oft ohne klaren Auslöser.",
        scores: { P: 0, H: 0, C: 2, E: 2, A: 0, Fe: 0 },
      },
      {
        icon: "face_retouching_natural",
        label: "Akne (Kinn/Kiefer), Gewichtszunahme am Bauch oder Körperbehaarung",
        description: "Unreine Haut im Kinn-/Kieferbereich, Bauchfett trotz normaler Ernährung oder unerwünschter Haarwuchs.",
        scores: { P: 0, H: 0, C: 0, E: 1, A: 4, Fe: 0 },
      },
      {
        icon: "sentiment_satisfied",
        label: "Keine starken Beschwerden",
        description: "Ich fühle mich aktuell gut oder habe nur gelegentliche, leichte Symptome.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
    ],
  },

  // ─── Q5: Körpersignale (multi-select) ────────────────────────────────────────
  {
    id: 5,
    question: "Was beobachtest du an deinem Körper?",
    subtitle: "Mehrfachauswahl möglich – körperliche Signale treten oft zusammen auf.",
    multiSelect: true,
    options: [
      {
        icon: "ac_unit",
        label: "Ständig frieren / Kälteempfindlichkeit",
        description: "Mir ist immer kälter als anderen – selbst im Sommer.",
        scores: { P: 0, H: 3, C: 0, E: 0, A: 0, Fe: 1 },
      },
      {
        icon: "content_cut",
        label: "Haarausfall (Kopfhaut)",
        description: "Ich verliere deutlich mehr Haare beim Waschen oder Bürsten als früher.",
        scores: { P: 0, H: 2, C: 0, E: 0, A: 1, Fe: 2 },
      },
      {
        icon: "monitor_weight",
        label: "Gewichtszunahme am Bauch ohne Ernährungsänderung",
        description: "Ich nehme am Bauch zu, obwohl ich nicht mehr esse als früher.",
        scores: { P: 1, H: 1, C: 1, E: 0, A: 2, Fe: 0 },
      },
      {
        icon: "water_drop",
        label: "Brustspannen oder Blähungen vor der Periode",
        description: "In der Woche vor der Blutung ist meine Brust empfindlich oder ich fühle mich aufgedunsen.",
        scores: { P: 0, H: 0, C: 0, E: 3, A: 0, Fe: 0 },
      },
      {
        icon: "face_retouching_natural",
        label: "Akne am Kinn oder Kiefer",
        description: "Unreine Haut vor allem im Kinn- und Kieferbereich – oft zyklisch.",
        scores: { P: 0, H: 0, C: 0, E: 1, A: 2, Fe: 0 },
      },
      {
        icon: "accessibility",
        label: "Vermehrter Haarwuchs im Gesicht oder am Körper",
        description: "Ich bemerke unerwünschten Haarwuchs im Gesicht, an der Brust oder am Bauch.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 3, Fe: 0 },
      },
      {
        icon: "favorite",
        label: "Herzrasen oder Herzklopfen ohne körperliche Anstrengung",
        description: "Mein Herz rast oder stolpert in Ruhe – oft abends oder beim Einschlafen.",
        scores: { P: 1, H: 0, C: 2, E: 1, A: 0, Fe: 1 },
      },
      {
        icon: "sentiment_satisfied",
        label: "Keines davon trifft zu",
        description: "Ich beobachte keine dieser körperlichen Veränderungen.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
        exclusive: true,
      },
    ],
  },

  // ─── Q6: Schlaf ──────────────────────────────────────────────────────────────
  {
    id: 6,
    question: "Wie schläfst du?",
    subtitle: "Schlafmuster spiegeln den Hormonhaushalt direkt wider.",
    options: [
      {
        icon: "device_thermostat",
        label: "Ich wache durch Hitze oder Schwitzen auf",
        description: "Nachts werde ich von Hitzewallungen oder Schwitzen geweckt – manchmal mehrfach.",
        scores: { P: 4, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
      {
        icon: "bedtime",
        label: "Durchschlafen, aber morgens trotzdem erschöpft",
        description: "Ich schlafe durch, aber das Aufwachen fühlt sich an wie gar nicht geschlafen.",
        scores: { P: 0, H: 2, C: 1, E: 0, A: 0, Fe: 2 },
      },
      {
        icon: "psychology",
        label: "Nicht einschlafen können – Gedankenkarussell",
        description: "Abends dreht sich mein Kopf, obwohl ich müde bin. Ich komme nicht zur Ruhe.",
        scores: { P: 0, H: 0, C: 5, E: 1, A: 0, Fe: 0 },
      },
      {
        icon: "calendar_month",
        label: "Schlechter Schlaf nur rund um meine Periode",
        description: "In der Woche vor oder während der Blutung schlafe ich deutlich schlechter.",
        scores: { P: 0, H: 0, C: 1, E: 3, A: 0, Fe: 0 },
      },
      {
        icon: "sentiment_satisfied",
        label: "Ich schlafe gut und fühle mich ausgeschlafen",
        description: "Mein Schlaf ist erholsam, ich habe keine Einschlaf- oder Durchschlafprobleme.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
    ],
  },

  // ─── Q7: Energiemuster ────────────────────────────────────────────────────────
  {
    id: 7,
    question: "Wie würdest du deine Energie beschreiben?",
    subtitle: "Das Energiemuster über den Tag verrät viel über das hormonelle Gleichgewicht.",
    options: [
      {
        icon: "battery_0_bar",
        label: "Chronisch flach – seit Monaten oder Jahren keine richtige Energie",
        description: "Ich erinnere mich kaum noch daran, mich richtig ausgeruht oder energiegeladen zu fühlen.",
        scores: { P: 0, H: 2, C: 0, E: 0, A: 0, Fe: 2 },
      },
      {
        icon: "sync_problem",
        label: "Tagsüber erschöpft, abends hellwach und nicht abschaltbar",
        description: "Das klassische 'Tired but wired' – müde aber rastlos.",
        scores: { P: 0, H: 0, C: 4, E: 0, A: 0, Fe: 0 },
      },
      {
        icon: "trending_down",
        label: "Energie schwankt stark – oft zyklisch oder unvorhersehbar",
        description: "Mal ist alles gut, dann wieder total leer – häufig abhängig von Zyklusphase oder Stress.",
        scores: { P: 1, H: 0, C: 1, E: 2, A: 0, Fe: 0 },
      },
      {
        icon: "check_circle",
        label: "Gute Energie – nur rund um den Zyklus anders",
        description: "Ich fühle mich meistens gut, aber kurz vor der Periode fällt meine Energie ab.",
        scores: { P: 1, H: 0, C: 0, E: 2, A: 0, Fe: 0 },
      },
      {
        icon: "sentiment_satisfied",
        label: "Generell okay – keine Energieprobleme",
        description: "Meine Energie ist stabil und ausreichend.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
    ],
  },

  // ─── Q8: Kontext ─────────────────────────────────────────────────────────────
  {
    id: 8,
    question: "Was hat dich zu diesem Check geführt?",
    subtitle: "Dein Kontext hilft uns, dein Ergebnis richtig einzuordnen.",
    options: [
      {
        icon: "science",
        label: "Ich habe bereits Hashimoto, eine Schilddrüsen- oder Autoimmundiagnose",
        description: "Eine Ärztin oder ein Arzt hat mir diese Diagnose bereits bestätigt.",
        scores: { P: 0, H: 5, C: 0, E: 0, A: 0, Fe: 0 },
      },
      {
        icon: "cycle",
        label: "Ich habe bereits PCOS, Endometriose oder eine andere gynäkologische Diagnose",
        description: "Eine gynäkologische Erkrankung wurde bei mir bereits diagnostiziert.",
        scores: { P: 0, H: 0, C: 0, E: 1, A: 3, Fe: 0 },
      },
      {
        icon: "help",
        label: "Meine Ärztin findet nichts – aber ich fühle mich dauerhaft nicht gut",
        description: "Meine Blutwerte sind 'normal', aber meine Beschwerden sind real.",
        scores: { P: 0, H: 2, C: 2, E: 0, A: 0, Fe: 1 },
      },
      {
        icon: "trending_up",
        label: "Meine Symptome werden schlimmer – ich suche nach Antworten",
        description: "Etwas verändert sich spürbar, und ich möchte verstehen, was dahintersteckt.",
        scores: { P: 1, H: 1, C: 1, E: 1, A: 0, Fe: 0 },
      },
      {
        icon: "explore",
        label: "Ich bin neugierig – fühle mich okay, möchte vorsorgen",
        description: "Mir geht es gut, aber ich möchte meinen Hormonstatus besser verstehen.",
        scores: { P: 0, H: 0, C: 0, E: 0, A: 0, Fe: 0 },
      },
    ],
  },
];

export const CONDITIONS: Condition[] = [
  { icon: "light_mode", title: "Menopause", description: "Souverän durch die Transition mit sanfter Balance.", href: "/menopause" },
  { icon: "eco", title: "Hashimoto", description: "Stoffwechsel optimieren und Entzündungen reduzieren.", href: "/hashimoto" },
  { icon: "science", title: "Schilddrüse", description: "TSH-Werte verstehen und Energie zurückgewinnen.", href: "/schilddruese" },
  { icon: "favorite", title: "Hormone", description: "Östrogen, Progesteron und Cortisol in Balance bringen.", href: "/hormone" },
];


export const STEPS: Step[] = [
  {
    number: "Eins",
    title: "Fragen beantworten",
    description: "In einem fundierten digitalen Fragebogen erfassen wir deine Symptome, deinen Lebensstil und deine Ziele.",
    image: "/images/step-1.webp",
  },
  {
    number: "Zwei",
    title: "Erkenntnisse erhalten",
    description: "Du erhältst eine erste Auswertung, die dir erklärt, warum du dich so fühlst und was deine Hormone damit zu tun haben.",
    image: "/images/step-2.webp",
  },
  {
    number: "Drei",
    title: "Unterstützung bekommen",
    description: "Erhalte einen personalisierten Plan mit Empfehlungen für Ernährung, Supplements und Zugang zu Fachärzt:innen.",
    image: "/images/step-3.webp",
  },
];

export const WAITLIST_TOPICS = [
  { value: "hormone-zyklus", label: "Hormone & Zyklus" },
  { value: "menopause", label: "Menopause" },
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
