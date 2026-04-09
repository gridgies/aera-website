import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/hashimoto/ernaehrung`;

export const metadata: Metadata = {
  title: "Hashimoto Ernährung: Was essen, was meiden – evidenzbasiert",
  description:
    "Hashimoto Ernährung: Welche Lebensmittel helfen, welche schaden. Gluten, Jod, Selen, Entzündungshemmer – was die Forschung wirklich sagt.",
  alternates: { canonical: "/hashimoto/ernaehrung" },
  openGraph: {
    title: "Hashimoto Ernährung: Was wirklich hilft (und was Mythos ist)",
    description:
      "Hashimoto und Ernährung: Gluten meiden, Selen ergänzen, entzündungsarm essen. Evidenzbasierter Überblick für Hashimoto-Patientinnen.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Müssen alle Hashimoto-Patientinnen glutenfrei essen?",
    answer:
      "Nein – nur wenn gleichzeitig Zöliakie oder nachgewiesene Glutensensitivität vorliegt. Für alle anderen gibt es keine konsistente Studienlage, die glutenfreie Kost bei Hashimoto ohne Zöliakie empfiehlt. Wer es dennoch ausprobieren möchte: mindestens 3 Monate konsequent, dann Anti-TPO und Wohlbefinden vergleichen.",
  },
  {
    question: "Wieviel Selen sollte ich bei Hashimoto einnehmen?",
    answer:
      "Die am besten belegte Dosis in klinischen Studien ist 200 µg Natriumselenit oder Selenomethionin täglich. Nicht überschreiten: Chronische Überdosierung (>400 µg) verursacht Selenose (Haarausfall, Nagelfragilität). Idealerweise Selenstatus im Blut messen lassen (Zielwert: 120–150 µg/L).",
  },
  {
    question: "Ist jodhaltiges Salz bei Hashimoto gefährlich?",
    answer:
      "Normales jodiertes Speisesalz (25 µg Jod pro Gramm) ist bei Hashimoto unbedenklich und entspricht der Deutschen Gesellschaft für Ernährung (DGE)-Empfehlung. Problematisch sind hochdosierte Jodpräparate, Algen in großen Mengen und jodhaltiges Kontrastmittel. Schilddrüsenhormone enthalten kein Jod und beeinflussen den Jodstatus nicht.",
  },
  {
    question: "Hilft eine Autoimmun-Protokoll-Diät (AIP) bei Hashimoto?",
    answer:
      "Erste Pilotstudien zeigen, dass AIP (Eliminationsdiät ohne Getreide, Hülsenfrüchte, Nachtschattengewächse, Eier, Milch) subjektive Symptome verbessern kann. Die Evidenz ist jedoch noch dünn (kleine Studien, kurze Dauer). AIP ist streng und schwer langfristig durchzuhalten. Eine allgemeine entzündungsarme Ernährung (mediterran) ist als Dauerernährung besser geeignet.",
  },
  {
    question: "Darf ich mit Hashimoto Sojaprodukte essen?",
    answer:
      "Soja enthält Isoflavone, die in großen Mengen die Schilddrüsenhormonproduktion hemmen können (goitrogen). In normalen Mengen (1–2 Portionen täglich) ist Soja bei gut eingestelltem Hashimoto unbedenklich. Wichtig: Soja nicht zur gleichen Zeit wie Levothyroxin einnehmen – mindestens 4 Stunden Abstand halten.",
  },
];

export default function HashimotoErnaehrungPage() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Hashimoto", url: `${BASE_URL}/hashimoto` },
    { name: "Ernährung", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "Hashimoto Ernährung: Was essen, was meiden – evidenzbasiert",
        description: "Welche Lebensmittel bei Hashimoto helfen, welche schaden – Gluten, Jod, Selen und mehr.",
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
          <span className="text-on-surface">Ernährung</span>
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
            Hashimoto Ernährung: Was essen, was meiden – was wirklich hilft
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            Rund um Hashimoto kursieren viele Ernährungsempfehlungen – manche evidenzbasiert, viele Mythos. Hier ist der Überblick, was die Forschung wirklich sagt.
          </p>
        </header>

        {/* Quick summary */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">Auf einen Blick</h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Selen (200 µg täglich) ist die am besten belegte Ernährungsmaßnahme bei Hashimoto</li>
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Glutenfrei nur bei gleichzeitiger Zöliakie – sonst kein nachgewiesener Nutzen</li>
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Jodiertes Speisesalz ist unbedenklich – hochdosierte Jodpräparate und Algen meiden</li>
            <li className="flex gap-2"><span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>Entzündungsarme Ernährung (mediterran) verbessert Autoimmunlage langfristig</li>
          </ul>
        </div>

        {/* Section 1: Selen */}
        <section className="mb-16" aria-labelledby="selen-heading">
          <h2 id="selen-heading" className="text-2xl font-headline font-bold mb-6">Selen: Die wichtigste Mikronährstoffmaßnahme</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Selen ist das am besten untersuchte Mikronährstoff-Supplement bei Hashimoto. Die Schilddrüse enthält mehr Selen pro Gramm als jedes andere Organ. Selenoproteine schützen die Drüse vor oxidativem Stress, der bei der Hormonproduktion entsteht. Bei Selenmangel steigen Entzündungsmarker und Anti-TPO-Antikörper an.</p>
            <p>Eine Cochrane-Analyse (2013, aktualisiert 2022) bestätigt: 200 µg Selen täglich senken Anti-TPO-Antikörper bei Hashimoto-Patientinnen um durchschnittlich 30–50 % über 12 Monate. Ob dies die Schilddrüsenfunktion direkt verbessert oder nur einen Biomarker senkt, ist noch Gegenstand der Forschung – die meisten Patientinnen berichten aber auch subjektive Verbesserung.</p>
            <p>Selenreiche Lebensmittel: Paranüsse (1–2 pro Tag liefern ~70–100 µg), Meeresfische (Thunfisch, Makrele), Eier, Fleisch. Als Supplement: Natriumselenit oder Selenomethionin, 200 µg täglich. Nie über 400 µg täglich – Selenose droht.</p>
          </div>
        </section>

        {/* Section 2: Jod */}
        <section className="mb-16" aria-labelledby="jod-heading">
          <h2 id="jod-heading" className="text-2xl font-headline font-bold mb-6">Jod: Weder verteufeln noch übertreiben</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Jod ist für die Schilddrüsenhormonproduktion unentbehrlich – Jodmangel führt zu Strumabildung. Gleichzeitig kann Jodüberschuss bei Hashimoto die Entzündungsaktivität erhöhen und einen Schub auslösen. Der Schlüssel liegt in der Menge.</p>
            <p>Unbedenklich und empfohlen: jodiertes Speisesalz (25 µg/g), normaler Fischkonsum, Milchprodukte. Zu meiden oder einzuschränken: hochdosierte Jodpräparate (&gt;200 µg täglich als Supplement), getrocknete Algen und Meeresgemüse (können 1.000–10.000 µg Jod pro Portion enthalten), jodhaltiges Kontrastmittel (bei MRT/CT vorher Arzt informieren). Die Deutsche Gesellschaft für Ernährung empfiehlt für Erwachsene 200 µg Jod täglich – dieser Bedarf ist über normale Ernährung gut zu decken.</p>
          </div>
        </section>

        {/* Section 3: Gluten */}
        <section className="mb-16" aria-labelledby="gluten-heading">
          <h2 id="gluten-heading" className="text-2xl font-headline font-bold mb-6">Gluten: Mythos vs. Evidenz</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Die Empfehlung, bei Hashimoto glutenfrei zu essen, ist weit verbreitet – aber wissenschaftlich nur für eine Untergruppe belegt. Zöliakie (Glutenunverträglichkeit) tritt bei Hashimoto-Patientinnen 3–5-mal häufiger auf als in der Allgemeinbevölkerung. Wer beides hat, profitiert eindeutig von glutenfreier Kost. Für alle anderen ist die Studienlage dünn und inkonsistent.</p>
            <p>Praktische Empfehlung: Anti-Transglutaminase-IgA (tTG-IgA) und Gesamt-IgA testen lassen. Bei positivem Ergebnis: Zöliakie-Diagnose sichern und konsequent glutenfrei leben. Ohne Befund: kein automatischer Nutzen einer glutenfreien Diät – sie ist aufwändig, teuer und kann zu Nährstoffmangel führen (weniger Ballaststoffe, weniger B-Vitamine). Wer trotzdem eine Reaktion auf Gluten vermutet: 3 Monate konsequent testen, dann bewusst wieder einführen und beobachten.</p>
          </div>
        </section>

        {/* Section 4: Entzündungsarme Ernährung */}
        <section className="mb-16" aria-labelledby="anti-entz-heading">
          <h2 id="anti-entz-heading" className="text-2xl font-headline font-bold mb-6">Entzündungsarme Ernährung: Der sinnvollste Gesamtansatz</h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>Da Hashimoto eine chronische Entzündungserkrankung ist, macht ein entzündungsarmes Ernährungsmuster grundlegend Sinn – auch wenn keine spezifischen Hashimoto-Studien vorliegen. Die mediterrane Ernährung ist hier am besten belegt: reichlich Gemüse, Olivenöl, Fisch, Hülsenfrüchte, Nüsse; wenig rotes Fleisch, Zucker und verarbeitete Lebensmittel.</p>
            <p>Konkrete Maßnahmen: Omega-3-Fettsäuren (EPA/DHA aus fettem Fisch oder Algenpräparaten) hemmen entzündliche Prostaglandine und senken IL-6 und TNF-alpha. Antioxidantienreiche Kost (Beeren, grünes Blattgemüse, Tomaten) reduziert oxidativen Stress in der Schilddrüse. Zuckerreduktion senkt Insulinspiegel und damit Entzündungsparameter. Ausreichend Eiweiß unterstützt die Schilddrüsenhormonproduktion und Gewebereparatur.</p>
          </div>
        </section>

        {/* Section 5: Lebensmittelübersicht */}
        <section className="mb-16" aria-labelledby="tabelle-heading">
          <h2 id="tabelle-heading" className="text-2xl font-headline font-bold mb-6">Lebensmittel im Überblick</h2>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant/10">
            <table className="w-full text-sm font-body">
              <thead className="bg-surface-container">
                <tr>
                  {["Lebensmittelgruppe", "Empfehlung", "Grund"].map((h) => (
                    <th key={h} className="text-left p-4 font-semibold text-on-surface">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Paranüsse (1–2/Tag)", "Empfohlen", "Selenzufuhr"],
                  ["Fetter Fisch (2×/Woche)", "Empfohlen", "Selen + Omega-3"],
                  ["Gemüse & Beeren", "Empfohlen", "Antioxidantien, anti-entzündlich"],
                  ["Olivenöl", "Empfohlen", "Oleocanthal: anti-entzündlich"],
                  ["Jodiertes Speisesalz", "Unbedenklich", "Normaler Jodbedarf"],
                  ["Soja (moderat)", "Unbedenklich*", "Kein Einfluss in normalen Mengen; *Abstand zu L-Thyroxin"],
                  ["Kreuzblütler (Brokkoli, Kohl)", "Unbedenklich gegart", "Goitrogene werden durch Hitze inaktiviert"],
                  ["Algen & Meeresgemüse", "Einschränken", "Sehr hoher Jodgehalt"],
                  ["Hochdosierte Jodpräparate", "Meiden", "Löst Schübe aus"],
                  ["Zucker & Weißmehlprodukte", "Reduzieren", "Erhöhen Entzündungsmarker"],
                  ["Verarbeitetes Fleisch", "Reduzieren", "Pro-entzündlich"],
                ].map(([lebensmittel, empfehlung, grund]) => (
                  <tr key={lebensmittel} className="border-t border-outline-variant/10">
                    <td className="p-4 text-on-surface font-medium">{lebensmittel}</td>
                    <td className="p-4 text-on-surface-variant">{empfehlung}</td>
                    <td className="p-4 text-on-surface-variant">{grund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">Häufige Fragen zur Hashimoto-Ernährung</h2>
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
              { href: "/hashimoto/ursachen", label: "Hashimoto Ursachen", desc: "Warum das Immunsystem die Schilddrüse angreift" },
              { href: "/fragen/selen-hashimoto-dosierung", label: "Selen bei Hashimoto", desc: "Richtige Dosierung und worauf zu achten ist" },
              { href: "/fragen/hashimoto-schub-symptome", label: "Hashimoto-Schub", desc: "Symptome erkennen und was hilft" },
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
