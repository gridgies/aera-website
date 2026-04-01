import { LEGAL, LEGAL_ADDRESS } from "@/lib/legal";

export const metadata = {
  title: "Datenschutzerklärung | Aera",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
          Datenschutzerklärung
        </h1>
        <p className="text-on-surface-variant font-body mb-16 text-sm uppercase tracking-widest">
          Gemäß DSGVO · Stand: Januar 2025
        </p>

        <div className="space-y-12 font-body text-on-surface leading-relaxed">

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-on-surface-variant text-sm mb-4">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="bg-surface-container-low rounded-2xl p-8 space-y-1 text-on-surface-variant text-sm">
              {LEGAL_ADDRESS.map((line) => (
                <p key={line} className={line === LEGAL.name ? "font-semibold text-on-surface" : ""}>
                  {line}
                </p>
              ))}
              <p className="pt-2">E-Mail: {LEGAL.email}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              2. Welche Daten wir erheben
            </h2>
            <div className="space-y-6 text-sm text-on-surface-variant">
              <div>
                <h3 className="font-semibold text-on-surface mb-2">a) Warteliste</h3>
                <p>
                  Wenn du dich für unsere Warteliste einträgst, erheben wir deine{" "}
                  <strong>E-Mail-Adresse</strong> und optional dein{" "}
                  <strong>Interessensgebiet</strong>. Diese Daten werden ausschließlich dazu verwendet,
                  dich über den Launch von Aera zu informieren.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">b) Kontaktformular</h3>
                <p>
                  Wenn du uns über das Kontaktformular schreibst, erheben wir deinen{" "}
                  <strong>Namen</strong>, deine <strong>E-Mail-Adresse</strong>, optional ein{" "}
                  <strong>Betreff</strong> sowie den Inhalt deiner <strong>Nachricht</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">c) Gesundheitsfragebogen (Check)</h3>
                <p>
                  Deine Antworten werden <strong>ausschließlich lokal in deinem Browser</strong>{" "}
                  (localStorage) gespeichert und nicht an unsere Server übertragen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">d) Zugriffsdaten / Server-Logs</h3>
                <p>
                  Beim Besuch unserer Website werden automatisch technische Informationen übermittelt
                  (IP-Adresse, Browsertyp, Zeitstempel). Diese werden nach 7 Tagen automatisch gelöscht.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              3. Rechtsgrundlagen der Verarbeitung
            </h2>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <p>
                <span className="font-medium text-on-surface">Warteliste:</span> Art. 6 Abs. 1 lit. a
                DSGVO (Einwilligung).
              </p>
              <p>
                <span className="font-medium text-on-surface">Kontaktformular:</span> Art. 6 Abs. 1
                lit. b DSGVO (Vertragsanbahnung / berechtigtes Interesse an der Bearbeitung deiner
                Anfrage).
              </p>
              <p>
                <span className="font-medium text-on-surface">Server-Logs:</span> Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der Sicherheit unserer Infrastruktur).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              4. Datenspeicherung & Dienstleister
            </h2>
            <div className="space-y-6 text-sm text-on-surface-variant">
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Supabase (Datenbankdienstleister)</h3>
                <p>
                  Wir nutzen Supabase als Datenbankdienst in der EU-Region (Frankfurt, AWS
                  eu-central-1). Supabase ist nach SOC 2 Type II zertifiziert und es besteht ein
                  Auftragsverarbeitungsvertrag (AVV).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Google Fonts</h3>
                <p>
                  Diese Website lädt Schriftarten direkt von Google-Servern. Dabei wird deine
                  IP-Adresse an Google übermittelt (Art. 6 Abs. 1 lit. f DSGVO). Google ist unter
                  dem EU-US Data Privacy Framework zertifiziert.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Hosting</h3>
                <p>
                  Die Website wird über {LEGAL.hosting} gehostet. Dabei werden technische
                  Zugriffsdaten verarbeitet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              5. Speicherdauer
            </h2>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <p>
                <span className="font-medium text-on-surface">Warteliste-Einträge:</span> Bis zum
                Widerruf, spätestens 24 Monate nach Eintragung.
              </p>
              <p>
                <span className="font-medium text-on-surface">Kontaktanfragen:</span> 12 Monate nach
                abschließender Bearbeitung.
              </p>
              <p>
                <span className="font-medium text-on-surface">Server-Logs:</span> 7 Tage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              6. Deine Rechte als betroffene Person
            </h2>
            <div className="bg-secondary-container rounded-2xl p-8 text-on-secondary-container text-sm space-y-3">
              <p>Du hast das Recht auf:</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)",
                  "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                  "Löschung deiner Daten (Art. 17 DSGVO)",
                  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                  "Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
                  "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
                ].map((right) => (
                  <li key={right} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm mt-0.5 shrink-0">check</span>
                    {right}
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Um deine Rechte auszuüben:{" "}
                <a
                  href={`mailto:${LEGAL.email}`}
                  className="font-semibold underline underline-offset-4"
                >
                  {LEGAL.email}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              7. Datensicherheit
            </h2>
            <p className="text-sm text-on-surface-variant">
              Die Übertragung zwischen Browser und Server erfolgt verschlüsselt über HTTPS (TLS).
              Daten in Supabase sind Ende-zu-Ende verschlüsselt. Wir setzen technische und
              organisatorische Sicherheitsmaßnahmen nach aktuellem Stand der Technik ein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              8. Keine Weitergabe an Dritte
            </h2>
            <p className="text-sm text-on-surface-variant">
              Wir verkaufen oder vermieten deine Daten nicht. Eine Weitergabe an Dritte erfolgt nur,
              soweit dies zur Vertragserfüllung notwendig ist (z.B. Hosting) oder wir gesetzlich dazu
              verpflichtet sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              9. Cookies & Tracking
            </h2>
            <p className="text-sm text-on-surface-variant">
              Diese Website verwendet keine Tracking-Cookies oder Werbepixel. Es werden ausschließlich
              technisch notwendige Daten im Browser-localStorage gespeichert (deine Antworten aus dem
              Gesundheits-Check). Es wird kein Cross-Site-Tracking durchgeführt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              10. Zuständige Aufsichtsbehörde
            </h2>
            <p className="text-sm text-on-surface-variant">
              Zuständige Datenschutzbehörde für {LEGAL.state}: {LEGAL.authority}. Eine Liste aller
              deutschen Behörden findest du unter{" "}
              <span className="text-primary">www.bfdi.bund.de</span>.
            </p>
          </section>

          <p className="text-xs text-on-surface-variant/50 pt-8 border-t border-outline-variant/10">
            Stand: Januar 2025 · Verantwortlicher: {LEGAL.name}, {LEGAL.street}, {LEGAL.zip} {LEGAL.city}
          </p>
        </div>
      </div>
    </div>
  );
}
