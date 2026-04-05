import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";
import { faqSchema, breadcrumbSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";
import { InlineSignupForm } from "@/components/ui/InlineSignupForm";

const BASE_URL = "https://www.aerahealth.de";

interface Props {
  params: Promise<{ condition: string; symptom: string }>;
}

export async function generateStaticParams() {
  const paths: { condition: string; symptom: string }[] = [];
  for (const condition of Object.values(CONDITIONS_DATA)) {
    for (const symptomSlug of condition.symptoms) {
      if (SYMPTOMS_DATA[symptomSlug]) {
        paths.push({ condition: condition.slug, symptom: symptomSlug });
      }
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { condition: conditionSlug, symptom: symptomSlug } = await params;
  const condition = CONDITIONS_DATA[conditionSlug];
  const symptom = SYMPTOMS_DATA[symptomSlug];
  if (!condition || !symptom) return {};

  const title = `${symptom.name} bei ${condition.topicName}: Ursachen & Hilfe`;
  const description = `${symptom.name} bei ${condition.topicName}: ${symptom.metaDescription}`;
  const url = `/${conditionSlug}/${symptomSlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${url}`,
    },
  };
}

export default async function ConditionSymptomPage({ params }: Props) {
  const { condition: conditionSlug, symptom: symptomSlug } = await params;
  const condition = CONDITIONS_DATA[conditionSlug];
  const symptom = SYMPTOMS_DATA[symptomSlug];

  if (!condition || !symptom) notFound();

  const pageUrl = `${BASE_URL}/${conditionSlug}/${symptomSlug}`;
  const today = new Date().toISOString().split("T")[0];

  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: condition.name, url: `${BASE_URL}/${condition.slug}` },
    { name: symptom.name, url: pageUrl },
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
            name: `${symptom.name} bei ${condition.topicName}`,
            description: symptom.metaDescription,
            url: pageUrl,
            dateModified: today,
          })
        )}
      />
      {symptom.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(symptom.faqs))}
        />
      )}

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href={`/${condition.slug}`} className="hover:text-primary transition-colors">
            {condition.name}
          </Link>
          <span>/</span>
          <span className="text-on-surface">{symptom.name}</span>
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
            {condition.name}
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            {symptom.name} bei {condition.topicName}: Ursachen, Diagnose & Hilfe
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            {symptom.description} Im Zusammenhang mit {condition.topicName} ist {symptom.name.toLowerCase()} ein häufiges und belastendes Symptom – aber es gibt wirksame Hilfe.
          </p>
        </header>

        {/* Quick summary */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">Auf einen Blick</h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              {symptom.name} ist ein häufiges Symptom bei {condition.topicName}
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Hormonelle Veränderungen spielen eine zentrale Rolle
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Ärztliche Abklärung ist der erste wichtige Schritt
            </li>
          </ul>
        </div>

        {/* Causes */}
        <section className="mb-16" aria-labelledby="ursachen-heading">
          <h2 id="ursachen-heading" className="text-2xl font-headline font-bold mb-6">
            Ursachen für {symptom.name} bei {condition.topicName}
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed mb-6">
            {symptom.name} im Zusammenhang mit {condition.nameLong} kann verschiedene hormonelle und physiologische Ursachen haben:
          </p>
          <ul className="space-y-3">
            {symptom.causes.map((cause) => (
              <li key={cause} className="flex gap-3 text-on-surface-variant font-body">
                <span className="material-symbols-outlined text-primary text-lg font-extralight flex-shrink-0 mt-0.5">
                  arrow_forward
                </span>
                {cause}
              </li>
            ))}
          </ul>
        </section>

        {/* When to see doctor */}
        <section className="mb-16 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10" aria-labelledby="arzt-heading">
          <h2 id="arzt-heading" className="text-xl font-headline font-bold mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-extralight">medical_services</span>
            Wann zum Arzt?
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed">
            {symptom.whenToSeeDoctor}
          </p>
        </section>

        {/* Natural remedies */}
        {symptom.naturalRemedies.length > 0 && (
          <section className="mb-16" aria-labelledby="tipps-heading">
            <h2 id="tipps-heading" className="text-2xl font-headline font-bold mb-6">
              Das können Sie selbst tun
            </h2>
            <ul className="space-y-3">
              {symptom.naturalRemedies.map((remedy) => (
                <li key={remedy} className="flex gap-3 text-on-surface-variant font-body">
                  <span className="material-symbols-outlined text-primary text-lg font-extralight flex-shrink-0 mt-0.5">
                    spa
                  </span>
                  {remedy}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQs */}
        {symptom.faqs.length > 0 && (
          <section className="mb-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
              Häufige Fragen zu {symptom.name} bei {condition.topicName}
            </h2>
            <div className="space-y-6">
              {symptom.faqs.map((faq) => (
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

        {/* Inline signup */}
        <div className="mb-16">
          <InlineSignupForm
            source={`${conditionSlug}-${symptomSlug}`}
            subline={`Erhalte fundierte Infos zu ${condition.topicName} und hormoneller Gesundheit – direkt in dein Postfach.`}
          />
        </div>

        {/* Related conditions */}
        {symptom.relatedConditions.length > 0 && (
          <section className="mb-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-headline font-bold mb-6">
              Verwandte Themen
            </h2>
            <div className="flex flex-wrap gap-3">
              {symptom.relatedConditions
                .filter((slug) => slug !== conditionSlug && CONDITIONS_DATA[slug])
                .map((slug) => (
                  <Link
                    key={slug}
                    href={`/${slug}/${symptomSlug}`}
                    className="px-4 py-2 bg-surface-container rounded-full text-sm font-body hover:bg-surface-container-high transition-colors"
                  >
                    {symptom.name} bei {CONDITIONS_DATA[slug].name}
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
