import type { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS_DATA } from "@/data/conditions";
import { FRAGEN_LIST } from "@/data/fragenData";
import { AGE_PAGES } from "@/data/agePages";
import { VERGLEICHE_LIST } from "@/data/vergleiche";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";

export const metadata: Metadata = {
  title: "Gesundheitsthemen – Menopause, Hashimoto & Hormone | Aera Health",
  description:
    "Alle Themen zu weiblicher Hormongesundheit: Menopause, Hashimoto, Schilddrüse und Hormone. Ratgeber, Symptome und Antworten auf häufige Fragen.",
  alternates: { canonical: "/themen" },
  openGraph: {
    title: "Gesundheitsthemen – Menopause, Hashimoto & Hormone",
    description:
      "Ratgeber zu Menopause, Hashimoto, Schilddrüse und Hormonen. Wissenschaftlich fundiert für Frauen.",
    url: `${BASE_URL}/themen`,
  },
};

const CONDITION_META: Record<string, { icon: string; color: string; textColor: string; tagline: string }> = {
  menopause:   { icon: "light_mode",  color: "bg-amber-50",  textColor: "text-amber-800",  tagline: "Perimenopause · Menopause · Postmenopause" },
  hashimoto:   { icon: "science",     color: "bg-blue-50",   textColor: "text-blue-800",   tagline: "Autoimmun · Schilddrüse · Hashimoto-Schübe" },
  schilddruese:{ icon: "analytics",   color: "bg-teal-50",   textColor: "text-teal-800",   tagline: "TSH-Werte · Hypothyreose · Hyperthyreose" },
  hormone:     { icon: "favorite",    color: "bg-rose-50",   textColor: "text-rose-800",   tagline: "Östrogen · Progesteron · Cortisol" },
};

const breadcrumbs = [
  { name: "Startseite", url: BASE_URL },
  { name: "Themen", url: `${BASE_URL}/themen` },
];

export default function ThemenPage() {
  const conditions = Object.values(CONDITIONS_DATA);

  // Featured questions: 2 per condition
  const featuredFragen = [
    ...FRAGEN_LIST.filter((f) => f.relatedConditions.includes("menopause")).slice(0, 2),
    ...FRAGEN_LIST.filter((f) => f.relatedConditions.includes("hashimoto")).slice(0, 2),
    ...FRAGEN_LIST.filter((f) => f.relatedConditions.includes("hormone")).slice(0, 2),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-on-surface">Themen</span>
        </nav>

        {/* Header */}
        <header className="mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Ratgeber
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Gesundheitsthemen
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl">
            Wissenschaftlich fundierte Ratgeber zu den häufigsten hormonellen Erkrankungen
            bei Frauen. Symptome verstehen, Diagnosen einordnen, nächste Schritte planen.
          </p>
        </header>

        {/* Condition pillar cards */}
        <section className="mb-24" aria-labelledby="ratgeber-heading">
          <h2 id="ratgeber-heading" className="text-2xl font-headline font-bold text-on-surface mb-8">
            Ratgeber nach Thema
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {conditions.map((condition) => {
              const meta = CONDITION_META[condition.slug] ?? {
                icon: "medical_services",
                color: "bg-surface-container",
                textColor: "text-on-surface",
                tagline: "",
              };
              return (
                <Link
                  key={condition.slug}
                  href={`/${condition.slug}`}
                  className={`group rounded-3xl p-8 ${meta.color} hover:shadow-lg transition-all`}
                >
                  <span className={`material-symbols-outlined text-3xl font-extralight mb-4 block ${meta.textColor}`}>
                    {meta.icon}
                  </span>
                  <h3 className={`text-xl font-headline font-bold mb-2 ${meta.textColor}`}>
                    {condition.name}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${meta.textColor} opacity-60`}>
                    {meta.tagline}
                  </p>
                  <p className={`text-sm font-body leading-relaxed ${meta.textColor} opacity-80 mb-6`}>
                    {condition.description}
                  </p>
                  <div className={`flex items-center gap-2 text-sm font-bold ${meta.textColor}`}>
                    Zum Ratgeber
                    <span className="material-symbols-outlined text-sm font-extralight group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Age-specific Menopause pages */}
        <section className="mb-24" aria-labelledby="alter-heading">
          <h2 id="alter-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
            Menopause nach Lebensphase
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-8">
            Hormonschwankungen beginnen früher als viele denken – und jede Phase ist anders.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {Object.entries(AGE_PAGES).map(([alter, page]) => (
              <Link
                key={alter}
                href={`/wechseljahre-mit/${alter}`}
                className="group p-5 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all text-center"
              >
                <p className="text-2xl font-headline font-bold text-primary mb-1">{alter}</p>
                <p className="text-[10px] text-on-surface-variant font-body">
                  {page.phase.split("/")[0].trim()}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Symptome cross-links */}
        <section className="mb-24" aria-labelledby="symptome-heading">
          <h2 id="symptome-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
            Symptome verstehen
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-8">
            Viele Symptome haben mehrere hormonelle Ursachen – hier findest du sie nach Thema sortiert.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {conditions.map((condition) => (
              <div key={condition.slug} className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <h3 className="font-bold text-sm text-on-surface mb-4">
                  Symptome bei {condition.topicName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {condition.symptoms.slice(0, 5).map((symptomSlug) => (
                    <Link
                      key={symptomSlug}
                      href={`/${condition.slug}/${symptomSlug}`}
                      className="px-3 py-1 bg-surface-container rounded-full text-xs font-body text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors capitalize"
                    >
                      {symptomSlug.replace(/-/g, " ")}
                    </Link>
                  ))}
                  {condition.symptoms.length > 5 && (
                    <Link
                      href={`/${condition.slug}`}
                      className="px-3 py-1 rounded-full text-xs font-body text-primary hover:underline"
                    >
                      +{condition.symptoms.length - 5} weitere
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison pages */}
        <section className="mb-24" aria-labelledby="vergleich-heading">
          <h2 id="vergleich-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
            Symptome vergleichen & unterscheiden
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-8">
            Viele hormonelle Erkrankungen haben ähnliche Symptome. Diese Vergleiche helfen dir bei der Einordnung.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {VERGLEICHE_LIST.map((v) => (
              <Link
                key={v.slug}
                href={`/vergleich/${v.slug}`}
                className="group flex items-center gap-4 p-5 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-primary font-extralight text-2xl flex-shrink-0">
                  compare_arrows
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                    {v.conditionAName} vs. {v.conditionBName}
                  </p>
                  <p className="text-xs text-on-surface-variant font-body mt-0.5 line-clamp-1">
                    {v.metaDescription}
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant font-extralight text-sm flex-shrink-0 group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured questions */}
        <section className="mb-24" aria-labelledby="fragen-heading">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 id="fragen-heading" className="text-2xl font-headline font-bold text-on-surface mb-1">
                Häufige Fragen
              </h2>
              <p className="text-on-surface-variant font-body text-sm">
                Antworten auf die Fragen, die Frauen am häufigsten stellen.
              </p>
            </div>
            <Link href="/fragen" className="text-sm text-primary font-body hover:underline flex items-center gap-1 flex-shrink-0">
              Alle Fragen
              <span className="material-symbols-outlined text-sm font-extralight">arrow_forward</span>
            </Link>
          </div>
          <div className="space-y-2">
            {featuredFragen.map((frage) => (
              <Link
                key={frage.slug}
                href={`/fragen/${frage.slug}`}
                className="flex items-center gap-3 p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors group"
              >
                <span className="material-symbols-outlined text-primary font-extralight text-sm flex-shrink-0">help</span>
                <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                  {frage.question}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant font-extralight text-sm ml-auto flex-shrink-0">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary-container rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-headline font-bold text-on-primary-container mb-4">
            Weißt du nicht, wo du anfangen sollst?
          </h2>
          <p className="text-on-primary-container/80 font-body mb-8 leading-relaxed max-w-lg mx-auto">
            Unser 2-Minuten-Check analysiert deine Symptome und zeigt dir, welches Thema am relevantesten für dich ist.
          </p>
          <Link
            href="/check"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Symptom-Check starten
          </Link>
        </div>
      </div>
    </>
  );
}
