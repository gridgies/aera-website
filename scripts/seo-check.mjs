#!/usr/bin/env node
/**
 * SEO Health Check — aerahealth.de
 *
 * Verifies that every URL in the sitemap returns HTTP 200.
 * Run against the local dev server or production:
 *
 *   node scripts/seo-check.mjs                          # local (default: http://localhost:3000)
 *   node scripts/seo-check.mjs https://www.aerahealth.de
 */

const BASE_URL = process.argv[2] ?? "http://localhost:3000";

// ─── Static pages ────────────────────────────────────────────────────────────
const STATIC = [
  "/",
  "/check",
  "/fragen",
  "/experten",
  "/wissenschaft",
  "/ueber-uns",
  "/kontakt",
  "/quellen-und-methodik",
  // Guide pages (static overrides of dynamic routes)
  "/hashimoto/ursachen",
  "/hashimoto/ernaehrung",
  "/schilddruese/werte",
];

// ─── Condition pillar pages ───────────────────────────────────────────────────
const CONDITIONS = ["menopause", "hashimoto", "schilddruese", "hormone"];

// ─── Condition → Symptom matrix ──────────────────────────────────────────────
const CONDITION_SYMPTOMS = {
  menopause: [
    "hitzewallungen", "schlafstoerungen", "gewichtszunahme", "stimmungsschwankungen",
    "muedigkeit", "haarausfall", "libidoverlust", "nachtschweiss",
    "scheidentrockenheit", "konzentrationsprobleme", "trockene-haut",
  ],
  hashimoto: [
    "muedigkeit", "gewichtszunahme", "haarausfall", "konzentrationsprobleme",
    "schlafstoerungen", "stimmungsschwankungen", "frieren", "verstopfung",
    "trockene-haut", "libidoverlust", "nachtschweiss", "scheidentrockenheit",
  ],
  schilddruese: [
    "muedigkeit", "gewichtszunahme", "haarausfall", "frieren",
    "konzentrationsprobleme", "verstopfung", "trockene-haut",
    "schlafstoerungen", "stimmungsschwankungen", "nachtschweiss",
  ],
  hormone: [
    "stimmungsschwankungen", "gewichtszunahme", "muedigkeit", "haarausfall",
    "akne", "pms", "libidoverlust", "schlafstoerungen", "konzentrationsprobleme",
    "hitzewallungen", "nachtschweiss", "scheidentrockenheit",
  ],
};

// ─── Age pages ────────────────────────────────────────────────────────────────
const AGES = ["40", "42", "45", "47", "48", "50", "52", "55"];

// ─── Fragen slugs ─────────────────────────────────────────────────────────────
const FRAGEN = [
  "wie-lange-dauern-wechseljahre",
  "woran-erkenne-ich-hashimoto",
  "welche-hormone-testen-lassen",
  "kann-hashimoto-geheilt-werden",
  "hashimoto-schub-symptome",
  "selen-hashimoto-dosierung",
  "schilddruesenwerte-verstehen",
  "perimenopause-oder-menopause",
  "tsh-wert-normalbereich",
  "oestrogen-mangel-behandlung",
  "wechseljahre-test",
  "hashimoto-schwangerschaft",
  "oestrogen-mangel-symptome",
  "insulin-resistenz-symptome",
  "gelenkschmerzen-wechseljahre",
  "menopause-depression",
];

// ─── Vergleich pages ──────────────────────────────────────────────────────────
const VERGLEICHE = [
  "hashimoto-oder-menopause",
  "schilddruese-oder-menopause",
  "perimenopause-oder-menopause",
];

// ─── Build URL list ───────────────────────────────────────────────────────────
const urls = [
  ...STATIC,
  ...CONDITIONS.map((c) => `/${c}`),
  ...Object.entries(CONDITION_SYMPTOMS).flatMap(([c, symptoms]) =>
    symptoms.map((s) => `/${c}/${s}`)
  ),
  ...AGES.map((a) => `/wechseljahre-mit/${a}`),
  ...FRAGEN.map((f) => `/fragen/${f}`),
  ...VERGLEICHE.map((v) => `/vergleich/${v}`),
];

// ─── Check ────────────────────────────────────────────────────────────────────
const CONCURRENCY = 5;
const results = { ok: 0, fail: 0, errors: [] };

async function check(path) {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(10_000) });
    if (res.ok) {
      results.ok++;
      process.stdout.write(".");
    } else {
      results.fail++;
      results.errors.push({ path, status: res.status });
      process.stdout.write("F");
    }
  } catch (err) {
    results.fail++;
    results.errors.push({ path, status: "ERR", error: err.message });
    process.stdout.write("E");
  }
}

async function runBatch(batch) {
  await Promise.all(batch.map(check));
}

(async () => {
  console.log(`\nSEO Health Check — ${BASE_URL}`);
  console.log(`Checking ${urls.length} URLs (concurrency: ${CONCURRENCY})...\n`);

  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    await runBatch(urls.slice(i, i + CONCURRENCY));
  }

  console.log("\n");
  console.log(`✅ OK:   ${results.ok}`);
  console.log(`❌ FAIL: ${results.fail}`);

  if (results.errors.length > 0) {
    console.log("\nFailed URLs:");
    for (const e of results.errors) {
      console.log(`  [${e.status}] ${e.path}${e.error ? ` — ${e.error}` : ""}`);
    }
    process.exit(1);
  } else {
    console.log("\nAll URLs returned 200. ✓");
  }
})();
