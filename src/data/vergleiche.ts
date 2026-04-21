export interface KeyDifference {
  aspect: string;
  a: string;
  b: string;
}

export interface LabTest {
  test: string;
  a: string;
  b: string;
}

export interface VergleichSource {
  authors: string;
  year: number;
  title: string;
  journal: string;
}

export interface VergleichPage {
  slug: string;
  conditionASlug: string;
  conditionBSlug: string;
  conditionAName: string;
  conditionBName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  confusionNote: string;
  sharedSymptoms: string[];
  conditionAOnlySymptoms: string[];
  conditionBOnlySymptoms: string[];
  keyDifferences: KeyDifference[];
  labTests: LabTest[];
  howToDifferentiate: string;
  faqs: { question: string; answer: string }[];
  sources: VergleichSource[];
}

export const VERGLEICHE_DATA: Record<string, VergleichPage> = {
  "hashimoto-oder-menopause": {
    slug: "hashimoto-oder-menopause",
    conditionASlug: "hashimoto",
    conditionBSlug: "menopause",
    conditionAName: "Hashimoto",
    conditionBName: "Menopause",
    title: "Hashimoto oder Wechseljahre? So erkennst du den Unterschied",
    metaTitle: "Hashimoto oder Wechseljahre? Symptome unterscheiden & richtig testen [2026]",
    metaDescription:
      "Müdigkeit, Haarausfall, Gewichtszunahme – Hashimoto oder Menopause? Diese Tabelle zeigt die Unterschiede & welche Labortests Klarheit bringen.",
    intro:
      "Müdigkeit, Haarausfall, Schlafprobleme, Stimmungsschwankungen, Gewichtszunahme – diese Symptome können sowohl auf Hashimoto Thyreoiditis als auch auf die Perimenopause bzw. Menopause hinweisen. Viele Frauen zwischen 35 und 55 Jahren stellen sich diese Frage, und sie ist berechtigt: Die Symptome überlappen sich so stark, dass selbst erfahrene Ärztinnen ohne Laborwerte keine sichere Diagnose stellen können. Dieses Begleitdokument zeigt dir, welche Anzeichen für welche Erkrankung sprechen – und welche Tests du brauchst, um Klarheit zu bekommen.",
    confusionNote:
      "Beide Erkrankungen betreffen das Hormonsystem und treten besonders häufig im mittleren Lebensalter auf. Hashimoto stört die Schilddrüsenhormonproduktion, die Menopause verändert die Östrogen- und Progesteronproduktion – beide beeinflussen Energie, Gewicht, Schlaf und Stimmung auf ähnliche Weise. Hinzu kommt: Hashimoto tritt bei Frauen mit Menopause überproportional häufig auf. Beide Erkrankungen gemeinsam zu haben, ist keine Seltenheit.",
    sharedSymptoms: [
      "muedigkeit",
      "gewichtszunahme",
      "haarausfall",
      "schlafstoerungen",
      "stimmungsschwankungen",
      "konzentrationsprobleme",
      "trockene-haut",
    ],
    conditionAOnlySymptoms: ["frieren", "verstopfung"],
    conditionBOnlySymptoms: ["hitzewallungen", "nachtschweiss", "scheidentrockenheit", "libidoverlust"],
    keyDifferences: [
      {
        aspect: "Alter beim Auftreten",
        a: "Jedes Alter; Häufigkeitsgipfel 30–50 Jahre",
        b: "Typischerweise 45–55 Jahre (Perimenopause ab ~40)",
      },
      {
        aspect: "Ursache",
        a: "Autoimmunreaktion gegen Schilddrüsengewebe",
        b: "Natürlicher Rückgang von Östrogen und Progesteron",
      },
      {
        aspect: "Charakteristisches Symptom",
        a: "Kälteintoleranz, Verstopfung, verlangsamter Puls",
        b: "Hitzewallungen, Nachtschweiß, Scheidentrockenheit",
      },
      {
        aspect: "Labordiagnose",
        a: "Erhöhter TSH, erniedrigtes fT4, positive Anti-TPO-Antikörper",
        b: "Erhöhtes FSH (>25 IU/L), erniedrigtes Östradiol",
      },
      {
        aspect: "Behandlung",
        a: "L-Thyroxin (bei Hypothyreose), Ernährungsanpassung, Stressreduktion",
        b: "Hormontherapie (HRT), pflanzliche Mittel, Lebensstilmaßnahmen",
      },
      {
        aspect: "Verlauf",
        a: "Chronisch, lebenslang; Schübe möglich",
        b: "Übergangsphase (Perimenopause 4–10 Jahre), dann Postmenopause",
      },
    ],
    labTests: [
      {
        test: "TSH (Thyreoidea-stimulierendes Hormon)",
        a: "Erhöht (>2,5 mU/L verdächtig, >4,0 mU/L pathologisch)",
        b: "Normal",
      },
      {
        test: "Freies T4 (fT4)",
        a: "Erniedrigt bei manifester Hypothyreose",
        b: "Normal",
      },
      {
        test: "Anti-TPO-Antikörper",
        a: "Positiv (>35 IU/ml) – beweisend für Hashimoto",
        b: "Nicht erhöht",
      },
      {
        test: "FSH (Follikel-stimulierendes Hormon)",
        a: "Normal (wenn keine gleichzeitige Menopause)",
        b: "Erhöht (>25 IU/L deutet auf Perimenopause hin)",
      },
      {
        test: "Östradiol (E2)",
        a: "Normal",
        b: "Erniedrigt (<50 pg/ml in der Postmenopause)",
      },
    ],
    howToDifferentiate:
      "Das entscheidende Unterscheidungsmerkmal im Alltag: Hitzewallungen und Nachtschweiß sind fast ausschließlich bei der Menopause. Kälteintoleranz und Verstopfung sind typischer für Hashimoto. Wer beides – Hitzewallungen UND Kälteempfindlichkeit – erlebt, sollte unbedingt beide Erkrankungen abklären lassen, da sie häufig gemeinsam auftreten. Ein einfaches Basislabor (TSH, fT4, Anti-TPO, FSH, Östradiol) klärt die Situation in der Regel innerhalb weniger Tage.",
    faqs: [
      {
        question: "Kann ich gleichzeitig Hashimoto und Menopause haben?",
        answer:
          "Ja – und das ist häufiger als viele denken. Frauen mit Autoimmunerkrankungen wie Hashimoto haben ein erhöhtes Risiko für frühzeitige Perimenopause. Außerdem können die hormonellen Veränderungen der Menopause Hashimoto-Schübe auslösen oder verstärken. Ein vollständiges Hormonschilddrüsenpanel gibt Klarheit.",
      },
      {
        question: "Welchen Bluttest sollte ich als erstes machen lassen?",
        answer:
          "Lass TSH, fT4, Anti-TPO-Antikörper und FSH in einem Blutbild bestimmen. Das reicht für eine erste Einordnung. Bei erhöhten Antikörpern zusätzlich Anti-Thyreoglobulin (Anti-Tg). Bei konkretem Menopauseverdacht auch Östradiol (E2).",
      },
      {
        question: "Werden Hashimoto-Symptome nach den Wechseljahren besser?",
        answer:
          "Nicht automatisch. Bei manchen Frauen stabilisiert sich Hashimoto nach der Menopause, bei anderen verschlechtert es sich, weil Östrogen eine modulierende Wirkung auf das Immunsystem hat. Eine regelmäßige TSH-Kontrolle bleibt auch nach der Menopause wichtig.",
      },
      {
        question: "Warum dauert es so lange, bis Hashimoto diagnostiziert wird?",
        answer:
          "Durchschnittlich dauert es 5–10 Jahre bis zur Diagnose. Ein Grund: TSH-Werte im 'Normalbereich' schließen Hashimoto nicht aus – die Antikörper können bereits positiv sein, bevor der TSH ansteigt. Ein weiterer Grund: Die Symptome werden häufig als Erschöpfung, Stress oder – bei Frauen über 40 – als Menopause fehlgedeutet.",
      },
    ],
    sources: [
      {
        authors: "Janegova A, Janega P, Rychly B et al.",
        year: 2015,
        title: "The role of Epstein-Barr virus infection in the development of autoimmune thyroid diseases",
        journal: "Endokrynologia Polska",
      },
      {
        authors: "Kristensen SL, Ramlau-Hansen CH, Ernst E et al.",
        year: 2014,
        title: "A very large proportion of women have endocrine disorders identified as risk factors for early menopause",
        journal: "European Journal of Endocrinology",
      },
      {
        authors: "Brinton LA, Schairer C, Stanford JL, Hoover RN",
        year: 1986,
        title: "Menstrual factors and risk of breast cancer",
        journal: "Cancer Investigation",
      },
      {
        authors: "Deutsche Gesellschaft für Endokrinologie",
        year: 2021,
        title: "Leitlinie Diagnostik und Therapie der Hypothyreose",
        journal: "AWMF Register Nr. 060-002",
      },
    ],
  },

  "schilddruese-oder-menopause": {
    slug: "schilddruese-oder-menopause",
    conditionASlug: "schilddruese",
    conditionBSlug: "menopause",
    conditionAName: "Schilddrüsenunterfunktion",
    conditionBName: "Menopause",
    title: "Schilddrüsenunterfunktion oder Menopause? Symptome im Vergleich",
    metaTitle: "Schilddrüsenunterfunktion oder Menopause? Unterschiede & Diagnose",
    metaDescription:
      "Müdigkeit, Gewichtszunahme, Haarausfall – Schilddrüsenunterfunktion und Menopause haben fast dieselben Symptome. Woran du sie erkennst und welche Blutwerte entscheiden.",
    intro:
      "Eine Frau Mitte 40 fühlt sich erschöpft, hat zugenommen, die Haare werden dünner. Ihr Arzt sagt: 'Das sind die Wechseljahre.' Aber stimmt das wirklich? Schilddrüsenunterfunktion (Hypothyreose) und Menopause gehören zu den am häufigsten verwechselten Erkrankungen – nicht weil Ärzte schlecht arbeiten, sondern weil ihre Symptome sich nahezu identisch anfühlen können. Dieser Artikel erklärt die wichtigsten Unterschiede und zeigt, welche Laborwerte die Diagnose sichern.",
    confusionNote:
      "Beide Erkrankungen betreffen den Hormonhaushalt und verursachen systemische Symptome, die den gesamten Körper betreffen. Hypothyreose senkt den Grundumsatz, die Menopause verändert den Östrogenhaushalt – beide führen zu Müdigkeit, Gewichtsproblemen und Stimmungsschwankungen. Die Schilddrüse reguliert zudem die Sensitivität für Sexualhormone, sodass eine Hypothyreose Menopause-ähnliche Symptome erzeugen kann, selbst wenn die Ovarien noch aktiv sind.",
    sharedSymptoms: ["muedigkeit", "gewichtszunahme", "haarausfall", "konzentrationsprobleme"],
    conditionAOnlySymptoms: ["frieren", "verstopfung"],
    conditionBOnlySymptoms: ["hitzewallungen", "nachtschweiss", "scheidentrockenheit", "libidoverlust", "stimmungsschwankungen"],
    keyDifferences: [
      {
        aspect: "Charakteristisches Leitsymptom",
        a: "Kälteintoleranz, langsamer Herzschlag, Verstopfung",
        b: "Hitzewallungen, Nachtschweiß, Zyklusveränderungen",
      },
      {
        aspect: "Körpertemperatur-Empfinden",
        a: "Zu kalt – auch bei normaler Raumtemperatur",
        b: "Zu heiß – plötzliche Hitzewellen, Schwitzen",
      },
      {
        aspect: "Ursache",
        a: "Unzureichende Schilddrüsenhormonproduktion (meist durch Hashimoto)",
        b: "Rückgang der Östrogen- und Progesteronproduktion",
      },
      {
        aspect: "Alter beim Auftreten",
        a: "Jedes Alter; nimmt mit dem Alter zu",
        b: "Typischerweise 45–55 Jahre",
      },
      {
        aspect: "Diagnosesicherung",
        a: "TSH erhöht, fT4 erniedrigt",
        b: "FSH erhöht (>25 IU/L), Östradiol erniedrigt",
      },
      {
        aspect: "Therapie",
        a: "L-Thyroxin (Levothyroxin), Dosisanpassung über TSH-Kontrollen",
        b: "Hormontherapie (HRT), pflanzliche Alternativen, Lebensstil",
      },
    ],
    labTests: [
      {
        test: "TSH",
        a: "Erhöht (Hypothyreose ab ~4,0 mU/L)",
        b: "Normal",
      },
      {
        test: "Freies T4 (fT4)",
        a: "Erniedrigt bei manifester Hypothyreose",
        b: "Normal",
      },
      {
        test: "FSH",
        a: "Normal",
        b: "Erhöht (>25 IU/L = Hinweis auf Perimenopause)",
      },
      {
        test: "Östradiol (E2)",
        a: "Normal",
        b: "Erniedrigt",
      },
      {
        test: "Anti-TPO-Antikörper",
        a: "Positiv bei Hashimoto als Ursache",
        b: "Nicht relevant",
      },
    ],
    howToDifferentiate:
      "Die stärkste klinische Unterscheidung: Hitzewallungen und Nachtschweiß sprechen klar für die Menopause. Kälteintoleranz und Verstopfung sprechen für Schilddrüsenunterfunktion. Wer unter Kältegefühl leidet (während andere im Sommer schwitzen), sollte zuerst die Schilddrüse ausschließen – unabhängig vom Alter. Ein TSH-Wert allein genügt als Screening. Bei uneindeutigem Befund empfiehlt sich zusätzlich FSH und Östradiol.",
    faqs: [
      {
        question: "Kann eine Schilddrüsenunterfunktion die Menopause imitieren?",
        answer:
          "Ja, vollständig. Hypothyreose kann Menopause-ähnliche Symptome wie Gewichtszunahme, Haarausfall, Müdigkeit und Stimmungsschwankungen verursachen – ohne dass ein Östrogenabfall vorliegt. Vor der Diagnose 'Menopause' sollte immer der TSH-Wert kontrolliert werden.",
      },
      {
        question: "Was kommt zuerst – Schilddrüse oder Hormone testen?",
        answer:
          "Zuerst TSH testen. Schilddrüsenerkrankungen sind leicht zu behandeln und beeinflussen den gesamten Hormonhaushalt. Wenn TSH normal ist, dann FSH und Östradiol für die Menopause-Abklärung. Idealerweise beides in einem Laborbefund.",
      },
      {
        question: "Werden Schilddrüsenprobleme in der Menopause häufiger?",
        answer:
          "Ja. Mit zunehmendem Alter steigt das Risiko für Schilddrüsenerkrankungen. Die Screeningempfehlung der Deutschen Gesellschaft für Endokrinologie lautet: TSH-Kontrolle alle 5 Jahre ab dem 35. Lebensjahr – bei Beschwerden häufiger.",
      },
    ],
    sources: [
      {
        authors: "Garber JR, Cobin RH, Gharib H et al.",
        year: 2012,
        title: "Clinical practice guidelines for hypothyroidism in adults",
        journal: "Thyroid",
      },
      {
        authors: "Deutsche Gesellschaft für Gynäkologie und Geburtshilfe (DGGG)",
        year: 2020,
        title: "Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Register Nr. 015-062",
      },
      {
        authors: "Rodondi N, den Elzen WP, Bauer DC et al.",
        year: 2010,
        title: "Subclinical hypothyroidism and the risk of coronary heart disease and mortality",
        journal: "JAMA",
      },
    ],
  },

  "hashimoto-oder-schilddruese": {
    slug: "hashimoto-oder-schilddruese",
    conditionASlug: "hashimoto",
    conditionBSlug: "schilddruese",
    conditionAName: "Hashimoto",
    conditionBName: "Schilddrüsenunterfunktion",
    title: "Hashimoto oder Schilddrüsenunterfunktion? Der wichtige Unterschied",
    metaTitle: "Hashimoto vs. Schilddrüsenunterfunktion: Der entscheidende Unterschied erklärt",
    metaDescription:
      "Hashimoto ist eine Autoimmunerkrankung, Hypothyreose eine Funktionsstörung – aber Hashimoto ist die häufigste Ursache. Symptome, Diagnose & Behandlung im Vergleich.",
    intro:
      "Viele Frauen bekommen die Diagnose 'Schilddrüsenunterfunktion' und fragen sich: Ist das dasselbe wie Hashimoto? Die kurze Antwort: Nein – aber Hashimoto ist in Deutschland die häufigste Ursache einer Schilddrüsenunterfunktion. Dieser Unterschied ist klinisch wichtig, denn er entscheidet über die Behandlung, den Verlauf und darüber, welche weiteren Maßnahmen sinnvoll sind.",
    confusionNote:
      "Hashimoto Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem Schilddrüsengewebe angreift. Schilddrüsenunterfunktion (Hypothyreose) beschreibt den Funktionszustand der Schilddrüse – zu wenig Hormonproduktion. Man kann eine Hashimoto-Erkrankung haben, ohne (noch) eine Hypothyreose zu entwickeln. Und man kann eine Hypothyreose haben, ohne dass Hashimoto die Ursache ist.",
    sharedSymptoms: ["muedigkeit", "gewichtszunahme", "haarausfall", "konzentrationsprobleme", "frieren", "verstopfung"],
    conditionAOnlySymptoms: ["schlafstoerungen", "stimmungsschwankungen"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Was es ist",
        a: "Autoimmunerkrankung (Ursache)",
        b: "Funktionelle Diagnose (Zustand/Folge)",
      },
      {
        aspect: "Diagnosekriterium",
        a: "Positive Anti-TPO oder Anti-Tg Antikörper + Ultraschall",
        b: "TSH erhöht (>4,0 mU/L), fT4 erniedrigt",
      },
      {
        aspect: "Kann man es haben ohne das andere?",
        a: "Ja: Hashimoto mit normalem TSH (euthyreot)",
        b: "Ja: Hypothyreose durch Jodmangel, nach Radiojodtherapie etc.",
      },
      {
        aspect: "Behandlung",
        a: "Anti-entzündliche Ernährung, Stressreduktion, Selen, ggf. L-Thyroxin",
        b: "L-Thyroxin (Levothyroxin), Dosisanpassung",
      },
      {
        aspect: "Verlauf",
        a: "Schwankend (Schübe), chronisch, Antikörper messbar",
        b: "Stabil bei korrekter Behandlung",
      },
      {
        aspect: "Zusammenhang",
        a: "Hashimoto führt in ~50% der Fälle zu Hypothyreose",
        b: "In Deutschland verursacht Hashimoto >70% aller Hypothyreosen",
      },
    ],
    labTests: [
      {
        test: "TSH",
        a: "Kann normal sein (frühe Phase) oder erhöht",
        b: "Erhöht (definierendes Kriterium)",
      },
      {
        test: "Freies T4 (fT4)",
        a: "Meist normal in Frühphase",
        b: "Erniedrigt bei manifester Hypothyreose",
      },
      {
        test: "Anti-TPO-Antikörper",
        a: "Positiv – beweisend für Hashimoto",
        b: "Kann negativ sein (andere Ursachen möglich)",
      },
      {
        test: "Anti-Thyreoglobulin (Anti-Tg)",
        a: "Positiv bei ~20% der Hashimoto-Fälle ohne Anti-TPO",
        b: "Nicht diagnostisch",
      },
      {
        test: "Schilddrüsen-Ultraschall",
        a: "Inhomogenes, echoarmes Gewebe – typisch für Hashimoto",
        b: "Kann unauffällig sein",
      },
    ],
    howToDifferentiate:
      "Entscheidend: Lass Anti-TPO-Antikörper messen. Ein erhöhter TSH allein zeigt eine Schilddrüsenunterfunktion, aber nicht deren Ursache. Erst die Antikörper klären, ob Hashimoto dahintersteckt. Dieser Unterschied ist wichtig: Bei bestätigtem Hashimoto empfehlen Endokrinologen zusätzlich Ernährungsanpassungen (glutenarm, selenreich), Stressmanagement und regelmäßige Ultraschallkontrollen – auch wenn der TSH noch normal ist.",
    faqs: [
      {
        question: "Bedeutet Hashimoto automatisch Schilddrüsenunterfunktion?",
        answer:
          "Nein. Im frühen Stadium kann die Schilddrüse trotz Autoimmunprozess noch ausreichend Hormone produzieren. Der TSH ist dann normal. Erst wenn genug Gewebe zerstört ist, steigt der TSH. Regelmäßige Kontrollen (TSH alle 6–12 Monate) sind deshalb wichtig.",
      },
      {
        question: "Wird Hashimoto anders behandelt als eine 'normale' Unterfunktion?",
        answer:
          "Teilweise ja. Bei beiden wird L-Thyroxin eingesetzt, wenn der TSH zu hoch ist. Zusätzlich empfehlen viele Endokrinologen bei Hashimoto eine selenreiche Ernährung (Selen kann Anti-TPO-Antikörper senken), eine glutenarme Ernährung (bei gleichzeitiger Zöliakie) und konsequentes Stressmanagement, da Stress Autoimmunschübe triggern kann.",
      },
      {
        question: "Kann Hashimoto geheilt werden?",
        answer:
          "Eine vollständige Heilung ist derzeit nicht möglich. Die Autoimmunreaktion lässt sich nicht 'ausschalten'. Aber: Viele Frauen erreichen mit der richtigen Behandlung und Lebensstilmaßnahmen einen stabilen Zustand mit kaum spürbaren Symptomen und sinkenden Antikörperwerten.",
      },
      {
        question: "Welcher Arzt ist der richtige Ansprechpartner?",
        answer:
          "Für die Erstdiagnose reicht ein Hausarzt oder eine Internistin. Bei bestätigter Hashimoto-Diagnose oder kompliziertem Verlauf empfiehlt sich ein Endokrinologe. Gynäkologinnen sind oft gut informiert, wenn Menopause und Hashimoto gleichzeitig eine Rolle spielen.",
      },
    ],
    sources: [
      {
        authors: "Caturegli P, De Remigis A, Rose NR",
        year: 2014,
        title: "Hashimoto thyroiditis: clinical and diagnostic criteria",
        journal: "Autoimmunity Reviews",
      },
      {
        authors: "Ventura M, Melo M, Carrilho F",
        year: 2017,
        title: "Selenium and thyroid disease: from pathophysiology to treatment",
        journal: "International Journal of Endocrinology",
      },
      {
        authors: "Deutsche Gesellschaft für Endokrinologie",
        year: 2021,
        title: "Leitlinie Diagnostik und Therapie der Hypothyreose",
        journal: "AWMF Register Nr. 060-002",
      },
    ],
  },

  "burnout-oder-hashimoto": {
    slug: "burnout-oder-hashimoto",
    conditionASlug: "hashimoto",
    conditionBSlug: "hormone",
    conditionAName: "Hashimoto",
    conditionBName: "Burnout",
    title: "Burnout oder Hashimoto? So erkennst du den Unterschied",
    metaTitle: "Burnout oder Hashimoto? Symptome, Unterschiede & Diagnose",
    metaDescription:
      "Erschöpfung, Konzentrationsprobleme, Antriebslosigkeit – Burnout und Hashimoto haben fast identische Symptome. Welcher Bluttest entscheidet und was wirklich dahintersteckt.",
    intro:
      "Erschöpfung, die sich durch Schlaf nicht bessert. Konzentration weg. Antriebslosigkeit. Innerlich leer. Diese Symptome werden häufig als 'Burnout' oder 'chronischer Stress' abgetan – dabei steckt in einem erheblichen Anteil der Fälle eine unerkannte Schilddrüsenerkrankung dahinter. Hashimoto Thyreoiditis wird in Deutschland durchschnittlich erst nach 5–10 Jahren diagnostiziert. Wer die Unterschiede kennt, kann sich diese Zeit ersparen.",
    confusionNote:
      "Burnout und Hashimoto überlappen sich symptomatisch nahezu vollständig. Beide verursachen chronische Erschöpfung, Konzentrationsprobleme, depressive Verstimmung und Leistungsabfall. Der entscheidende Unterschied liegt in der Ursache: Burnout ist eine psychophysische Erschöpfung durch anhaltende Überlastung. Hashimoto ist eine Autoimmunerkrankung, die die Schilddrüsenhormonproduktion stört. Erschwerend: Chronischer Stress (Burnout-Auslöser) kann Hashimoto-Schübe triggern und verschlechtern – beide können gleichzeitig vorliegen.",
    sharedSymptoms: [
      "muedigkeit",
      "konzentrationsprobleme",
      "stimmungsschwankungen",
      "schlafstoerungen",
      "antriebslosigkeit",
      "haarausfall",
    ],
    conditionAOnlySymptoms: ["frieren", "gewichtszunahme", "verstopfung", "trockene-haut"],
    conditionBOnlySymptoms: ["emotionale-erschoepfung", "zynismus", "innere-leere"],
    keyDifferences: [
      {
        aspect: "Ursache",
        a: "Autoimmunerkrankung – Immunsystem greift Schilddrüse an",
        b: "Psychophysische Erschöpfung durch chronische Überlastung",
      },
      {
        aspect: "Kälteintoleranz",
        a: "Typisch – ständiges Frieren auch in warmer Umgebung",
        b: "Nicht typisch",
      },
      {
        aspect: "Gewicht",
        a: "Häufig Gewichtszunahme trotz normaler Ernährung",
        b: "Kein typisches Muster, manchmal Gewichtsverlust durch Appetitmangel",
      },
      {
        aspect: "Herzfrequenz",
        a: "Verlangsamter Puls (Bradykardie) möglich",
        b: "Oft erhöhte Herzfrequenz durch Cortisolstress",
      },
      {
        aspect: "Blutbild",
        a: "Erhöhte Anti-TPO-Antikörper, ggf. erhöhtes TSH",
        b: "Blutbild unauffällig",
      },
      {
        aspect: "Auslöser",
        a: "Genetische Prädisposition, Stress triggert Schübe",
        b: "Anhaltende Überlastung ohne ausreichende Erholung",
      },
    ],
    labTests: [
      {
        test: "TSH",
        a: "Erhöht (>2,5 mU/L bei Symptomen verdächtig, >4,0 manifest)",
        b: "Normal",
      },
      {
        test: "fT3 & fT4",
        a: "fT3 erniedrigt oder fT4 erniedrigt bei manifester Hypothyreose",
        b: "Normal",
      },
      {
        test: "Anti-TPO-Antikörper",
        a: "Erhöht bei 90 % der Hashimoto-Fälle",
        b: "Normal",
      },
      {
        test: "Cortisol (Tagesprofil)",
        a: "Kann durch Autoimmunstress leicht erhöht sein",
        b: "Oft erhöht morgens, dysregulierter Tagesrhythmus",
      },
      {
        test: "Ferritin",
        a: "Häufig erniedrigt (<70 µg/l) – verstärkt Symptome",
        b: "Normal bis erniedrigt bei chronischem Stress",
      },
      {
        test: "CRP (Entzündungsmarker)",
        a: "Kann bei aktiven Hashimoto-Schüben leicht erhöht sein",
        b: "Normal oder leicht erhöht",
      },
    ],
    howToDifferentiate:
      "Der entscheidende Test: Anti-TPO-Antikörper messen lassen. Ein normales TSH schließt Hashimoto nicht aus – die Antikörper können erhöht sein, bevor der TSH-Wert auffällig wird. Für eine vollständige Abklärung: TSH, fT3, fT4, Anti-TPO, Anti-Thyreoglobulin, Ferritin und ggf. Schilddrüsen-Ultraschall. Wichtig: Burnout und Hashimoto können gleichzeitig vorliegen. Wer einen Burnout behandelt (Auszeit, Psychotherapie), aber trotzdem keine Besserung erfährt, sollte die Schilddrüse ausschließen lassen.",
    faqs: [
      {
        question: "Kann Stress Hashimoto verursachen?",
        answer:
          "Stress verursacht Hashimoto nicht direkt – aber er kann die Erkrankung triggern und Schübe auslösen. Chronischer Stress erhöht Cortisol, das Entzündungsprozesse moduliert und das Immungleichgewicht verschiebt. Frauen mit genetischer Prädisposition für Hashimoto haben oft einen stressreichen Lebensabschnitt kurz vor der Erstdiagnose erlebt.",
      },
      {
        question: "Welcher Arzt ist der richtige Ansprechpartner?",
        answer:
          "Für die Hashimoto-Abklärung: Hausarzt, Internist oder Endokrinologe. Für Burnout: Hausarzt, Psychiater oder psychosomatische Klinik. Da beide häufig gemeinsam auftreten, ist eine Abklärung beider Seiten sinnvoll – manchmal erst Hashimoto behandeln und dann sehen, was an Erschöpfung bleibt.",
      },
      {
        question: "Bessert sich Burnout automatisch, wenn Hashimoto behandelt wird?",
        answer:
          "Häufig ja, teilweise. Die Normalisierung der Schilddrüsenfunktion durch L-Thyroxin und Lebensstilanpassungen kann die Erschöpfung erheblich reduzieren. Wenn anhaltende psychische Belastungen (Arbeit, Beziehungen, Trauma) nicht adressiert werden, bleibt ein Burnout-Anteil bestehen.",
      },
    ],
    sources: [
      {
        authors: "Dayan CM, Panicker V",
        year: 2013,
        title: "Hypothyroidism and depression",
        journal: "European Thyroid Journal",
      },
      {
        authors: "Sategna-Guidetti C et al.",
        year: 2001,
        title: "Prevalence of thyroid disorders in untreated adult celiac disease patients",
        journal: "American Journal of Gastroenterology",
      },
      {
        authors: "Stenlöf K et al.",
        year: 2017,
        title: "Burnout and autoimmune thyroid disease",
        journal: "Thyroid Research",
      },
    ],
  },

  "perimenopause-oder-depression": {
    slug: "perimenopause-oder-depression",
    conditionASlug: "menopause",
    conditionBSlug: "hormone",
    conditionAName: "Perimenopause",
    conditionBName: "Depression",
    title: "Perimenopause oder Depression? Wenn Hormonschwankungen die Stimmung überwältigen",
    metaTitle: "Perimenopause oder Depression? Symptome, Unterschiede & Diagnose",
    metaDescription:
      "Stimmungstiefs, Antriebslosigkeit und Weinen ohne Grund – ist es die Perimenopause oder eine Depression? Wie man unterscheidet und was wirklich hilft.",
    intro:
      "Frauen in der Perimenopause haben ein 2–3-fach erhöhtes Risiko für depressive Erkrankungen im Vergleich zu reproduktivem Alter – das zeigen mehrere große Kohortenstudien (SWAN, Penn Ovarian Aging Study). Und doch werden perimenopausale Stimmungsprobleme häufig falsch eingeordnet: entweder als reine Depression (behandelt mit Antidepressiva ohne Hormonadressierung) oder als rein hormonell (behandelt mit HRT, ohne psychologische Komponente zu berücksichtigen). Die Wahrheit ist: Beide Zustände überlappen sich stark und können gleichzeitig vorliegen.",
    confusionNote:
      "Perimenopausale Stimmungsschwankungen entstehen durch Östrogen- und Progesteronveränderungen, die direkt auf Serotonin, Dopamin und GABA wirken. Klinische Depression ist eine eigenständige psychiatrische Erkrankung. Der entscheidende Unterschied liegt in Verlauf, Auslöser und Begleitphänomenen: Perimenopausale Stimmungsschwankungen sind oft zyklisch, von körperlichen Symptomen begleitet und stark schlafabhängig. Depressionen sind anhaltender, durchgehend und weniger zykluskorreliert.",
    sharedSymptoms: [
      "stimmungsschwankungen",
      "antriebslosigkeit",
      "schlafstoerungen",
      "konzentrationsprobleme",
      "erschoepfung",
      "reizbarkeit",
    ],
    conditionAOnlySymptoms: ["hitzewallungen", "nachtschweiss", "zyklusveraenderungen", "libidoverlust"],
    conditionBOnlySymptoms: ["anhedonie", "hoffnungslosigkeit", "suizidgedanken"],
    keyDifferences: [
      {
        aspect: "Verlauf",
        a: "Oft schwankend, zyklisch oder schubweise",
        b: "Anhaltend, mindestens 2 Wochen täglich",
      },
      {
        aspect: "Körperliche Begleitsymptome",
        a: "Hitzewallungen, Nachtschweiß, Zyklusveränderungen",
        b: "Keine spezifischen hormonellen Körpersymptome",
      },
      {
        aspect: "Freude & Interesse",
        a: "Teilweise erhalten – gute Tage und schlechte Tage",
        b: "Anhaltend reduziert (Anhedonie – kein Erleben von Freude)",
      },
      {
        aspect: "Zeitlicher Zusammenhang",
        a: "Korreliert mit Zyklusveränderungen oder Schlaf",
        b: "Unabhängig vom Zyklus, persistent",
      },
      {
        aspect: "Alter beim Auftreten",
        a: "Typischerweise 40–55 Jahre, mit weiteren Perimenopause-Zeichen",
        b: "Jedes Alter, keine altersgebundene hormonelle Ursache",
      },
      {
        aspect: "Ansprechen auf Hormontherapie",
        a: "Oft deutliche Besserung unter HRT/Progesteron",
        b: "Meist keine oder geringe Besserung unter HRT allein",
      },
    ],
    labTests: [
      {
        test: "FSH & Östradiol",
        a: "FSH erhöht (>10–25 IU/L), Östradiol schwankend",
        b: "Normal für Alter",
      },
      {
        test: "Progesteron (Lutealphase)",
        a: "Häufig erniedrigt (<5 ng/ml)",
        b: "Normal",
      },
      {
        test: "TSH, fT3, Anti-TPO",
        a: "Normal oder auffällig (Hashimoto ausschließen)",
        b: "Normal (Schilddrüse als Ursache ausschließen)",
      },
      {
        test: "Cortisol (Tagesprofil)",
        a: "Kann dysreguliert sein bei Schlafstörungen",
        b: "Oft erhöht bei Stress-assoziierter Depression",
      },
      {
        test: "Vitamin D (25-OH)",
        a: "Häufig erniedrigt – verschlechtert Stimmung",
        b: "Häufig erniedrigt – bekannter Risikofaktor für Depression",
      },
    ],
    howToDifferentiate:
      "Schlüsselfragen für die Unterscheidung: Gibt es Hitzewallungen, Nachtschweiß oder Zyklusveränderungen? Wenn ja, ist Perimenopause wahrscheinlich beteiligt. Gibt es 'gute Tage', an denen die Stimmung sich aufhellt? Zyklische Perimenopause – bei anhaltender Freudlosigkeit eher Depression. Hat die Stimmung nach einem Schlafproblem begonnen? Oft perimenopausaler Ursprung. Besteht die depressive Verstimmung seit mehr als 2 Wochen täglich ohne Schwankungen? Psychiatrische Abklärung dringend. Wichtig: Ein Hormontest klärt nicht automatisch, ob jemand depressiv ist – und umgekehrt. Beide Diagnosen können koexistieren und müssen parallel behandelt werden.",
    faqs: [
      {
        question: "Helfen Antidepressiva bei perimenopausalen Stimmungsproblemen?",
        answer:
          "Teilweise. SSRIs (z.B. Escitalopram) helfen auch bei perimenopausaler Depression – und reduzieren nebenbei Hitzewallungen. Aber wenn die Grundursache ein Hormonmangel ist, ist HRT oft wirksamer und adressiert das Problem an der Wurzel. Idealerweise: Abklärung des Hormonprofils VOR oder gleichzeitig mit dem Start einer antidepressiven Behandlung.",
      },
      {
        question: "Kann Hormontherapie eine bestehende Depression verschlechtern?",
        answer:
          "Das ist selten, aber möglich, wenn synthetische Gestagene verwendet werden. Einige Frauen reagieren empfindlich auf synthetische Progestine. Bioidentisches Progesteron (Utrogest) hat dagegen einen anxiolytischen und stimmungsaufhellenden Effekt und ist bei gleichzeitiger Depression meist die bessere Wahl.",
      },
      {
        question: "Ab wann brauche ich psychiatrische Hilfe?",
        answer:
          "Bei Gedanken an Selbstverletzung oder Suizid: sofort. Bei anhaltender Freudlosigkeit über mehr als 2 Wochen: psychiatrische oder psychotherapeutische Abklärung nicht aufschieben. Bei starker Beeinträchtigung der Alltagsfunktion (Arbeit, Beziehungen): auch ohne Suizidgedanken gilt professionelle Hilfe als dringlich.",
      },
    ],
    sources: [
      {
        authors: "Freeman EW et al.",
        year: 2006,
        title: "Associations of hormones and menopausal status with depressed mood in women with no history of depression",
        journal: "Archives of General Psychiatry",
      },
      {
        authors: "Bromberger JT, Kravitz HM",
        year: 2011,
        title: "Mood and menopause: findings from the Study of Women's Health Across the Nation (SWAN)",
        journal: "Obstetrics and Gynecology Clinics of North America",
      },
      {
        authors: "DGGG – Deutsche Gesellschaft für Gynäkologie und Geburtshilfe",
        year: 2020,
        title: "S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Register Nr. 015-062",
      },
    ],
  },

  "hormonstoerungen-oder-menopause": {
    slug: "hormonstoerungen-oder-menopause",
    conditionASlug: "hormone",
    conditionBSlug: "menopause",
    conditionAName: "Hormonstörungen",
    conditionBName: "Menopause",
    title: "Hormonstörung oder Menopause? Was hinter deinen Symptomen steckt",
    metaTitle: "Hormonstörung oder Menopause? Symptome, Ursachen & Diagnose",
    metaDescription:
      "Stimmungsschwankungen, Müdigkeit, Schlafprobleme – Hormonstörungen und Menopause haben ähnliche Symptome. Wie du den Unterschied erkennst und was wirklich hilft.",
    intro:
      "Nicht jede Hormonstörung ist Menopause – und nicht jede Menopause ist 'nur' Hormonmangel. Viele Frauen zwischen 30 und 55 erleben Symptome wie Erschöpfung, Gewichtszunahme, Schlafprobleme oder Stimmungsschwankungen und wissen nicht, ob dahinter eine frühe Perimenopause, eine Östrogendominanz, ein Cortisolproblem oder eine andere Hormonstörung steckt. Dieser Artikel gibt einen strukturierten Überblick.",
    confusionNote:
      "Die Menopause ist selbst eine Form der Hormonstörung – eine physiologisch normal verlaufende, aber dennoch tief in den Hormonhaushalt eingreifende Veränderung. Daneben gibt es pathologische Hormonstörungen wie Östrogendominanz, Progesteronmangel, Cortisolerhöhung oder Insulinresistenz, die sehr ähnliche Symptome erzeugen und häufig parallel zur Perimenopause auftreten. Die Abgrenzung ist oft komplex und erfordert ein vollständiges Hormonsetting.",
    sharedSymptoms: ["stimmungsschwankungen", "gewichtszunahme", "muedigkeit", "haarausfall", "schlafstoerungen"],
    conditionAOnlySymptoms: ["akne", "pms"],
    conditionBOnlySymptoms: ["hitzewallungen", "nachtschweiss", "scheidentrockenheit"],
    keyDifferences: [
      {
        aspect: "Alter beim Auftreten",
        a: "Jedes Alter – Hormonstörungen treten auch mit 20–35 auf",
        b: "Typischerweise ab 40 (Perimenopause), Menopause um 51",
      },
      {
        aspect: "Art der Hormonstörung",
        a: "Östrogendominanz, Progesteronmangel, Cortisol, Insulin, PCOS",
        b: "Sinkende Östrogen- und Progesteronproduktion der Eierstöcke",
      },
      {
        aspect: "Zyklusveränderungen",
        a: "Möglich bei PMS, PCOS – aber kein Muster",
        b: "Unregelmäßige, dann ausbleibende Menstruation",
      },
      {
        aspect: "Menopause-spezifische Symptome",
        a: "Keine Hitzewallungen, kein Nachtschweiß",
        b: "Hitzewallungen und Nachtschweiß typisch",
      },
      {
        aspect: "Diagnoseweg",
        a: "Vollständiges Hormonsetting: Östradiol, Progesteron, Cortisol, Insulin, DHEA",
        b: "FSH, LH, Östradiol, ggf. AMH für Ovarialreserve",
      },
    ],
    labTests: [
      {
        test: "FSH (Follikel-stimulierendes Hormon)",
        a: "Normal oder erhöht (bei PCOS erniedrigt)",
        b: "Erhöht >25 IU/L (Perimenopause) / >40 IU/L (Menopause)",
      },
      {
        test: "Östradiol (E2)",
        a: "Variabel – erhöht bei Östrogendominanz, normal oder niedrig",
        b: "Erniedrigt (<50 pg/ml in Postmenopause)",
      },
      {
        test: "Progesteron",
        a: "Oft erniedrigt (Progesteronmangel in Lutealphase)",
        b: "Erniedrigt (Eierstöcke produzieren weniger)",
      },
      {
        test: "Cortisol (Morgenwert)",
        a: "Erhöht bei chronischem Stress / Nebennierenerschöpfung",
        b: "Normal",
      },
      {
        test: "AMH (Anti-Müller-Hormon)",
        a: "Normal für Alter (kein Hinweis auf Menopause)",
        b: "Erniedrigt – zeigt abnehmende Ovarialreserve",
      },
    ],
    howToDifferentiate:
      "Der klarste Hinweis auf Menopause: Hitzewallungen, Nachtschweiß und ausbleibende Periode. Diese Symptome treten bei anderen Hormonstörungen nicht auf. Fehlen diese Zeichen, aber Stimmungsschwankungen, Erschöpfung und Gewichtszunahme sind präsent, lohnt sich ein breites Hormonsetting – insbesondere Cortisol, Insulin und Progesteron in der Lutealphase. Viele Frauen haben beides gleichzeitig: Perimenopause UND zusätzliche Hormonstörungen wie Insulinresistenz oder Cortisolerhöhung.",
    faqs: [
      {
        question: "Können Hormonstörungen die Menopause vorziehen?",
        answer:
          "Ja. Chronischer Stress (erhöhter Cortisol), Autoimmunerkrankungen, Untergewicht und bestimmte Medikamente können die Ovarialfunktion beeinflussen und zu einem vorzeitigen Einsetzen der Perimenopause führen. Frauen mit früher Perimenopause (<40 Jahre) sollten auf andere Hormonstörungen untersucht werden.",
      },
      {
        question: "Was ist Östrogendominanz und wie unterscheidet sie sich von Menopause?",
        answer:
          "Östrogendominanz bedeutet: Östrogen ist relativ zu Progesteron erhöht. Das kann auch bei normalen oder niedrigen Östrogenspiegeln auftreten, wenn Progesteron noch stärker gesunken ist. Es ist kein Mangel, sondern eine Imbalance. In der Perimenopause sinkt Progesteron oft schneller als Östrogen – deshalb kommt Östrogendominanz ausgerechnet in der Menopause häufig vor.",
      },
      {
        question: "Ab wann gilt eine Frau offiziell als in den Wechseljahren?",
        answer:
          "Die Menopause ist definiert als 12 aufeinanderfolgende Monate ohne Menstruation. Dieser Zeitpunkt kann nur rückblickend festgestellt werden. Die durchschnittliche Menopause in Deutschland liegt bei 51 Jahren. Alles davor ist Perimenopause – die Übergangsphase mit unregelmäßigem Zyklus und zunehmenden Symptomen.",
      },
    ],
    sources: [
      {
        authors: "Prior JC",
        year: 2011,
        title: "Progesterone for the prevention and treatment of osteoporosis in women",
        journal: "Climacteric",
      },
      {
        authors: "Santoro N, Roeca C, Peters BA, Neal-Perry G",
        year: 2021,
        title: "The menopause transition: signs, symptoms, and management options",
        journal: "Journal of Clinical Endocrinology & Metabolism",
      },
      {
        authors: "DGGG – Deutsche Gesellschaft für Gynäkologie und Geburtshilfe",
        year: 2020,
        title: "S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Register Nr. 015-062",
      },
    ],
  },

  "hashimoto-oder-nebennierenschwaeche": {
    slug: "hashimoto-oder-nebennierenschwaeche",
    conditionASlug: "hashimoto",
    conditionBSlug: "nebenniere",
    conditionAName: "Hashimoto",
    conditionBName: "Nebennierenschwäche",
    title: "Hashimoto oder Nebennierenschwäche? Symptome, Unterschiede & Diagnose",
    metaTitle: "Hashimoto oder Nebennierenschwäche? Symptome erkennen & unterscheiden",
    metaDescription:
      "Hashimoto und Nebennierenschwäche haben viele gemeinsame Symptome – extreme Müdigkeit, Konzentrationsprobleme, Schlafstörungen. Wie du sie unterscheidest und welche Tests helfen.",
    intro:
      "Extreme Erschöpfung, Konzentrationsprobleme, Schlafstörungen, Stimmungstiefs – diese Symptome können sowohl auf Hashimoto Thyreoiditis als auch auf eine Nebenniereninsuffizienz oder sogenannte 'Nebennierenschwäche' hinweisen. Viele Frauen haben sogar beide Erkrankungen gleichzeitig, da Schilddrüse und Nebennieren über die Hypothalamus-Hypophysen-Achse miteinander verbunden sind. Dieser Ratgeber zeigt, welche Symptome für welche Erkrankung sprechen und welche Tests Klarheit bringen.",
    confusionNote:
      "Schilddrüse und Nebennieren sind beide Teil der endokrinen Achse und beeinflussen sich gegenseitig. Chronischer Stress erhöht Cortisol, was die T4-zu-T3-Konversion hemmen und eine latente Hashimoto-Erkrankung verschlimmern kann. Umgekehrt kann eine schlecht behandelte Hypothyreose die Nebennierenbelastung erhöhen. Das Zusammenspiel beider Systeme macht die Differenzierung komplex.",
    sharedSymptoms: ["muedigkeit", "konzentrationsprobleme", "schlafstoerungen", "stimmungsschwankungen"],
    conditionAOnlySymptoms: ["frieren", "verstopfung", "gewichtszunahme"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Charakteristisches Symptom",
        a: "Kälteintoleranz, Verstopfung, trockene Haut, Haarausfall, verlangsamter Puls",
        b: "Erschöpfung, die sich nach Stress stark verschlechtert; Salzhunger; Schwindel beim Aufstehen (Orthostatismus)",
      },
      {
        aspect: "Müdigkeitsqualität",
        a: "Konstante Erschöpfung, besonders morgens; schläft viel, schläft aber schlecht",
        b: "Sehr ausgeprägt nach emotionalem oder körperlichem Stress; Energieeinbruch nachmittags (14–16 Uhr) typisch",
      },
      {
        aspect: "Reaktion auf Stress",
        a: "Hashimoto-Schübe nach Infekten oder emotionalem Stress; Antikörper können ansteigen",
        b: "Symptome deutlich stärker nach Stressbelastung; Erholung dauert ungewöhnlich lange",
      },
      {
        aspect: "Ursache",
        a: "Autoimmunreaktion gegen Schilddrüsengewebe (T3/T4-Mangel)",
        b: "Morbus Addison: Autoimmunzerstörung der Nebennierenrinde; 'Adrenal Fatigue': keine anerkannte Erkrankung",
      },
      {
        aspect: "Diagnose",
        a: "TSH, fT3, fT4, Anti-TPO, Schilddrüsen-Ultraschall",
        b: "Cortisol im Serum (morgens), ACTH-Stimulationstest bei Verdacht auf Addison, DHEA-S",
      },
    ],
    labTests: [
      {
        test: "TSH + fT3 + fT4",
        a: "Erhöhter TSH, erniedrigtes fT3/fT4 bei Hypothyreose",
        b: "Normal (kein Schilddrüsenbefund)",
      },
      {
        test: "Anti-TPO-Antikörper",
        a: "Erhöht (> 34 IU/mL) – bestätigt Hashimoto",
        b: "Normal",
      },
      {
        test: "Cortisol morgens (8 Uhr)",
        a: "Normal bis leicht erhöht (Stress-Response auf Hypothyreose möglich)",
        b: "Erniedrigt (< 138 nmol/L) bei echter Nebenniereninsuffizienz; bei 'Adrenal Fatigue' oft normal",
      },
      {
        test: "DHEA-S",
        a: "Kann bei chronischer Autoimmunaktivität erniedrigt sein",
        b: "Erniedrigt bei echter Nebenniereninsuffizienz",
      },
    ],
    howToDifferentiate:
      "Der entscheidende erste Schritt: Schilddrüsenwerte vollständig abklären (TSH, fT3, Anti-TPO). Wenn Hashimoto bestätigt und behandelt wird, verbessern sich viele Erschöpfungssymptome. Wenn trotz optimierter Schilddrüsenwerte extreme Müdigkeit, Stressunverträglichkeit und Schwindel bestehen, Cortisol und DHEA-S messen. Bei Verdacht auf echte Nebenniereninsuffizienz (Addison) ist ein ACTH-Stimulationstest beim Endokrinologen notwendig. 'Adrenal Fatigue' als Diagnose wird von der konventionellen Medizin nicht anerkannt – Laborwerte sind dabei meist normal.",
    faqs: [
      {
        question: "Kann ich Hashimoto und Nebennierenschwäche gleichzeitig haben?",
        answer:
          "Ja. Beide Erkrankungen können gleichzeitig vorliegen – und beeinflussen sich gegenseitig. Chronischer Stress (hoher Cortisol) hemmt die T4-zu-T3-Konversion und kann eine latente Hashimoto-Erkrankung aktivieren. Umgekehrt kann eine unbehandelte Hypothyreose die Cortisol-Clearance verlangsamen. Eine vollständige endokrinologische Untersuchung inklusive Schilddrüse, Cortisol und DHEA-S ist sinnvoll.",
      },
      {
        question: "Was ist der Unterschied zwischen Morbus Addison und 'Adrenal Fatigue'?",
        answer:
          "Morbus Addison ist eine ernsthafte, anerkannte Erkrankung mit messbarem Cortisolmangel (meist autoimmun). 'Adrenal Fatigue' (Nebennierenschwäche) ist kein anerkanntes medizinisches Krankheitsbild – Laborwerte sind bei Betroffenen meist im Normbereich. Die Symptome (Erschöpfung, Stressunverträglichkeit) sind real, haben aber möglicherweise andere Ursachen: Schlafmangel, Schilddrüsenunterfunktion, Depressionen, Eisenmangel oder Burnout.",
      },
      {
        question: "Wie unterscheidet man die Müdigkeit von Hashimoto von der bei Nebennierenproblemen?",
        answer:
          "Hashimoto-Müdigkeit ist typischerweise konstant präsent, oft begleitet von Frieren, Verstopfung und Verlangsamung. Nebennieren-assoziierte Erschöpfung verschlechtert sich stark nach Stress und hat einen typischen Nachmittagstief (14–16 Uhr). Beide Formen verbessern sich mit 8+ Stunden Schlaf kaum. Der sicherste Weg ist die Labordiagnostik: TSH, fT3, Anti-TPO + Cortisol morgens, DHEA-S.",
      },
    ],
    sources: [
      {
        authors: "Garber JR et al. – American Thyroid Association",
        year: 2012,
        title: "Clinical practice guidelines for hypothyroidism in adults",
        journal: "Thyroid",
      },
      {
        authors: "Bornstein SR et al.",
        year: 2016,
        title: "Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society Clinical Practice Guideline",
        journal: "Journal of Clinical Endocrinology & Metabolism",
      },
      {
        authors: "Cadegiani FA & Kater CE",
        year: 2016,
        title: "Adrenal fatigue does not exist: a systematic review",
        journal: "BMC Endocrine Disorders",
      },
    ],
  },

  "menopause-oder-schwangerschaft": {
    slug: "menopause-oder-schwangerschaft",
    conditionASlug: "menopause",
    conditionBSlug: "schwangerschaft",
    conditionAName: "Perimenopause",
    conditionBName: "Schwangerschaft",
    title: "Perimenopause oder Schwangerschaft? Symptome unterscheiden",
    metaTitle: "Perimenopause oder Schwangerschaft? Symptome & Unterschiede erklärt",
    metaDescription:
      "Perimenopause oder Schwangerschaft? Viele Symptome sind ähnlich. Wie du sie unterscheidest, welche Tests helfen und wann du zum Arzt solltest.",
    intro:
      "Ausbleibende Periode, Müdigkeit, Stimmungsschwankungen, veränderte Schlafqualität – diese Symptome können sowohl auf eine beginnende Perimenopause als auch auf eine frühe Schwangerschaft hinweisen. Besonders für Frauen zwischen 38 und 48 Jahren ist diese Verwechslung häufig: In dieser Phase sinkt die Fruchtbarkeit, aber eine Schwangerschaft ist weiterhin möglich. Und Perimenopause beginnt oft mitten in einer Phase, in der Frauen sich noch für 'zu jung' für Wechseljahre halten.",
    confusionNote:
      "In der Perimenopause werden die Zyklen unregelmäßiger – Perioden können ausbleiben, sich verzögern oder verändert sein. Genau dasselbe passiert in der frühen Schwangerschaft. Beide Zustände können mit Stimmungsschwankungen, Brustspannen und Müdigkeit verbunden sein. Der entscheidende Unterschied: Ein Schwangerschaftstest löst die Unsicherheit in Minuten auf.",
    sharedSymptoms: ["muedigkeit", "schlafstoerungen", "stimmungsschwankungen"],
    conditionAOnlySymptoms: ["hitzewallungen", "nachtschweiss", "scheidentrockenheit"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Charakteristisches Symptom",
        a: "Hitzewallungen, Nachtschweiß, Scheidentrockenheit – diese treten in der Schwangerschaft nicht auf",
        b: "Übelkeit (besonders morgens), Brustspannen, Nidationsblutung, positiver Schwangerschaftstest",
      },
      {
        aspect: "Menstruation",
        a: "Unregelmäßig, kürzer oder länger, dann immer seltener",
        b: "Bleibt aus nach Konzeption; kann eine kurze Nidationsblutung auftreten",
      },
      {
        aspect: "Körpertemperatur",
        a: "Hitzewallungen: plötzliches Wärmegefühl, dann wieder normal",
        b: "Basaltemperatur bleibt nach Ovulation erhöht (> 37 °C) über 16+ Tage",
      },
      {
        aspect: "Bluttest",
        a: "FSH erhöht (> 10–12 IU/L in der Perimenopause), Östradiol erniedrigt",
        b: "HCG positiv, FSH erniedrigt",
      },
      {
        aspect: "Alter",
        a: "Typisch 45–55 Jahre, kann aber ab 40 beginnen",
        b: "Möglich bis zur Menopause – Frauen bis 50+ können schwanger werden",
      },
    ],
    labTests: [
      {
        test: "Schwangerschaftstest (HCG)",
        a: "Negativ",
        b: "Positiv (ab 10–14 Tagen nach Konzeption zuverlässig)",
      },
      {
        test: "FSH",
        a: "Erhöht: > 10 IU/L in der Perimenopause; > 25 IU/L bei Menopause",
        b: "Erniedrigt (Schwangerschaft supprimiert FSH)",
      },
      {
        test: "Östradiol (E2)",
        a: "Schwankend und tendenziell erniedrigt in der Perimenopause",
        b: "Steigt früh an (produziert von Corpus luteum und Plazenta)",
      },
    ],
    howToDifferentiate:
      "Der erste und einfachste Schritt: Schwangerschaftstest. Ein negativer Test schließt eine Schwangerschaft bei korrekter Durchführung (morgens, 14+ Tage nach möglicher Konzeption) zuverlässig aus. Wenn der Test negativ und die Periode weiterhin unregelmäßig ist: Bluttest mit FSH, Östradiol und HCG beim Arzt für maximale Sicherheit. Hitzewallungen und Nachtschweiß sind starke Hinweise auf Perimenopause – sie treten in der frühen Schwangerschaft nicht auf.",
    faqs: [
      {
        question: "Kann man in der Perimenopause noch schwanger werden?",
        answer:
          "Ja. Die Perimenopause bedeutet reduzierte, nicht ausgeschlossene Fruchtbarkeit. Frauen können bis zur Menopause (12 Monate ohne Periode) ovulieren und schwanger werden. Erst 12 Monate nach der letzten Periode gilt eine Frau offiziell als nicht mehr fruchtbar. Verhütung ist in der Perimenopause weiterhin notwendig, wenn eine Schwangerschaft nicht gewünscht ist.",
      },
      {
        question: "Woran erkenne ich, ob meine ausgebliebene Periode Perimenopause oder Schwangerschaft ist?",
        answer:
          "Ein Schwangerschaftstest ist die schnellste Antwort. Zusätzliche Hinweise auf Perimenopause: Hitzewallungen, Nachtschweiß, Scheidentrockenheit, Veränderungen über mehrere Zyklen (nicht nur ein einzelner ausgebliebener Zyklus). Hinweise auf Schwangerschaft: Übelkeit, Brustspannen, positiver Test, erhöhte Basaltemperatur.",
      },
      {
        question: "Welcher Bluttest hilft bei der Unterscheidung?",
        answer:
          "HCG (Schwangerschaftshormon) – das zuverlässigste Unterscheidungsmerkmal. FSH: erhöht bei Perimenopause, erniedrigt in der Schwangerschaft. Östradiol: schwankt in der Perimenopause, steigt früh in der Schwangerschaft an. Ein Arzt kann alle drei Werte gleichzeitig bestimmen.",
      },
    ],
    sources: [
      {
        authors: "Harlow SD et al.",
        year: 2012,
        title: "Executive summary of the Stages of Reproductive Aging Workshop + 10 (STRAW+10)",
        journal: "Climacteric",
      },
      {
        authors: "DGGG – Deutsche Gesellschaft für Gynäkologie und Geburtshilfe",
        year: 2020,
        title: "S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Register Nr. 015-062",
      },
      {
        authors: "Santoro N",
        year: 2016,
        title: "Perimenopause: from research to practice",
        journal: "Journal of Women's Health",
      },
    ],
  },

  "pms-oder-pmds": {
    slug: "pms-oder-pmds",
    conditionASlug: "hormone",
    conditionBSlug: "hormone",
    conditionAName: "PMS",
    conditionBName: "PMDS",
    title: "PMS oder PMDS? Symptome, Unterschiede & was wirklich hilft",
    metaTitle: "PMS oder PMDS? Unterschied, Diagnose & Behandlung erklärt",
    metaDescription:
      "PMS oder PMDS? Der Unterschied liegt in der Schwere – PMDS ist eine ernsthafte Erkrankung mit depressiven Episoden. Symptome, Diagnose und was hilft.",
    intro:
      "Stimmungsschwankungen, Reizbarkeit, Schlafprobleme und körperliche Beschwerden in den Tagen vor der Periode kennen viele Frauen. Aber wann ist es 'nur' PMS (Prämenstruelles Syndrom) und wann ist es PMDS (Prämenstruelle Dysphorische Störung) – eine ernsthafte psychische Erkrankung? Der Unterschied liegt nicht in der Art der Symptome, sondern in ihrer Schwere und Auswirkung auf den Alltag.",
    confusionNote:
      "PMS und PMDS haben identische Symptome – der Unterschied liegt in der Intensität und den funktionellen Einschränkungen. Beide treten ausschließlich in der Lutealphase auf (nach dem Eisprung bis zur Periode) und verschwinden mit Beginn der Menstruation. Das ist gleichzeitig das wichtigste diagnostische Kriterium: Wenn die Symptome über den Zyklus hinaus bestehen, ist eine andere Erkrankung (Depression, Angststörung, Schilddrüsenerkrankung) wahrscheinlicher.",
    sharedSymptoms: ["stimmungsschwankungen", "schlafstoerungen", "muedigkeit", "konzentrationsprobleme"],
    conditionAOnlySymptoms: [],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Schwere der Symptome",
        a: "Leicht bis mittel – störend, aber Alltag bleibt bewältigbar",
        b: "Schwer – deutliche Beeinträchtigung von Arbeit, Beziehungen und sozialem Leben",
      },
      {
        aspect: "Stimmungssymptome",
        a: "Reizbarkeit, Stimmungsschwankungen, Heulattacken – unangenehm, aber keine klinische Depression",
        b: "Schwere depressive Stimmung, Hoffnungslosigkeit, intensive Angst, Suizidgedanken möglich",
      },
      {
        aspect: "Funktionelle Einschränkung",
        a: "Geringe bis mäßige Beeinträchtigung des Alltags",
        b: "Erhebliche Beeinträchtigung: Krankmeldungen, soziale Isolation, Beziehungsprobleme",
      },
      {
        aspect: "Diagnosekriterium",
        a: "Mindestens ein körperliches + ein psychisches Symptom in der Lutealphase (informell)",
        b: "Mindestens 5 spezifische Symptome nach DSM-5, inklusive mindestens 1 affektives Symptom; über 2 Zyklen dokumentiert",
      },
      {
        aspect: "Behandlung",
        a: "Lebensstilmaßnahmen, Vitamine (B6, Magnesium), pflanzliche Mittel, ggf. hormonelle Verhütung",
        b: "SSRI (Antidepressiva) sind First-Line-Therapie; orale Kontrazeptiva (Drospirenon/Ethinylöstradiol); psychotherapeutische Unterstützung",
      },
    ],
    labTests: [
      {
        test: "Zyklusprotokoll (2 Zyklen)",
        a: "Symptome in der Lutealphase, Besserung nach Periodeneinsetzen",
        b: "Dasselbe – aber Schwere der Symptome deutlich höher; DSM-5-Kriterien erfüllt",
      },
      {
        test: "TSH + fT3 + Anti-TPO",
        a: "Normal (zum Ausschluss von Schilddrüsenerkrankungen)",
        b: "Normal – Ausschlussdiagnostik essenziell vor PMDS-Diagnose",
      },
      {
        test: "Östradiol + Progesteron (Lutealphase)",
        a: "Oft normal – PMS ist keine Hormonstörung per se, sondern erhöhte Sensitivität",
        b: "Meist normal – PMDS entsteht durch erhöhte Sensitivität der Gehirnrezeptoren gegenüber normalen Hormonschwankungen",
      },
    ],
    howToDifferentiate:
      "Das wichtigste diagnostische Werkzeug ist ein Zyklusprotokoll über zwei Monate: täglich Symptome und ihre Intensität dokumentieren. Wenn die Symptome ausschließlich in der Lutealphase auftreten und mit der Periode verschwinden, spricht das für PMS oder PMDS. Die Schwere entscheidet: Wenn Arbeit, Beziehungen oder sozialer Rückzug erheblich beeinträchtigt werden, handelt es sich um PMDS – eine ernsthafte, behandelbare Erkrankung. Immer auch Schilddrüse abklären (TSH, Anti-TPO), da Hashimoto ähnliche Stimmungssymptome verursachen kann.",
    faqs: [
      {
        question: "Wie unterscheide ich PMS von PMDS?",
        answer:
          "PMS: Symptome sind störend, aber der Alltag ist noch bewältigbar. PMDS: erhebliche Beeinträchtigung von Arbeit, Beziehungen oder sozialem Leben; depressive Episoden, intensive Angst oder Hoffnungslosigkeit; möglicherweise Suizidgedanken. Ein Zyklusprotokoll über zwei Monate und ein Gespräch mit einer Gynäkologin oder Psychiaterin helfen bei der Differenzierung.",
      },
      {
        question: "Was hilft wirklich gegen PMDS?",
        answer:
          "SSRI (selektive Serotonin-Wiederaufnahme-Hemmer) sind die am besten belegte Behandlung – sie können auch nur in der Lutealphase genommen werden (intermittierende Therapie). Hormonelle Verhütung mit Drospirenon/Ethinylöstradiol (z.B. Yaz/Yasmin) ist speziell für PMDS zugelassen. Psychotherapie (KVT) kann ergänzend helfen. PMS: Magnesium (300 mg/Tag), Vitamin B6, Chasteberry (Mönchspfeffer), Bewegung.",
      },
      {
        question: "Kann Hashimoto PMS oder PMDS verschlimmern?",
        answer:
          "Ja. Eine unbehandelte Schilddrüsenunterfunktion kann die Stimmungsregulation beeinflussen und prämenstruelle Symptome verstärken. Außerdem werden Schilddrüsenerkrankungen bei Frauen mit PMS/PMDS überdurchschnittlich häufig gefunden. Eine vollständige Schilddrüsendiagnostik (TSH, fT3, Anti-TPO) ist bei schweren prämenstruellen Symptomen immer sinnvoll.",
      },
    ],
    sources: [
      {
        authors: "American College of Obstetricians and Gynecologists (ACOG)",
        year: 2023,
        title: "Premenstrual Syndrome and Premenstrual Dysphoric Disorder – Clinical Practice Bulletin",
        journal: "Obstetrics & Gynecology",
      },
      {
        authors: "Yonkers KA et al.",
        year: 2008,
        title: "Premenstrual syndrome",
        journal: "Lancet",
      },
      {
        authors: "Bäckström T et al.",
        year: 2011,
        title: "The role of hormones and hormonal treatments in premenstrual syndrome",
        journal: "CNS Drugs",
      },
    ],
  },
  "hashimoto-oder-anämie": {
    slug: "hashimoto-oder-anämie",
    conditionASlug: "hashimoto",
    conditionBSlug: "hormone",
    conditionAName: "Hashimoto",
    conditionBName: "Eisenmangel-Anämie",
    title: "Hashimoto oder Eisenmangel? Wenn Erschöpfung den falschen Namen bekommt",
    metaTitle: "Hashimoto oder Eisenmangel? Symptome unterscheiden & richtig testen",
    metaDescription:
      "Müdigkeit, Haarausfall, Konzentrationsprobleme – Hashimoto und Eisenmangel-Anämie haben fast identische Symptome. Welcher Bluttest entscheidet und was die Ursache wirklich ist.",
    intro:
      "Müdigkeit trotz ausreichend Schlaf, Haarausfall, blasse Haut, Konzentrationsprobleme – diese Symptome sind sowohl typisch für Hashimoto Thyreoiditis als auch für Eisenmangel-Anämie. Besonders tückisch: Beide Erkrankungen treten bei Frauen häufig gleichzeitig auf. Ein erhöhter TSH allein klärt das Problem nicht vollständig – ein vollständiges Blutbild inklusive Ferritin ist immer notwendig.",
    confusionNote:
      "Hashimoto und Eisenmangel haben nahezu identische Symptome und können sich gegenseitig verstärken. Eine Hypothyreose verschlechtert die Eisenabsorption im Darm, Eisenmangel wiederum hemmt die Umwandlung von T4 in das aktive T3. Frauen, die trotz L-Thyroxin-Therapie weiterhin erschöpft sind, haben häufig einen übersehenen Eisenmangel.",
    sharedSymptoms: ["muedigkeit", "haarausfall", "konzentrationsprobleme", "antriebslosigkeit"],
    conditionAOnlySymptoms: ["frieren", "gewichtszunahme", "verstopfung", "trockene-haut"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Charakteristisches Symptom",
        a: "Kälteintoleranz, Verstopfung, Gewichtszunahme, verlangsamter Puls",
        b: "Blässe, brüchige Nägel, Mundwinkelrhagaden, Schwindel bei Belastung",
      },
      {
        aspect: "Haarausfall-Charakter",
        a: "Diffuser Haarausfall über gesamten Kopf, oft auch Augenbrauen",
        b: "Diffuser Haarausfall, Haar dünn und spröde, wächst langsamer nach",
      },
      {
        aspect: "Müdigkeitsqualität",
        a: "Bleierne, konstante Erschöpfung; Verlangsamung aller Abläufe",
        b: "Erschöpfung bei Belastung (Belastungsdyspnoe), Herzrasen bei Anstrengung",
      },
      {
        aspect: "Diagnose",
        a: "TSH erhöht, Anti-TPO positiv, Schilddrüsen-Ultraschall auffällig",
        b: "Ferritin erniedrigt (<30 µg/l), Hämoglobin erniedrigt, MCV klein",
      },
      {
        aspect: "Therapie",
        a: "L-Thyroxin, selenreiche Ernährung, Stressreduktion",
        b: "Eisenpräparate (oral oder IV), Ernährungsanpassung, Ursachensuche",
      },
    ],
    labTests: [
      {
        test: "TSH + Anti-TPO",
        a: "TSH erhöht, Anti-TPO oft positiv – sichert Hashimoto-Diagnose",
        b: "Normal – kein Schilddrüsenproblem",
      },
      {
        test: "Ferritin",
        a: "Häufig erniedrigt (<70 µg/l) – verschlechtert Symptome zusätzlich",
        b: "Erniedrigt (<30 µg/l) – Hauptkriterium für Eisenmangel",
      },
      {
        test: "Hämoglobin (Hb)",
        a: "Normal (Hashimoto verursacht keine Anämie direkt)",
        b: "Erniedrigt (<12 g/dl bei Frauen) – bei manifester Anämie",
      },
      {
        test: "MCV (mittleres Zellvolumen)",
        a: "Normal",
        b: "Erniedrigt – typisch für Eisenmangel-Anämie",
      },
      {
        test: "Transferrinsättigung",
        a: "Normal",
        b: "Erniedrigt (<20 %) – zeigt unzureichendes Eisenangebot",
      },
    ],
    howToDifferentiate:
      "Beide Erkrankungen müssen gleichzeitig ausgeschlossen werden. Das Mindestlabor: TSH, Anti-TPO-Antikörper, Ferritin, Blutbild mit MCV. Wer Hashimoto hat und trotz L-Thyroxin weiterhin erschöpft ist, sollte unbedingt Ferritin messen lassen – Werte unter 70 µg/l beeinträchtigen die Schilddrüsenfunktion und die Eisenversorgung der Zellen auch ohne klinische Anämie.",
    faqs: [
      {
        question: "Kann Hashimoto einen Eisenmangel verursachen?",
        answer:
          "Ja, indirekt. Schilddrüsenunterfunktion verlangsamt die Magensäureproduktion und reduziert die Darmmotilität, was die Eisenabsorption verschlechtert. Außerdem haben viele Frauen mit Hashimoto eine gleichzeitige Zöliakie (Gluten-Unverträglichkeit), die die Eisenaufnahme zusätzlich hemmt.",
      },
      {
        question: "Was kommt zuerst – Schilddrüse oder Eisen testen?",
        answer:
          "Am besten beides gleichzeitig: TSH, fT4, Anti-TPO und Ferritin im gleichen Blutbefund. So spart man Zeit und verpasst nichts. Beide Erkrankungen zusammen zu haben, ist häufiger als isolierte Fälle.",
      },
      {
        question: "Ab welchem Ferritinwert sollte man supplementieren?",
        answer:
          "Ferritin unter 30 µg/l gilt als Eisenmangel. Bei Symptomen wie Haarausfall und Erschöpfung empfehlen viele Experten Supplementierung bis Ferritin 70–100 µg/l. Bei Hashimoto sollte Ferritin mindestens über 70 µg/l liegen, da Eisen für die T4-zu-T3-Konversion benötigt wird.",
      },
    ],
    sources: [
      {
        authors: "Beard JL",
        year: 2003,
        title: "Iron deficiency alters brain development and functioning",
        journal: "Journal of Nutrition",
      },
      {
        authors: "Zimmermann MB, Köhrle J",
        year: 2002,
        title: "The impact of iron and selenium deficiencies on iodine and thyroid metabolism",
        journal: "Thyroid",
      },
      {
        authors: "Deutsche Gesellschaft für Endokrinologie",
        year: 2021,
        title: "Leitlinie Diagnostik und Therapie der Hypothyreose",
        journal: "AWMF Register Nr. 060-002",
      },
    ],
  },

  "pcos-oder-hashimoto": {
    slug: "pcos-oder-hashimoto",
    conditionASlug: "hormone",
    conditionBSlug: "hashimoto",
    conditionAName: "PCOS",
    conditionBName: "Hashimoto",
    title: "PCOS oder Hashimoto? Wenn Hormonprobleme sich ähneln",
    metaTitle: "PCOS oder Hashimoto? Symptome, Unterschiede & Diagnose erklärt",
    metaDescription:
      "Zyklusprobleme, Haarausfall, Gewichtszunahme – PCOS und Hashimoto haben ähnliche Symptome. Wie du sie unterscheidest, warum sie gemeinsam auftreten und welche Tests helfen.",
    intro:
      "Unregelmäßige Periode, Haarausfall, Gewichtsprobleme, Stimmungsschwankungen – diese Symptome können sowohl auf PCOS (Polyzystisches Ovarsyndrom) als auch auf Hashimoto Thyreoiditis hinweisen. Beide Erkrankungen betreffen junge Frauen überproportional häufig und treten erschreckend oft gleichzeitig auf: Studien zeigen, dass bis zu 27 % der Frauen mit PCOS auch eine Schilddrüsenerkrankung haben.",
    confusionNote:
      "PCOS und Hashimoto sind beide hormonelle Erkrankungen, die den Zyklus, das Gewicht und die Stimmung beeinflussen. Der entscheidende Unterschied: PCOS ist primär eine Ovulationsstörung durch Androgenüberschuss, Hashimoto eine Autoimmunerkrankung der Schilddrüse. Aber Hashimoto kann PCOS-ähnliche Symptome auslösen, weil Schilddrüsenhormone direkt die Ovarialfunktion beeinflussen.",
    sharedSymptoms: ["haarausfall", "gewichtszunahme", "muedigkeit", "stimmungsschwankungen", "akne"],
    conditionAOnlySymptoms: ["pms"],
    conditionBOnlySymptoms: ["frieren", "verstopfung", "trockene-haut"],
    keyDifferences: [
      {
        aspect: "Zyklusveränderungen",
        a: "Oligomenorrhoe (selten) oder Amenorrhoe; unregelmäßige oder ausbleibende Ovulation",
        b: "Kann Zyklusveränderungen verursachen, aber anders: Hashimoto verlängert Zyklen durch Schilddrüsenhormonmangel",
      },
      {
        aspect: "Androgene",
        a: "Erhöhtes freies Testosteron oder DHEA-S; Hirsutismus (Gesichtsbehaarung, Bauchbehaarung)",
        b: "Androgene normal; kein Hirsutismus",
      },
      {
        aspect: "Charakteristisches Symptom",
        a: "Vermehrte Körperbehaarung, Akne, Zysten in den Eierstöcken",
        b: "Kälteintoleranz, Verstopfung, verlangsamter Puls, Gewichtszunahme trotz Diät",
      },
      {
        aspect: "Insulinresistenz",
        a: "In 70 % der Fälle – zentrales Merkmal von PCOS",
        b: "Selten direkt – aber Hypothyreose kann Insulinsensitivität verschlechtern",
      },
      {
        aspect: "Diagnose",
        a: "Rotterdam-Kriterien: 2 von 3: Oligo-Anovulation, Hyperandrogenismus, polyzystische Ovarien im Ultraschall",
        b: "TSH erhöht oder Anti-TPO positiv + Ultraschall der Schilddrüse",
      },
    ],
    labTests: [
      {
        test: "TSH + Anti-TPO",
        a: "Normal – kein Hinweis auf Schilddrüsenproblem",
        b: "TSH erhöht; Anti-TPO positiv – beweisend für Hashimoto",
      },
      {
        test: "Freies Testosteron + DHEA-S",
        a: "Erhöht – zentrales Diagnosekriterium für PCOS",
        b: "Normal",
      },
      {
        test: "LH/FSH-Quotient",
        a: "Erhöht (> 2:1) – typisch für PCOS",
        b: "Normal",
      },
      {
        test: "Insulin (nüchtern) + Glukose",
        a: "Häufig erhöht; HOMA-IR-Index > 2,0 zeigt Insulinresistenz",
        b: "Normal",
      },
      {
        test: "Ultraschall Ovarien",
        a: "Polyzystische Ovarien: > 12 Follikel je Seite, erhöhtes Ovarvolumen",
        b: "Ovarien normal; Schilddrüse inhomogen, echoarm",
      },
    ],
    howToDifferentiate:
      "Der wichtigste Unterschied im Alltag: Hirsutismus (vermehrte Körperbehaarung, besonders Gesicht und Bauch) spricht klar für PCOS. Kälteintoleranz und Verstopfung sprechen klar für Hypothyreose. Beide Erkrankungen treten häufig gemeinsam auf – das vollständige Labor sollte immer TSH, Anti-TPO, freies Testosteron, DHEA-S, Insulin und FSH/LH umfassen.",
    faqs: [
      {
        question: "Kann Hashimoto PCOS auslösen oder verschlimmern?",
        answer:
          "Ja. Schilddrüsenhormone sind direkt an der Regulation des Menstruationszyklus beteiligt. Eine Hypothyreose kann polyzystische Veränderungen der Eierstöcke verursachen, die PCOS ähneln. Bei vielen Frauen verschwinden PCOS-ähnliche Befunde nach erfolgreicher Hashimoto-Behandlung.",
      },
      {
        question: "Welche Untersuchung sollte ich als erstes machen lassen?",
        answer:
          "Blut: TSH, Anti-TPO, freies Testosteron, DHEA-S, LH, FSH, Nüchterninsulin und Blutzucker. Ultraschall: Schilddrüse und Ovarien. Am besten alles in einer Abklärung – so spart man Zeit und schließt beide Erkrankungen gleichzeitig aus oder ein.",
      },
      {
        question: "Warum dauert die PCOS-Diagnose so lange?",
        answer:
          "Weil die Symptome unspezifisch sind und PCOS kein einheitliches Erscheinungsbild hat. Manche Frauen sind schlank ohne Akne aber mit Zyklusstörung; andere haben Hirsutismus und Akne aber einen regelmäßigen Zyklus. Und viele Ärzte testen PCOS und Schilddrüse nicht gleichzeitig – obwohl sie häufig koexistieren.",
      },
    ],
    sources: [
      {
        authors: "Janssen OE et al.",
        year: 2004,
        title: "High prevalence of autoimmune thyroiditis in patients with polycystic ovary syndrome",
        journal: "European Journal of Endocrinology",
      },
      {
        authors: "Garber JR et al.",
        year: 2012,
        title: "Clinical practice guidelines for hypothyroidism in adults",
        journal: "Thyroid",
      },
      {
        authors: "Teede HJ et al.",
        year: 2018,
        title: "Recommendations from the international evidence-based guideline for the assessment and management of PCOS",
        journal: "Human Reproduction",
      },
    ],
  },

  "wechseljahre-oder-angststoerung": {
    slug: "wechseljahre-oder-angststoerung",
    conditionASlug: "menopause",
    conditionBSlug: "hormone",
    conditionAName: "Perimenopause",
    conditionBName: "Angststörung",
    title: "Perimenopause oder Angststörung? Wenn Hormone Panik auslösen",
    metaTitle: "Perimenopause oder Angststörung? Symptome & Unterschied erklärt",
    metaDescription:
      "Herzrasen, Panikattacken, innere Unruhe – Perimenopause oder Angststörung? Wie hormonelle Veränderungen Angstsymptome auslösen und wann psychiatrische Hilfe nötig ist.",
    intro:
      "Herzrasen ohne erkennbaren Auslöser. Plötzliche Panik. Innere Unruhe und das Gefühl, die Kontrolle zu verlieren. Diese Symptome können sowohl auf eine Angststörung als auch auf perimenopausale Hormonschwankungen hinweisen. Viele Frauen werden mit Anxiolytika oder Antidepressiva behandelt, wenn die eigentliche Ursache ein fallender Östrogenspiegel ist. Und umgekehrt: Frauen, bei denen eine echte Angststörung vorliegt, bekommen manchmal Hormontests statt psychiatrischer Hilfe.",
    confusionNote:
      "Östrogen reguliert die Aktivität von Serotonin, GABA und Noradrenalin – alle drei Neurotransmitter sind direkt an der Angstregulation beteiligt. Wenn Östrogen sinkt und schwankt, sinkt der Serotoninspiegel, die GABA-Aktivität nimmt ab und die Amygdala wird reaktiver. Das Ergebnis: Reizbarkeit, Panikattacken, Schlafstörungen – physiologisch identisch mit einer Angststörung. Der Unterschied liegt in der Ursache, nicht im Symptomerleben.",
    sharedSymptoms: ["herzrasen", "panikattacken", "schlafstoerungen", "reizbarkeit", "stimmungsschwankungen"],
    conditionAOnlySymptoms: ["hitzewallungen", "nachtschweiss", "scheidentrockenheit"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Auslöser",
        a: "Hormonelle Schwankungen, oft schlafbezogen oder zyklisch",
        b: "Situativ oder generalisiert, nicht hormonell korreliert",
      },
      {
        aspect: "Körperliche Begleitsymptome",
        a: "Hitzewallungen, Nachtschweiß, Scheidentrockenheit, Zyklusveränderungen",
        b: "Muskelverspannung, Hyperventilation, Zittern – ohne Hitzewallungen",
      },
      {
        aspect: "Zeitliches Muster",
        a: "Oft nachts oder in der Lutealphase; verbunden mit Hormonschwankungen",
        b: "Anhaltend, situationsgebunden oder als Generalisierte Angststörung täglich",
      },
      {
        aspect: "Alter beim Auftreten",
        a: "Neu auftretend in der Perimenopause (40–55), keine psychiatrische Vorgeschichte",
        b: "Oft früher auftretend; häufig bekannte psychiatrische Vorgeschichte",
      },
      {
        aspect: "Ansprechen auf Hormontherapie",
        a: "Oft deutliche Besserung innerhalb von Wochen nach Östrogengabe",
        b: "Keine oder geringe Besserung unter HRT; spricht auf Anxiolytika/Psychotherapie an",
      },
    ],
    labTests: [
      {
        test: "FSH + Östradiol",
        a: "FSH erhöht, Östradiol schwankend/erniedrigt – bestätigt Perimenopause",
        b: "Normal für Alter – kein hormoneller Auslöser",
      },
      {
        test: "TSH + fT3 + Anti-TPO",
        a: "Normal oder auffällig (Hashimoto als Ko-Erkrankung möglich)",
        b: "Normal (Schilddrüse als Ursache ausschließen)",
      },
      {
        test: "Cortisol (Tagesprofil)",
        a: "Kann erhöht sein durch Schlafstörungen und Stress",
        b: "Oft chronisch erhöht – Angststörung dysreguliert die HPA-Achse",
      },
      {
        test: "EKG",
        a: "Normal – Herzrasen ist vazomotorisch, kein kardialer Befund",
        b: "Normal – Herzrasen bei Panikattacken ist funktionell",
      },
    ],
    howToDifferentiate:
      "Entscheidende Fragen: Gibt es Hitzewallungen oder Nachtschweiß? Diese treten bei Angststörungen nicht auf. Sind die Angstsymptome neu ab 40–50 ohne frühere psychiatrische Geschichte? Stark für Perimenopause. Bessern sich die Symptome stark nach der Periode oder nach dem Einsetzen? Hormonell. Ein FSH-Test und Östradioltesting geben oft schnelle Klarheit. Bei Suizidgedanken oder starker Einschränkung: sofort psychiatrische Abklärung.",
    faqs: [
      {
        question: "Können Hitzewallungen Panikattacken auslösen?",
        answer:
          "Ja – und das ist häufiger als angenommen. Eine Hitzewallung verursacht plötzliches Herzrasen, Schwitzen und Benommenheit – das aktiviert das Angstsystem, was zu einer Panikattacke eskalieren kann. Viele Frauen entwickeln in der Perimenopause erstmals Panikattacken, obwohl keine Angststörung vorliegt. Die Behandlung der Hitzewallungen beseitigt oft auch die Panikattacken.",
      },
      {
        question: "Hilft eine Hormontherapie gegen Angst in den Wechseljahren?",
        answer:
          "Ja, oft. Transdermal appliziertes Östrogen hat in mehreren Studien Angst- und Paniksymptome in der Perimenopause deutlich reduziert. Bioidentisches Progesteron (Utrogest) hat zudem anxiolytische Wirkung über GABA-Rezeptoren. Die Wirkung tritt meist innerhalb von 4–8 Wochen ein.",
      },
      {
        question: "Wann brauche ich zusätzlich eine Psychotherapie?",
        answer:
          "Wenn die Angst trotz optimierter Hormontherapie anhält, wenn es vermeidungsbedingte Verhaltensmuster gibt (z.B. keine öffentlichen Plätze mehr), wenn Suizidgedanken bestehen oder wenn die Lebensqualität trotz Behandlung stark eingeschränkt ist. Kognitiv-behaviorale Therapie (KVT) ist auch bei hormonal bedingter Angst sehr wirksam.",
      },
    ],
    sources: [
      {
        authors: "Bäckström T et al.",
        year: 2011,
        title: "The role of hormones and hormonal treatments in premenstrual syndrome",
        journal: "CNS Drugs",
      },
      {
        authors: "Schmidt PJ et al.",
        year: 2015,
        title: "Estrogen replacement in perimenopause-related depression",
        journal: "Journal of Clinical Psychiatry",
      },
      {
        authors: "DGGG – Deutsche Gesellschaft für Gynäkologie und Geburtshilfe",
        year: 2020,
        title: "S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Register Nr. 015-062",
      },
    ],
  },

  "schilddruese-oder-eisenmangel": {
    slug: "schilddruese-oder-eisenmangel",
    conditionASlug: "schilddruese",
    conditionBSlug: "hormone",
    conditionAName: "Schilddrüsenunterfunktion",
    conditionBName: "Eisenmangel",
    title: "Schilddrüsenunterfunktion oder Eisenmangel? Symptome unterscheiden",
    metaTitle: "Schilddrüse oder Eisenmangel? Müdigkeit, Haarausfall & die richtige Diagnose",
    metaDescription:
      "Schilddrüsenunterfunktion und Eisenmangel haben fast identische Symptome. Welcher Bluttest entscheidet, warum beides oft zusammen auftritt und was wirklich hilft.",
    intro:
      "Chronische Erschöpfung, Haarausfall, Konzentrationsprobleme, blasse Haut – wer mit diesen Beschwerden zum Arzt geht, bekommt häufig eine Diagnose: Eisenmangel oder Schilddrüsenunterfunktion. Aber oft ist es beides. Denn beide Erkrankungen sind nicht nur symptomatisch ähnlich – sie bedingen einander: Eisenmangel hemmt die Schilddrüsenhormon-Synthese, Hypothyreose verschlechtert die Eisenabsorption.",
    confusionNote:
      "Eisen ist ein essentieller Kofaktor für die Thyreoperoxidase – das Enzym, das Schilddrüsenhormone synthetisiert. Eisenmangel führt direkt zu einer verminderten Schilddrüsenhormonproduktion und hemmt die Umwandlung von T4 in das aktive T3. Gleichzeitig verlangsamt eine Schilddrüsenunterfunktion die Magensäureproduktion, was die Eisenabsorption reduziert. Ein echter Teufelskreis.",
    sharedSymptoms: ["muedigkeit", "haarausfall", "konzentrationsprobleme", "antriebslosigkeit"],
    conditionAOnlySymptoms: ["frieren", "verstopfung", "gewichtszunahme"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Körpertemperatur",
        a: "Kälteintoleranz – ständiges Frieren auch bei normaler Raumtemperatur",
        b: "Keine Kälteintoleranz – aber Blässe und blasse Schleimhäute",
      },
      {
        aspect: "Herzfrequenz",
        a: "Eher langsam (Bradykardie möglich)",
        b: "Eher schnell bei Belastung; Herzrasen bei Treppensteigen",
      },
      {
        aspect: "Fingernägel",
        a: "Brüchig, langsam wachsend",
        b: "Brüchig mit Längsriefen; Koilonychie (löffelförmige Nägel) möglich",
      },
      {
        aspect: "Laborparameter",
        a: "TSH erhöht; fT4 erniedrigt; Anti-TPO positiv bei Hashimoto",
        b: "Ferritin erniedrigt (<30 µg/l); Hb erniedrigt; MCV klein",
      },
      {
        aspect: "Diagnose-Priorität",
        a: "TSH als Screening-Parameter ausreichend",
        b: "Ferritin (nicht nur Hb!) – Eisenmangel ohne Anämie wird oft übersehen",
      },
    ],
    labTests: [
      {
        test: "TSH",
        a: "Erhöht (> 4,0 mU/L bei manifester Hypothyreose)",
        b: "Normal",
      },
      {
        test: "Ferritin",
        a: "Häufig erniedrigt als Ko-Befund; beeinflusst Schilddrüsenfunktion",
        b: "Erniedrigt (< 30 µg/l) – Hauptdiagnosekriterium",
      },
      {
        test: "Hämoglobin (Hb)",
        a: "Normal",
        b: "Erniedrigt (< 12 g/dl bei Frauen) bei manifester Anämie",
      },
      {
        test: "fT3 (freies T3)",
        a: "Erniedrigt bei Hypothyreose oder T4→T3-Konversionsstörung",
        b: "Kann erniedrigt sein – Eisenmangel hemmt T4→T3-Konversion",
      },
      {
        test: "Anti-TPO-Antikörper",
        a: "Positiv bei Hashimoto als Ursache",
        b: "Normal",
      },
    ],
    howToDifferentiate:
      "Wichtigste Regel: Immer beides testen. TSH allein reicht nicht – Ferritin muss explizit angefordert werden, da es nicht zum Standardblutbild gehört. Ferritin unter 70 µg/l beeinträchtigt die Schilddrüsenfunktion auch ohne Anämie. Wer Hashimoto und Eisenmangel gleichzeitig hat, sollte wissen: Eisensubstitution muss mindestens 4 Stunden von L-Thyroxin getrennt eingenommen werden, da Eisen die Schilddrüsenhormon-Absorption hemmt.",
    faqs: [
      {
        question: "Kann Eisenmangel TSH-Werte verfälschen?",
        answer:
          "Ja. Schwerer Eisenmangel kann zu einem leicht erhöhten TSH führen, der bei normaler Eisenversorgung wieder sinkt. Bei TSH-Werten im Grenzbereich (2,5–4,0 mU/L) mit gleichzeitigem Eisenmangel: erst Eisen substituieren, dann TSH kontrollieren.",
      },
      {
        question: "Warum reicht Hämoglobin als Eisenparameter nicht aus?",
        answer:
          "Hb sinkt erst spät – wenn die Eisenspeicher bereits stark erschöpft sind. Ferritin spiegelt die Eisenspeicher wider und sinkt viel früher. Viele Frauen haben bei niedrig-normalem Hb bereits ein Ferritin unter 30 µg/l und leiden unter erheblichen Symptomen. Deshalb: immer Ferritin und Hb zusammen bestimmen.",
      },
      {
        question: "Was muss ich bei der Einnahme von Eisen und L-Thyroxin beachten?",
        answer:
          "Eisenpräparate hemmen die Aufnahme von Levothyroxin erheblich. Mindestabstand: 4 Stunden. Empfehlung: L-Thyroxin nüchtern morgens nehmen, Eisen mittags oder abends. TSH-Kontrolle 6–8 Wochen nach Beginn der Eisentherapie, da sich der TSH-Wert verschieben kann.",
      },
    ],
    sources: [
      {
        authors: "Zimmermann MB, Köhrle J",
        year: 2002,
        title: "The impact of iron and selenium deficiencies on iodine and thyroid metabolism",
        journal: "Thyroid",
      },
      {
        authors: "Beard JL",
        year: 2003,
        title: "Iron deficiency alters brain development and functioning",
        journal: "Journal of Nutrition",
      },
      {
        authors: "Garber JR et al.",
        year: 2012,
        title: "Clinical practice guidelines for hypothyroidism in adults",
        journal: "Thyroid",
      },
    ],
  },

  "menopause-oder-diabetes": {
    slug: "menopause-oder-diabetes",
    conditionASlug: "menopause",
    conditionBSlug: "hormone",
    conditionAName: "Menopause",
    conditionBName: "Typ-2-Diabetes / Insulinresistenz",
    title: "Menopause oder Diabetes? Wenn Blutzucker und Hormone sich verwirren",
    metaTitle: "Menopause oder Diabetes? Gewichtszunahme, Erschöpfung & Blutzucker erklärt",
    metaDescription:
      "Gewichtszunahme, Erschöpfung, Heißhunger – Menopause und Insulinresistenz haben viele gemeinsame Symptome. Warum Wechseljahre Diabetes-Risiko erhöhen und was dagegen hilft.",
    intro:
      "Viele Frauen bemerken in den Wechseljahren eine unerwartete Gewichtszunahme besonders am Bauch, Energieschwankungen nach dem Essen, Heißhunger und Schlafprobleme. Was nach klassischen Wechseljahresbeschwerden klingt, kann teilweise auf eine Insulinresistenz hinweisen – oder beides gleichzeitig sein. Die Menopause erhöht das Risiko für Typ-2-Diabetes erheblich.",
    confusionNote:
      "Östrogen schützt vor Insulinresistenz: Es verbessert die Glukoseaufnahme in den Zellen und senkt die Insulinausschüttung. Wenn Östrogen in der Menopause fällt, verschlechtert sich die Insulinsensitivität – das Risiko für metabolisches Syndrom und Typ-2-Diabetes steigt. Gleichzeitig verändert sich das Körperfett von peripher (Hüften, Oberschenkel) zu viszeral (Bauchraum), was die Insulinresistenz weiter verschlechtert.",
    sharedSymptoms: ["muedigkeit", "gewichtszunahme", "schlafstoerungen", "konzentrationsprobleme", "stimmungsschwankungen"],
    conditionAOnlySymptoms: ["hitzewallungen", "nachtschweiss", "scheidentrockenheit"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Art der Gewichtszunahme",
        a: "Gesamtgewicht steigt; besonders Bauchfett (Östrogenmangel verändert Fettverteilung)",
        b: "Viszerales Bauchfett dominant; 'Apfelform' auch ohne Gewichtszunahme möglich",
      },
      {
        aspect: "Charakteristische Symptome",
        a: "Hitzewallungen, Nachtschweiß, Scheidentrockenheit, Zyklusveränderungen",
        b: "Heißhunger 1–2 Stunden nach dem Essen, extreme Erschöpfung nach Kohlenhydraten, häufiges Wasserlassen",
      },
      {
        aspect: "Blutzuckerreaktion",
        a: "Kann Blutzuckerschwankungen verstärken, ist aber nicht die Ursache",
        b: "Nüchtern-Blutzucker erhöht (> 5,6 mmol/l); pathologischer oraler Glukosetoleranztest",
      },
      {
        aspect: "Diagnose",
        a: "FSH erhöht, Östradiol erniedrigt – klinische Diagnose",
        b: "HbA1c erhöht (> 5,7 %), Nüchterninsulin erhöht, HOMA-IR > 2,0",
      },
    ],
    labTests: [
      {
        test: "FSH + Östradiol",
        a: "FSH erhöht; Östradiol erniedrigt – bestätigt Perimenopause/Menopause",
        b: "Normal (Diabetes ist unabhängig von Menopause)",
      },
      {
        test: "HbA1c (Langzeit-Blutzucker)",
        a: "Normal (<5,7 %) – Menopause verursacht keinen Diabetes direkt",
        b: "Erhöht: 5,7–6,4 % = Prädiabetes; > 6,5 % = Diabetes",
      },
      {
        test: "Nüchtern-Insulin",
        a: "Normal – Menopause beeinflusst Insulin indirekt",
        b: "Erhöht – Zeichen von Insulinresistenz",
      },
      {
        test: "HOMA-IR (Insulinresistenz-Index)",
        a: "Normal oder leicht erhöht durch Menopause",
        b: "Erhöht (> 2,0) bei Insulinresistenz; > 2,5 bei starker Resistenz",
      },
      {
        test: "Triglyzeride + HDL",
        a: "Können sich in der Menopause verschlechtern (ungünstigeres Lipidprofil)",
        b: "Triglyzeride erhöht, HDL erniedrigt – klassisches metabolisches Syndrom",
      },
    ],
    howToDifferentiate:
      "Beide Erkrankungen können und treten häufig gleichzeitig auf. Ein vollständiges Stoffwechsel-Screening ist ab der Perimenopause sinnvoll: FSH, Östradiol, HbA1c, Nüchterninsulin, Triglyzeride, HDL. Hitzewallungen und Nachtschweiß sprechen klar für die Menopause. Heißhunger 1–2 Stunden nach dem Essen, starke Erschöpfung nach Kohlenhydraten und Bauchfett trotz relativ normalem Gewicht sprechen für Insulinresistenz.",
    faqs: [
      {
        question: "Erhöhen die Wechseljahre das Diabetesrisiko?",
        answer:
          "Ja, deutlich. Das Risiko für Typ-2-Diabetes verdoppelt sich in der Menopause. Östrogen verbessert die Insulinsensitivität – sein Wegfall erhöht die Insulinresistenz. Hormontherapie (HRT) kann das Diabetesrisiko in der Perimenopause nachweislich senken.",
      },
      {
        question: "Hilft eine Hormontherapie gegen Insulinresistenz?",
        answer:
          "Ja, transdermal appliziertes Östrogen verbessert die Insulinsensitivität und kann den HbA1c leicht senken. Die Wahl des Gestagens spielt eine Rolle: Bioidentisches Progesteron (Utrogest) ist metabolisch neutraler als synthetische Gestagene.",
      },
      {
        question: "Wie erkenne ich eine Insulinresistenz?",
        answer:
          "Typische Zeichen: Bauchfett, das trotz Diät bleibt; Energieabfall 1–2 Stunden nach Kohlenhydratmahlzeiten; Heißhunger; Schlafprobleme. Diagnose: Nüchterninsulin + Nüchternglukose (HOMA-IR-Berechnung) und HbA1c. Ein OGTT (oraler Glukosetoleranztest) bei Verdacht auf Prädiabetes.",
      },
    ],
    sources: [
      {
        authors: "Carr MC",
        year: 2003,
        title: "The emergence of the metabolic syndrome with menopause",
        journal: "Journal of Clinical Endocrinology & Metabolism",
      },
      {
        authors: "Mauvais-Jarvis F et al.",
        year: 2013,
        title: "The role of estrogens in control of energy balance and glucose homeostasis",
        journal: "Endocrine Reviews",
      },
      {
        authors: "DGGG – Deutsche Gesellschaft für Gynäkologie und Geburtshilfe",
        year: 2020,
        title: "S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Register Nr. 015-062",
      },
    ],
  },

  "hashimoto-oder-fibromyalgie": {
    slug: "hashimoto-oder-fibromyalgie",
    conditionASlug: "hashimoto",
    conditionBSlug: "hormone",
    conditionAName: "Hashimoto",
    conditionBName: "Fibromyalgie",
    title: "Hashimoto oder Fibromyalgie? Wenn Schmerz und Erschöpfung verwirren",
    metaTitle: "Hashimoto oder Fibromyalgie? Symptome, Unterschiede & Diagnose",
    metaDescription:
      "Muskelschmerzen, Erschöpfung, Konzentrationsprobleme, Schlafstörungen – Hashimoto und Fibromyalgie sind kaum zu unterscheiden. Welche Tests helfen und warum beide oft gleichzeitig auftreten.",
    intro:
      "Diffuse Muskelschmerzen, chronische Erschöpfung, Brain Fog, Schlafstörungen und Stimmungsschwankungen – diese Beschwerden passen auf Fibromyalgie. Sie passen auch auf Hashimoto Thyreoiditis. Die Ähnlichkeit ist so groß, dass viele Frauen jahrelang mit Fibromyalgie leben, bevor jemand die Schilddrüse untersucht. Und viele Frauen mit Hashimoto haben aufgrund persistierender Symptome trotz L-Thyroxin-Therapie eine weitere Fibromyalgie-Diagnose bekommen.",
    confusionNote:
      "Fibromyalgie und Hashimoto überlappen sich nicht nur symptomatisch – die Prävalenz von Schilddrüsenerkrankungen bei Fibromyalgie-Patientinnen ist 4-fach erhöht. Hypothyreose kann fibromyalgie-ähnliche Muskelschmerzen, Gelenkentzündungen und chronische Erschöpfung verursachen. Bei einigen Patientinnen verschwindet die 'Fibromyalgie' vollständig nach erfolgreicher Schilddrüsenbehandlung.",
    sharedSymptoms: ["muedigkeit", "schlafstoerungen", "konzentrationsprobleme", "stimmungsschwankungen", "gelenkschmerzen", "antriebslosigkeit"],
    conditionAOnlySymptoms: ["frieren", "gewichtszunahme", "haarausfall"],
    conditionBOnlySymptoms: [],
    keyDifferences: [
      {
        aspect: "Schmerzcharakter",
        a: "Muskelschmerzen eher diffus, begleitet von Steifheit; Gelenkschwellung möglich",
        b: "Druckschmerzhafte Triggerpunkte an spezifischen Körperstellen; Ganzkörperschmerz",
      },
      {
        aspect: "Blutbefund",
        a: "TSH erhöht; Anti-TPO-Antikörper positiv; messbare Laborauffälligkeiten",
        b: "Labor unauffällig – Fibromyalgie ist eine klinische Diagnose ohne Labormarker",
      },
      {
        aspect: "Kalte Empfindlichkeit",
        a: "Typisch – Kälteintoleranz auch bei normaler Raumtemperatur",
        b: "Kälteempfindlichkeit möglich, aber kein konstantes Merkmal",
      },
      {
        aspect: "Ansprechen auf Behandlung",
        a: "Deutliche Besserung nach korrekter L-Thyroxin-Dosierung",
        b: "Kein Ansprechen auf Schilddrüsentherapie; Behandlung multidisziplinär",
      },
      {
        aspect: "Diagnoseweg",
        a: "TSH + Anti-TPO + Ultraschall – objektive Diagnose möglich",
        b: "Ausschlussdiagnose: andere Erkrankungen müssen ausgeschlossen werden",
      },
    ],
    labTests: [
      {
        test: "TSH + fT3 + fT4",
        a: "TSH erhöht; fT3/fT4 erniedrigt – bestätigt Hypothyreose",
        b: "Normal – Fibromyalgie hat keine Schilddrüsenauffälligkeiten",
      },
      {
        test: "Anti-TPO + Anti-Tg",
        a: "Positiv – beweisend für Hashimoto",
        b: "Normal",
      },
      {
        test: "CK (Kreatinkinase)",
        a: "Kann bei schwerer Hypothyreose leicht erhöht sein (Muskelabbau)",
        b: "Normal oder leicht erhöht",
      },
      {
        test: "CRP + BSG (Entzündungsmarker)",
        a: "Kann leicht erhöht bei Hashimoto-Schüben",
        b: "Normal – keine systemische Entzündung bei Fibromyalgie",
      },
      {
        test: "Vitamin D",
        a: "Häufig erniedrigt – verschlechtert Muskelschmerzen",
        b: "Häufig erniedrigt – bekannter Verstärker von Fibromyalgie-Schmerzen",
      },
    ],
    howToDifferentiate:
      "Die goldene Regel: Vor jeder Fibromyalgie-Diagnose muss die Schilddrüse vollständig abgeklärt werden (TSH, fT3, fT4, Anti-TPO). Wenn Hashimoto behandelt wird und Schmerzen und Erschöpfung verschwinden, war die 'Fibromyalgie' eine Fehldiagnose. Wenn Symptome trotz optimierter Schilddrüsenwerte (TSH 0,5–2,0 mU/L) fortbestehen, dann Fibromyalgie als Ko-Erkrankung in Betracht ziehen. Auch Vitamin D und Ferritin messen – Mängel verstärken beide Erkrankungen.",
    faqs: [
      {
        question: "Kann Hypothyreose Fibromyalgie vortäuschen?",
        answer:
          "Ja. Unbehandelte oder schlecht behandelte Hypothyreose kann diffuse Muskelschmerzen, Gelenkschwellung, chronische Erschöpfung und Brain Fog verursachen – identisch mit Fibromyalgie. Bei manchen Patientinnen verschwinden alle Fibromyalgie-Symptome nach Optimierung der Schilddrüsentherapie.",
      },
      {
        question: "Kann ich Hashimoto und Fibromyalgie gleichzeitig haben?",
        answer:
          "Ja. Studien zeigen eine 4-fach erhöhte Fibromyalgie-Prävalenz bei Frauen mit Schilddrüsenerkrankungen. Beide können gleichzeitig vorliegen – dann muss beides behandelt werden. Fibromyalgie-spezifische Behandlung (Bewegungstherapie, KVT, ggf. Amitriptylin) ergänzt die Schilddrüsentherapie.",
      },
      {
        question: "Welcher Vitamin-D-Spiegel ist bei diesen Erkrankungen optimal?",
        answer:
          "Für Schilddrüsen- und Muskelgesundheit empfehlen viele Experten 25-OH-Vitamin D > 50 ng/ml (125 nmol/l). Werte unter 20 ng/ml erhöhen das Hashimoto-Risiko und verschlimmern Muskelschmerzen erheblich. Supplementierung: 2000–4000 IU täglich, individuelle Anpassung nach Blutspiegel.",
      },
    ],
    sources: [
      {
        authors: "Pamuk ON et al.",
        year: 2007,
        title: "Fibromyalgia in patients with thyroid autoimmunity",
        journal: "Clinical Rheumatology",
      },
      {
        authors: "Caturegli P, De Remigis A, Rose NR",
        year: 2014,
        title: "Hashimoto thyroiditis: clinical and diagnostic criteria",
        journal: "Autoimmunity Reviews",
      },
      {
        authors: "Wolfe F et al.",
        year: 2010,
        title: "The American College of Rheumatology preliminary diagnostic criteria for fibromyalgia",
        journal: "Arthritis Care & Research",
      },
    ],
  },
};

export const VERGLEICHE_LIST = Object.values(VERGLEICHE_DATA);
