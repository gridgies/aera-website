import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/schilddruese/werte`;

export const metadata: Metadata = {
  title: "Schilddrüsenwerte verstehen: TSH, fT3, fT4 – Tabelle & Normalwerte",
  description:
    "TSH, freies T3, freies T4, TPO-Antikörper: Was bedeuten Ihre Schilddrüsenwerte? Normalwerte, optimale Bereiche und wann eine Behandlung sinnvoll ist.",
  alternates: { canonical: "/schilddruese/werte" },
  openGraph: {
    title: "Schilddrüsenwerte: TSH, fT3, fT4 Tabelle & Normalwerte",
    description:
      "Laborwerte der Schilddrüse verständlich erklärt: TSH-Referenzbereich, optimale fT3/fT4-Werte, Antikörper und wann Sie zum Arzt sollten.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Was ist ein normaler TSH-Wert?",
    answer:
      "Der laborübliche Referenzbereich liegt zwischen 0,4 und 4,0 mU/l. Viele Schilddrüsenspezialisten sehen jedoch einen optimalen Bereich von 1,0–2,5 mU/l als günstiger an – besonders bei Beschwerden oder Hashimoto. Ein TSH über 2,5 mU/l in der Frühschwangerschaft gilt als behandlungsbedürftig.",
  },
  {
    question: "Wann sollte fT3 und fT4 gemessen werden?",
    answer:
      "Ein alleiniger TSH-Wert reicht oft nicht aus. fT3 und fT4 sollten gemessen werden, wenn: der TSH grenzwertig auffällig ist, Beschwerden wie Müdigkeit oder Gewichtszunahme bestehen trotz normalem TSH, oder eine Hashimoto-Erkrankung bekannt ist. fT3 ist besonders wichtig, da es das aktiv wirksame Schilddrüsenhormon ist.",
  },
  {
    question: "Was bedeuten erhöhte TPO-Antikörper?",
    answer:
      "TPO-Antikörper (Anti-TPO) richten sich gegen das Enzym Thyreoperoxidase in der Schilddrüse. Erhöhte Werte deuten auf eine Autoimmun-Schilddrüsenerkrankung hin – meistens Hashimoto Thyreoiditis. Auch ohne Symptome und bei normalem TSH sollte der Befund regelmäßig kontrolliert werden.",
  },
  {
    question: "Kann ich trotz normalen Laborwerten eine Schilddrüsenunterfunktion haben?",
    answer:
      "Ja. Man spricht von einer subklinischen Hypothyreose, wenn der TSH erhöht, aber fT3/fT4 noch im Normbereich sind. Außerdem kann eine schlechte T4-zu-T3-Umwandlung vorliegen: fT4 ist normal, fT3 jedoch niedrig. In diesen Fällen berichten Betroffene oft über typische Unterfunktionssymptome, werden aber oft abgewiesen.",
  },
  {
    question: "Wie oft sollten Schilddrüsenwerte kontrolliert werden?",
    answer:
      "Bei bekannter Hashimoto oder Schilddrüsenunterfunktion empfehlen die Leitlinien eine Kontrolle alle 6–12 Monate oder nach Dosisanpassung der Hormontherapie (6–8 Wochen nach Änderung). In der Schwangerschaft alle 4–6 Wochen. Bei unauffälligem Befund ohne Symptome reicht eine jährliche Kontrolle.",
  },
];

const werteTabelle = [
  { wert: "TSH", normalbereich: "0,4–4,0 mU/l", optimal: "1,0–2,5 mU/l", hinweis: "Screeningwert; bei Beschwerden reicht 'normal' oft nicht" },
  { wert: "fT4 (freies Thyroxin)", normalbereich: "11–23 pmol/l", optimal: "Obere Hälfte", hinweis: "Vorläuferhormon; wird in T3 umgewandelt" },
  { wert: "fT3 (freies Trijodthyronin)", normalbereich: "3,1–6,8 pmol/l", optimal: "Obere Hälfte", hinweis: "Aktives Hormon; wichtig bei Umwandlungsstörungen" },
  { wert: "Anti-TPO (Antikörper)", normalbereich: "< 35 IE/ml", optimal: "Möglichst niedrig", hinweis: "Erhöht = Autoimmunreaktion; typisch bei Hashimoto" },
  { wert: "Anti-TG (Anti-Thyreoglobulin)", normalbereich: "< 40 IE/ml", optimal: "Möglichst niedrig", hinweis: "Zusätzlicher Autoimmunmarker" },
  { wert: "Reverse T3 (rT3)", normalbereich: "Labor variabel", optimal: "Verhältnis fT3/rT3 > 20", hinweis: "Bei chronischem Stress und Erschöpfung erhöht" },
];

export default function SchilddrueseWertePage() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Schilddrüse", url: `${BASE_URL}/schilddruese` },
    { name: "Schilddrüsenwerte verstehen", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "Schilddrüsenwerte verstehen: TSH, fT3, fT4 – Tabelle & Normalwerte",
        description: "TSH, freies T3, freies T4, TPO-Antikörper: Was bedeuten Ihre Schilddrüsenwerte? Normalwerte, optimale Bereiche und wann eine Behandlung sinnvoll ist.",
        url: PAGE_URL,
        dateModified: today,
      }))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      <article className="min-h-screen">
        <div className="pt-32 pb-0 px-8 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-on-surface-variant mb-8 font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/schilddruese" className="hover:text-primary transition-colors">Schilddrüse</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Schilddrüsenwerte verstehen</span>
          </nav>

          <header className="mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Schilddrüse
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6 leading-tight">
              Schilddrüsenwerte verstehen: TSH, fT3, fT4
            </h1>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-6">
              Ein einzelner TSH-Wert im Normbereich schließt eine Schilddrüsenstörung nicht aus. Erfahren Sie,
              was die verschiedenen Laborwerte bedeuten, was „optimal" von „normal" unterscheidet –
              und wann weitere Tests sinnvoll sind.
            </p>
            <div className="flex items-center gap-3 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-base">medical_information</span>
              <span>Medizinisch geprüft · Letzte Aktualisierung: April 2026</span>
            </div>
          </header>
        </div>

        <div className="px-8 max-w-4xl mx-auto pb-24">
          {/* Disclaimer */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 mb-10 text-sm text-on-surface-variant font-body">
            <strong className="text-on-surface">Medizinischer Hinweis:</strong> Dieser Artikel dient ausschließlich
            der allgemeinen Information und ersetzt keine ärztliche Beratung. Laborwerte müssen immer im
            Kontext Ihrer individuellen Symptome und Krankengeschichte bewertet werden.
          </div>

          {/* Quick Summary */}
          <div className="bg-primary-container/30 rounded-2xl p-8 mb-16 border border-primary/20">
            <h2 className="text-xl font-headline font-bold text-primary mb-4">Auf einen Blick</h2>
            <ul className="space-y-2 text-on-surface font-body text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">check_circle</span>
                <span>TSH ist der wichtigste Screeningwert – aber nicht der einzige</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">check_circle</span>
                <span>fT3 ist das aktive Hormon – bei Beschwerden trotz normalem TSH unbedingt messen lassen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">check_circle</span>
                <span>Anti-TPO-Antikörper zeigen eine Autoimmunreaktion (Hashimoto) an</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">check_circle</span>
                <span>„Normal" im Labor ≠ „optimal" für Ihr Wohlbefinden</span>
              </li>
            </ul>
          </div>

          {/* TSH */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">
              TSH: Der Dirigent der Schilddrüse
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-6">
              Das Thyreoidea-stimulierende Hormon (TSH) wird von der Hirnanhangsdrüse (Hypophyse) produziert
              und regelt, wie viel T3 und T4 die Schilddrüse ausschütten soll. Ein hoher TSH-Wert bedeutet:
              Die Hypophyse schlägt Alarm und fordert mehr Schilddrüsenhormon an – ein Zeichen für eine
              Unterfunktion. Ein niedriger TSH deutet auf eine Überfunktion hin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-surface-container rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{"< 0,4"}</div>
                <div className="text-sm font-semibold text-on-surface mb-1">Zu niedrig</div>
                <div className="text-xs text-on-surface-variant">Überfunktion, Hyperthyreose</div>
              </div>
              <div className="bg-primary-container/40 rounded-xl p-6 text-center border-2 border-primary/30">
                <div className="text-2xl font-bold text-primary mb-2">1,0–2,5</div>
                <div className="text-sm font-semibold text-on-surface mb-1">Optimal</div>
                <div className="text-xs text-on-surface-variant">Bestes Wohlbefinden für die meisten</div>
              </div>
              <div className="bg-surface-container rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-tertiary mb-2">{"> 2,5"}</div>
                <div className="text-sm font-semibold text-on-surface mb-1">Grenzwertig</div>
                <div className="text-xs text-on-surface-variant">Bei Beschwerden behandeln; {"> 4,0"} = Unterfunktion</div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-5 text-sm text-on-surface-variant font-body">
              <strong className="text-on-surface">Wichtig:</strong> Der laborübliche Referenzbereich (0,4–4,0 mU/l)
              ist statistisch definiert und schließt subklinische Unterfunktionen oft nicht aus.
              Viele Schilddrüsenspezialist:innen orientieren sich am engeren Bereich von 1,0–2,5 mU/l.
            </div>
          </section>

          {/* fT4 und fT3 */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">
              fT4 und fT3: Die eigentlichen Schilddrüsenhormone
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-6">
              Die Schilddrüse produziert hauptsächlich T4 (Thyroxin) und eine kleinere Menge T3
              (Trijodthyronin). T4 ist eine Art Speicherform und wird in den Körperzellen in das
              aktive T3 umgewandelt. Nur das „freie" (ungebundene) Hormon kann in Zellen wirken –
              daher sind fT3 und fT4 aussagekräftiger als die Gesamthormonwerte.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
                <h3 className="text-lg font-headline font-bold text-primary mb-3">fT4 (freies Thyroxin)</h3>
                <div className="text-sm text-on-surface-variant space-y-2 font-body">
                  <p><strong className="text-on-surface">Normalbereich:</strong> 11–23 pmol/l</p>
                  <p><strong className="text-on-surface">Optimal:</strong> Obere Hälfte des Referenzbereichs</p>
                  <p>Vorläuferhormon; niedrige Werte deuten auf unzureichende Hormonproduktion der Schilddrüse hin.</p>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-6 border border-primary/20">
                <h3 className="text-lg font-headline font-bold text-primary mb-3">fT3 (freies Trijodthyronin)</h3>
                <div className="text-sm text-on-surface-variant space-y-2 font-body">
                  <p><strong className="text-on-surface">Normalbereich:</strong> 3,1–6,8 pmol/l</p>
                  <p><strong className="text-on-surface">Optimal:</strong> Obere Hälfte des Referenzbereichs</p>
                  <p>Das aktiv wirksame Hormon. Niedrige fT3-Werte trotz normalem TSH erklären viele Beschwerden.</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-sm font-body">
              <strong className="text-amber-800 dark:text-amber-300">Konversionsstörung:</strong>{" "}
              <span className="text-amber-900 dark:text-amber-200">
                Bei Hashimoto, chronischem Stress, Selenmangel oder Lebererkrankungen kann die
                Umwandlung von T4 zu T3 gestört sein. Dann sind fT4 normal, fT3 aber niedrig –
                und Betroffene leiden trotz „normaler" Werte unter Unterfunktionssymptomen.
              </span>
            </div>
          </section>

          {/* Antikörper */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">
              Schilddrüsenantikörper: Anti-TPO und Anti-TG
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-6">
              Antikörper gegen Schilddrüsengewebe sind der Fingerabdruck einer Autoimmunreaktion.
              Sie werden gemessen, wenn Hashimoto Thyreoiditis oder Morbus Basedow vermutet wird.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-surface-container-low rounded-2xl p-6">
                <h3 className="text-base font-headline font-bold text-on-surface mb-3">Anti-TPO (TPO-Antikörper)</h3>
                <ul className="text-sm text-on-surface-variant space-y-1 font-body">
                  <li>Normalwert: {"< 35 IE/ml"}</li>
                  <li>Bei 90–95 % der Hashimoto-Patientinnen erhöht</li>
                  <li>Höhe korreliert nicht unbedingt mit Schwere der Erkrankung</li>
                  <li>Sinkt oft bei erfolgreicher Therapie und entzündungsarmer Ernährung</li>
                </ul>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-6">
                <h3 className="text-base font-headline font-bold text-on-surface mb-3">Anti-TG (Anti-Thyreoglobulin)</h3>
                <ul className="text-sm text-on-surface-variant space-y-1 font-body">
                  <li>Normalwert: {"< 40 IE/ml"}</li>
                  <li>Bei 60–80 % der Hashimoto-Patientinnen erhöht</li>
                  <li>Auch bei Morbus Basedow und Schilddrüsenkrebs relevant</li>
                  <li>Alleinige Erhöhung ohne Anti-TPO kann selten auftreten</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Wertetabelle */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">
              Übersichtstabelle: Alle Schilddrüsenwerte
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-primary-container/30">
                    <th className="text-left p-4 font-semibold text-primary">Wert</th>
                    <th className="text-left p-4 font-semibold text-primary">Laborbereich</th>
                    <th className="text-left p-4 font-semibold text-primary">Optimal</th>
                    <th className="text-left p-4 font-semibold text-primary hidden md:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {werteTabelle.map((row, i) => (
                    <tr key={row.wert} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                      <td className="p-4 font-semibold text-on-surface">{row.wert}</td>
                      <td className="p-4 text-on-surface-variant">{row.normalbereich}</td>
                      <td className="p-4 text-on-surface-variant">{row.optimal}</td>
                      <td className="p-4 text-on-surface-variant hidden md:table-cell">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Wann zum Arzt */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">
              Wann sollten Sie Ihre Werte kontrollieren lassen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "warning", text: "Anhaltende Müdigkeit, Konzentrationsprobleme oder Kälteempfindlichkeit" },
                { icon: "scale", text: "Unerklärliche Gewichtszunahme oder -abnahme" },
                { icon: "family_history", text: "Schilddrüsenerkrankung oder Autoimmunerkrankung in der Familie" },
                { icon: "pregnant_woman", text: "Schwangerschaftswunsch oder bestehende Schwangerschaft" },
                { icon: "medication", text: "Haarausfall, trockene Haut oder Verstopfung ohne andere Ursache" },
                { icon: "monitor_heart", text: "Herzrasen, Zittern oder Nervosität (mögliche Überfunktion)" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5">{item.icon}</span>
                  <span className="text-sm text-on-surface-variant font-body">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-8">
              Häufige Fragen zu Schilddrüsenwerten
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

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-headline font-bold text-primary mb-6">Weiterführende Themen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/schilddruese", label: "Schilddrüsenerkrankungen: Übersicht", icon: "medical_information" },
                { href: "/hashimoto", label: "Hashimoto Thyreoiditis: Alles Wichtige", icon: "emergency" },
                { href: "/hashimoto/ursachen", label: "Hashimoto Ursachen", icon: "science" },
                { href: "/hashimoto/ernaehrung", label: "Hashimoto Ernährung", icon: "nutrition" },
                { href: "/fragen/kann-hashimoto-geheilt-werden", label: "Kann Hashimoto geheilt werden?", icon: "help" },
                { href: "/fragen/schilddruesenwerte-verstehen", label: "Werte beim Arzt: Checkliste", icon: "checklist" },
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
                  <span className="material-symbols-outlined text-on-surface-variant ml-auto text-base">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-headline font-bold text-on-primary mb-4">
              Unsicher bei Ihren Schilddrüsenwerten?
            </h2>
            <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
              Machen Sie unseren Symptom-Check und erhalten Sie eine erste Einschätzung,
              welche Werte bei Ihnen untersucht werden sollten.
            </p>
            <Link
              href="/check"
              className="inline-flex items-center gap-2 bg-on-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container transition-colors"
            >
              Symptom-Check starten
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
