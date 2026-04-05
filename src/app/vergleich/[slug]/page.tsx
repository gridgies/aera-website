import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { VERGLEICHE_DATA, VERGLEICHE_LIST } from "@/data/vergleiche";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";
import { breadcrumbSchema, medicalWebPageSchema, faqSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VERGLEICHE_LIST.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = VERGLEICHE_DATA[slug];
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/vergleich/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${BASE_URL}/vergleich/${slug}`,
    },
  };
}

export default async function VergleichPage({ params }: Props) {
  const { slug } = await params;
  const page = VERGLEICHE_DATA[slug];
  if (!page) notFound();

  const conditionA = CONDITIONS_DATA[page.conditionASlug];
  const conditionB = CONDITIONS_DATA[page.conditionBSlug];
  const pageUrl = `${BASE_URL}/vergleich/${slug}`;
  const today = new Date().toISOString().split("T")[0];

  const sharedSymptomsData = page.sharedSymptoms
    .map((s) => SYMPTOMS_DATA[s])
    .filter(Boolean);

  const conditionAOnlyData = page.conditionAOnlySymptoms
    .map((s) => SYMPTOMS_DATA[s])
    .filter(Boolean);

  const conditionBOnlyData = page.conditionBOnlySymptoms
    .map((s) => SYMPTOMS_DATA[s])
    .filter(Boolean);

  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Vergleich", url: `${BASE_URL}/vergleich` },
    { name: `${page.conditionAName} vs. ${page.conditionBName}`, url: pageUrl },
  ];

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
            name: page.title,
            description: page.metaDescription,
            url: pageUrl,
            dateModified: today,
          })
        )}
      />
      {page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(page.faqs))}
        />
      )}

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-on-surface">Vergleich</span>
          <span>/</span>
          <span className="text-on-surface">{page.conditionAName} vs. {page.conditionBName}</span>
        </nav>

        {/* Medical disclaimer */}
        <aside className="bg-surface-container-low rounded-xl p-4 mb-10 border border-outline-variant/10 text-xs text-on-surface-variant font-body flex gap-3 items-start">
          <span className="material-symbols-outlined text-base font-extralight flex-shrink-0 mt-0.5">info</span>
          <span>
            Dieser Artikel dient nur zu Informationszwecken und ersetzt keine ärztliche Beratung.
            Medizinisch geprüft von der Aera Health Redaktion. Letzte Aktualisierung: {today}.
          </span>
        </aside>

        {/* Header */}
        <header className="mb-16">
          <div className="flex gap-2 mb-6 flex-wrap">
            {conditionA && (
              <Link
                href={`/${conditionA.slug}`}
                className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
              >
                {conditionA.name}
              </Link>
            )}
            {conditionB && (
              <Link
                href={`/${conditionB.slug}`}
                className="inline-block py-1 px-4 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
              >
                {conditionB.name}
              </Link>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-8">
            {page.title}
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic max-w-3xl">
            {page.intro}
          </p>
        </header>

        {/* Why they get confused */}
        <section className="mb-16 bg-surface-container rounded-2xl p-8 border border-outline-variant/10">
          <h2 className="text-lg font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary font-extralight">help</span>
            Warum werden sie so oft verwechselt?
          </h2>
          <p className="text-sm font-body text-on-surface-variant leading-relaxed">
            {page.confusionNote}
          </p>
        </section>

        {/* Shared symptoms */}
        {sharedSymptomsData.length > 0 && (
          <section className="mb-16" aria-labelledby="gemeinsam-heading">
            <h2 id="gemeinsam-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
              Gemeinsame Symptome
            </h2>
            <p className="text-on-surface-variant font-body text-sm mb-8">
              Diese Symptome treten bei beiden auf – sie helfen nicht bei der Unterscheidung:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {sharedSymptomsData.map((symptom) => (
                <div
                  key={symptom.slug}
                  className="flex items-start gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10"
                >
                  <span className="material-symbols-outlined text-outline-variant font-extralight text-base flex-shrink-0 mt-0.5">
                    remove
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-on-surface">{symptom.name}</p>
                    <p className="text-xs text-on-surface-variant font-body mt-0.5 line-clamp-1">
                      {symptom.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Unique symptoms per condition */}
        {(conditionAOnlyData.length > 0 || conditionBOnlyData.length > 0) && (
          <section className="mb-16" aria-labelledby="einzigartig-heading">
            <h2 id="einzigartig-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
              Unterscheidende Symptome
            </h2>
            <p className="text-on-surface-variant font-body text-sm mb-8">
              Diese Symptome sind spezifisch für eine der beiden Erkrankungen und helfen bei der Abgrenzung:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Condition A unique */}
              <div>
                <h3 className="font-bold text-sm text-on-secondary-container bg-secondary-container px-4 py-2 rounded-xl mb-3">
                  Eher {page.conditionAName}
                </h3>
                <ul className="space-y-2">
                  {conditionAOnlyData.map((symptom) => (
                    <li key={symptom.slug} className="flex items-start gap-2 text-sm font-body text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary font-extralight text-base flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      {symptom.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Condition B unique */}
              <div>
                <h3 className="font-bold text-sm text-on-primary-container bg-primary-container px-4 py-2 rounded-xl mb-3">
                  Eher {page.conditionBName}
                </h3>
                <ul className="space-y-2">
                  {conditionBOnlyData.map((symptom) => (
                    <li key={symptom.slug} className="flex items-start gap-2 text-sm font-body text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary font-extralight text-base flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      {symptom.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Key differences table */}
        <section className="mb-16" aria-labelledby="unterschiede-heading">
          <h2 id="unterschiede-heading" className="text-2xl font-headline font-bold text-on-surface mb-8">
            Die wichtigsten Unterschiede auf einen Blick
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="text-left py-3 pr-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wider w-1/3">
                    Aspekt
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-on-secondary-container bg-secondary-container/50 px-3 rounded-t-lg">
                    {page.conditionAName}
                  </th>
                  <th className="text-left py-3 pl-4 font-semibold text-on-primary-container bg-primary-container/50 px-3 rounded-t-lg">
                    {page.conditionBName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.keyDifferences.map((diff, i) => (
                  <tr key={i} className="border-b border-outline-variant/10">
                    <td className="py-4 pr-4 font-semibold text-on-surface text-xs">{diff.aspect}</td>
                    <td className="py-4 pr-4 text-on-surface-variant bg-secondary-container/20 px-3">{diff.a}</td>
                    <td className="py-4 pl-4 text-on-surface-variant bg-primary-container/20 px-3">{diff.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lab tests */}
        <section className="mb-16" aria-labelledby="labor-heading">
          <h2 id="labor-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
            Welche Laborwerte helfen?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-8 leading-relaxed">
            {page.howToDifferentiate}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="text-left py-3 pr-4 font-semibold text-on-surface-variant text-xs uppercase tracking-wider w-1/3">
                    Test
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-on-secondary-container bg-secondary-container/50 px-3 rounded-t-lg">
                    {page.conditionAName}
                  </th>
                  <th className="text-left py-3 pl-4 font-semibold text-on-primary-container bg-primary-container/50 px-3 rounded-t-lg">
                    {page.conditionBName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.labTests.map((test, i) => (
                  <tr key={i} className="border-b border-outline-variant/10">
                    <td className="py-4 pr-4 font-semibold text-on-surface text-xs">{test.test}</td>
                    <td className="py-4 pr-4 text-on-surface-variant bg-secondary-container/20 px-3">{test.a}</td>
                    <td className="py-4 pl-4 text-on-surface-variant bg-primary-container/20 px-3">{test.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        {page.faqs.length > 0 && (
          <section className="mb-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
              Häufige Fragen
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-body font-semibold text-on-surface text-sm group-open:text-primary transition-colors">
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined text-on-surface-variant font-extralight flex-shrink-0 transition-transform group-open:rotate-180 text-base">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm font-body text-on-surface-variant leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        {page.sources.length > 0 && (
          <section className="mb-16" aria-labelledby="quellen-heading">
            <h2 id="quellen-heading" className="text-lg font-headline font-bold mb-5 text-on-surface-variant">
              Quellen & Literatur
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              {page.sources.map((src, i) => (
                <li key={i} className="text-xs font-body text-on-surface-variant leading-relaxed">
                  <span className="font-semibold">{src.authors}</span> ({src.year}). {src.title}.{" "}
                  <em>{src.journal}</em>.
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Related condition links */}
        <section className="mb-16" aria-labelledby="ratgeber-heading">
          <h2 id="ratgeber-heading" className="text-xl font-headline font-bold mb-6">
            Mehr erfahren
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {conditionA && (
              <Link
                href={`/${conditionA.slug}`}
                className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <p className="font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                  Ratgeber {page.conditionAName}
                </p>
                <p className="text-xs text-on-surface-variant font-body line-clamp-2">
                  {conditionA.description}
                </p>
              </Link>
            )}
            {conditionB && (
              <Link
                href={`/${conditionB.slug}`}
                className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <p className="font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                  Ratgeber {page.conditionBName}
                </p>
                <p className="text-xs text-on-surface-variant font-body line-clamp-2">
                  {conditionB.description}
                </p>
              </Link>
            )}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary-container rounded-3xl p-10 text-center">
          <h2 className="text-xl font-headline font-bold text-on-primary-container mb-3">
            Unsicher, was hinter deinen Symptomen steckt?
          </h2>
          <p className="text-on-primary-container/80 font-body text-sm mb-6">
            Mach unseren kostenlosen 2-Minuten-Check für eine erste Einschätzung.
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
