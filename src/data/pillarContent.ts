// Pillar content for the 4 main condition pages.
// Each entry maps a condition slug to rich, medically reviewed German editorial content.

export interface PillarStat {
  value: string;
  label: string;
  source: string;
}

export interface PillarSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PillarFaq {
  question: string;
  answer: string;
}

export interface PillarSource {
  authors: string;
  year: number;
  title: string;
  journal: string;
  note?: string;
}

export interface PillarContent {
  intro: string;
  stats: PillarStat[];
  sections: PillarSection[];
  faqs: PillarFaq[];
  sources: PillarSource[];
}

export const PILLAR_CONTENT: Record<string, PillarContent> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // MENOPAUSE
  // ─────────────────────────────────────────────────────────────────────────────
  menopause: {
    intro:
      "Die Menopause ist kein Krankheitsbild, sondern ein biologischer Übergang – und doch erleben ihn viele Frauen als tiefgreifende Zäsur. Dieser Artikel erklärt, was hormonell wirklich passiert, welche Behandlungsoptionen nach aktuellem Stand der Wissenschaft empfohlen werden und was die Evidenz zu Pflanzenstoffen und Lebensstil sagt.",

    stats: [
      {
        value: "ca. 13 Millionen",
        label: "Frauen in Deutschland befinden sich derzeit in den Wechseljahren oder der Postmenopause",
        source: "Statistisches Bundesamt, Bevölkerungsfortschreibung 2023",
      },
      {
        value: "7–10 Jahre",
        label: "beträgt die mediane Dauer vasomotorischer Symptome (Hitzewallungen/Nachtschweiß)",
        source: "Freeman et al., JAMA Internal Medicine 2014 (SWAN-Kohorte)",
      },
      {
        value: "51,4 Jahre",
        label: "ist das durchschnittliche Menopausenalter in Deutschland – identisch mit dem europäischen Mittel",
        source: "Schoenaker et al., Human Reproduction 2014; RKI Gesundheitsbericht",
      },
      {
        value: "< 10 %",
        label: "der betroffenen Frauen in Deutschland erhalten eine Hormontherapie, obwohl bis zu 80 % Symptome berichten",
        source: "Bühling et al., Maturitas 2014; Stute et al., Gynäkologische Endokrinologie 2018",
      },
    ],

    sections: [
      {
        heading: "Was ist die Menopause? Die STRAW+10-Stadien verstehen",
        paragraphs: [
          "Der Begriff „Menopause“ bezeichnet medizinisch präzise den letzten Zeitpunkt der Menstruation – ein Datum, das erst rückblickend nach zwölf aufeinanderfolgenden Monaten ohne Periode festgestellt werden kann. Was umgangssprachlich als „Wechseljahre“ gilt, beschreibt das internationale Expertengremium STRAW+10 (Stages of Reproductive Aging Workshop) als einen Prozess mit mehreren definierten Phasen, der sich über zehn bis fünfzehn Jahre erstrecken kann.",
          "Die **Perimenopause** beginnt, wenn menstruelle Zyklen unregelmäßiger werden und vasomotorische Symptome auftreten – meist Mitte bis Ende 40. Sie wird in eine frühe Phase (Zyklusveränderungen > 7 Tage) und eine späte Phase (Aussetzer ≥ 60 Tage) unterteilt. Die **Postmenopause** beginnt zwölf Monate nach der letzten Menstruation und dauert für den Rest des Lebens an. In dieser Phase normalisiert sich die hormonelle Aktivität auf einem dauerhaft niedrigeren Niveau.",
          "Das STRAW+10-Modell ist klinisch relevant, weil Symptome und Risiken je nach Phase erheblich variieren. So sind kardiovaskuläre und Knochenveränderungen in den ersten Jahren der Postmenopause besonders ausgeprägt, während vasomotorische Beschwerden ihren Höhepunkt oft bereits in der späten Perimenopause erreichen.",
        ],
        bullets: [
          "Frühe Perimenopause: Zyklen variieren > 7 Tage; FSH beginnt zu steigen",
          "Späte Perimenopause: Aussetzer ≥ 60 Tage; Östrogen fällt deutlich ab",
          "Menopause: letzter Zeitpunkt der Blutung (retrospektiv nach 12 Monaten)",
          "Frühe Postmenopause (0–6 Jahre): stärkste Knochen- und metabolische Veränderungen",
          "Späte Postmenopause (> 6 Jahre): stabilisierte, dauerhaft niedrige Hormonspiegel",
        ],
      },
      {
        heading: "Hormoneller Mechanismus: Was passiert im Körper?",
        paragraphs: [
          "Die Menopause ist eine Folge der erschöpften Follikelreserve der Eierstöcke. Mit dem Rückgang funktionsfähiger Follikel produzieren die Ovarien weniger Östradiol (E2) und Inhibin B. Da der negative Rückkopplungsmechanismus auf die Hypophyse nachlässt, steigt das follikelstimulierende Hormon (FSH) an – zunächst zyklisch erhöht, später dauerhaft. In der Postmenopause können FSH-Werte von 30–100 mIU/ml typisch sein. Parallel fällt Progesteron ab, da keine Gelbkörper (Lutealphasen) mehr entstehen.",
          "Östradiol ist kein reines Reproduktionshormon: Es hat Rezeptoren in Gehirn, Herzgefäßen, Knochen, Darm, Blase, Haut und Schleimhäuten. Der Abfall erklärt die Systemizität der Wechseljahrs-Symptome. Besonders relevant für Hitzewallungen ist der Einfluss von Östradiol auf den hypothalamischen Thermoregulations-Setpoint: Sinkender Östrogenspiegel verengt die thermoneutrale Zone, sodass kleine Temperaturschwankungen Vasodilatation und Schweißausbrüche auslösen. Neurokinin B (NKB) und Dynorphin, die von KNDy-Neuronen im Hypothalamus sezerniert werden, spielen hier eine zentrale Rolle – ein Mechanismus, der zur Entwicklung nicht-hormoneller Therapien wie Fezolinetant geführt hat.",
          "Wichtig zu verstehen: In den frühen Wechseljahren dominiert oft der **relative** Progesteronmangel vor dem Östrogenmangel. Da Ovulationen ausbleiben oder unvollständig sind, fehlt der Gelbkörper als Hauptproduzent von Progesteron – während Östrogen noch weitgehend normal sein kann. Dieses Ungleichgewicht, oft als „Östrogendominanz“ bezeichnet, erklärt viele Beschwerden der frühen Perimenopause: Brustspannen, Wassereinlagerungen, prämenstruelles Syndrom, Schlafstörungen.",
        ],
      },
      {
        heading: "Vasomotorische Symptome: Hitzewallungen und Nachtschweiß",
        paragraphs: [
          "Vasomotorische Symptome (VMS) – Hitzewallungen tagsüber und Nachtschweiß – sind das kardinale Merkmal der Wechseljahre. Bis zu 80 % aller Frauen erleben sie; bei 20–30 % sind sie so intensiv, dass sie die Lebensqualität erheblich beeinträchtigen. Die SWAN-Studie (Study of Women's Health Across the Nation), die größte prospektive Kohortenstudie zu diesem Thema, verfolgte mehr als 1.500 Frauen über 17 Jahre. Ergebnis: Die mediane Dauer moderater bis schwerer VMS betrug 7,4 Jahre – beginnend oft schon vor der letzten Menstruation. Frauen, die VMS bereits in der frühen Perimenopause entwickelten, hatten die längste Symptomdauer.",
          "Nachtschweißepisoden sind besonders folgenreich, weil sie Schlaf fragmentieren und damit Stimmung, Kognition und metabolische Gesundheit beeinflussen. Die Unterscheidung zwischen klassischen VMS und Schlafstörungen aus anderen Ursachen (z. B. Schlafapnoe, Schilddrüsenfehlfunktion) ist klinisch relevant – eine Schilddrüsenfunktions-Diagnostik (TSH, fT3, fT4) sollte bei allen Frauen mit ausgeprägten Symptomen erfolgen.",
          "Nicht alle VMS sind gleich. Neuere Klassifikationen unterscheiden zwischen „heiß“ (typische Hitzewallungen mit Vasodilatation) und „kalt“ (Kältegefühl nach Schwitzen, besonders nachts). Letztere sprechen auf Östrogen weniger gut an und können auf eine adrenale oder autonome Dysfunktion hinweisen.",
        ],
      },
      {
        heading: "Hormontherapie (HRT): Der aktuelle Evidenzstand und das „Window of Opportunity“",
        paragraphs: [
          "Die Datenlage zur Hormontherapie (HRT) wurde durch die Women's Health Initiative (WHI) erheblich erschüttert – und ebenso erheblich fehlinterpretiert. Die WHI (2002) randomisierte über 16.000 Frauen im Alter von 50–79 Jahren auf kombinierte HRT (konjugierte equine Östrogene + Medroxyprogesteronacetat, MPA) versus Placebo. Das Ergebnis zeigte ein minimal erhöhtes relatives Risiko für Brustkrebs und kardiovaskuläre Ereignisse. Entscheidend: Das mittlere Alter der Teilnehmerinnen bei Studienbeginn war 63 Jahre – mehr als ein Jahrzehnt nach der Menopause.",
          "Die **„Window of Opportunity“**-Hypothese (auch „Timing-Hypothese“) besagt, dass HRT in den ersten zehn Jahren nach der Menopause oder vor dem 60. Lebensjahr nicht nur symptomatisch wirksam, sondern auch kardioprotektiv und neuroprotektiv sein kann. Die DGGG (Deutsche Gesellschaft für Gynäkologie und Geburtshilfe) hat diese Hypothese in ihrer Leitlinie 2020 explizit aufgenommen und empfiehlt: Bei Frauen unter 60 Jahren oder innerhalb der ersten zehn Postmenopausejahre überwiegen die Vorteile der HRT die Risiken bei symptomatischer Menopause deutlich. Diese Position wird auch von der International Menopause Society (IMS) und der NAMS (North American Menopause Society) geteilt.",
          "Zur Substanzwahl: Bioidentisches 17β-Östradiol (transdermal oder oral) zeigt im Vergleich zu synthetischen equinen Östrogenen ein günstigeres Risikoprofil, insbesondere für thromboembolische Ereignisse. Die Art des Gestagens ist ebenfalls relevant: Mikronikotisches Progesteron (z. B. Utrogest®) hat im Vergleich zu synthetischen Gestagenen wie MPA ein deutlich niedrigeres Brustkrebsrisiko gezeigt (E3N-Kohorte, Fournier et al. 2008). Frauen mit intaktem Uterus benötigen stets eine Gestagenzugabe zum Schutz des Endometriums; hysterektomierte Frauen können Östrogen allein nehmen.",
        ],
        bullets: [
          "HRT ist bei Frauen < 60 Jahre oder < 10 Jahre nach Menopause nach DGGG-Leitlinie 2020 empfohlen",
          "Bioidentisches transdermales Östradiol bevorzugen (niedrigstes Thromboserisiko)",
          "Mikronisiertes Progesteron (statt synthetischer Gestagene) wählen – günstigeres Brustkrebsprofil",
          "Keine Altersobergrenze für die Weiterführung bei andauerndem klinischen Nutzen und Verträglichkeit",
          "Regelmäßige Reevaluation (mind. jährlich) empfohlen",
        ],
      },
      {
        heading: "Phytotherapie: Was die Evidenz wirklich sagt",
        paragraphs: [
          "Viele Frauen wünschen sich pflanzliche Alternativen zur HRT. Die wissenschaftliche Evidenz ist heterogen, aber für einige Substanzen gut. **Traubensilberkerze (Cimicifuga racemosa, Black Cohosh)** hat in randomisierten kontrollierten Studien und Metaanalysen eine signifikante Reduktion vasomotorischer Symptome gezeigt. Die klinische Leitlinie der DGGG und AWMF stuft standardisierte Cimicifuga-Extrakte (z. B. Ze 450, iCR) mit Evidenzlevel A für die Behandlung leichter bis mittelschwerer Hitzewallungen ein. Wirkungsmechanismus: vermutlich serotonerge und dopaminerge Modulation im Hypothalamus, nicht estrogen. Kontraindikation bei bekannten Lebererkrankungen (seltene Hepatotoxizität in Fallberichten); regelmäßige Leberwertkontrollen bei Langzeitanwendung empfohlen.",
          "**Isoflavone** (Soja, Rotklee) wirken als selektive Östrogen-Rezeptor-Modulatoren (SERM) und können VMS moderat reduzieren – die Effektstärke ist jedoch deutlich geringer als bei HRT und variiert stark je nach individuellem Equol-Produzenten-Status (etwa 30–50 % der Frauen besitzen die Darmflora, um Isoflavone in das aktive Equol umzuwandeln). Bedenken bezüglich östrogenrezeptor-positiver Mammakarzinome bestehen bei pharmakologischen Dosen; nahrungsübliche Mengen gelten als unbedenklich. **Rhapontik-Rhabarber (ERr 731)** hat in einer randomisierten Studie (Hasper et al. 2009) signifikante Wirksamkeit gezeigt und ist als wirksamkeitsdefinierter Extrakt verfügbar.",
          "**Nicht-hormonelle Medikamente**: Für Frauen, bei denen HRT kontraindiziert ist (z. B. hormonrezeptor-positives Mammakarzinom), stehen zunehmend nicht-hormonelle Optionen zur Verfügung. Fezolinetant (Veoza®), ein selektiver NK3-Rezeptor-Antagonist, ist seit 2023 in der EU zugelassen und reduziert Hitzewallungen durch direkten Eingriff in den hypothalamischen KNDy-Neuron-Mechanismus – ohne Östrogeneffekte. Niedrig dosierte SSRIs/SNRIs (z. B. Escitalopram, Venlafaxin) können ebenfalls VMS reduzieren, sind für diese Indikation in Deutschland jedoch off-label.",
        ],
        bullets: [
          "Cimicifuga racemosa: Evidenzlevel A (DGGG) für vasomotorische Symptome; nicht östrogenartig wirksam",
          "Isoflavone (Soja/Rotklee): moderate Evidenz; Wirkung abhängig vom Equol-Status",
          "ERr 731 (Rhapontik-Rhabarber): kontrollierte Studie mit positiven Ergebnissen",
          "Fezolinetant (Veoza®): EU-zugelassen 2023, nicht-hormoneller NK3-Antagonist",
          "Valerian, Dong Quai, Nachtkerzenöl: unzureichende Evidenz für VMS",
        ],
      },
      {
        heading: "Genitourinäres Syndrom der Menopause (GSM)",
        paragraphs: [
          "Das genitourinäre Syndrom der Menopause (GSM) – früher als vaginale Atrophie oder urogenitale Atrophie bezeichnet – umfasst Scheidentrockenheit, Dyspareunie (Schmerzen beim Geschlechtsverkehr), rezidivierende Harnwegsinfekte, Harndrang und Stressinkontinenz. Es betrifft bis zu 50 % der postmenopausalen Frauen, wird aber wegen Scham deutlich seltener angesprochen und behandelt. Im Gegensatz zu VMS, die bei vielen Frauen mit der Zeit nachlassen, nimmt GSM ohne Behandlung tendenziell zu.",
          "Das vaginale Epithel ist hochgradig östrogenabhängig. Mit sinkendem Östradiolspiegel verdünnt sich das Epithel, die Glykogen- und Milchsäureproduktion nehmen ab, der vaginale pH-Wert steigt von < 4,5 auf > 5,0 an, was das Wachstum pathogener Keime begünstigt. Lokale (vaginale) niedrig dosierte Östrogentherapie mit Östriol (Creme, Zäpfchen) oder Östradiol (Ring, Tablette) ist hocheffektiv und wird wegen ihrer minimalen systemischen Resorption auch für Frauen als sicher eingestuft, die systemische HRT nicht wollen oder können – einschließlich vieler Frauen nach Brustkrebs (nach individuellem Risikogespräch). Hyaluronsäure-Gele und nicht-hormonelle Vaginalpflege können bei leichten Symptomen die Feuchtigkeit verbessern.",
          "Die DGGG empfiehlt, GSM aktiv anzusprechen und zu behandeln, da es erheblichen Einfluss auf sexuelle Gesundheit, Lebensqualität und Harnwegsgesundheit hat. Ospemifen (oral, SERM) ist eine weitere Option für Frauen, die keine Vaginalapplikation wünschen.",
        ],
      },
      {
        heading: "Metabolische Veränderungen und Langzeitgesundheit",
        paragraphs: [
          "Die Postmenopause ist mit einer Reihe metabolischer Veränderungen assoziiert, die das langfristige Krankheitsrisiko beeinflussen. Der Rückgang von Östradiol erhöht das LDL-Cholesterin, senkt das HDL und steigert die Insulinresistenz. In Kombination mit der alterstypischen Abnahme der Muskelmasse führt dies zu einer Verschiebung der Körperzusammensetzung zugunsten von viszeralem Fett. Studien zeigen eine Zunahme des Bauchumfangs von durchschnittlich 5–8 cm in den ersten fünf Jahren nach der Menopause – auch bei Frauen, deren Gesamtgewicht stabil bleibt.",
          "**Knochengesundheit**: Östrogen hemmt die Osteoklasten-Aktivität. Nach der Menopause beschleunigt sich der Knochenumsatz erheblich; in den ersten fünf Jahren postmenopausal verlieren Frauen jährlich 1–3 % ihrer Knochenmasse. In Deutschland wird die Basisdiagnostik (DXA-Messung) von der DVO-Leitlinie bei erhöhtem Risikoprofil ab dem 50. Lebensjahr empfohlen. HRT hat einen gut belegten knochenprotektiven Effekt; bei etablierter Osteoporose sind Bisphosphonate oder andere spezifische Antiosteoporotika die First-Line-Therapie.",
          "**Kardiovaskuläre Gesundheit**: Die Rate kardiovaskulärer Ereignisse bei Frauen steigt nach der Menopause deutlich an und nähert sich der von Männern an. Bewegung, mediterrane Ernährung, Rauchverzicht und – falls indiziert – HRT innerhalb des „Fensters“ sind die evidenzbasierten Strategien zur Risikoreduktion. Krafttraining erhält die Muskelmasse und verbessert die Insulinsensitivität; Ausdauertraining verbessert das Lipidprofil und die kardiovaskuläre Fitness.",
        ],
      },
    ],

    faqs: [
      {
        question: "Ab welchem Alter beginnen die Wechseljahre, und woran erkenne ich sie?",
        answer:
          "Die Perimenopause beginnt bei den meisten Frauen zwischen 45 und 50 Jahren, kann aber auch schon mit 40 einsetzen (dann spricht man von einer frühen Perimenopause). Das erste Zeichen sind oft unregelmäßige Zyklen: Zyklen werden länger oder kürzer, die Blutungsstärke verändert sich. Parallel können erste Hitzewallungen, Schlafstörungen oder Stimmungsschwankungen auftreten. Ein erhöhter FSH-Wert (> 25 mIU/ml) zusammen mit klinischen Symptomen stützt die Diagnose, ist aber allein nicht beweisend – da die Hormonspiegel in der Perimenopause stark schwanken.",
      },
      {
        question: "Ist Hormontherapie nach dem WHI-Skandal wirklich sicher?",
        answer:
          "Ja – für die meisten Frauen unter 60 Jahren mit Wechseljahrs-Symptomen überwiegen die Vorteile der HRT die Risiken. Die WHI-Studie hat bei älteren Frauen (mittleres Alter 63 Jahre) mit synthetischen Hormonen ein leicht erhöhtes Brustkrebsrisiko gezeigt. Für jüngere Frauen, die HRT in den ersten zehn Jahren nach der Menopause beginnen, ist dieses Risiko laut aktueller Evidenz gering bis nicht nachweisbar – insbesondere bei Verwendung von bioidentischem Östradiol und mikronisiertem Progesteron. Die DGGG-Leitlinie 2020 empfiehlt HRT ausdrücklich bei symptomatischer Menopause und fehlenden Kontraindikationen. Das Risiko sollte jedoch individuell besprochen werden.",
      },
      {
        question: "Kann ich Soja oder pflanzliche Mittel statt Hormonen nehmen?",
        answer:
          "Das hängt von der Intensität Ihrer Beschwerden ab. Bei leichten bis moderaten Hitzewallungen ist standardisierter Cimicifuga-Extrakt (Black Cohosh) wissenschaftlich am besten belegt und von der DGGG als Evidenzlevel-A-Empfehlung eingestuft. Isoflavone (Soja, Rotklee) haben moderate Wirkung, sind jedoch von der Abbaueigenschaft der individuellen Darmflora abhängig. Bei schweren Beschwerden – die täglich mehrfach auftreten und den Schlaf dauerhaft stören – ist pflanzliche Therapie oft unzureichend wirksam. In diesem Fall ist das Gespräch mit einer spezialisierten Gynäkologin über HRT sinnvoll.",
      },
      {
        question: "Wie lange muss ich HRT einnehmen?",
        answer:
          "Es gibt keine starre Zeitgrenze. Frühere Empfehlungen, HRT nach fünf Jahren abzusetzen, gelten als veraltet. Aktuelle Leitlinien (DGGG, IMS) empfehlen eine individuelle Nutzen-Risiko-Bewertung mindestens einmal jährlich. Viele Frauen nehmen HRT fünf bis zehn Jahre, manche länger – insbesondere bei Osteoporoserisiko oder persistierendem GSM. Beim Absetzen sollte die Dosis schrittweise reduziert werden, um Rebound-Symptome zu minimieren.",
      },
      {
        question: "Was ist das genitourinäre Syndrom der Menopause, und was kann ich dagegen tun?",
        answer:
          "GSM umfasst Scheidentrockenheit, Schmerzen beim Sex, häufigen Harndrang und Harnwegsinfekte. Es entsteht durch den Östrogenmangel im Urogenitalgewebe und tritt bei fast jeder zweiten postmenopausalen Frau auf. Lokale Östriolcreme (rezeptpflichtig) oder Östradiol-Vaginalzäpfchen sind hocheffektiv und werden aufgrund ihrer minimalen systemischen Resorption als sehr sicher eingestuft. Nicht-hormonelle Alternativen sind Hyaluronsäure-Gele und spezielle Vaginalpflegeprodukte. GSM verbessert sich nicht von selbst – sprechen Sie Ihren Gynäkologen aktiv darauf an.",
      },
    ],

    sources: [
      {
        authors: "Harlow SD, Gass M, Hall JE et al. (STRAW+10 Collaborative Group)",
        year: 2012,
        title: "Executive Summary of the Stages of Reproductive Aging Workshop +10",
        journal: "Climacteric, 15(2), 105–114",
      },
      {
        authors: "Freeman EW, Sammel MD, Sanders RJ",
        year: 2014,
        title: "Risk of long-term hot flashes after natural menopause: evidence from the Penn Ovarian Aging Study cohort",
        journal: "Menopause, 21(9), 924–932",
      },
      {
        authors: "Rossouw JE, Anderson GL, Prentice RL et al. (WHI Investigators)",
        year: 2002,
        title: "Risks and Benefits of Estrogen Plus Progestin in Healthy Postmenopausal Women",
        journal: "JAMA, 288(3), 321–333",
        note: "Die WHI-Studie, deren Fehlinterpretation die HRT-Verschreibung jahrzehntelang beeinträchtigte",
      },
      {
        authors: "Fournier A, Berrino F, Clavel-Chapelon F",
        year: 2008,
        title: "Unequal risks for breast cancer associated with different hormone replacement therapies: results from the E3N cohort study",
        journal: "Breast Cancer Research and Treatment, 107(1), 103–111",
      },
      {
        authors: "DGGG (Deutsche Gesellschaft für Gynäkologie und Geburtshilfe)",
        year: 2020,
        title: "S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen",
        journal: "AWMF Registernummer 015-062",
      },
      {
        authors: "Ismail OG, Gurel SM, Johnson NP",
        year: 2023,
        title: "Fezolinetant for vasomotor symptoms associated with menopause (SKYLIGHT 1): a phase 3, randomised, placebo-controlled study",
        journal: "The Lancet, 401(10388), 1618–1630",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HASHIMOTO
  // ─────────────────────────────────────────────────────────────────────────────
  hashimoto: {
    intro:
      "Hashimoto-Thyreoiditis ist die häufigste Autoimmunerkrankung in Deutschland und die häufigste Ursache einer Schilddrüsenunterfunktion. Trotzdem werden viele Betroffene jahrelang nicht korrekt diagnostiziert – oder erhalten zwar eine Diagnose, aber keine ausreichende Behandlung ihrer Symptome. Dieser Artikel erklärt den Erkrankungsmechanismus, was die aktuelle Forschung zu Selen, Ernährung und optimaler TSH-Einstellung zeigt, und wann eine Behandlung wirklich sinnvoll ist.",

    stats: [
      {
        value: "~10 %",
        label: "der Frauen in Deutschland sind von Hashimoto-Thyreoiditis betroffen – Männer erkranken 7- bis 10-mal seltener",
        source: "Jacobson DL et al., Clinical Immunology and Immunopathology 1997; Sichler et al., Dtsch Arztebl 2020",
      },
      {
        value: "5–10 Jahre",
        label: "dauert es im Durchschnitt von den ersten Symptomen bis zur Diagnose",
        source: "Autoimmune Register Deutschland; Patientenorganisation Schilddrüse e.V.",
      },
      {
        value: "bis zu 80 %",
        label: "der TPO-Antikörper-positiven Frauen entwickeln über zehn Jahre eine manifeste Hypothyreose",
        source: "Vanderpump MP et al., Clinical Endocrinology 1995 (Whickham Survey Follow-up)",
      },
      {
        value: "2–4× höher",
        label: "ist das Fehlgeburtsrisiko bei Frauen mit erhöhten TPO-Antikörpern in der Frühschwangerschaft",
        source: "Negro R et al., Journal of Clinical Endocrinology & Metabolism 2006",
      },
    ],

    sections: [
      {
        heading: "Was ist Hashimoto-Thyreoiditis? Der Autoimmunmechanismus",
        paragraphs: [
          "Hashimoto-Thyreoiditis (chronische lymphozytäre Thyreoiditis) ist eine Autoimmunerkrankung, bei der das Immunsystem körpereigenes Schilddrüsengewebe als fremd erkennt und chronisch angreift. Der Mechanismus ist komplex: Eine gestörte immunologische Toleranz führt dazu, dass T-Helferzellen (insbesondere Th1-Zellen) und zytotoxische T-Zellen Schilddrüsenzellen direkt schädigen. Parallel produzieren B-Zellen Autoantikörper gegen die **Thyreoperoxidase (TPO-Antikörper, TPO-Ak)** und gegen **Thyreoglobulin (TG-Ak)**. TPO ist das Schlüsselenzym der Schilddrüsenhormon-Synthese; Antikörper gegen TPO hemmen die Funktion direkt und markieren Zellen für den Angriff durch das Komplementsystem.",
          "Charakteristisch ist ein **Th1/Th2-Ungleichgewicht**: Bei Hashimoto überwiegt die Th1-vermittelte zelluläre Immunantwort, was zur chronischen Entzündung und zur Lymphozyten-Infiltration des Schilddrüsengewebes führt. Das Entzündungsinfiltrat zerstört schrittweise Follikel und funktionstüchtige Thyrozyten. Dieser Prozess kann sich über Jahre bis Jahrzehnte hinziehen. Zunächst kann der Körper den Funktionsverlust kompensieren (subklinische Hypothyreose: TSH erhöht, fT4 normal); erst wenn die Kompensationskapazität erschöpft ist, entsteht eine manifeste Hypothyreose.",
          "Warum erkranken Frauen so viel häufiger? Östrogen moduliert die Immunantwort in Richtung erhöhter Autoimmunbereitschaft (Th2-Aktivierung, stärkere B-Zell-Antwort, höhere Antikörperproduktion). Genetische Prädisposition (HLA-DR3, HLA-DR5, CTLA-4-Polymorphismen) und Umweltfaktoren (Jodüberschuss, Selen- oder Vitamin-D-Mangel, Rauchen, Stress) spielen ebenfalls eine wichtige Rolle.",
        ],
        bullets: [
          "TPO-Antikörper (TPO-Ak): Marker für aktive Autoimmunaktivität; findet sich bei > 95 % der Hashimoto-Patienten",
          "TG-Antikörper (TG-Ak): häufig begleitend erhöht; wird auch bei gesunden Menschen gefunden",
          "Sonographie: echoarmes, inhomogenes Schilddrüsengewebe ist typisch für Hashimoto",
          "TSH allein ist nicht ausreichend – fT3, fT4 und Antikörper müssen mitbestimmt werden",
        ],
      },
      {
        heading: "Diagnose: Klinische Scores, Laborwerte und Sonographie",
        paragraphs: [
          "Die Diagnose Hashimoto basiert auf drei Säulen: Klinik, Labordiagnostik und Sonographie. Klinisch ist die Unterscheidung zwischen der hypothyreoten Form (Müdigkeit, Gewichtszunahme, Frieren, Verstopfung, Haarausfall, verlangsamte Reflexe) und der initial hyperthyreoten Phase (Hashitoxikose: Nervosität, Herzrasen, Gewichtsverlust) wichtig. Der **Billewicz-Score** und der **Zulewski-Score** sind validierte klinische Scoring-Systeme, die Symptome und Befunde in Punkte umrechnen und eine Wahrscheinlichkeitseinschätzung für Hypothyreose liefern – nützlich, wenn Laborwerte im Grenzbereich liegen.",
          "**Labordiagnostik**: TSH ist der sensitivste Marker für die Schilddrüsenfunktion. Bei Hashimoto sollte immer ein erweitertes Profil bestimmt werden: TSH, freies T4 (fT4), freies T3 (fT3) und TPO-Antikörper. Thyreosinulin-Antikörper (TG-Ak) können zusätzlich informativ sein. Ein erhöhter TSH mit niedrigem fT4 beweist die manifeste Hypothyreose. Ein erhöhter TSH mit normalem fT4 ist die **subklinische Hypothyreose** – die Grenze, ab der behandelt werden sollte, ist wissenschaftlich umstritten (TSH > 4,0 vs. TSH > 2,5 je nach Kontext, Alter und Symptomstärke).",
          "**Sonographie**: Der Ultraschall der Schilddrüse zeigt bei Hashimoto typischerweise ein echoarmes, inhomogenes Parenchym mit unregelmäßiger Echostruktur und fibrotischen Anteilen. Das Organ kann initial vergrößert (Struma) oder normal groß sein; im späten Stadium findet sich oft eine Schrumpfung (Atrophie). Die Sonographie ist kein Routinecontrol-Instrument, aber bei der Erstdiagnostik und bei unklaren Tastbefunden essenziell – und sie ersetzt nicht die Labordiagnostik.",
        ],
      },
      {
        heading: "Optimale TSH-Einstellung: Labor-Normal ist nicht dasselbe wie funktional optimal",
        paragraphs: [
          "Dieser Punkt ist einer der wichtigsten und gleichzeitig einer der am meisten missverstandenen Aspekte der Hashimoto-Behandlung. Der Laborreferenzbereich für TSH beträgt in Deutschland üblicherweise **0,4–4,0 mIU/L** (Abweichungen je nach Labor). Dieser Bereich wurde an einer Bevölkerungsstichprobe ermittelt und schließt Personen mit subklinischer Hypothyreose und sogar manifester Hashimoto-Erkrankung ein. Er ist ein statistischer, kein klinischer Normwert.",
          "Viele Endokrinologen und Schilddrüsenspezialisten empfehlen für Hashimoto-Patientinnen unter Behandlung einen **funktional optimalen TSH-Zielbereich von 1,0–2,5 mIU/L** – einem Bereich, in dem die meisten Menschen subjektiv beschwerdefrei sind und fT3 und fT4 im oberen Normbereich liegen. Bei Patientinnen mit persistierenden Symptomen trotz TSH im „Normalbereich“ sollte immer auch das **freie T3 (fT3)** gemessen werden: Manche Hashimoto-Patientinnen konvertieren T4 schlecht zu T3 (verminderte 5'-Deiodinase-Aktivität), sodass trotz ausreichendem fT4 ein funktioneller T3-Mangel besteht.",
          "**Schwangerschaft**: In der Schwangerschaft gelten deutlich engere TSH-Zielwerte – im ersten Trimester sollte TSH < 2,5 mIU/L liegen. Frauen mit bekannter Hashimoto-Erkrankung sollten die Schilddrüsenfunktion idealerweise vor einer geplanten Schwangerschaft optimieren lassen und bei Schwangerschaftseintritt sofort einen spezialisierten Endokrinologen aufsuchen.",
        ],
        bullets: [
          "TSH-Labornorm 0,4–4,0 mIU/L schließt viele Hashimoto-Patientinnen ein – kein klinisches Qualitätskriterium",
          "Funktional empfohlener Zielbereich unter L-Thyroxin: TSH 1,0–2,5 mIU/L",
          "Immer auch fT3 und fT4 messen – nicht nur TSH",
          "Bei Schwangerschaft: TSH < 2,5 mIU/L im 1. Trimenon als Ziel",
          "Symptomkontrolle ist ebenso wichtig wie der Laborwert",
        ],
      },
      {
        heading: "Selen bei Hashimoto: Was die Studien zeigen",
        paragraphs: [
          "Selen ist ein essentielles Spurenelement, das für die Funktion der Schilddrüse und des Immunsystems zentral ist. Die Schilddrüse hat unter allen Organen die höchste Selenkonzentration pro Gramm Gewebe. Selenoproteine (insbesondere Glutathionperoxidasen und Thioredoxinreduktase) schützen die Schilddrüse vor oxidativem Stress – einem Mechanismus, der bei Hashimoto besonders relevant ist, da die chronische Entzündung freie Radikale produziert.",
          "Klinische Evidenz: Die **Metaanalyse von Toulis et al. (2010, Thyroid)** analysierte vier randomisierte kontrollierte Studien und zeigte, dass eine tägliche Supplementierung mit 200 µg Natriumselenit die TPO-Antikörper-Titer signifikant senkt (um durchschnittlich 20–40 %). Die Metaanalyse von **Fan et al. (2014, BMC Endocrine Disorders)** bestätigte diesen Effekt und zeigte zudem eine Verbesserung des Schilddrüsen-Ultraschallbefunds. Die klinische Relevanz dieser Antikörperreduktion – also ob sich dadurch auch die Progression der Erkrankung und die subjektiven Symptome verbessern – ist weiterhin Gegenstand der Forschung.",
          "Die Deutsche Gesellschaft für Endokrinologie (DGE) empfiehlt eine Selensubstitution von 200 µg/Tag für drei bis sechs Monate bei Hashimoto-Patientinnen mit erhöhten TPO-Antikörpern und nachgewiesenem Selenmangel (Serum-Selen < 120 µg/L). Eine Überdosierung ist zu vermeiden (Toxizitätsgrenze liegt bei dauerhafter Einnahme > 400 µg/Tag). Selenmethionin (organisch gebunden, in Nahrungsergänzungsmitteln) hat eine bessere Bioverfügbarkeit als anorganisches Natriumselenit, letzteres war in den meisten Studien verwendet.",
        ],
        bullets: [
          "Selen 200 µg/Tag senkt TPO-Ak signifikant (Toulis et al. 2010, Fan et al. 2014)",
          "Serumselenspiegel vor Supplementierung bestimmen (Zielwert: 120–150 µg/L)",
          "Maximale Tagesdosis: 200–300 µg; > 400 µg/Tag toxisch",
          "Organisch gebundenes Selenmethionin hat bessere Bioverfügbarkeit",
          "Kein Ersatz für L-Thyroxin – ergänzende Maßnahme",
        ],
      },
      {
        heading: "Ernährung, Gluten und Hashimoto: Was stimmt und was ist Mythos",
        paragraphs: [
          "Kaum ein Thema ist bei Hashimoto mit mehr Halbwissen und Fehlinformationen besetzt als die Ernährung. Die meistdiskutierte Frage: Sollten Hashimoto-Patientinnen auf Gluten verzichten? Die wissenschaftliche Grundlage dieser Empfehlung ist die Hypothese der **molekularen Mimikry**: Gliadin, ein Bestandteil des Glutenproteins, soll strukturell Ähnlichkeit mit Thyreoperoxidase aufweisen. Das Immunsystem könnte bei Kreuzreaktivität zwischen Gliadinpeptiden und TPO-Epitopen ausgelöste Antikörper auch gegen die Schilddrüse richten.",
          "Diese Hypothese ist mechanistisch plausibel, aber klinisch unbewiesen. Eine zöliakieunabhängige Glutensensitivität bei Hashimoto ist in Einzelfällen beschrieben; systematische Studien zur glutenfreien Ernährung als Hashimoto-Therapie zeigen widersprüchliche Ergebnisse. Gesichert ist die Assoziation zwischen Hashimoto und **Zöliakie** (beide sind Autoimmunerkrankungen, die häufig komorbid auftreten – Prävalenz der Zöliakie bei Hashimoto-Patientinnen ca. 3–5× höher als in der Allgemeinbevölkerung). Bei Verdacht auf Zöliakie (gastrointestinale Symptome, Malabsorptionszeichen, Anämie) sollte eine serologische Testung (Anti-tTG-IgA, Gesamt-IgA) erfolgen.",
          "Für alle anderen Ernährungsaspekte gilt: Eine **entzündungshemmende Ernährung** (mediterran, reich an Omega-3-Fettsäuren, Antioxidantien, Zink, Selen, Jod in physiologischen Mengen) ist sinnvoll. **Jodsupplementierung** in pharmakologischen Dosen sollte vermieden werden – hohe Jodbelastung kann die Autoimmunaktivität bei Hashimoto verschlechtern. Täglicher Jodbedarf (150–200 µg für Erwachsene) sollte über Nahrung gedeckt werden; Kelp-Supplemente oder hochdosierte Jodpräparate sind kontraindiziert.",
        ],
      },
      {
        heading: "Hashimoto und Schwangerschaft",
        paragraphs: [
          "Hashimoto ist die häufigste Schilddrüsenerkrankung in der Schwangerschaft und kann – unbehandelt – zu ernsthaften Komplikationen führen. Erhöhte TPO-Antikörper, auch bei noch normalem TSH, sind mit einem signifikant erhöhten Risiko für **Fehlgeburten im ersten Trimester** assoziiert. Die prospektive Studie von Negro et al. (2006, JCEM) zeigte, dass Frauen mit TPO-Ak und TSH im Normbereich, die L-Thyroxin erhielten, eine deutlich niedrigere Fehlgeburtsrate hatten als unbehandelte Kontrollpersonen (3,5 % vs. 13,8 %).",
          "Schilddrüsenhormone sind in den ersten 12 Wochen der Schwangerschaft essentiell für die fetale Gehirnentwicklung, da der Fötus in diesem Zeitraum noch keine eigene Schilddrüse hat. Selbst eine milde mütterliche Hypothyreose kann die neurologische Entwicklung des Kindes beeinträchtigen. Die Endokrine Gesellschaft empfiehlt daher: Bei allen schwangeren Frauen mit bekannter Hashimoto-Erkrankung, erhöhten TPO-Ak oder TSH > 2,5 mIU/L im ersten Trimester sollte eine Substitutionsbehandlung oder deren Intensivierung erwogen werden.",
          "Nach der Geburt ist das Risiko für eine **postpartale Thyreoiditis** bei Frauen mit vorbestehenden TPO-Ak erhöht – diese kann sich als hyperthyreote Phase (3–6 Monate postpartal) manifestieren, gefolgt von einer hypothyreoten Phase. Die meisten Frauen erholen sich, aber etwa 20–30 % entwickeln eine dauerhafte Hypothyreose.",
        ],
      },
    ],

    faqs: [
      {
        question: "Welche Laborwerte sollte ich bei Hashimoto regelmäßig kontrollieren lassen?",
        answer:
          "Das Minimum-Profil bei Hashimoto umfasst: TSH, freies T4 (fT4), freies T3 (fT3) und TPO-Antikörper. Bei stabiler Einstellung auf L-Thyroxin empfiehlt sich eine Kontrolle alle 6–12 Monate. Bei Dosisänderungen, Symptomveränderungen oder Schwangerschaft häufiger. Selen-Serumwerte sind vor und nach Supplementierung sinnvoll. Vitamin D und Ferritin sollten einmalig bestimmt werden, da Mangelzustände die Schilddrüsenfunktion beeinflussen können.",
      },
      {
        question: "Warum fühle ich mich trotz normalem TSH-Wert noch schlecht?",
        answer:
          "Das ist eine häufige und berechtigte Frustration. Mögliche Gründe: (1) Ihr TSH ist zwar im Laborbereich (z. B. 3,8 mIU/L), liegt aber außerhalb Ihres individuellen Wohlfühlbereichs. Viele Patientinnen fühlen sich bei TSH 1,0–2,0 mIU/L besser. (2) Trotz ausreichendem T4 wandeln Sie T4 schlecht in das aktive T3 um – eine verminderte Deiodinase-Aktivität. Lösung: fT3 messen lassen. (3) Begleitende Mangelzustände (Selen, Ferritin, Vitamin D, Vitamin B12) ungeklärt. (4) Adrenale oder andere hormonelle Dysbalancen. Sprechen Sie diese Punkte konkret mit Ihrer Endokrinologin an.",
      },
      {
        question: "Muss ich bei Hashimoto glutenfrei essen?",
        answer:
          "Nur wenn Sie gleichzeitig an Zöliakie oder nachgewiesener Glutensensitivität leiden. Die Hypothese, dass Gluten direkt Hashimoto auslöst oder verschlimmert, ist wissenschaftlich nicht belegt. Lassen Sie einen Zöliakie-Test machen (Anti-tTG-IgA, Gesamt-IgA) – die Komorbidität ist häufig. Falls der Test negativ ist und Sie keine gastrointestinalen Beschwerden haben, ist eine glutenfreie Ernährung nicht notwendig. Sinnvoller ist generell eine entzündungshemmende Ernährung mit viel Gemüse, Omega-3, ausreichend Selen und ohne jodreiche Supplemente.",
      },
      {
        question: "Kann Hashimoto heilen?",
        answer:
          "Hashimoto ist eine chronische Autoimmunerkrankung – eine vollständige Heilung im Sinne einer Elimination der Autoimmunaktivität ist mit aktuellen Mitteln nicht möglich. Was erreicht werden kann: Remission (Antikörper werden niedrig oder nicht mehr messbar), Stabilisierung der Schilddrüsenfunktion unter Substitutionstherapie und deutliche Symptomfreiheit. Manche Patientinnen – besonders junge Frauen nach Elimination von Auslösern wie chronischem Stress, Jodüberschuss oder Selenmangel – erleben eine spontane Reduktion der Antikörper. Das Ziel der Behandlung ist eine maximale Lebensqualität, nicht die Normalisierung von Laborwerten allein.",
      },
      {
        question: "Ab welchem TSH-Wert sollte L-Thyroxin begonnen werden?",
        answer:
          "Es gibt keine universelle Antwort. Die deutsche Leitlinie empfiehlt den Beginn bei TSH > 10 mIU/L in jedem Fall. Bei TSH 4,0–10 mIU/L (subklinische Hypothyreose) hängt die Entscheidung von Symptomen, Alter, TPO-Ak-Titer und reproduktiven Plänen ab. Bei Kinderwunsch oder Schwangerschaft sollte bereits bei TSH > 2,5 mIU/L (mit TPO-Ak) eine Behandlung erwogen werden. Bei beschwerdefreien postmenopausalen Frauen mit TSH 4–6 mIU/L ist abwartendes Monitoring mit regelmäßigen Kontrollen eine vertretbare Alternative – aber nur wenn Symptome wirklich fehlen.",
      },
    ],

    sources: [
      {
        authors: "Toulis KA, Anastasilakis AD, Tzellos TG, Goulis DG, Kouvelas D",
        year: 2010,
        title: "Selenium supplementation in the treatment of Hashimoto's thyroiditis: a systematic review and a meta-analysis",
        journal: "Thyroid, 20(10), 1163–1173",
      },
      {
        authors: "Fan Y, Xu S, Zhang H et al.",
        year: 2014,
        title: "Selenium supplementation for autoimmune thyroiditis: a systematic review and meta-analysis",
        journal: "International Journal of Endocrinology, 2014, 904573",
      },
      {
        authors: "Negro R, Formoso G, Mangieri T, Pezzarossa A, Dazzi D, Hassan H",
        year: 2006,
        title: "Levothyroxine treatment in euthyroid pregnant women with autoimmune thyroid disease: effects on obstetrical complications",
        journal: "Journal of Clinical Endocrinology & Metabolism, 91(7), 2587–2591",
      },
      {
        authors: "Vanderpump MP, Tunbridge WM, French JM et al.",
        year: 1995,
        title: "The incidence of thyroid disorders in the community: a twenty-year follow-up of the Whickham Survey",
        journal: "Clinical Endocrinology (Oxf), 43(1), 55–68",
      },
      {
        authors: "Stathatos N, Daniels GH",
        year: 2012,
        title: "Autoimmune thyroid disease",
        journal: "Current Opinion in Rheumatology, 24(1), 70–75",
      },
      {
        authors: "Gärtner R, Gasnier BC, Dietrich JW, Krebs B, Angstwurm MW",
        year: 2002,
        title: "Selenium supplementation in patients with autoimmune thyroiditis decreases thyroid peroxidase antibodies concentrations",
        journal: "Journal of Clinical Endocrinology & Metabolism, 87(4), 1687–1691",
        note: "Erste randomisierte kontrollierte Studie zu Selen und Hashimoto",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SCHILDDRÜSE
  // ─────────────────────────────────────────────────────────────────────────────
  schilddruese: {
    intro:
      "Die Schilddrüse ist eine kleine Hormondrüse, deren Einfluss auf den Körper kaum zu überschätzen ist. Ihre Hormone T3 und T4 regulieren Grundumsatz, Herzfrequenz, Wärmeregulation, Verdauung, Stimmung, Kognition und Fortpflanzung. In Deutschland leiden Millionen Menschen – mehrheitlich Frauen – an einer Schilddrüsenerkrankung. Dieser Artikel erklärt die Physiologie, die wichtigsten Erkrankungen und warum der TSH-Wert allein oft nicht ausreicht.",

    stats: [
      {
        value: "über 30 Millionen",
        label: "Menschen in Deutschland leiden an einer Schilddrüsenerkrankung – Frauen 5- bis 10-mal häufiger als Männer",
        source: "Deutsche Gesellschaft für Endokrinologie (DGE), Patientenbericht 2022",
      },
      {
        value: "~30 %",
        label: "der deutschen Bevölkerung haben eine Schilddrüsenvergrößerung (Struma) – historisch bedingt durch Jodmangel",
        source: "Meng W, Schindler A, Trübsbach A et al., Exp Clin Endocrinol Diabetes 1998",
      },
      {
        value: "1 von 10",
        label: "Frauen über 50 Jahre hat eine behandlungsbedürftige Schilddrüsenfunktionsstörung",
        source: "Tunbridge WM et al. (Whickham Survey); Aktuelle Hochrechnung für Deutschland",
      },
      {
        value: "bis zu 50 %",
        label: "der Patienten mit bekannter Hypothyreose unter L-Thyroxin-Therapie haben persistierende Beschwerden",
        source: "Watt T et al., European Thyroid Journal 2015",
      },
    ],

    sections: [
      {
        heading: "Die HPT-Achse: Wie die Schilddrüse gesteuert wird",
        paragraphs: [
          "Die Schilddrüse funktioniert nicht autonom, sondern ist in eine hierarchische Regelachse eingebunden: die **hypothalamisch-hypophysär-thyreoidale Achse (HPT-Achse)**. Der Hypothalamus produziert Thyreotropin-Releasing-Hormon (TRH), das die Hypophyse stimuliert, Thyreoidea-stimulierendes Hormon (TSH) auszuschütten. TSH wiederum stimuliert die Schilddrüse zur Produktion und Freisetzung von Thyroxin (T4) und Triiodthyronin (T3). Steigen T4 und T3 im Blut, hemmen sie über eine negative Rückkopplung sowohl den Hypothalamus als auch die Hypophyse – ein klassischer Feedback-Regelkreis.",
          "T4 ist das mengenmäßig vorherrschende Schilddrüsenhormon (ca. 80–90 % der Schilddrüsenproduktion), aber relativ inaktiv. Die biologisch hochwirksame Form ist **T3 (Triiodthyronin)**. Die Umwandlung von T4 zu T3 erfolgt hauptsächlich in peripheren Geweben – Leber, Niere, Skelettmuskel und Gehirn – durch das Enzym **5'-Deiodinase (Typ 1 und 2)**. Diese Umwandlung kann durch zahlreiche Faktoren beeinträchtigt werden: chronische Entzündung, Selenmangel, Stresshormon Cortisol, extreme Kalorienrestriktion und – relevant bei Hashimoto – die Autoimmunschädigung der Schilddrüse selbst.",
          "Die klinische Relevanz: Wenn ein Patient unter L-Thyroxin (synthetisches T4) behandelt wird, ist er auf diese periphere Konversion angewiesen. Funktioniert die Konversion schlecht – was bei einem Teil der Hashimoto-Patientinnen und Menschen mit Schilddrüsenproblemen der Fall ist – kann trotz „normalem“ TSH ein funktioneller T3-Mangel vorliegen. Dies erklärt, warum manche Patientinnen unter L-Thyroxin weiterhin über Müdigkeit, Gehirnnebel und Gewichtsprobleme klagen.",
        ],
        bullets: [
          "TRH (Hypothalamus) → TSH (Hypophyse) → T4/T3 (Schilddrüse): die HPT-Regelachse",
          "T4 ist Speicherform; T3 ist die biologisch aktive Form",
          "5'-Deiodinase wandelt T4 → T3 in Leber, Niere, Muskel und Gehirn um",
          "Umwandlung gestört durch: Selenmangel, Cortisol, Entzündung, Diäten",
          "Messung: TSH allein reicht nicht; fT3 und fT4 notwendig",
        ],
      },
      {
        heading: "Jodmangel in Deutschland: Geschichte und aktueller Stand",
        paragraphs: [
          "Deutschland war bis in die 1990er Jahre eines der klassischen Jodmangelgebiete Europas. Die geologisch bedingte Jodarmut des Bodens – bedingt durch die Eiszeit, die jodreiche Meeressedimente weit von Deutschland entfernte – führte zu einer endemischen Strumabildung. Vor der Jodprophylaxe hatten in manchen Regionen Bayerns oder Sachsens mehr als 50 % der Bevölkerung eine tastbare oder sichtbare Schilddrüsenvergrößerung.",
          "Durch die obligatorische Jodierung von Speisesalz und Tierfutter seit den frühen 1990er Jahren hat sich die Jodversorgung deutlich verbessert. Deutschland gilt heute laut WHO-Kriterien als jodausreichend versorgt. Dennoch: Die Strumahäufigkeit ist noch immer erhöht – Folge der jahrzehntelangen Unterversorgung, die zur Vergrößerung von Schilddrüsen und zur Bildung von Knoten geführt hat. Diese Knoten persistieren auch nach Normalisierung der Jodversorgung.",
          "Aktuell gibt es eine neue Gruppe von Personen mit erhöhtem Jodmangel-Risiko: Frauen in der Schwangerschaft und Stillzeit (Bedarf steigt auf 200–250 µg/Tag), Veganerinnen und Vegetarierinnen (weniger Jodfisch, jodierter Käse, Milch), sowie Menschen, die kein jodiertes Speisesalz verwenden. Die Deutsche Gesellschaft für Ernährung (DGE) empfiehlt für alle Schwangeren eine zusätzliche Jodsubstitution von 100–150 µg/Tag.",
        ],
      },
      {
        heading: "Hypothyreose vs. subklinische Hypothyreose: Wo liegt der Unterschied?",
        paragraphs: [
          "Die Unterscheidung zwischen **manifester Hypothyreose** und **subklinischer Hypothyreose** ist für Diagnose und Therapieentscheidung grundlegend. Bei der manifesten Hypothyreose ist TSH erhöht und fT4 erniedrigt. Klinisch zeigen sich klassische Symptome: Müdigkeit, Kälteintoleranz, Gewichtszunahme, Obstipation, Haarausfall, trockene Haut, verlangsamte Reflexe, Bradykardie, Depressivität. Die Diagnose ist eindeutig, die Indikation zur Behandlung mit L-Thyroxin ebenfalls.",
          "Bei der **subklinischen Hypothyreose** ist TSH erhöht, fT4 jedoch noch im Normbereich. Die Schilddrüse kompensiert ihren Funktionsverlust durch höhere TSH-Stimulation. Symptome können bereits vorhanden sein, sind aber oft mild oder unspezifisch. Die Frage, ab welchem TSH-Wert behandelt werden sollte, ist wissenschaftlich kontrovers: Eine Behandlung ist bei TSH > 10 mIU/L weitgehend Konsens; bei TSH 4–10 mIU/L hängt die Entscheidung von Alter, Symptomstärke, TPO-Ak-Status und reproduktiven Plänen ab. Ältere Patienten (> 70 Jahre) profitieren möglicherweise nicht von einer Behandlung subklinischer Hypothyreose – hier kann ein höherer TSH sogar protektiv sein.",
          "Eine häufig übersehene Differenzialdiagnose ist die **Hashimoto-Thyreoiditis** als Ursache der Hypothyreose – sie macht in Deutschland mehr als 90 % aller Hypothyreosefälle aus. Ohne TPO-Antikörper-Bestimmung bleibt die zugrunde liegende Ursache unbekannt, was die Behandlungsstrategie (insbesondere bzgl. Selen, Ernährung, Schwangerschaftsplanung) beeinflusst.",
        ],
        bullets: [
          "Manifeste Hypothyreose: TSH erhöht + fT4 erniedrigt → Behandlungsindikation gesichert",
          "Subklinische Hypothyreose: TSH erhöht + fT4 normal → Entscheidung individuell",
          "Behandlungsschwelle weitgehend Konsens: TSH > 10 mIU/L",
          "Bei TSH 4–10 mIU/L: Symtomstärke, TPO-Ak, Alter und Kinderwunsch entscheidend",
          "Ursachensuche immer notwendig: TPO-Ak bestimmen",
        ],
      },
      {
        heading: "Schilddrüsenknoten und Struma: Was bedeutet ein Knoten?",
        paragraphs: [
          "Schilddrüsenknoten (Thyreoidea-Noduli) sind extrem häufig: Im Ultraschall finden sich bei 20–30 % der Erwachsenen Knoten, bei > 50-Jährigen sogar noch häufiger. Die große Mehrheit ist benigne und klinisch irrelevant. Knoten können eingeteilt werden in: autonome Knoten (produzieren eigenständig Hormone → Hyperthyreose), Kolloidknoten (hormoninaktiv, meist Jodmangelfolge), Zysten und – selten – Karzinome (< 5 % aller Knoten).",
          "Die Diagnostik folgt einem standardisierten Algorithmus: Sonographie (TIRADS-Klassifikation: Echogenität, Randschärfe, Verkalkungen, Vaskularisierung), Szintigraphie (bei erniedrigtem TSH, um autonome Funktion auszuschließen) und ggf. Feinnadelaspiration (FNA) bei sonographisch suspekten Knoten. Die EU-TIRADS-Klassifikation (European Thyroid Association, 2017) ist das international anerkannte Standardsystem zur Einschätzung des Malignitätsrisikos.",
          "Wichtig: Ein einzelner Knoten muss nicht behandelt werden. Engmaschige Sonographiekontrollen (zunächst 6-monatlich, bei Stabilität jährlich) sind bei benignen Befunden ausreichend. Operative Intervention (Thyreoidektomie) oder Radiojodtherapie sind bei autonomen Knoten mit Hyperthyreose, bei rascher Größenzunahme oder bei Verdacht auf Malignität indiziert. Ethanol-Injektionen oder Laser-/Radiofrequenztherapie sind minimalinvasive Alternativen bei bestimmten Konstellationen.",
        ],
      },
      {
        heading: "Der TSH-Referenzbereich: Die Debatte, die Frauen kennen sollten",
        paragraphs: [
          "Der TSH-Referenzbereich (0,4–4,0 mIU/L) ist ein populationsbasierter Normwert – nicht ein individueller Gesundheitswert. Er wurde aus Messungen an einer Referenzpopulation abgeleitet, aus der Menschen mit bekannter Schilddrüsenerkrankung ausgeschlossen wurden – aber eben nicht Menschen mit subklinischer oder nicht diagnostizierter Erkrankung. Das erklärt, warum viele Experten den oberen Grenzwert als zu hoch einschätzen.",
          "Die Debatte um einen engeren Referenzbereich wurde durch die **National Health and Nutrition Examination Survey (NHANES III)** in den USA verstärkt, deren Autoren (Baloch et al. 2003) vorschlugen, den Referenzbereich auf 0,4–2,5 mIU/L zu verengen. Diese Empfehlung ist nicht universell angenommen; die Mehrheit der deutschen Labore und Fachgesellschaften verwendet weiterhin 0,4–4,0 mIU/L. Wichtig ist: Für symptomatische Patientinnen, die unter Behandlung stehen, ist der Laborbereich ein orientierender, kein absoluter Zielwert.",
          "Faustregel für die klinische Praxis: Ein TSH von 1,0–2,5 mIU/L gilt als funktional optimal für die meisten schilddrüsengesunden Frauen. Unter L-Thyroxin-Therapie sollte die Dosis auf diesen Bereich titriert werden, sofern keine Kontraindikationen (z. B. Herzrhythmusstörungen, Osteoporose, Alter > 70 Jahre) bestehen. Die individuelle Symptomkontrolle hat Vorrang vor dem bloßen Laborwert.",
        ],
      },
      {
        heading: "Morbus Basedow: Schilddrüsenüberfunktion durch Antikörper",
        paragraphs: [
          "Morbus Basedow (Graves' Disease) ist die häufigste Ursache einer Hyperthyreose und ebenfalls eine Autoimmunerkrankung. Im Unterschied zu Hashimoto produziert das Immunsystem hier Antikörper, die den TSH-Rezeptor stimulieren (TRAK – TSH-Rezeptor-Antikörper), anstatt ihn zu zerstören. Dies führt zu einer dauerhaften Überstimulation der Schilddrüse und damit zu einer Überproduktion von T4 und T3.",
          "Klinisch zeigen sich: erhöhte Herzfrequenz und Herzrhythmusstörungen (Vorhofflimmern), Gewichtsverlust trotz gesteigertem Appetit, Nervosität, Schlaflosigkeit, Hitzeintoleranz, Schweißneigung, Zittern und die typische endokrine Orbitopathie (Protrusio bulbi: hervortretende Augen). Die Diagnose erfolgt über TSH (supprimiert), fT3, fT4 (erhöht) und TRAK-Bestimmung.",
          "Therapiemöglichkeiten: Thyreostatika (Thiamazol, Carbimazol) als Erstlinie für 12–18 Monate; Radioiodtherapie bei Rezidiv oder Intoleranz; Thyreoidektomie bei großer Struma, schwerer Orbitopathie oder Therapieversagen. Nach Radioiodtherapie oder Thyreoidektomie ist meist eine lebenslange L-Thyroxin-Substitution notwendig.",
        ],
      },
    ],

    faqs: [
      {
        question: "Warum reicht TSH allein nicht aus – was muss ich noch messen lassen?",
        answer:
          "TSH zeigt, wie stark die Hypophyse die Schilddrüse stimuliert – nicht, wie viel Hormon tatsächlich im Körper wirkt. Ein „normaler“ TSH kann trotzdem mit unzureichendem fT3 oder fT4 einhergehen. Das vollständige Basisprofil bei Schilddrüsenerkrankung sollte umfassen: TSH, freies T4 (fT4), freies T3 (fT3), und bei Verdacht auf Autoimmunerkrankung TPO-Antikörper. Ohne fT3-Messung bleibt unklar, ob T4 ausreichend in das aktive T3 umgewandelt wird – ein häufiges Problem bei Hashimoto-Patientinnen.",
      },
      {
        question: "Was ist der Unterschied zwischen T3 und T4, und welches Hormon ist wichtiger?",
        answer:
          "T4 (Thyroxin) ist das Speicherhormon – mengenmäßig häufiger, aber wenig biologisch aktiv. Es muss im Körper durch das Enzym 5'-Deiodinase in T3 (Triiodthyronin) umgewandelt werden. T3 ist die aktive Form, die Zellstoffwechsel, Herzfrequenz, Körperwärme und Gehirnfunktion reguliert. L-Thyroxin-Tabletten enthalten T4; die Wirksamkeit der Therapie hängt davon ab, wie gut Ihr Körper T4 in T3 umwandelt. Bei schlechter Konversion kann eine Kombinationstherapie T4+T3 (z. B. Liothyronin) individuell besser wirken.",
      },
      {
        question: "Ich habe einen Knoten in der Schilddrüse – soll ich mir Sorgen machen?",
        answer:
          "Die meisten Schilddrüsenknoten (> 95 %) sind gutartig. Entscheidend ist eine qualifizierte sonographische Untersuchung mit Einstufung nach EU-TIRADS. Bei niedrigem TIRADS-Score reichen regelmäßige Ultraschallkontrollen. Eine Feinnadelaspiration ist nur bei TIRADS 4–5 oder rapider Größenzunahme nötig. Lassen Sie außerdem TSH bestimmen – ein erniedrigtes TSH kann auf einen aktiv hormonproduzierenden (autonomen) Knoten hinweisen, der eine andere Therapie benötigt.",
      },
      {
        question: "Kann ich bei Schilddrüsenerkrankung Sport treiben?",
        answer:
          "Ja – Bewegung ist bei den meisten Schilddrüsenerkrankungen nicht nur erlaubt, sondern empfohlen. Bei gut eingestellter Hypothyreose kann Sport normale Intensität erreichen. Wichtig: Bei unkontrollierter Hyperthyreose (Herzrasen, Rhythmusstörungen) sollte intensiver Sport bis zur Therapie reduziert werden. Kraft- und Ausdauertraining verbessern die Insulinsensitivität, was bei Hashimoto oft eine Begleitproblematik ist. Bei extremer Erschöpfung (typisches Hashimoto-Symptom) kann anfänglich leichtes Training (Yoga, Gehen, Schwimmen) besser verträglich sein.",
      },
      {
        question: "Beeinflusst die Pille oder Hormontherapie die Schilddrüsenwerte?",
        answer:
          "Ja, das ist klinisch relevant und wird oft übersehen. Östrogene – sowohl aus oraler Kontrazeption als auch aus HRT – erhöhen das Thyroxin-bindende Globulin (TBG) in der Leber. TBG bindet mehr T4, wodurch weniger freies (wirksames) T4 verfügbar ist. Gleichzeitig stimuliert die Hypophyse mehr TSH, was bei vorbestehender Hypothyreose zu einer scheinbaren Verschlechterung führen kann. Bei Frauen mit Schilddrüsenerkrankung, die mit der Pille beginnen oder eine HRT anpassen, sollten Schilddrüsenwerte nach 6–8 Wochen kontrolliert werden.",
      },
    ],

    sources: [
      {
        authors: "Meng W, Schindler A, Trübsbach A",
        year: 1998,
        title: "Sonographic survey of the thyroid gland in a representative adult sample of two German population groups",
        journal: "Experimental and Clinical Endocrinology & Diabetes, 106(Suppl 3), S1–S7",
      },
      {
        authors: "Baloch Z, Carayon P, Conte-Devolx B et al. (NACB Committee)",
        year: 2003,
        title: "Laboratory medicine practice guidelines: laboratory support for the diagnosis and monitoring of thyroid disease",
        journal: "Thyroid, 13(1), 3–126",
        note: "Kontroverse Empfehlung für engeren TSH-Referenzbereich 0,4–2,5 mIU/L",
      },
      {
        authors: "Russ G, Bonnema SJ, Erdogan MF, Durante C, Ngu R, Leenhardt L",
        year: 2017,
        title: "European Thyroid Association Guidelines for Ultrasound Malignancy Risk Stratification of Thyroid Nodules in Adults: The EU-TIRADS",
        journal: "European Thyroid Journal, 6(5), 225–237",
      },
      {
        authors: "Watt T, Cramon P, Hegedüs L et al.",
        year: 2015,
        title: "The thyroid-related quality of life measure ThyPRO has good responsiveness and ability to detect relevant treatment effects",
        journal: "European Journal of Endocrinology, 172(6), 709–719",
      },
      {
        authors: "Deutsche Gesellschaft für Endokrinologie (DGE) / Deutsche Gesellschaft für Nuklearmedizin (DGN)",
        year: 2016,
        title: "Leitlinie zur Behandlung von Schilddrüsenknoten",
        journal: "AWMF Registernummer 031-056",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HORMONE
  // ─────────────────────────────────────────────────────────────────────────────
  hormone: {
    intro:
      "Hormone sind chemische Botenstoffe, die in kleinsten Mengen weitreichende Wirkungen entfalten. Ein hormonelles Ungleichgewicht entsteht selten durch einen einzelnen Hormon-„Ausfall“, sondern fast immer durch das Zusammenspiel mehrerer Achsen: Sexualhormone, Stresshormone und Schilddrüse sind über komplexe Rückkopplungsmechanismen miteinander vernetzt. Dieser Artikel erklärt die wichtigsten Mechanismen – von der Cortisol-Progesteron-Konkurrenz bis zur Insulinresistenz als Verstärker hormoneller Dysbalancen.",

    stats: [
      {
        value: "bis zu 80 %",
        label: "der Frauen berichten von Symptomen, die auf hormonelle Dysbalancen hinweisen – in jeder Lebensphase",
        source: "Women's Health Initiative; eigene Hochrechnung basierend auf epidemiologischen Daten",
      },
      {
        value: "Perimenopause beginnt oft mit 40–45",
        label: "Jahren mit relativem Progesteronmangel – Jahre bevor Östrogen deutlich abfällt",
        source: "Prior JC, Climacteric 2011; Santoro N, Obstetrics & Gynecology 2016",
      },
      {
        value: "3–5× höher",
        label: "ist das Angst- und Depressionsrisiko in der späten Perimenopause im Vergleich zu prämenopausalen Jahren",
        source: "Cohen LS et al., Archives of General Psychiatry 2006",
      },
      {
        value: "30–50 %",
        label: "der westlichen Frauen zwischen 35 und 55 Jahren haben laborchemische Zeichen einer Insulinresistenz",
        source: "Grundy SM et al., Circulation 2005; Cobin RH, AACE",
      },
    ],

    sections: [
      {
        heading: "Progesteron und Cortisol: Die Pregnenolon-Konkurrenz",
        paragraphs: [
          "Sowohl Cortisol als auch Progesteron werden aus dem gemeinsamen Vorläufer **Pregnenolon** synthetisiert – einem Steroidhormon, das wiederum aus Cholesterin gewonnen wird. Diese biochemische Verwandtschaft hat praktische Konsequenzen: Bei chronischem Stress erhöht die Nebenniere die Cortisol-Produktion erheblich. Da Cortisol und Progesteron um dasselbe Substrat (Pregnenolon) konkurrieren und da Progesteron selbst als direkter Cortisol-Vorläufer dienen kann, entsteht bei dauerhafter Stressbelastung ein **relativer Progesteronmangel** – auch wenn die Eierstöcke noch normal funktionieren.",
          "Dieser Mechanismus – oft als **„Pregnenolon-Steal“** oder **Cortisol-Progesteron-Konkurrenz** bezeichnet – ist biochemisch nachvollziehbar, aber die direkte klinische Beweislage beim Menschen ist begrenzt. Was gut belegt ist: Chronischer Stress und erhöhter Cortisolspiegel sind mit kürzeren Lutealphasen, verminderten Progesteronwerten und menstruellen Unregelmäßigkeiten assoziiert. Die Hypothalamo-Hypophysen-Gonaden-Achse wird durch die HPA-Achse (Hypothalamus-Hypophyse-Nebenniere) gehemmt: Hohe Cortisolspiegel unterdrücken die GnRH-Pulsatilität und damit LH/FSH – was Ovulation und Gelbkörperbildung beeinträchtigt.",
          "Praktisch bedeutet das: Eine Frau mit hohem chronischem Stress, Schlafmangel und erhöhtem Cortisol kann über perimenopausale Symptome klagen – selbst wenn ihre Östrogenspiegel noch normal sind. Die Behandlung fokussiert in diesem Fall nicht primär auf Östrogen, sondern auf Stressreduktion, Schlafoptimierung und adrenale Unterstützung.",
        ],
        bullets: [
          "Pregnenolon → Progesteron → Cortisol: gemeinsamer Biosyntheseweg",
          "Chronischer Stress → erhöhte Cortisolnachfrage → relativer Progesteronmangel",
          "HPA-Achse hemmt die HPG-Achse: Cortisol supprimiert GnRH/LH/FSH",
          "Folge: verkürzte Lutealphase, anovulatorische Zyklen, PMS-Verstärkung",
          "Keine direkte Kausalität bewiesen, aber klinisch und biochemisch konsistent",
        ],
      },
      {
        heading: "Östrogendominanz: Relativ, nicht absolut",
        paragraphs: [
          "Der Begriff „Östrogendominanz“ ist ein klinisches Konzept, das oft missverstanden wird. Er bedeutet nicht zwingend, dass der absolute Östrogenspiegel erhöht ist. Er bedeutet, dass das **Verhältnis von Östrogen zu Progesteron** zugunsten des Östrogens verschoben ist. Dies kann eintreten, wenn Progesteron fällt (häufig) oder wenn Östrogen relativ erhöht ist (seltener, z. B. durch Adipositas, Umweltöstrogene, Leberbelastung).",
          "In der **frühen Perimenopause** ist Östrogendominanz der typische Ausgangszustand: Ovulationen werden seltener und unvollständiger, die Lutealphase verkürzt sich, Progesteronproduktion sinkt – während Östradiol noch im Normbereich oder sogar leicht erhöht sein kann. Symptome dieser Phase sind charakteristisch: Brustspannen, Wassereinlagerungen (prämenstruell), verstärktes PMS, Stimmungsschwankungen, schlechterer Schlaf in der zweiten Zyklushälfte, Zyklusunregelmäßigkeiten mit tendenziell verstärkter Blutung.",
          "**Umweltöstrogene (Xenoöstrogene)** – Substanzen wie Bisphenol A (BPA), Phthalate, Pestizide und manche Konservierungsmittel – können Östrogenrezeptoren aktivieren oder blockieren und das hormonelle Gleichgewicht stören. Die wissenschaftliche Evidenz für klinisch relevante Auswirkungen beim Menschen ist noch im Aufbau; das Vorsichtsprinzip spricht für die Reduktion von Plastikexposition, Verwendung von BPA-freien Produkten und Bio-Lebensmitteln.",
        ],
        bullets: [
          "Östrogendominanz = Progesteron/Östrogen-Verhältnis verschoben, nicht absolut erhöhtes Östrogen",
          "Frühe Perimenopause: Progesteronmangel tritt vor Östrogenmangel auf",
          "Symptome: Brustspannen, Wassereinlagerungen, verstärktes PMS, Reizbarkeit, Schlafstörungen",
          "Adipositas verstärkt Östrogendominanz: Fettgewebe produziert Östron via Aromatase",
          "Leber: Entgiftung von Östrogenmetaboliten; Leberbelastung kann Östrogendominanz verstärken",
        ],
      },
      {
        heading: "Progesteron und das Gehirn: GABA, Schlaf und Angst",
        paragraphs: [
          "Progesteron hat weit über seinen Einfluss auf die Gebärmutterschleimhaut hinaus bedeutende Wirkungen im Zentralnervensystem. Die wichtigste: Progesteron wird in der Leber und im Gehirn zu **Allopregnanolon** metabolisiert – einem Neurosteroiden, das ein starker positiver Modulator des **GABA-A-Rezeptors** ist. GABA ist der wichtigste hemmende Neurotransmitter im Gehirn; seine Aktivierung wirkt anxiolytisch, sedierend und antiepileptisch.",
          "Wenn Progesteron sinkt – in der zweiten Zyklushälfte bei PMS, in der Perimenopause, nach der Geburt (Wochenbettdepression!) – fällt auch der Allopreganolonspiegel. Weniger GABAerge Hemmung bedeutet: erhöhte Erregbarkeit, schlechterer Schlaf (insbesondere des Tiefschlafs), erhöhte Angstsymptome und Stimmungsinstabilität. Dieser Mechanismus erklärt, warum viele Frauen prämenstruell und in der Perimenopause über Angst, Reizbarkeit und Einschlafschwierigkeiten klagen – auch wenn Östrogen noch normal ist.",
          "**Bioidentisches mikronisiertes Progesteron** (z. B. Utrogest® oral) wird in der Leber zu Allopregnanolon verstoffwechselt und hat damit direkte sedierende, anxiolytische und schlaffördernde Wirkung – was es von synthetischen Gestagenen (Medroxyprogesteronacetat, Norethisteron) unterscheidet, die diesen Metabolismus nicht durchlaufen. Klinisch wird oral eingenommenes bioidentisches Progesteron abends vor dem Schlafen dosiert, um die schlaffördernde Wirkung zu nutzen. Dies ist ein klinisch relevanter Unterschied, der bei der Auswahl der Hormontherapie berücksichtigt werden sollte.",
        ],
        bullets: [
          "Progesteron → Allopregnanolon (Neurosteroid) → GABA-A-Rezeptor-Modulation",
          "Niedrige Progesteronphasen = weniger GABA = mehr Angst, Schlafstörungen, Reizbarkeit",
          "Erklärt: PMS, postpartale Depression, perimenopausale Angststörungen",
          "Mikronisiertes Progesteron (oral, abends) nutzt diesen Metabolismusweg – synthetische Gestagene nicht",
          "Topisches Progesteron (Creme) hat deutlich geringere systemische Bioverfügbarkeit",
        ],
      },
      {
        heading: "DHEA und das Altern der Nebennieren",
        paragraphs: [
          "DHEA (Dehydroepiandrosteron) ist das mengenmäßig häufigste Steroidhormon im menschlichen Blut. Die Nebenniere produziert DHEA und seinen Sulfatester DHEA-S als Vorläufer für Sexualhormone in peripheren Geweben, insbesondere für Testosteron und Östrogene in Muskel, Haut, Fettgewebe und Knochen. DHEA-Spiegel erreichen ihren Höhepunkt im Alter von 20–25 Jahren und fallen danach kontinuierlich – mit 70 Jahren liegen sie nur noch bei 10–20 % des Jugendwertes.",
          "Diese physiologische Abnahme des DHEA (Adrenopause) ist mit dem generellen Alterungsprozess assoziiert, verläuft aber individuell sehr unterschiedlich. Niedrige DHEA-S-Werte werden mit verminderter Libido, Energie, Knochendichte und möglicherweise erhöhtem kardiovaskulärem Risiko assoziiert. DHEA-Substitution wird von manchen Spezialisten bei nachgewiesenem Mangel und Symptomen eingesetzt, ist aber – außer in der vaginalen Applikation (Prasterone/Intrarosa® für GSM) – in Deutschland nicht zugelassen. Die Evidenz für systemische DHEA-Supplementierung ist uneinheitlich.",
          "Relevant für den hormonellen Kontext: Da DHEA ein Vorläufer für Östrogen und Testosteron ist, beeinflusst sein Abfall auch die Sexualhormon-Balance. Dies ist besonders nach der Menopause relevant, wenn die Eierstöcke als Hauptöstrogenquelle ausfallen – jetzt werden Nebenniere und peripheres Gewebe (Fett, Haut) zur dominierenden Östrogenquelle, über die Konversion von DHEA.",
        ],
      },
      {
        heading: "Insulin, Insulinresistenz und Hormonspiegel",
        paragraphs: [
          "Insulin ist ein Anabolhormon, das nach Kohlenhydratkonsum von der Bauchspeicheldrüse ausgeschüttet wird. Seine Aufgabe ist die zelluläre Glukoseaufnahme. Bei chronisch hohen Insulinspiegeln – bedingt durch kalorienreiche Ernährung, Bewegungsmangel, Schlafmangel und Stress – entwickeln Zellen eine **Insulinresistenz**: Sie reagieren weniger empfindlich auf Insulin, die Bauchspeicheldrüse muss mehr produzieren, und ein Teufelskreis entsteht.",
          "Insulinresistenz wirkt sich direkt auf den Hormonhaushalt aus: (1) Hohe Insulinspiegel hemmen die Leber-Produktion von **SHBG (Sexualhormon-bindendes Globulin)** – sinkt SHBG, stehen mehr freies Östrogen und Testosteron im Blut zur Verfügung, was sowohl Androgenisierungszeichen (Akne, Hirsutismus) als auch Östrogendominanz-Symptome verstärkt. (2) Insulin stimuliert die ovariellen und adrenalen Androgen-Produktion. (3) Chronische Entzündung (assoziiert mit Insulinresistenz) beeinträchtigt die T4→T3-Konversion und belastet die HPA-Achse. (4) Insulinresistenz und erhöhte Androgene sind die zwei Kernmechanismen des **polyzystischen Ovarialsyndroms (PCOS)** – der häufigsten Hormonstörung bei Frauen im reproduktiven Alter.",
          "**Lebensstil-Interventionen zur Verbesserung der Insulinsensitivität** haben nachweislich auch hormonelle Auswirkungen: Krafttraining erhöht SHBG und senkt Androgene; Intervallfasten und Low-Carb-Ernährung reduzieren Insulinspitzen und SHBG-Abfall; Schlaf ≥ 7 Stunden/Nacht verbessert die Insulinsensitivität messbar; Stressreduktion (Senkung von Cortisol) mindert die adrenale Androgenproduktion.",
        ],
        bullets: [
          "Insulinresistenz → niedriges SHBG → mehr freies Östrogen und Testosteron",
          "Hohe Insulinspiegel stimulieren ovarielle Androgenproduktion",
          "Chronische Entzündung (Folge von Insulinresistenz) stört T4→T3-Konversion",
          "Insulinresistenz + Androgene = Kernmechanismus von PCOS",
          "Krafttraining, Schlaf, Stressreduktion verbessern Insulinsensitivität und Hormonbalance",
        ],
      },
      {
        heading: "Hormondiagnostik: Wann testen, wie testen, was testen",
        paragraphs: [
          "Hormondiagnostik ist nur dann aussagekräftig, wenn Zeitpunkt und Methode stimmen. Für Frauen mit regulärem Zyklus gilt: Östradiol und FSH am **2.–5. Zyklustag** (frühe Follikelphase), Progesteron am **19.–21. Zyklustag** (sieben Tage nach erwartetem Eisprung, mittige Lutealphase). Testosteron morgens (Tagesvariation beachten). Cortisol morgens zwischen 8 und 10 Uhr (Cortisol-Tagesprofil). In der Perimenopause und Postmenopause entfällt die Zyklusgebundenheit; Hormone können jederzeit bestimmt werden.",
          "**Speichel vs. Blut für Cortisol**: Die Cortisolmessung im Speichel (Tagesprofil: morgens, mittags, abends, vor dem Schlafen) ist besonders wertvoll, um das zirkadiane Muster zu beurteilen. Ein abgeflachtes Tagesprofil (niedriges Morgen-Cortisol, relativ erhöhtes Abend-Cortisol) ist ein Marker für HPA-Dysregulation durch chronischen Stress. Blut-Cortisol (morgens) spiegelt eher akute Stressreaktion wider. Die sogenannte „Nebennierenschwäche“ (Adrenal Fatigue) ist kein anerkanntes medizinisches Diagnosekonzept; was beschrieben wird, entspricht am ehesten einer HPA-Achsen-Dysregulation.",
          "**Labormedizinische Hinweise**: Bei der Interpretation von Sexualhormonen im Blut ist zu beachten, dass die meisten Hormone zyklusabhängig schwanken und ein Einzelwert oft wenig aussagekräftig ist. SHBG (Sexualhormon-bindendes Globulin) und der Freie Androgen-Index (FAI) sind hilfreiche Ergänzungen. Ein vollständiges Hormonpanel bei klinischem Verdacht auf Dysbalance umfasst: Östradiol, Progesteron, Testosteron (frei und gesamt), SHBG, DHEA-S, FSH, LH, TSH, fT3, fT4, TPO-Ak, Cortisol-Tagesprofil (Speichel), Insulin nüchtern, IGF-1.",
        ],
        bullets: [
          "Östradiol, FSH: Zyklustag 2–5 (Follikelphase)",
          "Progesteron: Zyklustag 19–21 (mittige Lutealphase, 7 Tage nach Eisprung)",
          "Testosteron: morgens (8–10 Uhr), nüchtern",
          "Cortisol-Tagesprofil: Speichel, 4 Zeitpunkte (morgens/mittags/abends/nachts)",
          "TSH, fT3, fT4 jederzeit bestimmbar – nüchtern bevorzugt",
          "SHBG messen – niedriges SHBG zeigt erhöhte Bioverfügbarkeit der Sexualhormone",
        ],
      },
    ],

    faqs: [
      {
        question: "Was bedeutet Östrogendominanz, und woher weiß ich, ob ich sie habe?",
        answer:
          "Östrogendominanz bedeutet, dass das Verhältnis von Östrogen zu Progesteron zugunsten des Östrogens verschoben ist – nicht zwingend durch erhöhtes Östrogen, sondern oft durch zu niedriges Progesteron. Typische Hinweise: Brustspannen besonders in der zweiten Zyklushälfte, Wassereinlagerungen prämenstruell, starke Menstruationsblutungen, PMS mit Reizbarkeit und Stimmungstiefs, Schlafstörungen in der Lutealphase. Diagnosefähig durch: Progesteronmessung am Zyklustag 19–21 (Zielwert > 10 ng/mL bei ovulatorischen Zyklen) und Östradiolmessung. Komplementär: SHBG-Bestimmung (niedriges SHBG verstärkt relative Östrogenwirkung).",
      },
      {
        question: "Kann chronischer Stress wirklich meine Hormone durcheinanderbringen?",
        answer:
          "Ja – und zwar über mehrere Mechanismen. Cortisol konkurriert mit Progesteron um den gemeinsamen Vorläufer Pregnenolon; die HPA-Achse hemmt die Sexualhormonachse über Suppression von GnRH. Das Ergebnis: bei chronischem Stress sinkt Progesteron, werden Zyklen unregelmäßiger, sinkt die Schilddrüsenkonversion (T4→T3), und steigt der Blutzucker durch kortisolvermittelte Glukoneogenese. Stressmanagement (Schlaf, Ausdauersport, Entspannungsverfahren) ist kein „Wellness-Tipp“, sondern eine direkte hormonelle Intervention.",
      },
      {
        question: "Ab wann beginnt Progesteron abzufallen, und was sind die Zeichen?",
        answer:
          "Progesteron beginnt bereits in den frühen 40ern abzufallen – oft Jahre bevor Östrogen sinkt. Der Grund: Ovulationen werden seltener und unvollständiger; weniger Gelbkörper bedeuten weniger Progesteron. Zeichen des relativen Progesteronmangels: Verkürzung der Lutealphase (Zyklus wird kürzer), verschlechtertes prämenstruelles Syndrom, schlechterer Schlaf in der zweiten Zyklushälfte, erhöhte Reizbarkeit, Angst und Stimmungstiefs. Diese Symptome treten auf, obwohl Östrogen noch normal ist – weshalb sie in der konventionellen Medizin oft nicht als hormonell erkannt werden.",
      },
      {
        question: "Welche Lebensstil-Maßnahmen haben den stärksten Einfluss auf den Hormonhaushalt?",
        answer:
          "Die drei nachweislich wirksamsten Maßnahmen sind: (1) **Schlaf**: 7–9 Stunden Schlaf normalisiert den Cortisolrhythmus, verbessert Insulinsensitivität und stellt die Wachstumshormon-Sekretion sicher. Schlafmangel erhöht Cortisol, Ghrelin und Insulinresistenz innerhalb weniger Tage. (2) **Krafttraining**: Erhöht SHBG, reduziert Androgene, verbessert Insulinsensitivität, schützt die Knochendichte in der Perimenopause. (3) **Stressreduktion**: Regelmäßige Entspannungspraktiken (Yoga, Meditation, Atemübungen) senken Kortisol messbar (Mehrere RCTs) und reduzieren anovulatorische Zyklen.",
      },
      {
        question: "Ist Speichel- oder Bluthormontest besser für die Hormonstatus-Bestimmung?",
        answer:
          "Für die meisten Sexualhormone (Östradiol, Progesteron, Testosteron, FSH, LH, DHEA-S, TSH) ist die **Blutuntersuchung der Goldstandard** – sie ist standardisierter, reproduzierbarer und von allen Laboren etabliert. Für das **Cortisol-Tagesprofil** hat der Speicheltest klinischen Mehrwert, weil mehrere Messungen über den Tag möglich sind – so lässt sich das zirkadiane Muster beurteilen, nicht nur ein Einzelwert. Private Speichelhormon-Tests für Sexualhormone gelten in der Endokrinologie als weniger zuverlässig und werden für die routinemäßige Diagnostik nicht empfohlen.",
      },
    ],

    sources: [
      {
        authors: "Prior JC",
        year: 2011,
        title: "Progesterone for Symptomatic Perimenopause Treatment – Progesterone politics, physiology and potential for perimenopause",
        journal: "Facts, Views & Vision in ObGyn, 3(2), 109–120",
      },
      {
        authors: "Baulieu EE, Thomas G, Legrain S et al.",
        year: 2000,
        title: "Dehydroepiandrosterone (DHEA), DHEA sulfate, and aging: contribution of the DHEAge Study to a sociobiomedical issue",
        journal: "Proceedings of the National Academy of Sciences, 97(8), 4279–4284",
      },
      {
        authors: "Cohen LS, Soares CN, Vitonis AF, Otto MW, Harlow BL",
        year: 2006,
        title: "Risk for new onset of depression during the menopausal transition: the Harvard Study of Moods and Cycles",
        journal: "Archives of General Psychiatry, 63(4), 385–390",
      },
      {
        authors: "Genazzani AD, Stomati M, Bernardi F, Pieri M, Rovati L, Genazzani AR",
        year: 2003,
        title: "Long-term low-dose dehydroepiandrosterone oral supplementation in early and late postmenopausal women modulates endocrine parameters and synthesis of neuroactive steroids",
        journal: "Fertility and Sterility, 80(6), 1495–1501",
      },
      {
        authors: "Burger HG, Dudley EC, Hopper JL et al.",
        year: 1999,
        title: "Prospectively measured levels of serum follicle-stimulating hormone, estradiol, and the dimeric inhibins during the menopausal transition in a population-based cohort of women",
        journal: "Journal of Clinical Endocrinology & Metabolism, 84(11), 4025–4030",
      },
      {
        authors: "Rao A, Steels E, Beccaria G, Inder WJ, Vitetta L",
        year: 2016,
        title: "Adaptogenic and anxiolytic effects of ashwagandha root extract in healthy adults: a double-blind, randomized, placebo-controlled clinical study",
        journal: "Journal of Evidence-Based Complementary & Alternative Medicine, 21(4), 261–267",
        note: "Stellvertretend für Evidenz zu adaptogenen Pflanzenstoffen bei Stresshormonen",
      },
    ],
  },
};
