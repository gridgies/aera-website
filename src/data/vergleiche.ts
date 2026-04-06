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
    title: "Hashimoto oder Menopause? So erkennst du den Unterschied",
    metaTitle: "Hashimoto oder Menopause? Symptome, Unterschiede & Diagnose",
    metaDescription:
      "Hashimoto und Menopause haben viele gemeinsame Symptome – Müdigkeit, Haarausfall, Gewichtszunahme. Wie du sie unterscheidest und welche Labortests wirklich helfen.",
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
    metaTitle: "Hashimoto oder Schilddrüsenunterfunktion? Ursachen & Unterschiede erklärt",
    metaDescription:
      "Hashimoto ist eine Autoimmunerkrankung, Schilddrüsenunterfunktion eine Funktionsstörung. Beide hängen zusammen – aber die Behandlung unterscheidet sich. Alles erklärt.",
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
};

export const VERGLEICHE_LIST = Object.values(VERGLEICHE_DATA);
