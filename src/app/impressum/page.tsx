import { LEGAL, LEGAL_ADDRESS } from "@/lib/legal";

export const metadata = {
  title: "Impressum | Aera",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Impressum</h1>
        <p className="text-on-surface-variant font-body mb-16 text-sm uppercase tracking-widest">
          Angaben gemäß § 5 TMG
        </p>

        <div className="space-y-12 font-body text-on-surface leading-relaxed">

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">Anbieter</h2>
            <div className="bg-surface-container-low rounded-2xl p-8 space-y-1 text-on-surface-variant">
              {LEGAL_ADDRESS.map((line) => (
                <p key={line} className={line === LEGAL.name ? "font-semibold text-on-surface" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">Kontakt</h2>
            <div className="bg-surface-container-low rounded-2xl p-8 space-y-2 text-on-surface-variant">
              <p>
                <span className="font-medium text-on-surface">E-Mail:</span>{" "}
                <a href={`mailto:${LEGAL.email}`} className="text-primary hover:underline underline-offset-4">
                  {LEGAL.email}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="bg-surface-container-low rounded-2xl p-8 space-y-1 text-on-surface-variant">
              {LEGAL_ADDRESS.slice(0, 3).map((line) => (
                <p key={line} className={line === LEGAL.name ? "font-semibold text-on-surface" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">Haftungsausschluss</h2>
            <div className="space-y-6 text-on-surface-variant text-sm">
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Haftung für Inhalte</h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                  waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                  und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              Hinweis zur medizinischen Beratung
            </h2>
            <div className="bg-secondary-container rounded-2xl p-8 text-on-secondary-container text-sm leading-relaxed">
              <p>
                Die auf dieser Website bereitgestellten Informationen dienen ausschließlich zu
                Informationszwecken und ersetzen keine professionelle medizinische Beratung, Diagnose
                oder Behandlung. Bei gesundheitlichen Beschwerden wende dich bitte stets an eine
                qualifizierte Ärztin oder einen qualifizierten Arzt. Aera ist kein medizinisches
                Produkt und stellt keine medizinische Diagnose.
              </p>
            </div>
          </section>

          <p className="text-xs text-on-surface-variant/50 pt-8 border-t border-outline-variant/10">
            Stand: Januar 2025
          </p>
        </div>
      </div>
    </div>
  );
}
