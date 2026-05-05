import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, articleSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/blog/mai-2026`;
const DATE_PUBLISHED = "2026-05-05";

export const metadata: Metadata = {
  title: "Was sich gerade in der Frauengesundheit verändert – Mai 2026",
  description:
    "HRT-Revolution, Menstruationsgesundheits-Monat, Femtech-Boom und Menopause als Gehirnfrage: Der Aera Health Newsletter für Mai 2026.",
  alternates: { canonical: "/blog/mai-2026" },
  openGraph: {
    title: "Frauengesundheit Mai 2026 – Was sich gerade verändert | Aera Health Blog",
    description:
      "FDA entfernt HRT-Warnhinweis, Femtech-Boom, Menopause und Alzheimer-Risiko: Die wichtigsten Entwicklungen im Mai 2026.",
    url: PAGE_URL,
  },
};

const breadcrumbs = [
  { name: "Startseite", url: BASE_URL },
  { name: "Blog", url: `${BASE_URL}/blog` },
  { name: "Mai 2026", url: PAGE_URL },
];

const highlights = [
  "FDA entfernt 23-jährigen HRT-Warnhinweis — was das für dich bedeutet",
  "Menstruationsgesundheits-Monat: Schmerz ist nicht normal",
  "Femtech-Investitionen auf Rekordhoch — neue Technologien für Frauen",
  "Menopause und Alzheimer: der wissenschaftliche Zusammenhang",
];

const topics = [
  {
    id: "hrt",
    icon: "medication",
    label: "Hormontherapie",
    color: "amber",
  },
  {
    id: "menstruation",
    icon: "water_drop",
    label: "Menstruationsgesundheit",
    color: "rose",
  },
  {
    id: "femtech",
    icon: "devices",
    label: "Femtech",
    color: "primary",
  },
  {
    id: "gehirn",
    icon: "psychology",
    label: "Gehirngesundheit",
    color: "primary",
  },
];

export default function BlogMai2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          articleSchema({
            headline: "Was sich gerade in der Frauengesundheit verändert – Mai 2026",
            description:
              "HRT-Revolution, Menstruationsgesundheits-Monat, Femtech-Boom und Menopause als Gehirnfrage: Der Aera Health Newsletter für Mai 2026.",
            url: PAGE_URL,
            datePublished: DATE_PUBLISHED,
          })
        )}
      />

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav
          className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Startseite
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-on-surface">Mai 2026</span>
        </nav>

        {/* Medical disclaimer */}
        <aside className="bg-surface-container-low rounded-xl p-4 mb-10 border border-outline-variant/10 text-xs text-on-surface-variant font-body flex gap-3 items-start">
          <span className="material-symbols-outlined text-base font-extralight flex-shrink-0 mt-0.5">
            info
          </span>
          <span>
            Dieser Artikel dient nur zu Informationszwecken und ersetzt keine ärztliche
            Beratung. Redaktionell geprüft von der Aera Health Redaktion ·{" "}
            {new Date(DATE_PUBLISHED).toLocaleDateString("de-DE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            .
          </span>
        </aside>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase">
              Monatlicher Überblick · Mai 2026
            </span>
            <span className="text-xs text-on-surface-variant font-body">7 Min. Lesezeit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Was sich gerade in der Frauengesundheit verändert
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
            Jeden Monat fassen wir zusammen, was die Debatte bewegt: neue Forschung,
            regulatorische Wendepunkte und Trends, die dich betreffen.
          </p>
        </header>

        {/* Topic tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {topics.map((t) => (
            <span
              key={t.id}
              className="flex items-center gap-1.5 text-xs font-semibold font-body bg-surface-container px-3 py-1.5 rounded-full text-on-surface-variant border border-outline-variant/10"
            >
              <span className="material-symbols-outlined text-sm font-extralight text-primary">
                {t.icon}
              </span>
              {t.label}
            </span>
          ))}
        </div>

        {/* Summary box */}
        <div className="bg-primary-container rounded-2xl p-8 mb-16 speakable">
          <h2 className="text-lg font-bold text-on-primary-container mb-4">
            Das Wichtigste in dieser Ausgabe
          </h2>
          <ul className="space-y-2 text-on-primary-container/80 text-sm font-body">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="material-symbols-outlined text-sm font-extralight flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1: HRT */}
        <section className="mb-16" id="hrt" aria-labelledby="hrt-heading">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
            <div className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 flex-shrink-0">
                campaign
              </span>
              <div>
                <p className="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1">
                  Februar 2026: Historischer Wendepunkt
                </p>
                <p className="text-amber-800 dark:text-amber-300 text-sm font-body leading-relaxed">
                  Die FDA entfernte den schwarzen Warnhinweis von sechs
                  Hormontherapie-Präparaten — nach 23 Jahren.
                </p>
              </div>
            </div>
          </div>

          <h2
            id="hrt-heading"
            className="text-2xl font-headline font-bold mb-6"
          >
            Die stille Revolution: Was der FDA-Entscheid bei HRT wirklich bedeutet
          </h2>

          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Im Februar 2026 hat die US-amerikanische FDA etwas getan, das Millionen Frauen
              weltweit betrifft: Sie entfernte den sogenannten „Black Box Warning" von sechs
              Hormontherapie-Präparaten (HRT). Dieser Warnhinweis hatte 23 Jahre lang — seit
              der kontroversen Women&apos;s Health Initiative (WHI)-Studie von 2002 — dafür
              gesorgt, dass HRT als gefährlich galt und die Verschreibungsraten um bis zu 80 %
              einbrachen.
            </p>
            <p>
              Was steht heute fest? Transdermales Östradiol plus mikronisiertes Progesteron
              (bioidentisch), begonnen innerhalb von 10 Jahren nach der Menopause, kann das
              Herzerkrankungsrisiko um bis zu{" "}
              <strong>50 % senken</strong>, das Alzheimer-Risiko um{" "}
              <strong>35 % reduzieren</strong> und das Frakturrisiko um bis zu{" "}
              <strong>60 % verringern</strong>. Und das Brustkrebsrisiko — der ursprüngliche
              Auslöser der Panik — gilt bei dieser Kombination nach aktuellen Daten als nicht
              erhöht.
            </p>
            <p>
              Trotzdem: Nur rund 2 Millionen von 41 Millionen infrage kommenden US-Frauen
              erhalten derzeit eine HRT-Verschreibung. Das ist nicht nur eine medizinische
              Lücke — es ist ein generationelles Versagen der Kommunikation. In Deutschland
              kämpfen Frauen zusätzlich damit, dass die gesetzliche Krankenversicherung HRT
              in der Regel nicht erstattet.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { zahl: "−50 %", label: "Herzerkrankungsrisiko bei frühzeitiger HRT" },
              { zahl: "−35 %", label: "Alzheimer-Risiko bei Beginn im Timing-Fenster" },
              { zahl: "−60 %", label: "Frakturrisiko durch Osteoporose-Prävention" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10 text-center"
              >
                <p className="text-3xl font-headline font-bold text-primary mb-2">
                  {item.zahl}
                </p>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/themen/hormonersatztherapie-2026"
              className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
            >
              <span className="material-symbols-outlined text-base">arrow_forward</span>
              Vollständiger Artikel: HRT 2026 — Was sich geändert hat
            </Link>
          </div>
        </section>

        {/* Section 2: Menstrual Health */}
        <section className="mb-16" id="menstruation" aria-labelledby="menstruation-heading">
          <h2
            id="menstruation-heading"
            className="text-2xl font-headline font-bold mb-6"
          >
            Mai ist Menstruationsgesundheits-Monat — mit einem unbequemen Thema
          </h2>

          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Das diesjährige Motto des{" "}
              <em>Menstrual Health Awareness Month</em> lautet:{" "}
              <strong>„Was normalisiert wurde, ist nicht normal."</strong>
            </p>
            <p>
              Gemeint sind Symptome wie starke Krämpfe, die Frauen arbeitsunfähig machen,
              exzessiv starke Blutungen, die zu Erschöpfung und Eisenmangel führen, oder
              chronische Beckenschmerzen — Beschwerden, die jahrzehntelang als „eben so"
              abgetan wurden. Hinter diesen Symptomen stecken häufig behandelbare
              Erkrankungen wie Endometriose, Myome oder Adenomyose.
            </p>
            <p>
              In Deutschland dauert es im Schnitt{" "}
              <strong>7–10 Jahre</strong>, bis Endometriose diagnostiziert wird. Das ist kein
              medizinisches Versagen allein — es ist auch ein kulturelles Problem: Schmerz
              bei Frauen wird zu selten ernst genommen. Die Kampagne setzt genau hier an und
              fordert, dass Frauen aufhören, Schmerzen als unvermeidlich hinzunehmen — und
              stattdessen nach Antworten fragen.
            </p>
          </div>

          <div className="mt-8 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-on-surface/40 mb-4">
              Wann solltest du zur Ärztin?
            </p>
            <ul className="space-y-3">
              {[
                "Regelschmerzen, die dich arbeits- oder schulfähig machen",
                "Blutungen stärker als gewöhnlich oder länger als 7 Tage",
                "Beckenschmerzen auch außerhalb der Periode",
                "Schmerzen beim Geschlechtsverkehr",
                "Blähungen oder Verdauungsprobleme, die mit dem Zyklus zusammenhängen",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-on-surface-variant font-body">
                  <span className="material-symbols-outlined text-primary text-sm font-extralight flex-shrink-0 mt-0.5">
                    priority_high
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Femtech */}
        <section className="mb-16" id="femtech" aria-labelledby="femtech-heading">
          <h2
            id="femtech-heading"
            className="text-2xl font-headline font-bold mb-6"
          >
            Femtech: Der Sprung von passivem Tracking zur aktiven Diagnostik
          </h2>

          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Der Femtech-Markt wächst rasant. Allein im{" "}
              <strong>März 2026 wurden weltweit 72 Millionen US-Dollar</strong> in
              Frauengesundheits-Startups investiert. Das Vereinigte Königreich hat zusätzlich
              einen staatlichen Fonds von 1,5 Millionen Pfund für Femtech-Innovation
              gestartet. Analysten erwarten, dass der Markt bis 2034 auf{" "}
              <strong>130 Milliarden US-Dollar</strong> anwächst.
            </p>
            <p>
              Was ist neu? Die Branche verschiebt sich fundamental: vom reaktiven Tracking
              (wann kommt meine nächste Periode?) hin zur proaktiven Diagnostik. Zwei
              Entwicklungen stechen im Mai 2026 besonders heraus:
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 flex gap-4">
              <span className="material-symbols-outlined text-primary font-extralight flex-shrink-0 text-2xl">
                watch
              </span>
              <div>
                <p className="font-bold text-on-surface text-sm mb-2">
                  Peri — das erste Wearable für die Perimenopause
                </p>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                  Am 2. April 2026 hat <em>Peri</em> das erste Wearable speziell für die
                  Perimenopause auf den Markt gebracht. Es misst kontinuierlich Biomarker,
                  die Hormonschwankungen sichtbar machen — noch bevor Symptome auftreten.
                  Das ermöglicht objektive Daten statt subjektiver Selbsteinschätzung.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 flex gap-4">
              <span className="material-symbols-outlined text-primary font-extralight flex-shrink-0 text-2xl">
                biotech
              </span>
              <div>
                <p className="font-bold text-on-surface text-sm mb-2">
                  Menstruationsprodukte als Diagnoseplattform
                </p>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                  Binden und Tampons werden zu „datengestützten Gesundheitspunkten"
                  weiterentwickelt — sie könnten bald Biomarker messen, die auf Myome,
                  Anämie und Endometriose hindeuten. Eine noch frühe, aber vielversprechende
                  Entwicklung an der Grenze von Femtech und Diagnostik.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 flex gap-4">
              <span className="material-symbols-outlined text-primary font-extralight flex-shrink-0 text-2xl">
                smart_toy
              </span>
              <div>
                <p className="font-bold text-on-surface text-sm mb-2">
                  MIT startet Female Medicine through Machine Learning (FMML)
                </p>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                  Das MIT hat eine Initiative gestartet, um KI gezielt für die Erkennung
                  frauenspezifischer Erkrankungen zu entwickeln. Frauen sind in KI-Medizin-
                  Datensätzen systematisch unterrepräsentiert — das soll sich ändern.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Brain health */}
        <section className="mb-16" id="gehirn" aria-labelledby="gehirn-heading">
          <h2
            id="gehirn-heading"
            className="text-2xl font-headline font-bold mb-6"
          >
            Menopause ist eine Gehirnfrage — und das wird endlich anerkannt
          </h2>

          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Einer der wichtigsten Paradigmenwechsel in 2026: Menopause wird nicht mehr
              nur als reproduktiver Übergang verstanden, sondern als{" "}
              <strong>neurologisches Ereignis</strong>. Das Gehirn ist ein
              östrogenabhängiges Organ — wenn der Spiegel sinkt, verändern sich
              Energieproduktion, Entzündungsregulation und neuronale Plastizität.
            </p>
            <p>
              Die Zahlen sind bemerkenswert:{" "}
              <strong>Zwei Drittel aller Alzheimer-Erkrankten sind Frauen</strong>.
              Forschende sehen einen direkten Zusammenhang mit dem Östrogenabfall in der
              Menopause — und aktuelle Studien zeigen, dass HRT, innerhalb von 5 Jahren
              nach Menopausebeginn gestartet, das Alzheimer-Risiko um bis zu 30 % senken
              kann.
            </p>
            <p>
              Das gibt dieser Debatte eine neue Dringlichkeit: Wer Menopause-Versorgung
              verbessert, betreibt gleichzeitig Demenz-Prävention. Pivotal Ventures und
              Wellcome Leap haben 100 Millionen US-Dollar für Frauengesundheitsforschung
              zugesagt — ein Zeichen, dass diese Verbindung auch auf Investorenebene
              angekommen ist.
            </p>
          </div>

          <div className="mt-8 bg-primary-container rounded-2xl p-6 speakable">
            <p className="font-bold text-on-primary-container mb-3 text-sm">
              Was das für dich bedeutet
            </p>
            <p className="text-sm text-on-primary-container/80 font-body leading-relaxed">
              Perimenopause-Symptome sind nicht nur lästig — sie können frühe Signale einer
              neurologischen Veränderung sein. Das ist kein Grund zur Panik, aber ein guter
              Grund, sie ernst zu nehmen und frühzeitig mit einer Ärztin zu besprechen.
            </p>
          </div>
        </section>

        {/* Editorial outro */}
        <section
          className="mb-16 border-t border-outline-variant/20 pt-12"
          aria-labelledby="fazit-heading"
        >
          <h2 id="fazit-heading" className="text-2xl font-headline font-bold mb-6">
            Was wir daraus lernen
          </h2>
          <div className="prose prose-sm max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
            <p>
              Frauengesundheit ist kein Nischenthema mehr — weder wissenschaftlich noch
              wirtschaftlich noch politisch. Was sich gerade verändert, ist fundamental:
              Das medizinische System beginnt, Frauen als primäre Zielgruppe zu behandeln
              und nicht als Sonderfall des männlichen Standardpatienten.
            </p>
            <p>
              Gleichzeitig gibt es erhebliche Lücken: Zwischen dem, was die Forschung
              weiß, und dem, was Frauen tatsächlich an Versorgung erhalten, klafft eine
              enorme Lücke. Diese Lücke zu schließen — durch Information, bessere Tools
              und den Zugang zu passenden Spezialistinnen — ist der Kern dessen, woran
              wir bei Aera arbeiten.
            </p>
            <p>
              Monat für Monat wollen wir dich auf dem Stand halten, weil du das Recht
              hast, informiert zu sein.
            </p>
          </div>
          <p className="mt-8 text-sm font-body text-on-surface-variant">
            Bis nächsten Monat,<br />
            <strong className="text-on-surface">Das Aera Health Team</strong>
          </p>
        </section>

        {/* Related articles */}
        <section className="mb-16" aria-labelledby="verwandt-heading">
          <h2 id="verwandt-heading" className="text-xl font-headline font-bold mb-6">
            Verwandte Themen
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/themen/hormonersatztherapie-2026",
                label: "Hormonersatztherapie 2026",
                desc: "Was sich durch den FDA-Entscheid geändert hat — und was das für dich bedeutet",
              },
              {
                href: "/themen/glp1-pcos-wechseljahre",
                label: "GLP-1, PCOS & Wechseljahre",
                desc: "Die neuen Abnehmmittel und ihr Einfluss auf Frauengesundheit",
              },
              {
                href: "/themen/darm-und-hormone",
                label: "Darm und Hormone",
                desc: "Warum das Mikrobiom deinen Hormonspiegel beeinflusst",
              },
              {
                href: "/check",
                label: "Symptom-Check starten",
                desc: "Finde heraus, welche Hormonsignale dein Körper dir sendet",
              },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="block bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-on-surface text-sm mb-1">{label}</p>
                <p className="text-xs text-on-surface-variant">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-headline font-bold text-on-primary mb-4">
            Jeden Monat direkt in dein Postfach
          </h2>
          <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
            Trag dich auf die Warteliste ein und erhalte unseren monatlichen Newsletter
            zur Frauengesundheit — kostenlos, ohne Werbung.
          </p>
          <Link
            href="/check"
            className="inline-flex items-center gap-2 bg-on-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container transition-colors"
          >
            Warteliste beitreten
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>
      </article>
    </>
  );
}
