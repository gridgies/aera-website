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
};

export const VERGLEICHE_LIST = Object.values(VERGLEICHE_DATA);
