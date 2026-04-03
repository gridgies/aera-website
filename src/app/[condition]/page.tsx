import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";
import { FRAGEN_LIST } from "@/data/fragenData";
import { AGE_PAGES } from "@/data/agePages";
import { PILLAR_CONTENT } from "@/data/pillarContent";
import { breadcrumbSchema, medicalWebPageSchema, faqSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://aerahealth.de";

/** Renders a paragraph string, converting **text** to <strong> elements. */
function RichParagraph({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
      )}
    </p>
  );
}

interface Props {
  params: Promise<{ condition: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CONDITIONS_DATA).map((slug) => ({ condition: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { condition: conditionSlug } = await params;
  const condition = CONDITIONS_DATA[conditionSlug];
  if (!condition) return {};

  return {
    title: `${condition.topicName}: Symptome, Ursachen & Behandlung`,
    description: condition.metaDescription,
    alternates: { canonical: `/${conditionSlug}` },
    openGraph: {
      title: `${condition.topicName}: Symptome, Ursachen & Behandlung`,
      description: condition.metaDescription,
      url: `${BASE_URL}/${conditionSlug}`,
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { condition: conditionSlug } = await params;
  const condition = CONDITIONS_DATA[conditionSlug];
  if (!condition) notFound();

  const pageUrl = `${BASE_URL}/${conditionSlug}`;
  const today = new Date().toISOString().split("T")[0];
  const symptomsWithData = condition.symptoms.filter((s) => SYMPTOMS_DATA[s]);

  // Related questions for this condition
  const relatedFragen = FRAGEN_LIST.filter((f) =>
    f.relatedConditions.includes(conditionSlug)
  ).slice(0, 6);

  // Age pages only for wechseljahre
  const ageAlters = conditionSlug === "menopause" ? Object.keys(AGE_PAGES) : [];

  const pillar = PILLAR_CONTENT[conditionSlug] ?? null;

  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: condition.name, url: pageUrl },
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
            name: `${condition.topicName}: Symptome, Ursachen & Behandlung`,
            description: condition.metaDescription,
            url: pageUrl,
            dateModified: today,
          })
        )}
      />
      {pillar && pillar.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(pillar.faqs))}
        />
      )}

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-on-surface">{condition.name}</span>
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
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-tight mb-8">
            {condition.nameLong}
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic max-w-2xl">
            {condition.description}
          </p>
        </header>

        {/* Aliases / also known as */}
        {condition.aliases.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-on-surface-variant font-body">Auch bekannt als:</span>
            {condition.aliases.map((alias) => (
              <span
                key={alias}
                className="px-3 py-1 bg-surface-container rounded-full text-xs font-body text-on-surface-variant"
              >
                {alias}
              </span>
            ))}
          </div>
        )}

        {/* Pillar intro paragraph */}
        {pillar && (
          <p className="text-base text-on-surface-variant font-body leading-relaxed mb-14 max-w-3xl">
            {pillar.intro}
          </p>
        )}

        {/* Key statistics */}
        {pillar && pillar.stats.length > 0 && (
          <section className="mb-16" aria-labelledby="statistiken-heading">
            <h2 id="statistiken-heading" className="text-2xl font-headline font-bold mb-8">
              Das Wichtigste in Zahlen
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pillar.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-surface-container rounded-2xl border border-outline-variant/10"
                >
                  <p className="text-2xl font-headline font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-body text-on-surface mb-3 leading-snug">{stat.label}</p>
                  <p className="text-xs text-on-surface-variant font-body italic">{stat.source}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pillar content sections */}
        {pillar && pillar.sections.length > 0 && (
          <article className="mb-16 space-y-14" aria-label={`Ausführliche Informationen zu ${condition.topicName}`}>
            {pillar.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-headline font-bold text-on-surface mb-2 leading-tight">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <h3 className="text-base font-body font-semibold text-primary mb-4">
                    {section.subheading}
                  </h3>
                )}
                <div className="space-y-4 mt-5">
                  {section.paragraphs.map((para, j) => (
                    <RichParagraph key={j} text={para} className="text-base font-body text-on-surface leading-relaxed" />
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {section.bullets.map((bullet, k) => (
                      <li
                        key={k}
                        className="flex gap-3 items-start text-sm font-body text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-primary font-extralight text-base flex-shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        )}

        {/* Symptoms grid */}
        {symptomsWithData.length > 0 && (
          <section className="mb-16" aria-labelledby="symptome-heading">
            <h2 id="symptome-heading" className="text-2xl font-headline font-bold mb-8">
              Symptome bei {condition.topicName}
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              Die Symptome bei {condition.topicName} sind vielfältig. Klicke auf ein Symptom, um mehr zu erfahren:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {symptomsWithData.map((slug) => {
                const symptom = SYMPTOMS_DATA[slug];
                return (
                  <Link
                    key={slug}
                    href={`/${conditionSlug}/${slug}`}
                    className="group p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors mb-2">
                      {symptom.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-body leading-relaxed line-clamp-2">
                      {symptom.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related conditions */}
        <section className="mb-16" aria-labelledby="verwandt-heading">
          <h2 id="verwandt-heading" className="text-xl font-headline font-bold mb-6">
            Zusammenhänge & verwandte Erkrankungen
          </h2>
          <div className="flex flex-wrap gap-3">
            {condition.relatedConditions
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

        {/* FAQs from pillar content */}
        {pillar && pillar.faqs.length > 0 && (
          <section className="mb-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
              Häufige Fragen zu {condition.topicName}
            </h2>
            <div className="space-y-4">
              {pillar.faqs.map((faq, i) => (
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

        {/* Sources / Literatur */}
        {pillar && pillar.sources.length > 0 && (
          <section className="mb-16" aria-labelledby="quellen-heading">
            <h2 id="quellen-heading" className="text-lg font-headline font-bold mb-5 text-on-surface-variant">
              Quellen & Literatur
            </h2>
            <ol className="space-y-3 list-decimal list-inside">
              {pillar.sources.map((src, i) => (
                <li key={i} className="text-xs font-body text-on-surface-variant leading-relaxed">
                  <span className="font-semibold">{src.authors}</span> ({src.year}). {src.title}.{" "}
                  <em>{src.journal}</em>.
                  {src.note && (
                    <span className="block mt-1 text-on-surface-variant/70 italic ml-4">{src.note}</span>
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Age-specific pages — wechseljahre only */}
        {ageAlters.length > 0 && (
          <section className="mb-16" aria-labelledby="alter-heading">
            <h2 id="alter-heading" className="text-xl font-headline font-bold mb-6">
              Wechseljahre nach Lebensphase
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {ageAlters.map((alter) => (
                <Link
                  key={alter}
                  href={`/wechseljahre-mit/${alter}`}
                  className="group p-5 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all text-center"
                >
                  <p className="text-2xl font-headline font-bold text-primary mb-1">{alter}</p>
                  <p className="text-xs text-on-surface-variant font-body">
                    Wechseljahre mit {alter}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related questions */}
        {relatedFragen.length > 0 && (
          <section className="mb-16" aria-labelledby="fragen-heading">
            <h2 id="fragen-heading" className="text-xl font-headline font-bold mb-6">
              Weitere Fragen zu {condition.topicName}
            </h2>
            <div className="space-y-2">
              {relatedFragen.map((frage) => (
                <Link
                  key={frage.slug}
                  href={`/fragen/${frage.slug}`}
                  className="flex items-center gap-3 p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary font-extralight text-sm flex-shrink-0">
                    help
                  </span>
                  <span className="text-sm font-body text-on-surface group-hover:text-primary transition-colors">
                    {frage.question}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant font-extralight text-sm ml-auto flex-shrink-0">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/fragen"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-body hover:underline"
            >
              Alle Fragen ansehen
              <span className="material-symbols-outlined text-sm font-extralight">arrow_forward</span>
            </Link>
          </section>
        )}

        {/* CTA */}
        <div className="bg-primary-container rounded-3xl p-10 text-center">
          <h2 className="text-xl font-headline font-bold text-on-primary-container mb-3">
            {condition.ctaQuestion}
          </h2>
          <p className="text-on-primary-container/80 font-body text-sm mb-6">
            Mach unseren kostenlosen 2-Minuten-Symptom-Check für eine erste Einschätzung.
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
