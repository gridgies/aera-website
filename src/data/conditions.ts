export interface Condition {
  slug: string;
  name: string;
  nameLong: string;
  aliases: string[];
  description: string;
  metaDescription: string;
  symptoms: string[];
  relatedConditions: string[];
}

export const CONDITIONS_DATA: Record<string, Condition> = {
  wechseljahre: {
    slug: "wechseljahre",
    name: "Wechseljahre",
    nameLong: "Wechseljahre (Menopause & Perimenopause)",
    aliases: ["Menopause", "Klimakterium", "Perimenopause", "Postmenopause"],
    description:
      "Die Wechseljahre bezeichnen den natürlichen hormonellen Übergang im Leben einer Frau, bei dem die Eierstöcke die Östrogenproduktion reduzieren und die Menstruation endet.",
    metaDescription:
      "Alles über Wechseljahre: Symptome, Phasen, Behandlung und natürliche Hilfe bei Menopause und Perimenopause. Medizinisch fundiert für Frauen in Deutschland.",
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
    aliases: ["Hashimoto-Thyreoiditis", "Hashimoto's Thyreoiditis", "autoimmune Thyreoiditis"],
    description:
      "Hashimoto Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift, was zu einer chronischen Entzündung und häufig zu einer Schilddrüsenunterfunktion führt.",
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
    relatedConditions: ["wechseljahre", "schilddruese", "hormone"],
  },
  schilddruese: {
    slug: "schilddruese",
    name: "Schilddrüse",
    nameLong: "Schilddrüsenerkrankungen",
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
    relatedConditions: ["hashimoto", "wechseljahre", "hormone"],
  },
  hormone: {
    slug: "hormone",
    name: "Hormone",
    nameLong: "Hormonelle Balance bei Frauen",
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
    relatedConditions: ["wechseljahre", "hashimoto", "schilddruese"],
  },
};
