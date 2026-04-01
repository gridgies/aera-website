export interface AgePage {
  alter: string; // URL slug, e.g. "40"
  alterLabel: string; // e.g. "40"
  title: string;
  metaDescription: string;
  intro: string;
  phase: string;
  phaseDescription: string;
  typicalSymptoms: string[];
  uniqueContext: string;
  whenToSeeDoctor: string;
  faqs: { question: string; answer: string }[];
}

export const AGE_PAGES: Record<string, AgePage> = {
  "35": {
    alter: "35",
    alterLabel: "35",
    title: "Wechseljahre mit 35: Frühe Perimenopause verstehen",
    metaDescription:
      "Wechseljahre mit 35? Frühe Perimenopause ist real. Symptome, Ursachen und was Sie jetzt tun können – medizinisch fundiert.",
    intro:
      "Wechseljahre mit 35 klingt ungewöhnlich – aber frühe hormonelle Veränderungen betreffen mehr Frauen, als viele denken. Zwischen dem 35. und 40. Lebensjahr beginnt bei vielen Frauen eine Phase, in der die Hormonspiegel leicht zu schwanken beginnen. Das ist keine Seltenheit, sondern Biologie.",
    phase: "Frühe Perimenopause / Prämenopause",
    phaseDescription:
      "Mit 35 können erste Hormonschwankungen beginnen, die auf eine beginnende Perimenopause hinweisen. Die Eierstöcke produzieren noch ausreichend Östrogen, aber der Zyklus kann unregelmäßiger werden.",
    typicalSymptoms: [
      "Zyklusveränderungen (kürzer oder länger)",
      "Verstärkte PMS-Symptome",
      "Stimmungsschwankungen",
      "Müdigkeit ohne erklärbaren Grund",
      "Erste leichte Schlafstörungen",
    ],
    uniqueContext:
      "Mit 35 ist es besonders wichtig, andere Ursachen (Hashimoto, PCOS, Eisenmangel) auszuschließen, bevor eine frühe Perimenopause diagnostiziert wird. Ein vollständiges Hormonpanel inklusive TSH, FSH, LH und Östradiol ist sinnvoll.",
    whenToSeeDoctor:
      "Wenn Sie mit 35 unregelmäßige Zyklen, starke PMS oder andere hormonelle Symptome haben, ist ein Gynäkologe oder Endokrinologe der richtige Ansprechpartner. Eine frühe Diagnose ermöglicht frühe Unterstützung.",
    faqs: [
      {
        question: "Kann man mit 35 schon Wechseljahre haben?",
        answer:
          "Ja. Frühe Perimenopause (vor dem 40. Lebensjahr) ist selten, aber möglich. Etwa 1–5 % der Frauen erleben frühe hormonelle Veränderungen. Vorzeitige Menopause (vor 40) betrifft ca. 1 % der Frauen. Mit 35 können erste Hormonschwankungen auftreten, die noch keine vollständige Perimenopause sind, aber erste Symptome verursachen.",
      },
      {
        question: "Welche Hormontests sollte ich mit 35 machen lassen?",
        answer:
          "Ein sinnvolles Hormonpanel mit 35 umfasst: FSH, LH, Östradiol (E2), Testosteron, DHEA-S, TSH, fT3, fT4, TPO-Antikörper, AMH (Anti-Müller-Hormon, zeigt die Eierstockreserve). AMH ist besonders wertvoll, um die Eierstockreserve zu beurteilen.",
      },
      {
        question: "Können Hormonsymptome mit 35 auch andere Ursachen haben?",
        answer:
          "Absolut. Symptome wie Müdigkeit, Stimmungsschwankungen und Zyklusveränderungen können auch auf Hashimoto, PCOS, Eisenmangel, Vitamin-D-Mangel oder chronischen Stress zurückzuführen sein. Deshalb ist eine gründliche Diagnostik mit vollständigem Blutbild wichtig.",
      },
    ],
  },

  "40": {
    alter: "40",
    alterLabel: "40",
    title: "Wechseljahre mit 40: Perimenopause erkennen und verstehen",
    metaDescription:
      "Wechseljahre mit 40: Welche Symptome sind typisch? Perimenopause ab 40 – was sich hormonell verändert und was Sie tun können.",
    intro:
      "Mit 40 beginnt für viele Frauen eine Phase spürbarer hormoneller Veränderungen. Die Perimenopause – die Zeit vor der eigentlichen Menopause – startet häufig zwischen dem 40. und 45. Lebensjahr. Viele Frauen sind überrascht, wie früh sich der Körper verändern kann.",
    phase: "Perimenopause (Beginn)",
    phaseDescription:
      "In den 40ern beginnt die Perimenopause für viele Frauen ernsthaft. Die Eierstöcke produzieren weniger Progesteron, Östrogenspiegel schwanken stärker. Der Zyklus verändert sich, und erste typische Wechseljahresbeschwerden treten auf.",
    typicalSymptoms: [
      "Unregelmäßige Zyklen (kürzer oder länger)",
      "Stärkere Menstruationsblutungen",
      "Erste Hitzewallungen",
      "Schlafstörungen und Nachtschweiß",
      "Stimmungsschwankungen und Reizbarkeit",
      "Müdigkeit und Konzentrationsprobleme",
    ],
    uniqueContext:
      "Mit 40 sind viele Frauen noch mitten im Berufsleben und in der Familienplanung. Die Symptome der Perimenopause werden oft als Stress abgetan. Wichtig: Auch mit 40 ist eine Schwangerschaft noch möglich – Kontrazeption ist weiterhin nötig.",
    whenToSeeDoctor:
      "Wenn Symptome den Alltag beeinträchtigen oder Zyklusveränderungen stark sind, Gynäkologin aufsuchen. Ein Hormonpanel kann Klarheit schaffen, auch wenn FSH-Werte in der Perimenopause stark schwanken.",
    faqs: [
      {
        question: "Ist es normal, mit 40 Wechseljahre zu bekommen?",
        answer:
          "Die Perimenopause beginnt im Durchschnitt 4–10 Jahre vor der Menopause. Da die Menopause in Deutschland im Durchschnitt mit 51 Jahren eintritt, ist ein Beginn der Perimenopause mit 40–45 Jahren sehr häufig und völlig normal.",
      },
      {
        question: "Welche Symptome deuten mit 40 auf Wechseljahre hin?",
        answer:
          "Typische frühe Zeichen sind: veränderte Zykluslänge, stärkere oder schwächere Blutungen, erste Hitzewallungen, Schlafprobleme, Reizbarkeit und Stimmungsschwankungen, Müdigkeit und Brain Fog. Treten mehrere davon auf, lohnt sich ein Gespräch mit der Gynäkologin.",
      },
      {
        question: "Kann man mit 40 noch schwanger werden, auch wenn man Wechseljahressymptome hat?",
        answer:
          "Ja. In der Perimenopause sind Eisprünge unregelmäßig, aber nicht unmöglich. Solange keine 12 aufeinanderfolgenden Monate ohne Menstruation vergangen sind, besteht Schwangerschaftsrisiko. Kontrazeption bleibt bis zur bestätigten Menopause wichtig.",
      },
    ],
  },

  "45": {
    alter: "45",
    alterLabel: "45",
    title: "Wechseljahre mit 45: Mitten in der Perimenopause",
    metaDescription:
      "Wechseljahre mit 45: Typische Symptome, Hormonstatus und was jetzt hilft. Alles über Perimenopause ab 45.",
    intro:
      "Mit 45 befinden sich die meisten Frauen mitten in der Perimenopause. Die Hormonspiegel – besonders Östrogen und Progesteron – schwanken erheblich, und viele Frauen erleben einen Höhepunkt der Beschwerden. Das ist die intensivste Phase vor der eigentlichen Menopause.",
    phase: "Perimenopause (Hochphase)",
    phaseDescription:
      "Mit 45 sind Zyklusveränderungen häufig deutlich spürbar. Hitzewallungen, Schlafstörungen und Stimmungsschwankungen können intensiver werden. Die Östrogenspiegel schwanken stark und beginnen langfristig zu sinken.",
    typicalSymptoms: [
      "Häufige Hitzewallungen (auch tagsüber)",
      "Starke Schlafstörungen und Nachtschweiß",
      "Stimmungsschwankungen bis hin zu Depressionen",
      "Gewichtszunahme, besonders am Bauch",
      "Konzentrations- und Gedächtnisschwäche",
      "Libidoverlust",
      "Scheidentrockenheit",
    ],
    uniqueContext:
      "Mit 45 lohnt es sich, eine Basismessung der Knochendichte zu erwägen, da Östrogen die Knochen schützt. Auch kardiovaskuläre Gesundheit wird relevanter, da Östrogen das Herz-Kreislauf-System schützt.",
    whenToSeeDoctor:
      "Bei stark belastenden Symptomen – besonders schwere Schlafstörungen, depressive Verstimmungen oder Herzrasen – unbedingt zur Ärztin. Hormonersatztherapie (HRT) kann ab diesem Alter eine wertvolle Option sein.",
    faqs: [
      {
        question: "Wie lange dauern Wechseljahresbeschwerden ab 45?",
        answer:
          "Die intensivste Phase der Perimenopause dauert typischerweise 2–8 Jahre. Hitzewallungen können bei manchen Frauen noch Jahre nach der Menopause anhalten. Ohne Behandlung variiert die Dauer stark – viele Frauen erleben zwischen 45 und 55 die intensivsten Beschwerden.",
      },
      {
        question: "Sollte ich mit 45 eine Hormontherapie (HRT) beginnen?",
        answer:
          "Das ist eine individuelle Entscheidung, die mit der Ärztin besprochen werden sollte. Die aktuelle Leitlinien sehen HRT als wirksame und für die meisten gesunden Frauen unter 60 sichere Option. Die frühe Perimenopause ist ein guter Zeitpunkt, um die Optionen zu besprechen.",
      },
      {
        question: "Nehmen Frauen mit 45 in den Wechseljahren zu?",
        answer:
          "Viele Frauen berichten von Gewichtszunahme – besonders im Bauchbereich – ab Mitte 40. Das liegt am sinkenden Östrogenspiegel (der Fettspeicherung verlagert), am Muskelabbau und einem langsameren Stoffwechsel. Krafttraining und proteinreiche Ernährung sind die effektivsten Gegenmaßnahmen.",
      },
    ],
  },

  "50": {
    alter: "50",
    alterLabel: "50",
    title: "Wechseljahre mit 50: Menopause und was danach kommt",
    metaDescription:
      "Wechseljahre mit 50: Die Menopause naht. Was passiert im Körper, welche Symptome sind normal und wie geht das Leben danach weiter?",
    intro:
      "Mit 50 nähern sich die meisten Frauen dem Zeitpunkt der Menopause – dem Ende der Menstruation. Das Durchschnittsalter der Menopause in Deutschland liegt bei 51 Jahren. Dieser Übergang ist ein großer Meilenstein, der mit vielen Veränderungen verbunden ist – aber auch mit einer neuen Phase der Gesundheit.",
    phase: "Späte Perimenopause / Menopause",
    phaseDescription:
      "Um das 50. Lebensjahr herum erleben viele Frauen die letzte Menstruation oder lange Aussetzer. Der Körper stellt sich auf einen dauerhaft niedrigeren Östrogenspiegel ein.",
    typicalSymptoms: [
      "Ausbleiben der Periode für Monate",
      "Intensive Hitzewallungen",
      "Starke Nachtschweiß-Episoden",
      "Scheidentrockenheit und Beschwerden beim Sex",
      "Stimmungsschwankungen oder depressive Phasen",
      "Gelenkschmerzen",
      "Herzklopfen und Herzrasen",
    ],
    uniqueContext:
      "Nach einem Jahr ohne Menstruation ist die Menopause offiziell eingetreten. Ab dann beginnt die Postmenopause. Knochendichte und Herzgesundheit sollten ab 50 regelmäßig überprüft werden.",
    whenToSeeDoctor:
      "Regelmäßige gynäkologische Vorsorge ist mit 50 besonders wichtig: Mammographie, Knochendichtemessung und Herzcheck gehören dazu. Bei starken Beschwerden HRT-Optionen besprechen.",
    faqs: [
      {
        question: "Wann sind die Wechseljahre mit 50 abgeschlossen?",
        answer:
          "Die Menopause ist offiziell eingetreten, wenn 12 Monate in Folge keine Menstruation stattgefunden hat. Ab dann beginnt die Postmenopause. Beschwerden wie Hitzewallungen können aber noch Jahre danach anhalten.",
      },
      {
        question: "Was verändert sich im Körper nach der Menopause?",
        answer:
          "Nach der Menopause sinkt der Östrogenspiegel dauerhaft. Folgen: Knochendichteverlust (erhöhtes Osteoporose-Risiko), veränderte Blutfette (höheres Herzrisiko), Scheidentrockenheit, Hauttrockenheit. Regelmäßige Vorsorge und ggf. HRT schützen die Langzeitgesundheit.",
      },
      {
        question: "Nehmen Wechseljahressymptome mit 50 ab oder zu?",
        answer:
          "Das ist individuell. Manche Frauen erleben die heftigsten Symptome rund um die Menopause und dann Besserung. Andere haben jahrelange anhaltende Beschwerden. Ohne Behandlung berichten viele Frauen von einer Verbesserung 5–10 Jahre nach der Menopause.",
      },
    ],
  },

  "55": {
    alter: "55",
    alterLabel: "55",
    title: "Wechseljahre mit 55: Postmenopause und Langzeitgesundheit",
    metaDescription:
      "Wechseljahre mit 55: Was ist in der Postmenopause normal? Langzeitgesundheit, Knochen, Herz und Wohlbefinden.",
    intro:
      "Mit 55 sind die meisten Frauen in der Postmenopause – der Körper hat sich an ein Leben mit dauerhaft niedrigem Östrogenspiegel angepasst. Viele Beschwerden der intensiven Perimenopause-Phase klingen ab, aber die Langzeitgesundheit rückt in den Fokus: Knochen, Herz und allgemeines Wohlbefinden.",
    phase: "Postmenopause",
    phaseDescription:
      "Mit 55 sind die meisten Frauen seit einigen Jahren in der Postmenopause. Der Hormonhaushalt hat sich auf einem dauerhaft niedrigeren Niveau stabilisiert.",
    typicalSymptoms: [
      "Nachlassen der Hitzewallungen (bei vielen Frauen)",
      "Anhaltende Scheidentrockenheit",
      "Gelenkschmerzen und Muskelschwäche",
      "Schlafprobleme können bestehen bleiben",
      "Veränderte Stimmung und Energie",
      "Erhöhtes Osteoporoserisiko",
    ],
    uniqueContext:
      "In der Postmenopause wird Prävention wichtiger als Symptombehandlung. Knochengesundheit (Kalzium, Vitamin D, Krafttraining), Herzgesundheit und kognitive Gesundheit stehen im Vordergrund.",
    whenToSeeDoctor:
      "Regelmäßige Vorsorge: Knochendichtemessung (DXA), Cholesterin, Blutdruck, Mammographie. Bei anhaltenden starken Beschwerden kann HRT auch nach der Menopause erwogen werden.",
    faqs: [
      {
        question: "Haben Frauen mit 55 noch Wechseljahresbeschwerden?",
        answer:
          "Viele Frauen berichten, dass sich Hitzewallungen und Stimmungsschwankungen ab etwa 55 bessern. Allerdings bleiben Beschwerden wie Scheidentrockenheit, Gelenkschmerzen und Schlafprobleme bei einem erheblichen Teil der Frauen auch in der Postmenopause bestehen.",
      },
      {
        question: "Wie schütze ich meine Knochen nach der Menopause?",
        answer:
          "Wichtige Maßnahmen: täglich 1000–1200 mg Kalzium (über Ernährung und/oder Supplement), Vitamin D optimieren (Zielwert 40–60 ng/ml), regelmäßiges Krafttraining, keine Raucherin sein. Eine Knochendichtemessung (DXA-Scan) zeigt den aktuellen Status.",
      },
      {
        question: "Ist Hormontherapie mit 55 noch sinnvoll?",
        answer:
          "Für Frauen, die vor dem 60. Lebensjahr und innerhalb von 10 Jahren nach der Menopause beginnen, wird HRT in aktuellen Leitlinien als sichere Option bewertet. Bei anhaltenden Beschwerden oder hohem Osteoporoserisiko lohnt sich das Gespräch mit einer Spezialistin.",
      },
    ],
  },
};
