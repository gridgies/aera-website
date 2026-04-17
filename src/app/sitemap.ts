import { MetadataRoute } from "next";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";
import { AGE_PAGES } from "@/data/agePages";
import { FRAGEN_LIST } from "@/data/fragenData";
import { VERGLEICHE_LIST } from "@/data/vergleiche";

const BASE_URL = "https://www.aerahealth.de";

// Static dates prevent Google from seeing every page as "modified today" on every crawl,
// which wastes crawl budget and dilutes freshness signals. Update these when content changes.
const DATES = {
  homepage:    new Date("2025-04-01"),
  pillar:      new Date("2025-03-15"),
  guide:       new Date("2025-03-01"),
  symptom:     new Date("2025-02-15"),
  fragen:      new Date("2025-03-01"),
  comparison:  new Date("2025-02-01"),
  agePage:     new Date("2025-02-01"),
  trust:       new Date("2025-01-15"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: DATES.homepage,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/check`,
      lastModified: DATES.pillar,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/fragen`,
      lastModified: DATES.fragen,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/experten`,
      lastModified: DATES.trust,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wissenschaft`,
      lastModified: DATES.trust,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ueber-uns`,
      lastModified: DATES.trust,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: DATES.trust,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/quellen-und-methodik`,
      lastModified: DATES.trust,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Static guide pages (override dynamic [condition]/[symptom] routes)
    {
      url: `${BASE_URL}/hashimoto/ursachen`,
      lastModified: DATES.guide,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hashimoto/ernaehrung`,
      lastModified: DATES.guide,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hashimoto/trockene-haut`,
      lastModified: DATES.guide,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/schilddruese/werte`,
      lastModified: DATES.guide,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Static fragen overrides (richer content than dynamic template)
    {
      url: `${BASE_URL}/fragen/tsh-wert-tabelle`,
      lastModified: DATES.guide,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Condition pillar pages
  const conditionPages: MetadataRoute.Sitemap = Object.values(CONDITIONS_DATA).map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: DATES.pillar,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Condition + symptom pages
  const symptomPages: MetadataRoute.Sitemap = [];
  for (const condition of Object.values(CONDITIONS_DATA)) {
    for (const symptomSlug of condition.symptoms) {
      if (SYMPTOMS_DATA[symptomSlug]) {
        symptomPages.push({
          url: `${BASE_URL}/${condition.slug}/${symptomSlug}`,
          lastModified: DATES.symptom,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    }
  }

  // Age-specific Wechseljahre pages
  const agePages: MetadataRoute.Sitemap = Object.keys(AGE_PAGES).map((alter) => ({
    url: `${BASE_URL}/wechseljahre-mit/${alter}`,
    lastModified: DATES.agePage,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // FAQ / question pages
  const fragenPages: MetadataRoute.Sitemap = FRAGEN_LIST.map((frage) => ({
    url: `${BASE_URL}/fragen/${frage.slug}`,
    lastModified: DATES.fragen,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Comparison pages
  const vergleichPages: MetadataRoute.Sitemap = VERGLEICHE_LIST.map((v) => ({
    url: `${BASE_URL}/vergleich/${v.slug}`,
    lastModified: DATES.comparison,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...conditionPages, ...symptomPages, ...agePages, ...fragenPages, ...vergleichPages];
}
