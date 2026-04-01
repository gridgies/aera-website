import type { Metadata } from "next";
import Link from "next/link";
import { FRAGEN_LIST } from "@/data/fragenData";
import { breadcrumbSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://aerahealth.de";

export const metadata: Metadata = {
  title: "Fragen & Antworten: Wechseljahre, Hashimoto, Hormone",
  description:
    "Häufige Fragen zu Wechseljahren, Hashimoto, Schilddrüse und Hormonen – medizinisch fundiert beantwortet von der Aera Health Redaktion.",
  alternates: { canonical: "/fragen" },
  openGraph: {
    title: "Fragen & Antworten: Wechseljahre, Hashimoto, Hormone",
    description:
      "Häufige Fragen zu Wechseljahren, Hashimoto, Schilddrüse und Hormonen – medizinisch fundiert beantwortet.",
    url: `${BASE_URL}/fragen`,
  },
};

const pageUrl = `${BASE_URL}/fragen`;
const today = new Date().toISOString().split("T")[0];

const breadcrumbs = [
  { name: "Startseite", url: BASE_URL },
  { name: "Fragen & Antworten", url: pageUrl },
];

export default function FragenIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          medicalWebPageSchema({
            name: "Fragen & Antworten: Wechseljahre, Hashimoto, Hormone",
            description:
              "Häufige Fragen zu Wechseljahren, Hashimoto, Schilddrüse und Hormonen – medizinisch fundiert beantwortet.",
            url: pageUrl,
            dateModified: today,
          })
        )}
      />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-on-surface">Fragen & Antworten</span>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-tight mb-8">
            Fragen & Antworten
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic max-w-2xl">
            Die häufigsten Fragen zu Wechseljahren, Hashimoto, Schilddrüse und Hormonen – medizinisch fundiert beantwortet.
          </p>
        </header>

        {/* Questions list */}
        <section aria-labelledby="fragen-heading">
          <h2 id="fragen-heading" className="sr-only">Alle Fragen</h2>
          <div className="space-y-3">
            {FRAGEN_LIST.map((frage) => (
              <Link
                key={frage.slug}
                href={`/fragen/${frage.slug}`}
                className="flex items-center gap-4 p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <span className="material-symbols-outlined text-primary font-extralight text-xl flex-shrink-0">
                  help
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
                    {frage.question}
                  </p>
                  <p className="text-xs text-on-surface-variant font-body mt-1 line-clamp-1">
                    {frage.metaDescription}
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant font-extralight flex-shrink-0 group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary-container rounded-3xl p-10 text-center mt-16">
          <h2 className="text-xl font-headline font-bold text-on-primary-container mb-3">
            Deine Frage nicht dabei?
          </h2>
          <p className="text-on-primary-container/80 font-body text-sm mb-6">
            Mach unseren kostenlosen 2-Minuten-Check und bekomme eine personalisierte erste Einschätzung.
          </p>
          <Link
            href="/check"
            className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Zum Symptom-Check
          </Link>
        </div>
      </div>
    </>
  );
}
