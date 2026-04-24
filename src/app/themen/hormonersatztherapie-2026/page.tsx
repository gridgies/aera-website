import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/themen/hormonersatztherapie-2026`;

export const metadata: Metadata = {
  title: "Hormonersatztherapie 2026: Was hat sich geändert – und für wen ist HRT sinnvoll?",
  description:
    "Die FDA entfernte 2025 den Schwarzen-Kasten-Warnhinweis von HRT. Was bedeutet das? Für wen ist Hormonersatztherapie sinnvoll, was sind die echten Risiken – und was hat sich geändert?",
  alternates: { canonical: "/themen/hormonersatztherapie-2026" },
  openGraph: {
    title: "HRT 2026: Hormonersatztherapie – Was sich geändert hat",
    description:
      "FDA-Entscheidung 2025, bioidentische Hormone, echte Risiken: Der aktuelle Stand zur Hormonersatztherapie für Frauen in Deutschland.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Was hat die FDA 2025 bei HRT geändert?",
    answer:
      "Im November 2025 entfernte die US-amerikanische FDA den sogenannten 'Black Box Warning' (Schwarzen-Kasten-Warnhinweis) von Östrogen-Präparaten zur Behandlung von Wechseljahresbeschwerden. Dieser Warnhinweis war 2002 nach der Women's Health Initiative (WHI)-Studie eingeführt worden, die ein erhöhtes Brustkrebsrisiko zeigte – später stellte sich heraus, dass die Studie methodische Schwächen hatte und sich auf ältere Frauen mit oralen, synthetischen Hormonen bezog. Für jüngere Frauen (unter 60, unter 10 Jahren nach Menopause) mit transdermalem Östradiol und mikronisiertem Progesteron sind die Risiken nach heutigem Forschungsstand deutlich geringer als ursprünglich kommuniziert.",
  },
  {
    question: "Ist Hormonersatztherapie sicher für Frauen unter 60?",
    answer:
      "Nach aktuellem wissenschaftlichem Stand (DGGG-Leitlinie 2020, NICE-Guideline 2023, Menopause Society 2023) gilt HRT für gesunde Frauen unter 60 Jahren, die innerhalb von 10 Jahren nach der Menopause beginnen, als sicherer und wirksamer Therapieansatz. Das Brustkrebsrisiko bei transdermalem Östradiol plus mikronisiertem Progesteron ist nach neueren Daten (E3N-Kohorte, MHRA 2020) deutlich geringer als bei oralen synthetischen Gestagen-Kombinationen. Eine individuelle Nutzen-Risiko-Abwägung mit einer erfahrenen Ärztin bleibt unerlässlich.",
  },
  {
    question: "Was ist der Unterschied zwischen synthetischen und bioidentischen Hormonen?",
    answer:
      "Bioidentische Hormone (auch körperidentische Hormone) haben exakt die gleiche Molekülstruktur wie die im menschlichen Körper produzierten Hormone. Östradiol (E2) und mikronisiertes Progesteron sind bioidentisch und in zugelassenen Präparaten erhältlich (z. B. Estradot-Pflaster, Utrogest-Kapseln). Synthetische Gestagene (wie Medroxyprogesteronacetat, das in der WHI-Studie verwendet wurde) unterscheiden sich in der Struktur und zeigen ungünstigere Risikoprofile für Brustkrebs und Herz-Kreislauf. In Deutschland empfehlen die meisten Wechseljahres-Spezialistinnen heute bioidentische Kombinationen.",
  },
  {
    question: "Für wen ist HRT nicht geeignet?",
    answer:
      "Absolute Kontraindikationen für HRT sind: aktiver Brustkrebs oder Brustkrebs in der Vorgeschichte, aktiver Endometriumkarzinom, ungeklärte Vaginalblutungen, aktive tiefe Venenthrombose oder Lungenembolie, aktive Lebererkrankung, ungeklärter Schlaganfall. Relative Kontraindikationen (individuelle Abwägung notwendig): starke Migräne mit Aura, unkontrollierter Bluthochdruck, schweres Übergewicht, Rauchen über 35 Jahre. Bei Risikofaktoren kann transdermal angewendetes Östrogen sicherer sein als orale Präparate, da es den Lebererstpasseffekt umgeht.",
  },
  {
    question: "Wie lange kann man Hormonersatztherapie nehmen?",
    answer:
      "Es gibt keine universelle Zeitbegrenzung mehr. Frühere Empfehlungen (maximal 5 Jahre) gelten als überholt. Die aktuellen Leitlinien (NICE 2023, DGGG 2020) empfehlen, die HRT so lange fortzuführen, wie der individuelle Nutzen die Risiken überwiegt – und das Gespräch über Fortführung oder Absetzen jährlich zu führen. Frauen, die HRT wegen kardiovaskulären Schutzes, Osteoporoseprävention oder starker Wechseljahresbeschwerden nehmen, können laut aktuellem Konsens lange von der Therapie profitieren.",
  },
  {
    question: "Was kostet Hormonersatztherapie in Deutschland?",
    answer:
      "Verschreibungspflichtige HRT-Präparate werden in Deutschland von der gesetzlichen Krankenversicherung (GKV) in der Regel nicht erstattet, da sie als Lifestyle-Medikamente eingestuft werden. Typische Kosten: Östradiol-Pflaster (z. B. Estradot) ca. 15–25 Euro pro Monat; mikronisiertes Progesteron (Utrogest) ca. 20–35 Euro pro Monat; Östradiol-Gel (z. B. Gynokadin) ca. 15–25 Euro pro Monat. Private Krankenversicherungen erstatten HRT häufig. Die Kosten für Bluttests zur Dosisanpassung (ca. 30–80 Euro) kommen hinzu.",
  },
  {
    question: "Welche HRT-Alternativen gibt es ohne Hormone?",
    answer:
      "2023/2024 wurden in der EU neue nicht-hormonelle Medikamente gegen Hitzewallungen zugelassen, die auf einem anderen Wirkmechanismus basieren: Fezolinetant (Veoza) und Elinzanetant blockieren den Neurokinin-3-Rezeptor im Hypothalamus, der für Hitzewallungen verantwortlich ist. In Studien reduzierten sie Hitzewallungen um 60–74 %. Sie sind für Frauen geeignet, bei denen Hormone kontraindiziert sind. Pflanzliche Optionen mit Evidenz: Traubsilberkerze (Cimicifuga) für leichte bis moderate Hitzewallungen.",
  },
];

export default function Hormonersatztherapie2026Page() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Themen", url: `${BASE_URL}/themen` },
    { name: "Hormonersatztherapie 2026", url: PAGE_URL },
  ];

  const hrtTypes = [
    {
      name: "Transdermales Östradiol",
      form: "Pflaster, Gel, Spray",
      vorteil: "Umgeht Leber (kein Thromboserisiko), gleichmäßige Resorption",
      beispiel: "Estradot, Gynokadin, Lenzetto",
    },
    {
      name: "Orales Östradiol",
      form: "Tabletten",
      vorteil: "Einfache Anwendung, gut dosierbar",
      beispiel: "Estradiol-Tabletten (verschiedene)",
    },
    {
      name: "Mikronisiertes Progesteron",
      form: "Kapseln, Gel",
      vorteil: "Bioidentisch, günstigeres Brustkrebsprofil als synthetische Gestagene",
      beispiel: "Utrogest, Progestogel",
    },
    {
      name: "Kombinationspflaster",
      form: "Transdermal",
      vorteil: "Kombiniert Östrogen + Gestagen, kein Schlucken nötig",
      beispiel: "Estragest, Klimara Pro",
    },
    {
      name: "Lokale Östrogene",
      form: "Vaginalcreme, -ring, -tablette",
      vorteil: "Wirkt nur lokal (Scheidentrockenheit, Blasenbeschwerden), kein systemisches Risiko",
      beispiel: "Oekolp, Vagifem",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "Hormonersatztherapie 2026: Was hat sich geändert – und für wen ist HRT sinnvoll?",
        description: "FDA Black Box Removal 2025, bioidentische Hormone, aktuelle Risikobewertung: Der Stand der HRT-Forschung für Frauen in Deutschland.",
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
          <span className="text-on-surface">Hormonersatztherapie 2026</span>
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
            Hormontherapie · Aktuell 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Hormonersatztherapie 2026: Was hat sich geändert – und für wen ist HRT sinnvoll?
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            2025 hat die FDA den jahrzehntelangen Schwarzen-Kasten-Warnhinweis von HRT entfernt. Was bedeutet das – und was sagt die aktuelle Forschung wirklich über Nutzen und Risiken?
          </p>
        </header>

        {/* News hook */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-16">
          <div className="flex gap-3 items-start">
            <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 flex-shrink-0">campaign</span>
            <div>
              <p className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">November 2025: Wendepunkt in der HRT-Geschichte</p>
              <p className="text-amber-800 dark:text-amber-300 text-sm font-body leading-relaxed">
                Die US-amerikanische Arzneimittelbehörde FDA entfernte den Schwarzen-Kasten-Warnhinweis von Östrogen-Präparaten gegen Wechseljahresbeschwerden – nach 23 Jahren. Der Warnhinweis war 2002 nach der umstrittenen Women's Health Initiative (WHI)-Studie eingeführt worden. Die aktuelle Entscheidung spiegelt den wissenschaftlichen Konsens wider, dass die WHI-Daten nicht auf alle Frauen übertragbar waren. In Deutschland und Europa ist HRT-Verschreibung bereits seit Jahren liberaler – diese Entscheidung beschleunigt nun auch hierzulande die öffentliche Neubewertung.
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
              HRT ist für gesunde Frauen unter 60 Jahren (innerhalb von 10 Jahren nach Menopausebeginn) nach heutigem Wissensstand sicher und wirksam
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Transdermales Östradiol + mikronisiertes Progesteron (bioidentisch) hat das günstigste Risikoprofil
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Es gibt keine universelle Zeitbegrenzung mehr – Fortführung so lange wie individuell sinnvoll
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0">check_circle</span>
              Neue nicht-hormonelle Alternativen (Fezolinetant, Elinzanetant) für Frauen mit Kontraindikationen
            </li>
          </ul>
        </div>

        {/* Section 1: Warum die alte HRT-Angst falsch war */}
        <section className="mb-16" aria-labelledby="whi-heading">
          <h2 id="whi-heading" className="text-2xl font-headline font-bold mb-6">
            Die WHI-Studie: Was wirklich drin stand – und was falsch kommuniziert wurde
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              2002 erschien die Women's Health Initiative (WHI)-Studie mit dem Ergebnis, dass HRT das Brustkrebsrisiko erhöht. Presse und Medizin reagierten mit einem raschen HRT-Rückgang um 60–80 %. Was damals kaum kommuniziert wurde:
            </p>
            <ul className="space-y-2">
              <li>Die WHI-Studie verwendete <strong>orale, synthetische Hormone</strong> (konjugiertes Pferdeöstrogen + Medroxyprogesteronacetat) – nicht die heute empfohlenen bioidentischen Präparate</li>
              <li>Die Teilnehmerinnen waren im Schnitt <strong>63 Jahre alt</strong> – viele hatten die Menopause bereits weit hinter sich</li>
              <li>Der beobachtete Risikoanstieg für Brustkrebs betrug in absoluten Zahlen <strong>8 Fälle pro 10.000 Frauenjahre</strong> – vergleichbar mit dem Risiko durch täglichen Alkohol</li>
              <li>Das kardiovaskuläre Risiko war nur bei <strong>älteren Frauen</strong> erhöht; jüngere Frauen zeigten sogar einen schützenden Effekt</li>
            </ul>
            <p>
              Spätere Reanalysen (Rossouw et al., Manson et al.) und neue Langzeitstudien (E3N-Kohorte, Million Women Study re-analysis) bestätigen: Für Frauen, die in der frühen Perimenopause oder kurz nach der Menopause beginnen (das sogenannte „Timing-Fenster"), überwiegen die Vorteile deutlich.
            </p>
          </div>
        </section>

        {/* Section 2: Wofür HRT wirklich wirksam ist */}
        <section className="mb-16" aria-labelledby="wirksamkeit-heading">
          <h2 id="wirksamkeit-heading" className="text-2xl font-headline font-bold mb-6">
            Wofür HRT wirklich wirksam ist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "local_fire_department",
                titel: "Hitzewallungen & Nachtschweiss",
                evidenz: "Sehr hoch",
                beschreibung: "HRT ist die wirksamste Behandlung von Hitzewallungen – Reduktion um 75–90 % in Studien.",
              },
              {
                icon: "bedtime",
                titel: "Schlafstörungen",
                evidenz: "Hoch",
                beschreibung: "Verbesserung der Schlafqualität durch Reduktion von nächtlichem Schweißausbrüchen und direkte Östrogenwirkung auf Schlafzentren.",
              },
              {
                icon: "mood",
                titel: "Stimmungsschwankungen & Depressionen",
                evidenz: "Mittel bis hoch",
                beschreibung: "Besonders in der Perimenopause wirksam. Kein Ersatz für antidepressive Therapie, aber unterstützend bei hormonbedingter Verstimmung.",
              },
              {
                icon: "favorite",
                titel: "Herzschutz (im Timing-Fenster)",
                evidenz: "Mittel",
                beschreibung: "Bei Beginn innerhalb von 10 Jahren nach Menopause zeigt Östrogen kardioprotektive Effekte. Senkt LDL, erhöht HDL.",
              },
              {
                icon: "elderly_woman",
                titel: "Osteoporose-Prävention",
                evidenz: "Sehr hoch",
                beschreibung: "Östrogen hemmt den Knochenabbau signifikant. HRT ist eine der wirksamsten Osteoporose-Präventionen bei Frauen.",
              },
              {
                icon: "spa",
                titel: "Genitourinary Syndrome (GSM)",
                evidenz: "Sehr hoch",
                beschreibung: "Scheidentrockenheit, Schmerzen beim Sex, Blasenbeschwerden: Lokale Östrogene wirken zuverlässig und ohne systemisches Risiko.",
              },
            ].map((item) => (
              <div key={item.titel} className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10">
                <div className="flex items-start gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary font-extralight">{item.icon}</span>
                  <div>
                    <p className="font-bold text-on-surface text-sm">{item.titel}</p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Evidenz: {item.evidenz}</span>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HRT types table */}
        <section className="mb-16" aria-labelledby="hrt-arten-heading">
          <h2 id="hrt-arten-heading" className="text-2xl font-headline font-bold mb-6">
            HRT-Arten im Überblick
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant/30">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-primary-container/30">
                  <th className="text-left p-4 font-semibold text-primary">Präparattyp</th>
                  <th className="text-left p-4 font-semibold text-primary">Form</th>
                  <th className="text-left p-4 font-semibold text-primary hidden md:table-cell">Vorteil</th>
                  <th className="text-left p-4 font-semibold text-primary hidden lg:table-cell">Beispiel (DE)</th>
                </tr>
              </thead>
              <tbody>
                {hrtTypes.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                    <td className="p-4 font-semibold text-on-surface">{row.name}</td>
                    <td className="p-4 text-on-surface-variant">{row.form}</td>
                    <td className="p-4 text-on-surface-variant hidden md:table-cell">{row.vorteil}</td>
                    <td className="p-4 text-on-surface-variant hidden lg:table-cell">{row.beispiel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-on-surface-variant font-body mt-3">
            Quelle: DGGG-Leitlinie 2020; Menopause Society 2023; NICE Menopause Guideline 2023.
          </p>
        </section>

        {/* Risks realistically */}
        <section className="mb-16" aria-labelledby="risiken-heading">
          <h2 id="risiken-heading" className="text-2xl font-headline font-bold mb-6">
            Risiken realistisch einschätzen
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              HRT ist nicht risikofrei – aber die Risiken wurden lange überbewertet und gelten nicht für alle Präparattypen gleichermaßen:
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {[
              {
                risiko: "Brustkrebs",
                einschraenkung: "Nur bei synthetischen Gestagenen (Medroxyprogesteronacetat) erhöht; mikronisiertes Progesteron zeigt in der E3N-Kohorte kein erhöhtes Risiko bis 5 Jahre Einnahme.",
                farbe: "amber",
              },
              {
                risiko: "Thrombose / Lungenembolie",
                einschraenkung: "Nur bei oraler Einnahme. Transdermales Östrogen (Pflaster, Gel) hat kein erhöhtes Thromboserisiko – weil es den Lebererstpasseffekt umgeht.",
                farbe: "amber",
              },
              {
                risiko: "Schlaganfall",
                einschraenkung: "Minimales Risiko bei transdermaler Anwendung. Erhöhtes Risiko nur bei oralen Präparaten in höherer Dosierung.",
                farbe: "amber",
              },
              {
                risiko: "Herz-Kreislauf",
                einschraenkung: "Bei Start im Timing-Fenster (innerhalb 10 Jahre nach Menopause) kein Risiko; möglicher Schutz. Risiko nur bei Beginn nach dem 60. Lebensjahr.",
                farbe: "green",
              },
            ].map((item) => (
              <div key={item.risiko} className={`rounded-xl p-5 border ${item.farbe === "amber" ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800" : "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"}`}>
                <p className={`font-bold text-sm mb-1 ${item.farbe === "amber" ? "text-amber-900 dark:text-amber-200" : "text-emerald-900 dark:text-emerald-200"}`}>
                  {item.risiko}
                </p>
                <p className={`text-xs font-body leading-relaxed ${item.farbe === "amber" ? "text-amber-800 dark:text-amber-300" : "text-emerald-800 dark:text-emerald-300"}`}>
                  {item.einschraenkung}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-headline font-bold mb-8">
            Häufige Fragen zur Hormonersatztherapie
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
              { href: "/menopause", label: "Menopause & Perimenopause", desc: "Alle Symptome und der vollständige Übergangsguide" },
              { href: "/menopause/hitzewallungen", label: "Hitzewallungen", desc: "Ursachen, Dauer und was wirklich hilft" },
              { href: "/menopause/schlafstoerungen", label: "Schlafstörungen in den Wechseljahren", desc: "Warum Frauen schlechter schlafen – und was hilft" },
              { href: "/fragen/hormonersatztherapie-vor-und-nachteile", label: "HRT Vor- und Nachteile", desc: "Detaillierter Vergleich aller Aspekte" },
              { href: "/fragen/oestrogen-natuerlich-erhoehen", label: "Östrogen natürlich erhöhen", desc: "Was funktioniert ohne Medikamente?" },
              { href: "/themen/darm-und-hormone", label: "Darm und Hormone", desc: "Warum das Mikrobiom deine Hormone beeinflusst" },
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
            Unsicher, ob HRT für dich sinnvoll ist?
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
            Mach unseren Symptom-Check und erfahre, welche Beschwerden du hast – als Vorbereitung auf das Gespräch mit deiner Ärztin.
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
