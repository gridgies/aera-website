export interface Condition {
  slug: string;
  name: string;        // short label: nav, badges, breadcrumbs
  nameLong: string;    // full descriptive name: page H1
  topicName: string;   // grammatically correct form for prose: "Symptome bei X", "bei X"
  ctaQuestion: string; // full CTA question for the condition page bottom section
  aliases: string[];
  description: string;
  metaTitle?: string;  // override the default "<topicName>: Symptome, Ursachen & Behandlung"
  metaDescription: string;
  symptoms: string[];
  relatedConditions: string[];
}

export const CONDITIONS_DATA: Record<string, Condition> = {
  menopause: {
    slug: "menopause",
    name: "Menopause",
    nameLong: "Menopause & Perimenopause",
    topicName: "Menopause",
    ctaQuestion: "Leidest du unter Menopause-Symptomen?",
    aliases: ["Wechseljahre", "Klimakterium", "Perimenopause", "Postmenopause"],
    description:
      "Die Menopause bezeichnet den natürlichen hormonellen Übergang im Leben einer Frau, bei dem die Eierstöcke die Östrogenproduktion reduzieren und die Menstruation endet.",
    metaDescription:
      "Alles über Menopause & Wechseljahre: Symptome, Phasen, Behandlung und natürliche Hilfe bei Perimenopause. Medizinisch fundiert für Frauen in Deutschland.",
    symptoms: [
      "hitzewallungen",
      "schlafstoerungen",
      "gewichtszunahme",
      "stimmungsschwankungen",
      "muedigkeit",
      "haarausfall",
      "libidoverlust",
      "nachtschweiss",
      "scheidentrockenheit",
      "konzentrationsprobleme",
      "trockene-haut",
    ],
    relatedConditions: ["hashimoto", "schilddruese", "hormone"],
  },
  hashimoto: {
    slug: "hashimoto",
    name: "Hashimoto",
    nameLong: "Hashimoto Thyreoiditis",
    topicName: "Hashimoto",
    ctaQuestion: "Leidest du unter Hashimoto-Symptomen?",
    aliases: ["Hashimoto-Thyreoiditis", "Hashimoto's Thyreoiditis", "autoimmune Thyreoiditis"],
    description:
      "Hashimoto Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift, was zu einer chronischen Entzündung und häufig zu einer Schilddrüsenunterfunktion führt.",
    metaTitle: "Hashimoto bei Frauen: Symptome, Diagnose & was wirklich hilft",
    metaDescription:
      "Hashimoto Thyreoiditis: Symptome erkennen, Diagnose verstehen, Behandlung und Ernährung. Umfassender Ratgeber für Frauen mit Hashimoto in Deutschland.",
    symptoms: [
      "muedigkeit",
      "gewichtszunahme",
      "haarausfall",
      "konzentrationsprobleme",
      "schlafstoerungen",
      "stimmungsschwankungen",
      "frieren",
      "verstopfung",
      "trockene-haut",
    ],
    relatedConditions: ["menopause", "schilddruese", "hormone"],
  },
  schilddruese: {
    slug: "schilddruese",
    name: "Schilddrüse",
    nameLong: "Schilddrüsenerkrankungen",
    topicName: "Schilddrüsenerkrankungen",
    ctaQuestion: "Hast du Beschwerden mit deiner Schilddrüse?",
    aliases: [
      "Schilddrüsenunterfunktion",
      "Hypothyreose",
      "Schilddrüsenüberfunktion",
      "Hyperthyreose",
    ],
    description:
      "Schilddrüsenerkrankungen betreffen die Produktion von Schilddrüsenhormonen (T3, T4) und können weitreichende Auswirkungen auf Energie, Gewicht, Stimmung und viele andere Körperfunktionen haben.",
    metaDescription:
      "Schilddrüsenerkrankungen bei Frauen: Schilddrüsenunterfunktion, TSH-Werte verstehen, Symptome und Behandlung. Medizinisch fundierter Ratgeber.",
    symptoms: [
      "muedigkeit",
      "gewichtszunahme",
      "haarausfall",
      "frieren",
      "konzentrationsprobleme",
      "verstopfung",
    ],
    relatedConditions: ["hashimoto", "menopause", "hormone"],
  },
  hormone: {
    slug: "hormone",
    name: "Hormone",
    nameLong: "Hormonelle Balance bei Frauen",
    topicName: "Hormonstörungen",
    ctaQuestion: "Leidest du unter hormonellen Beschwerden?",
    aliases: [
      "Hormonstörung",
      "Hormonhaushalt",
      "Hormonungleichgewicht",
      "Östrogendominanz",
      "Progesteronmangel",
    ],
    description:
      "Hormonelle Dysbalancen betreffen viele Frauen und können sich durch ein breites Spektrum von Symptomen äußern – von Stimmungsschwankungen bis zu Gewichtsproblemen.",
    metaDescription:
      "Hormonelle Dysbalancen bei Frauen: Symptome, Ursachen, Hormontest und natürliche Regulierung. Wann zum Arzt und welche Hormone testen lassen.",
    symptoms: [
      "stimmungsschwankungen",
      "gewichtszunahme",
      "muedigkeit",
      "haarausfall",
      "akne",
      "pms",
      "libidoverlust",
      "schlafstoerungen",
    ],
    relatedConditions: ["menopause", "hashimoto", "schilddruese"],
  },
};
