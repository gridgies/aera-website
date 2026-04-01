import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CONDITIONS_DATA } from "@/data/conditions";
import { SYMPTOMS_DATA } from "@/data/symptoms";
import { breadcrumbSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://aerahealth.de";

interface Props {
  params: { condition: string };
}

export async function generateStaticParams() {
  return Object.keys(CONDITIONS_DATA).map((slug) => ({ condition: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const condition = CONDITIONS_DATA[params.condition];
  if (!condition) return {};

  return {
    title: `${condition.name}: Symptome, Ursachen & Behandlung`,
    description: condition.metaDescription,
    alternates: { canonical: `/${params.condition}` },
    openGraph: {
      title: `${condition.name}: Symptome, Ursachen & Behandlung`,
      description: condition.metaDescription,
      url: `${BASE_URL}/${params.condition}`,
    },
  };
}

export default function ConditionPage({ params }: Props) {
  const condition = CONDITIONS_DATA[params.condition];
  if (!condition) notFound();

  const pageUrl = `${BASE_URL}/${params.condition}`;
  const today = new Date().toISOString().split("T")[0];
  const symptomsWithData = condition.symptoms.filter((s) => SYMPTOMS_DATA[s]);

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
            name: `${condition.name}: Symptome, Ursachen & Behandlung`,
            description: condition.metaDescription,
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

        {/* Symptoms grid */}
        {symptomsWithData.length > 0 && (
          <section className="mb-16" aria-labelledby="symptome-heading">
            <h2 id="symptome-heading" className="text-2xl font-headline font-bold mb-8">
              Symptome bei {condition.name}
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              {condition.name} kann sich durch viele verschiedene Symptome äußern. Klicke auf ein Symptom, um mehr zu erfahren:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {symptomsWithData.map((slug) => {
                const symptom = SYMPTOMS_DATA[slug];
                return (
                  <Link
                    key={slug}
                    href={`/${params.condition}/${slug}`}
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

        {/* CTA */}
        <div className="bg-primary-container rounded-3xl p-10 text-center">
          <h2 className="text-xl font-headline font-bold text-on-primary-container mb-3">
            Leidet du unter {condition.name}-Symptomen?
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
