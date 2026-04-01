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
    relatedConditions: ["wechseljahre"],
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
  schlafstörungen: {
    slug: "schlafstörungen",
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
    relatedConditions: ["wechseljahre", "hashimoto", "hormone"],
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
  müdigkeit: {
    slug: "müdigkeit",
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
    relatedConditions: ["hashimoto", "wechseljahre", "schilddrüse", "hormone"],
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
    relatedConditions: ["wechseljahre", "hashimoto", "schilddrüse", "hormone"],
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
    relatedConditions: ["hashimoto", "wechseljahre", "schilddrüse", "hormone"],
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
    relatedConditions: ["wechseljahre", "hormone", "hashimoto"],
    faqs: [
      {
        question: "Sind Stimmungsschwankungen in den Wechseljahren normal?",
        answer:
          "Ja, Stimmungsschwankungen sind in der Perimenopause sehr häufig. Schwankende Östrogenspiegel beeinflussen Serotonin und andere Neurotransmitter. Die meisten Frauen erleben eine Verbesserung nach der Menopause.",
      },
    ],
  },
};
