import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/hashimoto/trockene-haut`;

export const metadata: Metadata = {
  title: "Trockene Haut bei Hashimoto: Ursachen & was wirklich hilft",
  description:
    "Trockene Haut durch Hashimoto: Warum die Schilddrüse Ellenbogen, Schienbeine & Fersen austrocknet – und welche Maßnahmen wirklich helfen.",
  alternates: { canonical: "/hashimoto/trockene-haut" },
  openGraph: {
    title: "Trockene Haut bei Hashimoto: Ursachen & was hilft",
    description:
      "Rissige Ellenbogen, schuppige Schienbeine und raue Fersen: So verursacht Hashimoto Hauttrockenheit – und das können Sie dagegen tun.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Warum sind Ellenbogen bei Schilddrüsenproblemen so trocken?",
    answer:
      "Die Ellenbogen sind besonders betroffen, weil die Haut dort von Natur aus dünner ist und weniger Talgdrüsen hat als anderswo. Bei einer Schilddrüsenunterfunktion (Hashimoto-Hypothyreose) wird die Talgdrüsenaktivität durch T3-Mangel zusätzlich gedrosselt. Die Hauterneuerungsrate verlangsamt sich, alte Hautzellen häufen sich an – die Ellenbogen werden rau, verdickt und oft leicht schuppig. Mit korrekter Schilddrüseneinstellung bessert sich dieser Befund deutlich.",
  },
  {
    question: "Kann Hashimoto trockene Haut verursachen?",
    answer:
      "Ja. Schilddrüsenhormone (besonders fT3) regulieren direkt die Talgdrüsenaktivität, die Keratinisierungsrate der Haut und die Durchblutung peripherer Gefäße. Bei Hashimoto-bedingter Hypothyreose sinkt die Talgproduktion, die Hauterneuerung verlangsamt sich und Muzin kann sich in der Haut einlagern (Myxödem). Klassische Zeichen: raue Haut an Ellenbogen und Unterschenkeln, Juckreiz ohne Ausschlag, kühle und blasse Haut.",
  },
  {
    question: "Hilft Feuchtigkeitscreme bei Hashimoto-bedingter Hauttrockenheit?",
    answer:
      "Feuchtigkeitscremes lindern die Symptome, behandeln aber nicht die Ursache. Die wirksamsten topischen Mittel bei sehr trockener Haut sind Urea-haltige Cremes (10–25 %): Urea bindet Wasser in der Haut und hat keratolytische (hautglättende) Wirkung. Omega-3-Fettsäuren (2 g EPA/DHA täglich) verbessern die Hautbarriere von innen. Entscheidend ist aber, die Schilddrüse korrekt einzustellen – dann bessert sich die Hauttrockenheit oft von selbst.",
  },
  {
    question: "Wann sollte ich wegen trockener Haut zur Ärztin?",
    answer:
      "Wenn Hauttrockenheit zusammen mit anderen Hypothyreose-Symptomen auftritt: anhaltende Müdigkeit, Frieren, Gewichtszunahme, Haarausfall, Verstopfung oder Konzentrationsprobleme. Dann unbedingt TSH, fT3, fT4 und Anti-TPO-Antikörper bestimmen lassen. Auch bei Juckreiz ohne sichtbare Veränderungen (Pruritus sine materia) ist eine Schilddrüsenkontrolle sinnvoll.",
  },
  {
    question: "Verbessert sich die Haut mit L-Thyroxin-Therapie?",
    answer:
      "Ja – bei Hashimoto mit Hypothyreose bessert sich die Hauttrockenheit in der Regel 6–12 Wochen nach Beginn einer korrekt dosierten L-Thyroxin-Therapie deutlich. Wenn der fT3-Wert im optimalen Bereich liegt (obere Hälfte des Referenzbereichs), normalisiert sich der Hautstoffwechsel. Manche Frauen brauchen auch fT3-Zusatzbehandlung (Kombination T4+T3), wenn die Konversion von T4 zu T3 gestört ist.",
  },
];

const locations = [
  {
    stelle: "Ellenbogen",
    beschreibung: "Klassisch bei Hypothyreose: rau, verdickt, leicht schuppig. Talgdrüsenarme Zone mit dünner Haut.",
    icon: "back_hand",
  },
  {
    stelle: "Unterschenkel & Schienbeine",
    beschreibung: "Schuppige, manchmal juckende Haut. Muzineinlagerungen (Myxödem) können Schwellungen verursachen.",
    icon: "accessibility_new",
  },
  {
    stelle: "Fersen",
    beschreibung: "Rissige, verhornte Fersen. Verstärkt durch schlechte Durchblutung bei Hypothyreose.",
    icon: "directions_walk",
  },
  {
    stelle: "Gesicht",
    beschreibung: "Besonders um Augen und Mund: trockene, gespannte Haut. Augenbrauenverlust (laterales Drittel) ist ein klassisches Hashimoto-Zeichen.",
    icon: "face",
  },
  {
    stelle: "Hände und Finger",
    beschreibung: "Rissige Knöchel, spröde Nagelränder. Kühle und blasse Hände durch periphere Durchblutungsstörung.",
    icon: "front_hand",
  },
  {
    stelle: "Kopfhaut",
    beschreibung: "Juckende, schuppige Kopfhaut. Kann mit Haarausfall kombiniert auftreten (diffuses Telogen-Effluvium).",
    icon: "sentiment_satisfied",
  },
];

export default function HashimotoTrockeneHautPage() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Hashimoto", url: `${BASE_URL}/hashimoto` },
    { name: "Trockene Haut", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "Trockene Haut bei Hashimoto: Ursachen & was wirklich hilft",
        description: "Trockene Haut durch Hashimoto: Warum die Schilddrüse Ellenbogen, Schienbeine & Fersen austrocknet – und welche Maßnahmen wirklich helfen.",
        url: PAGE_URL,
        dateModified: today,
      }))} />

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/hashimoto" className="hover:text-primary transition-colors">Hashimoto</Link>
          <span>/</span>
          <span className="text-on-surface">Trockene Haut</span>
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
            Trockene Haut bei Hashimoto: Ursachen & was wirklich hilft
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed">
            Rissige Ellenbogen, schuppige Schienbeine, spröde Fersen — diese Hautsymptome werden häufig
            unterschätzt, sind aber typische Zeichen einer Hashimoto-bedingten Schilddrüsenunterfunktion.
            Hier erfahren Sie warum, und was nachgewiesenermaßen hilft.
          </p>
        </header>

        {/* Quick summary */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">Auf einen Blick</h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Schilddrüsenhormone (fT3) steuern direkt die Talgdrüsen und Hauterneuerungsrate
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Ellenbogen, Schienbeine und Fersen sind besonders betroffen (talgdrüsenarm)
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Korrekte Schilddrüseneinstellung bessert Hauttrockenheit in 6–12 Wochen deutlich
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Urea-Cremes (10–25 %) + Omega-3 helfen topisch; TSH + fT3 + fT4 abklären
            </li>
          </ul>
        </div>

        {/* Mechanism */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6">
            Wie Hashimoto die Haut austrocknet
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed mb-4">
            Die Haut ist ein hormonabhängiges Organ mit direkten Rezeptoren für Schilddrüsenhormone.
            Fällt fT3 — das aktiv wirksame Schilddrüsenhormon — durch eine Hashimoto-bedingte
            Hypothyreose ab, hat das unmittelbare Auswirkungen auf die Haut:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Talgdrüsenaktivität sinkt → Haut produziert weniger schützende Lipide",
              "Keratinisierungsrate verlangsamt sich → abgestorbene Hautzellen häufen sich an",
              "Durchblutung peripherer Gefäße nimmt ab → Haut wirkt blass, kühl und rau",
              "Muzineinlagerungen (Myxödem) können entstehen → Haut fühlt sich teigig an",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-on-surface-variant font-body text-sm">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">arrow_right</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            Dieser Mechanismus erklärt, warum Hauttrockenheit bei Hashimoto anders aussieht als z. B.
            bei Ekzemen oder atopischer Dermatitis: Es ist eine systemische Veränderung, die die
            gesamte Körperoberfläche betrifft — mit Betonung bestimmter Stellen.
          </p>
        </section>

        {/* Body locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">
            Typische Hautstellen bei Schilddrüsenunterfunktion
          </h2>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
            Bei Hashimoto und Hypothyreose zeigt sich trockene Haut nicht gleichmäßig — bestimmte
            Körperstellen sind stärker betroffen als andere:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((loc) => (
              <div key={loc.stelle} className="bg-surface-container-low rounded-2xl p-5 flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl shrink-0">{loc.icon}</span>
                <div>
                  <h3 className="font-headline font-bold text-on-surface mb-1">{loc.stelle}</h3>
                  <p className="text-sm text-on-surface-variant font-body">{loc.beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-surface-container-low rounded-xl p-5 text-sm text-on-surface-variant font-body">
            <strong className="text-on-surface">Hinweis:</strong> Wenn Sie raue, verdickte Ellenbogen
            zusammen mit Müdigkeit, Frieren oder Haarausfall bemerken, lassen Sie TSH, fT3, fT4
            und Anti-TPO-Antikörper bestimmen. Diese Kombination ist ein klassisches Hashimoto-Bild.
          </div>
        </section>

        {/* Diagnosis */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6">
            Diagnose: Welche Tests sind wichtig?
          </h2>
          <div className="space-y-3">
            {[
              { test: "TSH", relevanz: "Screeningwert; bei TSH > 2,5 mU/L mit Symptomen weiter abklären" },
              { test: "fT3 + fT4", relevanz: "Zeigen tatsächliche Hormonversorgung; fT3 ist das hautsteuernde aktive Hormon" },
              { test: "Anti-TPO-Antikörper", relevanz: "Beweisend für Hashimoto; häufig erhöht schon bevor TSH auffällig wird" },
              { test: "Vitamin D (25-OH)", relevanz: "Vitamin D ist essenziell für Hautbarrierefunktion; Mangel sehr häufig bei Hashimoto" },
              { test: "Omega-3-Index (optional)", relevanz: "EPA/DHA-Mangel verschlechtert die Hautlipidbarriere messbar" },
            ].map((row) => (
              <div key={row.test} className="bg-surface-container-low rounded-xl p-4 flex gap-4">
                <span className="text-sm font-bold text-primary shrink-0 w-32">{row.test}</span>
                <span className="text-sm text-on-surface-variant font-body">{row.relevanz}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What helps */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6">
            Was wirklich hilft: Ursache behandeln + topische Pflege
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h3 className="text-lg font-headline font-bold text-primary mb-4">Ursache behandeln</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant font-body">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  L-Thyroxin korrekt dosieren: Ziel fT3 in oberer Hälfte des Normalbereichs
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Selen (200 µg täglich): senkt Anti-TPO und unterstützt T4→T3-Konversion
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Vitamin D auf 40–60 ng/ml optimieren (oft 2000–4000 IE täglich nötig)
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Omega-3 (2 g EPA/DHA täglich): verbessert Hautbarriere von innen
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h3 className="text-lg font-headline font-bold text-primary mb-4">Topische Pflege</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant font-body">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Urea-Creme 10–25 % für Ellenbogen, Fersen, Schienbeine — bindet Wasser + löst Hornschicht
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Direkt nach dem Duschen (Haut noch leicht feucht) eincremen
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Lauwarmes statt heißes Wasser (erhält natürliche Hautlipide)
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">check</span>
                  Milde pH-neutrale Duschprodukte ohne Sulfate
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-8">
            Häufige Fragen: Trockene Haut & Hashimoto
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-surface-container-low rounded-2xl p-6 group">
                <summary className="font-headline font-semibold text-on-surface cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.question}
                  <span className="material-symbols-outlined text-primary shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-16">
          <h2 className="text-2xl font-headline font-bold text-primary mb-6">Weiterführende Themen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/hashimoto", label: "Hashimoto: Alle Symptome & Behandlung", icon: "emergency" },
              { href: "/hashimoto/ursachen", label: "Hashimoto Ursachen", icon: "science" },
              { href: "/hashimoto/ernaehrung", label: "Hashimoto Ernährung", icon: "nutrition" },
              { href: "/schilddruese/werte", label: "Schilddrüsenwerte verstehen", icon: "table_chart" },
              { href: "/fragen/tsh-wert-tabelle", label: "TSH-Wert Tabelle nach Alter", icon: "monitoring" },
              { href: "/hashimoto/haarausfall", label: "Haarausfall bei Hashimoto", icon: "person" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 bg-surface-container-low rounded-xl p-4 hover:bg-primary-container/30 transition-colors group"
              >
                <span className="material-symbols-outlined text-primary">{link.icon}</span>
                <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant ml-auto text-base">arrow_forward</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-headline font-bold text-on-primary mb-4">
            Leidest du unter Hashimoto-Symptomen?
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
            Mach unseren Symptom-Check und erhalte eine erste Einschätzung,
            welche Blutwerte bei dir untersucht werden sollten.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 bg-on-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container transition-colors"
          >
            Symptom-Check starten
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>
      </article>
    </>
  );
}
