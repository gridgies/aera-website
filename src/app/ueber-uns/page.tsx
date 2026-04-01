import type { Metadata } from "next";
import Link from "next/link";
import { medicalWebPageSchema, organizationSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Über uns – Aera Health",
  description:
    "Aera Health hilft Frauen, ihre hormonelle Gesundheit zu verstehen. Erfahre mehr über unsere Mission, unser Team und unsere wissenschaftliche Methodik.",
  alternates: {
    canonical: "/ueber-uns",
  },
  openGraph: {
    title: "Über uns – Aera Health",
    description:
      "Erfahre, wer hinter Aera Health steht und warum wir Frauengesundheit anders denken.",
    url: "https://aerahealth.de/ueber-uns",
  },
};

const TRUST_PRINCIPLES = [
  {
    icon: "science",
    title: "Wissenschaftlich fundiert",
    description:
      "Alle Inhalte basieren auf aktuellen medizinischen Leitlinien, Studien und evidenzbasierter Medizin. Wir zitieren Quellen transparent.",
  },
  {
    icon: "verified",
    title: "Medizinisch geprüft",
    description:
      "Unsere Inhalte werden mit medizinischem Fachpersonal entwickelt und regelmäßig auf Aktualität überprüft.",
  },
  {
    icon: "privacy_tip",
    title: "Datenschutz first",
    description:
      "Deine Gesundheitsdaten gehören dir. DSGVO-konform, kein Verkauf von Daten, volle Transparenz.",
  },
  {
    icon: "favorite",
    title: "Empathisch begleitet",
    description:
      "Wir wissen, wie frustrierend es ist, mit Symptomen allein gelassen zu werden. Aera ist dein informierter Begleiter.",
  },
];

export default function UeberUnsPage() {
  const pageUrl = "https://aerahealth.de/ueber-uns";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          medicalWebPageSchema({
            name: "Über uns – Aera Health",
            description:
              "Erfahre mehr über die Mission, das Team und die wissenschaftliche Methodik von Aera Health.",
            url: pageUrl,
            dateModified: "2025-01-01",
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(organizationSchema())}
      />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">
            Startseite
          </Link>
          <span>/</span>
          <span className="text-on-surface">Über uns</span>
        </nav>

        {/* Hero */}
        <header className="mb-24">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            Unsere Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-[1.1] mb-8">
            Frauengesundheit verstehen – endlich.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed font-body italic max-w-2xl">
            Millionen Frauen kämpfen mit Symptomen wie Erschöpfung, Gewichtszunahme oder
            Stimmungsschwankungen – und werden nicht ernst genommen. Aera ändert das.
          </p>
        </header>

        {/* Mission */}
        <section className="mb-24" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-3xl font-headline font-bold mb-8">
            Warum Aera?
          </h2>
          <div className="prose prose-lg max-w-none text-on-surface-variant font-body leading-relaxed space-y-6">
            <p>
              Frauengesundheit – insbesondere hormonelle Gesundheit – ist medizinisch komplex
              und wird in der traditionellen Versorgung oft untertherapiert. Wechseljahre,
              Hashimoto, Schilddrüsenprobleme und hormonelle Dysbalancen betreffen Millionen
              Frauen in Deutschland. Viele verbringen Jahre damit, Antworten zu suchen.
            </p>
            <p>
              Aera entstand aus der Überzeugung: Jede Frau verdient Zugang zu
              verständlichen, wissenschaftlich fundierten Informationen über ihren eigenen
              Körper. Wir sind keine Arztpraxis und kein Ersatz für medizinische Beratung –
              aber wir sind dein informierter Begleiter auf dem Weg zur Klarheit.
            </p>
            <p>
              Unsere Plattform verbindet evidenzbasiertes Wissen mit personalisierten
              Werkzeugen, damit du besser vorbereitet in Arztgespräche gehst, deine
              Symptome einordnen kannst und weißt, welche nächsten Schritte sinnvoll sind.
            </p>
          </div>
        </section>

        {/* Medical disclaimer */}
        <aside className="bg-surface-container-low rounded-2xl p-8 mb-24 border border-outline-variant/10">
          <div className="flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary text-2xl font-extralight flex-shrink-0 mt-1">
              info
            </span>
            <div>
              <p className="font-bold text-sm mb-2">Medizinischer Hinweis</p>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Alle Inhalte auf aerahealth.de dienen ausschließlich zu Informationszwecken
                und ersetzen keine ärztliche Beratung, Diagnose oder Behandlung. Bei
                gesundheitlichen Beschwerden wende dich bitte an eine Ärztin oder einen
                Arzt deines Vertrauens.
              </p>
            </div>
          </div>
        </aside>

        {/* Trust Principles */}
        <section className="mb-24" aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="text-3xl font-headline font-bold mb-12">
            Unsere Prinzipien
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TRUST_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-primary text-3xl font-extralight mb-4 block">
                  {principle.icon}
                </span>
                <h3 className="text-lg font-bold mb-3">{principle.title}</h3>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Standards */}
        <section className="mb-24" aria-labelledby="standards-heading">
          <h2 id="standards-heading" className="text-3xl font-headline font-bold mb-8">
            Wie wir Inhalte erstellen
          </h2>
          <div className="text-on-surface-variant font-body leading-relaxed space-y-6">
            <p>
              Jeder Inhalt auf Aera durchläuft einen strukturierten Erstellungsprozess:
            </p>
            <ol className="list-decimal list-inside space-y-4 pl-2">
              <li>
                <strong className="text-on-surface">Recherche:</strong> Wir stützen uns auf
                PubMed-Studien, AWMF-Leitlinien, Empfehlungen der Deutschen Gesellschaft für
                Endokrinologie sowie des Robert Koch Instituts.
              </li>
              <li>
                <strong className="text-on-surface">Erstellung:</strong> Inhalte werden
                verständlich formuliert, ohne medizinische Genauigkeit zu opfern.
              </li>
              <li>
                <strong className="text-on-surface">Überprüfung:</strong> Inhalte werden mit
                medizinisch geschultem Personal abgeglichen und auf Fehler überprüft.
              </li>
              <li>
                <strong className="text-on-surface">Aktualisierung:</strong> Wir aktualisieren
                Inhalte regelmäßig, wenn neue Erkenntnisse vorliegen.
              </li>
            </ol>
            <p>
              Mehr dazu in unserer{" "}
              <Link href="/wissenschaft" className="text-primary hover:underline">
                wissenschaftlichen Methodik
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24" aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-3xl font-headline font-bold mb-8">
            Hinter Aera
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed mb-8">
            Aera wurde von Maria Strunden und Graciella Dharmawan in Frankfurt am Main
            gegründet – aus persönlicher Erfahrung mit dem Mangel an zugänglichen,
            vertrauenswürdigen Informationen zur Frauengesundheit.
          </p>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Unser kleines Team vereint Expertise in Gesundheit, Technologie und
            nutzerzentriertem Design. Wir sind überzeugt: bessere Informationen führen zu
            besseren Gesundheitsentscheidungen.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-primary-container rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-headline font-bold text-on-primary-container mb-4">
            Lerne deinen Körper besser kennen
          </h2>
          <p className="text-on-primary-container/80 font-body mb-8">
            Starte mit unserem 2-Minuten-Check und erhalte eine erste Einschätzung.
          </p>
          <Link
            href="/check"
            className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Zum Symptom-Check
          </Link>
        </section>
      </div>
    </>
  );
}
