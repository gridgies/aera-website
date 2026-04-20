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
          Gemäß DSGVO · Stand: April 2026
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
                  Wenn du den Gesundheits-Check ohne Konto durchführst, werden deine Antworten{" "}
                  <strong>ausschließlich lokal in deinem Browser</strong> (localStorage) gespeichert
                  und nicht an unsere Server übertragen. Wenn du dich anschließend für den Companion
                  registrierst oder einloggst, wird das daraus abgeleitete Hormonprofil in deinem
                  Konto gespeichert (siehe Abschnitt e).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">d) Zugriffsdaten / Server-Logs</h3>
                <p>
                  Beim Besuch unserer Website werden automatisch technische Informationen übermittelt
                  (IP-Adresse, Browsertyp, Zeitstempel). Diese werden nach 7 Tagen automatisch gelöscht.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">e) Companion-Konto & Gesundheitsdaten</h3>
                <p className="mb-3">
                  Wenn du ein Konto für den Aera Companion anlegst, verarbeiten wir folgende Daten:
                </p>
                <ul className="space-y-1.5 ml-4">
                  {[
                    "E-Mail-Adresse und Passwort (verschlüsselt gespeichert)",
                    "Vorname (optional, für die persönliche Ansprache)",
                    "Hormonprofil-Schlüssel (z.B. \"Perimenopause\" oder \"Schilddrüse\") – abgeleitet aus deinen Fragebogen-Antworten",
                    "Altersgruppe (als Kategorie, z.B. \"Ende 30 bis Mitte 40\")",
                    "Gesundheitliche Hinweismerkmale: ob du Hinweise auf POI (vorzeitige Ovarialinsuffizienz) oder Endometriose angegeben hast (als Ja/Nein-Merkmal)",
                    "Quiz-Antworten und Symptom-Scores",
                    "Gesprächsverläufe aus dem Companion-Chat",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-xs mt-1 shrink-0 text-primary">circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs leading-relaxed">
                  <strong>Hinweis:</strong> Das Hormonprofil sowie die Hinweismerkmale zu POI und Endometriose
                  stellen <strong>besondere Kategorien personenbezogener Daten</strong> (Gesundheitsdaten) im
                  Sinne von Art. 9 DSGVO dar. Wir verarbeiten diese Daten ausschließlich auf Grundlage deiner
                  ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die du bei der Registrierung erteilst.
                  Du kannst diese Einwilligung jederzeit widerrufen.
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">f) KI-Verarbeitung (Companion-Chat)</h3>
                <p>
                  Um dir im Companion-Chat personalisierte Antworten geben zu können, werden bei jeder
                  Anfrage folgende Daten an den KI-Dienst Anthropic (USA) übermittelt:{" "}
                  <strong>dein Hormonprofil-Schlüssel</strong>,{" "}
                  <strong>deine Altersgruppe</strong>,{" "}
                  <strong>die gesundheitlichen Hinweismerkmale</strong> sowie{" "}
                  <strong>die letzten 6 Nachrichten</strong> des aktuellen Gesprächs. Diese Daten werden
                  ausschließlich zur Generierung der Antwort verarbeitet und nicht zur Modelltraining
                  verwendet. Weitere Details findest du in Abschnitt 4 (Dienstleister).
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
              <p>
                <span className="font-medium text-on-surface">Companion-Konto (allgemeine Kontodaten):</span>{" "}
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung bei der Registrierung).
              </p>
              <p>
                <span className="font-medium text-on-surface">Gesundheitsdaten (Hormonprofil, Hinweismerkmale):</span>{" "}
                Art. 9 Abs. 2 lit. a DSGVO (<strong>ausdrückliche Einwilligung</strong>). Diese Einwilligung
                erteilst du bei der Registrierung für den Companion. Du kannst sie jederzeit durch Löschung
                deines Kontos widerrufen.
              </p>
              <p>
                <span className="font-medium text-on-surface">KI-gestützte Gesprächsverarbeitung:</span>{" "}
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und – für Gesundheitsdaten im Prompt –
                Art. 9 Abs. 2 lit. a DSGVO.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              4. Datenspeicherung & Dienstleister
            </h2>
            <div className="space-y-6 text-sm text-on-surface-variant">
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Supabase (Datenbank & Authentifizierung)</h3>
                <p>
                  Wir nutzen Supabase als Datenbankdienst in der EU-Region (Frankfurt, AWS
                  eu-central-1). Supabase ist nach SOC 2 Type II zertifiziert und es besteht ein
                  Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO. Dort werden Kontodaten,
                  Hormonprofil und Gesprächsverläufe gespeichert.
                </p>
              </div>
              <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-900 mb-2">
                  Anthropic PBC (KI-Sprachmodell für den Companion)
                </h3>
                <div className="space-y-2 text-amber-800 text-xs leading-relaxed">
                  <p>
                    Für die KI-gestützte Gesprächsfunktion im Companion nutzen wir das Sprachmodell
                    Claude von Anthropic PBC, 548 Market Street, San Francisco, CA 94104, USA.
                  </p>
                  <p>
                    <strong>Was übermittelt wird:</strong> Bei jeder Anfrage werden dein
                    Hormonprofil-Schlüssel, deine Altersgruppe, gesundheitliche Hinweismerkmale
                    (Ja/Nein-Angaben zu POI und Endometriose) sowie die letzten 6 Nachrichten des
                    Gesprächs an Anthropic übertragen.
                  </p>
                  <p>
                    <strong>Datennutzung durch Anthropic:</strong> Anthropic verwendet deine Daten
                    nicht zum Training von KI-Modellen. Die Verarbeitung erfolgt ausschließlich zur
                    Erstellung der Antwort und unterliegt dem Anthropic API Data Processing Agreement.
                  </p>
                  <p>
                    <strong>Drittlandtransfer (USA):</strong> Die Übermittlung an Anthropic erfolgt
                    auf Basis von Standardvertragsklauseln (SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO.
                    Anthropic ist zudem unter dem EU-US Data Privacy Framework zertifiziert.
                  </p>
                  <p>
                    <strong>Keine Identifikatoren:</strong> Es werden keine E-Mail-Adresse, kein
                    Name oder andere direkte Identifikatoren an Anthropic übermittelt. Das
                    Hormonprofil wird als kodierter Schlüssel (z.B. „PP" für Perimenopause)
                    übertragen.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-2">Vercel (Hosting & Infrastruktur)</h3>
                <p>
                  Die Website wird über Vercel Inc. (USA) gehostet. Die Verarbeitung erfolgt auf
                  Basis von Standardvertragsklauseln. Dabei werden technische Zugriffsdaten und
                  API-Anfragen verarbeitet. Vercel ist unter dem EU-US Data Privacy Framework
                  zertifiziert.
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
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              5. KI-gestützte Verarbeitung & automatisierte Entscheidungen
            </h2>
            <div className="space-y-4 text-sm text-on-surface-variant">
              <p>
                Der Aera Companion verwendet ein KI-Sprachmodell (Claude von Anthropic), um
                personalisierte Antworten zu generieren. Die KI erhält dabei eine Zusammenfassung
                deines Hormonprofils als Kontext, damit sie dir relevante und auf dich zugeschnittene
                Informationen geben kann.
              </p>
              <p>
                <strong className="text-on-surface">Keine automatisierten Entscheidungen mit rechtlicher Wirkung:</strong>{" "}
                Es findet keine vollautomatisierte Entscheidungsfindung gemäß Art. 22 DSGVO statt,
                die rechtliche oder ähnlich erhebliche Auswirkungen auf dich hat. Das KI-System
                gibt ausschließlich Informationen und Orientierung – es trifft keine medizinischen
                Diagnosen oder rechtsverbindliche Empfehlungen.
              </p>
              <p>
                <strong className="text-on-surface">Menschliche Übersicht:</strong>{" "}
                KI-generierte Antworten ersetzen keine ärztliche Beratung. Du entscheidest selbst,
                welche Informationen du nutzt.
              </p>
              <p>
                <strong className="text-on-surface">Widerspruchsrecht:</strong>{" "}
                Du kannst die KI-Verarbeitung jederzeit beenden, indem du deinen Companion-Zugang
                nicht mehr nutzt und uns bittest, dein Konto und deine Daten zu löschen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              6. Speicherdauer
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
                <span className="font-medium text-on-surface">Companion-Konto & Profildaten:</span>{" "}
                Bis zur Löschung des Kontos durch dich oder auf deine Anfrage hin. Nach Löschung
                werden alle persönlichen Daten innerhalb von 30 Tagen endgültig entfernt.
              </p>
              <p>
                <span className="font-medium text-on-surface">Gesprächsverläufe (Companion):</span>{" "}
                Bis zur aktiven Löschung einzelner Gespräche durch dich oder bis zur Kontolöschung.
              </p>
              <p>
                <span className="font-medium text-on-surface">KI-Verarbeitung bei Anthropic:</span>{" "}
                Gemäß Anthropic-Richtlinien werden API-Anfragen für einen begrenzten Zeitraum
                zur Betrugsbekämpfung und Sicherheit gespeichert (max. 30 Tage) und danach gelöscht.
                Sie werden nicht zur Modelloptimierung genutzt.
              </p>
              <p>
                <span className="font-medium text-on-surface">Server-Logs:</span> 7 Tage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              7. Deine Rechte als betroffene Person
            </h2>
            <div className="bg-secondary-container rounded-2xl p-8 text-on-secondary-container text-sm space-y-3">
              <p>Du hast das Recht auf:</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)",
                  "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                  "Löschung deiner Daten (Art. 17 DSGVO) – inkl. Hormonprofil & Gesprächsverlauf",
                  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                  "Widerruf einer erteilten Einwilligung – auch der Einwilligung zur Gesundheitsdaten-Verarbeitung (Art. 7 Abs. 3 DSGVO)",
                  "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
                ].map((right) => (
                  <li key={right} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm mt-0.5 shrink-0">check</span>
                    {right}
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Um deine Rechte auszuüben – insbesondere zur Datenlöschung oder zum Einwilligungswiderruf:{" "}
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
              8. Datensicherheit
            </h2>
            <p className="text-sm text-on-surface-variant">
              Die Übertragung zwischen Browser und Server erfolgt verschlüsselt über HTTPS (TLS).
              Passwörter werden ausschließlich als Hash (bcrypt) gespeichert, nie im Klartext.
              Daten in Supabase sind verschlüsselt. Die Kommunikation mit Anthropic erfolgt
              ausschließlich über verschlüsselte API-Verbindungen (TLS 1.2+). Wir setzen
              technische und organisatorische Sicherheitsmaßnahmen nach aktuellem Stand der
              Technik ein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              9. Weitergabe an Dritte
            </h2>
            <p className="text-sm text-on-surface-variant">
              Wir verkaufen oder vermieten deine Daten nicht. Eine Weitergabe an Dritte erfolgt
              ausschließlich an die in Abschnitt 4 genannten Auftragsverarbeiter (Supabase,
              Anthropic, Vercel) im Rahmen der Leistungserbringung sowie soweit wir gesetzlich
              dazu verpflichtet sind. Alle Dienstleister sind vertraglich zur Einhaltung des
              Datenschutzes verpflichtet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              10. Cookies & Tracking
            </h2>
            <p className="text-sm text-on-surface-variant">
              Diese Website verwendet keine Tracking-Cookies oder Werbepixel. Es werden
              ausschließlich technisch notwendige Session-Cookies für die Authentifizierung
              (Supabase Auth) sowie localStorage für temporäre Quiz-Daten verwendet. Es wird
              kein Cross-Site-Tracking durchgeführt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-bold text-primary mb-4">
              11. Zuständige Aufsichtsbehörde
            </h2>
            <p className="text-sm text-on-surface-variant">
              Zuständige Datenschutzbehörde für {LEGAL.state}: {LEGAL.authority}. Eine Liste aller
              deutschen Behörden findest du unter{" "}
              <span className="text-primary">www.bfdi.bund.de</span>.
            </p>
          </section>

          <p className="text-xs text-on-surface-variant/50 pt-8 border-t border-outline-variant/10">
            Stand: April 2026 · Verantwortlicher: {LEGAL.name}, {LEGAL.street}, {LEGAL.zip} {LEGAL.city}
          </p>
        </div>
      </div>
    </div>
  );
}
