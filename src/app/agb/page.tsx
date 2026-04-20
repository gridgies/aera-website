import { LEGAL, LEGAL_ADDRESS } from "@/lib/legal";

export const metadata = {
  title: "AGB | Aera",
};

export default function AGBPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-on-surface-variant font-body mb-16 text-sm uppercase tracking-widest">
          Stand: April 2026
        </p>

        <div className="space-y-12 font-body text-on-surface leading-relaxed">

          {/* Anbieter-Box */}
          <div className="bg-surface-container-low rounded-2xl p-8 text-sm text-on-surface-variant space-y-1">
            <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-3">Anbieter</p>
            {LEGAL_ADDRESS.map((line) => (
              <p key={line} className={line === LEGAL.name ? "font-semibold text-on-surface" : ""}>
                {line}
              </p>
            ))}
            <p className="pt-1">E-Mail: {LEGAL.email}</p>
          </div>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">1. Geltungsbereich</h2>
            <p className="text-sm text-on-surface-variant">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Website
              aerahealth.de sowie aller darüber angebotenen Dienste (nachfolgend &bdquo;Aera&ldquo; oder
              &bdquo;Dienst&ldquo;) von {LEGAL.name}, {LEGAL.street}, {LEGAL.zip} {LEGAL.city}{" "}
              (nachfolgend &bdquo;wir&ldquo; oder &bdquo;Anbieter&ldquo;). Mit der Nutzung unseres Dienstes erkennst
              du diese AGB an.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">2. Leistungsbeschreibung</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Aera ist eine digitale Gesundheitsplattform, die Informationen, Tools und Empfehlungen
              zur Unterstützung von Frauengesundheit bereitstellt. Derzeit bieten wir:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-on-surface-variant ml-4">
              {[
                "Einen Gesundheitsfragebogen zur Selbsteinschätzung (Hormonprofil-Check)",
                "Den Aera Companion – eine KI-gestützte Begleiterin für Hormongesundheit",
                "Informationsmaterialien rund um Frauengesundheit",
                "Die Möglichkeit zur Eintragung in eine Warteliste für weitere Funktionen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-primary mt-0.5 shrink-0">chevron_right</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-on-surface-variant">
              Wir behalten uns vor, den Leistungsumfang jederzeit zu erweitern oder anzupassen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              3. Kein Medizinprodukt – Gesundheitshinweis
            </h2>
            <div className="bg-secondary-container rounded-2xl p-6 text-on-secondary-container text-sm leading-relaxed">
              Aera ist ausdrücklich <strong>kein Medizinprodukt</strong> und ersetzt{" "}
              <strong>keine ärztliche Beratung</strong>, Diagnose oder Behandlung. Die
              bereitgestellten Informationen – einschließlich der vom Aera Companion generierten
              Antworten – dienen ausschließlich allgemeinen Informationszwecken. Bei
              gesundheitlichen Beschwerden wende dich bitte stets an eine qualifizierte Ärztin
              oder einen Arzt. Im Notfall: Ruf den Notruf <strong>112</strong> an.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              4. Aera Companion – KI-gestützte Begleiterin
            </h2>
            <div className="space-y-4 text-sm text-on-surface-variant">
              <p>
                Der Aera Companion ist eine KI-gestützte Gesprächsfunktion, die auf dem
                Sprachmodell Claude von Anthropic PBC (USA) basiert. Für die Nutzung ist ein
                Konto und die Zustimmung zur Verarbeitung deiner Gesundheitsdaten erforderlich.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-on-surface">Wichtige Hinweise zur KI-Nutzung:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Der Companion generiert Antworten automatisch – diese können Fehler enthalten und ersetzen keine Fachberatung.",
                    "KI-Sprachmodelle können plausibel klingende, aber ungenaue Informationen ausgeben (sog. Halluzinationen). Überprüfe medizinische Angaben stets mit einer Ärztin oder einem Arzt.",
                    "Dein Hormonprofil und deine Nachrichten werden zur Antwortgenerierung an Anthropic übermittelt (Details in der Datenschutzerklärung).",
                    "Teile keine hochsensiblen Daten (z.B. Versicherungsnummern, vollständige Medikamentenlisten) im Chat.",
                    "Der Companion ist nicht für Notfälle geeignet. Bei akuten Beschwerden: Arzt oder Notruf 112.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-primary mt-0.5 shrink-0">info</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              5. Registrierung & Konto
            </h2>
            <p className="text-sm text-on-surface-variant">
              Für den Aera Companion benötigst du ein Konto. Du bestätigst, dass die angegebene
              E-Mail-Adresse dir gehört und du mindestens 16 Jahre alt bist. Mit der Registrierung
              stimmst du der Verarbeitung deiner Gesundheitsdaten (Hormonprofil, Hinweismerkmale)
              durch Aera und die in der Datenschutzerklärung genannten Dienstleister ausdrücklich zu.
              Du kannst dein Konto und alle gespeicherten Daten jederzeit durch eine E-Mail an{" "}
              <a href={`mailto:${LEGAL.email}`} className="text-primary hover:underline underline-offset-4">
                {LEGAL.email}
              </a>{" "}
              löschen lassen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              6. Nutzungsrechte & geistiges Eigentum
            </h2>
            <p className="text-sm text-on-surface-variant">
              Alle auf der Website enthaltenen Inhalte (Texte, Grafiken, Logo, Design) sind
              urheberrechtlich geschützt und Eigentum des Anbieters oder der jeweiligen
              Rechteinhaber. Eine Vervielfältigung, Bearbeitung oder Weitergabe ist ohne
              ausdrückliche schriftliche Genehmigung nicht gestattet. Die nicht-kommerzielle
              Nutzung zu privaten Informationszwecken ist erlaubt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              7. Verfügbarkeit des Dienstes
            </h2>
            <p className="text-sm text-on-surface-variant">
              Wir bemühen uns um eine hohe Verfügbarkeit des Dienstes, können diese jedoch nicht
              garantieren. Wartungsarbeiten, technische Störungen oder höhere Gewalt können zu
              vorübergehenden Unterbrechungen führen. Wir haften nicht für Schäden, die durch
              Nichtverfügbarkeit des Dienstes entstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              8. Haftungsbeschränkung
            </h2>
            <p className="text-sm text-on-surface-variant">
              Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder
              der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.
              Im Übrigen haften wir nur für die Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten). Die Haftung für mittelbare Schäden und entgangenen Gewinn ist
              ausgeschlossen, soweit gesetzlich zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">9. Datenschutz</h2>
            <p className="text-sm text-on-surface-variant">
              Die Verarbeitung deiner personenbezogenen Daten richtet sich nach unserer{" "}
              <a href="/datenschutz" className="text-primary hover:underline underline-offset-4">
                Datenschutzerklärung
              </a>
              , die Bestandteil dieser AGB ist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">10. Änderungen der AGB</h2>
            <p className="text-sm text-on-surface-variant">
              Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu ändern. Über
              wesentliche Änderungen wirst du per E-Mail informiert, sofern du deine E-Mail-Adresse
              bei uns hinterlegt hast. Die geänderten AGB gelten als akzeptiert, wenn du den Dienst
              nach Bekanntgabe der Änderungen weiterhin nutzt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              11. Anwendbares Recht & Gerichtsstand
            </h2>
            <p className="text-sm text-on-surface-variant">
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Ist der Nutzer Kaufmann,
              juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
              Sondervermögen, ist Gerichtsstand {LEGAL.courtCity}. Für Verbraucher gilt der
              allgemeine Gerichtsstand.
            </p>
            <p className="mt-4 text-sm text-on-surface-variant">
              Hinweis zur Online-Streitbeilegung: Die Europäische Kommission stellt unter{" "}
              <span className="text-primary">https://ec.europa.eu/consumers/odr/</span> eine
              Plattform zur Online-Streitbeilegung bereit. Wir sind nicht bereit und nicht
              verpflichtet, an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <p className="text-xs text-on-surface-variant/50 pt-8 border-t border-outline-variant/10">
            Stand: April 2026 · Anbieter: {LEGAL.name}, {LEGAL.street}, {LEGAL.zip} {LEGAL.city}
          </p>
        </div>
      </div>
    </div>
  );
}
