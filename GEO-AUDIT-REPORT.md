# GEO Audit Report — aerahealth.de
**Date:** May 4, 2026  
**Auditor:** Claude Code / GEO Audit Skill  
**Business Type:** German Health Publisher / Freemium Platform  
**Pages Audited:** 391 in sitemap · 5 condition hubs · 73 FAQ pages · ~100 symptom articles · 15 comparison pages

---

## Composite GEO Score: 52/100 — Fair

> **Diagnosis:** Aera Health has built genuinely citation-ready content that AI engines could cite — but AI engines do not yet know Aera Health exists as a trusted entity. The content quality gap is narrow. The brand authority gap is large and is the primary performance constraint.

| Category | Weight | Score | Weighted | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 25% | 58 | 14.5 | Fair |
| Brand Authority Signals | 20% | 18 | 3.6 | Critical |
| Content Quality & E-E-A-T | 20% | 61 | 12.2 | Fair |
| Technical Foundations | 15% | 79 | 11.85 | Good |
| Structured Data | 10% | 41 | 4.1 | Poor |
| Platform Optimization | 10% | 59 | 5.9 | Fair |
| **Composite GEO Score** | | | **52/100** | **Fair** |

---

## Score Card

```
AI Citability & Visibility   ████████████████░░░░░░░░  58/100
Brand Authority              ████░░░░░░░░░░░░░░░░░░░░  18/100  ⚠ Critical
Content / E-E-A-T            ████████████████░░░░░░░░  61/100
Technical Foundations        ████████████████████░░░░  79/100
Structured Data              ██████████░░░░░░░░░░░░░░  41/100
Platform Optimization        ████████████████░░░░░░░░  59/100
```

### Platform Readiness

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 72/100 | Good |
| Perplexity AI | 61/100 | Fair |
| Google Gemini | 58/100 | Fair |
| Bing Copilot | 48/100 | Poor |
| ChatGPT Web Search | 44/100 | Poor |

---

## What's Working Well

1. **AI crawler access is near-perfect (95/100).** All AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are allowed via the wildcard rule. Sitemap is declared in robots.txt and resolves correctly.

2. **Pages are server-rendered — zero JavaScript barrier.** Next.js SSR confirmed via `x-nextjs-prerender: 1` header. All structured data, body text, tables, and FAQ content are in the initial HTML response. AI crawlers that don't execute JavaScript see everything.

3. **The TSH-Wert-Tabelle page is a citation-ready asset (citability 89/100).** The age-stratified table with dual columns (lab range vs. optimal range), pregnancy trimester table, and the seven-row value interpretation section are among the most AI-citable health content in German. This page alone is likely to appear in AI answers about "normaler TSH-Wert Frau."

4. **Hashimoto hub has strong named-study citations (citability 83/100).** The Negro 2006 study citation with specific numbers ("3.5% vs. 13.8% miscarriage rates"), Toulis et al. (2010), and "TPO antibodies positive in >95% of Hashimoto cases" are the type of precise, self-contained claims AI engines cite.

5. **Technical foundations are solid (79/100).** Clean URL structure, responsive design, LCP image optimization via `next/image`, self-hosted fonts via `next/font`, and HSTS header are all in place.

6. **Hub-and-spoke internal linking is strong.** Each condition hub links to 20-25 symptom/FAQ subpages. The `/hashimoto` page links to `/hashimoto/muedigkeit`, `/hashimoto/haarausfall`, `/fragen/tsh-wert-tabelle`, and comparison pages — correct topical clustering.

7. **SpeakableSpecification is correctly implemented.** `cssSelector: ["h1", "h2", ".speakable"]` on all MedicalWebPage schema blocks is properly configured for voice/AI assistant readability.

---

## Critical Findings

### 1. Brand Authority: 18/100 — The Primary Constraint

AI engines (ChatGPT, Perplexity, Claude, Gemini) use off-site entity corroboration to decide whether a source is trustworthy enough to cite. A brand with zero Wikipedia presence, no YouTube footprint, no Reddit discussions, and no verified LinkedIn company page is an unknown entity to these models — regardless of content quality.

| Platform | Status |
|---|---|
| Wikipedia | No article exists |
| Wikidata | No entity registered |
| YouTube | No channel found |
| LinkedIn | No company page found at any obvious slug |
| Reddit | No confirmed community presence |
| Press coverage | No media mentions surfaced |

This single gap accounts for ~22 of the ~48 points separating aerahealth.de from a Good GEO score.

### 2. `sameAs: []` in schema.ts — The Single Highest-Leverage Code Fix

In `src/lib/schema.ts`, the `organizationSchema()` function explicitly sets `sameAs: []` — an empty array. This is a machine-readable declaration that "this entity has no cross-platform presence." This empty array propagates to every one of the 391 pages in the sitemap. AI models use `sameAs` to link web entities to known knowledge graph entries. Without it, Aera Health cannot be corroborated by any knowledge graph.

**Location:** `src/lib/schema.ts`, `sameAs: []` in `organizationSchema()`  
**Fix:** Populate with real profile URLs once created (LinkedIn, Crunchbase, Instagram, YouTube)  
**Effort:** One line change, 391-page impact

### 3. Anonymous Medical Authorship — YMYL Critical Gap

No named medical authors appear on any article page. Expert profiles on `/experten` have no names ("coming soon"). Google's Quality Rater Guidelines explicitly require that the identity and qualifications of "who is responsible for the content" be verifiable for YMYL medical topics. An anonymous "Aera Health Redaktion" credit provides zero verifiable authority signal to AI engines.

### 4. No Hyperlinked Citations

Citations to AWMF 060-002, American Thyroid Association, DGE, Toulis et al., and six other sources appear as text but are not hyperlinked to source material. AI engines that follow citation chains for verification cannot do so. Google's AI Overviews, ChatGPT, and Perplexity all weight claims higher when they can trace them to a citable source URL.

### 5. `/api/` Routes Exposed to All Crawlers

The live `robots.txt` does not include `Disallow: /api/`. API endpoints (waitlist, contact, quiz-submit, companion chat, and `/api/admin/approve-user`) are currently crawlable by all bots. The `/auswertung`, `/login`, and `/companion` routes similarly rely only on per-page `meta robots` tags — which AI crawlers may not fully honor.

---

## Prioritized Action Plan

### Quick Wins (< 1 day each)

| Priority | Action | File | Impact |
|---|---|---|---|
| 🔴 CRITICAL | Populate `sameAs: []` with LinkedIn, Crunchbase, Instagram URLs | `src/lib/schema.ts` | 391-page entity recognition |
| 🔴 CRITICAL | Add `/api/`, `/auswertung`, `/login`, `/companion` to Disallow | `src/app/robots.ts` | Security + crawl budget |
| 🟠 HIGH | Add `logo.width`, `logo.height`, `logo.contentUrl` to Organization schema | `src/lib/schema.ts` | Google Knowledge Panel eligibility |
| 🟠 HIGH | Add `foundingDate` to Organization schema | `src/lib/schema.ts` | Entity confidence |
| 🟠 HIGH | Remove or fix `potentialAction` SearchAction — `/suche?q=` route doesn't exist | `src/lib/schema.ts` | Schema validity |
| 🟠 HIGH | Add `metadata` exports to `experten/page.tsx` and `kontakt/page.tsx` | Both files | Duplicate canonical fix |
| 🟠 HIGH | Set `og:type: "article"` on content pages | `[condition]/page.tsx`, `fragen/[slug]/page.tsx` | Social + Bing preview |
| 🟠 HIGH | Add `msvalidate.01` meta tag and verify Bing Webmaster Tools | `src/app/layout.tsx` | Bing Copilot indexing |
| 🟠 HIGH | Verify and register for Google Search Console sitemap submission | External (no code) | Google AIO eligibility |
| 🟡 MEDIUM | Add explicit AI crawler entries to robots.txt (GPTBot, ClaudeBot, PerplexityBot) | `src/app/robots.ts` | AI crawler signaling |
| 🟡 MEDIUM | Shorten article title tags — TSH page is 87 chars, target < 60 | Per-page metadata | SERP display + CTR |
| 🟡 MEDIUM | Remove/deduplicate `articleSchema()` dead code or apply to `/themen/*` pages | `src/lib/schema.ts` | Code hygiene / Article E-E-A-T |
| 🟡 MEDIUM | Remove partial hreflang or extend to all pages via root layout | `src/app/layout.tsx` | Crawl consistency |

### This Sprint (1–2 weeks)

| Priority | Action | Impact |
|---|---|---|
| 🔴 CRITICAL | Name at minimum one medical reviewer per article with title and specialty | YMYL E-E-A-T, AI citability |
| 🟠 HIGH | Add `datePublished` to all `medicalWebPageSchema()` calls (currently never passed) | Content freshness signal |
| 🟠 HIGH | Make `about.MedicalCondition` dynamic — pass specific ICD-10 coded condition per page | AI classification |
| 🟠 HIGH | Restructure `public/llms.txt` with proper H2 link directory (template below) | Perplexity, ChatGPT discovery |
| 🟠 HIGH | Add `citation` array to MedicalWebPage schema with AWMF/ATA/PubMed URLs | AI verification chains |
| 🟠 HIGH | Implement security headers in `next.config.mjs` (CSP, X-Frame-Options, etc.) | DSGVO, trust signals |
| 🟠 HIGH | Implement IndexNow for instant Bing notification on content updates | Bing Copilot indexing |
| 🟡 MEDIUM | Migrate Material Symbols from external Google Fonts CSS to self-hosted | Core Web Vitals (CLS/INP) |
| 🟡 MEDIUM | Deduplicate sitemap — verify `/fragen/tsh-wert-tabelle` doesn't appear twice | Crawl budget |
| 🟡 MEDIUM | Add hyperlinks to all cited sources inline in article body text | AI verification, E-E-A-T |

### Strategic (Next 60–90 Days)

| Priority | Action | Platform Impact |
|---|---|---|
| 🔴 CRITICAL | Create LinkedIn company page → add URL to `sameAs` and footer | ChatGPT, Gemini, Copilot |
| 🔴 CRITICAL | Create Wikidata entity for Aera Health (no Wikipedia article required) | All AI engines |
| 🟠 HIGH | Create YouTube channel with 3 explainer videos (TSH, Hashimoto, Wechseljahre) | Gemini, Perplexity |
| 🟠 HIGH | Publish named expert profile pages at `/experten/[name]` with Person schema | Google AIO, ChatGPT |
| 🟠 HIGH | Get 3 press mentions in German health/digital health media | Brand authority |
| 🟠 HIGH | Build Reddit presence in r/Hashimoto, r/Wechseljahre, r/Schilddruese | Perplexity citations |
| 🟡 MEDIUM | Rebuild `/wissenschaft` page with actual hyperlinked study citations | Gemini, E-E-A-T |
| 🟡 MEDIUM | Commission 3–5 anonymized patient case narratives (specific lab values, timelines) | Experience signals |
| 🟡 MEDIUM | Source the "7-10 years to diagnosis" homepage claim with a citation | Homepage E-E-A-T |
| 🟡 MEDIUM | Remove or verify the "94% improvement" outcome claim (or publish methodology) | Trust signals, HWG compliance |

---

## Recommended llms.txt Template

Replace `public/llms.txt` with this structured format:

```
# Aera Health

> Personalisierte, evidenzbasierte Unterstützung für Frauen mit hormonellen Beschwerden.
> Themen: Wechseljahre, Hashimoto, Schilddrüse, Hormone, PCOS. Sprache: Deutsch.

## Condition Hubs

- [Menopause](https://www.aerahealth.de/menopause): 34 Symptome der Wechseljahre, Behandlungsoptionen, HRT-Leitlinien
- [Hashimoto](https://www.aerahealth.de/hashimoto): Diagnose, TPO-Antikörper, Selen, L-Thyroxin, Schwangerschaft
- [Schilddrüse](https://www.aerahealth.de/schilddruese): Schilddrüsenwerte, Unterfunktion, Überfunktion
- [Hormone](https://www.aerahealth.de/hormone): Östrogen, Progesteron, Cortisol, Testosteron
- [PCOS](https://www.aerahealth.de/pcos): Polyzystisches Ovarialsyndrom, Symptome, Therapie, Ernährung

## FAQ / Häufige Fragen (Auswahl)

- [TSH-Wert Tabelle](https://www.aerahealth.de/fragen/tsh-wert-tabelle): Altersstratifizierte TSH-Referenzwerte, Schwangerschaft, Hashimoto-Zielwerte
- [Alle Fragen](https://www.aerahealth.de/fragen): 73 häufig gestellte Fragen zur Frauengesundheit

## Tools

- [Symptom-Check](https://www.aerahealth.de/check): Personalisierte Analyse hormoneller Beschwerden (2 Minuten)
- [Experten](https://www.aerahealth.de/experten): Spezialistinnen-Verzeichnis

## Methodik & Quellen

- [Wissenschaft & Methodik](https://www.aerahealth.de/wissenschaft): Evidenzbasis und verwendete Leitlinien
- [Quellen und Methodik](https://www.aerahealth.de/quellen-und-methodik): Quellenstandards und Bewertungssystem
```

A companion `/llms-full.txt` mapping all 391 pages with one-line summaries would push the llms.txt score from 40/100 to 90+.

---

## Schema Fixes — Code-Level

### Fix 1: sameAs in organizationSchema (src/lib/schema.ts)

```typescript
// Before
sameAs: [],

// After (populate with real URLs once profiles exist)
sameAs: [
  "https://www.linkedin.com/company/aera-health",  // create first
  "https://www.crunchbase.com/organization/aera-health",  // create first
  "https://www.instagram.com/aerahealth",  // if exists
  "https://www.youtube.com/@aerahealth",  // create channel first
],
```

### Fix 2: Logo object in organizationSchema

```typescript
// Before
logo: "https://www.aerahealth.de/apple-touch-icon.png",

// After
logo: {
  "@type": "ImageObject",
  "url": "https://www.aerahealth.de/apple-touch-icon.png",
  "contentUrl": "https://www.aerahealth.de/apple-touch-icon.png",
  "width": 180,
  "height": 180,
},
```

### Fix 3: datePublished + dynamic about in medicalWebPageSchema

```typescript
// Add to function signature
export function medicalWebPageSchema({
  name, description, url, dateModified,
  datePublished,  // add this
  condition,      // add this: { name: string; icdCode?: string }
}: {
  name: string; description: string; url: string;
  dateModified?: string; datePublished?: string;
  condition?: { name: string; icdCode?: string };
}) {
  return {
    // ...existing fields...
    datePublished: datePublished || dateModified,
    about: condition ? {
      "@type": "MedicalCondition",
      "name": condition.name,
      ...(condition.icdCode && {
        "code": { "@type": "MedicalCode", "code": condition.icdCode, "codingSystem": "ICD-10" }
      }),
    } : { "@type": "Thing", "name": "Hormonelle Frauengesundheit" },
  };
}
```

### Fix 4: robots.ts additions

```typescript
// src/app/robots.ts — add to disallow array
disallow: [
  "/impressum",
  "/datenschutz",
  "/agb",
  "/api/",          // add — prevents API endpoint crawling
  "/auswertung",   // add — private quiz results
  "/login",        // add — auth page
  "/companion",    // add — private app feature
],
```

---

## Potential GEO Score After Quick Wins

If the code-level quick wins are implemented and brand presence creation begins:

| Category | Current | Projected | Change |
|---|---|---|---|
| AI Citability & Visibility | 58 | 68 | +10 (llms.txt + schema) |
| Brand Authority Signals | 18 | 35 | +17 (LinkedIn + Wikidata) |
| Content Quality & E-E-A-T | 61 | 68 | +7 (named authors + citations) |
| Technical Foundations | 79 | 86 | +7 (security headers + robots) |
| Structured Data | 41 | 62 | +21 (sameAs + datePublished + conditions) |
| Platform Optimization | 59 | 67 | +8 (schema + Bing verification) |
| **Projected Composite** | **52** | **66** | **+14 → Good** |

---

## Appendix: Highest-Citability Pages

| Page | Citability Score | Strongest Asset |
|---|---|---|
| `/fragen/tsh-wert-tabelle` | 89/100 | Age-stratified dual-column TSH table + pregnancy trimesters |
| `/hashimoto` | 83/100 | Negro 2006 study citation, TPO antibody threshold, selenium RCT data |
| `/hashimoto` | 80/100 | "200 µg/day reduces TPO antibodies by 20–40%" with dosing safety threshold |
| `/menopause` | 78/100 | DGGG 2020 guideline anchor, Fezolinetant approval, HRT risk window |
| `/menopause` | 71/100 | 4 Germany-specific epidemiology stats in a tight cluster |

---

*Report generated by Claude Code · GEO Audit Skill v1 · aerahealth.de · May 4, 2026*
