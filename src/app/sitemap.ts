import { MetadataRoute } from "next";
import { execSync } from "child_process";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";
import { AGE_PAGES } from "@/data/agePages";
import { FRAGEN_LIST } from "@/data/fragenData";
import { VERGLEICHE_LIST } from "@/data/vergleiche";
import { BLOG_POSTS } from "@/data/blogPosts";

const BASE_URL = "https://www.aerahealth.de";

/**
 * Returns the git committer date for a given file path.
 * Runs once at build time — no performance cost at request time.
 * Falls back to 2026-01-01 if git is unavailable (e.g. shallow clone edge case).
 */
function gitDate(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    }).trim();
    return iso ? new Date(iso) : new Date("2026-01-01");
  } catch {
    return new Date("2026-01-01");
  }
}

// Pre-computed once at build time. Update automatically whenever the source file changes.
const D = {
  homepage:     gitDate("src/app/page.tsx"),
  check:        gitDate("src/app/check/page.tsx"),
  fragenIndex:  gitDate("src/app/fragen/page.tsx"),
  experten:     gitDate("src/app/experten/page.tsx"),
  wissenschaft: gitDate("src/app/wissenschaft/page.tsx"),
  ueberUns:     gitDate("src/app/ueber-uns/page.tsx"),
  kontakt:      gitDate("src/app/kontakt/page.tsx"),
  quellen:      gitDate("src/app/quellen-und-methodik/page.tsx"),
  // Static guide pages
  hashimotoUrsachen:  gitDate("src/app/hashimoto/ursachen/page.tsx"),
  hashimotoErnaehrung: gitDate("src/app/hashimoto/ernaehrung/page.tsx"),
  hashimotoTrockeneHaut: gitDate("src/app/hashimoto/trockene-haut/page.tsx"),
  schilddrueeseWerte: gitDate("src/app/schilddruese/werte/page.tsx"),
  tshWertTabelle:     gitDate("src/app/fragen/tsh-wert-tabelle/page.tsx"),
  // Themen articles
  darmHormone:    gitDate("src/app/themen/darm-und-hormone/page.tsx"),
  hrt2026:        gitDate("src/app/themen/hormonersatztherapie-2026/page.tsx"),
  glp1Pcos:       gitDate("src/app/themen/glp1-pcos-wechseljahre/page.tsx"),
  // Blog
  blogIndex:      gitDate("src/app/blog/page.tsx"),
  blogMai2026:    gitDate("src/app/blog/mai-2026/page.tsx"),
  // Data-driven page groups — date reflects last content update to the data file
  conditions:   gitDate("src/data/conditions.ts"),
  symptoms:     gitDate("src/data/symptoms.ts"),
  fragen:       gitDate("src/data/fragenData.ts"),
  agePages:     gitDate("src/data/agePages.ts"),
  vergleiche:   gitDate("src/data/vergleiche.ts"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              lastModified: D.homepage,    changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/check`,                   lastModified: D.check,       changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/fragen`,                  lastModified: D.fragenIndex, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/experten`,                lastModified: D.experten,    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/wissenschaft`,            lastModified: D.wissenschaft, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ueber-uns`,               lastModified: D.ueberUns,    changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kontakt`,                 lastModified: D.kontakt,     changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/quellen-und-methodik`,    lastModified: D.quellen,     changeFrequency: "monthly", priority: 0.6 },
    // Static guide pages
    { url: `${BASE_URL}/hashimoto/ursachen`,       lastModified: D.hashimotoUrsachen,    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hashimoto/ernaehrung`,     lastModified: D.hashimotoErnaehrung,  changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hashimoto/trockene-haut`,  lastModified: D.hashimotoTrockeneHaut, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/schilddruese/werte`,       lastModified: D.schilddrueeseWerte,   changeFrequency: "monthly", priority: 0.8 },
    // High-priority static fragen override
    { url: `${BASE_URL}/fragen/tsh-wert-tabelle`,  lastModified: D.tshWertTabelle, changeFrequency: "monthly", priority: 0.85 },
    // Themen articles
    { url: `${BASE_URL}/themen/darm-und-hormone`,           lastModified: D.darmHormone, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/themen/hormonersatztherapie-2026`,  lastModified: D.hrt2026,     changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/themen/glp1-pcos-wechseljahre`,     lastModified: D.glp1Pcos,    changeFrequency: "monthly", priority: 0.80 },
    // Blog
    { url: `${BASE_URL}/blog`,             lastModified: D.blogIndex,   changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE_URL}/blog/mai-2026`,    lastModified: D.blogMai2026, changeFrequency: "monthly", priority: 0.80 },
  ];

  const conditionPages: MetadataRoute.Sitemap = Object.values(CONDITIONS_DATA).map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: D.conditions,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const symptomPages: MetadataRoute.Sitemap = [];
  for (const condition of Object.values(CONDITIONS_DATA)) {
    for (const symptomSlug of condition.symptoms) {
      if (SYMPTOMS_DATA[symptomSlug]) {
        symptomPages.push({
          url: `${BASE_URL}/${condition.slug}/${symptomSlug}`,
          lastModified: D.symptoms,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        });
      }
    }
  }

  const agePageEntries: MetadataRoute.Sitemap = Object.keys(AGE_PAGES).map((alter) => ({
    url: `${BASE_URL}/wechseljahre-mit/${alter}`,
    lastModified: D.agePages,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Exclude the tsh-wert-tabelle slug — it has a higher-priority static entry above
  const fragenPages: MetadataRoute.Sitemap = FRAGEN_LIST
    .filter((f) => f.slug !== "tsh-wert-tabelle")
    .map((frage) => ({
      url: `${BASE_URL}/fragen/${frage.slug}`,
      lastModified: D.fragen,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));

  const vergleichPages: MetadataRoute.Sitemap = VERGLEICHE_LIST.map((v) => ({
    url: `${BASE_URL}/vergleich/${v.slug}`,
    lastModified: D.vergleiche,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...conditionPages,
    ...symptomPages,
    ...agePageEntries,
    ...fragenPages,
    ...vergleichPages,
  ];
}
