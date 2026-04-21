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

  herzrasen: {
    slug: "herzrasen",
    name: "Herzrasen",
    nameFull: "Herzrasen & Herzstolpern (Palpitationen)",
    description:
      "Herzrasen, Herzstolpern oder ein unregelmäßiger Herzschlag ohne erkennbaren Auslöser sind häufige Begleitsymptome hormoneller Schwankungen – besonders in der Perimenopause und bei Schilddrüsenerkrankungen.",
    metaDescription:
      "Herzrasen bei Frauen: Warum Hormonschwankungen, Perimenopause und Schilddrüsenprobleme den Herzschlag beeinflussen – und wann es ernst wird.",
    causes: [
      "Östrogenabfall in der Perimenopause verändert das Gleichgewicht des autonomen Nervensystems zugunsten des Sympathikus",
      "Schilddrüsenüberfunktion (Hyperthyreose) beschleunigt den Herzschlag direkt über T3-Rezeptoren am Herzen",
      "Progesteronmangel erhöht die sympathische Aktivität und verringert den dämpfenden GABA-Effekt",
      "Niedrige Elektrolyte (Magnesium, Kalium) durch hormonell bedingte Ausscheidungsveränderungen",
      "Chronischer Stress und erhöhtes Cortisol aktivieren das sympathische Nervensystem dauerhaft",
      "Eisenmangel (häufig bei Frauen mit starken Periodenblutungen) führt zur kompensatorischen Herzfrequenzerhöhung",
    ],
    detailedExplanation:
      "Östrogen wirkt kardioprotektiv auf mehrere Wege: Es moduliert die Aktivität von Ionenkanälen im Herzmuskel, beeinflusst das Renin-Angiotensin-System und hat direkte vasodilatatorische Effekte. Wenn der Östrogenspiegel in der Perimenopause sinkt oder stark schwankt, verliert das Herz-Kreislauf-System diese regulierende Wirkung. Das Resultat: eine erhöhte Sensitivität des Herzens gegenüber adrenergen Reizen, was sich als Palpitationen, Herzstolpern oder anfallsartiges Herzrasen äußert – besonders nachts oder im Zusammenhang mit Hitzewallungen.\n\nBei Schilddrüsenüberfunktion wirkt T3 direkt auf myokardiale Beta-Rezeptoren und erhöht sowohl Herzfrequenz als auch Kontraktionskraft. Selbst eine subklinische Hyperthyreose (TSH erniedrigt, T3/T4 noch normal) kann Palpitationen verursachen. Bei Hashimoto gibt es beide Extreme: Während Schüben mit temporärer Hyperthyreose können Palpitationen auftreten, bei Hypothyreose verlangsamter Puls und Belastungsdyspnoe.",
    diagnosticTests: [
      { test: "TSH, fT3, fT4", relevance: "Schilddrüsenüberfunktion als häufige, gut behandelbare Ursache ausschließen – besonders bei Herzrasen mit Gewichtsverlust und Wärmeempfindlichkeit" },
      { test: "FSH + Östradiol", relevance: "Perimenopausalen Status bestimmen; starke Östrogenschwankungen korrelieren mit Palpitationshäufigkeit" },
      { test: "Magnesium (intrazellulär) + Kalium", relevance: "Elektrolytmangel als direkte Ursache von Herzrhythmusstörungen ausschließen" },
      { test: "Ferritin + Hämoglobin", relevance: "Eisenmangel-Anämie führt zu kompensatorischer Herzfrequenzerhöhung; Ferritin <30 ng/ml ist bereits funktionell relevant" },
      { test: "EKG (bei anhaltendem Herzrasen)", relevance: "Vorhofflimmern und andere Arrhythmien ausschließen – Überweisung zum Kardiologen bei Unregelmäßigkeiten" },
    ],
    conditionIntros: {
      menopause:
        "Herzrasen und Herzstolpern sind in der Perimenopause stark unterdiagnostiziert. Laut SWAN-Studie berichten über 40 % der Perimenopause-Frauen von Palpitationen – oft in Kombination mit Hitzewallungen oder nachts. Der Mechanismus: Der Östrogenabfall verändert das sympathovagale Gleichgewicht des autonomen Nervensystems und macht das Herz empfindlicher gegenüber adrenergen Stimuli. Viele Frauen werden mit Herzangst oder Panikattacken fehldiagnostiziert, bevor der hormonelle Zusammenhang erkannt wird.",
      hashimoto:
        "Bei Hashimoto kann Herzrasen in zwei sehr unterschiedlichen Kontexten auftreten: Bei einem Hashimoto-Schub mit vorübergehender Entzündungsthyreoiditis werden kurzfristig erhöhte Schilddrüsenhormone freigesetzt, was Palpitationen, Herzrasen und innere Unruhe verursacht. Bei einer bestehenden Hypothyreose unter Medikation kann eine zu hohe L-Thyroxin-Dosis ebenfalls Herzrasen auslösen. Die Dosiskontrolle über TSH-Messungen ist daher essenziell.",
      schilddruese:
        "Schilddrüsenhormone wirken direkt auf Beta-Rezeptoren am Herzmyokard. Bei Hyperthyreose (Schilddrüsenüberfunktion) ist Herzrasen oft das erste und auffälligste Symptom – manchmal in Kombination mit Vorhofflimmern. Das Herzrasen bei Schilddrüsenüberfunktion ist typischerweise anhaltend (nicht anfallsartig), verschlimmert sich bei Belastung und geht mit anderen Symptomen wie Gewichtsverlust, Wärmeempfindlichkeit und Zittern einher.",
      hormone:
        "Im Kontext von Hormonstörungen ist Herzrasen ein häufiges, aber wenig bekanntes Begleitsymptom. Bei Östrogendominanz, stark schwankenden Östrogenspiegeln oder Progesteronmangel kann das autonome Nervensystem destabilisiert werden. Besonders in der zweiten Zyklushälfte (Lutealphase), wenn Progesteron abnimmt, berichten viele Frauen von Herzstolpern und einem beschleunigten Herzschlag – oft zusammen mit Angstgefühlen und Schlafstörungen.",
    },
    whenToSeeDoctor:
      "Sofort zum Arzt: Bei anhaltendem Herzrasen >30 Minuten, Herzrasen mit Schwindel, Ohnmacht, Brustschmerzen oder Atemnot. Zeitnah: Bei regelmäßig wiederkehrendem Herzrasen ohne erklärbaren Auslöser, besonders wenn neu aufgetreten. Ein EKG und TSH-Wert sind immer sinnvoll.",
    naturalRemedies: [
      "Magnesium (400 mg täglich, abends) – stabilisiert Herzrhythmus und reduziert sympathische Überaktivität",
      "Stressreduktion: Cortisol ist ein starker Herzfrequenz-Treiber; Meditation, Yoga und HRV-Training helfen nachweislich",
      "Koffein und Alkohol reduzieren – beide erhöhen die adrenerge Aktivität und senken die Reizschwelle für Palpitationen",
      "Regelmäßiger Ausdauersport verbessert die Herzratenvariabilität (HRV) und das autonome Gleichgewicht",
      "Östrogen- und Progesteronstatus abklären lassen: HRT oder bioidentisches Progesteron kann Palpitationen in der Perimenopause effektiv reduzieren",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Kann Herzrasen ein Wechseljahre-Symptom sein?",
        answer:
          "Ja – Palpitationen sind ein klassisches, aber oft übersehenes Wechseljahressymptom. In der SWAN-Studie berichteten über 40 % der Perimenopause-Frauen davon. Der Mechanismus: Östrogenabfall destabilisiert das autonome Nervensystem. Nach Ausschluss kardialer Ursachen (EKG, Schilddrüse) sollte immer der perimenopausale Hormonstatus geprüft werden.",
      },
      {
        question: "Was hilft gegen Herzrasen in den Wechseljahren?",
        answer:
          "Zunächst kardinale Ursachen ausschließen (EKG, TSH). Dann: Magnesium 400 mg abends, Koffein und Alkohol reduzieren, Stressmanagement. Bei hormonal bedingten Palpitationen kann Progesteron (bioidentisch) helfen, da es den dämpfenden GABA-Effekt auf das Nervensystem stärkt. HRT kann Palpitationen bei vielen Frauen deutlich reduzieren.",
      },
      {
        question: "Wann ist Herzrasen gefährlich?",
        answer:
          "Sofort zum Arzt: Herzrasen mit Brustschmerz, Atemnot, Schwindel oder Ohnmacht. Zeitnah abklären: Anhaltend >30 Minuten, unregelmäßiger Herzschlag (Vorhofflimmern-Verdacht), Herzrasen >150 Schläge/Minute in Ruhe. Auch neu aufgetretenes Herzrasen nach 40 sollte mit EKG und Schilddrüsenwerten abgeklärt werden.",
      },
    ],
  },

  kopfschmerzen: {
    slug: "kopfschmerzen",
    name: "Kopfschmerzen & Migräne",
    nameFull: "Hormonell bedingte Kopfschmerzen & Migräne bei Frauen",
    description:
      "Hormonelle Schwankungen sind die häufigste Ursache für Kopfschmerzen und Migräne bei Frauen – besonders der Östrogenabfall kurz vor der Periode und in der Perimenopause.",
    metaDescription:
      "Hormonelle Kopfschmerzen und Migräne bei Frauen: Warum Östrogenschwankungen Migräne auslösen und was wirklich hilft – Wechseljahre, Zyklus, Schilddrüse.",
    causes: [
      "Östrogenabfall vor der Menstruation (menstruelle Migräne – häufigste Form der Migräne bei Frauen)",
      "Starke Östrogenschwankungen in der Perimenopause destabilisieren Trigeminussystem und Serotonin",
      "Progesteronmangel erhöht die kortikale Erregbarkeit und senkt die Migräneschwelle",
      "Schilddrüsenerkrankungen (sowohl Hypo- als auch Hyperthyreose) gehen mit Kopfschmerzen einher",
      "Magnesiummangel – bei Frauen mit Migräne häufig nachweisbar; Magnesium hemmt die kortikale Spreading Depression",
      "Chronische Dehydrierung und Schlafmangel (durch hormonelle Beschwerden verstärkt)",
    ],
    detailedExplanation:
      "Der Zusammenhang zwischen Östrogen und Migräne ist gut belegt: Östrogen stabilisiert das Trigeminovaskuläre System, das für Migräneattacken zentral ist, und beeinflusst die Serotoninsynthese und -wiederaufnahme. Der typische Trigger für menstruelle Migräne ist der schnelle Östrogenabfall kurz vor der Periode – nicht der Östrogenmangel selbst, sondern die Geschwindigkeit des Abfalls. Dasselbe Prinzip erklärt, warum die Perimenopause die Migräne intensiviert: Die Östrogenspiegel schwanken unvorhersehbar zwischen hoch und niedrig, was den Trigeminus chronisch sensibilisiert.\n\nIn der Postmenopause berichten viele Migränepatientinnen von einer Verbesserung oder vollständigem Verschwinden der Migräne – wenn das Östrogenniveau stabil bleibt. Problematisch ist die Hormonersatztherapie: Transdermales Östrogen (Pflaster, Gel) mit stabilen Spiegeln bessert Migräne oft; orale HRT mit starken Spiegeländerungen kann sie dagegen verschlechtern.",
    diagnosticTests: [
      { test: "Progesteron (Tag 19–22) + Östradiol (Tag 3–5 und Tag 19–22)", relevance: "Lutealphase-Progesteronmangel und perimenopausale Östrogenschwankungen als Migränetrigger identifizieren" },
      { test: "TSH, fT3, fT4", relevance: "Schilddrüsenfunktionsstörung als häufig übersehene Kopfschmerzursache ausschließen; Hypothyreose verursacht Dauerkopfschmerz" },
      { test: "Magnesium (intrazellulär)", relevance: "Intrazellulärer Magnesiummangel bei über 50 % der Migränepatientinnen nachweisbar; Serum-Magnesium ist kein valider Indikator" },
      { test: "Ferritin", relevance: "Eisenmangel assoziiert mit erhöhter Migränehäufigkeit; Ferritin-Zielwert bei Migräne ≥70 ng/ml" },
    ],
    conditionIntros: {
      menopause:
        "Migräne und Kopfschmerzen verändern sich in der Perimenopause für die meisten Frauen deutlich – leider oft zum Schlechteren. Die unvorhersehbaren Östrogenschwankungen dieser Übergangsphase machen das Trigeminovaskuläre System hyperreaktiv. Frauen, die vorher nur menstruelle Migräne hatten, berichten plötzlich von häufigeren Attacken ohne klaren Auslöser. Eine stabile Östrogentherapie (transdermal) kann die Migränefrequenz in der Perimenopause signifikant senken.",
      hormone:
        "Im hormonellen Kontext ist die menstruelle Migräne die häufigste Form: ausgelöst durch den schnellen Östrogen- und Progesteronabfall kurz vor der Periode. Frauen mit Östrogendominanz (relativer Progesteronmangel) haben oft intensivere und häufigere menstruelle Kopfschmerzen. Auch das prämenstruelle Syndrom geht in 30–40 % der Fälle mit Kopfschmerzen einher.",
      hashimoto:
        "Hypothyreose bei Hashimoto ist eine unterschätzte Kopfschmerzursache. Der genaue Mechanismus ist nicht vollständig geklärt, aber die Assoziation ist gut belegt: Frauen mit unzureichend eingestellter Hypothyreose berichten häufiger über chronische Kopfschmerzen, die sich nach Optimierung der Schilddrüsenwerte bessern. Myxödem-bedingte Veränderungen der intrakraniellen Druckverhältnisse spielen möglicherweise eine Rolle.",
    },
    whenToSeeDoctor:
      "Bei plötzlich starkstem Kopfschmerz ('Donnerschlag-Kopfschmerz') sofort Notaufnahme. Bei neu aufgetretener Migräne nach 50, Kopfschmerz mit Fieber/Nackensteifigkeit oder neurologischen Ausfällen. Bei Migräne mit Zunahme in der Perimenopause: gynäkologische Hormondiagnostik sinnvoll.",
    naturalRemedies: [
      "Magnesium (300–400 mg täglich) – am besten belegt für Migräneprophylaxe; Magnesiumglycinat oder -citrat am besten verträglich",
      "Regelmäßiger Schlaf-Wach-Rhythmus – Schlafmangel und -überfluss sind klassische Migränetrigger",
      "Migränetagebuch führen: Zyklusphase, Schlaf, Ernährung, Stress notieren – Trigger identifizieren",
      "Riboflavin (Vitamin B2, 400 mg täglich) – randomisierte Studie zeigt 50 % Reduktion der Migränefrequenz",
      "Hormonstatus abklären lassen: Progesteronmangel und perimenopausale Schwankungen sind behandelbar",
    ],
    relatedConditions: ["menopause", "hormone", "hashimoto"],
    faqs: [
      {
        question: "Kann die Pille Migräne verursachen oder verbessern?",
        answer:
          "Beides ist möglich. Kombinationspillen mit Östrogen können bei Frauen mit Migräne mit Aura das Schlaganfallrisiko erhöhen (kontraindiziert). Reine Gestagen-Pille oder Hormonspirale sind sicherer. Manche Frauen profitieren von der pillenfreien Woche weglassen (Langzykluseinnahme), um den Östrogenabfall zu vermeiden.",
      },
      {
        question: "Warum habe ich immer kurz vor der Periode Kopfschmerzen?",
        answer:
          "Das ist die klassische menstruelle Migräne – ausgelöst durch den schnellen Abfall von Östrogen und Progesteron vor der Blutung. Das ist keine Einbildung, sondern ein gut belegter neurobiologischer Mechanismus. Magnesium, Riboflavin und (bei schweren Fällen) transdermales Östrogen kurz vor der Periode können helfen.",
      },
      {
        question: "Werden Migränen in den Wechseljahren besser oder schlechter?",
        answer:
          "In der Perimenopause erst oft schlechter (durch starke Östrogenschwankungen), dann in der Postmenopause besser (stabiler Hormonspiegel). Ausnahme: HRT mit oralen Östrogenpräparaten kann Migräne verstärken. Transdermales Östrogen mit stabilem Spiegel ist migränefreundlicher.",
      },
    ],
  },

  wassereinlagerungen: {
    slug: "wassereinlagerungen",
    name: "Wassereinlagerungen",
    nameFull: "Wassereinlagerungen & Blähungen durch Hormone",
    description:
      "Hormonell bedingte Wassereinlagerungen entstehen durch das Zusammenspiel von Östrogen, Progesteron und Cortisol – besonders in der zweiten Zyklushälfte, in der Perimenopause und bei Schilddrüsenunterfunktion.",
    metaDescription:
      "Wassereinlagerungen durch Hormone: Warum Östrogendominanz, Perimenopause und Schilddrüsenunterfunktion Ödeme und Blähungen verursachen – und was hilft.",
    causes: [
      "Progesteronmangel (relativer Östrogenüberschuss): Progesteron wirkt natürlich diuretisch; fällt es ab, hält der Körper mehr Wasser zurück",
      "Hohes Östrogen fördert Aldosteronproduktion und damit Natrium- und Wasserretention",
      "Schilddrüsenunterfunktion (Hypothyreose): Myxödem – eine spezifische Form der Gewebsschwellung durch Glukosaminoglykane",
      "Chronisch erhöhtes Cortisol aktiviert Mineralokortikoid-Rezeptoren und fördert Salz-Wasserretention",
      "Insulinresistenz erhöht Natriumrückresorption in den Nieren",
      "Venöse Insuffizienz, verschlechtert durch Östrogenschwankungen",
    ],
    detailedExplanation:
      "Progesteron ist der natürliche Antagonist von Aldosteron – dem Hormon, das die Nieren zur Natriumrückresorption antreibt. Wenn Progesteron fällt (Lutealphase, Perimenopause), verliert der Körper diesen diuretischen Gegenpart. Gleichzeitig erhöht Östrogen direkt die Aldosteronsynthese und fördert die kapilläre Permeabilität. Das Resultat: Wasser verschiebt sich ins Gewebe, besonders in Beinen, Bauch und Gesicht. In der Woche vor der Periode können Frauen 1–2 kg mehr wiegen – ausschließlich durch Wasserretention.\n\nBei Hypothyreose ist der Mechanismus ein anderer: Schilddrüsenhormonmangel führt zur Akkumulation von Hyaluronsäure und anderen Glukosaminoglykanen im Gewebe, die stark wasseranziehend sind. Das nennt sich prätibiales Myxödem und ist eines der pathognomonischen Zeichen der Hypothyreose. Im Gesicht äußert es sich als gedunsen wirkendes Erscheinungsbild, besonders periorbital (Augenlidschwellung morgens).",
    diagnosticTests: [
      { test: "Progesteron (Tag 19–22) + Östradiol", relevance: "Relativer Progesteronmangel in der Lutealphase als häufigste Ursache zyklischer Wassereinlagerungen" },
      { test: "TSH, fT3, fT4", relevance: "Hypothyreose als Ursache persistierender Schwellungen – Myxödem ist ein klassisches Schilddrüsen-Zeichen" },
      { test: "Cortisol (Morgenwert)", relevance: "Chronisch erhöhtes Cortisol fördert Wasserretention über Mineralokortikoid-Aktivierung; Cushing-Syndrom ausschließen" },
      { test: "Nüchterninsulin + Glukose", relevance: "Insulinresistenz fördert Natriumretention; relevant bei begleitendem Übergewicht und Bauchfett" },
    ],
    conditionIntros: {
      menopause:
        "Wassereinlagerungen und ein 'aufgedunsenes' Gefühl sind in der Perimenopause sehr verbreitet und werden oft mit Gewichtszunahme verwechselt. Der Hauptmechanismus: Progesteron sinkt in der Perimenopause als erstes Hormon ab, während Östrogen noch lange schwankt. Ohne den ausgleichenden diuretischen Effekt des Progesterons hält der Körper mehr Wasser zurück. Transdermales Progesteron oder Progesteron-Kapseln können diese Art der Wassereinlagerung deutlich reduzieren.",
      hashimoto:
        "Bei Hashimoto mit bestehender Hypothyreose sind Wassereinlagerungen ein klassisches Zeichen – besonders wenn die Schilddrüse noch nicht optimal eingestellt ist. Das peiorbitale Ödem morgens (geschwollene Augenlider), Handrücken-Ödeme und schwere Beine können auf ein myxödematöses Gewebe hinweisen. Nach Normalisierung der Schilddrüsenwerte unter L-Thyroxin verschwinden diese Schwellungen meist deutlich.",
      schilddruese:
        "Schilddrüsenunterfunktion ist eine der wichtigsten und am häufigsten übersehenen Ursachen für persistierende Wassereinlagerungen. Myxödem – die Ansammlung von Glukosaminoglykanen im Gewebe – ist ein pathognomonisches Zeichen der Hypothyreose. Im Unterschied zu anderen Ödemen lässt myxödematöse Schwellung keinen 'Fingerabdruck' zurück (nicht pitting). TSH-Wert abklären lassen ist bei ungeklärten Schwellungen immer sinnvoll.",
      hormone:
        "Im Rahmen von Hormonstörungen sind Wassereinlagerungen oft zyklisch: Verschlimmerung in der zweiten Zyklushälfte und kurz vor der Periode, Verbesserung nach Beginn der Blutung. Dies ist ein klarer Hinweis auf Progesteronmangel in der Lutealphase. Östrogendominanz verstärkt den Effekt. Auch Cortisol-Dysregulation (adrenale Erschöpfung oder chronischer Stress) führt zu persistierender Wasserretention.",
    },
    whenToSeeDoctor:
      "Bei einseitigen Beinödemen, schnell zunehmenden Schwellungen, Schwellungen mit Rötung oder Wärme (Thrombose-Ausschluss!), Ödemen mit Atemnot oder Wassereinlagerungen bei bekannter Herzerkrankung sofort abklären.",
    naturalRemedies: [
      "Salzzufuhr reduzieren (max. 5 g täglich) – Natrium bindet Wasser direkt im Gewebe",
      "Ausreichend Wasser trinken (1,5–2 L täglich) – Dehydrierung erhöht paradoxerweise die Wasserretention",
      "Ausdauersport und Beine hochlegen – verbessert Lymphfluss und venösen Rückstrom",
      "Magnesium 300 mg täglich – wirkt leicht diuretisch und reduziert prämenstruelle Ödeme",
      "Hormonstatus prüfen lassen: Progesteronmangel und Hypothyreose sind ursächlich behandelbar",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Warum nehme ich kurz vor der Periode zu?",
        answer:
          "Das ist fast immer Wasser, kein Fett. Progesteron- und Östrogenabfall kurz vor der Blutung führt zu Natrium- und Wasserretention. 1–2 kg prämenstruelle Gewichtszunahme sind physiologisch normal und verschwinden nach der Blutung. Magnesium und Natriumreduktion helfen, den Effekt zu minimieren.",
      },
      {
        question: "Können Schilddrüsenprobleme Wassereinlagerungen verursachen?",
        answer:
          "Ja – Hypothyreose (Schilddrüsenunterfunktion) ist eine klassische Ursache für persistierende Schwellungen, besonders periorbital (Augenlider) und an Händen und Beinen. Das nennt sich Myxödem. Nach Einstellung auf L-Thyroxin verschwinden diese Ödeme meist deutlich. Bei ungeklärten Schwellungen immer TSH bestimmen lassen.",
      },
      {
        question: "Was hilft am schnellsten gegen Wassereinlagerungen?",
        answer:
          "Kurzfristig: Salz reduzieren, Beine hochlegen, Bewegung, mehr Wasser trinken (nicht weniger!). Mittelfristig: Hormonstatus abklären – Progesteronmangel und Hypothyreose sind häufige und gut behandelbare Ursachen. Entwässerungsmittel (Diuretika) sind nur in Ausnahmefällen indiziert und behandeln nicht die Ursache.",
      },
    ],
  },

  reizbarkeit: {
    slug: "reizbarkeit",
    name: "Reizbarkeit",
    nameFull: "Reizbarkeit & innere Unruhe durch Hormonschwankungen",
    description:
      "Reizbarkeit, kurze Zündschnur und innere Unruhe sind häufige Symptome hormoneller Dysbalancen – besonders in der Perimenopause und bei Schilddrüsenerkrankungen, wenn Hormone das zentrale Nervensystem direkt beeinflussen.",
    metaDescription:
      "Reizbarkeit durch Hormone: Warum Progesteronmangel, Perimenopause und Schilddrüsenprobleme zu innerer Unruhe führen – und was wirklich hilft.",
    causes: [
      "Progesteronmangel: Progesteron metabolisiert zu Allopregnanolon, einem potenten GABA-A-Modulator – sein Abfall destabilisiert das Nervensystem",
      "Östrogenschwankungen verändern die Serotonin- und Dopaminsynthese – beides Neurotransmitter, die Stimmung und Impulskontrolle regulieren",
      "Schilddrüsenüberfunktion (Hyperthyreose): erhöhte T3-Spiegel überaktivieren das sympathische Nervensystem",
      "Chronischer Schlafmangel durch Hitzewallungen und Nachtschweiß – Schlafentzug erhöht die emotionale Reaktivität drastisch",
      "Cortisol-Dysregulation: sowohl chronisch hohe als auch erschöpfte Cortisolspiegel erhöhen emotionale Instabilität",
      "Eisenmangel beeinträchtigt die Dopaminproduktion und erhöht emotionale Reizbarkeit",
    ],
    detailedExplanation:
      "Progesteron – und vor allem sein Metabolit Allopregnanolon – wirkt wie ein endogenes Beruhigungsmittel: Es bindet an GABA-A-Rezeptoren und hat anxiolytische, schlaffördernde und stimmungsstabilisierende Eigenschaften. Wenn Progesteron in der Lutealphase oder Perimenopause abfällt, verliert das Gehirn diesen natürlichen Dämpfer. Das Ergebnis: Niedrigere Reizschwelle, schnellere Stressreaktion, kürzere emotionale Erholung. Frauen mit PMDD haben eine genetisch bedingte Überempfindlichkeit auf genau diesen Progesteronabfall.\n\nÖstrogen wirkt als indirekter Serotonin-Verstärker: Es erhöht die Serotoninsynthese und die Dichte von Serotoninrezeptoren im präfrontalen Kortex – jenem Hirnbereich, der für emotionale Regulierung zuständig ist. Wenn Östrogen in der Perimenopause unvorhersehbar schwankt, schwankt auch die serotonerge Aktivität. Das führt zu einem Zustand erhöhter emotionaler Reaktivität, der sich als Reizbarkeit, 'kurze Zündschnur' und Ungeduld äußert – auch ohne eigentlich deprimiert zu sein.",
    diagnosticTests: [
      { test: "Progesteron (Tag 19–22 des Zyklus)", relevance: "Progesteronmangel in der Lutealphase als häufigste Ursache zyklischer Reizbarkeit – Zielwert >10 ng/ml" },
      { test: "FSH + Östradiol", relevance: "Perimenopausale Hormonschwankungen erkennen; stark schwankende Östrogenspiegel korrelieren mit Reizbarkeit" },
      { test: "TSH, fT3, fT4", relevance: "Hyperthyreose als häufig übersehene Ursache von Reizbarkeit, Nervosität und innerer Unruhe ausschließen" },
      { test: "Cortisol (Tagesprofil: morgens + mittags + abends)", relevance: "Cortisol-Dysregulation durch chronischen Stress; sowohl erhöhte als auch erschöpfte Spiegel können Reizbarkeit verursachen" },
    ],
    conditionIntros: {
      menopause:
        "Reizbarkeit zählt zu den häufigsten und belastendsten Wechseljahressymptomen – und wird am seltensten mit dem Hormonstatus in Verbindung gebracht. Viele Frauen berichten, dass sie sich 'nicht wiedererkennen': schneller wütend, weniger geduldig, leichter überfordert. Der Mechanismus liegt in der Kombination aus fallendem Progesteron, schwankendem Östrogen und dem daraus resultierenden Rückgang von Allopregnanolon und Serotonin. Schlafmangel durch nächtliche Hitzewallungen verstärkt den Effekt erheblich.",
      hashimoto:
        "Bei Hashimoto kann Reizbarkeit zwei sehr unterschiedliche Ursachen haben: Bei vorübergehender Hashimoto-Thyreoiditis mit erhöhten Schilddrüsenhormonen (hyperthyreoter Schub) dominieren Nervosität und Reizbarkeit. Bei Hypothyreose ist es paradoxerweise ähnlich – Schlafprobleme, Erschöpfung und das Gefühl des 'nicht funktionierens' erzeugen emotionalen Stress, der sich in Reizbarkeit niederschlägt. Erst nach Normalisierung der Schilddrüsenwerte lässt sich die emotionale Komponente besser einordnen.",
      schilddruese:
        "Reizbarkeit und innere Unruhe sind klassische Symptome der Schilddrüsenüberfunktion (Hyperthyreose). Erhöhtes T3 aktiviert das sympathische Nervensystem direkt und führt zu einem Zustand dauerhafter Hyperarousal: gesteigerte Reaktionsbereitschaft, schnelles Aufregen, Schlafstörungen, Zittern. Auch bei Autoimmun-Hyperthyreose (Morbus Basedow) ist Reizbarkeit oft das erste wahrgenommene Symptom.",
      hormone:
        "Reizbarkeit ist ein Leitsymptom des Progesteronmangels und der relativen Östrogendominanz. Durch den Mangel an Allopregnanolon verliert das Gehirn seinen stärksten endogenen Anxiolytiker. Das erklärt auch, warum viele Frauen in der zweiten Zyklushälfte (Lutealphase) gereizter sind: Progesteron ist zwar vorhanden, aber bei manchen Frauen unzureichend oder die Empfindlichkeit gegenüber seinem Abfall erhöht.",
    },
    whenToSeeDoctor:
      "Wenn Reizbarkeit das soziale Leben und Beziehungen erheblich belastet, den Alltag beeinträchtigt oder mit anderen Symptomen wie Schlaflosigkeit, Herzrasen und Gewichtsverlust kombiniert auftritt. Differenzialdiagnose Hyperthyreose (TSH-Test) ist immer sinnvoll.",
    naturalRemedies: [
      "Schlafoptimierung: Schlafmangel ist ein stärkerer Reizbarkeits-Treiber als Hormonschwankungen – beides gleichzeitig angehen",
      "Magnesium (400 mg abends) – stärkt GABA-Aktivität und wirkt zentral dämpfend",
      "Regelmäßige Bewegung (Ausdauer + Krafttraining) – stärkste natürliche Methode zur Stressregulation und Serotoninerhöhung",
      "Alkohol vermeiden: Alkohol senkt Progesteronproduktion und verändert GABA-Aktivität – kurzfristig beruhigend, langfristig Reizbarkeit steigernd",
      "Hormonstatus abklären: Progesteronmangel ist gut behandelbar; bioidentisches Progesteron zeigt in Studien deutliche anxiolytische Wirkung",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Kann Reizbarkeit ein Wechseljahres-Symptom sein?",
        answer:
          "Ja – Reizbarkeit, kurze Zündschnur und emotionale Instabilität sind in der Perimenopause sehr häufig und werden oft fälschlicherweise als Persönlichkeitsveränderung oder externe Stressreaktion eingestuft. Der Mechanismus ist neurobiologisch: Progesteronabfall und Östrogenschwankungen verändern Serotonin und GABA-Aktivität im Gehirn direkt.",
      },
      {
        question: "Was hilft gegen Reizbarkeit in den Wechseljahren?",
        answer:
          "Erstens: Schlaf verbessern (Hitzewallungen behandeln). Zweitens: Magnesium 400 mg abends. Drittens: regelmäßiger Sport. Bei hormonal bedingter Reizbarkeit kann bioidentisches Progesteron (Utrogest oder Crinone) sehr effektiv sein – es wirkt als GABA-Modulator und hat direkte anxiolytische Wirkung. Hormonstatus abklären lassen.",
      },
      {
        question: "Woher weiß ich ob meine Reizbarkeit hormonell bedingt ist?",
        answer:
          "Hinweise auf hormonelle Ursache: Reizbarkeit in der zweiten Zyklushälfte oder zu bestimmten Phasen des Zyklus, Kombination mit anderen Hormon-Symptomen (Schlafprobleme, Hitzewallungen, Gewichtszunahme), neu aufgetreten ab Mitte/Ende 30, kein klarer äußerlicher Stressauslöser. Ein Hormonpanel (Progesteron Tag 19–22, FSH, TSH) schafft Klarheit.",
      },
    ],
  },

  panikattacken: {
    slug: "panikattacken",
    name: "Panikattacken & Angst",
    nameFull: "Panikattacken & Angststörungen durch Hormonschwankungen",
    description:
      "Panikattacken und neu auftretende Angststörungen bei Frauen über 35 haben häufig eine hormonelle Ursache – besonders perimenopausale Östrogenschwankungen, die das Amygdala-System destabilisieren.",
    metaDescription:
      "Panikattacken durch Hormone: Warum Perimenopause, Progesteronmangel und Schilddrüsenprobleme Angstattacken auslösen – und wie man sie von Angststörungen unterscheidet.",
    causes: [
      "Östrogenschwankungen in der Perimenopause destabilisieren die Amygdala – das Angstzentrum des Gehirns",
      "Progesteronabfall reduziert Allopregnanolon (GABA-A-Modulator), den stärksten endogenen Anxiolytiker des Körpers",
      "Schilddrüsenüberfunktion: erhöhtes T3 erzeugt sympathische Überaktivierung mit Panik-ähnlicher Symptomatik",
      "Erhöhtes Cortisol durch chronischen Stress senkt die Panik-Schwelle über Amygdala-Sensibilisierung",
      "Schlafentzug durch nächtliche Hitzewallungen erhöht Amygdala-Reaktivität und verringert präfrontale Hemmung",
      "Niedrige Progesteronspiegel und Fluktuationen beim Absetzen hormoneller Verhütung",
    ],
    detailedExplanation:
      "Östrogen wirkt als Amygdala-Modulator: Es dämpft die Antwort der Amygdala auf bedrohliche Stimuli und fördert die Hemmkontrolle durch den präfrontalen Kortex. Wenn Östrogen in der Perimenopause unvorhersehbar schwankt, verliert das Gehirn diese emotionale Dämpfung. Das erklärt, warum viele Frauen zwischen 40 und 55 Jahren erstmals Panikattacken entwickeln – ohne dass es dafür eine äußere Erklärung gibt. Diese Attacken werden oft als kardiale Ereignisse oder primäre Panikstörung fehldiagnostiziert, bevor der perimenopausale Kontext erkannt wird.\n\nProgesterons Rolle über Allopregnanolon ist ebenso kritisch: Allopregnanolon bindet an GABA-A-Rezeptoren (dieselben, an die Benzodiazepine binden) und hat potente anxiolytische Wirkung. Wenn Progesteron und damit Allopregnanolon fallen, verliert das Gehirn seinen stärksten endogenen Angstbremser. Dieser Mechanismus erklärt auch Panikattacken kurz vor der Periode (PMDD), beim Absetzen der Pille und beim Übergang in die Postmenopause.",
    diagnosticTests: [
      { test: "TSH, fT3, fT4", relevance: "Hyperthyreose erzeugt identische Symptomatik wie Panikattacken (Herzrasen, Zittern, Angst) – muss als erstes ausgeschlossen werden" },
      { test: "FSH + Östradiol + Progesteron", relevance: "Perimenopausaler Status und Progesteronmangel als Ursache identifizieren; bei Perimenopause-Panik ist dies diagnostisch wegweisend" },
      { test: "Cortisol (Morgenwert oder 24h-Urin)", relevance: "Chronisch erhöhtes Cortisol als Panikauslöser; auch Phäochromozytom bei anfallsartiger Hypertonie ausschließen" },
      { test: "EKG + Langzeit-EKG", relevance: "Kardiale Ursachen (Vorhofflimmern, supraventrikuläre Tachykardie) ausschließen, die Panikattacken imitieren" },
    ],
    conditionIntros: {
      menopause:
        "Panikattacken und neu auftretende Angststörungen in der Perimenopause sind stark unterdiagnostiziert. Schätzungsweise 15–20 % der Perimenopause-Frauen entwickeln neue Angstsymptome oder Panikattacken – oft ohne jemals zuvor Angst erlebt zu haben. Der Mechanismus ist neurobiologisch: Östrogenschwankungen destabilisieren das Amygdala-System, Progesteronabfall reduziert GABA-Aktivität. Viele dieser Frauen werden mit Benzodiazepinen oder Antidepressiva behandelt, ohne dass der hormonelle Kontext erkannt wurde.",
      hormone:
        "Im hormonellen Kontext sind Panikattacken kurz vor der Periode (prämenstruelle Panik) ein klassisches, aber wenig bekanntes Symptom. Der Progesteronabfall am Ende des Zyklus reduziert Allopregnanolon – des Körpers stärkstes endogenes Anxiolytikum. Bei Frauen mit PMDD ist dieser Effekt besonders ausgeprägt. Auch beim Absetzen der Antibabypille kann ein vorübergehender Allopregnanolon-Entzug Angst und Panik auslösen.",
    },
    whenToSeeDoctor:
      "Bei erstmaligen Panikattacken immer ärztlich abklären – kardinale und Schilddrüsenursachen müssen ausgeschlossen werden. Bei perimenopausalen Panikattacken: gynäkologische Hormondiagnostik und ggf. Psychiatrie. Bei Panikattacken mit Suizidgedanken: sofortige psychiatrische Hilfe.",
    naturalRemedies: [
      "Magnesium (400 mg abends) und Vitamin B6 (50 mg täglich) – verstärken GABA-Aktivität und dämpfen sympathische Überaktivierung",
      "Atemübungen (4-7-8-Technik oder Box-Breathing) – aktivieren den Parasympathikus und durchbrechen den Panikkreislauf",
      "Regelmäßige Ausdauerübung – reduziert Amygdala-Reaktivität nachweislich und erhöht GABA-Tonus",
      "Schlaf prioritär behandeln: Schlafdeprivation verdreifacht Panikwahrscheinlichkeit",
      "Hormonstatus abklären: Bioidentisches Progesteron hat direkte anxiolytische Wirkung über GABA-A – kann Panikattacken in der Perimenopause deutlich reduzieren",
    ],
    relatedConditions: ["menopause", "hormone"],
    faqs: [
      {
        question: "Können Wechseljahre Panikattacken auslösen?",
        answer:
          "Ja – das ist gut belegt und stark unterdiagnostiziert. 15–20 % der Frauen entwickeln in der Perimenopause erstmals Panikattacken oder Angststörungen. Der Mechanismus liegt in Östrogenschwankungen (Amygdala-Destabilisierung) und Progesteronabfall (GABA-Reduktion). Viele werden behandelt, ohne dass der hormonelle Kontext erkannt wird.",
      },
      {
        question: "Wie unterscheide ich Panikattacken von Herzproblemen?",
        answer:
          "Panikattacken dauern meist 5–20 Minuten und klingen spontan ab. EKG während des Anfalls oder Langzeit-EKG zeigen beim Kardiologen, ob eine Herzrhythmusstörung vorliegt. Bei regelmäßigen Panikattacken mit Herzrasen immer EKG + TSH-Test, um Herzrhythmusstörungen und Schilddrüsenüberfunktion auszuschließen.",
      },
      {
        question: "Hilft Hormontherapie gegen Panikattacken in den Wechseljahren?",
        answer:
          "Ja, wenn die Panikattacken hormonal bedingt sind. Bioidentisches Progesteron (Utrogest) hat über Allopregnanolon direkte anxiolytische Wirkung. Östrogen stabilisiert die Amygdala. Beides zusammen kann perimenopausale Panikattacken deutlich reduzieren. Dies sollte mit einer erfahrenen Gynäkologin besprochen werden.",
      },
    ],
  },

  antriebslosigkeit: {
    slug: "antriebslosigkeit",
    name: "Antriebslosigkeit",
    nameFull: "Antriebslosigkeit & Motivationslosigkeit durch Hormone",
    description:
      "Anhaltende Antriebslosigkeit und Motivationslosigkeit bei Frauen sind oft hormonal bedingt – Schilddrüsenunterfunktion, Östrogenmangel und Testosteronmangel beeinflussen die Dopamin-Motivation-Achse direkt.",
    metaDescription:
      "Antriebslosigkeit bei Frauen: Wenn Schilddrüse, Östrogen, Testosteron oder Cortisol den Antrieb rauben – Ursachen, Tests und was wirklich hilft.",
    causes: [
      "Hypothyreose (Schilddrüsenunterfunktion): Schilddrüsenhormone regulieren die Dopaminproduktion und den Energiestoffwechsel direkt",
      "Östrogenmangel in der Perimenopause: Östrogen hat neurotrophe Wirkung und unterstützt dopaminerge Bahnen im Nucleus accumbens",
      "Testosteronmangel: Testosteron fördert Motivation, Tatendrang und kognitive Schärfe – bei Frauen oft nicht gemessen",
      "Chronisch erhöhtes Cortisol (HPA-Dysregulation): 'Müde-aber-wach-Syndrom', mangelnde Erholung",
      "Eisenmangel: Ferritin <30 ng/ml beeinträchtigt Dopamin- und Serotoninproduktion direkt",
      "Chronischer Schlafmangel mit gestörter Tiefschlafarchitektur durch Hitzewallungen",
    ],
    detailedExplanation:
      "Antrieb und Motivation werden neurobiologisch durch das mesolimbische Dopaminsystem gesteuert – insbesondere durch den Nucleus accumbens und präfrontalen Kortex. Schilddrüsenhormone sind essenziell für die Expression von Dopaminrezeptoren und die Tyrosinhydroxylase-Aktivität (Schlüsselenzym der Dopaminsynthese). Selbst eine subklinische Hypothyreose mit normalen T4-Werten aber niedrig-normalem T3 kann zu deutlicher Antriebsverminderung führen.\n\nÖstrogen unterstützt das dopaminerge System ebenfalls: Es hemmt die Monoaminoxidase (MAO), das Abbauenzym für Dopamin und Serotonin, und erhöht die Empfindlichkeit von D2-Rezeptoren. Wenn Östrogen in der Perimenopause abfällt, verliert die dopaminerge Signalübertragung ihre östrogenbasierte Unterstützung. Hinzu kommt: Testosteron wird bei Frauen oft gar nicht gemessen, obwohl es direkten Einfluss auf Motivation, Energie und Tatendrang hat. Viele Frauen berichten erst nach Testosteronoptimierung, dass sie wieder 'sie selbst' sind.",
    diagnosticTests: [
      { test: "TSH, fT3, fT4 + rT3 (reverses T3)", relevance: "Hypothyreose und funktioneller T3-Mangel (bei normalem TSH) als häufigste behandelbare Antriebsursache; T3 ist das metabolisch aktive Hormon" },
      { test: "Ferritin (Zielwert >70 ng/ml)", relevance: "Eisenmangel beeinträchtigt Dopamin- und Serotoninproduktion; Ferritin <30 ng/ml ist funktionell relevant, auch ohne Anämie" },
      { test: "Testosteron gesamt + frei + SHBG", relevance: "Testosteron wird bei Frauen häufig vergessen – ist aber kritisch für Motivation, Libido und kognitive Energie; Zielwert frei Testosteron am oberen Normalbereich" },
      { test: "Cortisol-Tagesprofil (morgens, mittags, abends)", relevance: "HPA-Dysregulation: erschöpfte Cortisolkurve bei chronischem Stress als Ursache von Antriebslosigkeit erkennen" },
      { test: "Vitamin D + B12", relevance: "Beide Mängel verursachen direkt Antriebslosigkeit und Erschöpfung; Vitamin D <30 ng/ml ist bei Frauen in Mitteleuropa häufig" },
    ],
    conditionIntros: {
      menopause:
        "Antriebslosigkeit ist in der Perimenopause ein zentrales, aber oft fehlgedeutetes Symptom. Viele Frauen beschreiben es als 'nicht mehr ich selbst sein' – keine Freude an Dingen, die früher Spaß gemacht haben, keine Energie für neue Projekte, gefühlte Gleichgültigkeit. Die neurobiologische Ursache liegt im Rückgang der östrogenbasierten Dopaminunterstützung und – oft übersehen – in niedrigem Testosteron, das in den Wechseljahren ebenfalls abfällt.",
      hashimoto:
        "Bei Hashimoto ist Antriebslosigkeit oft das prominenteste und invalidisierende Symptom – besonders wenn die Schilddrüse noch nicht optimal eingestellt ist. Das Problem: TSH kann im 'Normalbereich' sein, während fT3 (das aktive Schilddrüsenhormon) zu niedrig ist, um volle Dopaminaktivität zu ermöglichen. Viele Frauen mit Hashimoto berichten, dass sie sich erst bei fT3-Werten im oberen Normalbereich wieder antriebsfähig fühlen.",
      schilddruese:
        "Antriebslosigkeit ist eines der verlässlichsten Anzeichen einer Hypothyreose. Schilddrüsenhormone – insbesondere T3 – regulieren die Transkription von Genen für Energiestoffwechsel, Neurotransmitterproduktion und Mitochondrienfunktion. Ohne ausreichend T3 arbeitet das Gehirn im 'Sparmodus': Alles kostet mehr Kraft, nichts macht Freude, Konzentration und Initiative nehmen ab.",
      hormone:
        "Im hormonellen Kontext ist Antriebslosigkeit oft das Ergebnis von drei gleichzeitigen Defiziten: niedrigem Östrogen (reduzierte Dopaminunterstützung), niedrigem Testosteron (direkte Motivationsachse) und Eisenmangel (Dopaminvorläufer). Viele Frauen, die sich erschöpft und antriebslos fühlen, haben ein niedrig-normales Testosteron, das laborchemisch 'in Ordnung' ist, aber für sie persönlich zu niedrig.",
    },
    whenToSeeDoctor:
      "Bei Antriebslosigkeit, die länger als 4 Wochen anhält, den Alltag beeinträchtigt oder mit Schlafstörungen, Gewichtsveränderungen und anderen Symptomen kombiniert ist. Differenzialdiagnose Depression immer abklären – Hypothyreose und Eisenmangel imitieren Depression perfekt.",
    naturalRemedies: [
      "Eisenmangel behandeln (Ferritin-Ziel >70 ng/ml) – schnell wirksam, oft unterschätzt",
      "Vitamin D optimieren (Ziel: 40–60 ng/ml Serum-25-OH-D3) – direkte Wirkung auf Energiestoffwechsel und Stimmung",
      "Morgendliches Tageslicht (30 Minuten) – stärkstes natürliches Dopaminaktivierungssignal",
      "Regelmäßiger Sport (besonders Krafttraining) – erhöht Dopaminrezeptordichte und Testosteron",
      "Schilddrüsen- und Hormonstatus vollständig abklären lassen – Hypothyreose und Testosteronmangel sind behandelbar",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese", "hormone"],
    faqs: [
      {
        question: "Kann Schilddrüse den Antrieb nehmen?",
        answer:
          "Ja – Antriebslosigkeit ist eines der verlässlichsten Symptome einer Schilddrüsenunterfunktion. Schilddrüsenhormone regulieren die Dopaminproduktion und den Energiestoffwechsel direkt. Wichtig: TSH kann im Normalbereich sein, während fT3 (das aktive Hormon) zu niedrig ist. Ein vollständiges Schilddrüsenpanel (TSH + fT3 + fT4) ist aussagekräftiger als TSH allein.",
      },
      {
        question: "Warum bin ich trotz ausreichend Schlaf so antriebslos?",
        answer:
          "Wenn ausreichend Schlaf nicht erholt, deutet das auf eine gestörte Schlafarchitektur (kein Tiefschlaf) oder auf eine metabolische Ursache hin. Die häufigsten Ursachen: Schilddrüsenunterfunktion, Eisenmangel (Ferritin <30), Vitamin-D-Mangel, Cortisol-Dysregulation oder Testosteronmangel bei Frauen. Ein vollständiges Blutbild mit Hormonstatus klärt das meist.",
      },
      {
        question: "Wird Antriebslosigkeit in den Wechseljahren besser?",
        answer:
          "Das hängt von der Ursache ab. Wenn sie rein hormonal (Östrogen/Testosteron) bedingt ist, stabilisiert sie sich oft in der Postmenopause – wenn der Hormonspiegel konstant bleibt. In der Perimenopause selbst ist die Variabilität am größten. HRT, Eisenoptimierung, Schilddrüsentherapie und Testosteron (nach ärztlicher Abklärung) können deutlich helfen.",
      },
    ],
  },

  gelenkschmerzen: {
    slug: "gelenkschmerzen",
    name: "Gelenk- & Muskelschmerzen",
    nameFull: "Gelenk- und Muskelschmerzen durch Hormonmangel",
    description:
      "Gelenk- und Muskelschmerzen bei Frauen ab Mitte 40 sind häufig hormonell bedingt – Östrogenmangel fördert Gelenkentzündungen, und Hashimoto ist mit Arthralgie und Myalgie direkt assoziiert.",
    metaDescription:
      "Gelenkschmerzen durch Hormone: Warum Östrogenmangel, Perimenopause und Hashimoto Gelenk- und Muskelschmerzen verursachen – Ursachen, Tests und Hilfe.",
    causes: [
      "Östrogenmangel in der Perimenopause: Östrogen hat direkte anti-entzündliche Wirkung auf Gelenkknorpel und Synovium",
      "Hashimoto: Autoimmune Prozesse fördern systemische Entzündung und Gelenkbeteiligung (Arthralgie)",
      "Hypothyreose: Schilddrüsenhormonmangel führt zu Glykosaminoglykan-Ablagerungen in Muskeln und Gelenken",
      "Vitamin-D-Mangel: fördert Muskelschmerzen und beeinträchtigt Muskelkraft direkt über D-Rezeptoren im Muskelgewebe",
      "Magnesiummangel: erhöht Muskeltonus, fördert Muskelkrämpfe und Fibromyalgie-ähnliche Symptome",
      "Erhöhtes Cortisol: kataboler Effekt auf Muskelprotein, fördert Entzündung und verlangsamt Gewebereparatur",
    ],
    detailedExplanation:
      "Östrogen hat direkte chondroprotektive (knorpelschützende) Eigenschaften: Östrogen-Rezeptoren finden sich in Chondrozyten (Knorpelzellen), Synovialzellen und Knochen. Östrogen hemmt die Produktion von proinflammatorischen Zytokinen wie IL-1β und TNF-α, die Gelenkentzündungen antreiben. Wenn der Östrogenspiegel in der Perimenopause fällt, verlieren die Gelenke diesen entzündungshemmenden Schutz. Das erklärt, warum Arthrose, Gelenksteifigkeit und Gelenkentzündungen bei Frauen nach der Menopause deutlich häufiger werden.\n\nBei Hashimoto kommt ein zweiter Mechanismus dazu: Die Autoimmunreaktion gegen Schilddrüsengewebe ist oft Teil eines breiteren Autoimmunmusters. Viele Hashimoto-Patientinnen haben erhöhte allgemeine Entzündungsmarker (CRP, IL-6) und eine Mitbeteiligung der Gelenke (Arthralgie) oder Muskeln (Myalgie). Zudem führt Hypothyreose zur Ablagerung von Glykosaminoglykanen in Muskelfaszien – das kann das Karpaltunnelsyndrom, periartikuläre Schwellungen und Muskelsteifigkeit verursachen.",
    diagnosticTests: [
      { test: "FSH + Östradiol", relevance: "Östrogenmangel als häufigste Ursache perimenopausaler Gelenkbeschwerden bestätigen; Östrogen hat direkte chondroprotektive Wirkung" },
      { test: "TSH, fT3, fT4 + Anti-TPO", relevance: "Hashimoto und Hypothyreose als systemische Entzündungsquelle und Ursache von Myalgie und Arthralgie ausschließen" },
      { test: "Vitamin D (25-OH-D3)", relevance: "Vitamin-D-Mangel ist bei Frauen in Deutschland sehr häufig und direkte Ursache von Muskelschmerzen; Zielwert 40–60 ng/ml" },
      { test: "CRP (hochsensitiv) + Ferritin", relevance: "Systemische Entzündungsmarker bei Hashimoto und Autoimmun-Arthritis; erhöhtes Ferritin als Entzündungszeichen" },
      { test: "Rheumafaktor + Anti-CCP", relevance: "Bei persistierenden Gelenkbeschwerden rheumatoide Arthritis ausschließen – Überlappung mit Hashimoto ist häufig" },
    ],
    conditionIntros: {
      menopause:
        "Gelenk- und Muskelschmerzen sind in der Perimenopause deutlich häufiger als allgemein bekannt – und dennoch selten mit dem Hormonstatus in Verbindung gebracht. In der SWAN-Studie berichteten über 50 % der Perimenopause-Frauen von neu aufgetretenen oder verschlimmerten Gelenkschmerzen. Der Mechanismus: Östrogenabfall fördert systemische Entzündung, reduziert Knorpelschutz und beschleunigt Arthrose-Entwicklung. HRT kann Gelenkbeschwerden in der Perimenopause nachweislich reduzieren.",
      hashimoto:
        "Gelenk- und Muskelschmerzen bei Hashimoto sind kein Zufall: Autoimmunerkrankungen gehen oft mit Polyarthralgie und Myalgie einher. Bei Hashimoto gibt es zwei Mechanismen – erstens die systemische Entzündung durch den Autoimmunprozess selbst, zweitens die hypothyreose-bedingte Ablagerung von Glykosaminoglykanen in Muskeln und Gelenken. Viele Frauen berichten, dass ihre Gelenk- und Muskelschmerzen nach Optimierung der Schilddrüsenwerte und Reduktion der Anti-TPO-Antikörper deutlich besser werden.",
    },
    whenToSeeDoctor:
      "Bei Gelenkschmerzen mit Schwellung, Rötung oder Wärme sofort abklären (Gelenkentzündung, Gicht). Bei symmetrischen Gelenkschmerzen kleiner Gelenke (Finger, Handgelenke): Rheumatologe. Bei Gelenkschmerzen ab 40 mit anderen Hormonsymptomen: Hormonstatus und Schilddrüsenwerte bestimmen.",
    naturalRemedies: [
      "Vitamin D optimieren (Ziel 40–60 ng/ml) – direkte Wirkung auf Muskelschmerzen, am besten mit K2 kombiniert",
      "Omega-3-Fettsäuren (2–3 g EPA+DHA täglich) – anti-inflammatorisch, gut belegt bei arthritischen Beschwerden",
      "Magnesium (400 mg täglich) – reduziert Muskelkrämpfe und -steifigkeit",
      "Curcumin (500–1000 mg täglich mit Piperin) – anti-inflammatorisch, zeigt in Studien Wirkung bei Gelenkschmerzen",
      "Östrogentherapie bei perimenopausalen Gelenkbeschwerden besprechen – wirkt chondroprotektiv",
    ],
    relatedConditions: ["menopause", "hashimoto"],
    faqs: [
      {
        question: "Können Wechseljahre Gelenkschmerzen verursachen?",
        answer:
          "Ja – Gelenkschmerzen in der Perimenopause sind sehr häufig und direkt mit dem Östrogenabfall verbunden. Östrogen hat chondroprotektive Wirkung; wenn es fällt, steigt die Gelenksentzündung. In der SWAN-Studie berichteten >50 % der Perimenopause-Frauen von Gelenkschmerzen. HRT kann die Gelenkbeschwerden deutlich reduzieren.",
      },
      {
        question: "Warum tun bei Hashimoto die Muskeln weh?",
        answer:
          "Bei Hashimoto verursacht die Hypothyreose die Ablagerung von Glykosaminoglykanen in Muskelfaszien – das erzeugt Steifheit und Schmerz. Zudem fördert die systemische Autoimmun-Entzündung Myalgie und Arthralgie. Nach Normalisierung der Schilddrüsenwerte bessern sich die Muskelschmerzen meist. Vitamin D- und Magnesiumspiegel ebenfalls prüfen.",
      },
      {
        question: "Sind Gelenkschmerzen in den Wechseljahren normal?",
        answer:
          "Häufig, ja – aber nicht unvermeidbar. Die Ursache ist behandelbar: Östrogenmangel fördert Gelenkentzündungen direkt. Vitamin D, Omega-3, Östrogen (transdermal) und Gewichtsoptimierung reduzieren das Risiko. Wenn Gelenkschmerzen akut, asymmetrisch oder mit Schwellung auftreten, immer abklären lassen.",
      },
    ],
  },

  blasenschwaeche: {
    slug: "blasenschwaeche",
    name: "Blasenschwäche & häufiger Harndrang",
    nameFull: "Blasenschwäche & genitourinäres Syndrom der Menopause (GSM)",
    description:
      "Blasenschwäche, häufiger Harndrang und Harninkontinenz bei Frauen ab Mitte 40 sind meist hormonal bedingt – Östrogenmangel führt zur Atrophie von Harnröhre, Blase und Beckenboden.",
    metaDescription:
      "Blasenschwäche in den Wechseljahren: Warum Östrogenmangel zu häufigem Harndrang und Inkontinenz führt – und was wirklich hilft (Beckenbodentraining, Östrogen, Mehr).",
    causes: [
      "Östrogenmangel: Harnröhre, Blase und Beckenbodenmuskeln besitzen Östrogenrezeptoren – ihr Fehlen führt zur Gewebeatrophie",
      "Atrophie der Harnröhrenschleimhaut verringert den Verschlussdruck und erhöht die Harnwegsinfektionsanfälligkeit",
      "Überaktive Blase (OAB): Östrogenmangel verändert die Blasensensitivität und Nervenreizleitung",
      "Beckenbodenabsenkung durch altersbedingte Gewebeerschlaffung, verstärkt durch Östrogenmangel",
      "Häufige Harnwegsinfekte durch veränderte urogenitale Mikroflora bei Östrogenmangel",
      "Geburten, Übergewicht und chronischer Husten als zusätzliche Faktoren bei bestehender GSM",
    ],
    detailedExplanation:
      "Das genitourinäre Syndrom der Menopause (GSM) ist der medizinische Oberbegriff für eine Vielzahl von Symptomen, die durch den Östrogenmangel in der Menopause entstehen: Scheidentrockenheit, Brennen, Dyspareunie (Schmerzen beim Sex), häufiger Harndrang, Harnwegsinfektionen und Belastungsinkontinenz. Diese Symptome betreffen schätzungsweise 40–60 % der postmenopausalen Frauen, werden aber aufgrund von Scham selten angesprochen. Im Gegensatz zu Hitzewallungen, die sich bei vielen Frauen nach der Menopause bessern, verschlimmert sich GSM ohne Behandlung progredient.\n\nÖstrogen ist essenziell für die Integrität des Urogenitaltrakts: Es erhält die Elastizität der Blasenwand, die Schleimhautdicke der Harnröhre und den Tonus der Beckenbodenmuskulatur. Lokales (intravaginales) Östrogen – in Form von Creme, Zäpfchen oder Ring – behandelt GSM sehr effektiv und hat minimale systemische Wirkung. Es ist auch für Frauen geeignet, die aus Gründen keine systemische HRT anwenden können oder wollen.",
    diagnosticTests: [
      { test: "Gynäkologische Untersuchung + Hormonbestimmung (FSH, Östradiol)", relevance: "Östrogenmangel als Ursache bestätigen; GSM-Diagnose ist klinisch, nicht laborchemisch" },
      { test: "Urinkultur", relevance: "Bei rezidivierenden Harnwegsinfekten – typisch bei GSM durch veränderte urogenitale Flora" },
      { test: "Urodynamik (bei Spezialistin)", relevance: "Typ der Inkontinenz differenzieren: Belastungs- vs. Dranginkontinenz – entscheidend für Therapiestrategie" },
    ],
    conditionIntros: {
      menopause:
        "Blasenschwäche, häufiger Harndrang und Harnwegsinfektionen in den Wechseljahren werden medizinisch als genitourinäres Syndrom der Menopause (GSM) zusammengefasst. Schätzungsweise 40–60 % der postmenopausalen Frauen sind betroffen, aber nur ein Bruchteil spricht das Thema an. Im Gegensatz zu Hitzewallungen, die häufig von selbst nachlassen, verschlimmert sich GSM ohne Behandlung. Lokales Östrogen (Creme oder Zäpfchen) ist hochwirksam und systemisch kaum relevant.",
    },
    whenToSeeDoctor:
      "Bei Blut im Urin sofort abklären. Bei häufigen Harnwegsinfekten (>3/Jahr) gynäkologisch behandeln – rezidivierende Infekte bei GSM werden oft chronisch. Bei starker Inkontinenz die Lebensqualität beeinträchtigend: Urogynäkologin aufsuchen. Bei Blasenschwäche nie beschämt schweigen – GSM ist gut behandelbar.",
    naturalRemedies: [
      "Beckenbodentraining (Kegel-Übungen): täglich 3 × 10 Wiederholungen – wirksamste nicht-hormonelle Therapie der Belastungsinkontinenz",
      "Lokales Östrogen (intravaginale Creme/Zäpfchen): hochwirksam, systemisch minimal, auch für Frauen mit Brustkrebs-Anamnese oft vertretbar (Rücksprache mit Ärztin)",
      "Ausreichend Flüssigkeit (min. 1,5 L täglich) – Dehydrierung erhöht Blasenirritation",
      "Koffein und Alkohol reduzieren – beide sind Blasenirritative und verschlimmern Dranginkontinenz",
      "Probiotika mit Lactobacillus rhamnosus/reuteri – reduzieren Harnwegsinfektrezidive bei GSM",
    ],
    relatedConditions: ["menopause"],
    faqs: [
      {
        question: "Ist Blasenschwäche in den Wechseljahren normal?",
        answer:
          "Häufig – aber nicht unvermeidbar. 40–60 % der postmenopausalen Frauen haben Symptome des genitourinären Syndroms (GSM). Im Gegensatz zu Hitzewallungen bessert sich GSM nicht von selbst, sondern verschlechtert sich progredient. Lokales Östrogen und Beckenbodentraining sind hochwirksam. Nie aus Scham schweigen – GSM ist sehr gut behandelbar.",
      },
      {
        question: "Warum bekomme ich in den Wechseljahren so oft Harnwegsinfekte?",
        answer:
          "Östrogenmangel verändert die urogenitale Mikroflora: Der pH-Wert der Scheide steigt, Lactobacillen nehmen ab und pathogene Bakterien können leichter adhärieren. Gleichzeitig atrophiert die Harnröhrenschleimhaut, was die Abwehr reduziert. Lokales Östrogen normalisiert die Mikroflora effektiv und reduziert Infektrezidive um bis zu 70 %.",
      },
      {
        question: "Hilft Beckenbodentraining wirklich gegen Blasenschwäche?",
        answer:
          "Ja – Beckenbodentraining ist die am besten belegte nicht-hormonelle Therapie der Belastungsinkontinenz (Urinverlust beim Husten, Niesen, Sport). Bei konsequentem Training (täglich, 3 Monate) ist die Erfolgsrate vergleichbar mit Medikamenten. Physiotherapeutisch angeleitetes Beckenbodenkraining ist effektiver als selbst durchgeführtes.",
      },
    ],
  },
};
