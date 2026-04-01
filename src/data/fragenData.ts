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
};

export const FRAGEN_LIST = Object.values(FRAGEN_DATA);
