import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/themen/glp1-pcos-wechseljahre`;

export const metadata: Metadata = {
  title: "GLP-1 bei PCOS und Wechseljahren: Was die Forschung 2026 sagt",
  description:
    "Ozempic, Semaglutid & Co. bei PCOS und Wechseljahren: Wie GLP-1-Agonisten mit weiblichen Hormonen interagieren, was die Forschung zeigt – und wichtige Einschränkungen.",
  alternates: { canonical: "/themen/glp1-pcos-wechseljahre" },
  openGraph: {
    title: "GLP-1 bei PCOS und Wechseljahren: Ozempic & Hormone 2026",
    description:
      "Wie Semaglutid (Ozempic/Wegovy) die Insulinsensitivität bei PCOS verbessert, was in den Wechseljahren bekannt ist – und für wen GLP-1 nicht geeignet ist.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Hilft Ozempic bei PCOS?",
    answer:
      "Ja – mit Einschränkungen. GLP-1-Agonisten wie Semaglutid (Ozempic, Wegovy) verbessern nachweislich die Insulinsensitivität, was bei PCOS-Patientinnen mit Insulin-Resistenz der wichtigste Treiber der Hormonentgleisung ist. Reduziertes Insulin senkt die Androgenproduktion in den Eierstöcken, was Akne, übermäßige Behaarung und Zyklusstörungen verbessern kann. GLP-1 ist jedoch in Deutschland für PCOS nicht spezifisch zugelassen – eine Off-Label-Verschreibung ist möglich, erfordert aber individuelle ärztliche Abwägung.",
  },
  {
    question: "Kann ich GLP-1 in den Wechseljahren nehmen?",
    answer:
      "GLP-1-Agonisten sind für Typ-2-Diabetes (Ozempic) und Adipositas (Wegovy) zugelassen, nicht spezifisch für Wechseljahre. In der Perimenopause und Postmenopause können sie bei gleichzeitig bestehender Insulin-Resistenz, metabolischem Syndrom oder Adipositas sinnvoll sein. Erste Studien (2025/2026) deuten auf positive Effekte auf kardiometabolische Risikofaktoren bei menopausalen Frauen hin. Eine Off-Label-Anwendung ist nur in Absprache mit einer erfahrenen Ärztin vertretbar.",
  },
  {
    question: "Beeinflusst Semaglutid Östrogen oder Progesteron direkt?",
    answer:
      "Es gibt keinen direkten Beweis, dass GLP-1-Agonisten Östrogen- oder Progesteron-Spiegel direkt verändern. Der Effekt ist indirekt: Durch verbesserte Insulinsensitivität sinkt der Insulinspiegel, was die Androgenproduktion in den Eierstöcken reduziert und über die Aromatase die Östrogenbalance günstig beeinflussen kann. Adipositas-Reduktion (ein Effekt von GLP-1) senkt peripher produziertes Östrogen im Fettgewebe. GLP-1-Rezeptoren existieren auch im Hypothalamus und können dort das Hormonregelzentrum beeinflussen – die Forschung dazu ist noch früh.",
  },
  {
    question: "Welche GLP-1-Medikamente sind in Deutschland zugelassen?",
    answer:
      "In Deutschland zugelassen (Stand 2026): Semaglutid (Ozempic, wöchentlich subkutan, für Typ-2-Diabetes; Wegovy, für Adipositas ab BMI ≥ 30 oder ≥ 27 mit Begleiterkrankung), Liraglutid (Victoza für Diabetes; Saxenda für Adipositas), Dulaglutid (Trulicity, für Diabetes). Tirzepatid (Mounjaro) ist ein dualer GIP/GLP-1-Agonist und ebenfalls für Typ-2-Diabetes zugelassen. Alle Präparate sind verschreibungspflichtig; die Kostenübernahme durch die GKV ist für Adipositas-Indikationen sehr begrenzt.",
  },
  {
    question: "Kann ich GLP-1 und Hormonersatztherapie gleichzeitig nehmen?",
    answer:
      "Es gibt keine bekannten klinisch relevanten Wechselwirkungen zwischen GLP-1-Agonisten und HRT (Östradiol, Progesteron). Beide können grundsätzlich kombiniert werden, wenn jeweils eine medizinische Indikation besteht. Da GLP-1 die Magenentleerung verlangsamt, kann die orale Einnahme von Hormontabletten geringfügig beeinflusst werden – transdermale HRT (Pflaster, Gel) umgeht diesen Effekt vollständig. Spreche beide Therapien offen mit deiner Ärztin ab.",
  },
  {
    question: "Wer sollte GLP-1-Medikamente NICHT nehmen?",
    answer:
      "Kontraindikationen für GLP-1-Agonisten: Medulläres Schilddrüsenkarzinom in der Vorgeschichte oder familiären Belastung (schwarze Box-Warnung), Multiple Endokrine Neoplasie Typ 2 (MEN 2), schwere Niereninsuffizienz (je nach Präparat), Pankreatitis in der Vorgeschichte (relative Kontraindikation), Schwangerschaft und Stillzeit. Wichtig: GLP-1 kann bei Frauen mit PCOS die Fruchtbarkeit verbessern – zuverlässige Kontrazeption während der Einnahme ist essenziell für Frauen ohne Kinderwunsch.",
  },
  {
    question: "Was sind die häufigsten Nebenwirkungen von GLP-1 bei Frauen?",
    answer:
      "Die häufigsten Nebenwirkungen betreffen den Magen-Darm-Trakt: Übelkeit (besonders zu Beginn, bei 20–44 % der Nutzerinnen), Erbrechen, Durchfall, Verstopfung, Aufstoßen. Diese nehmen meist nach 4–8 Wochen ab und können durch langsame Dosissteigerung reduziert werden. Weitere Nebenwirkungen: Injektion-Site-Reaktionen, Kopfschmerzen, Müdigkeit. Selten: Pankreatitis, Gallensteinprobleme (bei schnellem Gewichtsverlust). Bei anhaltenden starken Beschwerden Ärztin informieren.",
  },
];

export default function Glp1PcosWechseljahre() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Themen", url: `${BASE_URL}/themen` },
    { name: "GLP-1 bei PCOS und Wechseljahren", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "GLP-1 bei PCOS und Wechseljahren: Was die Forschung 2026 sagt",
        description: "Ozempic, Semaglutid und GLP-1-Agonisten bei PCOS und Perimenopause: Mechanismus, Studienlage, Risiken und wer profitieren könnte.",
        url: PAGE_URL,
        datePublished: "2026-04-24",
        dateModified: today,
      }))} />

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/themen" className="hover:text-primary transition-colors">Themen</Link>
          <span>/</span>
          <span className="text-on-surface">GLP-1 bei PCOS und Wechseljahren</span>
        </nav>

        <aside className="bg-surface-container-low rounded-xl p-4 mb-10 border border-outline-variant/10 text-xs text-on-surface-variant font-body flex gap-3 items-start">
          <span className="material-symbols-outlined text-base font-extralight flex-shrink-0 mt-0.5">info</span>
          <span>
            Dieser Artikel dient nur zu Informationszwecken und ersetzt keine ärztliche Beratung.
            GLP-1-Agonisten sind verschreibungspflichtig und erfordern ärztliche Begleitung.
            Medizinisch geprüft von der Aera Health Redaktion · {today}.
          </span>
        </aside>

        <header className="mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            GLP-1 · Metabolismus · Frauengesundheit
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            GLP-1 bei PCOS und Wechseljahren: Was die Forschung 2026 wirklich sagt
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            Ozempic und Wegovy sind aus Gewichtsdebatten kaum wegzudenken. Doch was weiß die Forschung über GLP-1-Agonisten bei hormonellen Störungen wie PCOS und Perimenopause – und für wen kommen sie überhaupt infrage?
          </p>
        </header>

        {/* Important safety notice */}
        <div className="bg-error/5 border border-error/20 rounded-2xl p-6 mb-16">
          <div className="flex gap-3 items-start">
            <span className="material-symbols-outlined text-error flex-shrink-0">health_and_safety</span>
            <div>
              <p className="font-bold text-error text-sm mb-1">Wichtiger Hinweis</p>
              <p className="text-on-surface text-sm font-body leading-relaxed">
                GLP-1-Agonisten sind in Deutschland ausschließlich für Typ-2-Diabetes (Ozempic) und Adipositas (Wegovy) zugelassen, nicht für PCOS oder Wechseljahresbeschwerden. Jede Anwendung außerhalb dieser Indikationen ist Off-Label und erfordert sorgfältige ärztliche Abwägung. Dieser Artikel informiert über die aktuelle Studienlage – er ist keine Empfehlung zur Selbstmedikation.
              </p>
            </div>
          </div>
        </div>

        {/* Quick summary */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">Das Wichtigste auf einen Blick</h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              GLP-1-Agonisten verbessern bei PCOS die Insulin-Resistenz, was indirekt Androgene senkt und den Zyklus regulieren kann
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              In der Perimenopause zeigen erste Studien positive Effekte auf kardiometabolische Risikofaktoren
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              GLP-1 ist verschreibungspflichtig und keine Selbstmedikation – Off-Label-Anwendung nur mit Ärztin
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              GLP-1 kann die Fruchtbarkeit bei PCOS verbessern – sichere Verhütung essenziell
            </li>
          </ul>
        </div>

        {/* Section 1: Was sind GLP-1-Agonisten */}
        <section className="mb-16" aria-labelledby="glp1-was-heading">
          <h2 id="glp1-was-heading" className="text-2xl font-headline font-bold mb-6">
            Was sind GLP-1-Agonisten? Ein kurzer Überblick
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              GLP-1 (Glucagon-like Peptide-1) ist ein körpereigenes Darmhormon, das nach dem Essen ausgeschüttet wird. Es stimuliert die Insulinsekretion, hemmt Glucagon (das Blutzucker erhöht), verlangsamt die Magenentleerung und signalisiert dem Gehirn Sättigung. Bei Typ-2-Diabetes und Adipositas ist dieser Mechanismus gestört.
            </p>
            <p>
              GLP-1-Agonisten imitieren dieses Hormon und verlängern seine Wirkung dramatisch: Semaglutid (Wirkstoff in Ozempic und Wegovy) wirkt beispielsweise eine ganze Woche nach einer einzigen Injektion. Das erklärt sowohl die starke Blutzuckersenkung als auch die Gewichtsabnahme (durchschnittlich 10–15 % des Körpergewichts in Studien).
            </p>
            <p>
              GLP-1-Rezeptoren sind nicht nur im Pankreas zu finden – sie sitzen auch im Hypothalamus (Hormonregelzentrum), im Darm, im Herzen und in Eierstöcken. Das erklärt das wachsende Interesse an GLP-1 bei hormonellen Frauenerkrankungen.
            </p>
          </div>
        </section>

        {/* Section 2: GLP-1 bei PCOS */}
        <section className="mb-16" aria-labelledby="glp1-pcos-heading">
          <h2 id="glp1-pcos-heading" className="text-2xl font-headline font-bold mb-6">
            GLP-1 bei PCOS: Der Insulin-Hormon-Kreislauf
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Bei bis zu 70 % der Frauen mit <Link href="/pcos" className="text-primary hover:underline">PCOS</Link> liegt eine Insulin-Resistenz vor – unabhängig vom Körpergewicht. Erhöhtes Insulin stimuliert die Eierstöcke zur Überproduktion von Androgenen (Testosteron, DHEA-S), was typische PCOS-Symptome auslöst:
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 text-primary mt-0.5">arrow_right</span>
                Akne und fettige Haut durch erhöhtes Testosteron
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 text-primary mt-0.5">arrow_right</span>
                Übermäßige Körperbehaarung (Hirsutismus)
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 text-primary mt-0.5">arrow_right</span>
                Ausbleibende oder unregelmäßige Menstruation (Anovulation)
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 text-primary mt-0.5">arrow_right</span>
                Schwierigkeiten, schwanger zu werden
              </li>
            </ul>
          </div>

          <div className="bg-surface-container rounded-2xl p-6 my-8 border border-outline-variant/10">
            <h3 className="font-bold text-on-surface mb-4">Wie GLP-1 in diesen Kreislauf eingreift</h3>
            <div className="flex flex-col gap-3">
              {[
                { pfeil: "1.", text: "GLP-1 verbessert die Insulinsensitivität → Insulinspiegel sinkt" },
                { pfeil: "2.", text: "Weniger Insulin → weniger Androgenproduktion in den Eierstöcken" },
                { pfeil: "3.", text: "Sinkende Androgene → Besserung von Akne, Hirsutismus, Zyklusstörungen" },
                { pfeil: "4.", text: "GLP-1 kann direkte Rezeptoren in Eierstöcken aktivieren → möglicherweise Ovulation fördern" },
              ].map((item) => (
                <div key={item.pfeil} className="flex gap-3 items-start">
                  <span className="text-primary font-bold text-sm flex-shrink-0 w-5">{item.pfeil}</span>
                  <p className="text-sm text-on-surface-variant font-body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Eine Metaanalyse (2024, Journal of Clinical Endocrinology &amp; Metabolism) mit 12 randomisierten kontrollierten Studien zeigte: GLP-1-Agonisten reduzierten bei PCOS-Patientinnen den Body-Mass-Index signifikant, verbesserten die Insulinsensitivität und senkten freies Testosteron. Die Evidenzlage ist vielversprechend, aber die Studien sind noch klein; GLP-1 ist kein Ersatz für etablierte PCOS-Behandlungen wie Metformin, orale Kontrazeptiva oder inositolbasierte Therapien.
            </p>
            <p>
              <strong>Wichtig für Frauen mit PCOS und Kinderwunsch:</strong> GLP-1 kann durch Gewichtsabnahme und verbesserte Insulinsensitivität die Ovulation wieder anspringen lassen. Frauen ohne Kinderwunsch müssen deshalb während der GLP-1-Therapie zuverlässig verhüten.
            </p>
          </div>
        </section>

        {/* Section 3: GLP-1 in den Wechseljahren */}
        <section className="mb-16" aria-labelledby="glp1-menopause-heading">
          <h2 id="glp1-menopause-heading" className="text-2xl font-headline font-bold mb-6">
            GLP-1 in der Perimenopause und Menopause
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              In den Wechseljahren verändern sich Stoffwechsel und Körperzusammensetzung grundlegend: Die Insulinsensitivität nimmt ab, Bauchfett nimmt zu, das kardiovaskuläre Risiko steigt. Östrogen hat eine insulinsensibilisierende Wirkung – wenn es sinkt, reagiert der Körper mit erhöhter Insulin-Resistenz, selbst bei Frauen ohne Übergewicht.
            </p>
            <p>
              Hier bietet GLP-1 theoretisch und in ersten Studien einen Ansatzpunkt:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: "monitor_heart",
                titel: "Kardiometabolischer Schutz",
                text: "GLP-1 senkt Blutdruck, LDL-Cholesterin und Entzündungsmarker – alles Risikofaktoren, die in der Menopause ansteigen. Große kardiovaskuläre Endpunktstudien (SUSTAIN-6, LEADER) zeigen 20–26 % Reduktion kardiovaskulärer Ereignisse.",
              },
              {
                icon: "scale",
                titel: "Gewichtsmanagement",
                text: "Postmenopausale Gewichtszunahme ist hormonell bedingt und notorisch schwer zu bekämpfen. GLP-1 (besonders Semaglutid) führt zu 10–15 % Körpergewichtsreduktion, auch bei menopausalen Frauen.",
              },
              {
                icon: "psychology",
                titel: "Darm-Hirn-Achse",
                text: "GLP-1-Rezeptoren im Hypothalamus beeinflussen Thermoregulation – es gibt erste Hinweise, dass GLP-1 Hitzewallungen reduzieren könnte. Klinische Studien dazu laufen.",
              },
              {
                icon: "science",
                titel: "Mikrobiom-Effekte",
                text: "GLP-1 verbessert die Zusammensetzung des Darmmikrobioms, was wiederum den Hormonstoffwechsel (Östrobolom) günstig beeinflusst.",
              },
            ].map((item) => (
              <div key={item.titel} className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary font-extralight">{item.icon}</span>
                  <p className="font-bold text-on-surface text-sm">{item.titel}</p>
                </div>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-sm font-body">
            <p className="font-bold text-amber-900 dark:text-amber-200 mb-1">Klare Einschränkung</p>
            <p className="text-amber-800 dark:text-amber-300">
              Spezifische GLP-1-Studien für Perimenopause-Symptome (Hitzewallungen, Schlafstörungen) sind noch rar. Die meisten Effekte wurden in Studien beobachtet, die auf Diabetes oder Adipositas fokussiert waren – mit menopausalen Frauen als Teilgruppe. GLP-1 ist kein Ersatz für HRT bei Wechseljahresbeschwerden.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
            Häufige Fragen zu GLP-1 und Frauengesundheit
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

        {/* Internal links */}
        <section className="mb-16" aria-labelledby="verwandt-heading">
          <h2 id="verwandt-heading" className="text-xl font-headline font-bold mb-6">Verwandte Themen</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/pcos", label: "PCOS – Polyzystisches Ovarialsyndrom", desc: "Symptome, Diagnose und alle Behandlungsoptionen" },
              { href: "/fragen/pcos-ernaehrung-tipps", label: "PCOS Ernährung", desc: "Was bei Insulin-Resistenz wirklich hilft" },
              { href: "/fragen/insulin-resistenz-symptome", label: "Insulin-Resistenz Symptome", desc: "Wie du Insulin-Resistenz erkennst" },
              { href: "/menopause", label: "Menopause & Perimenopause", desc: "Hormonelle Veränderungen im Überblick" },
              { href: "/themen/hormonersatztherapie-2026", label: "Hormonersatztherapie 2026", desc: "Aktueller Stand zu HRT – was hat sich geändert?" },
              { href: "/hormone/gewichtszunahme", label: "Gewichtszunahme durch Hormone", desc: "Warum Hormone Körpergewicht beeinflussen" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="block bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-colors">
                <p className="font-semibold text-on-surface text-sm mb-1">{label}</p>
                <p className="text-xs text-on-surface-variant">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-headline font-bold text-on-primary mb-4">
            Unsicher, welche Hormone hinter deinen Beschwerden stecken?
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
            Mach unseren 2-Minuten-Symptom-Check – als Vorbereitung auf das Gespräch mit deiner Ärztin.
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
