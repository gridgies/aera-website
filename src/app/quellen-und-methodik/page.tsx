import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";

export const metadata: Metadata = {
  title: "Quellen & Methodik – So entstehen unsere Inhalte",
  description:
    "Wie Aera Health Gesundheitsinhalte erstellt: medizinische Quellen, Leitlinien, Redaktionsprozess und wissenschaftliche Standards für Menopause, Hashimoto und Hormonstörungen.",
  alternates: { canonical: "/quellen-und-methodik" },
  openGraph: {
    title: "Quellen & Methodik – Aera Health",
    description:
      "Transparenz über unsere medizinischen Quellen, redaktionellen Standards und wissenschaftliche Methodik.",
    url: `${BASE_URL}/quellen-und-methodik`,
  },
};

const breadcrumbs = [
  { name: "Startseite", url: BASE_URL },
  { name: "Quellen & Methodik", url: `${BASE_URL}/quellen-und-methodik` },
];

const SOURCES = [
  {
    category: "Medizinische Leitlinien",
    icon: "policy",
    items: [
      {
        name: "AWMF – Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften",
        description: "Deutsche medizinische Leitlinien-Datenbank. Maßgeblich für klinische Standards zu Menopause, Schilddrüsenerkrankungen und Autoimmunerkrankungen.",
        url: "https://www.awmf.org",
      },
      {
        name: "DGGG – Deutsche Gesellschaft für Gynäkologie und Geburtshilfe",
        description: "Leitlinien zur Hormontherapie (HRT) in den Wechseljahren, S3-Leitlinie Peri- und Postmenopause (2020).",
        url: "https://www.dggg.de",
      },
      {
        name: "DGE – Deutsche Gesellschaft für Endokrinologie",
        description: "Fachgesellschaft für Schilddrüsenerkrankungen, Hashimoto und hormonelle Störungen.",
        url: "https://www.endokrinologie.net",
      },
      {
        name: "ACOG – American College of Obstetricians and Gynecologists",
        description: "Internationale Leitlinien zu PMS/PMDD-Diagnostik und Lutealphase-Defizit.",
        url: "https://www.acog.org",
      },
    ],
  },
  {
    category: "Wissenschaftliche Datenbanken",
    icon: "science",
    items: [
      {
        name: "PubMed / MEDLINE",
        description: "Primäre Quelle für peer-reviewte medizinische Studien zu allen auf Aera Health behandelten Themen.",
        url: "https://pubmed.ncbi.nlm.nih.gov",
      },
      {
        name: "Cochrane Library",
        description: "Systematische Reviews und Meta-Analysen – genutzt für Bewertungen von Interventionen (z.B. Selen bei Hashimoto, Phytoöstrogene bei Menopause).",
        url: "https://www.cochranelibrary.com",
      },
      {
        name: "The Lancet, BMJ, JAMA",
        description: "Hochrangige internationale Fachzeitschriften für klinische Studien und Übersichtsarbeiten.",
        url: "https://www.thelancet.com",
      },
    ],
  },
  {
    category: "Standardisierte Diagnostiktools",
    icon: "analytics",
    items: [
      {
        name: "MENQOL – Menopause-Specific Quality of Life Questionnaire",
        description: "Validierter klinischer Fragebogen (Hilditch et al.) zur Erfassung menopausaler Symptome. Grundlage des Perimenopause-Clusters im Symptom-Check.",
        url: "https://pubmed.ncbi.nlm.nih.gov/8624666/",
      },
      {
        name: "STRAW+10 – Staging of Reproductive Aging Workshop",
        description: "Internationales Staging-System für reproduktives Altern; genutzt zur Einordnung von Perimenopause-Phasen.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22154873/",
      },
      {
        name: "Zulewski-Score / Billewicz-Score",
        description: "Klinische Scores zur Einschätzung von Hypothyreose-Wahrscheinlichkeit; Grundlage des Hashimoto/Schilddrüsen-Clusters.",
        url: "https://pubmed.ncbi.nlm.nih.gov/9414063/",
      },
      {
        name: "HPA-Achsen-Forschung (Sapolsky, Guilliams & Edwards)",
        description: "Grundlagenforschung zur Hypothalamus-Hypophysen-Nebennieren-Achse und chronischem Stress; Grundlage des Cortisol-Dysbalance-Clusters.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25356922/",
      },
    ],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Themenauswahl nach Suchverhalten",
    description:
      "Themen werden anhand von Suchanfragen ausgewählt, die zeigen, wo Frauen konkrete Fragen stellen und aktuell keine verlässlichen Antworten finden. Ausgangspunkt sind Symptome und Diagnosen, nicht Produkte.",
  },
  {
    number: "02",
    title: "Recherche in medizinischen Primärquellen",
    description:
      "Jeder Artikel basiert auf Primärquellen: AWMF-Leitlinien, PubMed-Studien, Cochrane-Reviews. Keine Inhalte werden aus anderen Gesundheitswebseiten übernommen.",
  },
  {
    number: "03",
    title: "Einordnung nach Evidenzgrad",
    description:
      "Empfehlungen werden nach Evidenzgrad eingeordnet: stark (Meta-Analysen, RCTs), moderat (Kohortenstudien), schwach (Expertenmeinung, Fallberichte). Anekdotische Informationen werden als solche gekennzeichnet.",
  },
  {
    number: "04",
    title: "Medizinische Qualitätsprüfung",
    description:
      "Inhalte werden nach medizinischen Leitlinien auf Richtigkeit geprüft, bevor sie veröffentlicht werden. Veraltete Informationen werden bei Leitlinienänderungen aktualisiert.",
  },
  {
    number: "05",
    title: "Verständliche Sprache ohne Vereinfachung",
    description:
      "Medizinische Konzepte werden in zugänglicher Sprache erklärt, ohne klinische Präzision zu opfern. Fachbegriffe werden im Kontext erklärt.",
  },
  {
    number: "06",
    title: "Regelmäßige Aktualisierung",
    description:
      "Gesundheitsinformationen veralten. Artikel werden mit Aktualisierungsdatum versehen und bei neuen Studienergebnissen oder Leitlinienänderungen überarbeitet.",
  },
];

export default function QuellenUndMethodikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        {/* Breadcrumb */}
        <nav className="text-xs text-on-surface-variant mb-12 flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-on-surface">Quellen & Methodik</span>
        </nav>

        {/* Header */}
        <header className="mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Transparenz
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Quellen & Methodik
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl">
            Gesundheitsinformationen tragen Verantwortung. Hier erklären wir offen, wie unsere
            Inhalte entstehen, welche Quellen wir nutzen und wie wir sicherstellen, dass die
            Informationen medizinisch korrekt sind.
          </p>
        </header>

        {/* Medical disclaimer box */}
        <aside className="bg-amber-50 border border-amber-200/60 rounded-2xl p-6 mb-16 flex gap-4">
          <span className="material-symbols-outlined text-amber-700 text-xl flex-shrink-0 mt-0.5">
            info
          </span>
          <div>
            <p className="font-bold text-amber-800 text-sm mb-1">Medizinischer Hinweis</p>
            <p className="text-amber-700 text-sm font-body leading-relaxed">
              Alle Inhalte auf Aera Health dienen ausschließlich zu Informationszwecken. Sie
              ersetzen keine ärztliche Beratung, Diagnose oder Behandlung. Bei gesundheitlichen
              Beschwerden wende dich bitte an eine qualifizierte Ärztin oder einen qualifizierten Arzt.
            </p>
          </div>
        </aside>

        {/* Editorial process */}
        <section className="mb-24" aria-labelledby="prozess-heading">
          <h2 id="prozess-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
            Unser redaktioneller Prozess
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-10">
            Von der Themenauswahl bis zur Veröffentlichung folgen wir einem klar definierten Prozess.
          </p>
          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="flex gap-6 pb-10 relative">
                {/* Vertical line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-outline-variant/20" />
                )}
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 text-xs font-bold text-on-primary-container z-10">
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-bold text-on-surface text-sm mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sources by category */}
        <section className="mb-24" aria-labelledby="quellen-heading">
          <h2 id="quellen-heading" className="text-2xl font-headline font-bold text-on-surface mb-3">
            Unsere Quellen
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-10">
            Diese Institutionen, Datenbanken und Publikationen bilden die primäre Grundlage
            unserer medizinischen Inhalte.
          </p>
          <div className="space-y-12">
            {SOURCES.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary font-extralight text-xl">
                    {group.icon}
                  </span>
                  <h3 className="font-bold text-on-surface">{group.category}</h3>
                </div>
                <div className="space-y-4 pl-8">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/10"
                    >
                      <p className="font-bold text-sm text-on-surface mb-1">{item.name}</p>
                      <p className="text-xs text-on-surface-variant font-body leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline font-body"
                      >
                        {item.url.replace("https://", "")}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What we don't do */}
        <section className="mb-24 bg-surface-container rounded-3xl p-10" aria-labelledby="abgrenzung-heading">
          <h2 id="abgrenzung-heading" className="text-xl font-headline font-bold text-on-surface mb-6">
            Was Aera Health nicht ist
          </h2>
          <div className="space-y-4">
            {[
              { icon: "block", text: "Wir stellen keine Diagnosen. Unsere Inhalte helfen, Symptome einzuordnen und das Gespräch mit Ärzt:innen vorzubereiten." },
              { icon: "block", text: "Wir empfehlen keine spezifischen Produkte oder Marken. Supplement-Empfehlungen basieren auf klinischer Forschung, nicht auf Werbekooperationen." },
              { icon: "block", text: "Wir betreiben kein Affiliate-Marketing zu Heilversprechen. Aera Health verdient nichts daran, wenn du ein Supplement kaufst." },
              { icon: "block", text: "Wir ersetzen keine medizinische Behandlung. Bei ernsthaften Beschwerden ist eine ärztliche Konsultation immer der erste Schritt." },
            ].map((item) => (
              <div key={item.text} className="flex gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-error/60 font-extralight text-base flex-shrink-0 mt-0.5">
                  {item.icon}
                </span>
                <span className="font-body leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Fehler melden */}
        <section className="mb-16 border border-outline-variant/20 rounded-2xl p-8">
          <h2 className="text-lg font-headline font-bold text-on-surface mb-3">
            Fehler gefunden?
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-5">
            Medizinisches Wissen entwickelt sich weiter. Wenn du einen inhaltlichen Fehler,
            eine veraltete Information oder eine unklare Formulierung findest, melde es uns.
            Wir nehmen jede Rückmeldung ernst und korrigieren schnell.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            Feedback geben
            <span className="material-symbols-outlined text-sm font-extralight">arrow_forward</span>
          </Link>
        </section>

        {/* Related pages */}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/wissenschaft" className="px-4 py-2 bg-surface-container rounded-full text-on-surface-variant hover:text-primary transition-colors font-body">
            Wissenschaftliche Methodik
          </Link>
          <Link href="/ueber-uns" className="px-4 py-2 bg-surface-container rounded-full text-on-surface-variant hover:text-primary transition-colors font-body">
            Über Aera Health
          </Link>
          <Link href="/kontakt" className="px-4 py-2 bg-surface-container rounded-full text-on-surface-variant hover:text-primary transition-colors font-body">
            Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}
