import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/hashimoto/ursachen`;

export const metadata: Metadata = {
  title: "Hashimoto Ursachen: Warum greift das Immunsystem die Schilddrüse an?",
  description:
    "Die Ursachen von Hashimoto Thyreoiditis: Genetik, hormonelle Faktoren, Jod, Selen, Stress und Infektionen. Was die Forschung weiß – und was Sie selbst tun können.",
  alternates: { canonical: "/hashimoto/ursachen" },
  openGraph: {
    title: "Hashimoto Ursachen: Genetik, Hormone, Umwelt & Lebensstil",
    description:
      "Warum entwickeln manche Frauen Hashimoto? Genetische Veranlagung, Östrogen, Jodüberschuss, Infektionen und Stress – alle Ursachen erklärt.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Ist Hashimoto vererbbar?",
    answer:
      "Ja. Die genetische Komponente ist stark: Wenn ein Elternteil Hashimoto hat, liegt das Risiko für Kinder bei 20–30 %. Bestimmte HLA-Gene (v. a. HLA-DR3, HLA-DR5) erhöhen die Anfälligkeit erheblich. Vererbung allein reicht aber nicht – Umweltfaktoren müssen hinzukommen.",
  },
  {
    question: "Kann Stress Hashimoto auslösen?",
    answer:
      "Stress kann Hashimoto nicht direkt verursachen, aber er kann bei genetisch veranlagten Personen als Auslöser dienen. Chronisch erhöhtes Cortisol dysreguliert das Immunsystem und kann eine latente Autoimmunreaktion aktivieren. Viele Patientinnen berichten, dass ihre Symptome nach einer Stressphase (Burnout, Trennung, Geburt) erstmals auftraten.",
  },
  {
    question: "Warum sind Frauen viel häufiger von Hashimoto betroffen als Männer?",
    answer:
      "Östrogen hat eine immunstimulierende Wirkung und fördert Th2-dominante Immunantworten, die bei Autoimmunerkrankungen eine Rolle spielen. Progesteron wirkt teilweise gegenregulierend – weshalb Hashimoto oft nach der Geburt (wenn Progesteron abfällt) oder in der Perimenopause eskaliert. Auch X-chromosomale Gene spielen eine Rolle.",
  },
  {
    question: "Kann man Hashimoto durch Ernährungsumstellung verhindern?",
    answer:
      "Eine Verhinderung ist nicht gesichert, aber Risikoreduzierung ist möglich: ausreichend Selen (über Ernährung oder Supplementierung), keine Jod-Megadosen, entzündungsarme Ernährung und Stressmanagement können das Immunsystem stabilisieren. Bei positiver Familienanamnese lohnt sich eine frühe TSH-Kontrolle.",
  },
  {
    question: "Was löst einen Hashimoto-Schub aus?",
    answer:
      "Bekannte Schub-Trigger: Infektionen (besonders Epstein-Barr-Virus), akuter oder chronischer Stress, Jodüberschuss (jodhaltiges Kontrastmittel, Algenpräparate in hoher Dosis), Selenmangel, Schwangerschaft und Wochenbett sowie Schlafmangel. Ein Schub äußert sich als vorübergehende Verschlechterung aller Symptome.",
  },
];

export default function HashimotoUrsachenPage() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Hashimoto", url: `${BASE_URL}/hashimoto` },
    { name: "Ursachen", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "Hashimoto Ursachen: Warum greift das Immunsystem die Schilddrüse an?",
        description: "Ursachen von Hashimoto Thyreoiditis: Genetik, Hormone, Jod, Selen, Stress und Infektionen.",
        url: PAGE_URL,
        dateModified: today,
      }))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/hashimoto" className="hover:text-primary transition-colors">Hashimoto</Link>
          <span>/</span>
          <span className="text-on-surface">Ursachen</span>
        </nav>

        {/* Disclaimer */}
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
            Hashimoto
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Hashimoto Ursachen: Warum greift das Immunsystem die Schilddrüse an?
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            Hashimoto Thyreoiditis ist keine Erkrankung mit einer einzigen Ursache – sie entsteht aus dem Zusammenspiel von genetischer Veranlagung, hormonellen Faktoren und äußeren Auslösern.
          </p>
        </header>

        {/* Quick summary */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">Auf einen Blick</h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Genetische Veranlagung ist der wichtigste Einzelfaktor – aber allein nicht ausreichend</li>
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Frauen erkranken 7–10-mal häufiger als Männer – Östrogen spielt eine zentrale Rolle</li>
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Umweltfaktoren (Jodüberschuss, Selenm­angel, Infektionen) können als Auslöser wirken</li>
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Chronischer Stress aktiviert latente Autoimmunprozesse bei genetisch Veranlagten</li>
          </ul>
        </div>

        {/* Section 1: Genetik */}
        <section className="mb-16" aria-labelledby="genetik-heading">
          <h2 id="genetik-heading" className="text-2xl font-headline font-bold mb-6">Genetische Veranlagung: Die wichtigste Grundlage</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Hashimoto ist zu einem erheblichen Teil genetisch bedingt. Zwillingsstudien zeigen eine Konkordanzrate von ca. 30–60 % bei eineiigen Zwillingen – das bedeutet, wenn ein eineiiger Zwilling Hashimoto entwickelt, tut es das andere mit einer Wahrscheinlichkeit von einem Drittel bis zur Hälfte. Diese Zahl verdeutlicht: Die Gene legen die Bühne, aber Umweltfaktoren ziehen den Vorhang auf.</p>
            <p>Besonders relevant sind Varianten der HLA-Gene (Human Leukocyte Antigen), insbesondere HLA-DR3, HLA-DR4 und HLA-DR5. Diese Gene bestimmen, wie das Immunsystem körpereigene Strukturen erkennt und toleriert. Bestimmte Varianten führen dazu, dass Schilddrüsen-Proteine (TPO, Thyreoglobulin) als „fremd" eingestuft und angegriffen werden. Weitere Risikogene betreffen CTLA-4 (reguliert T-Zell-Aktivierung), PTPN22 (Signalweiterleitung in Immunzellen) und CD40 (B-Zell-Aktivierung).</p>
            <p>Praktische Konsequenz: Wenn Mutter, Schwester oder Tante Hashimoto, Morbus Basedow oder eine andere Autoimmunerkrankung (Typ-1-Diabetes, Lupus, Zöliakie) hat, lohnen sich regelmäßige TSH- und Anti-TPO-Kontrollen – auch ohne Symptome.</p>
          </div>
        </section>

        {/* Section 2: Hormonelle Faktoren */}
        <section className="mb-16" aria-labelledby="hormone-heading">
          <h2 id="hormone-heading" className="text-2xl font-headline font-bold mb-6">Hormonelle Faktoren: Warum Frauen 7–10-mal häufiger betroffen sind</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Der massive Geschlechterunterschied bei Hashimoto ist kein Zufall – Östrogen hat direkte Auswirkungen auf das Immunsystem. Östrogen fördert Th2-dominante Immunantworten und die Produktion von Autoantikörpern durch B-Zellen. Gleichzeitig hemmt es regulatorische T-Zellen (Tregs), die normalerweise Autoimmunreaktionen im Zaum halten. Dieses Ungleichgewicht macht das weibliche Immunsystem anfälliger für Autoimmunerkrankungen im Allgemeinen.</p>
            <p>Drei Lebensphasen zeigen erhöhte Hashimoto-Inzidenz: Pubertät (erste Östrogenwelle), Schwangerschaft/Postpartum (dramatische Hormonschwankungen) und Perimenopause (Östrogen- und Progesteroninstabilität). Die postpartale Thyreoiditis – eine Hashimoto-Variante nach der Geburt – betrifft 5–10 % aller Frauen und manifestiert sich oft als erstes Zeichen einer zugrunde liegenden genetischen Disposition.</p>
            <p>Progesteron wirkt teilweise gegenregulierend: Es fördert Th1-Immunantworten und dämpft die B-Zell-Aktivität. In der Lutealphase (wenn Progesteron hoch ist) berichten viele Hashimoto-Patientinnen von besserer Verträglichkeit. In Phasen mit relativem Progesteronmangel (Perimenopause, Lutealinsuffizienz) verschlechtern sich Symptome häufig.</p>
          </div>
        </section>

        {/* Section 3: Umweltfaktoren */}
        <section className="mb-16" aria-labelledby="umwelt-heading">
          <h2 id="umwelt-heading" className="text-2xl font-headline font-bold mb-6">Umweltfaktoren: Jod, Selen, Infektionen und mehr</h2>
          <div className="space-y-6">
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-bold text-on-surface mb-2">Jodüberschuss</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Jod ist für die Schilddrüsenhormonproduktion essenziell – aber in zu hoher Menge toxisch für die Schilddrüse. Hohe Joddosen oxidieren Thyreoglobulin zu einer stärker immunogenen Form und fördern so Autoantikörper-Bildung. In Japan, wo der Jodkonsum sehr hoch ist, sind Hashimoto-Raten erhöht. Besonders problematisch: hochdosierte Algen- und Seepflanzenpräparate sowie jodhaltiges Kontrastmittel.</p>
            </div>
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-bold text-on-surface mb-2">Selenmangel</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Selen ist in der Schilddrüse höher konzentriert als in jedem anderen Organ. Selenoproteine (GPx, Thioredoxinreduktase) schützen die Schilddrüse vor oxidativem Stress, der bei der Hormonproduktion entsteht. Selenmangel lässt diesen Schutz einbrechen, erhöht Entzündungsmarker und korreliert mit höheren Anti-TPO-Antikörpertitern. Supplementierung mit 200 µg Selen täglich senkt Anti-TPO nachweislich um 30–50 %.</p>
            </div>
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-bold text-on-surface mb-2">Virale Infektionen</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Das Epstein-Barr-Virus (EBV, Erreger des Pfeifferschen Drüsenfiebers) ist der am besten belegte infektiöse Auslöser. EBV kann Schilddrüsenzellen infizieren und durch molekulares Mimikry eine Immunreaktion auslösen, die sich auch gegen körpereigene Schilddrüsenproteine richtet. Auch Enteroviren, Hepatitis-C-Virus und SARS-CoV-2 wurden mit Hashimoto-Erstmanifestation in Verbindung gebracht.</p>
            </div>
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-bold text-on-surface mb-2">Vitamin-D-Mangel</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Vitamin D ist ein Immunmodulator mit direkter Wirkung auf regulatorische T-Zellen. Niedrige Vitamin-D-Spiegel korrelieren mit erhöhten Anti-TPO-Antikörpern und höherer Autoimmunaktivität. In Studien verbesserte Vitamin-D-Supplementierung die immunologischen Parameter bei Hashimoto-Patientinnen. Zielbereich: 40–60 ng/ml (100–150 nmol/l).</p>
            </div>
          </div>
        </section>

        {/* Section 4: Stress */}
        <section className="mb-16" aria-labelledby="stress-heading">
          <h2 id="stress-heading" className="text-2xl font-headline font-bold mb-6">Chronischer Stress als Auslöser</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Stress verursacht Hashimoto nicht direkt – aber er kann bei genetisch veranlagten Frauen als letzter Auslöser wirken. Der Mechanismus: Chronisch erhöhtes Cortisol unterdrückt zunächst das Immunsystem (akute Stressantwort), danach kommt es zu einer kompensatorischen Immunaktivierung (Rebound). Diese Aktivierungsphase kann latente Autoimmunprozesse in Gang setzen oder verstärken.</p>
            <p>In einer deutschen Studie berichteten über 70 % der Hashimoto-Patientinnen, dass ihre Symptome in einer Phase erhöhten psychosozialen Stresses erstmals auftraten. Kritische Lebensereignisse wie Trennung, Trauerfälle, Burnout oder intensive Arbeitsphasen werden besonders häufig genannt. Dies erklärt auch, warum Hashimoto oft nach der Geburt (maximale körperliche und psychische Belastung) erstdiagnostiziert wird.</p>
          </div>
        </section>

        {/* Section 5: Risikofaktoren-Übersicht */}
        <section className="mb-16" aria-labelledby="risiko-heading">
          <h2 id="risiko-heading" className="text-2xl font-headline font-bold mb-6">Risikofaktoren im Überblick</h2>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant/10">
            <table className="w-full text-sm font-body">
              <thead className="bg-surface-container">
                <tr>
                  {["Faktor", "Einfluss", "Beeinflussbar?"].map((h) => (
                    <th key={h} className="text-left p-4 font-semibold text-on-surface">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["HLA-Genotyp", "Sehr hoch", "Nein"],
                  ["Weibliches Geschlecht / Östrogen", "Sehr hoch", "Nein"],
                  ["Positive Familienanamnese", "Hoch", "Nein"],
                  ["Selenm­angel", "Moderat–hoch", "Ja – Supplementierung"],
                  ["Jodüberschuss", "Moderat", "Ja – Quellen meiden"],
                  ["Chronischer Stress", "Moderat", "Ja – Stressmanagement"],
                  ["EBV-Infektion", "Moderat", "Bedingt – Impfschutz allgemein"],
                  ["Vitamin-D-Mangel", "Moderat", "Ja – Supplementierung"],
                  ["Andere Autoimmunerkrankungen", "Hoch", "Nein"],
                  ["Schwangerschaft / Postpartum", "Moderat", "Bedingt – engmaschige Kontrollen"],
                ].map(([faktor, einfluss, beeinflussbar]) => (
                  <tr key={faktor} className="border-t border-outline-variant/10">
                    <td className="p-4 text-on-surface font-medium">{faktor}</td>
                    <td className="p-4 text-on-surface-variant">{einfluss}</td>
                    <td className="p-4 text-on-surface-variant">{beeinflussbar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">Häufige Fragen zu Hashimoto Ursachen</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                <h3 className="font-bold text-on-surface mb-2">{faq.question}</h3>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section aria-labelledby="verwandt-heading">
          <h2 id="verwandt-heading" className="text-xl font-headline font-bold mb-6">Verwandte Themen</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/hashimoto", label: "Hashimoto Ratgeber", desc: "Symptome, Diagnose und Behandlung im Überblick" },
              { href: "/hashimoto/ernaehrung", label: "Hashimoto & Ernährung", desc: "Was essen, was meiden – evidenzbasiert" },
              { href: "/fragen/hashimoto-schub-symptome", label: "Hashimoto-Schub erkennen", desc: "Symptome und was bei einem Schub hilft" },
              { href: "/fragen/kann-hashimoto-geheilt-werden", label: "Kann Hashimoto geheilt werden?", desc: "Was die Forschung sagt" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="block bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-colors">
                <p className="font-semibold text-on-surface text-sm mb-1">{label}</p>
                <p className="text-xs text-on-surface-variant">{desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
