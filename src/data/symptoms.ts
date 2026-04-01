export interface FAQ {
  question: string;
  answer: string;
}

export interface Symptom {
  slug: string;
  name: string;
  nameFull: string;
  description: string;
  metaDescription: string;
  causes: string[];
  whenToSeeDoctor: string;
  naturalRemedies: string[];
  relatedConditions: string[];
  faqs: FAQ[];
}

export const SYMPTOMS_DATA: Record<string, Symptom> = {
  hitzewallungen: {
    slug: "hitzewallungen",
    name: "Hitzewallungen",
    nameFull: "Hitzewallungen",
    description:
      "Hitzewallungen sind plötzliche Wärmegefühle, meist in Brust, Hals und Gesicht, die oft mit Schweißausbrüchen und Herzrasen verbunden sind.",
    metaDescription:
      "Hitzewallungen: Ursachen, Dauer und was wirklich hilft. Alles über Hitzewallungen bei Wechseljahren und anderen hormonellen Ursachen.",
    causes: ["Östrogenabfall in den Wechseljahren", "Hormonschwankungen", "Stress", "Bestimmte Medikamente"],
    whenToSeeDoctor:
      "Wenn Hitzewallungen sehr häufig auftreten (>10x täglich), den Schlaf stark beeinträchtigen oder der Alltag erheblich eingeschränkt wird.",
    naturalRemedies: [
      "Isoflavone (Soja, Rotklee)",
      "Traubsilberkerze (Cimicifuga)",
      "Regulierung von Koffein und Alkohol",
      "Kühlende Kleidung und Bettwäsche",
      "Entspannungsübungen und Atemtechniken",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Wie lange dauern Hitzewallungen in den Wechseljahren?",
        answer:
          "Hitzewallungen können 1–5 Minuten andauern und treten bei vielen Frauen über mehrere Jahre auf. Im Durchschnitt dauern sie 7–10 Jahre, bei manchen Frauen auch länger.",
      },
      {
        question: "Was hilft sofort gegen Hitzewallungen?",
        answer:
          "Sofortige Maßnahmen sind: kühles Wasser trinken, kühles Tuch an Hals/Handgelenke, tiefe Atemübungen, lockere natürliche Kleidung. Langfristig helfen Hormontherapie oder pflanzliche Mittel.",
      },
      {
        question: "Können Hitzewallungen auch andere Ursachen haben?",
        answer:
          "Ja. Hitzewallungen können auch durch Schilddrüsenerkrankungen, bestimmte Medikamente, Infektionen oder Stress ausgelöst werden. Eine ärztliche Abklärung ist wichtig.",
      },
    ],
  },
  schlafstoerungen: {
    slug: "schlafstoerungen",
    name: "Schlafstörungen",
    nameFull: "Schlafstörungen",
    description:
      "Schlafstörungen bei Frauen mit hormonellen Veränderungen äußern sich oft als Ein- oder Durchschlafprobleme, häufiges Aufwachen oder nicht erholsamer Schlaf.",
    metaDescription:
      "Schlafstörungen bei Frauen: Hormonelle Ursachen, Wechseljahre, Hashimoto und was wirklich hilft. Medizinisch fundierte Tipps für besseren Schlaf.",
    causes: [
      "Östrogenabfall in der Perimenopause",
      "Nachtschweiß durch Hitzewallungen",
      "Erhöhter Cortisolspiegel",
      "Schilddrüsenfehlfunktion",
    ],
    whenToSeeDoctor:
      "Bei anhaltenden Schlafproblemen über mehr als 3 Wochen oder wenn Alltagsfunktionen stark beeinträchtigt sind.",
    naturalRemedies: [
      "Regelmäßiger Schlaf-Wach-Rhythmus",
      "Kühles, dunkles Schlafzimmer",
      "Kein Koffein nach 14 Uhr",
      "Magnesium am Abend",
      "Entspannungsroutinen (Yoga, Meditation)",
    ],
    relatedConditions: ["menopause", "hashimoto", "hormone"],
    faqs: [
      {
        question: "Warum schlafen Frauen in den Wechseljahren schlecht?",
        answer:
          "Sinkende Östrogen- und Progesteronspiegel stören den Schlafrhythmus direkt. Dazu kommen Hitzewallungen und Nachtschweiß, die Frauen wecken. Progesteron hat eine beruhigende Wirkung – sein Rückgang kann zu Angst und Einschlafproblemen führen.",
      },
      {
        question: "Kann Hashimoto Schlafprobleme verursachen?",
        answer:
          "Ja. Bei Hashimoto kann sowohl eine Unterfunktion (macht müde, aber stört Schlafqualität) als auch eine Überfunktionsphase (Herzrasen, Unruhe) den Schlaf beeinträchtigen.",
      },
    ],
  },
  muedigkeit: {
    slug: "muedigkeit",
    name: "Müdigkeit",
    nameFull: "Chronische Müdigkeit und Erschöpfung",
    description:
      "Anhaltende Müdigkeit und Erschöpfung sind häufige Symptome hormoneller Dysbalancen und können die Lebensqualität stark einschränken.",
    metaDescription:
      "Chronische Müdigkeit bei Frauen: Hormonelle Ursachen (Wechseljahre, Hashimoto, Schilddrüse), Diagnose und was wirklich hilft.",
    causes: [
      "Schilddrüsenunterfunktion (Hashimoto)",
      "Östrogenabfall in den Wechseljahren",
      "Eisenmangel",
      "Vitamin-D-Mangel",
      "Schlafstörungen",
      "Nebennierenerschöpfung",
    ],
    whenToSeeDoctor:
      "Bei anhaltender Erschöpfung, die durch Schlaf nicht besser wird, oder wenn sie plötzlich auftritt, immer zum Arzt.",
    naturalRemedies: [
      "Blutwerte prüfen lassen (Eisen, Ferritin, Vitamin D, TSH)",
      "Regelmäßige Bewegung (dosiert)",
      "Ausgewogene Ernährung mit ausreichend Protein",
      "Stressreduktion",
      "Schlafhygiene verbessern",
    ],
    relatedConditions: ["hashimoto", "menopause", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Warum bin ich als Frau immer so müde?",
        answer:
          "Chronische Müdigkeit bei Frauen hat oft hormonelle Ursachen: Schilddrüsenunterfunktion (Hashimoto), sinkende Östrogen- und Progesteronspiegel in der Perimenopause, Eisenmangel oder Vitamin-D-Mangel. Ein Blutbild ist der erste Schritt zur Ursachenforschung.",
      },
      {
        question: "Welche Blutwerte bei Müdigkeit testen lassen?",
        answer:
          "Wichtige Werte: TSH (Schilddrüse), fT3, fT4, TPO-Antikörper (Hashimoto), Ferritin (Eisenspeicher), Vitamin D, Vitamin B12, Cortisol (Nebenniere), Blutzucker (HbA1c).",
      },
    ],
  },
  gewichtszunahme: {
    slug: "gewichtszunahme",
    name: "Gewichtszunahme",
    nameFull: "Gewichtszunahme trotz gesunder Ernährung",
    description:
      "Unerklärliche Gewichtszunahme, besonders im Bauchbereich, ist ein häufiges Symptom hormoneller Veränderungen und kann trotz Ernährungsumstellung anhalten.",
    metaDescription:
      "Gewichtszunahme trotz Diät? Hormonelle Ursachen bei Wechseljahren, Hashimoto und Schilddrüse. Was wirklich hilft und wann zum Arzt.",
    causes: [
      "Östrogenabfall verlagert Fett in den Bauchbereich",
      "Verlangsamter Stoffwechsel durch Schilddrüsenunterfunktion",
      "Insulinresistenz",
      "Cortisolerhöhung durch Stress",
      "Progesteronmangel",
    ],
    whenToSeeDoctor:
      "Bei unbeabsichtigter Gewichtszunahme von mehr als 5 kg ohne Änderung der Ernährung immer ärztlich abklären lassen.",
    naturalRemedies: [
      "Proteinreiche Ernährung",
      "Krafttraining (erhält Muskelmasse)",
      "Schlaf priorisieren",
      "Stressmanagement",
      "Intervallfasten (nach ärztlicher Rücksprache)",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Warum nehme ich in den Wechseljahren zu?",
        answer:
          "Sinkende Östrogenspiegel verlagern Fett von Hüften und Oberschenkeln in den Bauchbereich. Gleichzeitig verlangsamt sich der Stoffwechsel, und der Muskelabbau nimmt zu. Regelmäßiges Krafttraining und proteinreiche Ernährung helfen am meisten.",
      },
      {
        question: "Kann Hashimoto Gewichtszunahme verursachen?",
        answer:
          "Ja. Eine Schilddrüsenunterfunktion durch Hashimoto verlangsamt den Stoffwechsel erheblich. Wenn die Schilddrüsenwerte gut eingestellt sind, normalisiert sich das Gewicht oft wieder.",
      },
    ],
  },
  haarausfall: {
    slug: "haarausfall",
    name: "Haarausfall",
    nameFull: "Haarausfall bei Frauen",
    description:
      "Haarausfall bei Frauen (Alopezie) ist oft hormonell bedingt und kann auf Schilddrüsenerkrankungen, Wechseljahre oder andere hormonelle Dysbalancen hinweisen.",
    metaDescription:
      "Haarausfall bei Frauen: Hormonelle Ursachen (Wechseljahre, Hashimoto, Eisenmangel), Diagnose und Behandlung. Wann zum Arzt?",
    causes: [
      "Schilddrüsenunterfunktion",
      "Eisenmangel / Ferritinmangel",
      "Östrogen- und Progesteronabfall",
      "Androgenüberschuss (PCOS)",
      "Stress (Telogen-Effluvium)",
      "Nährstoffmangel (Biotin, Zink)",
    ],
    whenToSeeDoctor:
      "Bei deutlich sichtbarem Haarverlust, kahlen Stellen oder plötzlichem starkem Haarausfall immer ärztlich abklären.",
    naturalRemedies: [
      "Ferritin-Spiegel optimieren (Zielwert >70 µg/l)",
      "Vitamin D und Zink supplementieren",
      "Scalp-Massagen",
      "Sanfte Haarpflege, kein Hitzestress",
    ],
    relatedConditions: ["hashimoto", "menopause", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Welche Blutwerte bei Haarausfall testen lassen?",
        answer:
          "Ferritin (Eisenspeicher, Zielwert >70), TSH, fT3, fT4, Vitamin D, Zink, Biotin, DHEA-S, Testosteron, Östradiol. Diese Werte decken die häufigsten hormonellen und nutritiven Ursachen ab.",
      },
      {
        question: "Kann Hashimoto Haarausfall verursachen?",
        answer:
          "Ja. Schilddrüsenhormone sind für den Haarwachstumszyklus essentiell. Bei Hashimoto-bedingter Unterfunktion kann diffuser Haarausfall auftreten, der sich bei guter Einstellung der Schilddrüsenwerte bessert.",
      },
    ],
  },
  stimmungsschwankungen: {
    slug: "stimmungsschwankungen",
    name: "Stimmungsschwankungen",
    nameFull: "Stimmungsschwankungen und Reizbarkeit",
    description:
      "Hormonell bedingte Stimmungsschwankungen, Reizbarkeit und depressive Verstimmungen sind häufig in der Perimenopause und bei anderen hormonellen Erkrankungen.",
    metaDescription:
      "Stimmungsschwankungen durch Hormone: Wechseljahre, Hashimoto, PMS. Ursachen verstehen und was wirklich hilft.",
    causes: [
      "Schwankende Östrogenspiegel in der Perimenopause",
      "Progesteronmangel",
      "Schilddrüsendysregulation",
      "Schlafentzug durch Hitzewallungen",
      "Cortisol-Dysregulation",
    ],
    whenToSeeDoctor:
      "Bei anhaltender Niedergeschlagenheit, Angststörungen oder Suizidgedanken sofort ärztliche Hilfe suchen.",
    naturalRemedies: [
      "Regelmäßige körperliche Bewegung",
      "Omega-3-Fettsäuren",
      "Stressmanagement (Meditation, Yoga)",
      "Soziale Unterstützung",
      "Schlaf priorisieren",
    ],
    relatedConditions: ["menopause", "hormone", "hashimoto"],
    faqs: [
      {
        question: "Sind Stimmungsschwankungen in den Wechseljahren normal?",
        answer:
          "Ja, Stimmungsschwankungen sind in der Perimenopause sehr häufig. Schwankende Östrogenspiegel beeinflussen Serotonin und andere Neurotransmitter. Die meisten Frauen erleben eine Verbesserung nach der Menopause.",
      },
    ],
  },

  // --- New symptoms below ---

  konzentrationsprobleme: {
    slug: "konzentrationsprobleme",
    name: "Konzentrationsprobleme",
    nameFull: "Konzentrationsprobleme und Brain Fog",
    description:
      "Konzentrationsprobleme, Vergesslichkeit und der sogenannte \"Brain Fog\" gehören zu den belastendsten, aber wenig bekannten Symptomen hormoneller Veränderungen bei Frauen.",
    metaDescription:
      "Konzentrationsprobleme und Brain Fog bei Frauen: Hormonelle Ursachen (Wechseljahre, Hashimoto, Schilddrüse), Diagnose und was hilft.",
    causes: [
      "Östrogenabfall – Östrogen fördert die Gehirnfunktion und Gedächtniskonsolidierung",
      "Schilddrüsenunterfunktion (Hashimoto) – verlangsamt kognitive Prozesse",
      "Schlafmangel durch Hitzewallungen",
      "Cortisol-Dysregulation durch chronischen Stress",
      "Vitamin-B12- und Vitamin-D-Mangel",
    ],
    whenToSeeDoctor:
      "Bei plötzlich auftretenden, starken Gedächtnis- oder Konzentrationsproblemen, besonders wenn andere Symptome fehlen, zur Abklärung zum Arzt.",
    naturalRemedies: [
      "Regelmäßige aerobe Bewegung (verbessert Durchblutung und Kognition)",
      "Schlaf priorisieren und Schlafqualität verbessern",
      "Omega-3-Fettsäuren (DHA für Gehirngesundheit)",
      "Stressreduktion und Achtsamkeitstraining",
      "Blutwerte prüfen: B12, Vitamin D, TSH",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese"],
    faqs: [
      {
        question: "Was ist Brain Fog bei Frauen?",
        answer:
          "Brain Fog beschreibt ein Gefühl von geistiger Unklarheit, Vergesslichkeit und verlangsamtem Denken. Bei Frauen ist er häufig hormonell bedingt – durch Östrogenabfall in der Perimenopause oder eine Schilddrüsenunterfunktion durch Hashimoto.",
      },
      {
        question: "Gehen Konzentrationsprobleme in den Wechseljahren wieder weg?",
        answer:
          "Bei vielen Frauen verbessern sich kognitive Symptome nach der Menopause, wenn sich der Hormonhaushalt stabilisiert. Bis dahin helfen ausreichend Schlaf, Bewegung und – bei Bedarf – eine Hormontherapie.",
      },
      {
        question: "Kann Hashimoto Konzentrationsprobleme verursachen?",
        answer:
          "Ja. Schilddrüsenhormone sind essenziell für kognitive Funktionen. Eine unbehandelte Hypothyreose bei Hashimoto führt oft zu Vergesslichkeit, Verlangsamung und Brain Fog – diese verbessern sich mit optimaler Medikation.",
      },
    ],
  },

  nachtschweiss: {
    slug: "nachtschweiss",
    name: "Nachtschweiß",
    nameFull: "Nachtschweiß bei Frauen",
    description:
      "Starkes Schwitzen in der Nacht, das das Bettzeug durchnässt und den Schlaf unterbricht, ist ein klassisches Symptom der Wechseljahre und weiterer hormoneller Störungen.",
    metaDescription:
      "Nachtschweiß bei Frauen: Hormonelle Ursachen, Zusammenhang mit Wechseljahren und Schilddrüse. Was hilft gegen nächtliches Schwitzen?",
    causes: [
      "Östrogenabfall in der Perimenopause – destabilisiert die Körpertemperaturregulation",
      "Hitzewallungen, die nachts auftreten",
      "Schilddrüsenüberfunktion (Hyperthyreose)",
      "Erhöhter Cortisolspiegel",
      "Bestimmte Medikamente (z.B. Antidepressiva)",
    ],
    whenToSeeDoctor:
      "Bei starkem Nachtschweiß, der mehrfach pro Woche auftritt und den Schlaf massiv stört, oder wenn Nachtschweiß mit ungewolltem Gewichtsverlust oder Fieber kombiniert auftritt.",
    naturalRemedies: [
      "Kühles Schlafzimmer (16–18 °C empfohlen)",
      "Leichte, atmungsaktive Bettwäsche (Leinen, Bambus)",
      "Kein Alkohol und scharfes Essen am Abend",
      "Traubsilberkerze (Cimicifuga) – pflanzliche Option",
      "Leichte Entspannungsübungen vor dem Schlaf",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Warum schwitze ich nachts so stark?",
        answer:
          "Nächtliches Schwitzen bei Frauen ist häufig durch sinkende Östrogenspiegel in der Perimenopause bedingt. Östrogen reguliert den Hypothalamus, der die Körpertemperatur steuert. Fällt es ab, reagiert der Körper überempfindlich auf Temperaturveränderungen.",
      },
      {
        question: "Hilft Magnesium gegen Nachtschweiß?",
        answer:
          "Magnesium kann die Schlafqualität verbessern und Muskelverspannungen reduzieren, wirkt aber nicht direkt gegen hormonell bedingten Nachtschweiß. Pflanzliche Präparate mit Traubsilberkerze oder Rotklee zeigen in Studien bessere Wirkung.",
      },
    ],
  },

  libidoverlust: {
    slug: "libidoverlust",
    name: "Libidoverlust",
    nameFull: "Libidoverlust und Sexuelles Desinteresse",
    description:
      "Ein nachlassendes sexuelles Verlangen ist bei Frauen häufig hormonell bedingt und betrifft viele Frauen in der Perimenopause und darüber hinaus.",
    metaDescription:
      "Libidoverlust bei Frauen: Hormonelle Ursachen (Östrogen, Testosteron, Wechseljahre), was wirklich hilft und wann zum Arzt.",
    causes: [
      "Sinkende Östrogenspiegel – führen zu Scheidentrockenheit und reduziertem Wohlbefinden",
      "Testosteronabfall – Testosteron ist auch bei Frauen wichtig für die Libido",
      "Erschöpfung und Schlafmangel",
      "Psychologische Faktoren (Stress, Beziehungsprobleme)",
      "Antidepressiva und andere Medikamente",
    ],
    whenToSeeDoctor:
      "Wenn der Libidoverlust die Lebensqualität oder die Partnerschaft stark beeinträchtigt und länger als 3–6 Monate anhält.",
    naturalRemedies: [
      "Körperliche Aktivität – verbessert Durchblutung und Wohlbefinden",
      "Stressreduktion und mehr Schlaf",
      "Offene Kommunikation in der Partnerschaft",
      "Lokale Östrogentherapie (bei Scheidentrockenheit)",
      "Gleitgel auf Wasserbasis",
    ],
    relatedConditions: ["menopause", "hormone"],
    faqs: [
      {
        question: "Ist Libidoverlust in den Wechseljahren normal?",
        answer:
          "Ja, Libidoverlust ist in der Perimenopause und Menopause sehr häufig. Östrogen und Testosteron, die die Libido beeinflussen, nehmen ab. Dazu kommen Schlafstörungen, Stimmungsschwankungen und körperliche Beschwerden. Viele Frauen erleben, dass gezielte Behandlungen deutlich helfen.",
      },
      {
        question: "Welche Hormone sind für die weibliche Libido zuständig?",
        answer:
          "Östrogen, Progesteron und Testosteron (auch Frauen produzieren Testosteron in den Eierstöcken und Nebennieren) beeinflussen die Libido. In den Wechseljahren sinken alle drei – ein Hormontest kann zeigen, welche Werte im Ungleichgewicht sind.",
      },
    ],
  },

  scheidentrockenheit: {
    slug: "scheidentrockenheit",
    name: "Scheidentrockenheit",
    nameFull: "Scheidentrockenheit (vaginale Atrophie)",
    description:
      "Scheidentrockenheit entsteht durch sinkende Östrogenspiegel, die das vaginale Gewebe dünner und weniger feucht machen – ein häufiges, aber wenig besprochenes Symptom der Wechseljahre.",
    metaDescription:
      "Scheidentrockenheit: Ursachen, Behandlung und natürliche Hilfe. Wie Östrogenmangel das vaginale Gewebe verändert und was dagegen hilft.",
    causes: [
      "Östrogenabfall in der Perimenopause und Menopause",
      "Stillen (vorübergehend niedriges Östrogen)",
      "Chemotherapie oder Strahlentherapie",
      "Antidepressiva und Antihistaminika",
      "Zu häufige Verwendung aggressiver Intimhygieneprodukte",
    ],
    whenToSeeDoctor:
      "Bei anhaltenden Beschwerden, Schmerzen beim Geschlechtsverkehr, wiederkehrenden Infektionen oder Blutungen nach der Menopause.",
    naturalRemedies: [
      "Lokale Östrogentherapie (Creme, Zäpfchen) – sehr effektiv und sicher",
      "Feuchtigkeitsgels für den Intimbereich",
      "Gleitmittel auf Wasserbasis",
      "Hyaluronsäure-Gels (nicht-hormonell)",
      "Baumwolle als Unterwäsche bevorzugen",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Ist Scheidentrockenheit ein Zeichen der Wechseljahre?",
        answer:
          "Scheidentrockenheit gehört zu den häufigsten Wechseljahresbeschwerden. Östrogen hält die Schleimhäute der Scheide feucht und elastisch. Sinkt der Spiegel, wird das Gewebe dünner (vaginale Atrophie) – ein Prozess, der sich nach der Menopause ohne Behandlung verstärkt.",
      },
      {
        question: "Was hilft am besten gegen Scheidentrockenheit?",
        answer:
          "Lokale Östrogenpräparate (Creme oder Zäpfchen) sind die effektivste Behandlung und werden direkt in die Scheide angewendet. Die Resorption ins Blut ist minimal, daher sind sie auch für Frauen mit bestimmten Risikofaktoren oft geeignet. Nicht-hormonelle Alternativen sind Hyaluronsäure-Gels.",
      },
    ],
  },

  frieren: {
    slug: "frieren",
    name: "Frieren",
    nameFull: "Ständiges Frieren und Kälteempfindlichkeit",
    description:
      "Übermäßige Kälteempfindlichkeit und das ständige Frieren trotz normaler Umgebungstemperatur ist ein häufiges Zeichen einer Schilddrüsenunterfunktion.",
    metaDescription:
      "Ständig frieren: Ursachen bei Frauen (Schilddrüsenunterfunktion, Hashimoto, Eisenmangel), Diagnose und was hilft.",
    causes: [
      "Schilddrüsenunterfunktion – verlangsamt den Stoffwechsel und die Wärmeproduktion",
      "Hashimoto Thyreoiditis",
      "Eisenmangel und Anämie",
      "Niedriger Blutdruck",
      "Untergewicht oder Essstörungen",
      "Raynaud-Syndrom",
    ],
    whenToSeeDoctor:
      "Bei anhaltendem Frieren, das von Müdigkeit, Gewichtszunahme oder Haarausfall begleitet wird, sollten Schilddrüsenwerte überprüft werden.",
    naturalRemedies: [
      "TSH, fT3, fT4 und TPO-Antikörper testen lassen",
      "Ferritin und Hämoglobin überprüfen",
      "Bewegung und Sport zur Durchblutungsförderung",
      "Warme, schichtweise Kleidung",
      "Ausreichend Kalorien und Nährstoffe zuführen",
    ],
    relatedConditions: ["hashimoto", "schilddruese"],
    faqs: [
      {
        question: "Warum friere ich immer, obwohl es anderen nicht kalt ist?",
        answer:
          "Ständige Kälteempfindlichkeit ist oft ein Zeichen einer Schilddrüsenunterfunktion. Die Schilddrüse reguliert den Grundumsatz und damit die Wärmeproduktion. Ist sie unteraktiv, entsteht zu wenig Wärme. Ein einfacher Bluttest (TSH) kann dies klären.",
      },
      {
        question: "Kann Hashimoto dazu führen, dass man immer friert?",
        answer:
          "Ja. Hashimoto führt häufig zu einer Schilddrüsenunterfunktion (Hypothyreose), die die Wärmeregulation beeinträchtigt. Mit der richtigen Einstellung der Schilddrüsenwerte durch L-Thyroxin verbessert sich die Kälteempfindlichkeit meist deutlich.",
      },
    ],
  },

  verstopfung: {
    slug: "verstopfung",
    name: "Verstopfung",
    nameFull: "Verstopfung und träge Verdauung",
    description:
      "Eine verlangsame Verdauung und Verstopfung sind häufige, aber oft nicht erkannte Symptome einer Schilddrüsenunterfunktion und hormoneller Veränderungen.",
    metaDescription:
      "Verstopfung durch Hormone: Schilddrüsenunterfunktion, Hashimoto und Wechseljahre als Ursachen. Was wirklich hilft.",
    causes: [
      "Schilddrüsenunterfunktion – verlangsamt die Darmperistaltik",
      "Progesteronabfall (Progesteron verlangsamt die Darmmuskulatur)",
      "Dehydration",
      "Zu wenig Ballaststoffe",
      "Bewegungsmangel",
      "Bestimmte Medikamente (Eisen, Kalzium)",
    ],
    whenToSeeDoctor:
      "Bei Blut im Stuhl, starken Bauchschmerzen, ungewolltem Gewichtsverlust oder wenn Verstopfung länger als 3 Wochen anhält.",
    naturalRemedies: [
      "Ausreichend Wasser trinken (mindestens 1,5–2 Liter täglich)",
      "Ballaststoffreiche Ernährung (Gemüse, Hülsenfrüchte, Vollkorn)",
      "Regelmäßige Bewegung",
      "Flohsamen oder Leinsamen",
      "Schilddrüsenwerte prüfen lassen",
    ],
    relatedConditions: ["hashimoto", "schilddruese"],
    faqs: [
      {
        question: "Kann Hashimoto Verstopfung verursachen?",
        answer:
          "Ja. Bei Hashimoto-bedingter Schilddrüsenunterfunktion verlangsamt sich der Stoffwechsel – inklusive der Darmbewegung. Verstopfung ist eines der klassischen Symptome einer Hypothyreose. Mit richtiger Einstellung der Schilddrüsenwerte normalisiert sich die Verdauung oft.",
      },
      {
        question: "Was hilft schnell gegen Verstopfung?",
        answer:
          "Kurzfristig helfen viel Wasser trinken, Bewegung und Flohsamenschalen. Bei chronischer Verstopfung mit anderen Symptomen wie Müdigkeit und Frieren immer die Schilddrüse abklären lassen.",
      },
    ],
  },

  "trockene-haut": {
    slug: "trockene-haut",
    name: "Trockene Haut",
    nameFull: "Trockene und schuppige Haut",
    description:
      "Trockene, schuppige Haut und Juckreiz können hormonelle Ursachen haben – insbesondere eine Schilddrüsenunterfunktion oder der Östrogenabfall in den Wechseljahren.",
    metaDescription:
      "Trockene Haut durch Hormone: Schilddrüsenunterfunktion (Hashimoto) und Wechseljahre als häufige Ursachen. Diagnose und Behandlung.",
    causes: [
      "Schilddrüsenunterfunktion – reduziert die Talgdrüsenaktivität",
      "Östrogenabfall – Östrogen fördert die Kollagenproduktion und Feuchtigkeit der Haut",
      "Vitamin-D- und Omega-3-Mangel",
      "Dehydration",
      "Zu häufiges Duschen mit heißem Wasser",
    ],
    whenToSeeDoctor:
      "Bei extremer Hauttrockenheit, Juckreiz, Hautrötungen oder wenn die Haut trotz Pflege sehr rau bleibt, Schilddrüsenwerte überprüfen.",
    naturalRemedies: [
      "Reichhaltige Feuchtigkeitscremes (Urea, Hyaluronsäure)",
      "Lauwarmes statt heißes Wasser beim Duschen",
      "Omega-3-Fettsäuren (intern und extern)",
      "Vitamin D optimieren",
      "Schilddrüsenwerte prüfen lassen",
    ],
    relatedConditions: ["hashimoto", "menopause"],
    faqs: [
      {
        question: "Kann Hashimoto trockene Haut verursachen?",
        answer:
          "Ja. Die Schilddrüse reguliert den Hautstoffwechsel. Bei Hypothyreose durch Hashimoto wird weniger Sebum produziert, die Hauterneuerung verlangsamt sich. Die Haut wird trocken, rau und kann jucken – ein klassisches Symptom, das sich bei guter Einstellung verbessert.",
      },
      {
        question: "Warum wird die Haut in den Wechseljahren trockener?",
        answer:
          "Östrogen fördert die Kollagenproduktion und hält die Haut feucht. Sinkt der Östrogenspiegel, verliert die Haut an Elastizität und Feuchtigkeit. Gute Skincare und – bei Bedarf – Hormontherapie können helfen.",
      },
    ],
  },

  akne: {
    slug: "akne",
    name: "Hormonelle Akne",
    nameFull: "Hormonelle Akne bei Frauen",
    description:
      "Hormonelle Akne tritt typischerweise im Kinn- und Kieferbereich auf und ist auf Hormonschwankungen zurückzuführen – besonders auf Androgenüberschuss und Progesteron-Östrogen-Dysbalancen.",
    metaDescription:
      "Hormonelle Akne bei Frauen: Ursachen (Östrogendominanz, Androgenüberschuss, PCOS), Diagnose und was wirklich hilft.",
    causes: [
      "Androgenüberschuss (erhöhtes Testosteron, DHEA-S)",
      "Progesteronmangel / Östrogendominanz",
      "PCOS (polyzystisches Ovarsyndrom)",
      "Insulinresistenz",
      "Absetzen der Pille",
    ],
    whenToSeeDoctor:
      "Bei persistierender Akne nach dem 25. Lebensjahr, besonders im Kinn/Kiefer-Bereich, sollte ein Hormonpanel gemacht werden.",
    naturalRemedies: [
      "Hormonpanel testen lassen (Testosteron, DHEA-S, LH/FSH)",
      "Zuckerarme Ernährung (senkt Insulinspiegel)",
      "Zink supplementieren",
      "Spearmint-Tee (kann Androgene leicht senken)",
      "Stressmanagement (Cortisol fördert Androgenproduktion)",
    ],
    relatedConditions: ["hormone"],
    faqs: [
      {
        question: "Was ist hormonelle Akne und woran erkenne ich sie?",
        answer:
          "Hormonelle Akne tritt meist im unteren Gesichtsdrittel auf – Kinn, Kiefer, Hals. Sie ist oft zyklusabhängig (schlimmer vor der Periode) und tritt bei Frauen häufig im Erwachsenenalter auf. Ursache sind Hormonschwankungen, die die Talgdrüsen stimulieren.",
      },
      {
        question: "Welche Hormone verursachen Akne bei Frauen?",
        answer:
          "Hauptursache ist ein relativer oder absoluter Androgenüberschuss (Testosteron, DHEA-S). Auch Östrogendominanz und Insulinresistenz spielen eine Rolle. Ein Gynäkologe oder Endokrinologe kann ein passendes Hormonpanel veranlassen.",
      },
    ],
  },

  pms: {
    slug: "pms",
    name: "PMS",
    nameFull: "Prämenstruelles Syndrom (PMS)",
    description:
      "PMS bezeichnet körperliche und psychische Beschwerden in der zweiten Zyklushälfte, die durch Hormonschwankungen – insbesondere den Abfall von Progesteron und Östrogen – ausgelöst werden.",
    metaDescription:
      "PMS Symptome und Ursachen: Warum Hormonschwankungen Stimmungsschwankungen, Schmerzen und Blähungen verursachen. Was wirklich hilft.",
    causes: [
      "Progesteronabfall in der Lutealphase",
      "Überempfindlichkeit gegenüber Hormonschwankungen",
      "Serotoninmangel (Östrogen beeinflusst Serotonin)",
      "Magnesiummangel",
      "Chronischer Stress (erhöht Cortisolspiegel)",
    ],
    whenToSeeDoctor:
      "Bei schweren PMS-Symptomen, die den Alltag erheblich beeinträchtigen (PMDS – prämenstruelle Dysphorie), ist ärztliche Behandlung wichtig.",
    naturalRemedies: [
      "Magnesium (200–400 mg täglich in der zweiten Zyklushälfte)",
      "Vitamin B6",
      "Regelmäßiger Ausdauersport",
      "Reduzierung von Zucker, Alkohol und Koffein",
      "Mönchspfeffer (Agnus castus) – pflanzlich",
    ],
    relatedConditions: ["hormone"],
    faqs: [
      {
        question: "Was sind typische PMS-Symptome?",
        answer:
          "PMS-Symptome treten in der Woche vor der Menstruation auf und können umfassen: Stimmungsschwankungen, Reizbarkeit, Traurigkeit, Brustspannen, Blähungen, Kopfschmerzen, Heißhunger und Wassereinlagerungen. Sie verschwinden mit Einsetzen der Blutung.",
      },
      {
        question: "Was hilft am besten gegen PMS?",
        answer:
          "Am effektivsten sind: Magnesium und Vitamin B6, regelmäßiger Sport, Stressreduktion und Ernährungsanpassung. Bei starken Symptomen kann Mönchspfeffer helfen. Bei sehr schweren Symptomen (PMDS) sind verschreibungspflichtige Medikamente oder Hormontherapie möglich.",
      },
      {
        question: "Kann PMS stärker werden mit zunehmendem Alter?",
        answer:
          "Ja. Viele Frauen berichten, dass PMS in den 30ern und 40ern intensiver wird – dies hängt mit beginnenden Hormonschwankungen der Perimenopause zusammen. Wenn PMS deutlich stärker wird, können erste Wechseljahre-Symptome dahinterstecken.",
      },
    ],
  },
};
