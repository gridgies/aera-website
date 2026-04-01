export interface FrageData {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  answer: string; // short direct answer (for rich snippet)
  content: {
    sections: {
      heading: string;
      text: string;
    }[];
  };
  relatedQuestions: string[]; // slugs of related questions
  relatedConditions: string[]; // condition slugs for internal linking
  faqs: { question: string; answer: string }[];
}

export const FRAGEN_DATA: Record<string, FrageData> = {
  "wie-lange-dauern-wechseljahre": {
    slug: "wie-lange-dauern-wechseljahre",
    question: "Wie lange dauern die Wechseljahre?",
    metaTitle: "Wie lange dauern die Wechseljahre?",
    metaDescription:
      "Wie lange dauern die Wechseljahre wirklich? Perimenopause, Menopause, Postmenopause erklärt – mit typischen Zeiträumen.",
    answer:
      "Die Wechseljahre (Perimenopause) dauern im Durchschnitt 4–10 Jahre. Hitzewallungen halten bei vielen Frauen 7–10 Jahre an. Die Menopause selbst (letzter Zeitpunkt der Menstruation) wird nach 12 Monaten ohne Periode rückblickend festgestellt.",
    content: {
      sections: [
        {
          heading: "Drei Phasen: Perimenopause, Menopause, Postmenopause",
          text: "Die 'Wechseljahre' sind eigentlich ein Prozess mit drei Phasen. Die Perimenopause beginnt oft schon mit 40–45 Jahren und kann bis zu 10 Jahre dauern. Die Menopause ist der Zeitpunkt der letzten Menstruation – bestätigt nach 12 Monaten ohne Periode. Dann beginnt die Postmenopause.",
        },
        {
          heading: "Wie lange halten Hitzewallungen an?",
          text: "Hitzewallungen sind das häufigste Beschwerden der Wechseljahre. Eine Studie der Universität Pennsylvania (SWAN-Studie) zeigte, dass Hitzewallungen im Median 7,4 Jahre anhalten. Frauen, die früher damit beginnen, erleben sie oft länger.",
        },
        {
          heading: "Wann sind die Wechseljahre abgeschlossen?",
          text: "Die Postmenopause beginnt nach 12 Monaten ohne Menstruation und hält für den Rest des Lebens an. Viele Beschwerden bessern sich in dieser Phase, aber manche Symptome (z.B. Scheidentrockenheit) können ohne Behandlung bestehen bleiben.",
        },
      ],
    },
    relatedQuestions: [
      "wann-beginnen-die-wechseljahre",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
      "hitzewallungen-was-hilft-sofort",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Wann hören Hitzewallungen auf?",
        answer:
          "Im Durchschnitt dauern Hitzewallungen 7–10 Jahre. Bei manchen Frauen hören sie kurz nach der Menopause auf, bei anderen halten sie noch 10–15 Jahre an. Wenn sie sehr belastend sind, kann eine Behandlung (pflanzlich oder HRT) die Dauer und Intensität deutlich reduzieren.",
      },
    ],
  },

  "wann-beginnen-die-wechseljahre": {
    slug: "wann-beginnen-die-wechseljahre",
    question: "Wann beginnen die Wechseljahre?",
    metaTitle: "Wann beginnen die Wechseljahre? Typisches Alter & erste Zeichen",
    metaDescription:
      "Wann beginnen die Wechseljahre? Durchschnittsalter in Deutschland, erste Anzeichen der Perimenopause und was die Menopause beeinflusst.",
    answer:
      "Die Perimenopause beginnt in Deutschland im Durchschnitt mit 45–47 Jahren. Die Menopause (letzte Periode) tritt durchschnittlich mit 51 Jahren ein. Erste Symptome können aber bereits ab 40 auftreten.",
    content: {
      sections: [
        {
          heading: "Durchschnittsalter der Menopause in Deutschland",
          text: "In Deutschland tritt die Menopause im Durchschnitt mit 51 Jahren ein. Dieser Zeitpunkt wird rückblickend festgestellt – nach 12 aufeinanderfolgenden Monaten ohne Menstruation. Die Perimenopause, die Übergangsphase davor, beginnt typischerweise 4–10 Jahre früher.",
        },
        {
          heading: "Erste Anzeichen erkennen",
          text: "Die ersten Zeichen einer beginnenden Perimenopause sind oft subtil: Zyklusveränderungen (kürzere oder längere Abstände), verstärkte PMS-Symptome, erste Schlafstörungen und Stimmungsschwankungen. Viele Frauen bemerken es erst, wenn Hitzewallungen auftreten.",
        },
        {
          heading: "Was beeinflusst den Zeitpunkt der Menopause?",
          text: "Genetik ist der stärkste Faktor – wann Ihre Mutter in die Menopause kam, ist ein guter Indikator. Rauchen beschleunigt die Menopause um 1–2 Jahre. Auch Operationen an den Eierstöcken, Chemotherapie und bestimmte Autoimmunerkrankungen können eine frühere Menopause auslösen.",
        },
      ],
    },
    relatedQuestions: [
      "wie-lange-dauern-wechseljahre",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Kann die Menopause mit 40 beginnen?",
        answer:
          "Eine Perimenopause mit 40 ist möglich und nicht ungewöhnlich. Frühe Menopause (vor 45) betrifft ca. 5 % der Frauen, vorzeitige Menopause (vor 40) ca. 1 %. Wenn Sie mit 40 typische Symptome haben, lohnt sich eine Abklärung beim Gynäkologen.",
      },
    ],
  },

  "was-sind-die-ersten-anzeichen-der-wechseljahre": {
    slug: "was-sind-die-ersten-anzeichen-der-wechseljahre",
    question: "Was sind die ersten Anzeichen der Wechseljahre?",
    metaTitle: "Erste Anzeichen der Wechseljahre: Diese Symptome sollten Sie kennen",
    metaDescription:
      "Erste Anzeichen der Wechseljahre: Welche Symptome kommen zuerst? Perimenopause erkennen, bevor Hitzewallungen auftreten.",
    answer:
      "Die ersten Anzeichen der Wechseljahre (Perimenopause) sind oft Zyklusveränderungen, verstärkte PMS, Schlafstörungen und Stimmungsschwankungen – lange bevor Hitzewallungen auftreten.",
    content: {
      sections: [
        {
          heading: "Die häufigsten frühen Symptome",
          text: "Die Perimenopause beginnt schleichend. Die ersten Zeichen sind oft: unregelmäßigerer Zyklus (kürzer oder länger), stärkere Blutungen, intensivere PMS-Symptome, erste Ein- oder Durchschlafprobleme und unerklärliche Reizbarkeit.",
        },
        {
          heading: "Warum Stimmungsschwankungen oft die ersten Warnzeichen sind",
          text: "Progesteron sinkt in der Perimenopause vor dem Östrogen. Da Progesteron eine beruhigende Wirkung hat, können Angstzustände, Reizbarkeit und Stimmungsschwankungen die ersten spürbaren Symptome sein – manchmal Jahre vor den ersten Hitzewallungen.",
        },
        {
          heading: "Symptome, die oft übersehen werden",
          text: "Weniger bekannte frühe Symptome: Herzrasen oder Herzstolpern, Migräne, die sich verändert, Brain Fog und Vergesslichkeit, Gelenkschmerzen, trockene Haut und erhöhte Empfindlichkeit gegenüber Stress.",
        },
      ],
    },
    relatedQuestions: [
      "wann-beginnen-die-wechseljahre",
      "wie-lange-dauern-wechseljahre",
      "welche-hormone-testen-lassen",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Wie erkenne ich, ob ich in der Perimenopause bin?",
        answer:
          "Ein Bluttest kann helfen: FSH (follikelstimulierendes Hormon) steigt in der Perimenopause an. Allerdings schwankt FSH stark und ist kein zuverlässiger Einzelwert. Symptome sind oft aussagekräftiger als Laborwerte. Ein Gespräch mit Ihrer Gynäkologin ist der beste erste Schritt.",
      },
    ],
  },

  "wie-erkenne-ich-hashimoto": {
    slug: "wie-erkenne-ich-hashimoto",
    question: "Wie erkenne ich Hashimoto?",
    metaTitle: "Wie erkenne ich Hashimoto? Symptome, Diagnose und Bluttests",
    metaDescription:
      "Hashimoto erkennen: Typische Symptome, welche Bluttests nötig sind und warum Hashimoto oft jahrelang unerkannt bleibt.",
    answer:
      "Hashimoto erkennen Sie durch typische Symptome wie Müdigkeit, Gewichtszunahme, Haarausfall und Frieren – und durch einen Bluttest: TPO-Antikörper sind bei Hashimoto meist erhöht, oft zusammen mit einem veränderten TSH-Wert.",
    content: {
      sections: [
        {
          heading: "Die typischen Symptome von Hashimoto",
          text: "Hashimoto Thyreoiditis verursacht meist Symptome einer Schilddrüsenunterfunktion: chronische Müdigkeit und Erschöpfung, Gewichtszunahme, Haarausfall, Frieren, Konzentrationsprobleme, trockene Haut, Verstopfung und Stimmungsschwankungen. In Schubphasen können auch Überfunktionssymptome (Herzrasen, Unruhe) auftreten.",
        },
        {
          heading: "Welche Bluttests für Hashimoto?",
          text: "Der wichtigste Test ist die Messung der TPO-Antikörper (Thyreoperoxidase-Antikörper). Diese sind bei etwa 90 % der Hashimoto-Patienten erhöht. Dazu sollten TSH, fT3 und fT4 gemessen werden. Eine Schilddrüsen-Sonographie ergänzt die Diagnose – die Schilddrüse zeigt bei Hashimoto ein charakteristisches echoarmes Bild.",
        },
        {
          heading: "Warum wird Hashimoto so oft spät erkannt?",
          text: "Hashimoto wird häufig 5–10 Jahre nicht erkannt, weil die Symptome unspezifisch sind und oft anderen Ursachen zugeschrieben werden. TSH kann lange im Normbereich liegen, selbst wenn die Krankheit aktiv ist. Wer klassische Symptome hat, sollte explizit nach den TPO-Antikörpern fragen.",
        },
      ],
    },
    relatedQuestions: [
      "kann-hashimoto-geheilt-werden",
      "hashimoto-ernaehrung-was-essen",
      "welche-blutwerte-bei-muedigkeit",
    ],
    relatedConditions: ["hashimoto"],
    faqs: [
      {
        question: "Welcher Bluttest zeigt Hashimoto?",
        answer:
          "TPO-Antikörper (Thyreoperoxidase-Antikörper) sind der wichtigste Marker. Zusätzlich: Tg-Antikörper, TSH, fT3, fT4. Wichtig: TSH allein reicht nicht, um Hashimoto auszuschließen. Bestehen Sie auf den Antikörpern.",
      },
    ],
  },

  "kann-hashimoto-geheilt-werden": {
    slug: "kann-hashimoto-geheilt-werden",
    question: "Kann Hashimoto geheilt werden?",
    metaTitle: "Kann Hashimoto geheilt werden? Was die Wissenschaft sagt",
    metaDescription:
      "Kann Hashimoto geheilt werden? Aktuelle Erkenntnisse zu Remission, Behandlung und dem Leben mit Hashimoto.",
    answer:
      "Hashimoto kann derzeit nicht geheilt werden. Es handelt sich um eine Autoimmunerkrankung. Mit der richtigen Behandlung und Lebensstilanpassungen ist aber Remission möglich – viele Frauen führen ein weitgehend beschwerdefreies Leben.",
    content: {
      sections: [
        {
          heading: "Was bedeutet Remission bei Hashimoto?",
          text: "Remission bedeutet: die Autoimmunaktivität nimmt ab, Antikörperwerte sinken, und die Schilddrüsenfunktion stabilisiert sich. Das ist möglich – und bei einigen Frauen sinken die TPO-Antikörper dauerhaft in den Normbereich. Eine 'Heilung' im Sinne von Verschwinden der Erkrankung ist jedoch selten.",
        },
        {
          heading: "Was hilft, um Hashimoto zu verbessern?",
          text: "Maßnahmen, die die Krankheitsaktivität reduzieren können: Selen (200 µg täglich kann TPO-Antikörper senken), Vitamin D optimieren (Mangel verstärkt Autoimmunaktivität), glutenfreie Ernährung (hilft einem Teil der Betroffenen), Stressreduktion, Schlafen und Bewegung. Die Datenlage ist teilweise noch begrenzt, aber diese Maßnahmen schaden nicht.",
        },
        {
          heading: "Behandlung: L-Thyroxin",
          text: "Wenn die Schilddrüsenfunktion durch Hashimoto beeinträchtigt ist, wird L-Thyroxin (Schilddrüsenhormon) supplementiert. Das ersetzt die fehlende Hormonproduktion und verbessert die Symptome deutlich. Die Dosis wird regelmäßig angepasst.",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "hashimoto-ernaehrung-was-essen",
      "welche-blutwerte-bei-muedigkeit",
    ],
    relatedConditions: ["hashimoto"],
    faqs: [
      {
        question: "Muss ich mit Hashimoto immer Medikamente nehmen?",
        answer:
          "Nicht zwingend. Wenn die Schilddrüsenwerte normal sind, ist keine Medikation nötig. Sobald der TSH-Wert zu stark ansteigt oder Symptome auftreten, wird L-Thyroxin verschrieben. Manche Frauen brauchen lebenslang Medikamente, andere haben lange beschwerdefreie Phasen.",
      },
    ],
  },

  "welche-hormone-testen-lassen": {
    slug: "welche-hormone-testen-lassen",
    question: "Welche Hormone testen lassen als Frau?",
    metaTitle: "Welche Hormone testen lassen? Das komplette Hormonpanel für Frauen",
    metaDescription:
      "Welche Hormone sollten Frauen testen lassen? Das vollständige Hormonpanel – von Schilddrüse bis Sexualhormone – erklärt.",
    answer:
      "Ein sinnvolles Basis-Hormonpanel für Frauen umfasst: TSH, fT3, fT4, TPO-Antikörper, Östradiol (E2), Progesteron, FSH, LH, Testosteron, DHEA-S, Cortisol, Insulin sowie Vitamin D und Ferritin.",
    content: {
      sections: [
        {
          heading: "Das Schilddrüsen-Panel",
          text: "TSH, fT3, fT4 und TPO-Antikörper sind die wichtigsten Schilddrüsenwerte. TSH allein reicht nicht – fT3 und fT4 zeigen die tatsächlich aktiven Hormone. TPO-Antikörper schließen Hashimoto ein oder aus.",
        },
        {
          heading: "Sexualhormone",
          text: "Östradiol (E2) ist das wichtigste Östrogen und zeigt den aktuellen Status in der Perimenopause. FSH steigt an, wenn die Eierstöcke nachlassen. LH, Progesteron und Testosteron ergänzen das Bild. DHEA-S spiegelt die Nebennierenaktivität wider.",
        },
        {
          heading: "Stresshormone und Mikronährstoffe",
          text: "Cortisol (Speicheltest über den Tag verteilt ist aussagekräftiger als Bluttest) zeigt die Nebennierenbelastung. Ferritin (nicht nur Eisen!) ist der beste Marker für den Eisenspeicher. Vitamin D sollte bei >40 ng/ml liegen. Vitamin B12 ist wichtig für Energie und Nerven.",
        },
        {
          heading: "Wann und wo testen lassen?",
          text: "Die meisten Sexualhormone sollten in der ersten Zyklushälfte (Tag 3–5 nach Beginn der Menstruation) gemessen werden – außer Progesteron, das in der zweiten Hälfte (Tag 19–22) gemessen wird. Gynäkologe oder Endokrinologe sind die richtigen Anlaufstellen.",
        },
      ],
    },
    relatedQuestions: [
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
      "wie-erkenne-ich-hashimoto",
      "welche-blutwerte-bei-muedigkeit",
    ],
    relatedConditions: ["hormone", "wechseljahre", "hashimoto"],
    faqs: [
      {
        question: "Kann ich einen Hormontest zuhause machen?",
        answer:
          "Es gibt Heimtests für Speichel oder Urin, die einige Hormone messen. Diese sind praktisch, aber weniger präzise als Bluttests. Für eine fundierte Diagnose empfiehlt sich ein ärztlicher Bluttest, bei dem auch Referenzbereiche individuell interpretiert werden.",
      },
    ],
  },

  "hitzewallungen-was-hilft-sofort": {
    slug: "hitzewallungen-was-hilft-sofort",
    question: "Was hilft sofort gegen Hitzewallungen?",
    metaTitle: "Was hilft sofort gegen Hitzewallungen? Bewährte Tipps",
    metaDescription:
      "Was hilft sofort gegen Hitzewallungen? Schnelle Maßnahmen für akute Schübe und langfristige Strategien für weniger Hitzewallungen.",
    answer:
      "Sofortige Hilfe bei Hitzewallungen: kühles Wasser auf Handgelenke und Nacken, tiefe Bauchatmung (4 Sekunden ein, 4 Sekunden aus), lockere Kleidung ausziehen, kühles Wasser trinken.",
    content: {
      sections: [
        {
          heading: "Sofortmaßnahmen bei einer Hitzewallung",
          text: "Wenn eine Hitzewallung einsetzt: sofort tiefe, ruhige Atemzüge nehmen. Kühles Wasser auf Handgelenke, Nacken oder Schläfen tupfen. Kleidung lockern. Bei Möglichkeit in einen kühleren Raum wechseln oder frische Luft schnappen.",
        },
        {
          heading: "Was Hitzewallungen auslöst – und was man meiden sollte",
          text: "Häufige Trigger: Alkohol, scharfes Essen, Koffein, heißes Essen und Trinken, Stress, enge synthetische Kleidung, heiße Duschen. Nicht alle Trigger treffen jede Frau – ein Tagebuch hilft, die eigenen Auslöser zu identifizieren.",
        },
        {
          heading: "Langfristige Strategien",
          text: "Bewährte Mittel: pflanzliche Präparate (Traubsilberkerze, Rotklee-Isoflavone), regelmäßiger Ausdauersport, Entspannungstraining wie Yoga oder Atemübungen, kühle Schlafumgebung. Bei starken Hitzewallungen ist Hormonersatztherapie (HRT) die wirksamste Behandlung.",
        },
      ],
    },
    relatedQuestions: [
      "wie-lange-dauern-wechseljahre",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Hilft Magnesium gegen Hitzewallungen?",
        answer:
          "Magnesium hat in einigen kleinen Studien Hitzewallungen reduziert, besonders bei Frauen nach Brustkrebstherapie. Die Datenlage ist begrenzt. Schaden tut es nicht – Magnesium (besonders Magnesiumglycinat oder -citrat) verbessert oft auch den Schlaf.",
      },
    ],
  },

  "welche-blutwerte-bei-muedigkeit": {
    slug: "welche-blutwerte-bei-muedigkeit",
    question: "Welche Blutwerte bei Müdigkeit testen lassen?",
    metaTitle: "Welche Blutwerte bei Müdigkeit? Das komplette Diagnosepanel",
    metaDescription:
      "Chronische Müdigkeit: Welche Blutwerte testen lassen? Komplette Übersicht über sinnvolle Laborwerte bei anhaltender Erschöpfung.",
    answer:
      "Bei chronischer Müdigkeit sollten mindestens getestet werden: TSH, fT3, fT4, TPO-Antikörper, Ferritin, Vitamin D, Vitamin B12, Hämoglobin, HbA1c (Blutzucker) und Cortisol. Ein vollständiges Blutbild rundet die Diagnostik ab.",
    content: {
      sections: [
        {
          heading: "Schilddrüse (häufigste Ursache bei Frauen)",
          text: "TSH: der erste Screening-Wert. Bei Müdigkeit auch fT3 und fT4 messen – TSH allein kann normal sein, obwohl fT3 (das aktive Hormon) zu niedrig ist. TPO-Antikörper: schließen Hashimoto ein oder aus.",
        },
        {
          heading: "Eisen und Blutbild",
          text: "Ferritin ist der wichtigste Eisenwert – nicht nur Eisen! Ein Ferritin unter 30 µg/l verursacht Müdigkeit, unter 70 µg/l oft Haarausfall. Das vollständige Blutbild zeigt, ob eine Anämie (niedriger Hämoglobin) vorliegt.",
        },
        {
          heading: "Vitamine und Nährstoffe",
          text: "Vitamin D (25-OH-Vitamin D): Zielwert >40 ng/ml. Unter 20 ng/ml verursacht Müdigkeit und Muskelschmerzen. Vitamin B12: Unter 300 pg/ml entstehen Energie- und Nervensymptome. Folsäure und Magnesium können ebenfalls relevant sein.",
        },
        {
          heading: "Hormone und Stoffwechsel",
          text: "HbA1c und Nüchternblutzucker: Insulinresistenz ist eine häufige unerkannte Ursache von Müdigkeit. Cortisol: Ein Tagesprofiil (Speichel) zeigt Nebennierenerschöpfung besser als ein einzelner Bluttest. Östradiol: Bei perimenopausalem Östrogenabfall kommt es zu Erschöpfung.",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "welche-hormone-testen-lassen",
    ],
    relatedConditions: ["hashimoto", "schilddrüse", "hormone"],
    faqs: [
      {
        question: "Was wenn alle Werte normal sind, ich aber trotzdem müde bin?",
        answer:
          "Normale Standardwerte schließen viele Ursachen nicht aus. Ferritin kann im 'Normbereich' sein, aber unter 70 µg/l Haarausfall und Müdigkeit verursachen. fT3 kann niedrig sein, obwohl TSH normal ist. Vitamin D kann bei 21 ng/ml 'ausreichend' aber bei weitem nicht optimal sein. Funktionelle Medizin und Spezialistinnen prüfen tiefgehender.",
      },
    ],
  },

  "hashimoto-ernaehrung-was-essen": {
    slug: "hashimoto-ernaehrung-was-essen",
    question: "Was essen bei Hashimoto? Die beste Ernährung",
    metaTitle: "Hashimoto Ernährung: Was essen, was meiden?",
    metaDescription:
      "Hashimoto Ernährung: Was hilft wirklich? Glutenfrei, entzündungshemmend, selenreich – Ernährungsguide für Hashimoto-Betroffene.",
    answer:
      "Bei Hashimoto hilft eine entzündungshemmende Ernährung mit viel Gemüse, hochwertigen Proteinen, Omega-3-Fetten und Selen-reichen Lebensmitteln. Viele Betroffene profitieren von glutenfreier Ernährung – ein Selbstversuch für 3 Monate ist sinnvoll.",
    content: {
      sections: [
        {
          heading: "Selen: Das wichtigste Mineral bei Hashimoto",
          text: "Selen ist für die Schilddrüsenfunktion essenziell und hat antioxidative Wirkung. Studien zeigen, dass 200 µg Selen täglich die TPO-Antikörper senken kann. Gute Quellen: Paranüsse (1–2 pro Tag reichen!), Fisch, Fleisch, Eier.",
        },
        {
          heading: "Gluten: Weglassen oder nicht?",
          text: "Hashimoto und Zöliakie kommen häufiger gemeinsam vor. Auch ohne Zöliakie berichten viele Betroffene von Besserung bei glutenfreier Ernährung. Ein dreimonatiger Selbstversuch ist empfehlenswert. Wissenschaftlich ist die Datenlage noch begrenzt, aber das Risiko ist gering.",
        },
        {
          heading: "Entzündungshemmend essen",
          text: "Entzündungshemmende Lebensmittel: Fettreicher Fisch (Lachs, Makrele, Sardinen), Olivenöl, Walnüsse, Beeren, grünes Blattgemüse, Kurkuma, Ingwer. Zu meiden: verarbeitete Lebensmittel, Zucker, Transfette, übermäßig Alkohol.",
        },
        {
          heading: "Jod: Mit Vorsicht",
          text: "Jod ist für die Schilddrüse nötig, aber bei Hashimoto kann eine zu hohe Jodzufuhr die Autoimmunreaktion verstärken. Jodiertes Salz und moderate Jodfufuhr über Fisch und Milchprodukte sind in der Regel unproblematisch. Hochdosierte Jodpräparate sollten ohne ärztliche Kontrolle vermieden werden.",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "kann-hashimoto-geheilt-werden",
    ],
    relatedConditions: ["hashimoto"],
    faqs: [
      {
        question: "Sollte ich bei Hashimoto auf Milchprodukte verzichten?",
        answer:
          "Milchprodukte müssen bei Hashimoto nicht grundsätzlich gemieden werden. Wenn Sie Laktoseintoleranz haben (bei Hashimoto häufiger), helfen laktosefreie Produkte oder pflanzliche Alternativen. Einige Betroffene reagieren auch auf Kasein (Milcheiweiß) – ein Weglassversuch kann Aufschluss geben.",
      },
    ],
  },

  "oestrogendominanz-symptome": {
    slug: "oestrogendominanz-symptome",
    question: "Was sind Symptome einer Östrogendominanz?",
    metaTitle: "Östrogendominanz Symptome: Erkennen und behandeln",
    metaDescription:
      "Östrogendominanz Symptome bei Frauen: starke Menstruation, PMS, Gewichtszunahme, Brustspannen. Ursachen und natürliche Behandlung.",
    answer:
      "Symptome der Östrogendominanz umfassen: starke und lange Menstruation, Brustspannen, PMS, Wassereinlagerungen, Gewichtszunahme (besonders Hüften/Oberschenkel), Stimmungsschwankungen und Reizbarkeit.",
    content: {
      sections: [
        {
          heading: "Was ist Östrogendominanz?",
          text: "Östrogendominanz bedeutet nicht unbedingt zu viel Östrogen, sondern ein Ungleichgewicht zwischen Östrogen und Progesteron – wobei Östrogen relativ dominiert. Dies tritt häufig in der Perimenopause auf, wenn Progesteron zuerst sinkt, aber auch bei jüngeren Frauen durch Stress, Umwelthormone und Ernährung.",
        },
        {
          heading: "Häufige Symptome im Überblick",
          text: "Typische Zeichen: schwere, schmerzhafte Menstruation, prämenstruelles Syndrom (PMS), Brustspannen und Brustschmerzen, Wassereinlagerungen, Gewichtszunahme an Hüften und Oberschenkeln, Stimmungsschwankungen und Angst, Müdigkeit, Schlafstörungen.",
        },
        {
          heading: "Wie wird Östrogendominanz behandelt?",
          text: "Maßnahmen: Progesteronspiegel stärken (bioidentisches Progesteron auf ärztliche Verschreibung), Lebergesundheit unterstützen (Leber baut Östrogen ab – weniger Alkohol, Kreuzblütler essen), Gewicht normalisieren (Fettzellen produzieren Östrogen), Xenoöstrogene meiden (Plastik, bestimmte Kosmetik).",
        },
      ],
    },
    relatedQuestions: [
      "welche-hormone-testen-lassen",
      "progesteronmangel-symptome",
    ],
    relatedConditions: ["hormone", "wechseljahre"],
    faqs: [
      {
        question: "Kann Östrogendominanz Haarausfall verursachen?",
        answer:
          "Ja. Ein Östrogen-Progesteron-Ungleichgewicht kann Haarausfall verursachen – besonders diffusen Haarausfall. Auch Androgenüberschuss (häufig bei Östrogendominanz) stimuliert Haarausfall. Ein Hormonpanel gibt Aufschluss.",
      },
    ],
  },

  "progesteronmangel-symptome": {
    slug: "progesteronmangel-symptome",
    question: "Symptome bei Progesteronmangel: Was sind die Zeichen?",
    metaTitle: "Progesteronmangel Symptome: Erkennen und verstehen",
    metaDescription:
      "Progesteronmangel Symptome: Schlafstörungen, Angst, PMS, kurze Zyklen und mehr. Wie Progesteronmangel diagnostiziert und behandelt wird.",
    answer:
      "Progesteronmangel zeigt sich durch: Schlafstörungen (besonders Ein- und Durchschlafen), Angst und innere Unruhe, PMS, kurze Zyklen, Schmierblutungen vor der Periode, Stimmungsschwankungen und Wassereinlagerungen.",
    content: {
      sections: [
        {
          heading: "Die Rolle von Progesteron",
          text: "Progesteron ist das 'Beruhigungshormon'. Es hat entspannende Wirkung auf das Gehirn (bindet an GABA-Rezeptoren), fördert den Schlaf, stabilisiert die Stimmung und gleicht Östrogen aus. In der zweiten Zyklushälfte und in der Schwangerschaft ist es besonders wichtig.",
        },
        {
          heading: "Typische Symptome bei zu wenig Progesteron",
          text: "Häufige Zeichen: Ein- und Durchschlafprobleme (Progesteron hat schlaffördernde Wirkung), Angst, innere Unruhe und Herzrasen, starkes PMS, kurze Zyklen unter 25 Tagen, Schmierblutungen vor der Periode, Stimmungsschwankungen, erhöhte Stressempfindlichkeit.",
        },
        {
          heading: "Diagnose und Behandlung",
          text: "Progesteron wird an Tag 19–22 des Zyklus gemessen (nach dem Eisprung). Normwerte: in der Lutealphase >5 ng/ml, optimal >10 ng/ml. Behandlung: bioidentisches Progesteron (Utrogest) ist verschreibungspflichtig und die sicherste Option. Mönchspfeffer unterstützt die körpereigene Progesteronproduktion.",
        },
      ],
    },
    relatedQuestions: [
      "oestrogendominanz-symptome",
      "welche-hormone-testen-lassen",
    ],
    relatedConditions: ["hormone", "wechseljahre"],
    faqs: [
      {
        question: "Kann Progesteronmangel Angst verursachen?",
        answer:
          "Ja. Progesteron wird im Gehirn zu Allopregnanolon umgewandelt, das die GABA-Rezeptoren stimuliert – ähnlich wie ein natürliches Beruhigungsmittel. Sinkt Progesteron, kann Angst, innere Unruhe und Reizbarkeit zunehmen. Viele Frauen berichten von deutlicher Verbesserung durch bioidentisches Progesteron.",
      },
    ],
  },

  "schilddruesenwerte-verstehen": {
    slug: "schilddruesenwerte-verstehen",
    question: "Schilddrüsenwerte verstehen: Was sind normale TSH-, T3- und T4-Werte?",
    metaTitle: "Schilddrüsenwerte verstehen: TSH, fT3, fT4 erklärt",
    metaDescription:
      "Schilddrüsenwerte erklärt: Was bedeuten TSH, fT3, fT4 und Antikörper? Normwerte und was bei Abweichungen zu tun ist.",
    answer:
      "TSH (thyreoidstimulierendes Hormon): Normbereich 0,4–4,0 mIU/l, optimal 1–2,5 mIU/l. fT3 (freies T3): aktives Schilddrüsenhormon, Normbereich 2,3–4,2 pg/ml. fT4 (freies T4): Vorläuferhormon, Normbereich 0,8–1,8 ng/dl. TPO-Antikörper: unter 34 IU/ml normal.",
    content: {
      sections: [
        {
          heading: "TSH: Das Steuerungshormon",
          text: "TSH wird von der Hirnanhangsdrüse produziert und steuert die Schilddrüse. Hoher TSH bedeutet: Schilddrüse arbeitet zu wenig (Hypothyreose). Niedriger TSH bedeutet: Schilddrüse überaktiv (Hyperthyreose). Der 'Normbereich' in Labors ist weit – viele Frauen fühlen sich mit TSH über 2,5 bereits schlecht.",
        },
        {
          heading: "fT3 und fT4: Die eigentlichen Schilddrüsenhormone",
          text: "T4 (Thyroxin) ist das Speicherhormon, das von der Schilddrüse produziert wird. Es wird in den Geweben in das aktive T3 umgewandelt. Manchmal ist T4 normal, aber T3 niedrig – weil die Umwandlung gestört ist. Deshalb ist es wichtig, beide Werte zu messen.",
        },
        {
          heading: "Antikörper: TPO und Tg",
          text: "TPO-Antikörper (Thyreoperoxidase): erhöht bei Hashimoto (und Morbus Basedow). Tg-Antikörper (Thyreoglobulin): ebenfalls bei Hashimoto, weniger sensitiv. Erhöhte Antikörper zeigen eine aktive Autoimmunreaktion an, auch wenn die Schilddrüsenfunktion noch normal ist.",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "welche-blutwerte-bei-muedigkeit",
    ],
    relatedConditions: ["hashimoto", "schilddrüse"],
    faqs: [
      {
        question: "Was bedeutet TSH zu hoch?",
        answer:
          "Ein erhöhter TSH-Wert bedeutet, dass die Hirnanhangsdrüse die Schilddrüse antreibt, weil sie zu wenig Hormone produziert (Hypothyreose). Bei TSH über 4 mIU/l liegt laut Labornorm eine Unterfunktion vor. Viele Endokrinologen behandeln bereits ab TSH >2,5, wenn Symptome vorliegen.",
      },
    ],
  },

  "brain-fog-frauen": {
    slug: "brain-fog-frauen",
    question: "Brain Fog bei Frauen: Ursachen und was hilft",
    metaTitle: "Brain Fog bei Frauen: Hormonelle Ursachen und Behandlung",
    metaDescription:
      "Brain Fog bei Frauen: Warum hormonelle Veränderungen (Wechseljahre, Hashimoto) zu geistiger Unklarheit führen und was wirklich hilft.",
    answer:
      "Brain Fog bei Frauen hat häufig hormonelle Ursachen: Östrogenabfall in der Perimenopause, Schilddrüsenunterfunktion durch Hashimoto, Schlafmangel oder Vitamin-B12-Mangel. Bluttest und Hormontesting sind der erste Schritt.",
    content: {
      sections: [
        {
          heading: "Was ist Brain Fog?",
          text: "Brain Fog beschreibt einen Zustand geistiger Unklarheit: Konzentrationsprobleme, Vergesslichkeit, das Gefühl, 'durch Watte zu denken', verlangsamtes Denken. Er ist keine Krankheit, sondern ein Symptom – und häufig hormonell bedingt.",
        },
        {
          heading: "Hormonelle Ursachen",
          text: "Östrogen schützt das Gehirn. Es fördert Gedächtniskonsolidierung, Serotonin und Durchblutung. Sinkt es in der Perimenopause, leidet die Kognition. Auch Schilddrüsenhormone sind essenziell für Gehirnfunktion – Hashimoto-bedingte Unterfunktion verursacht Brain Fog.",
        },
        {
          heading: "Was hilft gegen Brain Fog?",
          text: "Wichtigste Maßnahmen: Ursache klären (Bluttest!), Schlaf priorisieren (Gedächtniskonsolidierung passiert im Schlaf), regelmäßige aerobe Bewegung (verbessert Durchblutung und Neuroplastizität), Omega-3-Fett DHA (Hauptfettsäure im Gehirn), Stressreduktion (Cortisol schadet dem Hippocampus).",
        },
      ],
    },
    relatedQuestions: [
      "welche-blutwerte-bei-muedigkeit",
      "wie-erkenne-ich-hashimoto",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
    ],
    relatedConditions: ["wechseljahre", "hashimoto"],
    faqs: [
      {
        question: "Geht Brain Fog nach den Wechseljahren weg?",
        answer:
          "Bei vielen Frauen bessert sich Brain Fog nach der Menopause, wenn sich der Hormonhaushalt stabilisiert. Bis dahin helfen ausreichend Schlaf, Bewegung, Omega-3 und – wenn nötig – Hormontherapie. Bei Hashimoto bessert sich Brain Fog mit optimaler Schilddrüsenmedikation.",
      },
    ],
  },

  "wechseljahre-test-zuhause": {
    slug: "wechseljahre-test-zuhause",
    question: "Wechseljahre Test zuhause: Was gibt es und wie zuverlässig ist er?",
    metaTitle: "Wechseljahre Test zuhause: FSH-Test, Speicheltest & Co.",
    metaDescription:
      "Wechseljahre Test zuhause: Welche Tests gibt es, wie zuverlässig sind sie und was zeigen sie wirklich?",
    answer:
      "Heimtests messen meist FSH (follikelstimulierendes Hormon) im Urin. Ein erhöhter FSH-Wert deutet auf nachlassende Eierstockfunktion hin. Allerdings schwankt FSH in der Perimenopause stark – ein einmaliger Test ist wenig aussagekräftig.",
    content: {
      sections: [
        {
          heading: "Welche Heimtests gibt es?",
          text: "Die häufigsten Heimtests messen FSH im Urin (ähnlich wie ein Schwangerschaftstest). Es gibt auch Speicheltests, die mehrere Hormone messen. Diese sind bequem, aber teuer und weniger genau als Bluttests.",
        },
        {
          heading: "Warum ein einmaliger FSH-Test wenig aussagt",
          text: "FSH schwankt in der Perimenopause stark – von einem Tag auf den anderen kann der Wert stark variieren. Selbst in der Menopause kann FSH kurzzeitig niedrig sein. Ein erhöhter FSH-Wert ist ein Hinweis, aber kein Beweis für die Menopause.",
        },
        {
          heading: "Was ist aussagekräftiger?",
          text: "Symptome und ihre Entwicklung über Zeit sind oft aussagekräftiger als ein Einzeltest. Wenn Symptome auftreten, ist ein ärztlicher Bluttest mit FSH, LH, Östradiol, TSH und weiteren Werten deutlich informativer. Ihre Gynäkologin kann die Werte im Kontext interpretieren.",
        },
      ],
    },
    relatedQuestions: [
      "welche-hormone-testen-lassen",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Wo kann ich einen zuverlässigen Wechseljahre-Test kaufen?",
        answer:
          "FSH-Heimtests sind in Apotheken erhältlich. Bekannte Marken: Clearblue Menopause, Cerascreen Wechseljahre-Test. Wichtig: Ein positiver Test ist kein Diagnose-Ersatz. Für eine fundierte Einschätzung immer den Arztbesuch als nächsten Schritt planen.",
      },
    ],
  },

  "perimenopause-dauer": {
    slug: "perimenopause-dauer",
    question: "Wie lange dauert die Perimenopause?",
    metaTitle: "Wie lange dauert die Perimenopause? Phasen und Zeiträume",
    metaDescription:
      "Perimenopause Dauer: Von 2 bis 10 Jahren – was beeinflusst die Länge? Phasen der Perimenopause erklärt.",
    answer:
      "Die Perimenopause dauert im Durchschnitt 4–10 Jahre. Sie beginnt häufig mit 40–45 Jahren und endet mit der Menopause (letzter Periode). Die Intensität der Beschwerden variiert stark.",
    content: {
      sections: [
        {
          heading: "Frühe Perimenopause (erste Anzeichen bis Zyklusveränderungen)",
          text: "Die frühe Perimenopause beginnt subtil: PMS wird stärker, die Stimmung schwankt mehr, der Schlaf verschlechtert sich leicht. Der Zyklus ist noch regelmäßig, aber Hormonspiegel beginnen zu schwanken. Diese Phase dauert 2–5 Jahre.",
        },
        {
          heading: "Späte Perimenopause (Zyklusunregelmäßigkeiten bis letzter Periode)",
          text: "Die späte Perimenopause ist durch deutliche Zyklusveränderungen (Aussetzer >60 Tage), intensive Hitzewallungen und Schlafstörungen geprägt. Diese Phase dauert durchschnittlich 1–3 Jahre bis zur letzten Menstruation.",
        },
        {
          heading: "Was die Dauer beeinflusst",
          text: "Genetik: Die Mutter als Indikator. Rauchen: verkürzt die fruchtbare Phase und kann Symptome verstärken. Körpergewicht, Stress und allgemeine Gesundheit spielen ebenfalls eine Rolle.",
        },
      ],
    },
    relatedQuestions: [
      "wie-lange-dauern-wechseljahre",
      "wann-beginnen-die-wechseljahre",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Woran erkenne ich, dass die Perimenopause endet?",
        answer:
          "Die Perimenopause endet mit der Menopause – dem Zeitpunkt der letzten Menstruation. Dieser wird rückblickend nach 12 Monaten ohne Periode bestätigt. Danach beginnt die Postmenopause.",
      },
    ],
  },

  "hashimoto-muedigkeit-was-hilft": {
    slug: "hashimoto-muedigkeit-was-hilft",
    question: "Hashimoto Müdigkeit: Was hilft wirklich?",
    metaTitle: "Hashimoto Müdigkeit: Ursachen und was wirklich hilft",
    metaDescription:
      "Hashimoto Müdigkeit trotz normaler Werte? Ursachen, optimale Schilddrüseneinstellung und Lebensstilmaßnahmen gegen chronische Erschöpfung bei Hashimoto.",
    answer:
      "Hashimoto-Müdigkeit entsteht durch unzureichende Schilddrüsenhormonproduktion und Nährstoffmängel. Wichtigste Maßnahmen: optimale Einstellung der Schilddrüsenwerte (TSH unter 2,5), Selen, Vitamin D, Ferritin optimieren, Stress reduzieren.",
    content: {
      sections: [
        {
          heading: "Warum bin ich bei Hashimoto trotz Medikamente noch müde?",
          text: "Müdigkeit trotz L-Thyroxin ist häufig. Mögliche Ursachen: TSH-Zielwert noch zu hoch (optimal unter 1–2 mIU/l), schlechte T4→T3-Umwandlung (kombinierte T4/T3-Therapie erwägen), gleichzeitige Mängel (Vitamin D, Ferritin, B12), Begleiterkrankungen (Glutenunverträglichkeit, Nebennierenerschöpfung).",
        },
        {
          heading: "Nährstoffe gegen Hashimoto-Müdigkeit",
          text: "Selen (200 µg täglich) unterstützt die T4→T3-Umwandlung und reduziert Antikörper. Vitamin D: Zielwert 50–70 ng/ml, oft stark unterversorgt bei Hashimoto. Ferritin: Zielwert >70 µg/l für gute Schilddrüsenfunktion. Magnesium: verbessert Schlaf und Energiestoffwechsel.",
        },
        {
          heading: "Lebensstil bei Hashimoto-Erschöpfung",
          text: "Sanfte Bewegung: Überlastung verschlechtert Hashimoto-Symptome. Ausdauersport in Maßen ist besser als Hochintensiv-Training. Schlaf priorisieren. Anti-entzündliche Ernährung. Glutenfreier Versuch (3 Monate).",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "kann-hashimoto-geheilt-werden",
      "welche-blutwerte-bei-muedigkeit",
    ],
    relatedConditions: ["hashimoto"],
    faqs: [
      {
        question: "Wann wird Hashimoto-Müdigkeit besser?",
        answer:
          "Mit optimaler L-Thyroxin-Einstellung verbessert sich die Müdigkeit bei den meisten Frauen innerhalb von 6–12 Wochen. Wenn sie trotz guter Werte anhält, sollten Vitamin-D, Ferritin, B12 und weitere Nährstoffe überprüft werden.",
      },
    ],
  },

  "wechseljahre-gewichtszunahme-vermeiden": {
    slug: "wechseljahre-gewichtszunahme-vermeiden",
    question: "Wie vermeide ich Gewichtszunahme in den Wechseljahren?",
    metaTitle: "Wechseljahre Gewichtszunahme vermeiden: Was wirklich hilft",
    metaDescription:
      "Gewichtszunahme in den Wechseljahren verhindern: Warum Kalorien allein nicht helfen und welche Strategien wirklich funktionieren.",
    answer:
      "Gewichtszunahme in den Wechseljahren lässt sich durch Krafttraining (Muskelerhalt), proteinreiche Ernährung, ausreichend Schlaf und Stressreduktion gezielt entgegenwirken. Kalorien zählen allein hilft wenig – der Hormonhaushalt muss stimmen.",
    content: {
      sections: [
        {
          heading: "Warum nehmen Frauen in den Wechseljahren zu?",
          text: "Sinkende Östrogenspiegel verlagern die Fettspeicherung vom Unterkörper in den Bauchbereich. Gleichzeitig verlangsamt sich der Stoffwechsel durch Muskelabbau und eine reduzierte Schilddrüsenaktivität. Cortisol – das Stresshormon – steigt relativ an und fördert die Bauchfettbildung zusätzlich.",
        },
        {
          heading: "Krafttraining ist wichtiger als Ausdauer",
          text: "Muskeln sind der größte Stoffwechselmacher des Körpers. In den Wechseljahren verlieren Frauen ohne Training jährlich ca. 0,5–1 % Muskelmasse. Krafttraining 2–3x pro Woche erhält nicht nur Muskeln, sondern verbessert auch die Insulinsensitivität – ein Schlüsselfaktor für die Gewichtskontrolle.",
        },
        {
          heading: "Protein ist entscheidend",
          text: "Protein sättigt länger, schützt Muskelmasse beim Abnehmen und hat eine hohe thermische Wirkung (der Körper verbrennt Kalorien beim Verdauen). Ziel: 1,2–1,6 g Protein pro kg Körpergewicht täglich. Gute Quellen: Hülsenfrüchte, Eier, Fisch, Hähnchen, griechischer Joghurt.",
        },
        {
          heading: "Schlaf und Stressreduktion nicht unterschätzen",
          text: "Schlafmangel erhöht Ghrelin (Hungerhormon) und senkt Leptin (Sättigungshormon). Chronischer Stress erhöht Cortisol, was direkt die Bauchfettbildung fördert. Wer schlecht schläft, isst im Schnitt 300–500 kcal mehr pro Tag.",
        },
      ],
    },
    relatedQuestions: [
      "wie-lange-dauern-wechseljahre",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
      "progesteronmangel-symptome",
    ],
    relatedConditions: ["wechseljahre", "hormone"],
    faqs: [
      {
        question: "Warum funktioniert Diät in den Wechseljahren nicht mehr?",
        answer:
          "Mit sinkendem Östrogen verändert sich der Hormonhaushalt so, dass der Körper mehr Fett speichert – besonders am Bauch. Insulinresistenz wird häufiger, der Grundumsatz sinkt durch Muskelabbau. Klassische Kalorienreduktion schlägt oft fehl, weil Muskelmasse dabei weiter verloren geht. Krafttraining + Protein ist der effektivere Ansatz.",
      },
    ],
  },

  "hashimoto-und-wechseljahre-zusammenhang": {
    slug: "hashimoto-und-wechseljahre-zusammenhang",
    question: "Hashimoto und Wechseljahre: Wie hängen sie zusammen?",
    metaTitle: "Hashimoto und Wechseljahre: Zusammenhang, Diagnose & Behandlung",
    metaDescription:
      "Hashimoto und Wechseljahre gleichzeitig: Wie die beiden Erkrankungen sich gegenseitig beeinflussen und warum Diagnosen so oft verwechselt werden.",
    answer:
      "Hashimoto und Wechseljahre überschneiden sich häufig und verstärken sich gegenseitig. Viele Symptome sind identisch (Müdigkeit, Gewichtszunahme, Stimmungsschwankungen). Beide Erkrankungen beeinflussen die Schilddrüsenhormon-Verwertung. Ein vollständiges Panel (TSH, Antikörper, Östradiol, FSH) ist essenziell.",
    content: {
      sections: [
        {
          heading: "Warum werden Hashimoto und Wechseljahre oft verwechselt?",
          text: "Beide Erkrankungen verursachen nahezu identische Symptome: chronische Müdigkeit, Gewichtszunahme, Haarausfall, Schlafstörungen, Stimmungsschwankungen und Konzentrationsprobleme. Frauen zwischen 40 und 55 sind am häufigsten von beiden betroffen. Ohne gezielten Bluttest ist eine Unterscheidung klinisch kaum möglich.",
        },
        {
          heading: "Wie beeinflussen sich Hashimoto und Wechseljahre gegenseitig?",
          text: "Östrogen beeinflusst die Schilddrüsenfunktion direkt. Sinkt Östrogen in der Perimenopause, kann sich eine vorhandene Hashimoto-Erkrankung verschlechtern oder erstmals symptomatisch werden. Gleichzeitig stören Schilddrüsenhormone den Zyklus und können Wechseljahressymptome imitieren oder verstärken.",
        },
        {
          heading: "Diagnose: Was testen lassen?",
          text: "Optimales Panel wenn beide Erkrankungen möglich sind: TSH, fT3, fT4, TPO-Antikörper (Hashimoto), Östradiol (E2), FSH (Eierstockreserve), LH, Testosteron, Vitamin D, Ferritin. Beide Erkrankungen lassen sich so mit einem Bluttest gemeinsam diagnostizieren.",
        },
        {
          heading: "Behandlung wenn beides vorliegt",
          text: "Beide Erkrankungen müssen getrennt behandelt werden. Hashimoto: L-Thyroxin-Einstellung, Selen, entzündungshemmende Ernährung. Wechseljahre: je nach Beschwerden pflanzliche Mittel oder Hormonersatztherapie. Wichtig: Wenn sich die Schilddrüsenwerte nach dem Start einer Östrogentherapie verändern, muss die L-Thyroxin-Dosis angepasst werden.",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "welche-hormone-testen-lassen",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
    ],
    relatedConditions: ["hashimoto", "wechseljahre"],
    faqs: [
      {
        question: "Kann Hashimoto die Wechseljahre vorziehen?",
        answer:
          "Eine unbehandelte Schilddrüsenunterfunktion kann den Zyklus stören und Symptome verursachen, die wie frühe Wechseljahre aussehen. Ob Hashimoto die tatsächliche Menopause beschleunigt, ist wissenschaftlich nicht eindeutig belegt. Es kann aber das Zeitfenster, in dem beide Erkrankungen auftreten, stark überlappen.",
      },
    ],
  },

  "cortisol-zu-hoch-symptome-frau": {
    slug: "cortisol-zu-hoch-symptome-frau",
    question: "Cortisol zu hoch: Welche Symptome haben Frauen?",
    metaTitle: "Cortisol zu hoch bei Frauen: Symptome und was hilft",
    metaDescription:
      "Erhöhtes Cortisol bei Frauen: Symptome erkennen (Bauchfett, Schlafstörungen, Angst), Ursachen und natürliche Wege zur Regulierung.",
    answer:
      "Zu hohes Cortisol bei Frauen zeigt sich durch: Gewichtszunahme am Bauch trotz normaler Ernährung, Schlafstörungen (Aufwachen um 2–4 Uhr), Angst und innere Unruhe, Zyklusstörungen, erhöhten Blutdruck und geschwächtes Immunsystem.",
    content: {
      sections: [
        {
          heading: "Was ist Cortisol und wann ist es zu hoch?",
          text: "Cortisol ist das wichtigste Stresshormon und wird von den Nebennieren produziert. Morgens sollte es hoch sein (gibt Energie), abends niedrig. Chronischer Stress führt zu dauerhaft erhöhten Cortisolspiegeln – mit weitreichenden Folgen für Hormonsystem, Stoffwechsel und Schlaf.",
        },
        {
          heading: "Typische Symptome bei Cortisol-Überschuss",
          text: "Kennzeichen: Bauchfett, das sich trotz Sport und Diät kaum verändert, Schlafstörungen (besonders Aufwachen 2–4 Uhr morgens), Herzrasen und Angstgefühle, Stimmungsschwankungen, häufige Infekte, Zyklusunregelmäßigkeiten und verminderte Libido.",
        },
        {
          heading: "Wie Cortisol die anderen Hormone beeinflusst",
          text: "Erhöhtes Cortisol blockiert die Progesteronproduktion (Cortisol und Progesteron konkurrieren um dieselbe Vorstufe). Es verstärkt Insulinresistenz, hemmt die Schilddrüsenhormon-Umwandlung von T4 zu T3 und senkt Östrogen. Ein hoher Cortisol-Spiegel kann alle anderen Hormonsysteme destabilisieren.",
        },
        {
          heading: "Was hilft bei zu viel Cortisol?",
          text: "Stress reduzieren: Atemübungen, Meditation, Yoga. Schlaf priorisieren – die Nebennieren erholen sich hauptsächlich zwischen 22 und 2 Uhr. Adaptogene (Ashwagandha, Rhodiola) können helfen. Koffein reduzieren (stimuliert Cortisol). Regelmäßige Mahlzeiten (Blutzuckerschwankungen sind Stressreize).",
        },
      ],
    },
    relatedQuestions: [
      "progesteronmangel-symptome",
      "welche-hormone-testen-lassen",
      "wechseljahre-gewichtszunahme-vermeiden",
    ],
    relatedConditions: ["hormone", "wechseljahre"],
    faqs: [
      {
        question: "Wie messe ich Cortisol zuhause?",
        answer:
          "Speicheltests über den Tag verteilt (Morgen, Mittag, Abend, Nacht) geben ein aussagekräftigeres Bild als ein einmaliger Bluttest, da Cortisol stark schwankt. Cerascreen und ähnliche Anbieter bieten Cortisol-Tagesprofile an. Für eine medizinische Diagnose (z.B. Cushing-Verdacht) sind Blut- und 24-Stunden-Urintests beim Arzt nötig.",
      },
    ],
  },

  "pms-oder-perimenopause-unterschied": {
    slug: "pms-oder-perimenopause-unterschied",
    question: "PMS oder Perimenopause: Wie erkenne ich den Unterschied?",
    metaTitle: "PMS oder Perimenopause? Unterschied erkennen",
    metaDescription:
      "PMS oder Perimenopause? So erkennen Sie den Unterschied – Symptome, Timing und welche Untersuchungen helfen.",
    answer:
      "PMS tritt zyklisch in der Woche vor der Periode auf und verschwindet mit Einsetzen der Blutung. Perimenopause-Symptome sind unregelmäßiger, nicht streng zyklusgebunden und gehen oft mit Zyklusveränderungen einher. Ab ca. 40 kann beides gleichzeitig vorliegen.",
    content: {
      sections: [
        {
          heading: "PMS: Das Muster",
          text: "PMS tritt definitionsgemäß in den 1–2 Wochen vor der Menstruation auf und ist an den Zyklus gebunden. Typische Symptome: Brustspannen, Blähungen, Reizbarkeit, Stimmungsschwankungen, Heißhunger. Entscheidend: Die Symptome hören mit Beginn der Blutung auf.",
        },
        {
          heading: "Perimenopause: Das Muster",
          text: "In der Perimenopause sind die Symptome nicht streng zyklusgebunden. Sie treten auch in Phasen auf, in denen früher keine Beschwerden waren. Dazu kommen neue Symptome: Hitzewallungen, Nachtschweiß, Schlafstörungen, veränderte Zykluslänge. Oft werden PMS-Symptome gleichzeitig intensiver.",
        },
        {
          heading: "Ab wann ist Perimenopause wahrscheinlicher?",
          text: "Ab dem 40. Lebensjahr sollte bei neuen oder stärker werdenden Hormonsymptomen Perimenopause in Betracht gezogen werden. Ein Bluttest (FSH, Östradiol) gibt erste Hinweise – obwohl FSH in der frühen Perimenopause noch normal sein kann.",
        },
      ],
    },
    relatedQuestions: [
      "wann-beginnen-die-wechseljahre",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
      "progesteronmangel-symptome",
    ],
    relatedConditions: ["wechseljahre", "hormone"],
    faqs: [
      {
        question: "Kann man gleichzeitig PMS und Perimenopause haben?",
        answer:
          "Ja, das ist sogar häufig. In der frühen Perimenopause sind die Eierstöcke noch aktiv und produzieren Hormone, aber unregelmäßig. Das führt zu stärkerem PMS zusätzlich zu Perimenopausing-typischen Beschwerden wie gelegentlichen Hitzewallungen. Progesteronmangel spielt in beiden Fällen eine zentrale Rolle.",
      },
    ],
  },

  "tsh-wert-normal-trotzdem-symptome": {
    slug: "tsh-wert-normal-trotzdem-symptome",
    question: "TSH normal, aber trotzdem Symptome – wie kann das sein?",
    metaTitle: "TSH normal aber trotzdem Symptome: Was steckt dahinter?",
    metaDescription:
      "TSH im Normbereich, aber Müdigkeit, Haarausfall, Gewichtszunahme? Diese Gründe erklären, warum TSH allein nicht reicht.",
    answer:
      "TSH kann im Normbereich liegen, obwohl fT3 zu niedrig ist, Hashimoto aktiv ist oder andere Hormonsysteme gestört sind. TSH ist ein Screening-Wert – nicht das ganze Bild. Immer auch fT3, fT4 und TPO-Antikörper messen lassen.",
    content: {
      sections: [
        {
          heading: "Warum TSH allein nicht reicht",
          text: "TSH misst nicht direkt die Schilddrüsenhormone, sondern das Steuersignal der Hirnanhangsdrüse. Die eigentlich aktiven Hormone sind fT3 und fT4. Es ist möglich, dass TSH normal ist, aber fT3 (das aktive Hormon) zu niedrig ist – weil die Umwandlung von T4 zu T3 gestört ist.",
        },
        {
          heading: "Der 'Normbereich' ist zu weit",
          text: "Der Laborbereich für TSH (0,4–4,0 mIU/l) ist sehr weit. Viele Frauen fühlen sich mit TSH über 2,5 bereits deutlich schlechter, obwohl das im 'Normbereich' liegt. Endokrinologen orientieren sich oft an einem funktionellen Zielwert von 1–2,5 mIU/l für optimales Wohlbefinden.",
        },
        {
          heading: "Hashimoto ohne TSH-Veränderung",
          text: "In frühen Phasen von Hashimoto kann TSH jahrelang normal sein, während die Autoimmunreaktion (messbar durch erhöhte TPO-Antikörper) aktiv ist und Symptome verursacht. Ohne Antikörpertest bleibt Hashimoto oft jahrelang unerkannt.",
        },
        {
          heading: "Andere Ursachen bei normalem TSH",
          text: "Wenn TSH, fT3, fT4 und Antikörper alle normal sind: andere Ursachen prüfen. Ferritin unter 70 µg/l, Vitamin D unter 30 ng/ml, Vitamin B12 unter 300 pg/ml, Östrogenmangel (Perimenopause) oder Cortisol-Dysregulation können identische Symptome wie eine Schilddrüsenstörung verursachen.",
        },
      ],
    },
    relatedQuestions: [
      "schilddruesenwerte-verstehen",
      "wie-erkenne-ich-hashimoto",
      "welche-blutwerte-bei-muedigkeit",
    ],
    relatedConditions: ["hashimoto", "schilddrüse"],
    faqs: [
      {
        question: "Was tun, wenn der Arzt sagt 'alles normal' aber ich mich schlecht fühle?",
        answer:
          "Bestehen Sie auf einem erweiterten Panel: fT3, fT4, TPO-Antikörper, Ferritin (nicht nur Eisen), Vitamin D, Vitamin B12, Östradiol, FSH. Wenn das alles normal ist und Sie weiterhin Symptome haben, kann ein Endokrinologe oder eine Gynäkologin mit Hormon-Schwerpunkt weiterhelfen.",
      },
    ],
  },

  "vitamin-d-mangel-symptome-frau": {
    slug: "vitamin-d-mangel-symptome-frau",
    question: "Vitamin-D-Mangel bei Frauen: Welche Symptome?",
    metaTitle: "Vitamin-D-Mangel Symptome bei Frauen: Erkennen und beheben",
    metaDescription:
      "Vitamin-D-Mangel Symptome bei Frauen: Müdigkeit, Muskelschwäche, Stimmungstiefs und mehr. Optimaler Wert und wie man Mangel behebt.",
    answer:
      "Typische Vitamin-D-Mangel-Symptome bei Frauen: chronische Müdigkeit, Muskelschwäche und -schmerzen, gedrückte Stimmung bis hin zu Depressionen, häufige Infekte, Haarausfall und Knochenschmerzen. In Deutschland haben ca. 60 % der Bevölkerung einen Mangel.",
    content: {
      sections: [
        {
          heading: "Symptome eines Vitamin-D-Mangels",
          text: "Frühe Anzeichen: anhaltende Müdigkeit und Erschöpfung, die durch Schlaf nicht besser wird. Muskelschwäche und diffuse Muskelschmerzen, besonders an Beinen und Rücken. Gedrückte Stimmung oder Winterdepression. Häufige Erkältungen (Vitamin D ist für das Immunsystem essenziell).",
        },
        {
          heading: "Welcher Vitamin-D-Wert ist optimal?",
          text: "Der Laborwert 25-OH-Vitamin D zeigt den Versorgungsstatus: Unter 20 ng/ml gilt als Mangel. Zwischen 20 und 30 ng/ml: Grenzbereich. Optimal für Frauen mit hormonellen Erkrankungen: 40–60 ng/ml. Bei Hashimoto kann Vitamin-D-Mangel die Autoimmunaktivität verstärken.",
        },
        {
          heading: "Wie viel Vitamin D einnehmen?",
          text: "Bei nachgewiesenem Mangel werden oft 2.000–5.000 IU täglich empfohlen. Wichtig: Vitamin D3 (nicht D2) und immer zusammen mit Vitamin K2 einnehmen (schützt vor Kalziumeinlagerungen in Gefäßen). Den Wert nach 3 Monaten kontrollieren.",
        },
      ],
    },
    relatedQuestions: [
      "welche-blutwerte-bei-muedigkeit",
      "wie-erkenne-ich-hashimoto",
      "hashimoto-muedigkeit-was-hilft",
    ],
    relatedConditions: ["hashimoto", "wechseljahre", "hormone"],
    faqs: [
      {
        question: "Kann man durch Sonnenlicht genug Vitamin D tanken?",
        answer:
          "In Deutschland ist Vitamin-D-Eigenproduktion durch Sonne nur von April bis September und bei direkter Sonneneinstrahlung auf Arme und Gesicht für mindestens 15–20 Minuten täglich möglich. Im Winter ist die Sonne zu schwach für die Vitamin-D-Synthese. Supplementierung ist in Deutschland für die meisten Frauen sinnvoll.",
      },
    ],
  },

  "oestrogen-natuerlich-erhoehen": {
    slug: "oestrogen-natuerlich-erhoehen",
    question: "Östrogen natürlich erhöhen: Was funktioniert wirklich?",
    metaTitle: "Östrogen natürlich erhöhen: Lebensmittel, Ernährung & Tipps",
    metaDescription:
      "Östrogen natürlich erhöhen bei Wechseljahren: Welche Lebensmittel (Phytoöstrogene) wirklich helfen und was Wissenschaft dazu sagt.",
    answer:
      "Östrogen lässt sich nicht direkt 'erhöhen', aber Phytoöstrogene (aus Soja, Leinsamen, Rotklee) können östrogene Wirkungen imitieren. Dazu kommen: Körpergewicht halten (Fettzellen produzieren Östrogen), Stress reduzieren und auf ausreichend Schlaf achten.",
    content: {
      sections: [
        {
          heading: "Phytoöstrogene: Was sie sind und wie sie wirken",
          text: "Phytoöstrogene sind pflanzliche Verbindungen, die schwach an Östrogen-Rezeptoren binden. Sie sind kein Ersatz für körpereigenes Östrogen, können aber Symptome lindern. Wichtigste Quellen: Soja (Isoflavone), Leinsamen (Lignane), Rotklee, Kichererbsen, Hülsenfrüchte.",
        },
        {
          heading: "Was die Wissenschaft sagt",
          text: "Isoflavone aus Soja zeigen in Studien moderate Wirkung bei Hitzewallungen – besonders bei Frauen, die Equol produzieren können (ca. 30 % der Westeuropäerinnen). Leinsamen (2 EL täglich) haben in kleinen Studien ebenfalls Wirkung auf Wechseljahresbeschwerden gezeigt. Rotklee-Extrakte sind pflanzlich und haben die meisten Belege.",
        },
        {
          heading: "Lebensstil: Was Östrogen beeinflusst",
          text: "Körpergewicht: Fettzellen (Adipozyten) produzieren Östrogen (Östron). Sehr dünne Frauen haben oft niedrigeres Östrogen. Übermäßiger Sport kann den Östrogenspiegel senken (Athleten-Amenorrhö). Chronischer Stress senkt Östrogen indirekt. Alkohol erhöht kurzfristig Östrogen – ist aber langfristig schädlich.",
        },
      ],
    },
    relatedQuestions: [
      "oestrogendominanz-symptome",
      "hitzewallungen-was-hilft-sofort",
      "wie-lange-dauern-wechseljahre",
    ],
    relatedConditions: ["wechseljahre", "hormone"],
    faqs: [
      {
        question: "Sind Phytoöstrogene bei Brustkrebs sicher?",
        answer:
          "Die aktuelle wissenschaftliche Einschätzung: Nahrungsmittelmengen an Phytoöstrogenen (z.B. normaler Sojakonsum) sind auch für Brustkrebspatientinnen wahrscheinlich unbedenklich oder sogar leicht schützend. Hochdosierte Isoflavon-Supplemente sollten bei Brustkrebsrisiko mit dem Arzt besprochen werden.",
      },
    ],
  },

  "schilddruesenunterfunktion-symptome-frau": {
    slug: "schilddruesenunterfunktion-symptome-frau",
    question: "Schilddrüsenunterfunktion Symptome bei Frauen: Was sind die Zeichen?",
    metaTitle: "Schilddrüsenunterfunktion Symptome bei Frauen: Vollständige Übersicht",
    metaDescription:
      "Schilddrüsenunterfunktion Symptome bei Frauen: Müdigkeit, Gewichtszunahme, Frieren, Haarausfall und mehr. Wann zum Arzt und welche Tests.",
    answer:
      "Klassische Symptome einer Schilddrüsenunterfunktion bei Frauen: chronische Müdigkeit, Gewichtszunahme trotz normaler Ernährung, Frieren, Haarausfall, Verstopfung, trockene Haut, Gedächtnisschwäche, Depressionen und langsamer Herzschlag.",
    content: {
      sections: [
        {
          heading: "Die häufigsten Symptome im Überblick",
          text: "Eine Schilddrüsenunterfunktion verlangsamt nahezu alle Körperprozesse. Typisch: extreme Erschöpfung, die sich trotz Schlaf nicht bessert. Gewichtszunahme ohne Änderung der Ernährung. Ständiges Frieren, auch wenn anderen warm ist. Haarausfall und brüchige Nägel. Heisere Stimme. Depressive Stimmung.",
        },
        {
          heading: "Symptome, die oft übersehen werden",
          text: "Weniger bekannte Zeichen: Verlangsamte Reflexe, geschwollenes Gesicht (besonders Augenlider morgens), Wassereinlagerungen, Carpal-Tunnel-Syndrom, erhöhter Cholesterinspiegel, unregelmäßiger Zyklus oder starke Menstruationsblutungen.",
        },
        {
          heading: "Wann ist Hashimoto die Ursache?",
          text: "In Deutschland ist Hashimoto Thyreoiditis die häufigste Ursache einer Schilddrüsenunterfunktion. Unterschied: Bei gewöhnlicher Hypothyreose ohne Autoimmunkomponente sind die TPO-Antikörper normal. Bei Hashimoto sind sie erhöht. Die Behandlung (L-Thyroxin) ist in beiden Fällen ähnlich, aber das Wissen um Hashimoto hilft, den Verlauf besser zu verstehen.",
        },
      ],
    },
    relatedQuestions: [
      "schilddruesenwerte-verstehen",
      "wie-erkenne-ich-hashimoto",
      "tsh-wert-normal-trotzdem-symptome",
    ],
    relatedConditions: ["schilddrüse", "hashimoto"],
    faqs: [
      {
        question: "Wie viele Frauen haben eine Schilddrüsenunterfunktion?",
        answer:
          "Schätzungsweise 5–10 % der Frauen haben eine manifeste Hypothyreose, weitere 5–10 % haben eine subklinische Unterfunktion (TSH erhöht, aber T3/T4 noch normal). Frauen sind 5–10-mal häufiger betroffen als Männer. Das Risiko steigt mit dem Alter – ab 40 nimmt die Häufigkeit deutlich zu.",
      },
    ],
  },

  "hashimoto-schub-symptome": {
    slug: "hashimoto-schub-symptome",
    question: "Hashimoto-Schub: Welche Symptome und was hilft?",
    metaTitle: "Hashimoto-Schub Symptome: Erkennen und richtig reagieren",
    metaDescription:
      "Hashimoto-Schub erkennen: Welche Symptome auftreten, warum Schübe ausgelöst werden und was Sie jetzt tun können.",
    answer:
      "Ein Hashimoto-Schub kann sowohl Überfunktions- als auch Unterfunktionssymptome verursachen: Herzrasen, innere Unruhe und Erschöpfung können abwechselnd auftreten. Auslöser sind oft Infekte, Stress oder hormonelle Veränderungen.",
    content: {
      sections: [
        {
          heading: "Was passiert bei einem Hashimoto-Schub?",
          text: "Bei einem Hashimoto-Schub greift das Immunsystem die Schilddrüse verstärkt an. Dabei können Schilddrüsenhormone aus zerstörtem Gewebe ins Blut freigesetzt werden – was vorübergehend Überfunktionssymptome verursacht. Danach folgt oft eine Phase der Unterfunktion, wenn zu viel Schilddrüsengewebe beschädigt wurde.",
        },
        {
          heading: "Typische Schub-Symptome",
          text: "Überfunktionsphase (Hashitoxikose): Herzrasen, Zittern, Schlaflosigkeit, Angst, Gewichtsverlust, Durchfall, Schweißausbrüche. Unterfunktionsphase danach: extreme Müdigkeit, Gewichtszunahme, Frieren, Verstopfung, depressive Stimmung. Manche Frauen erleben beide Phasen hintereinander innerhalb von Wochen.",
        },
        {
          heading: "Was löst Schübe aus?",
          text: "Häufige Auslöser: Infektionskrankheiten (Grippe, EBV), übermäßiger Stress, hormonelle Veränderungen (Schwangerschaft, Wechseljahre, Absetzen der Pille), zu viel Jod, extreme körperliche Belastung.",
        },
        {
          heading: "Was hilft im Schub?",
          text: "Körper schonen und Ruhe priorisieren. Schilddrüsenwerte kontrollieren lassen – Medikamentendosis muss eventuell angepasst werden. Entzündungshemmend essen, Stress reduzieren. Bei starken Herzrasen oder anderen beunruhigenden Symptomen sofort zum Arzt.",
        },
      ],
    },
    relatedQuestions: [
      "wie-erkenne-ich-hashimoto",
      "kann-hashimoto-geheilt-werden",
      "hashimoto-ernaehrung-was-essen",
    ],
    relatedConditions: ["hashimoto"],
    faqs: [
      {
        question: "Wie lange dauert ein Hashimoto-Schub?",
        answer:
          "Die Dauer variiert stark – von wenigen Wochen bis mehreren Monaten. Eine Hashitoxikose (Überfunktionsphase) ist meist selbstlimitierend und dauert Wochen bis 3 Monate. Danach folgt oft eine Phase der Unterfunktion. Mit ärztlicher Begleitung und Anpassung der Therapie können Schübe verkürzt werden.",
      },
    ],
  },

  "fruehere-wechseljahre-ursachen": {
    slug: "fruehere-wechseljahre-ursachen",
    question: "Frühe Wechseljahre: Ursachen und was man tun kann",
    metaTitle: "Frühe Wechseljahre (vor 45): Ursachen, Diagnose und Behandlung",
    metaDescription:
      "Frühe Wechseljahre vor dem 45. Lebensjahr: Ursachen (Genetik, Autoimmun, Rauchen), Diagnose und warum Behandlung besonders wichtig ist.",
    answer:
      "Frühe Wechseljahre (vor 45) können durch Genetik, Autoimmunerkrankungen (z.B. Hashimoto), Rauchen, bestimmte Operationen oder Chemotherapie ausgelöst werden. Eine frühe Menopause erhöht das Risiko für Osteoporose und Herzerkrankungen – Behandlung ist besonders wichtig.",
    content: {
      sections: [
        {
          heading: "Ab wann spricht man von früher Menopause?",
          text: "Frühe Menopause: vor dem 45. Lebensjahr. Vorzeitige Ovarialinsuffizienz (POI): vor dem 40. Lebensjahr. Ca. 5 % der Frauen erleben frühe Menopause, ca. 1 % vorzeitige Ovarialinsuffizienz. Beide Formen erhöhen das Risiko für Langzeiterkrankungen, wenn sie nicht behandelt werden.",
        },
        {
          heading: "Häufige Ursachen",
          text: "Genetische Faktoren sind am wichtigsten – wenn Mutter oder Schwester früh in die Menopause kamen, ist das Risiko erhöht. Rauchen beschleunigt die Menopause um 1–2 Jahre. Autoimmunerkrankungen (Hashimoto, Typ-1-Diabetes, Lupus) können die Eierstöcke angreifen. Chemotherapie und Strahlentherapie im Beckenbereich sind häufige medizinische Ursachen.",
        },
        {
          heading: "Warum Behandlung besonders wichtig ist",
          text: "Östrogen schützt Knochen, Herz und Gehirn. Wer früh in die Menopause kommt und keine Hormontherapie erhält, hat ein deutlich höheres Risiko für Osteoporose, Herzerkrankungen und kognitivem Abbau. Aktuelle Leitlinien empfehlen HRT bis mindestens zum natürlichen Menopausealter (ca. 51).",
        },
      ],
    },
    relatedQuestions: [
      "wann-beginnen-die-wechseljahre",
      "welche-hormone-testen-lassen",
      "hashimoto-und-wechseljahre-zusammenhang",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Kann ich mit früher Menopause noch schwanger werden?",
        answer:
          "Bei vorzeitiger Ovarialinsuffizienz (vor 40) ist eine natürliche Schwangerschaft sehr selten, aber nicht unmöglich – bei einigen Frauen gibt es gelegentliche Eisprünge. Eine Schwangerschaft mit eigenen Eizellen ist möglich, wird aber immer unwahrscheinlicher. Eizellspende ist eine Option, die in Deutschland eingeschränkt ist, aber im EU-Ausland angeboten wird.",
      },
    ],
  },

  "perimenopause-angst-panikattacken": {
    slug: "perimenopause-angst-panikattacken",
    question: "Perimenopause und Angst: Warum hormonelle Veränderungen Panik auslösen",
    metaTitle: "Perimenopause Angst und Panikattacken: Hormonelle Ursachen",
    metaDescription:
      "Angst und Panikattacken in der Perimenopause: Warum Hormonschwankungen das Nervensystem beeinflussen und was wirklich hilft.",
    answer:
      "Angst und Panikattacken in der Perimenopause haben häufig hormonelle Ursachen: Progesteron (das Beruhigungshormon) sinkt zuerst, schwankende Östrogenspiegel beeinflussen Serotonin und GABA. Mit gezielter Behandlung lässt sich dieser Zustand deutlich verbessern.",
    content: {
      sections: [
        {
          heading: "Warum Perimenopause Angst verursacht",
          text: "Progesteron hat direkte angstlösende Wirkung – es bindet an GABA-Rezeptoren im Gehirn, ähnlich wie ein natürliches Beruhigungsmittel. Wenn Progesteron in der Perimenopause als erstes sinkt, kann Angst entstehen. Gleichzeitig beeinflussen schwankende Östrogenspiegel Serotonin, Dopamin und Noradrenalin.",
        },
        {
          heading: "Wie Panikattacken in der Perimenopause entstehen",
          text: "Hitzewallungen können Panikattacken auslösen oder imitieren: Herzrasen, Schwitzen, Benommenheit, Kurzatmigkeit. Nächtliche Hitzewallungen führen zu Schlafmangel, der Angst verstärkt. Cortisol steigt relativ an, wenn Progesteron fällt – ein Teufelskreis aus Stress und Hormonstörung.",
        },
        {
          heading: "Was hilft bei Perimenopause-Angst?",
          text: "Kurzfristig: Atemübungen (4-7-8-Technik), Bewegung, Kälteexposition (kalte Dusche beruhigt das Nervensystem). Mittelfristig: Magnesiumglycinat abends, Ashwagandha, Omega-3. Langfristig: bioidentisches Progesteron (auf Rezept) ist für viele Frauen sehr wirksam. Wenn Angst schwer ist, psychotherapeutische Unterstützung zusätzlich.",
        },
      ],
    },
    relatedQuestions: [
      "progesteronmangel-symptome",
      "was-sind-die-ersten-anzeichen-der-wechseljahre",
      "cortisol-zu-hoch-symptome-frau",
    ],
    relatedConditions: ["wechseljahre", "hormone"],
    faqs: [
      {
        question: "Ist Angst in den Wechseljahren normal?",
        answer:
          "Ja. Angst, innere Unruhe und Panikattacken sind in der Perimenopause sehr häufig und werden oft nicht mit den Wechseljahren in Verbindung gebracht. Studien zeigen, dass Frauen in der Perimenopause ein 2–3-fach erhöhtes Risiko für depressive Erkrankungen und Angststörungen haben. Das ist hormonell bedingt und behandelbar.",
      },
    ],
  },

  "besser-schlafen-wechseljahre": {
    slug: "besser-schlafen-wechseljahre",
    question: "Besser schlafen in den Wechseljahren: Was hilft wirklich?",
    metaTitle: "Schlafen in den Wechseljahren: Bewährte Tipps gegen Schlafstörungen",
    metaDescription:
      "Schlafstörungen in den Wechseljahren: Was hilft wirklich? Evidenzbasierte Strategien gegen Hitzewallungen, Ein- und Durchschlafprobleme.",
    answer:
      "Besserer Schlaf in den Wechseljahren: kühles Schlafzimmer (16–18 °C), kein Alkohol am Abend, Magnesium vor dem Schlafen, Entspannungsroutine und – bei starken Schlafstörungen – Hormontherapie oder Traubsilberkerze gegen Hitzewallungen.",
    content: {
      sections: [
        {
          heading: "Warum schlafen in den Wechseljahren so schwer fällt",
          text: "Progesteron – das Schlafhormon – sinkt in der Perimenopause zuerst. Östrogen beeinflusst Melatonin und den Schlaf-Wach-Rhythmus. Hitzewallungen und Nachtschweiß wecken Frauen mehrfach pro Nacht. Cortisol-Dysregulation kann zu frühem Aufwachen um 3–4 Uhr führen.",
        },
        {
          heading: "Sofortmaßnahmen",
          text: "Schlafzimmer kühlen auf 16–18 °C. Atmungsaktive Bettwäsche (Leinen, Bambus). Kein Alkohol – er stört Schlafarchitektur und verstärkt Hitzewallungen. Kein Koffein nach 14 Uhr. Bildschirme 1 Stunde vor dem Schlaf meiden.",
        },
        {
          heading: "Wirksame Nahrungsergänzung",
          text: "Magnesiumglycinat (300–400 mg, 1 Stunde vor dem Schlaf) fördert GABA und entspannt Muskeln. L-Theanin kann das Einschlafen erleichtern. Melatonin (0,5–1 mg) hilft beim Einschlafen, aber nicht beim Durchschlafen. Mönchspfeffer kann Progesteron indirekt unterstützen.",
        },
        {
          heading: "Wenn nichts hilft: medizinische Optionen",
          text: "Hormontherapie (HRT) ist die wirksamste Behandlung bei hormonell bedingten Schlafstörungen in der Perimenopause. Bioidentisches Progesteron hat dabei direkte schlaffördernde Wirkung. Kognitive Verhaltenstherapie für Insomnie (CBT-I) ist langfristig genauso wirksam wie Schlafmittel – und ohne Abhängigkeitsrisiko.",
        },
      ],
    },
    relatedQuestions: [
      "hitzewallungen-was-hilft-sofort",
      "progesteronmangel-symptome",
      "perimenopause-angst-panikattacken",
    ],
    relatedConditions: ["wechseljahre"],
    faqs: [
      {
        question: "Helfen Schlafmittel bei Wechseljahres-Schlafstörungen?",
        answer:
          "Herkömmliche Schlafmittel (Benzodiazepin-ähnliche Präparate) lösen das Problem nicht, da die Ursache hormonell ist. Sie helfen kurzfristig, können aber abhängig machen und die Schlafqualität langfristig verschlechtern. Besser: die Hormone adressieren – entweder direkt mit HRT oder unterstützend mit Magnesium, Melatonin und Schlafhygiene.",
      },
    ],
  },
};

export const FRAGEN_LIST = Object.values(FRAGEN_DATA);
