import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/themen/darm-und-hormone`;

export const metadata: Metadata = {
  title: "Darm und Hormone: Warum dein Mikrobiom die Wechseljahre beeinflusst",
  description:
    "Dein Darm produziert und reguliert Östrogen. Wie das Östrobolom funktioniert, was Perimenopause mit dem Mikrobiom macht – und was du konkret tun kannst.",
  alternates: { canonical: "/themen/darm-und-hormone" },
  openGraph: {
    title: "Darm und Hormone: Das Mikrobiom in den Wechseljahren",
    description:
      "Wie das Östrobolom Östrogen recycelt, warum Dysbiose Wechseljahresbeschwerden verstärkt und welche Maßnahmen wirklich helfen.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Wie beeinflusst der Darm die Hormonproduktion?",
    answer:
      "Der Darm produziert keine Hormone direkt, aber er reguliert, wie viel Östrogen im Blut zirkuliert. Im Dickdarm befinden sich Bakterien (das sogenannte Östrobolom), die ein Enzym namens Beta-Glucuronidase produzieren. Dieses Enzym macht konjugiertes – also zur Ausscheidung vorbereitetes – Östrogen wieder aktiv, sodass es in den Blutkreislauf zurückgesogen wird. Ist das Östrobolom aus dem Gleichgewicht, sinkt der zirkulierende Östrogenspiegel, was Wechseljahresbeschwerden verschlimmert.",
  },
  {
    question: "Was ist das Östrobolom?",
    answer:
      "Das Östrobolom ist ein spezifischer Teil des Darm-Mikrobioms: eine Sammlung von Bakterien, die Beta-Glucuronidase produzieren und damit Östrogen metabolisieren. Zu den bekannten Östrobolom-Bakterien gehören Lactobacillus, Bifidobacterium und Clostridiales-Arten. Eine hohe Diversität des Östroboloms sorgt für einen stabilen Östrogenspiegel; Dysbiose (Ungleichgewicht) dagegen kann sowohl zu Östrogenmangel als auch zu relativem Östrogenüberschuss führen, je nachdem welche Bakterien dominieren.",
  },
  {
    question: "Wie verändert sich das Mikrobiom in den Wechseljahren?",
    answer:
      "In der Perimenopause und nach der Menopause sinkt die Mikrobiom-Diversität signifikant. Der Anteil protektiver Bakterien wie Lactobacillus und Bifidobacterium nimmt ab, während potentiell entzündliche Bakterien wie Enterobacter zunehmen. Das Firmicutes/Bacteroidetes-Verhältnis verschiebt sich, was mit höheren Entzündungsmarkern (IL-6, TNF-alpha) verbunden ist. Diese veränderte Mikrobiomzusammensetzung verschlechtert die Östrogenrückgewinnung und verstärkt typische Symptome wie Hitzewallungen, Schlafstörungen und Stimmungsschwankungen.",
  },
  {
    question: "Welche Probiotika helfen bei Wechseljahresbeschwerden?",
    answer:
      "Die stärkste Evidenz gibt es für Lactobacillus-Stämme (L. acidophilus, L. rhamnosus, L. reuteri) und Bifidobacterium-Stämme (B. longum, B. lactis). Eine Metaanalyse aus 2024 (PMC) zeigte, dass Probiotika die Häufigkeit von Hitzewallungen bei postmenopausalen Frauen um durchschnittlich 33 % reduzierten. Wichtig: Probiotika wirken am besten in Kombination mit präbiotischer Kost (Inulin, Pektin aus Gemüse). Fermentierte Lebensmittel wie Kefir, Joghurt und Kimchi fördern die Mikrobiomdiversität zusätzlich.",
  },
  {
    question: "Hilft Darmgesundheit bei Hitzewallungen?",
    answer:
      "Ja – indirekt, aber messbar. Ein intaktes Östrobolom stabilisiert den zirkulierenden Östrogenspiegel, was die Frequenz und Intensität von Hitzewallungen reduziert. Darüber hinaus produzieren Darmbakterien kurzkettige Fettsäuren (SCFA), die entzündungshemmend wirken und den Hypothalamus – das Thermoregulationszentrum – stabilisieren. Eine 2026 in Frontiers in Endocrinology veröffentlichte Studie fand, dass Frauen mit höherer Mikrobiom-Diversität seltener über schwere Hitzewallungen berichteten.",
  },
  {
    question: "Kann ich mit Ernährung meine Hormone regulieren?",
    answer:
      "Direkt über Ernährung lässt sich der Hormonspiegel nicht präzise steuern – aber du kannst das Östrobolom und damit die Östrogenrückgewinnung gezielt unterstützen. Ballaststoffreiche Ernährung (Gemüse, Hülsenfrüchte, Vollkorn) fördert protektive Darmbakterien. Phytoöstrogene aus Leinsamen, Tofu und Hülsenfrüchten binden schwach an Östrogenrezeptoren und können milde östrogenähnliche Effekte haben. Fermentierte Lebensmittel erhöhen die Mikrobiom-Diversität direkt. Zuckerarme Ernährung hemmt das Wachstum entzündlicher Bakterien.",
  },
  {
    question: "Was hat Hashimoto mit dem Darm zu tun?",
    answer:
      "Sehr viel. Hashimoto ist eine Autoimmunerkrankung, und 70–80 % des Immunsystems sitzen im Darm. Eine erhöhte Darmpermeabilität (sogenannter 'Leaky Gut') kann zur Aktivierung von Autoimmunreaktionen beitragen, die auch die Schilddrüse betreffen. Studien zeigen, dass Hashimoto-Patientinnen eine signifikant veränderte Darmmikrobiom-Zusammensetzung aufweisen: weniger Bacteroidetes, mehr Firmicutes und Proteobacteria. Eine entzündungsarme, ballaststoffreiche Ernährung kann die Autoimmunlage langfristig günstig beeinflussen.",
  },
];

export default function DarmUndHormonePage() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Themen", url: `${BASE_URL}/themen` },
    { name: "Darm und Hormone", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "Darm und Hormone: Warum dein Mikrobiom die Wechseljahre beeinflusst",
        description: "Das Östrobolom reguliert Östrogen im Darm. Wie Mikrobiom-Dysbiose Wechseljahresbeschwerden verstärkt und was konkret hilft.",
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
          <span className="text-on-surface">Darm und Hormone</span>
        </nav>

        <aside className="bg-surface-container-low rounded-xl p-4 mb-10 border border-outline-variant/10 text-xs text-on-surface-variant font-body flex gap-3 items-start">
          <span className="material-symbols-outlined text-base font-extralight flex-shrink-0 mt-0.5">info</span>
          <span>
            Dieser Artikel dient nur zu Informationszwecken und ersetzt keine ärztliche Beratung.
            Medizinisch geprüft von der Aera Health Redaktion · {today}.
          </span>
        </aside>

        <header className="mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Hormone &amp; Darmgesundheit
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Darm und Hormone: Warum dein Mikrobiom deine Wechseljahre beeinflusst
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            Dein Darm reguliert, wie viel Östrogen in deinem Blut zirkuliert. Was das Östrobolom ist, wie Perimenopause das Mikrobiom verändert – und was du konkret tun kannst.
          </p>
        </header>

        {/* Quick summary */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">Das Wichtigste auf einen Blick</h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Das Östrobolom – Darmbakterien, die Östrogen metabolisieren – beeinflusst direkt deinen Hormonspiegel
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              In der Perimenopause sinkt die Mikrobiom-Diversität, was Hitzewallungen, Schlafstörungen und Stimmungsschwankungen verschlimmern kann
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Ballaststoffreiche Ernährung, fermentierte Lebensmittel und gezielte Probiotika können das Östrobolom stärken
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Hashimoto und andere Autoimmunerkrankungen hängen eng mit Darmgesundheit zusammen
            </li>
          </ul>
        </div>

        {/* Section 1: Was ist das Östrobolom */}
        <section className="mb-16" aria-labelledby="oestrobolom-heading">
          <h2 id="oestrobolom-heading" className="text-2xl font-headline font-bold mb-6">
            Das Östrobolom: Dein Darm als Hormonthermostat
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Östrogen wird in der Leber abgebaut und zur Ausscheidung über die Galle in den Darm geschickt. Normalerweise verlässt es dort den Körper mit dem Stuhl. Doch eine Gruppe von Darmbakterien – das sogenannte <strong>Östrobolom</strong> – produziert ein Enzym namens <em>Beta-Glucuronidase</em>, das dieses zur Ausscheidung vorbereitete Östrogen wieder reaktiviert. Das reaktivierte Östrogen wird dann erneut über die Darmwand aufgenommen und gelangt zurück in den Blutkreislauf.
            </p>
            <p>
              Dieser Kreislauf – bekannt als enterohepatische Zirkulation – ist kein Fehler des Körpers, sondern ein normaler Regulationsmechanismus. Problematisch wird er erst, wenn das Gleichgewicht kippt:
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 text-primary mt-0.5">arrow_right</span>
                <span><strong>Zu wenig Beta-Glucuronidase</strong> (durch Dysbiose oder Antibiotika) → weniger Östrogen wird zurückgewonnen → Östrogenmangel-Symptome
                wie Hitzewallungen und trockene Schleimhäute verstärken sich</span>
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 text-primary mt-0.5">arrow_right</span>
                <span><strong>Zu viel Beta-Glucuronidase</strong> (durch bestimmte ungünstige Bakterienstämme) → mehr Östrogen zirkuliert → kann zu relativem Östrogenüberschuss (Östrogendominanz) beitragen</span>
              </li>
            </ul>
            <p>
              Zu den bekannten östrobolom-positiven Bakteriengattungen gehören <em>Lactobacillus</em>, <em>Bifidobacterium</em>, <em>Ruminococcus</em> und bestimmte <em>Clostridiales</em>-Arten. Eine hohe Diversität dieser Bakterien hält den Östrogen-Recycling-Prozess stabil.
            </p>
          </div>
        </section>

        {/* Section 2: Wie Perimenopause das Mikrobiom verändert */}
        <section className="mb-16" aria-labelledby="perimenopause-mikro-heading">
          <h2 id="perimenopause-mikro-heading" className="text-2xl font-headline font-bold mb-6">
            Was die Perimenopause mit deinem Mikrobiom macht
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Östrogen hat eine stark modulierende Wirkung auf das Darm-Mikrobiom. Wenn der Östrogenspiegel in der Perimenopause zu schwanken beginnt und langfristig sinkt, verändert sich auch die Zusammensetzung der Darmbakterien – ein Teufelskreis entsteht:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            {[
              {
                icon: "trending_down",
                label: "Weniger Diversität",
                desc: "Der Anteil protektiver Lactobacillus- und Bifidobacterium-Bakterien sinkt in der Perimenopause signifikant.",
              },
              {
                icon: "inflammation",
                label: "Mehr Entzündung",
                desc: "Entzündliche Bakterien wie Enterobacter nehmen zu. Entzündungsmarker IL-6 und TNF-alpha steigen an.",
              },
              {
                icon: "sync_problem",
                label: "Gestörter Hormonstoffwechsel",
                desc: "Das Östrobolom wird instabiler. Weniger Östrogen wird aus dem Darm zurückgewonnen.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-2xl font-extralight mb-3 block">{item.icon}</span>
                <p className="font-semibold text-on-surface text-sm mb-2">{item.label}</p>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Eine 2026 in <em>Frontiers in Endocrinology</em> veröffentlichte Studie zur perimenopausal bedingten Arteriosklerose beschreibt eine „Östrogen-Darm-Gefäß-Achse": Wenn das Mikrobiom durch sinkenden Östrogenspiegel aus dem Gleichgewicht gerät, steigt gleichzeitig das kardiovaskuläre Risiko. Das Mikrobiom ist also nicht nur ein Hormonstabilisator, sondern auch ein Herzschutzfaktor.
            </p>
            <p>
              Gut dokumentiert ist auch der Zusammenhang mit dem Tryptophan-Serotonin-Stoffwechsel: Darmbakterien produzieren etwa 90 % des körpereigenen Serotonins. In der Perimenopause gestörte Darmflora kann deshalb Stimmungsschwankungen, Angstzustände und Schlafstörungen direkt verstärken – unabhängig vom direkten Östrogeneinfluss auf das Gehirn.
            </p>
          </div>
        </section>

        {/* Section 3: Konkrete Maßnahmen */}
        <section className="mb-16" aria-labelledby="massnahmen-heading">
          <h2 id="massnahmen-heading" className="text-2xl font-headline font-bold mb-6">
            Was du konkret tun kannst: Das Östrobolom stärken
          </h2>

          <div className="space-y-6">
            {[
              {
                nummer: "01",
                titel: "Ballaststoffe: Nahrung für dein Östrobolom",
                inhalt:
                  "Lösliche Ballaststoffe aus Gemüse, Hülsenfrüchten und Leinsamen dienen Lactobacillus- und Bifidobacterium-Bakterien als Nahrungsgrundlage (Präbiotika). Ziel: mindestens 25–30 g Ballaststoffe täglich. Besonders effektiv: Inulin (Chicorée, Topinambur, Knoblauch), Pektin (Äpfel, Karotten), resistente Stärke (erkaltete Kartoffeln, unreife Bananen).",
              },
              {
                nummer: "02",
                titel: "Fermentierte Lebensmittel: direkte Mikrobiom-Booster",
                inhalt:
                  "Kefir, Joghurt mit Lebendkulturen, Kimchi, Sauerkraut, Kombucha und Miso enthalten lebende Bakterienkulturen, die die Mikrobiomdiversität direkt erhöhen. Eine Stanford-Studie (2021) zeigte, dass täglich fermentierte Lebensmittel die Mikrobiom-Diversität stärker steigern als eine hochballaststoffreiche Diät allein.",
              },
              {
                nummer: "03",
                titel: "Gezielte Probiotika",
                inhalt:
                  "Für die Perimenopause am besten untersucht: Lactobacillus acidophilus, L. rhamnosus GG, Bifidobacterium longum und B. lactis. Eine Metaanalyse aus 2024 zeigte 33 % Reduktion von Hitzewallungen. Wichtig: Probiotika nach Mahlzeiten nehmen, mindestens 8–12 Wochen konsequent, mindestens 10 Milliarden KBE täglich.",
              },
              {
                nummer: "04",
                titel: "Zuckerreduktion und Entzündungshemmung",
                inhalt:
                  "Zucker und hochverarbeitete Lebensmittel fördern das Wachstum entzündlicher Bakterien und hemmen das Östrobolom. Mediterrane Ernährung – reichlich Gemüse, Olivenöl, fetter Fisch, Nüsse – hat die stärkste anti-entzündliche Evidenz und unterstützt gleichzeitig das Östrobolom.",
              },
              {
                nummer: "05",
                titel: "Stress reduzieren: Die Darm-Hirn-Achse",
                inhalt:
                  "Chronischer Stress erhöht Cortisol, das die Darmbarriere schwächt und die Mikrobiom-Zusammensetzung ungünstig verändert. Regelmäßige Entspannungspraktiken (Yoga, Atemübungen, ausreichend Schlaf) stabilisieren die Darm-Hirn-Achse und wirken damit indirekt auch auf den Hormonstoffwechsel.",
              },
            ].map((item) => (
              <div key={item.nummer} className="flex gap-5 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
                <div className="text-3xl font-headline font-bold text-primary/20 flex-shrink-0 w-10">{item.nummer}</div>
                <div>
                  <h3 className="font-bold text-on-surface mb-2">{item.titel}</h3>
                  <p className="text-sm text-on-surface-variant font-body leading-relaxed">{item.inhalt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Hashimoto und Darm */}
        <section className="mb-16" aria-labelledby="hashimoto-darm-heading">
          <h2 id="hashimoto-darm-heading" className="text-2xl font-headline font-bold mb-6">
            Hashimoto, PCOS und Schilddrüse: Die Darm-Autoimmun-Verbindung
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Das Darm-Mikrobiom ist für das Immunsystem zentral: 70–80 % der Immunzellen befinden sich im Darmgewebe. Eine gestörte Darmbarriere – auch „Leaky Gut" genannt – lässt Bakterienfragmente und unvollständig verdaute Proteine ins Blut, was das Immunsystem dauerhaft in Alarmbereitschaft versetzt.
            </p>
            <p>
              Bei <Link href="/hashimoto" className="text-primary hover:underline">Hashimoto Thyreoiditis</Link> zeigen Studien konsistent ein verändertes Darmmikrobiom: weniger schützende Bacteroidetes, mehr potenziell entzündliche Firmicutes und Proteobacteria. Ob die Dysbiose die Autoimmunreaktion auslöst oder eine Folge davon ist, ist noch nicht abschließend geklärt – es gibt aber zunehmend Evidenz für einen bidirektionalen Zusammenhang.
            </p>
            <p>
              Bei <Link href="/pcos" className="text-primary hover:underline">PCOS</Link> ist der Zusammenhang zwischen Insulin-Resistenz, verändertem Mikrobiom und Androgenüberschuss gut belegt. Probiotika und eine kohlenhydratarme, ballaststoffreiche Ernährung können die Insulinsensitivität verbessern und damit die Hormonsymptomatik lindern.
            </p>
            <p>
              Für <Link href="/schilddruese" className="text-primary hover:underline">Schilddrüsenerkrankungen</Link> gilt: Der Darm beeinflusst die Absorption von L-Thyroxin (Levothyroxin), das immer auf nüchternen Magen und mindestens 30 Minuten vor dem Frühstück eingenommen werden sollte. Kalzium, Eisen und Antazida im Darm können die Aufnahme erheblich verringern.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
            Häufige Fragen zu Darm und Hormonen
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
              { href: "/menopause", label: "Menopause & Perimenopause", desc: "Alle Symptome, Ursachen und Behandlungsoptionen" },
              { href: "/hashimoto/ernaehrung", label: "Hashimoto Ernährung", desc: "Was essen, was meiden – evidenzbasiert" },
              { href: "/hashimoto", label: "Hashimoto Thyreoiditis", desc: "Autoimmun, Schilddrüse, Symptome und Diagnose" },
              { href: "/pcos", label: "PCOS", desc: "Polyzystisches Ovarialsyndrom: Symptome & Behandlung" },
              { href: "/fragen/oestrogendominanz-symptome", label: "Östrogendominanz Symptome", desc: "Wenn zu viel Östrogen zirkuliert" },
              { href: "/fragen/cortisol-zu-hoch-symptome-frau", label: "Cortisol zu hoch – Symptome", desc: "Wie Stress den Hormonstoffwechsel stört" },
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
            Unsicher, welche Hormone bei dir aus dem Gleichgewicht sind?
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
            Mach unseren 2-Minuten-Symptom-Check und erfahre, welche hormonellen Ursachen hinter deinen Beschwerden stecken könnten.
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
