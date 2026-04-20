import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, jsonLd } from "@/lib/schema";

const BASE_URL = "https://www.aerahealth.de";
const PAGE_URL = `${BASE_URL}/fragen/tsh-wert-tabelle`;

export const metadata: Metadata = {
  title: "TSH-Wert Tabelle für Frauen nach Alter [2026]: Normalwerte & Bedeutung",
  description:
    "TSH-Wert Tabelle für Frauen nach Alter: Welche Schilddrüsenwerte sind normal mit 30, 40, 50+? Inkl. fT3, fT4 Referenzwerte & Schwangerschaft. Jetzt Tabelle ansehen.",
  alternates: { canonical: "/fragen/tsh-wert-tabelle" },
  openGraph: {
    title: "TSH-Wert Tabelle für Frauen nach Alter: Normalwerte 2026",
    description:
      "TSH Normalwerte für Frauen nach Altersgruppe, in der Schwangerschaft und bei Hashimoto – als übersichtliche Tabelle.",
    url: PAGE_URL,
  },
};

const faqs = [
  {
    question: "Was ist ein normaler TSH-Wert bei Frauen?",
    answer:
      "Der laborübliche TSH-Normalbereich für Frauen liegt bei 0,4–4,0 mU/L (je nach Labor auch bis 4,5 mU/L). Wichtig: 'normal' im Labor bedeutet nicht automatisch 'optimal'. Viele Frauen mit Hashimoto oder Schilddrüsenunterfunktionssymptomen fühlen sich erst bei TSH 1,0–2,5 mU/L wirklich beschwerdefrei. Alter, Schwangerschaft und Grunderkrankungen beeinflussen den Zielwert erheblich.",
  },
  {
    question: "Welcher TSH-Wert ist bei Frauen ab 50 normal?",
    answer:
      "Bei Frauen ab 50 gilt ein TSH von 0,4–4,5 mU/L als laborüblicher Referenzbereich. In den Wechseljahren kann TSH leicht schwanken. Viele Spezialistinnen empfehlen für symptomatische Frauen einen Zielwert von 1,0–2,5 mU/L. Bei Müdigkeit oder Gewichtszunahme trotz 'normalem' TSH sollten fT3, fT4 und Anti-TPO bestimmt werden.",
  },
  {
    question: "Welcher TSH-Wert gilt für Frauen mit 60 Jahren als normal?",
    answer:
      "Mit 60 Jahren und älter ist ein TSH bis 6,0 mU/L laborüblich noch im Referenzbereich, da TSH physiologisch mit dem Alter leicht ansteigt. Das bedeutet jedoch nicht, dass höhere Werte bei Beschwerden ignoriert werden sollten. Bei Frauen ab 60 mit Müdigkeit, Kälteempfindlichkeit oder Gewichtszunahme sollte TSH zusammen mit fT3 und fT4 bewertet werden – der Zielbereich für symptomatische Frauen liegt auch im Alter bei 1,0–3,0 mU/L.",
  },
  {
    question: "Was bedeutet TSH-Referenzbereich in Deutschland 2025/2026?",
    answer:
      "In Deutschland gilt gemäß AWMF-Leitlinie (060-002) der TSH-Referenzbereich von 0,4–4,0 mU/L als Standardwert für Erwachsene. Dieser Wert ist seit Jahren unverändert – trotz wissenschaftlicher Diskussion, ob die obere Grenze auf 2,5 mU/L gesenkt werden sollte. Viele deutsche Endokrinologinnen behandeln symptomatische Patientinnen bereits ab TSH 2,5–3,0 mU/L.",
  },
  {
    question: "Kann der TSH-Wert normal sein, obwohl ich Symptome habe?",
    answer:
      "Ja. Ein TSH im Normalbereich schließt eine Schilddrüsenstörung nicht aus. Erstens kann eine T4-zu-T3-Konversionsstörung vorliegen (fT3 niedrig trotz normalem fT4 und TSH). Zweitens gilt ein TSH von z. B. 3,5 mU/L laborüblich als normal, ist aber für viele Frauen mit Hashimoto bereits zu hoch. Immer auch fT3, fT4 und Antikörper messen lassen.",
  },
  {
    question: "Was bedeutet ein TSH-Wert von 3,5 mU/L?",
    answer:
      "Ein TSH von 3,5 mU/L liegt innerhalb des Labornormalbereichs (0,4–4,0 mU/L). Ohne Beschwerden ist das für viele Frauen unproblematisch. Bei gleichzeitigen Hashimoto-Symptomen (Müdigkeit, Frieren, Verstopfung) kann schon dieser Wert eine subklinische Hypothyreose anzeigen. fT3, fT4 und Anti-TPO bestimmen lassen und ggf. einen Therapieversuch mit L-Thyroxin besprechen.",
  },
  {
    question: "Was bedeutet ein zu niedriger TSH-Wert?",
    answer:
      "Ein TSH unter 0,4 mU/L deutet auf eine Überfunktion (Hyperthyreose) oder eine Überdosierung von L-Thyroxin hin. Die Hypophyse schüttet weniger TSH aus, weil bereits zu viel Schilddrüsenhormon im Blut ist. Symptome: Herzrasen, Zittern, Schlafstörungen, Gewichtsverlust, Schwitzen. Ursachen: M. Basedow, autonome Adenome, zu hohe L-Thyroxin-Dosis.",
  },
  {
    question: "Was bedeutet ein zu hoher TSH-Wert?",
    answer:
      "Ein TSH über 4,0 mU/L (je nach Labor bis 4,5 mU/L) weist auf eine Schilddrüsenunterfunktion hin. Die Hypophyse treibt die Schilddrüse stärker an, weil zu wenig Hormon produziert wird. Werte über 10 mU/L gelten als manifeste Hypothyreose. Typische Symptome: Müdigkeit, Frieren, Gewichtszunahme, Verstopfung, Haarausfall, trockene Haut. Ursache ist häufig Hashimoto.",
  },
  {
    question: "Wie oft sollte ich meine Schilddrüsenwerte kontrollieren lassen?",
    answer:
      "Bei bekannter Schilddrüsenerkrankung oder Hashimoto: alle 6–12 Monate. Nach Dosisanpassung von L-Thyroxin: 6–8 Wochen später. In der Schwangerschaft: alle 4–6 Wochen je nach Trimester. Bei bisher unauffälligem Befund ohne Symptome: jährlich.",
  },
  {
    question: "Welcher TSH-Wert gilt in der Schwangerschaft als zu hoch?",
    answer:
      "Im 1. Trimester gilt TSH über 2,5 mU/L als behandlungsbedürftig. Viele Fachgesellschaften empfehlen einen Zielwert unter 2,0 mU/L. Im 2. und 3. Trimester liegt die Grenze bei 3,0–3,5 mU/L. Der L-Thyroxin-Bedarf steigt in der Schwangerschaft um 25–50 % an – regelmäßige Kontrollen sind essenziell.",
  },
  {
    question: "Was ist der Unterschied zwischen TSH und fT3/fT4?",
    answer:
      "TSH (Thyreoidea-stimulierendes Hormon) ist ein Steuerhormon der Hypophyse – es zeigt an, wie stark die Schilddrüse angetrieben wird. fT4 (freies Thyroxin) ist das von der Schilddrüse produzierte Vorläuferhormon. fT3 (freies Trijodthyronin) ist das aktiv wirksame Schilddrüsenhormon, das in Körperzellen aus T4 umgewandelt wird. TSH ist der beste Screeningwert; fT3 und fT4 geben Aufschluss über die tatsächliche Hormonversorgung.",
  },
];

const ageTable = [
  { alter: "18–30 Jahre", normal: "0,4–4,0 mU/L", optimal: "1,0–2,5 mU/L", hinweis: "Bei Kinderwunsch: Ziel < 2,5" },
  { alter: "30–40 Jahre", normal: "0,4–4,0 mU/L", optimal: "1,0–2,5 mU/L", hinweis: "Hashimoto-Screening sinnvoll" },
  { alter: "40–50 Jahre", normal: "0,4–4,5 mU/L", optimal: "1,0–2,5 mU/L", hinweis: "Perimenopause kann TSH beeinflussen" },
  { alter: "50–60 Jahre", normal: "0,4–5,0 mU/L", optimal: "1,0–3,0 mU/L", hinweis: "Wechseljahre beachten" },
  { alter: "60+ Jahre", normal: "0,4–6,0 mU/L", optimal: "1,0–3,5 mU/L", hinweis: "Höhere Werte physiologisch häufiger" },
];

const pregnancyTable = [
  { trimester: "1. Trimester", ziel: "< 2,0 mU/L", grenze: "< 2,5 mU/L", hinweis: "Kritischste Phase – sofort behandeln wenn erhöht" },
  { trimester: "2. Trimester", ziel: "< 2,5 mU/L", grenze: "< 3,0 mU/L", hinweis: "L-Thyroxin-Bedarf steigt um 25–50 %" },
  { trimester: "3. Trimester", ziel: "< 3,0 mU/L", grenze: "< 3,5 mU/L", hinweis: "Regelmäßige Kontrolle alle 4–6 Wochen" },
];

const vollstaendigeTabelle = [
  { wert: "TSH", normbereich: "0,4–4,0 mU/L", wasMisst: "Steuerhormon der Hypophyse; wichtigster Screeningwert" },
  { wert: "fT4 (freies Thyroxin)", normbereich: "10–23 pmol/L", wasMisst: "Vorläuferhormon der Schilddrüse; wird zu T3 umgewandelt" },
  { wert: "fT3 (freies Trijodthyronin)", normbereich: "3,5–6,5 pmol/L", wasMisst: "Aktives Schilddrüsenhormon; wichtig bei Konversionsstörung" },
  { wert: "Anti-TPO (Antikörper)", normbereich: "< 35 IU/ml", wasMisst: "Autoimmunmarker; positiv bei Hashimoto" },
  { wert: "Anti-TG (Anti-Thyreoglobulin)", normbereich: "< 115 IU/ml", wasMisst: "Weiterer Autoimmunmarker bei Hashimoto" },
  { wert: "rT3 (reverses T3)", normbereich: "Labor variabel", wasMisst: "Inaktive T3-Form; erhöht bei Stress und Erschöpfung" },
];

export default function TshWertTabellePage() {
  const today = new Date().toISOString().split("T")[0];
  const breadcrumbs = [
    { name: "Startseite", url: BASE_URL },
    { name: "Fragen", url: `${BASE_URL}/fragen` },
    { name: "TSH-Wert Tabelle", url: PAGE_URL },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(medicalWebPageSchema({
        name: "TSH-Wert Tabelle für Frauen nach Alter: Normalwerte & Bedeutung",
        description: "TSH-Wert Tabelle für Frauen nach Alter: Normalwerte mit 30, 40, 50+, in der Schwangerschaft und bei Hashimoto.",
        url: PAGE_URL,
        dateModified: today,
      }))} />

      <article className="min-h-screen">
        <div className="pt-32 pb-0 px-8 max-w-4xl mx-auto">
          <nav className="text-sm text-on-surface-variant mb-8 font-body" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/fragen" className="hover:text-primary transition-colors">Fragen</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">TSH-Wert Tabelle</span>
          </nav>

          <header className="mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Schilddrüse
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6 leading-tight">
              TSH-Wert Tabelle für Frauen nach Alter
            </h1>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-4">
              Welche TSH-Werte sind normal – mit 30, 40, 50 oder in der Schwangerschaft?
              Hier finden Sie alle Referenzbereiche auf einen Blick: nach Alter, nach Lebenssituation
              und den wichtigen Unterschied zwischen „laborüblich normal" und „optimal für Ihr Wohlbefinden".
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
            <strong className="text-on-surface">Medizinischer Hinweis:</strong> Diese Tabellen dienen der allgemeinen
            Information. Laborwerte müssen immer im Kontext Ihrer Symptome und Krankengeschichte beurteilt werden.
            Sprechen Sie auffällige Werte mit Ihrer Ärztin oder Ihrem Arzt.
          </div>

          {/* Quick answer */}
          <div className="bg-primary-container/30 rounded-2xl p-8 mb-16 border border-primary/20">
            <h2 className="text-xl font-headline font-bold text-primary mb-3">Kurze Antwort</h2>
            <p className="text-on-surface font-body text-sm leading-relaxed">
              Der laborübliche TSH-Normalbereich liegt bei <strong>0,4–4,0 mU/L</strong>. Für Frauen mit
              Hashimoto oder Unterfunktionssymptomen empfehlen viele Spezialistinnen einen Zielwert von
              <strong> 1,0–2,5 mU/L</strong>. In der Schwangerschaft gelten strengere Grenzen (
              <strong>{"< 2,5 mU/L im 1. Trimester"}</strong>). TSH steigt physiologisch mit dem Alter leicht an.
            </p>
          </div>

          {/* Age table */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              TSH-Wert Tabelle für Frauen nach Alter
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              Der TSH-Referenzbereich verschiebt sich leicht mit dem Alter. Außerdem unterscheidet sich
              der laborübliche „Normalbereich" vom klinisch <em>optimalen</em> Bereich, bei dem die
              meisten Frauen beschwerdefrei sind.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30 mb-4">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-primary-container/30">
                    <th className="text-left p-4 font-semibold text-primary">Alter</th>
                    <th className="text-left p-4 font-semibold text-primary">Normalbereich (Labor)</th>
                    <th className="text-left p-4 font-semibold text-primary">Optimal</th>
                    <th className="text-left p-4 font-semibold text-primary hidden md:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {ageTable.map((row, i) => (
                    <tr key={row.alter} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                      <td className="p-4 font-semibold text-on-surface">{row.alter}</td>
                      <td className="p-4 text-on-surface-variant">{row.normal}</td>
                      <td className="p-4 text-primary font-medium">{row.optimal}</td>
                      <td className="p-4 text-on-surface-variant hidden md:table-cell">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-on-surface-variant font-body">
              Quelle: Deutsche Gesellschaft für Endokrinologie (DGE), Leitlinie Hypothyreose (AWMF 060-002).
              Optimalwerte nach klinischer Praxis bei symptomatischen Patientinnen.
            </p>
          </section>

          {/* Hashimoto */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              TSH-Werte bei Hashimoto und Schilddrüsenunterfunktion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-surface-container rounded-xl p-5 text-center">
                <div className="text-xl font-bold text-error mb-1">{"< 0,4 mU/L"}</div>
                <div className="text-sm font-semibold text-on-surface mb-1">Zu niedrig</div>
                <div className="text-xs text-on-surface-variant">Überfunktion oder zu hoch dosiert</div>
              </div>
              <div className="bg-primary-container/40 rounded-xl p-5 text-center border-2 border-primary/30">
                <div className="text-xl font-bold text-primary mb-1">0,5–2,5 mU/L</div>
                <div className="text-sm font-semibold text-on-surface mb-1">Zielbereich</div>
                <div className="text-xs text-on-surface-variant">Optimal für Hashimoto-Patientinnen</div>
              </div>
              <div className="bg-surface-container rounded-xl p-5 text-center">
                <div className="text-xl font-bold text-tertiary mb-1">{"> 4,0 mU/L"}</div>
                <div className="text-sm font-semibold text-on-surface mb-1">Zu hoch</div>
                <div className="text-xs text-on-surface-variant">Manifeste Hypothyreose – Therapie indiziert</div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-5 text-sm text-on-surface-variant font-body">
              <strong className="text-on-surface">Wichtig:</strong> TSH allein reicht bei Hashimoto nicht.
              Immer auch fT3, fT4 und Anti-TPO bestimmen – denn eine Konversionsstörung (normales fT4, aber
              niedriges fT3) erklärt viele anhaltende Beschwerden trotz „normalem" TSH.
            </div>
          </section>

          {/* Pregnancy table */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              TSH-Werte in der Schwangerschaft
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              In der Schwangerschaft sind die TSH-Grenzwerte strenger, weil ausreichend Schilddrüsenhormon
              für die fetale Gehirnentwicklung essenziell ist. Frauen mit Hashimoto sollten ihren TSH
              idealerweise vor einer Schwangerschaft auf unter 2,5 mU/L einstellen.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30 mb-4">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-primary-container/30">
                    <th className="text-left p-4 font-semibold text-primary">Trimester</th>
                    <th className="text-left p-4 font-semibold text-primary">Zielwert</th>
                    <th className="text-left p-4 font-semibold text-primary">Grenzwert</th>
                    <th className="text-left p-4 font-semibold text-primary hidden md:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {pregnancyTable.map((row, i) => (
                    <tr key={row.trimester} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                      <td className="p-4 font-semibold text-on-surface">{row.trimester}</td>
                      <td className="p-4 text-primary font-medium">{row.ziel}</td>
                      <td className="p-4 text-on-surface-variant">{row.grenze}</td>
                      <td className="p-4 text-on-surface-variant hidden md:table-cell">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-on-surface-variant font-body">
              Quelle: American Thyroid Association Guidelines (2017); Deutsche Gesellschaft für Gynäkologie und Geburtshilfe.
            </p>
          </section>

          {/* Contested normal range */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              Warum der TSH-Normalbereich umstritten ist
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-4">
              Der klassische Referenzbereich von 0,4–4,0 mU/L wurde aus gemischten Bevölkerungsstichproben
              berechnet — die auch Personen mit unerkannten Schilddrüsenerkrankungen enthielten. Das setzt
              die obere Grenze künstlich hoch.
            </p>
            <p className="text-on-surface-variant font-body leading-relaxed mb-4">
              Mehrere Studien zeigen, dass Frauen im Bereich TSH 2,5–4,0 mU/L mit gleichzeitigen
              Hypothyreose-Symptomen von einer L-Thyroxin-Therapie profitieren können. Viele
              Endokrinologinnen behandeln deshalb symptomatische Patientinnen bereits ab TSH 2,5 mU/L —
              auch wenn das Labor den Wert noch als „normal" markiert.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-sm font-body">
              <strong className="text-amber-800 dark:text-amber-300">Fazit:</strong>{" "}
              <span className="text-amber-900 dark:text-amber-200">
                „Normal" im Labor bedeutet nicht automatisch „optimal für Sie". Wenn Ihr TSH labortechnisch
                normal ist, Sie aber typische Schilddrüsensymptome haben, lassen Sie fT3, fT4 und
                Antikörper bestimmen — und suchen Sie eine Spezialistin auf.
              </span>
            </div>
          </section>

          {/* TSH value interpretation */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              TSH-Wert interpretieren: Was bedeuten konkrete Zahlen?
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
              Viele Frauen fragen sich, was ein spezifischer TSH-Wert in ihrem Befund bedeutet. Diese Übersicht erklärt die häufigsten Werte im Kontext.
            </p>
            <div className="space-y-3">
              {[
                { wert: "< 0,1 mU/L", label: "Stark erniedrigt", farbe: "error", bedeutung: "Manifeste Überfunktion oder deutliche L-Thyroxin-Überdosierung – sofort mit Ärztin besprechen." },
                { wert: "0,1–0,4 mU/L", label: "Leicht erniedrigt", farbe: "tertiary", bedeutung: "Latente Hyperthyreose oder Überdosierung. FT3/fT4 bestimmen, Dosis ggf. anpassen." },
                { wert: "0,4–1,0 mU/L", label: "Niedrig-normal", farbe: "primary", bedeutung: "Für die meisten Frauen gut. Bei Hashimoto oft der optimale Bereich." },
                { wert: "1,0–2,5 mU/L", label: "Optimal", farbe: "primary", bedeutung: "Idealer Zielbereich für die meisten Frauen, insbesondere mit Hashimoto oder Schilddrüsenunterfunktion." },
                { wert: "2,5–4,0 mU/L", label: "Laborüblich normal", farbe: "tertiary", bedeutung: "Laborüblich unauffällig, aber bei Symptomen (Müdigkeit, Frieren) lohnt ein Therapieversuch." },
                { wert: "4,0–10,0 mU/L", label: "Erhöht", farbe: "error", bedeutung: "Subklinische bis manifeste Hypothyreose. L-Thyroxin-Therapie meist indiziert." },
                { wert: "> 10,0 mU/L", label: "Stark erhöht", farbe: "error", bedeutung: "Manifeste Hypothyreose – L-Thyroxin-Therapie dringend erforderlich." },
              ].map((row) => (
                <div key={row.wert} className="flex items-start gap-4 bg-surface-container-low rounded-xl p-4">
                  <div className="shrink-0 text-sm font-bold font-body text-on-surface w-32">{row.wert}</div>
                  <div className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full bg-${row.farbe}/10 text-${row.farbe} w-28 text-center`}>{row.label}</div>
                  <div className="text-sm text-on-surface-variant font-body">{row.bedeutung}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Full values table */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              Vollständige Schilddrüsenwerte-Tabelle: TSH, fT3, fT4 & Antikörper
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-primary-container/30">
                    <th className="text-left p-4 font-semibold text-primary">Wert</th>
                    <th className="text-left p-4 font-semibold text-primary">Normbereich</th>
                    <th className="text-left p-4 font-semibold text-primary hidden md:table-cell">Was er misst</th>
                  </tr>
                </thead>
                <tbody>
                  {vollstaendigeTabelle.map((row, i) => (
                    <tr key={row.wert} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                      <td className="p-4 font-semibold text-on-surface">{row.wert}</td>
                      <td className="p-4 text-on-surface-variant">{row.normbereich}</td>
                      <td className="p-4 text-on-surface-variant hidden md:table-cell">{row.wasMisst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-8">
              Häufige Fragen zum TSH-Wert
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
          <section className="mb-16">
            <h2 className="text-2xl font-headline font-bold text-primary mb-6">Weiterführende Themen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/schilddruese", label: "Schilddrüsenerkrankungen: Übersicht", icon: "medical_information" },
                { href: "/hashimoto", label: "Hashimoto Thyreoiditis", icon: "emergency" },
                { href: "/schilddruese/werte", label: "Alle Schilddrüsenwerte erklärt", icon: "table_chart" },
                { href: "/fragen/hashimoto-blutwerte-verstehen", label: "Hashimoto Blutwerte verstehen", icon: "science" },
                { href: "/hashimoto/trockene-haut", label: "Trockene Haut & Ellenbogen bei Hashimoto", icon: "dermatology" },
                { href: "/schilddruese/muedigkeit", label: "Müdigkeit durch Schilddrüse", icon: "bedtime" },
                { href: "/fragen/kann-hashimoto-geheilt-werden", label: "Kann Hashimoto geheilt werden?", icon: "help" },
                { href: "/fragen/selen-hashimoto-dosierung", label: "Selen bei Hashimoto: Dosierung", icon: "nutrition" },
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
              Unsicher bei Ihren Schilddrüsenwerten?
            </h2>
            <p className="text-on-primary/80 mb-8 max-w-lg mx-auto font-body">
              Machen Sie unseren Symptom-Check und erfahren Sie, welche Werte bei Ihnen untersucht werden sollten.
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
