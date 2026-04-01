import { MetadataRoute } from "next";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";

const BASE_URL = "https://aerahealth.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/check`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/experten`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wissenschaft`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Condition pillar pages
  const conditionPages: MetadataRoute.Sitemap = Object.values(CONDITIONS_DATA).map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: now,
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
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    }
  }

  return [...staticPages, ...conditionPages, ...symptomPages];
}
