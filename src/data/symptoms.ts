export interface FAQ {
  question: string;
  answer: string;
}

export interface DiagnosticTest {
  test: string;
  relevance: string;
}

export interface Symptom {
  slug: string;
  name: string;
  nameFull: string;
  description: string;
  metaDescription: string;
  causes: string[];
  /** Optional: 2-paragraph explanation of the condition-symptom mechanism */
  detailedExplanation?: string;
  /** Optional: structured diagnostic tests relevant to this symptom */
  diagnosticTests?: DiagnosticTest[];
  /** Optional: comparison table showing this symptom across different conditions/causes */
  comparisonTable?: {
    caption: string;
    headers: string[];
    rows: { aspect: string; values: string[] }[];
  };
  /** Optional: research findings with citations */
  research?: { finding: string; citation: string }[];
  /** Optional: condition-specific intro paragraph shown on [condition]/[symptom] pages */
  conditionIntros?: Record<string, string>;
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
    causes: [
      "Östrogenabfall in den Wechseljahren destabilisiert den Thermoregulationsmechanismus im Hypothalamus",
      "Hormonschwankungen in der Perimenopause",
      "Chronischer Stress und erhöhter Cortisolspiegel",
      "Bestimmte Medikamente (Tamoxifen, bestimmte Antidepressiva)",
      "Selten: Schilddrüsenüberfunktion (Hyperthyreose)",
    ],
    detailedExplanation:
      "Hitzewallungen entstehen, weil Östrogen direkt auf den Hypothalamus wirkt – jenen Teil des Gehirns, der die Körpertemperatur reguliert. Wenn der Östrogenspiegel fällt, wird der Thermoregulationsmechanismus instabil und reagiert auf kleinste Temperaturschwankungen mit einer übertriebenen Gegenreaktion: Der Körper leitet Wärme ab, Blutgefäße weiten sich, Schweiß tritt aus. Diese Reaktion wird als Hitzewallung erlebt und dauert typischerweise 1–5 Minuten.\n\nIn der Perimenopause schwanken die Östrogenspiegel unvorhersehbar – mal hoch, mal niedrig – was den Hypothalamus in einen Zustand chronischer Überempfindlichkeit versetzt. Laut der SWAN-Studie (Study of Women's Health Across the Nation) leiden über 80 % der Frauen während der menopausalen Transition unter Hitzewallungen, wobei die durchschnittliche Dauer 7,4 Jahre beträgt. Frauen, die bereits in der frühen Perimenopause erste Hitzewallungen erleben, sind statistisch gesehen länger betroffen.",
    diagnosticTests: [
      { test: "FSH (follikelstimulierend)", relevance: "Erhöhtes FSH (>25 IU/L) bestätigt perimenopausalen Status – schwankt aber stark, daher mehrere Messungen nötig" },
      { test: "Östradiol (E2)", relevance: "Zeigt aktuellen Östrogenstatus; bei Hitzewallungen oft erniedrigt oder stark schwankend" },
      { test: "TSH", relevance: "Schilddrüsenüberfunktion (Hyperthyreose) ausschließen – verursacht ebenfalls Hitzegefühle und Schwitzen" },
      { test: "AMH", relevance: "Misst die Eierstockreserve und ist stabiler als FSH allein; früher Indikator für Perimenopause" },
    ],
    conditionIntros: {
      hormone:
        "Hitzewallungen gelten als klassisches Wechseljahressymptom – doch auch ohne Perimenopause können hormonelle Dysbalancen plötzliche Hitzeschübe auslösen. Insbesondere Östrogendominanz oder starke Östrogenschwankungen im Laufe des Zyklus können den hypothalamischen Thermoregulationsmechanismus aus dem Gleichgewicht bringen. Frauen mit PMS kennen oft einen ähnlichen Effekt in der Lutealphase: Wärme, Schweißausbrüche und Herzrasen kurz vor der Periode sind hormonell bedingt und sprechen auf Progesteronausgleich an.",
    },
    whenToSeeDoctor:
      "Wenn Hitzewallungen sehr häufig auftreten (mehr als 10-mal täglich), den Schlaf stark beeinträchtigen oder der Alltag erheblich eingeschränkt wird. Auch bei plötzlichem Beginn ohne weitere Wechseljahreszeichen sollte eine Schilddrüsenabklärung erfolgen.",
    naturalRemedies: [
      "Isoflavone aus Rotklee (40–80 mg täglich) – moderate Evidenz in Meta-Analysen",
      "Traubsilberkerze (Cimicifuga, 20–40 mg) – stärkste pflanzliche Evidenz für Hitzewallungen",
      "Koffein und Alkohol reduzieren – klassische Hitzewallungs-Trigger",
      "Kühlende Kleidung aus Naturmaterialien und atmungsaktive Bettwäsche",
      "Entspannungsübungen (Yoga, Atemtechniken) – Cochrane-Review zeigt signifikante Wirkung",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Wie lange dauern Hitzewallungen in den Wechseljahren?",
        answer:
          "Hitzewallungen können 1–5 Minuten andauern und treten bei vielen Frauen über mehrere Jahre auf. Im Durchschnitt dauern sie 7–10 Jahre, bei manchen Frauen auch länger. Die SWAN-Studie zeigte, dass Frauen, die früh mit Hitzewallungen beginnen, am längsten betroffen sind.",
      },
      {
        question: "Was hilft sofort gegen Hitzewallungen?",
        answer:
          "Sofortige Maßnahmen: kühles Wasser trinken, kühles Tuch an Hals oder Handgelenke halten, tiefe Atemübungen (4-7-8-Methode), lockere Kleidung aus Naturmaterialien. Langfristig helfen Hormontherapie oder pflanzliche Mittel wie Traubsilberkerze.",
      },
      {
        question: "Können Hitzewallungen auch andere Ursachen haben?",
        answer:
          "Ja. Hitzewallungen können durch Schilddrüsenüberfunktion (Hyperthyreose), bestimmte Medikamente (Tamoxifen, SSRI, Opioidpflaster), Karzinoid-Syndrom oder schwere Infektionen ausgelöst werden. Eine ärztliche Abklärung ist wichtig, besonders wenn andere Wechseljahreszeichen fehlen.",
      },
      {
        question: "Ist Hormontherapie bei Hitzewallungen sinnvoll?",
        answer:
          "Ja – die Hormontherapie (HRT) ist die wirksamste Behandlung von Hitzewallungen. Die DGGG-Leitlinie 2020 empfiehlt HRT für gesunde Frauen unter 60 Jahren als sicher und wirksam. Bioidentisches Östradiol (transdermal) in Kombination mit mikronisiertem Progesteron gilt als besonders gut verträglich.",
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
      "Progesteronabfall – Progesteron wirkt über GABA-Rezeptoren direkt schlaffördernd",
      "Östrogenabfall in der Perimenopause stört Melatonin und Schlafarchitektur",
      "Hitzewallungen und Nachtschweiß unterbrechen den Schlaf",
      "Erhöhter Cortisolspiegel verhindert das Abschalten",
      "Schilddrüsenüberfunktion (Herzrasen, innere Unruhe)",
    ],
    detailedExplanation:
      "Schlaf und Hormone sind untrennbar verbunden. Progesteron ist das wichtigste Schlafhormon bei Frauen: Es bindet an GABA-A-Rezeptoren im Gehirn und wirkt sedierend und anxiolytisch. In der Perimenopause sinkt Progesteron als erstes Hormon – oft schon mit Mitte 30 – was zu Einschlafproblemen, innerer Unruhe und dem Gefühl erklärt, 'nicht abschalten zu können', lange bevor Hitzewallungen auftreten.\n\nÖstrogen beeinflusst zusätzlich die Melatoninproduktion und die Tiefschlafphasen. Ein absinkender Östrogenspiegel verändert die Schlafarchitektur: Weniger REM-Schlaf, häufigeres Aufwachen, weniger erholsamer Tiefschlaf. Dazu kommen nächtliche Hitzewallungen, die Frauen bis zu mehrfach pro Nacht aufwecken. Die Folge ist kumulative Schlafschuld, die sich auf Stimmung, Kognition und Cortisolspiegel auswirkt – ein Teufelskreis.",
    diagnosticTests: [
      { test: "Progesteron (Tag 19–22 des Zyklus)", relevance: "Erniedrigt (<5 ng/ml) bei Lutealphase-Defizit – häufig erster Hormonspiegel, der in der Perimenopause fällt" },
      { test: "FSH + Östradiol", relevance: "Bestätigt perimenopausalen Status bei zyklusbezogenen Schlafproblemen" },
      { test: "Cortisol (Tagesprofil, Speichel)", relevance: "Dysreguliertes Cortisol (abends noch zu hoch) ist häufige Einschlafursache" },
      { test: "TSH + fT3", relevance: "Hyperthyreose (Herzrasen, Unruhe) oder Hypothyreose ausschließen" },
    ],
    conditionIntros: {
      schilddruese:
        "Schlafstörungen bei Schilddrüsenerkrankungen sind häufig, aber oft nicht als solche erkannt. Bei Schilddrüsenüberfunktion (Hyperthyreose) sorgen erhöhte Schilddrüsenhormone für innere Unruhe, Herzrasen und Einschlafschwierigkeiten – der Körper ist im Dauerstressmodus. Bei Schilddrüsenunterfunktion (Hypothyreose) hingegen klagen Betroffene trotz Erschöpfung über nicht erholsamen Schlaf und häufiges Aufwachen. Wird die Schilddrüsenfunktion medikamentös eingestellt, bessern sich die Schlafprobleme meist deutlich.",
    },
    whenToSeeDoctor:
      "Bei anhaltenden Schlafproblemen über mehr als 3 Wochen, wenn der Alltag stark beeinträchtigt ist oder wenn Schlafstörungen mit Herzrasen, Angstattacken oder unerklärlicher Erschöpfung kombiniert auftreten.",
    naturalRemedies: [
      "Regelmäßiger Schlaf-Wach-Rhythmus – vor 23 Uhr einschlafen (Nebennieren regenerieren 22–2 Uhr)",
      "Kühles Schlafzimmer 16–18 °C und atmungsaktive Bettwäsche",
      "Magnesiumglycinat 300–400 mg eine Stunde vor dem Schlaf",
      "Kein Koffein nach 14 Uhr, kein Alkohol (stört REM-Schlaf)",
      "Entspannungsroutine (Yoga, Meditation, Atemübungen)",
    ],
    relatedConditions: ["menopause", "hashimoto", "hormone"],
    faqs: [
      {
        question: "Warum schlafen Frauen in den Wechseljahren schlecht?",
        answer:
          "Sinkende Progesteron- und Östrogenspiegel stören den Schlafrhythmus direkt. Progesteron wirkt sedierend über GABA-Rezeptoren; sein Rückgang führt zu Einschlafproblemen. Hitzewallungen und Nachtschweiß wecken Frauen mehrfach pro Nacht und unterbrechen Tiefschlafphasen.",
      },
      {
        question: "Kann Hashimoto Schlafprobleme verursachen?",
        answer:
          "Ja. Bei Hashimoto kann sowohl eine Unterfunktion (Schlafqualität trotz Müdigkeit schlecht) als auch eine Überfunktionsphase (Herzrasen, innere Unruhe) den Schlaf beeinträchtigen. Auch die autoimmune Entzündungsreaktion erhöht Zytokine, die den Schlaf fragmentieren.",
      },
      {
        question: "Helfen Schlafmittel bei hormonellen Schlafstörungen?",
        answer:
          "Herkömmliche Schlafmittel behandeln die Symptome, nicht die Ursache. Wenn die Ursache hormonell ist, ist Hormontherapie (besonders bioidentisches Progesteron) wirkungsvoller. Magnesium und Melatonin sind als Überbrückung sinnvoll. Kognitive Verhaltenstherapie für Insomnie (CBT-I) wirkt langfristig genauso gut wie Schlafmittel ohne Abhängigkeitsrisiko.",
      },
      {
        question: "Wann bessern sich Schlafprobleme in den Wechseljahren?",
        answer:
          "Bei vielen Frauen stabilisiert sich der Schlaf nach der Menopause, wenn die Hormonschwankungen nachlassen. Bis dahin helfen Schlafhygiene, Magnesium und – bei starker Beeinträchtigung – eine Hormontherapie. Unbehandelte Schlafstörungen sollten nach 3 Monaten ärztlich abgeklärt werden.",
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
      "Schilddrüsenunterfunktion (Hashimoto) – verlangsamt alle Zellstoffwechselprozesse",
      "Östrogenabfall in der Perimenopause – beeinträchtigt Schlafqualität und Energiestoffwechsel",
      "Ferritinmangel (Eisenspeicher) – auch bei normalem Blutbild",
      "Vitamin-D-Mangel – Rezeptoren in Mitochondrien beeinflussen ATP-Produktion",
      "Cortisol-Dysregulation (HPA-Achsen-Erschöpfung)",
      "Schlafstörungen durch hormonelle Ursachen",
    ],
    detailedExplanation:
      "Chronische Müdigkeit bei Frauen ist eines der häufigsten und gleichzeitig am schwersten diagnostizierbaren Symptome, weil sie so viele mögliche Ursachen hat. Die häufigste übersehene Ursache ist Ferritinmangel: Obwohl das Blutbild (Hämoglobin) noch normal ist, können Ferritinwerte unter 50–70 µg/l bereits erhebliche Erschöpfung verursachen, da die Körperspeicher für Gehirn, Muskeln und Haarfollikel erschöpft sind. Viele Laboratorien markieren Ferritin ab 12–15 µg/l als 'normal' – ein Wert, der klinisch für aktive Gesundheit nicht ausreicht.\n\nEine zweite häufig übersehene Ursache ist die subklinische Hypothyreose bei Hashimoto: TSH kann noch im Normbereich (bis 4,0 mU/L) sein, während fT3 (das aktive Schilddrüsenhormon) bereits erniedrigt ist. Da fT3 jeden Zellstoffwechselprozess reguliert, erklärt ein niedriges fT3 Erschöpfung, Kälteempfindlichkeit und Gewichtszunahme – auch bei 'normalem' TSH. Ärzte, die nur TSH testen, verpassen diese Diagnose häufig.",
    diagnosticTests: [
      { test: "Ferritin", relevance: "Zielwert >70 µg/l für Symptomfreiheit – Laborwert 'normal' (>12) reicht nicht aus" },
      { test: "TSH + fT3 + fT4", relevance: "TSH allein reicht nicht – fT3 ist das aktive Hormon; kann niedrig sein bei normalem TSH" },
      { test: "Anti-TPO-Antikörper", relevance: "Hashimoto ausschließen – positiv bei 90 % der Fälle, auch wenn TSH noch normal" },
      { test: "Vitamin D (25-OH)", relevance: "Zielwert 40–60 ng/ml; Mangel verursacht Erschöpfung, schlechte Stimmung, geschwächtes Immunsystem" },
      { test: "Cortisol-Tagesprofil (Speichel)", relevance: "Dysreguliertes Cortisol erklärt 'tired but wired' – morgens zu niedrig, abends zu hoch" },
    ],
    whenToSeeDoctor:
      "Bei anhaltender Erschöpfung, die sich durch Schlaf nicht bessert, oder wenn sie plötzlich auftritt. Immer wenn Müdigkeit mit Haarausfall, Frieren, Gewichtszunahme oder Stimmungsschwankungen kombiniert auftritt.",
    naturalRemedies: [
      "Vollständige Blutuntersuchung veranlassen: Ferritin, TSH/fT3, Vitamin D, B12, Cortisol",
      "Ferritin auf >70 µg/l optimieren – oft der schnellste Weg zur spürbaren Verbesserung",
      "Regelmäßige moderate Bewegung (paradoxerweise wirksamer als Ruhe bei chronischer Erschöpfung)",
      "Schlafhygiene verbessern und Schlafzeiten regulieren",
      "Stressreduktion und HPA-Achsen-Unterstützung (Ashwagandha, Magnesium)",
    ],
    relatedConditions: ["hashimoto", "menopause", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Warum bin ich als Frau immer so müde?",
        answer:
          "Chronische Müdigkeit bei Frauen hat oft hormonelle Ursachen: Schilddrüsenunterfunktion (Hashimoto), sinkende Östrogen- und Progesteronspiegel in der Perimenopause, Ferritinmangel (auch bei normalem Blutbild!) oder Vitamin-D-Mangel. Ein vollständiges Hormonsetting ist der erste Schritt zur Ursachenforschung.",
      },
      {
        question: "Welche Blutwerte bei Müdigkeit testen lassen?",
        answer:
          "Wichtige Werte: TSH, fT3, fT4, Anti-TPO (Schilddrüse und Hashimoto), Ferritin (Zielwert >70!), Vitamin D (Zielwert >40 ng/ml), Vitamin B12, Cortisol-Tagesprofil, Blutzucker (HbA1c), Blutbild. TSH allein ist nicht ausreichend – fT3 und Ferritin werden oft nicht automatisch mitgemessen.",
      },
      {
        question: "Kann Müdigkeit ein Zeichen der Wechseljahre sein?",
        answer:
          "Ja. Erschöpfung ist eines der häufigsten Wechseljahre-Symptome – aber sie wird oft nicht damit in Verbindung gebracht. Schlechter Schlaf durch Hitzewallungen, Progesteronmangel und absinkende Östrogenspiegel beeinflussen Energiestoffwechsel und Schlafqualität gleichzeitig. Hormontherapie kann die Erschöpfung bei perimenopausaler Ursache deutlich verbessern.",
      },
      {
        question: "Was unterscheidet hormonelle Erschöpfung von Burnout?",
        answer:
          "Hormonelle Erschöpfung (z.B. bei Hashimoto oder Wechseljahren) verbessert sich nicht durch Auszeiten allein und geht oft mit körperlichen Zeichen einher: Frieren, Gewichtszunahme, Haarausfall, Kälteempfindlichkeit. Burnout ist psychophysische Erschöpfung durch Überlastung. Beide können gleichzeitig vorliegen. Ein Bluttest klärt, ob eine hormonelle Komponente vorliegt.",
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
      "Östrogenabfall verlagert Fettverteilung vom Peripheren in den Bauchbereich (viszerales Fett)",
      "Verlangsamter Grundumsatz durch Schilddrüsenunterfunktion (200–500 kcal täglich weniger)",
      "Insulinresistenz – Cortisol und Östrogenmangel erhöhen Insulinresistenz",
      "Cortisolerhöhung durch chronischen Stress fördert Fetteinlagerung im Bauch",
      "Myxödem (Wassereinlagerungen) bei Hypothyreose",
      "Progesteronmangel begünstigt Wasserretention",
    ],
    detailedExplanation:
      "Die Gewichtszunahme in den Wechseljahren ist kein Zeichen mangelnder Disziplin, sondern ein biologisch programmierter Prozess. Östrogen reguliert die Fettverteilung: Bei ausreichend Östrogen lagert der weibliche Körper Fett bevorzugt an Hüften, Oberschenkeln und Po ein (subkutanes Fett). Fällt Östrogen, verschiebt sich die Fettverteilung in die Bauchhöhle (viszerales Fett) – das metabolisch aktivere und entzündungsförderndere Fett. Gleichzeitig sinkt der Grundumsatz um 200–500 kcal täglich, ohne dass sich die Ernährung geändert hat.\n\nBei Hashimoto und Schilddrüsenunterfunktion kommt ein verlangsamter Zellstoffwechsel hinzu: Das aktive Schilddrüsenhormon T3 reguliert die Mitochondrienaktivität in jeder Körperzelle. Ist T3 erniedrigt, verbrennt jede Zelle weniger Energie – Gewichtszunahme entsteht trotz normaler oder sogar reduzierter Kalorienzufuhr. Hinzu kommen Wassereinlagerungen (Myxödem), die 2–5 kg zum Körpergewicht beitragen können, ohne dass es sich um Fettmasse handelt.",
    diagnosticTests: [
      { test: "TSH + fT3 (nicht nur TSH allein)", relevance: "fT3 erniedrigt erklärt verlangsamten Stoffwechsel – TSH kann noch normal sein" },
      { test: "Nüchterninsulin + Nüchternblutzucker", relevance: "Insulinresistenz ist häufige Ursache für Bauchfett und Unfähigkeit abzunehmen" },
      { test: "Östradiol + FSH", relevance: "Östrogenabfall löst Fettumverteilung aus – Perimenopause bestätigen" },
      { test: "Cortisol (Morgenwert oder Tagesprofil)", relevance: "Chronisch erhöhtes Cortisol fördert viszerale Fettansammlung und Insulinresistenz" },
    ],
    whenToSeeDoctor:
      "Bei unbeabsichtigter Gewichtszunahme von mehr als 5 kg ohne Änderung der Ernährung immer ärztlich abklären. Auch wenn Gewichtszunahme von Müdigkeit, Frieren und Haarausfall begleitet wird – klassische Trias einer Schilddrüsenunterfunktion.",
    naturalRemedies: [
      "Krafttraining 3× wöchentlich – erhält Muskelmasse, erhöht Grundumsatz",
      "Proteinreiche Ernährung (1,2–1,6 g/kg Körpergewicht täglich)",
      "Schilddrüsenwerte optimieren: TSH auf 0,5–2,0 mU/L, fT3 im oberen Normbereich",
      "Schlaf priorisieren – Schlafmangel erhöht Ghrelin (Hungerhormon) und Insulinresistenz",
      "Stressmanagement zur Cortisolsenkung",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Warum nehme ich in den Wechseljahren zu?",
        answer:
          "Sinkende Östrogenspiegel verlagern Fett von Hüften und Oberschenkeln in den Bauchbereich. Gleichzeitig verlangsamt sich der Stoffwechsel um 200–500 kcal täglich. Krafttraining und proteinreiche Ernährung sind die wirkungsvollsten Gegenmaßnahmen – ergänzt durch Hormontherapie bei ausgeprägtem Östrogenmangel.",
      },
      {
        question: "Kann Hashimoto Gewichtszunahme verursachen?",
        answer:
          "Ja. Schilddrüsenunterfunktion durch Hashimoto verlangsamt den Grundumsatz erheblich und kann Myxödem (Wassereinlagerungen) verursachen. Wenn TSH im optimalen Bereich (0,5–2,0 mU/L) liegt und fT3 ausreichend ist, normalisiert sich das Gewicht oft. Nicht selten ist das Ziel-TSH des Arztes zu wenig optimiert.",
      },
      {
        question: "Warum hilft Diät bei hormoneller Gewichtszunahme nicht?",
        answer:
          "Kalorienreduktion allein funktioniert schlecht, wenn der Grundumsatz durch Schilddrüsenunterfunktion oder Insulinresistenz gedrosselt ist. Extreme Diäten erhöhen Cortisol, was Schilddrüse und Progesteron weiter unterdrückt – ein Teufelskreis. Besser: Hormonursache behandeln, dann Ernährung und Krafttraining ergänzen.",
      },
      {
        question: "Wie lange dauert es, bis man nach Beginn der Hormontherapie Gewicht verliert?",
        answer:
          "Hormontherapie allein führt nicht automatisch zur Gewichtsabnahme, aber sie verlangsamt die hormonell bedingte Zunahme und verbessert die Voraussetzungen für Sport und Ernährungsumstellung. Spürbare Veränderungen zeigen sich typischerweise nach 3–6 Monaten, wenn gleichzeitig Krafttraining und Ernährung angepasst werden.",
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
      "Ferritinmangel (Eisenspeicher unter 70 µg/l) – häufigste übersehene Ursache",
      "Schilddrüsenunterfunktion – Schilddrüsenhormone steuern den Haarwachstumszyklus",
      "Östrogen- und Progesteronabfall in der Perimenopause",
      "Androgenüberschuss (erhöhtes Testosteron, DHEA-S) bei PCOS",
      "Akuter Stress (Telogeneffluvium – tritt 3–6 Monate nach dem Ereignis auf)",
      "Biotin-, Zink- und Vitamin-D-Mangel",
    ],
    detailedExplanation:
      "Haarfollikel haben Rezeptoren für Östrogen, Testosteron, Schilddrüsenhormone und Ferritin. Sie sind damit besonders empfindliche Indikatoren des hormonellen Status. Beim weiblichen Haarausfall unterscheidet man drei Hauptmuster: den diffusen Haarausfall (gleichmäßig über den ganzen Kopf, typisch bei Hashimoto und Ferritinmangel), die weibliche androgenetische Alopezie (Scheitel wird breiter, seitliche Regionen erhalten) und das Telogeneffluvium (massiver vorübergehender Ausfall 3–6 Monate nach einem Stressereignis, Geburt oder abruptem Hormonwechsel).\n\nBesonders tückisch ist der Ferritinmangel: Die meisten Labore markieren Ferritin ab 12–15 µg/l als 'normal' – für aktiven Haarwuchs sind aber Werte über 70–100 µg/l nötig. Frauen mit Ferritin 30 µg/l bekommen von Ärzten oft zu hören, sie hätten 'keine Anämie', obwohl ihre Haarfollikel bereits unter Eisenmangel leiden. Ähnliches gilt für die Schilddrüse: TSH kann noch im Normbereich sein, während fT3 bereits erniedrigt ist und Haarfollikel nicht ausreichend versorgt werden.",
    diagnosticTests: [
      { test: "Ferritin (Zielwert >70 µg/l)", relevance: "Häufigste übersehene Ursache – Laborwert 'normal' (>12) reicht für Haarfollikel nicht aus" },
      { test: "TSH + fT3 + Anti-TPO", relevance: "Schilddrüse umfassend testen – diffuser Haarausfall ist ein Frühzeichen der Hypothyreose" },
      { test: "Testosteron + DHEA-S + SHBG", relevance: "Androgenüberschuss ausschließen – besonders bei Haarausfall an Schläfen und Scheitel" },
      { test: "Vitamin D (25-OH) + Zink", relevance: "Beide essenziell für Haarwachstumszyklus; Mängel häufig und gut korrigierbar" },
    ],
    whenToSeeDoctor:
      "Bei deutlich sichtbarem Haarverlust, kahlen Stellen, plötzlichem starken Haarausfall oder wenn Haarausfall mit anderen Symptomen (Müdigkeit, Frieren, Gewichtszunahme) kombiniert auftritt. Dermatologin und Endokrinologin oder Gynäkologin konsultieren.",
    naturalRemedies: [
      "Ferritin-Spiegel auf >70 µg/l optimieren – dauert 3–6 Monate, sichtbare Wirkung nach 6–9 Monaten",
      "Schilddrüse korrekt einstellen (TSH 0,5–2,0, fT3 im oberen Normbereich)",
      "Vitamin D auf 40–60 ng/ml und Zink auf gute Werte optimieren",
      "Selen 200 µg täglich bei Hashimoto (senkt Antikörper, unterstützt T4→T3-Konversion)",
      "Sanfte Haarpflege: kein übermäßiges Föhnen, kein Hitzestress",
    ],
    relatedConditions: ["hashimoto", "menopause", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Welche Blutwerte bei Haarausfall testen lassen?",
        answer:
          "Ferritin (Zielwert >70 µg/l!), TSH + fT3 + fT4 + Anti-TPO (Schilddrüse und Hashimoto), Testosteron + DHEA-S + SHBG (Androgene), Vitamin D (Zielwert >40 ng/ml), Zink, Östradiol + FSH. Diese Werte decken die häufigsten Ursachen ab. TSH allein und 'normales Blutbild' schließen die meisten Ursachen nicht aus.",
      },
      {
        question: "Kann Hashimoto Haarausfall verursachen?",
        answer:
          "Ja. Schilddrüsenhormone regulieren den Haarwachstumszyklus direkt. Bei Hashimoto-bedingter Unterfunktion verlängert sich die Ruhephase (Telogenphase) des Haarfollikels – diffuser Haarausfall entsteht. Mit korrekter Einstellung (TSH 0,5–2,0 mU/L, ausreichend fT3) erholt sich das Haar, allerdings erst nach 6–12 Monaten.",
      },
      {
        question: "Hört Haarausfall in den Wechseljahren von selbst auf?",
        answer:
          "Nicht automatisch. Nach der Menopause stabilisieren sich die Hormonspiegel auf einem niedrigen Niveau – Östrogenmangel-bedingter Haarausfall kann anhalten. Hormontherapie kann das Haarbild deutlich verbessern, ebenso die gezielte Behandlung von Ferritin- und Vitamin-D-Mangel.",
      },
      {
        question: "Wann sieht man erste Verbesserungen nach der Behandlung?",
        answer:
          "Das Haar wächst langsam (etwa 1 cm pro Monat). Nach Behandlung einer Ursache (z.B. Ferritinsupplementierung) sieht man erst nach 3–6 Monaten neues Wachstum und erst nach 9–12 Monaten eine deutliche Verdichtung. Geduld ist wichtig – die Behandlung muss konsequent durchgehalten werden.",
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
      "Schwankende Östrogenspiegel in der Perimenopause beeinflussen Serotonin und Dopamin",
      "Progesteronmangel – Progesteron wirkt über GABA-Rezeptoren beruhigend auf das Gehirn",
      "Erhöhter Cortisolspiegel durch chronischen Stress",
      "Schilddrüsendysregulation – TSH-Schwankungen beeinflussen Neurotransmitter",
      "Schlafentzug durch Hitzewallungen verstärkt emotionale Instabilität",
    ],
    detailedExplanation:
      "Östrogen moduliert die Serotoninproduktion, Serotoninrezeptordichte und den Serotoninabbau im Gehirn. Wenn Östrogen schwankt – wie in der Perimenopause typisch – schwankt auch die serotonerge Aktivität, was emotionale Instabilität, Reizbarkeit und Stimmungstiefs erklärt. Gleichzeitig wirkt Progesteron als körpereigenes Anxiolytikum: Es bindet an GABA-A-Rezeptoren und wird partiell zu Allopregnanolon umgewandelt, einem Neurosteroid mit beruhigender und stimmungsstabilisierender Wirkung. Fällt Progesteron, verliert das Nervensystem seinen wichtigsten natürlichen Puffer.\n\nFrauen in der Perimenopause haben laut mehreren großen Kohortenstudien (SWAN, Penn Ovarian Aging Study) ein 2–3-fach erhöhtes Risiko für depressive Erkrankungen im Vergleich zum reproduktiven Alter. Wichtig: Das ist kein psychologisches Problem, sondern eine neurohormonelle Reaktion. Viele Frauen berichten, dass ihre Stimmungsprobleme auf Hormontherapie schneller ansprechen als auf Antidepressiva – was zeigt, dass die eigentliche Ursache hormonell ist.",
    diagnosticTests: [
      { test: "Östradiol + Progesteron (Lutealphase)", relevance: "Östrogenmangel und Progesteronmangel direkt messen – beide beeinflussen Neurotransmitter" },
      { test: "TSH + fT3", relevance: "Schilddrüsenfehlfunktion kann identische Stimmungssymptome erzeugen" },
      { test: "Cortisol (Tagesprofil)", relevance: "Chronisch erhöhtes Cortisol erschöpft Serotonin und Progesteron" },
      { test: "Vitamin D", relevance: "Vitamin D hat direkte Wirkung auf Serotoninproduktion – Mangel verursacht depressive Verstimmung" },
    ],
    conditionIntros: {
      schilddruese:
        "Stimmungsschwankungen sind ein häufig unterschätztes Symptom bei Schilddrüsenerkrankungen. Die Schilddrüsenhormone T3 und T4 beeinflussen direkt die Neurotransmittersysteme im Gehirn – insbesondere Serotonin, Dopamin und Noradrenalin. Bei Unterfunktion (Hypothyreose) treten oft Antriebslosigkeit, depressive Stimmung und emotionale Stumpfheit auf; bei Überfunktion (Hyperthyreose) dominieren Reizbarkeit, Nervosität und innere Unruhe. Entscheidend: Erst wenn die Schilddrüsenwerte normalisiert sind, kann beurteilt werden, ob eine eigenständige psychische Störung vorliegt.",
    },
    whenToSeeDoctor:
      "Bei anhaltender Niedergeschlagenheit über mehr als 2 Wochen, Angststörungen, Panikattacken oder Suizidgedanken sofort ärztliche Hilfe suchen. Auch bei starker Beeinträchtigung des Alltags immer mit einer Ärztin sprechen.",
    naturalRemedies: [
      "Regelmäßige körperliche Bewegung 4× wöchentlich (erhöht Serotonin und BDNF)",
      "Omega-3-Fettsäuren (EPA/DHA 2 g täglich) – Meta-Analysen zeigen antidepressive Wirkung",
      "Schlafoptimierung als Priorität",
      "Stressmanagement: Cortisol senken (Ashwagandha, Meditation, Atemübungen)",
      "Johanniskraut (600–900 mg täglich) bei leichter bis mittelschwerer depressiver Verstimmung",
    ],
    relatedConditions: ["menopause", "hormone", "hashimoto"],
    faqs: [
      {
        question: "Sind Stimmungsschwankungen in den Wechseljahren normal?",
        answer:
          "Ja, sie sind sehr häufig – aber 'normal' bedeutet nicht, dass man sie hinnehmen muss. Schwankende Östrogenspiegel beeinflussen Serotonin und andere Neurotransmitter direkt. Die meisten Frauen erleben eine Verbesserung nach der Menopause, wenn sich die Hormonspiegel stabilisieren.",
      },
      {
        question: "Helfen Antidepressiva bei perimenopausalen Stimmungsschwankungen?",
        answer:
          "Teilweise. SSRIs können wirken, da sie die Serotoninverfügbarkeit erhöhen. Aber wenn die Grundursache ein Hormonmangel ist, adressiert Hormontherapie das Problem direkter. Bioidentisches Progesteron hat einen zusätzlichen schlaffördernden und angstlösenden Effekt. Idealerweise: Hormonprofil abklären, bevor Antidepressiva begonnen werden.",
      },
      {
        question: "Können Stimmungsschwankungen ein Zeichen von Hashimoto sein?",
        answer:
          "Ja. Schilddrüsenhormone beeinflussen direkt die Neurotransmitterproduktion. Unbehandelte Hypothyreose bei Hashimoto führt häufig zu depressiver Verstimmung, Antriebslosigkeit und Reizbarkeit. Diese bessern sich oft mit korrekter Schilddrüseneinstellung deutlich.",
      },
      {
        question: "Was ist der Unterschied zwischen perimenopausalen Stimmungsschwankungen und einer Depression?",
        answer:
          "Perimenopausale Stimmungsschwankungen sind oft zyklisch, haben 'gute Tage', korrelieren mit Hormonschwankungen und gehen mit körperlichen Symptomen einher. Klinische Depression ist anhaltend (>2 Wochen täglich), mit Freudlosigkeit (Anhedonie) und ohne zyklisches Muster. Beide können gleichzeitig vorliegen und müssen parallel behandelt werden.",
      },
    ],
  },

  konzentrationsprobleme: {
    slug: "konzentrationsprobleme",
    name: "Konzentrationsprobleme",
    nameFull: "Konzentrationsprobleme und Brain Fog",
    description:
      "Konzentrationsprobleme, Vergesslichkeit und der sogenannte \"Brain Fog\" gehören zu den belastendsten, aber wenig bekannten Symptomen hormoneller Veränderungen bei Frauen.",
    metaDescription:
      "Konzentrationsprobleme und Brain Fog bei Frauen: Hormonelle Ursachen (Wechseljahre, Hashimoto, Schilddrüse), Diagnose und was hilft.",
    causes: [
      "Östrogenabfall – Östrogen fördert die Gehirnfunktion, Gedächtniskonsolidierung und Synapsenbildung",
      "Schilddrüsenunterfunktion (Hashimoto) – verlangsamt kognitive Prozesse und Reaktionsgeschwindigkeit",
      "Schlafmangel durch Hitzewallungen fragmentiert Gedächtniskonsolidierung im Tiefschlaf",
      "Cortisol-Dysregulation durch chronischen Stress schädigt den Hippocampus",
      "Vitamin-B12- und Vitamin-D-Mangel beeinträchtigen Myelinscheide und Neurotransmission",
    ],
    detailedExplanation:
      "Östrogen ist ein Neuroprotektivum: Es fördert die Synapsenbildung, schützt Neuronen vor oxidativem Stress und reguliert den Acetylcholinstoffwechsel, der für Gedächtnis und Konzentration zentral ist. Wenn Östrogen in der Perimenopause abfällt, verändert sich die zerebrale Glukoseverwertung messbar – PET-Studien zeigen eine reduzierte metabolische Aktivität in Gedächtnisregionen des Gehirns, bevor klinische Symptome auftreten. Das erklärt, warum viele Frauen das Gefühl haben, 'nicht mehr so scharf zu denken' – es ist eine reale, neurobiologisch erklärbare Veränderung, kein Einbilden.\n\nBei Hashimoto-bedingter Hypothyreose werden alle kognitiven Prozesse verlangsamt, weil T3 die Energieversorgung jedes Neurons reguliert. Typische Klagen: 'Ich suche ständig nach Worten', 'Ich lese einen Satz dreimal und verstehe ihn nicht'. Diese Symptome verbessern sich bei optimaler Schilddrüseneinstellung deutlich – fT3 im oberen Normbereich ist dabei oft das entscheidende Ziel, das viele Standardtherapien nicht erreichen.",
    diagnosticTests: [
      { test: "TSH + fT3 (Schilddrüse umfassend)", relevance: "fT3 erniedrigt erklärt kognitiven Brain Fog direkt – TSH allein reicht nicht" },
      { test: "Östradiol + FSH", relevance: "Östrogenabfall als neurobiologische Ursache bestätigen" },
      { test: "Vitamin B12", relevance: "B12-Mangel verursacht Myelinschäden und kognitive Verlangsamung – oft mit normalem Blutbild" },
      { test: "Cortisol-Tagesprofil", relevance: "Chronischer Stress schädigt Hippocampus und Gedächtnisfunktion messbar" },
    ],
    conditionIntros: {
      hormone:
        "Konzentrationsprobleme und Brain Fog sind bei hormonellen Dysbalancen ein klassisches, aber wenig diskutiertes Symptom. Östrogen hat eine direkte neurotrophe Wirkung – es fördert die Bildung neuer Synapsen und schützt Neuronen im präfrontalen Kortex und Hippocampus. Fällt der Östrogenspiegel ab oder schwankt er stark (wie bei Östrogendominanz mit kurzen Östrogenspitzen), leiden kognitive Funktionen spürbar. Auch Progesteronmangel beeinträchtigt den GABA-Stoffwechsel und die Schlafqualität, was sich direkt auf die Konzentration auswirkt.",
    },
    whenToSeeDoctor:
      "Bei plötzlich auftretenden, starken Gedächtnis- oder Konzentrationsproblemen, besonders wenn andere Symptome fehlen. Auch wenn Brain Fog stark beeinträchtigt oder sich verschlechtert. Demenz muss bei ausgeprägten Gedächtnisproblemen ab 60 ausgeschlossen werden.",
    naturalRemedies: [
      "Regelmäßige aerobe Bewegung – verbessert Durchblutung und fördert BDNF (Neuroplastizität)",
      "Schlafoptimierung: Gedächtniskonsolidierung findet im Tiefschlaf statt",
      "Omega-3-Fettsäuren (DHA 1–2 g täglich) – essenziell für Zellmembrane im Gehirn",
      "Schilddrüse und Östrogen optimal einstellen lassen",
      "Stressreduktion: Cortisol schädigt den Hippocampus bei chronischer Erhöhung",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese"],
    faqs: [
      {
        question: "Was ist Brain Fog bei Frauen?",
        answer:
          "Brain Fog beschreibt geistige Unklarheit, Vergesslichkeit, verlangsamtes Denken und Wortfindungsprobleme. Bei Frauen ist er häufig hormonell bedingt: Östrogenabfall verändert die zerebrale Glukoseverwertung, Schilddrüsenunterfunktion verlangsamt kognitive Prozesse. Brain Fog ist eine reale neurobiologische Veränderung – kein Einbilden.",
      },
      {
        question: "Gehen Konzentrationsprobleme in den Wechseljahren wieder weg?",
        answer:
          "Bei vielen Frauen verbessern sich kognitive Symptome nach der Menopause, wenn sich der Hormonhaushalt stabilisiert. Hormontherapie kann den Übergang erleichtern und kognitive Funktion unterstützen. Schlaf, Sport und Stressreduktion sind die wichtigsten unterstützenden Maßnahmen.",
      },
      {
        question: "Kann Hashimoto Konzentrationsprobleme verursachen?",
        answer:
          "Ja. Schilddrüsenhormone sind essenziell für kognitive Funktionen. Unbehandelte oder unzureichend behandelte Hypothyreose bei Hashimoto führt oft zu Vergesslichkeit und Brain Fog. Diese verbessern sich deutlich, wenn TSH auf 0,5–2,0 mU/L und fT3 in den oberen Normbereich gebracht wird.",
      },
      {
        question: "Welche Supplemente helfen bei Brain Fog?",
        answer:
          "Omega-3 (DHA), Vitamin D, Vitamin B12 und Magnesium haben die stärkste Evidenz für kognitive Unterstützung. Ashwagandha reduziert Cortisol, das bei chronischer Erhöhung Hippocampusvolumen verringert. Diese Supplemente ersetzen keine Hormontherapie bei hormonell bedingtem Brain Fog, können aber unterstützend wirken.",
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
      "Östrogenabfall in der Perimenopause destabilisiert die Thermoregulation im Hypothalamus",
      "Nächtliche Hitzewallungen als häufigste Ursache",
      "Schilddrüsenüberfunktion (Hyperthyreose) erhöht den Grundumsatz",
      "Erhöhter Cortisolspiegel stört den zirkadianen Rhythmus",
      "Bestimmte Medikamente (Antidepressiva, Tamoxifen, Opioidpflaster)",
    ],
    detailedExplanation:
      "Nachtschweiß ist die nächtliche Variante der Hitzewallungen und entsteht durch denselben Mechanismus: ein destabilisierter Thermostat im Hypothalamus durch Östrogenmangel. Der Körper interpretiert normale nächtliche Körpertemperaturschwankungen als Überhitzung und leitet übertrieben Wärme ab – durch Vasodilatation und Schweißproduktion. Bei Frauen in der Perimenopause tritt dies häufig in der zweiten Nachthälfte auf, wenn Cortisol beginnt anzusteigen und Östrogen im Blut seinen Tiefstpunkt erreicht.\n\nNachtschweiß, der nicht mit Hitzewallungen kombiniert ist, kann auf andere Ursachen hinweisen. Hyperthyreose (Schilddrüsenüberfunktion) erhöht den Grundumsatz und erzeugt vermehrte Wärmeproduktion, die sich nachts als Schwitzen äußert. Infektionen, Tumore (Lymphome) und bestimmte Medikamente müssen bei atypischem Verlauf ausgeschlossen werden – besonders wenn Nachtschweiß mit ungewolltem Gewichtsverlust oder Fieber kombiniert auftritt.",
    diagnosticTests: [
      { test: "FSH + Östradiol", relevance: "Perimenopause als häufigste Ursache bestätigen" },
      { test: "TSH + fT3 + fT4", relevance: "Hyperthyreose ausschließen – verursacht Nachtschweiß durch erhöhten Grundumsatz" },
      { test: "Cortisol (Morgenwert)", relevance: "Erhöhtes nächtliches Cortisol stört den Schlaf und triggert Schwitzen" },
      { test: "Blutbild + CRP", relevance: "Infektionen und entzündliche Erkrankungen als Ursache ausschließen" },
    ],
    conditionIntros: {
      hashimoto:
        "Nachtschweiß bei Hashimoto entsteht oft nicht aus dem klassischen Grund – Östrogenabfall – sondern durch die charakteristischen Hormonschübe der Erkrankung. Wenn die entzündete Schilddrüse plötzlich gespeicherte Hormone freisetzt (sogenannte Hashimoto-Schübe), kann es zu vorübergehender Hyperthyreose kommen, die sich durch Schwitzen, Herzrasen und Unruhe nachts bemerkbar macht. Betroffene, deren TSH-Werte stark schwanken, berichten häufiger über episodischen Nachtschweiß als Frauen mit stabiler Hypothyreose.",
      schilddruese:
        "Nachtschweiß ist ein häufiges Symptom bei Schilddrüsenüberfunktion (Hyperthyreose). Die erhöhte Stoffwechselrate – ausgelöst durch überschüssige Schilddrüsenhormone – erhöht die Körpertemperatur und aktiviert die Schweißdrüsen auch im Schlaf. Besonders bei Morbus Basedow oder bei zu hoher Levothyroxin-Dosis sind nächtliche Schweißausbrüche ein wichtiges Warnsignal, das eine Dosisanpassung nötig macht.",
      hormone:
        "Nachtschweiß bei hormonellen Dysbalancen entsteht durch denselben Mechanismus wie Hitzewallungen: der Östrogenspiegel schwankt oder fällt ab, was den hypothalamischen Thermoregulationsmechanismus destabilisiert. Anders als bei der Menopause passiert dies im gebärfähigen Alter häufig zyklisch – Frauen mit Östrogendominanz oder starkem PMS berichten oft von Nachtschweiß in der zweiten Zyklushälfte, wenn Progesteron relativ zur Östrogenwirkung zu niedrig ist.",
    },
    whenToSeeDoctor:
      "Bei Nachtschweiß mehrmals pro Woche mit starker Schlafbeeinträchtigung. Sofort bei Kombination mit Fieber, ungewolltem Gewichtsverlust, Knoten oder Lymphknotenschwellung – diese Symptome erfordern sofortigen Ausschluss einer systemischen Erkrankung.",
    naturalRemedies: [
      "Kühles Schlafzimmer 16–18 °C, Lüften vor dem Schlafengehen",
      "Leichte, atmungsaktive Bettwäsche (Leinen, Bambus) statt Synthetik",
      "Kein Alkohol am Abend – erweitert Blutgefäße und verstärkt Nachtschweiß",
      "Traubsilberkerze (Cimicifuga) – beste pflanzliche Evidenz für vasomotorische Symptome",
      "Kühlendes Gel-Kissen oder Schlafen mit einem Kühlelement in Reichweite",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Warum schwitze ich nachts so stark?",
        answer:
          "Nächtliches Schwitzen bei Frauen ist häufig durch sinkende Östrogenspiegel in der Perimenopause bedingt. Östrogen reguliert den Hypothalamus, der die Körpertemperatur steuert. Fällt Östrogen, reagiert der Körper überempfindlich auf Temperaturschwankungen und leitet übertrieben Wärme ab.",
      },
      {
        question: "Hilft Magnesium gegen Nachtschweiß?",
        answer:
          "Magnesium verbessert die Schlafqualität und unterstützt das Nervensystem, wirkt aber nicht direkt gegen hormonellen Nachtschweiß. Traubsilberkerze und Rotklee-Isoflavone zeigen in Meta-Analysen deutlich bessere Wirkung auf vasomotorische Symptome.",
      },
      {
        question: "Wann hört Nachtschweiß in den Wechseljahren auf?",
        answer:
          "Bei den meisten Frauen nimmt Nachtschweiß nach der Menopause ab, wenn sich die Hormonspiegel stabilisieren. Die SWAN-Studie zeigt aber: Bei 30 % der Frauen halten vasomotorische Symptome noch 10+ Jahre nach der Menopause an. Hormontherapie ist die wirksamste Behandlung.",
      },
      {
        question: "Können Antidepressiva Nachtschweiß verursachen?",
        answer:
          "Ja. Besonders SSRIs und SNRIs (z.B. Venlafaxin, Fluoxetin) können Nachtschweiß als Nebenwirkung verursachen. Paradoxerweise werden sie auch zur Behandlung von Hitzewallungen eingesetzt. Bei medikamenteninduziertem Nachtschweiß: Ärztin über Dosisanpassung oder Medikamentenwechsel informieren.",
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
      "Testosteronabfall – Testosteron ist auch bei Frauen das wichtigste Libidohormon",
      "Sinkende Östrogenspiegel führen zu Scheidentrockenheit und machen Sex schmerzhaft",
      "Antibabypille erhöht SHBG und senkt freies Testosteron",
      "Erschöpfung, Schlafmangel und Stress reduzieren Sexualhormonproduktion",
      "Antidepressiva (SSRI) als häufige medikamentöse Ursache",
    ],
    detailedExplanation:
      "Testosteron wird oft als 'männliches Hormon' fehleingeschätzt – tatsächlich ist es auch für Frauen das zentrale Libidohormon. Frauen produzieren Testosteron in Eierstöcken und Nebennieren; der Spiegel sinkt ab dem 30. Lebensjahr kontinuierlich und halbiert sich von 30 bis 50 Jahren. In der Perimenopause verlieren Frauen zusätzlich die ovariellen Anteile. Hinzu kommt: Die Antibabypille erhöht SHBG (Sexualhormon-bindendes Globulin), das Testosteron bindet und inaktiviert – SHBG kann nach dem Absetzen noch Monate erhöht bleiben, was als 'post-pill libido loss' bekannt ist.\n\nÖstrogenmangel hat einen indirekten, aber bedeutsamen Effekt: Vaginale Atrophie macht Sex schmerzlich – was als konditionierter Reflex die Libido unterdrückt. Frauen berichten oft, dass erst die lokale Östrogentherapie (Scheidentrockenheit beheben) die Lust zurückgebracht hat. Psychologische Faktoren (Körperbild in den Wechseljahren, Beziehungsdynamik, Schlafmangel) verstärken die hormonellen Effekte und müssen parallel adressiert werden.",
    diagnosticTests: [
      { test: "Testosteron (Gesamttestosteron) + SHBG", relevance: "Freies Testosteron = Gesamttestosteron geteilt durch SHBG – SHBG entscheidet, wie viel aktiv ist" },
      { test: "Östradiol + FSH", relevance: "Östrogenmangel als indirekter Faktor (Scheidentrockenheit, allgemeines Wohlbefinden)" },
      { test: "DHEA-S", relevance: "Vorläuferhormon für Testosteron und Östrogen; sinkt mit chronischem Stress und Alter" },
      { test: "Prolaktin", relevance: "Erhöhtes Prolaktin (Medikamente, Hypophysen-Adenom) senkt Libido" },
    ],
    conditionIntros: {
      hashimoto:
        "Libidoverlust bei Hashimoto ist ein häufiges, aber selten adressiertes Problem. Schilddrüsenhormone sind direkt an der Produktion von Sexualhormonen beteiligt: Bei Hypothyreose sinken Testosteron und DHEA-S, während Prolaktin ansteigt – ein Hormon, das die sexuelle Lust aktiv dämpft. Hinzu kommt die chronische Erschöpfung, die Hashimoto typischerweise begleitet. Studien zeigen, dass die sexuelle Dysfunktion bei Hashimoto-Patientinnen signifikant häufiger ist als in der Allgemeinbevölkerung und sich nach adäquater Schilddrüsentherapie in vielen Fällen bessert.",
    },
    whenToSeeDoctor:
      "Wenn der Libidoverlust die Lebensqualität oder die Partnerschaft stark beeinträchtigt und länger als 3–6 Monate anhält. Auch bei schmerzhaftem Geschlechtsverkehr (Dyspareunie) sollte gynäkologische Abklärung erfolgen.",
    naturalRemedies: [
      "Körperliche Aktivität verbessert Testosteronspiegel, Körperbild und Durchblutung",
      "Stressreduktion: Cortisol konkurriert mit Sexualhormonen",
      "Lokale Östrogentherapie bei Scheidentrockenheit (sicher, kaum systemische Wirkung)",
      "Offene Kommunikation in der Partnerschaft über veränderte Bedürfnisse",
      "Maca (Lepidium meyenii): Einige Studien zeigen leichte libidosteigernde Wirkung ohne Hormonwirkung",
    ],
    relatedConditions: ["menopause", "hormone"],
    faqs: [
      {
        question: "Ist Libidoverlust in den Wechseljahren normal?",
        answer:
          "Häufig ja – bis zu 40 % der Frauen in der Perimenopause berichten von nachlassender Libido. 'Normal' bedeutet aber nicht unvermeidbar: Hormontherapie, besonders topisches Testosteron (off-label in Deutschland) und lokales Östrogen, kann die Libido effektiv verbessern.",
      },
      {
        question: "Welche Hormone sind für die weibliche Libido zuständig?",
        answer:
          "Testosteron (wichtigstes Libidohormon auch bei Frauen), Östrogen (indirekter Effekt über vaginale Gesundheit), Progesteron (in Maßen unterstützend) und DHEA. In den Wechseljahren sinken alle vier – ein vollständiges Hormonsetting zeigt, welche Werte im Ungleichgewicht sind.",
      },
      {
        question: "Kann die Pille die Libido dauerhaft reduzieren?",
        answer:
          "Ja. Kombinationspillen erhöhen SHBG, das Testosteron bindet und inaktiviert. SHBG kann nach dem Absetzen noch 6–12 Monate erhöht bleiben. Frauen mit persistierendem Libidoverlust nach Absetzen der Pille sollten SHBG und freies Testosteron testen lassen.",
      },
      {
        question: "Was ist topisches Testosteron für Frauen?",
        answer:
          "Topisches Testosteron (als Gel oder Creme) ist in Deutschland für Frauen off-label verschreibungspflichtig. Studien (ISSWSH-Leitlinie 2019) zeigen signifikante Verbesserung der Libido bei Frauen mit menopausaler sexueller Dysfunktion. Die Dosierung ist 5–10-fach niedriger als bei Männern; keine Maskulinisierungseffekte bei korrekter Anwendung.",
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
      "Östrogenabfall in der Perimenopause und Menopause atrophiert das vaginale Gewebe",
      "Stillen (vorübergehend niedriges Östrogen)",
      "Chemotherapie, Bestrahlung oder operativer Entfernung der Eierstöcke",
      "Antidepressiva und Antihistaminika reduzieren Schleimhautfeuchtigkeit",
      "Aggressive Intimhygieneprodukte zerstören den natürlichen vaginalen pH",
    ],
    detailedExplanation:
      "Das vaginale Epithel ist östrogenabhängig: Östrogen hält die Schleimhäute der Scheide feucht, elastisch und mit einem sauren pH (3,5–4,5) ausgestattet, der vor Infektionen schützt. Wenn Östrogen fällt, wird das vaginale Epithel dünner (atrophiert), der pH steigt an, Laktobazillen nehmen ab – die Scheide wird trockener, anfälliger für Infektionen und empfindlicher. Dieser Prozess ist als 'Genitourinary Syndrome of Menopause' (GSM) bekannt und betrifft laut Studien bis zu 50 % der postmenopausalen Frauen.\n\nIm Gegensatz zu Hitzewallungen, die mit der Zeit nachlassen, verschlimmert sich vaginale Atrophie ohne Behandlung progressiv. Gleichzeitig ist sie am einfachsten zu behandeln: Lokale Östrogenpräparate (Creme, Zäpfchen, Ring) werden direkt ins Gewebe aufgenommen, die systemische Resorption ist minimal und gilt als sicher – auch für Frauen, die systemische HRT nicht nehmen können oder wollen.",
    diagnosticTests: [
      { test: "Klinische Untersuchung durch Gynäkologin", relevance: "Vaginale Atrophie ist klinisch diagnostizierbar durch Schleimhautbeschaffenheit und pH-Messung" },
      { test: "Östradiol + FSH", relevance: "Östrogenmangel als Ursache bestätigen; menopausalem Status zuordnen" },
      { test: "Vaginale pH-Messung", relevance: "pH >5 zeigt gestörte Mikrobiom-Balance durch Östrogenmangel" },
      { test: "Abstriche bei rezidivierenden Infektionen", relevance: "Vaginalatrophie begünstigt bakterielle Vaginose und Harnwegsinfekte" },
    ],
    conditionIntros: {
      hashimoto:
        "Scheidentrockenheit wird bei Hashimoto häufig übersehen, obwohl sie eng mit dem Schilddrüsenstatus verknüpft ist. Schilddrüsenhormone regulieren die Durchblutung und die Feuchtigkeit der Schleimhäute im gesamten Körper – einschließlich der Vaginalschleimhaut. Bei Hypothyreose kommt es zu reduzierter Schleimhautdurchblutung und verminderter Lubrikation. Frauen mit suboptimal eingestelltem Hashimoto, deren TSH im oberen Normbereich liegt, berichten deutlich häufiger über urogenitale Trockenheitssymptome als gut eingestellte Patientinnen.",
      hormone:
        "Scheidentrockenheit im gebärfähigen Alter entsteht fast immer durch einen relativen Östrogenmangel – sei es durch Zyklusschwankungen, Stress-induzierte Unterdrückung der Östrogensynthese oder durch ein Ungleichgewicht zwischen Östrogen und Progesteron. Frauen mit ausgeprägtem PMS oder Östrogendominanz erleben diese Trockenheit oft in der zweiten Zyklushälfte. Orale Kontrazeptiva können ebenfalls eine Rolle spielen, da sie die endogene Östrogenproduktion und die Qualität des Zervixschleims beeinflussen.",
    },
    whenToSeeDoctor:
      "Bei anhaltenden Beschwerden, Schmerzen beim Geschlechtsverkehr (Dyspareunie), wiederkehrenden Infektionen oder Blutungen nach der Menopause. Lokale Östrogentherapie ist gut verträglich und sollte nicht aus Angst herausgezögert werden.",
    naturalRemedies: [
      "Lokale Östrogentherapie (Creme, Zäpfchen) – sehr effektiv, minimale Systemresorption",
      "Hyaluronsäure-Vaginalgel (nicht-hormonell, 2–3× wöchentlich)",
      "Gleitmittel auf Wasserbasis beim Geschlechtsverkehr",
      "Regelmäßige sexuelle Aktivität erhält die Durchblutung des vaginalen Gewebes",
      "Keine aggressiven Intimwaschlotionen – pH-neutrales Wasser reicht",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Ist Scheidentrockenheit ein Zeichen der Wechseljahre?",
        answer:
          "Scheidentrockenheit gehört zu den häufigsten Wechseljahresbeschwerden und tritt oft nach der Menopause auf oder verstärkt sich. Östrogen hält die Schleimhäute der Scheide feucht und elastisch. Ohne Behandlung verschlimmert sich vaginale Atrophie – im Gegensatz zu Hitzewallungen, die von selbst nachlassen.",
      },
      {
        question: "Was hilft am besten gegen Scheidentrockenheit?",
        answer:
          "Lokale Östrogenpräparate (Creme oder Zäpfchen) sind die effektivste Behandlung. Sie werden direkt ins Gewebe aufgenommen, die Resorption ins Blut ist minimal und gilt als sicher. Nicht-hormonelle Alternative: Hyaluronsäure-Vaginalgel mehrmals wöchentlich.",
      },
      {
        question: "Ist lokales Östrogen sicher bei Brustkrebs-Risiko?",
        answer:
          "Vaginale Östrogentherapie hat eine minimale systemische Absorption und wird von den meisten Fachgesellschaften als sicher eingestuft – auch für Frauen mit erhöhtem Brustkrebsrisiko oder nach Brustkrebs. Das sollte aber individuell mit dem behandelnden Onkologen besprochen werden.",
      },
      {
        question: "Kann Scheidentrockenheit mit Harnwegsinfekten zusammenhängen?",
        answer:
          "Ja. Vaginale Atrophie verändert den vaginalen pH, reduziert schützende Laktobazillen und macht die Schleimhäute anfälliger für Bakterien. Frauen mit wiederkehrenden Harnwegsinfekten nach der Menopause profitieren häufig von lokaler Östrogentherapie.",
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
      "Schilddrüsenunterfunktion – verlangsamt den Grundumsatz und die Wärmeproduktion in den Zellen",
      "Hashimoto Thyreoiditis als häufigste Ursache der Hypothyreose",
      "Ferritinmangel (Eisenmangel) – Eisen ist Co-Faktor der Thermogenese",
      "Niedriger Blutdruck reduziert periphere Durchblutung",
      "Untergewicht oder Essstörungen vermindern die Fettschutzschicht",
      "Raynaud-Syndrom bei emotionalem Stress oder Kälte",
    ],
    detailedExplanation:
      "Die Schilddrüse reguliert über T3 (das aktive Hormon) die Mitochondrienaktivität in jeder Körperzelle – einschließlich der Wärmeproduktion durch den Grundumsatz. Bei Hypothyreose produziert jede Zelle weniger Energie und damit weniger Wärme. Das Frieren ist deshalb kein subjektives Gefühl, sondern eine messbare Konsequenz reduzierten Zellstoffwechsels. Klassische Begleitzeichen, die auf Schilddrüse hinweisen: Frieren besonders der Hände und Füße, kühle trockene Haut, langsamer Herzschlag, Verstopfung, Gewichtszunahme.\n\nBei Ferritinmangel entsteht Kälteempfindlichkeit über einen anderen Mechanismus: Eisen ist essentiell für den Sauerstofftransport im Blut und als Co-Faktor von Enzymen der Energieproduktion. Frauen mit Ferritin unter 30–50 µg/l berichten häufig von Frieren, kalten Extremitäten und Frösteln – auch bei normalem Hämoglobin. Das ist ein weiteres Beispiel dafür, dass 'normales Blutbild' nicht 'kein Problem' bedeutet.",
    diagnosticTests: [
      { test: "TSH + fT3 + fT4", relevance: "TSH allein nicht ausreichend – fT3 ist das wärmeproduzierende aktive Hormon" },
      { test: "Anti-TPO-Antikörper", relevance: "Hashimoto als Ursache der Hypothyreose identifizieren" },
      { test: "Ferritin + Hämoglobin", relevance: "Eisenmangel auch bei normalem Blutbild durch Ferritin unter 50 µg/l" },
      { test: "Blutdruck + Herzfrequenz", relevance: "Bradykardie (langsamer Puls) ist ein klassisches Hypothyreose-Zeichen" },
    ],
    whenToSeeDoctor:
      "Bei anhaltendem Frieren, das von Müdigkeit, Gewichtszunahme, Haarausfall oder trockener Haut begleitet wird. Diese Kombination ist der klassische Hinweis auf Schilddrüsenunterfunktion und erfordert eine vollständige Abklärung.",
    naturalRemedies: [
      "TSH, fT3, fT4 und TPO-Antikörper testen lassen – vollständig, nicht nur TSH",
      "Ferritin auf >70 µg/l optimieren – oft unterschätzter Faktor",
      "Bewegung und Sport zur Förderung der Durchblutung und Thermogenese",
      "Selen 200 µg täglich bei Hashimoto (verbessert T4→T3-Konversion)",
      "Warm essen: Thermogene Gewürze (Ingwer, Zimt, Cayennepfeffer) unterstützen die Durchblutung",
    ],
    relatedConditions: ["hashimoto", "schilddruese"],
    faqs: [
      {
        question: "Warum friere ich immer, obwohl es anderen nicht kalt ist?",
        answer:
          "Ständige Kälteempfindlichkeit ist oft ein Zeichen einer Schilddrüsenunterfunktion. Die Schilddrüse reguliert über T3 den Grundumsatz – die Wärmeproduktion jeder Zelle. Ist sie unteraktiv, entsteht zu wenig Wärme. Ein vollständiger Schilddrüsentest (TSH + fT3 + fT4 + Antikörper) klärt die Ursache.",
      },
      {
        question: "Kann Hashimoto dazu führen, dass man immer friert?",
        answer:
          "Ja. Hashimoto führt häufig zu Hypothyreose, die die Wärmeregulation beeinträchtigt. Mit korrekter L-Thyroxin-Einstellung (TSH 0,5–2,0 mU/L, fT3 im oberen Normbereich) verbessert sich die Kälteempfindlichkeit meist deutlich.",
      },
      {
        question: "Kann Frieren auch an Eisenmangel liegen?",
        answer:
          "Ja. Eisen ist essentiell für Sauerstofftransport und Energieproduktion. Frauen mit Ferritin unter 30–50 µg/l berichten häufig von Frieren und kalten Extremitäten – auch wenn das Blutbild noch normal ist. Ferritin testen und ggf. auf >70 µg/l erhöhen.",
      },
      {
        question: "Was ist der Unterschied zwischen Raynaud-Syndrom und hormonellem Frieren?",
        answer:
          "Beim Raynaud-Syndrom verfärben sich Finger und Zehen bei Kälte oder Stress weiß-blau-rot (Dreiphasig). Es ist eine vasospastische Erkrankung, die bei Autoimmunerkrankungen wie Hashimoto häufiger vorkommt. Hormonelles Frieren (Hypothyreose, Eisenmangel) ist diffus – der ganze Körper friert, ohne Farbveränderungen.",
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
      "Schilddrüsenunterfunktion – T3-Mangel verlangsamt die Darmperistaltik (Darmbewegung)",
      "Progesteronabfall in der Perimenopause – Progesteron entspannt glatte Muskulatur, inklusive Darm",
      "Dehydration reduziert den Wassergehalt des Stuhls",
      "Ballaststoffmangel in der Ernährung",
      "Bewegungsmangel verlangsamt die Darmpassage",
      "Eisenpräparate und Kalzium als medikamentöse Ursache",
    ],
    detailedExplanation:
      "Die Verbindung zwischen Schilddrüsenunterfunktion und Verstopfung ist direkt und gut dokumentiert: T3 (das aktive Schilddrüsenhormon) stimuliert die glatte Darmmuskulatur zur Peristaltik – den wellenförmigen Bewegungen, die den Nahrungsbrei vorwärts schieben. Bei Hypothyreose verlangsamt sich diese Peristaltik, Nahrung verweilt länger im Darm, Wasser wird übermäßig resorbiert, der Stuhl wird hart und trocken. Verstopfung ist deshalb eines der klassischen Hypothyreose-Symptome und sollte immer an eine Schilddrüsenabklärung denken lassen – besonders wenn sie mit Müdigkeit, Frieren und Gewichtszunahme kombiniert auftritt.\n\nIn der Perimenopause kommt ein weiterer Mechanismus hinzu: Progesteron entspannt glatte Muskulatur – was während der Schwangerschaft nützlich (verhindert Frühwehen), aber für die Verdauung ungünstig ist. In der Lutealphase (erhöhtes Progesteron) haben viele Frauen eine trägere Verdauung. Wenn Progesteron in der Perimenopause unregelmäßig schwankt, schwankt auch die Verdauung. Dieser Zusammenhang wird selten erkannt, weil die Zykluskorrelation von Ärzten nicht erfragt wird.",
    diagnosticTests: [
      { test: "TSH + fT3 + fT4", relevance: "Hypothyreose ausschließen – klassische Ursache chronischer Verstopfung bei Frauen" },
      { test: "Anti-TPO-Antikörper", relevance: "Hashimoto als häufigste Hypothyreose-Ursache identifizieren" },
      { test: "Schilddrüsen-Ultraschall", relevance: "Bei erhöhten Antikörpern: echoarmes Gewebe als typisches Hashimoto-Bild" },
      { test: "Kalzium + Magnesium", relevance: "Zu viel Kalzium oder zu wenig Magnesium verursacht Darmträgheit" },
    ],
    comparisonTable: {
      caption: "Verstopfung durch hormonelle Ursachen: Vergleich",
      headers: ["Hypothyreose (Hashimoto)", "Perimenopause", "Andere Ursachen"],
      rows: [
        {
          aspect: "Mechanismus",
          values: [
            "T3-Mangel verlangsamt die Darmperistaltik direkt",
            "Progesteronschwankungen entspannen glatte Darmmuskulatur (besonders Lutealphase)",
            "Ballaststoffmangel, Flüssigkeitsmangel, Bewegungsmangel",
          ],
        },
        {
          aspect: "Typische Begleitsymptome",
          values: [
            "Müdigkeit, Frieren, Gewichtszunahme, trockene Haut, Haarausfall",
            "Hitzewallungen, Schlafstörungen, Stimmungsschwankungen",
            "Keine spezifischen hormonellen Begleitsymptome",
          ],
        },
        {
          aspect: "Zeitverlauf",
          values: [
            "Chronisch-schleichend, über Monate konstant",
            "Zyklusgebunden: schlimmer in der Lutealphase, besser nach Periode",
            "Situativ, direkt abhängig von Ernährung und Bewegung",
          ],
        },
        {
          aspect: "Schlüsselbefund im Labor",
          values: [
            "TSH erhöht (> 2,5 mU/L), fT3 erniedrigt, Anti-TPO positiv",
            "FSH erhöht (> 10 IU/L bei Perimenopause), Östradiol niedrig",
            "Schilddrüsen- und Hormonwerte im Normbereich",
          ],
        },
        {
          aspect: "Erste Behandlungsmaßnahme",
          values: [
            "Schilddrüsenmedikation optimieren (L-Thyroxin-Dosierung anpassen)",
            "Ernährung, Bewegung, ggf. Progesteron-Unterstützung in der Lutealphase",
            "Ballaststoffe erhöhen, mehr Wasser, regelmäßige Bewegung, Magnesium",
          ],
        },
      ],
    },
    research: [
      {
        finding:
          "Verstopfung tritt bei bis zu 50 % aller Frauen mit unbehandelter Hypothyreose auf. Schilddrüsenhormone (T3) stimulieren die glatte Darmmuskulatur direkt; bei T3-Mangel verlängert sich die intestinale Transitzeit messbar um bis zu 50 %.",
        citation:
          "Bianchi A et al. (2022). Gastrointestinal manifestations of hypothyroidism: systematic review. World Journal of Gastroenterology.",
      },
      {
        finding:
          "In der Colorado Thyroid Disease Prevalence Study (n > 25.000) berichteten Frauen mit subklinischer Hypothyreose (TSH 2,5–10 mU/L) signifikant häufiger über chronische Obstipation als euthyreote Frauen – selbst ohne manifeste Schilddrüsenunterfunktion.",
        citation:
          "Canaris GJ et al. (2000). The Colorado Thyroid Disease Prevalence Study. Archives of Internal Medicine.",
      },
      {
        finding:
          "Progesteron entspannt glatte Muskelzellen im Gastrointestinaltrakt und verlangsamt die Magenentleerung. Dieser Effekt erklärt die häufige Verstopfung in der Schwangerschaft und der progesteronreichen Lutealphase – und die trägere Verdauung in perimenopausalen Umbruchphasen.",
        citation:
          "Casey ML & MacDonald PC (1996). The endocrinology of gastrointestinal motility. Seminars in Perinatology.",
      },
    ],
    whenToSeeDoctor:
      "Bei Blut im Stuhl, starken Bauchschmerzen, ungewolltem Gewichtsverlust oder wenn Verstopfung länger als 3 Wochen anhält. Auch wenn chronische Verstopfung von Müdigkeit, Frieren und Gewichtszunahme begleitet wird – dann immer Schilddrüse abklären.",
    naturalRemedies: [
      "Mindestens 2 Liter Wasser täglich – Stuhlkonsistenz ist direkt wasserabhängig",
      "Ballaststoffe schrittweise erhöhen (Flohsamenschalen, Leinsamen, Hülsenfrüchte)",
      "Regelmäßige Bewegung aktiviert die Darmperistaltik",
      "Magnesiumcitrat oder Magnesiumoxid abends (osmotisch wirksam, zieht Wasser in den Darm)",
      "Schilddrüse optimal einstellen lassen – oft der entscheidende Hebel bei chronischer Verstopfung",
    ],
    relatedConditions: ["hashimoto", "schilddruese"],
    faqs: [
      {
        question: "Kann Hashimoto Verstopfung verursachen?",
        answer:
          "Ja. Bei Hashimoto-bedingter Schilddrüsenunterfunktion verlangsamt sich der Stoffwechsel, inklusive der Darmperistaltik. Verstopfung ist eines der klassischen Symptome einer Hypothyreose. Mit korrekter Einstellung der Schilddrüsenwerte (TSH 0,5–2,0 mU/L, ausreichend fT3) normalisiert sich die Verdauung meist.",
      },
      {
        question: "Was hilft schnell gegen Verstopfung?",
        answer:
          "Kurzfristig: viel Wasser trinken, Bewegung, Flohsamenschalen mit reichlich Flüssigkeit, Magnesiumcitrat (500 mg abends). Bei chronischer Verstopfung mit Müdigkeit und Frieren immer die Schilddrüse abklären – Laxantien behandeln nur das Symptom, nicht die Ursache.",
      },
      {
        question: "Warum haben viele Frauen vor der Periode Verstopfung?",
        answer:
          "Progesteron in der zweiten Zyklushälfte entspannt glatte Darmmuskulatur – das verlangsamt die Verdauung. Viele Frauen berichten von Verstopfung in der Lutealphase und Durchfall zu Beginn der Menstruation (wenn Prostaglandine freigesetzt werden). Das ist physiologisch normal, kann aber bei starkem PMS behandelt werden.",
      },
      {
        question: "Kann Magnesium bei Verstopfung helfen?",
        answer:
          "Ja. Magnesiumoxid und Magnesiumcitrat wirken osmotisch: Sie ziehen Wasser in den Darm und machen den Stuhl weicher. Magnesiumglycinat wirkt milder und ist besser verträglich. 300–400 mg abends ist ein guter Einstieg. Magnesium hat den Vorteil, gleichzeitig Schlaf und Muskelentspannung zu verbessern.",
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
      "Trockene Haut & trockene Ellenbogen durch Hormone: Schilddrüsenunterfunktion (Hashimoto) und Wechseljahre als häufige Ursachen. Diagnose, Tests & was wirklich hilft.",
    causes: [
      "Schilddrüsenunterfunktion – T3-Mangel reduziert Talgdrüsenaktivität und Hauterneuerungsrate",
      "Trockene, raue Ellenbogen – klassisches Frühzeichen der Hypothyreose durch verlangsamte Keratinisierung",
      "Östrogenabfall – Östrogen fördert Kollagenproduktion und Hautfeuchtigkeit",
      "Vitamin-D- und Omega-3-Mangel beeinträchtigen die Hautbarriere",
      "Dehydration durch zu wenig Flüssigkeit",
      "Übermäßig heißes Duschen entzieht der Haut natürliche Lipide",
    ],
    detailedExplanation:
      "Die Haut ist ein hormonabhängiges Organ mit Rezeptoren für Östrogen, Testosteron und Schilddrüsenhormone. Östrogen stimuliert die Kollagensynthese, fördert die Hyaluronsäureproduktion (die Feuchtigkeit bindet) und reguliert die Talgdrüsenaktivität. Wenn Östrogen fällt, verliert die Haut innerhalb weniger Jahre erheblich an Kollagen: Studien zeigen einen Kollagenverlust von 30 % in den ersten 5 Jahren nach der Menopause. Gleichzeitig verdunstet mehr Wasser aus der Haut (erhöhter transepidermaler Wasserverlust).\n\nBei Hashimoto-bedingter Hypothyreose entsteht trockene Haut durch einen anderen Mechanismus: T3-Mangel verlangsamt die Hauterneuerungsrate (der Zellzyklus der Keratinozyten), reduziert die Talgdrüsenproduktion und kann zu Muzineinlagerungen in der Haut führen (Myxödem). Klassische Zeichen: raue, leicht schuppige Haut besonders an Ellenbogen und Unterschenkeln, Juckreiz ohne sichtbare Hautveränderung, kühle Haut durch verminderter Durchblutung.",
    diagnosticTests: [
      { test: "TSH + fT3 + Anti-TPO", relevance: "Schilddrüsenunterfunktion bei trockener Haut immer ausschließen" },
      { test: "Östradiol + FSH", relevance: "Östrogenabfall erklärt altersassoziierte Hauttrockenheit und Kollagenverlust" },
      { test: "Vitamin D (25-OH)", relevance: "Vitamin D ist essenziell für Hautbarrierefunktion und Immunmodulation" },
      { test: "Omega-3-Index (optional)", relevance: "EPA/DHA-Mangel beeinträchtigt die Hautlipidbarriere messbar" },
    ],
    conditionIntros: {
      schilddruese:
        "Trockene Haut ist eines der am häufigsten genannten Symptome bei Schilddrüsenunterfunktion (Hypothyreose) und oft ein Frühzeichen der Erkrankung. Schilddrüsenhormone steuern die Talgdrüsenaktivität, die Keratinisierungsrate der Haut und die Durchblutung peripherer Gefäße. Fällt T3 ab, produziert die Haut weniger Talg und Feuchtigkeit, die Zellerneuerung verlangsamt sich – die Haut wird rau, schuppig und juckend. Charakteristisch für Hypothyreose-bedingte Hauttrockenheit ist die Kombination mit Kältegefühl, geschwollenem Gesicht und brüchigen Nägeln.",
      hashimoto:
        "Trockene Haut – besonders an Ellenbogen, Unterschenkeln und Händen – gehört zu den häufigsten Frühzeichen von Hashimoto. Die Autoimmunerkrankung führt über T3-Mangel zu einer verlangsamten Hauterneuerungsrate: Alte Hornzellen werden nicht schnell genug abgestoßen, die Haut verdickt sich und fühlt sich rau und schuppig an. Besonders die Ellenbogen sind charakteristisch betroffen, da dort die Haut ohnehin wenig Talgdrüsen hat und die Durchblutung gering ist. Wenn trockene, raue Ellenbogen mit Müdigkeit, Frieren oder Gewichtszunahme kombiniert auftreten, sollte eine Schilddrüsenuntersuchung (TSH, fT3, Anti-TPO) erfolgen.",
    },
    whenToSeeDoctor:
      "Bei extremer Hauttrockenheit, starkem Juckreiz, Hautrötungen oder wenn die Haut trotz guter Pflege sehr rau bleibt. Schilddrüsenwerte überprüfen, wenn Hauttrockenheit mit Müdigkeit, Frieren oder Gewichtszunahme kombiniert auftritt.",
    naturalRemedies: [
      "Reichhaltige Feuchtigkeitscremes mit Urea (10 %) oder Hyaluronsäure direkt nach dem Duschen auftragen",
      "Lauwarmes statt heißes Wasser beim Duschen (erhält natürliche Hautlipide)",
      "Omega-3-Fettsäuren (2 g EPA/DHA täglich) – stärken die Hautbarriere von innen",
      "Vitamin D auf 40–60 ng/ml optimieren",
      "Schilddrüsenwerte und Östrogenstatus abklären lassen",
    ],
    relatedConditions: ["hashimoto", "menopause"],
    faqs: [
      {
        question: "Kann Hashimoto trockene Haut verursachen?",
        answer:
          "Ja. Die Schilddrüse reguliert den Hautstoffwechsel direkt. Bei Hypothyreose durch Hashimoto wird die Talgdrüsenaktivität reduziert, die Hauterneuerungsrate verlangsamt sich und der Wasserverlust durch die Haut steigt. Mit korrekter Einstellung bessert sich die Hauttrockenheit deutlich.",
      },
      {
        question: "Warum wird die Haut in den Wechseljahren trockener?",
        answer:
          "Östrogen fördert die Kollagenproduktion und Hyaluronsäuresynthese in der Haut. In den ersten 5 Jahren nach der Menopause geht etwa 30 % des Hauthkollagen verloren. Hormontherapie kann diesen Prozess verlangsamen. Topisch helfen Feuchtigkeitscremes und Omega-3-Supplementierung.",
      },
      {
        question: "Was hilft wirklich gegen trockene Haut durch Hormone?",
        answer:
          "Die Ursache behandeln ist wichtiger als Symptombekämpfung: Schilddrüse korrekt einstellen, Vitamin D und Omega-3 optimieren, bei Östrogenmangel Hormontherapie erwägen. Topisch: Urea-haltige Cremes (10–15 %) haben die stärkste Evidenz für trockene Haut; morgens und abends nach dem Duschen auftragen.",
      },
      {
        question: "Kann Juckreiz ohne sichtbare Hautveränderungen hormonell bedingt sein?",
        answer:
          "Ja. Sensorischer Juckreiz ohne Ausschlag (Pruritus sine materia) ist ein bekanntes Symptom der Hypothyreose und des Östrogenabfalls. Der Mechanismus ist komplex: Nervenenden in der Haut reagieren empfindlicher bei Hautatrophie und Trockenheit, ohne dass es zu sichtbaren Veränderungen kommt. Schilddrüse und Hormone abklären.",
      },
      {
        question: "Was bedeuten trockene Ellenbogen in Zusammenhang mit der Schilddrüse?",
        answer:
          "Trockene, raue oder schuppige Ellenbogen sind ein klassisches Frühzeichen der Schilddrüsenunterfunktion (Hypothyreose) und Hashimoto. Die Ellenbogen haben besonders wenig Talgdrüsen und sind mechanisch beansprucht – bei verlangsamter Hauterneuerungsrate durch T3-Mangel verdickt sich die Hornschicht sichtbar. Wenn die Ellenbogen trotz guter Pflege dauerhaft rau bleiben und gleichzeitig Müdigkeit, Frieren oder Gewichtszunahme auftreten, sollte der TSH-Wert bestimmt werden.",
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
      "Androgenüberschuss (erhöhtes Testosteron, DHEA-S) stimuliert Talgdrüsen",
      "Progesteronmangel und relative Östrogendominanz",
      "PCOS (polyzystisches Ovarsyndrom) mit Androgenüberschuss",
      "Insulinresistenz erhöht IGF-1, das Talgdrüsen stimuliert",
      "Absetzen der Antibabypille (vorübergehende Androgenerhöhung)",
    ],
    detailedExplanation:
      "Hormonelle Akne entsteht, wenn Androgene (Testosteron, DHEA-S, DHT) die Talgdrüsen überstimulieren und gleichzeitig die Hautzellerneuerung beschleunigen – was die Poren verstopft. Der typische Lokalisationsort im Kinn- und Kieferbereich erklärt sich durch die höhere Dichte an Androgenrezeptoren in diesem Bereich. Hormonschwankungen in der zweiten Zyklushälfte (Progesteronabfall, kurzzeitiger Androgenanstieg) verschlimmern die Akne typischerweise kurz vor der Periode.\n\nInsulinresistenz ist ein unterschätzter Faktor: Hoher Insulinspiegel stimuliert IGF-1 (Insulin-like Growth Factor), der wiederum Talgdrüsenaktivität und Hautzellteilung erhöht. Das erklärt, warum Ernährung (insbesondere Zucker und verarbeitete Kohlenhydrate) die hormonelle Akne so stark beeinflusst. Auch das Absetzen der Antibabypille kann zu einem vorübergehenden 'Androgenrebound' führen: Die Pille unterdrückt die ovariellen Androgene; nach dem Absetzen übersteigen die körpereigenen Androgene kurzzeitig das Gleichgewicht, bevor es sich normalisiert.",
    diagnosticTests: [
      { test: "Testosteron (Gesamt + frei) + DHEA-S + SHBG", relevance: "Androgenüberschuss als Hauptursache identifizieren" },
      { test: "LH/FSH-Verhältnis", relevance: "Bei PCOS typisch erhöhtes LH:FSH-Verhältnis (>2:1)" },
      { test: "Nüchterninsulin + HbA1c", relevance: "Insulinresistenz als Akne-Treiber diagnostizieren" },
      { test: "Östradiol + Progesteron (Lutealphase)", relevance: "Relative Östrogendominanz durch Progesteronmangel erkennen" },
    ],
    whenToSeeDoctor:
      "Bei persistierender Akne nach dem 25. Lebensjahr, besonders im Kinn- und Kieferbereich, sollte ein Hormonpanel gemacht werden. Bei starker Akne mit Zysten oder Narbenbildung ist Dermatologie und Gynäkologie gefragt.",
    naturalRemedies: [
      "Zuckerarme Ernährung reduziert Insulinspiegel und IGF-1",
      "Zink (25–30 mg täglich) – anti-androgen und anti-entzündlich, gut belegt",
      "Spearmint-Tee (2 Tassen täglich) hat in kleinen Studien anti-androgene Wirkung",
      "Stressmanagement: Cortisol erhöht Androgenproduktion in den Nebennieren",
      "Hormonpanel testen lassen, bevor mit Topika behandelt wird",
    ],
    relatedConditions: ["hormone"],
    faqs: [
      {
        question: "Was ist hormonelle Akne und woran erkenne ich sie?",
        answer:
          "Hormonelle Akne tritt meist im unteren Gesichtsdrittel auf – Kinn, Kiefer, Hals. Sie ist oft zyklusabhängig (schlimmer vor der Periode), tritt bei Frauen im Erwachsenenalter auf und spricht schlecht auf normale Aknetherapien (Benzoylperoxid, Salicylsäure) an. Typisch sind tiefe, entzündliche Knötchen und Zysten.",
      },
      {
        question: "Welche Hormone verursachen Akne bei Frauen?",
        answer:
          "Hauptursache ist ein relativer oder absoluter Androgenüberschuss (Testosteron, DHEA-S). Auch Östrogendominanz durch Progesteronmangel und Insulinresistenz spielen eine Rolle. Ein vollständiges Hormonpanel (Testosteron, SHBG, LH/FSH, Insulin) zeigt die Ursache.",
      },
      {
        question: "Kann die Pille beim Absetzen Akne auslösen?",
        answer:
          "Ja – 'post-pill acne' ist ein bekanntes Phänomen. Die Pille unterdrückt ovarielle Androgene; nach dem Absetzen erhöhen sich körpereigene Androgene vorübergehend, bevor das Gleichgewicht wiederhergestellt ist. Dieser Effekt kann 3–6 Monate andauern.",
      },
      {
        question: "Was hilft am besten gegen hormonelle Akne ohne Pille?",
        answer:
          "Zuckerarme Ernährung, Zink, Spearmint-Tee und Stressreduktion sind erste Maßnahmen. Bei Androgenüberschuss verschreibt der Gynäkologe anti-androgene Medikamente (Spironolacton, Cyproteronacetat). Wichtig: Ursache identifizieren, nicht nur Symptome bekämpfen.",
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
      "Progesteronabfall in der Lutealphase verringert GABA-A-Aktivität im Gehirn",
      "Serotoninmangel – Östrogenschwankungen beeinflussen die Serotoninproduktion",
      "Magnesiummangel verstärkt PMS-Symptome über mehrere Wege",
      "Chronischer Stress (erhöhtes Cortisol) konkurriert mit Progesteron",
      "Überempfindlichkeit gegenüber normalen Hormonschwankungen",
    ],
    detailedExplanation:
      "PMS entsteht nicht durch zu viel oder zu wenig Hormone per se, sondern durch die Überempfindlichkeit des Gehirns auf den normalen Abfall von Progesteron und Östrogen am Ende des Zyklus. Die wichtigste Rolle spielt dabei das Neurosteroid Allopregnanolon: Es entsteht aus Progesteron und wirkt als positiver allosterischer GABA-A-Modulator – ähnlich wie Benzodiazepine. Wenn Progesteron fällt, fällt auch Allopregnanolon, was das Nervensystem destabilisiert. Frauen mit PMDD (schwerer PMS-Form) haben eine genetisch bedingte Überempfindlichkeit gegenüber diesem Abfall.\n\nEin weiterer wichtiger Mechanismus: Östrogen ist ein indirekter Serotonin-Verstärker. In der ersten Zyklushälfte (hohem Östrogen) ist die Serotoninfunktion gut. In der zweiten Hälfte, wenn Östrogen fällt und Progesteron dominiert, nimmt die serotonerge Aktivität ab. Bei Frauen mit ohnehin niedrigerem Serotoninumsatz führt dieser Abfall zu PMS-typischen Stimmungssymptomen. Deshalb wirken SSRIs (die nur in der zweiten Zyklushälfte genommen werden) bei PMDD gut.",
    diagnosticTests: [
      { test: "Progesteron (Tag 19–22 des Zyklus)", relevance: "Muss in der Lutealphase gemessen werden; Zielwert >10 ng/ml für symptomfreie Lutealphase" },
      { test: "Östradiol (Tag 3–5 und Tag 19–22)", relevance: "Östrogendominanz durch Vergleich von Follikel- und Lutealphase erkennen" },
      { test: "FSH + LH (Tag 3–5)", relevance: "Ovarialfunktion und beginnende Perimenopause als Ursache stärkerer PMS-Symptome" },
      { test: "Magnesium (intrazellulär)", relevance: "Intrazellulärer Magnesiummangel (nicht Serum!) bei PMS sehr häufig" },
    ],
    whenToSeeDoctor:
      "Bei schweren PMS-Symptomen, die den Alltag erheblich beeinträchtigen (PMDS – prämenstruelle Dysphorie). Symptomtagebuch über 2 Zyklen führen und mit der Gynäkologin besprechen.",
    naturalRemedies: [
      "Magnesium 300–400 mg täglich (besonders in der zweiten Zyklushälfte) – beste Einzelmaßnahme",
      "Vitamin B6 (50–100 mg täglich) – senkt PMS-Symptome laut Meta-Analysen signifikant",
      "Regelmäßiger Ausdauersport erhöht Serotonin und GABA",
      "Mönchspfeffer (Agnus castus, 20–40 mg täglich) – Meta-Analysen zeigen Wirksamkeit bei PMS",
      "Zucker, Alkohol und Koffein in der zweiten Zyklushälfte reduzieren",
    ],
    relatedConditions: ["hormone"],
    faqs: [
      {
        question: "Was sind typische PMS-Symptome?",
        answer:
          "PMS-Symptome treten in der Woche vor der Menstruation auf: Stimmungsschwankungen, Reizbarkeit, Traurigkeit, Brustspannen, Blähungen, Kopfschmerzen, Heißhunger auf Süßes und Wassereinlagerungen. Sie verschwinden mit Einsetzen der Blutung – dieser zeitliche Zusammenhang ist diagnostisch wichtig.",
      },
      {
        question: "Was hilft am besten gegen PMS?",
        answer:
          "Am effektivsten: Magnesium und Vitamin B6, regelmäßiger Sport, Mönchspfeffer und Stressreduktion. Bei schweren Symptomen (PMDD): SSRIs in der Lutealphase oder bioidentisches Progesteron. Ursache abklären lassen – Progesteronmangel und beginnendes Perimenopause-Profil werden häufig nicht erkannt.",
      },
      {
        question: "Kann PMS stärker werden mit zunehmendem Alter?",
        answer:
          "Ja. Viele Frauen berichten, dass PMS in den 30ern und 40ern intensiver wird. Das liegt an beginnenden Hormonschwankungen der Perimenopause: Progesteron sinkt als erstes, was die Lutealphase instabiler macht. Wenn PMS deutlich stärker wird, könnten erste Perimenopause-Veränderungen dahinterstecken.",
      },
      {
        question: "Was ist der Unterschied zwischen PMS und PMDD?",
        answer:
          "PMS (prämenstruelles Syndrom) umfasst körperliche und psychische Symptome, die den Alltag belasten aber überwindbar sind. PMDD (prämenstruelle Dysphorische Störung) ist eine schwere Form mit klinisch relevanter Depression, extremer Reizbarkeit und erheblicher Beeinträchtigung. PMDD erfordert ärztliche Behandlung, oft SSRIs oder Hormontherapie.",
      },
    ],
  },
};
