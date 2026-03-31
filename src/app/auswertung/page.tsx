import Link from "next/link";

export const metadata = {
  title: "Deine Auswertung | Aera",
  description: "Deine persönliche Gesundheitsanalyse von Aera.",
};

const nextSteps = [
  {
    number: 1,
    title: "Ernährungsplan anpassen",
    description: "Konzentriere dich auf magnesiumreiche Lebensmittel zur Unterstützung der Muskelregeneration.",
    action: "Details ansehen",
  },
  {
    number: 2,
    title: "Zyklus-Tracking starten",
    description: "Synchronisiere dein Training mit deinen Hormorphasen für maximale Effizienz.",
    action: "Jetzt starten",
  },
  {
    number: 3,
    title: "Expert:innen-Gespräch buchen",
    description: "Besprich deine Ergebnisse in einem 15-minütigen Erstgespräch mit unseren Spezialist:innen.",
    action: "Termin wählen",
  },
];

export default function AuswertungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero mit Bild */}
      <section className="px-8 max-w-7xl mx-auto mt-28 mb-20">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Weiches Licht durch Vorhänge – Ruhe und Klarheit"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVtixpL_6u85SNtlXa4xEq8ktw5v8d1ugc4t1EBZWVlbygxtq-rBFUeul_KfxmyZezP5_nNbFAw8taQ_W3xsFKEkV52tJYZbMiBEMXZ2InIiwSk4je6xAqotAy6K1FFbYf8eO8AT6fgew1QFBv55Hwaa3P1c5Yg6QwW-T_mkjevlOOcg24aVZSFUU75ufNiivQrQocbulTWkzKW2ItjoFt0S_nOt2FMFds_RwIt8XaMb4sCLHvNdU30VSMDr6rrz-xmWaooXQM3VA6"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
          <div className="relative z-10 px-12 max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide mb-6 uppercase">
              Personalisierte Analyse
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
              Deine Auswertung
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
              Basierend auf deinen Antworten haben wir ein umfassendes Profil erstellt. Dies ist dein erster Schritt zu wissenschaftsbasierter Gesundheitsführung.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Hormonelle Balance Ring */}
          <div className="md:col-span-4 bg-surface-container-low p-10 rounded-[2rem] flex flex-col items-center text-center">
            <h3 className="text-2xl font-headline font-semibold text-primary mb-8">
              Hormonelle Balance
            </h3>
            <div className="relative w-48 h-48 mb-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-surface-container-highest"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <circle
                  className="text-tertiary"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="42"
                  stroke="currentColor"
                  strokeDasharray="263.8"
                  strokeDashoffset="65.9"
                  strokeLinecap="round"
                  strokeWidth="8"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-headline font-bold text-tertiary">75%</span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Stabilität
                </span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dein Profil zeigt eine solide Basis mit leichten Schwankungen in der Lutealphase.
            </p>
          </div>

          {/* Vitalitäts-Metriken */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm shadow-on-surface/5">
            <h3 className="text-2xl font-headline font-semibold text-primary mb-10">
              Vitalitäts-Metriken
            </h3>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h4 className="font-headline text-lg font-medium">Energielevel</h4>
                    <p className="text-sm text-on-surface-variant">Tagesdurchschnitt</p>
                  </div>
                  <span className="font-headline text-2xl font-bold text-secondary">Mittel</span>
                </div>
                <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[62%] rounded-full shadow-[0_0_15px_rgba(86,99,80,0.3)]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h4 className="font-headline text-lg font-medium">Stressresilienz</h4>
                    <p className="text-sm text-on-surface-variant">Cortisol-Reaktions-Index</p>
                  </div>
                  <span className="font-headline text-2xl font-bold text-primary">82%</span>
                </div>
                <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[82%] rounded-full shadow-[0_0_15px_rgba(111,91,83,0.3)]" />
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-secondary-container rounded-2xl flex items-start gap-4">
              <span
                className="material-symbols-outlined text-on-secondary-container filled"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lightbulb
              </span>
              <p className="text-sm text-on-secondary-container font-medium leading-relaxed">
                <strong className="block mb-1">Expert:innen-Tipp:</strong> Dein Stresslevel ist
                aktuell erhöht. Kurze Atemübungen zwischen Aufgaben können deinen Nachmittagsenergie
                deutlich verbessern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nächste Schritte */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-headline font-bold text-primary mb-12">Nächste Schritte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nextSteps.map((step) => (
            <div
              key={step.number}
              className="group bg-surface-container-high p-8 rounded-[2rem] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary font-headline font-bold mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{step.description}</p>
              <button className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                {step.action}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Expert:innen bald verfügbar */}
      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-headline font-bold text-primary mb-4">
                Expert:innen-Netzwerk
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                Passende Spezialist:innen werden bald verfügbar sein – individuell auf dein Profil abgestimmt.
              </p>
            </div>
            <span className="hidden md:inline-block px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
              Bald verfügbar
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "medical_services", title: "Endokrinologie", description: "Hormon-Spezialist:innen" },
              { icon: "restaurant", title: "Ernährungsberatung", description: "Zertifizierte Ernährungsexpert:innen" },
              { icon: "psychology", title: "Psychologie", description: "Mental Health Expert:innen" },
              { icon: "spa", title: "Ganzheitliches Coaching", description: "Holistic Health Coaches" },
            ].map((cat) => (
              <div
                key={cat.title}
                className="bg-surface-container-lowest p-8 rounded-[2rem] text-center shadow-sm shadow-on-surface/5 opacity-60"
              >
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-on-surface-variant text-2xl">
                    {cat.icon}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-on-surface mb-2">{cat.title}</h4>
                <p className="text-xs text-on-surface-variant">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/check"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
            >
              Warteliste beitreten
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
