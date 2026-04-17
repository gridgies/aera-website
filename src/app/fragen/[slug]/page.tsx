import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FRAGEN_DATA, FRAGEN_LIST } from "@/data/fragenData";
import { CONDITIONS_DATA } from "@/data/conditions";
import { faqSchema, breadcrumbSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FRAGEN_LIST.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const frage = FRAGEN_DATA[slug];
  if (!frage) return {};

  const ogImage = `/og?title=${encodeURIComponent(frage.question.slice(0, 70))}&subtitle=${encodeURIComponent(frage.metaDescription.slice(0, 120))}`;

  return {
    title: frage.metaTitle,
    description: frage.metaDescription,
    alternates: { canonical: `/fragen/${slug}` },
    openGraph: {
      title: frage.metaTitle,
      description: frage.metaDescription,
      url: `${BASE_URL}/fragen/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: frage.question }],
    },
    twitter: {
      card: "summary_large_image",
      title: frage.metaTitle,
      description: frage.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function FragePage({ params }: Props) {
  const { slug } = await params;
  const frage = FRAGEN_DATA[slug];
  if (!frage) notFound();

  const pageUrl = `${BASE_URL}/fragen/${slug}`;
  const today = new Date().toISOString().split("T")[0];

  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Fragen & Antworten", url: `${BASE_URL}/fragen` },
    { name: frage.question, url: pageUrl },
  ];

  const allFaqs = [
    { question: frage.question, answer: frage.answer },
    ...frage.faqs,
  ];

  const relatedQuestions = frage.relatedQuestions
    .map((slug) => FRAGEN_DATA[slug])
    .filter(Boolean);

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
            name: frage.question,
            description: frage.metaDescription,
            url: pageUrl,
            dateModified: today,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(allFaqs))}
      />

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/fragen" className="hover:text-primary transition-colors">Fragen & Antworten</Link>
          <span>/</span>
          <span className="text-on-surface line-clamp-1">{frage.question}</span>
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
        <header className="mb-12">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Fragen & Antworten
          </span>
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface leading-tight mb-8">
            {frage.question}
          </h1>

          {/* Quick answer box */}
          <div className="bg-primary-container rounded-2xl p-8 speakable">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-on-primary-container/60 mb-3">
              Kurze Antwort
            </p>
            <p className="text-on-primary-container font-body leading-relaxed">
              {frage.answer}
            </p>
          </div>
        </header>

        {/* Content sections */}
        {frage.content.sections.map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="text-xl font-headline font-bold mb-4 text-on-surface">
              {section.heading}
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              {section.text}
            </p>
          </section>
        ))}

        {/* Additional FAQs */}
        {frage.faqs.length > 0 && (
          <section className="mb-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
              Weitere häufige Fragen
            </h2>
            <div className="space-y-6">
              {frage.faqs.map((faq) => (
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

        {/* Related conditions */}
        {frage.relatedConditions.length > 0 && (
          <section className="mb-16" aria-labelledby="themen-heading">
            <h2 id="themen-heading" className="text-xl font-headline font-bold mb-6">
              Verwandte Themen
            </h2>
            <div className="flex flex-wrap gap-3">
              {frage.relatedConditions
                .filter((slug) => CONDITIONS_DATA[slug])
                .map((slug) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="px-4 py-2 bg-surface-container rounded-full text-sm font-body hover:bg-surface-container-high transition-colors"
                  >
                    {CONDITIONS_DATA[slug].name}
                  </Link>
                ))}
            </div>
          </section>
        )}

        {/* Related questions */}
        {relatedQuestions.length > 0 && (
          <section className="mb-16" aria-labelledby="verwandte-fragen-heading">
            <h2 id="verwandte-fragen-heading" className="text-xl font-headline font-bold mb-6">
              Ähnliche Fragen
            </h2>
            <div className="space-y-3">
              {relatedQuestions.map((q) => (
                <Link
                  key={q.slug}
                  href={`/fragen/${q.slug}`}
                  className="flex items-center gap-3 p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary font-extralight text-sm flex-shrink-0">
                    help
                  </span>
                  <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                    {q.question}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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
