import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AGE_PAGES } from "@/data/agePages";
import { faqSchema, breadcrumbSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://aerahealth.de";

interface Props {
  params: Promise<{ alter: string }>;
}

export async function generateStaticParams() {
  return Object.keys(AGE_PAGES).map((alter) => ({ alter }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { alter } = await params;
  const page = AGE_PAGES[alter];
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/wechseljahre-mit/${alter}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `${BASE_URL}/wechseljahre-mit/${alter}`,
    },
  };
}

export default async function AgeWechseljahreSeite({ params }: Props) {
  const { alter } = await params;
  const page = AGE_PAGES[alter];
  if (!page) notFound();

  const pageUrl = `${BASE_URL}/wechseljahre-mit/${alter}`;
  const today = new Date().toISOString().split("T")[0];

  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Wechseljahre", url: `${BASE_URL}/wechseljahre` },
    { name: `Wechseljahre mit ${page.alterLabel}`, url: pageUrl },
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

      <article className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/wechseljahre" className="hover:text-primary transition-colors">Wechseljahre</Link>
          <span>/</span>
          <span className="text-on-surface">Mit {page.alterLabel}</span>
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
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Wechseljahre
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            {page.title}
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            {page.intro}
          </p>
        </header>

        {/* Phase info */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-on-primary-container/60 mb-2">Phase</p>
          <h2 className="text-lg font-bold text-on-primary-container mb-3">{page.phase}</h2>
          <p className="text-on-primary-container/80 text-sm font-body leading-relaxed">
            {page.phaseDescription}
          </p>
        </div>

        {/* Typical symptoms */}
        <section className="mb-16" aria-labelledby="symptome-heading">
          <h2 id="symptome-heading" className="text-2xl font-headline font-bold mb-6">
            Typische Symptome mit {page.alterLabel}
          </h2>
          <ul className="space-y-3">
            {page.typicalSymptoms.map((symptom) => (
              <li key={symptom} className="flex gap-3 text-on-surface-variant font-body">
                <span className="material-symbols-outlined text-primary text-lg font-extralight flex-shrink-0 mt-0.5">
                  arrow_forward
                </span>
                {symptom}
              </li>
            ))}
          </ul>
        </section>

        {/* Unique context */}
        <section className="mb-16 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10" aria-labelledby="kontext-heading">
          <h2 id="kontext-heading" className="text-xl font-headline font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-extralight">lightbulb</span>
            Besonderheiten mit {page.alterLabel}
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            {page.uniqueContext}
          </p>
        </section>

        {/* When to see doctor */}
        <section className="mb-16 bg-surface-container rounded-2xl p-8" aria-labelledby="arzt-heading">
          <h2 id="arzt-heading" className="text-xl font-headline font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-extralight">medical_services</span>
            Wann zum Arzt?
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            {page.whenToSeeDoctor}
          </p>
        </section>

        {/* FAQs */}
        {page.faqs.length > 0 && (
          <section className="mb-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
              Häufige Fragen zu Wechseljahren mit {page.alterLabel}
            </h2>
            <div className="space-y-6">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-outline-variant/10 pb-6">
                  <h3 className="font-bold text-on-surface mb-3">{faq.question}</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Age navigation */}
        <section className="mb-16" aria-labelledby="alter-nav-heading">
          <h2 id="alter-nav-heading" className="text-xl font-headline font-bold mb-6">
            Wechseljahre in anderen Lebensphasen
          </h2>
          <div className="flex flex-wrap gap-3">
            {["35", "40", "45", "50", "55"]
              .filter((a) => a !== alter)
              .map((a) => (
                <Link
                  key={a}
                  href={`/wechseljahre-mit/${a}`}
                  className="px-4 py-2 bg-surface-container rounded-full text-sm font-body hover:bg-surface-container-high transition-colors"
                >
                  Mit {a}
                </Link>
              ))}
          </div>
        </section>

        {/* Link to main pillar */}
        <div className="mb-16 p-6 border border-outline-variant/20 rounded-2xl flex items-center gap-4">
          <span className="material-symbols-outlined text-primary font-extralight text-2xl flex-shrink-0">menu_book</span>
          <div>
            <p className="text-xs text-on-surface-variant font-body mb-1">Mehr zum Thema</p>
            <Link href="/wechseljahre" className="font-bold text-on-surface hover:text-primary transition-colors">
              Der komplette Wechseljahre-Ratgeber →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-container rounded-3xl p-10 text-center mt-16">
          <h2 className="text-xl font-headline font-bold text-on-primary-container mb-3">
            Unsicher, was hinter deinen Symptomen steckt?
          </h2>
          <p className="text-on-primary-container/80 font-body text-sm mb-6">
            Mach unseren kostenlosen 2-Minuten-Check und bekomme eine erste Einschätzung.
          </p>
          <Link
            href="/check"
            className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Zum Symptom-Check
          </Link>
        </div>
      </article>
    </>
  );
}
