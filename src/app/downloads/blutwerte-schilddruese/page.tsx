import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Die 5 Schilddrüsen-Blutwerte | Aera Health",
  robots: { index: false, follow: false },
};

const blutwerte = [
  {
    nummer: "01",
    name: "TSH",
    langname: "Thyreoidea-stimulierendes Hormon",
    normbereich: "0,4 – 4,0 mU/L",
    optimalbereich: "0,5 – 2,5 mU/L",
    bedeutung:
      "Das Steuerhormon der Hirnanhangsdrüse. Wichtigster Screening-Wert. Zeigt, wie stark die Schilddrüse angetrieben wird. Bei Hashimoto Zielwert < 2,5 mU/L anstreben.",
    hinweis: 'TSH im Labor „normal“, aber Symptome? Immer auch fT3 und fT4 messen lassen.',
    farbe: "primary",
  },
  {
    nummer: "02",
    name: "fT4",
    langname: "Freies Thyroxin",
    normbereich: "10 – 23 pmol/L",
    optimalbereich: "14 – 20 pmol/L",
    bedeutung:
      "Das Vorläuferhormon der Schilddrüse. Wird in Körperzellen in das aktive T3 umgewandelt. Niedrig bei Unterfunktion oder unzureichender L-Thyroxin-Dosierung.",
    hinweis: "fT4 ohne fT3 gibt nur ein halbes Bild – beide gehören zusammen.",
    farbe: "secondary",
  },
  {
    nummer: "03",
    name: "fT3",
    langname: "Freies Trijodthyronin",
    normbereich: "3,5 – 6,5 pmol/L",
    optimalbereich: "4,5 – 6,5 pmol/L",
    bedeutung:
      "Das aktiv wirksame Schilddrüsenhormon. Entscheidend für Energie, Wärmeregulation und Stoffwechsel. Niedrig bei Konversionsstörung (fT4 normal, aber T3 niedrig).",
    hinweis: 'Konversionsstörung erklärt anhaltende Symptome trotz „normalem" TSH und fT4.',
    farbe: "tertiary",
  },
  {
    nummer: "04",
    name: "Anti-TPO",
    langname: "Antikörper gegen Thyreoidea-Peroxidase",
    normbereich: "< 35 IU/ml",
    optimalbereich: "–",
    bedeutung:
      "Der wichtigste Autoimmunmarker bei Hashimoto. Stark erhöhte Werte bestätigen eine autoimmune Schilddrüsenerkrankung. Bereits leicht erhöhte Werte (> 35 IU/ml) sind klinisch relevant.",
    hinweis: "Anti-TPO kann Jahre vor TSH-Veränderungen positiv werden – frühes Screening lohnt sich.",
    farbe: "primary",
  },
  {
    nummer: "05",
    name: "Anti-TG",
    langname: "Antikörper gegen Thyreoglobulin",
    normbereich: "< 115 IU/ml",
    optimalbereich: "–",
    bedeutung:
      "Zweiter Autoimmunmarker zur Hashimoto-Diagnose. Ergänzt Anti-TPO: bei 10–15 % der Hashimoto-Patientinnen ist nur Anti-TG erhöht, Anti-TPO aber negativ.",
    hinweis: "Immer zusammen mit Anti-TPO bestimmen für vollständiges Autoimmunprofil.",
    farbe: "secondary",
  },
];

const arztFragen = [
  '„Können Sie bitte TSH, fT3, fT4, Anti-TPO und Anti-TG gemeinsam bestimmen?"',
  '„Mein TSH liegt bei [Wert] – wie ist der Optimalwert für mich mit meinen Symptomen?"',
  '„Bitte zeigen Sie mir auch den fT3-Wert – ich möchte eine mögliche Konversionsstörung ausschließen."',
];

export default function BlutwertePDFPage() {
  return (
    <>
      {/* Print CSS: hide nav/footer and print button */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              nav, footer, .no-print { display: none !important; }
              body { background: white !important; }
              @page { margin: 1.5cm; size: A4; }
              .print-break { page-break-before: always; }
            }
          `,
        }}
      />

      <div className="min-h-screen bg-surface pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* No-print: back link + print button */}
          <div className="no-print flex items-center justify-between mb-10">
            <Link
              href="/fragen/tsh-wert-tabelle"
              className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Zurück zur TSH-Tabelle
            </Link>
            <PrintButton className="no-print inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity" />
          </div>

          {/* Header */}
          <header className="mb-10 pb-8 border-b border-outline-variant/20">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
              Kostenloser Leitfaden
            </div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-3 leading-tight">
              Die 5 wichtigsten Blutwerte für Frauen mit Schilddrüsenproblemen
            </h1>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-2xl">
              Ihr persönlicher Referenzleitfaden — mit Normalwerten, Optimalwerten und
              dem, was diese Zahlen wirklich bedeuten. Drucken oder als PDF speichern.
            </p>
            <p className="text-xs text-on-surface-variant/50 mt-3 font-body">
              aerahealth.de · Stand Mai 2026 · Kein Ersatz für ärztliche Beratung
            </p>
          </header>

          {/* Blutwerte */}
          <section className="space-y-6 mb-12">
            {blutwerte.map((wert) => (
              <div
                key={wert.nummer}
                className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-xl bg-${wert.farbe}/15 flex items-center justify-center`}>
                    <span className={`text-sm font-bold text-${wert.farbe} font-body`}>{wert.nummer}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h2 className={`text-xl font-headline font-bold text-${wert.farbe}`}>{wert.name}</h2>
                      <span className="text-sm text-on-surface-variant font-body">{wert.langname}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="bg-surface rounded-lg px-3 py-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-on-surface-variant/60 block">Normbereich (Labor)</span>
                        <span className="text-sm font-semibold text-on-surface font-body">{wert.normbereich}</span>
                      </div>
                      {wert.optimalbereich !== "–" && (
                        <div className={`bg-${wert.farbe}/10 rounded-lg px-3 py-1.5`}>
                          <span className="text-[10px] uppercase tracking-wider text-on-surface-variant/60 block">Optimalbereich</span>
                          <span className={`text-sm font-semibold text-${wert.farbe} font-body`}>{wert.optimalbereich}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-2">
                      {wert.bedeutung}
                    </p>
                    <div className="flex items-start gap-2 text-xs text-on-surface-variant/70 font-body bg-surface rounded-lg px-3 py-2">
                      <span className="material-symbols-outlined text-sm shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                        lightbulb
                      </span>
                      {wert.hinweis}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Schnellreferenz-Tabelle */}
          <section className="mb-12">
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              Schnellreferenz-Tabelle
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-primary-container/30">
                    <th className="text-left p-3 font-semibold text-primary">Wert</th>
                    <th className="text-left p-3 font-semibold text-primary">Normbereich</th>
                    <th className="text-left p-3 font-semibold text-primary">Optimal</th>
                    <th className="text-left p-3 font-semibold text-primary hidden sm:table-cell">Typ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { wert: "TSH", norm: "0,4–4,0 mU/L", optimal: "0,5–2,5 mU/L", typ: "Steuerhormon" },
                    { wert: "fT4", norm: "10–23 pmol/L", optimal: "14–20 pmol/L", typ: "Vorläuferhormon" },
                    { wert: "fT3", norm: "3,5–6,5 pmol/L", optimal: "4,5–6,5 pmol/L", typ: "Aktives Hormon" },
                    { wert: "Anti-TPO", norm: "< 35 IU/ml", optimal: "–", typ: "Autoimmunmarker" },
                    { wert: "Anti-TG", norm: "< 115 IU/ml", optimal: "–", typ: "Autoimmunmarker" },
                  ].map((row, i) => (
                    <tr key={row.wert} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                      <td className="p-3 font-bold text-on-surface">{row.wert}</td>
                      <td className="p-3 text-on-surface-variant">{row.norm}</td>
                      <td className="p-3 text-primary font-medium">{row.optimal}</td>
                      <td className="p-3 text-on-surface-variant hidden sm:table-cell">{row.typ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Was beim Arzt fragen */}
          <section className="mb-12">
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              Was du deiner Ärztin sagen kannst
            </h2>
            <div className="space-y-3">
              {arztFragen.map((frage) => (
                <div key={frage} className="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
                  <span
                    className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                    style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
                  >
                    chat
                  </span>
                  <p className="text-sm text-on-surface font-body leading-relaxed">{frage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Wann messen */}
          <section className="mb-12 bg-primary-container/20 rounded-2xl p-6 border border-primary/10">
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              Wann solltest du diese Werte messen lassen?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-body text-on-surface-variant">
              {[
                { icon: "schedule", text: "Erstmals: Bei Müdigkeit, Gewichtszunahme, Frieren, Haarausfall oder Zyklusstörungen ohne klare Ursache" },
                { icon: "repeat", text: "Bei bekannter Erkrankung: alle 6–12 Monate, nach Dosisänderung nach 6–8 Wochen" },
                { icon: "favorite", text: "Bei Kinderwunsch/Schwangerschaft: vor Konzeption und alle 4–6 Wochen im 1. Trimester" },
                { icon: "family_history", text: "Bei familiärer Hashimoto-Vorgeschichte: jährliches Screening empfohlen" },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: "16px" }}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 border-t border-outline-variant/20 text-center">
            <p className="text-xs text-on-surface-variant/50 font-body leading-relaxed">
              Dieser Leitfaden dient der allgemeinen Information und ersetzt keine ärztliche Diagnose oder Behandlung.
              Laborwerte müssen immer im Kontext Ihrer Symptome und Krankengeschichte beurteilt werden.
            </p>
            <p className="text-xs text-on-surface-variant/40 mt-2 font-body">
              © 2026 Aera Health · aerahealth.de
            </p>
            <div className="no-print mt-6">
              <Link
                href="/fragen/tsh-wert-tabelle"
                className="text-sm text-primary hover:underline font-body"
              >
                Zur vollständigen TSH-Wert Tabelle →
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
