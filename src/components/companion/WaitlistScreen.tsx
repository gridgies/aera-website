import Link from "next/link";

export function WaitlistScreen({ vorname }: { vorname: string | null }) {
  const greeting = vorname ? `Hallo ${vorname}` : "Hallo";

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#fbf9f4" }}>
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#f8ddd2" }}>
          <span className="material-symbols-outlined text-3xl" style={{ color: "#6f5b53" }}>hourglass_top</span>
        </div>

        <span className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4" style={{ backgroundColor: "#f8ddd2", color: "#6f5b53" }}>
          Beta · Warteliste
        </span>

        <h1 className="text-2xl font-headline font-bold text-on-surface mb-3">
          {greeting}, du bist dabei!
        </h1>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
          Dein Konto und dein Hormonprofil sind gespeichert. Sobald wir deinen
          Zugang zum <strong>aera:companion Beta</strong> freischalten, bekommst
          du sofort eine E-Mail.
        </p>

        <div className="rounded-2xl p-6 mb-8 text-left space-y-4" style={{ backgroundColor: "#f5f4ee" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#5e605a" }}>Was dich erwartet</p>
          {[
            { icon: "chat", label: "Persönlicher Chat", desc: "Deine Begleiterin kennt dein Hormonprofil und antwortet individuell" },
            { icon: "biotech", label: "Blutwerte erklären", desc: "Laborwerte endlich verständlich – was sie bedeuten und was zu tun ist" },
            { icon: "assignment", label: "Nächste Schritte", desc: "Konkrete Handlungsempfehlungen statt vager Tipps" },
          ].map(({ icon, label, desc }) => (
            <div key={icon} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-xl mt-0.5" style={{ color: "#6f5b53" }}>{icon}</span>
              <div>
                <p className="text-sm font-semibold text-on-surface">{label}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block font-bold text-sm py-3.5 px-8 rounded-full text-on-primary transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#6f5b53" }}
        >
          Ratgeber lesen →
        </Link>

        <p className="text-xs text-on-surface-variant font-body mt-6">
          Fragen? Schreib uns an{" "}
          <a href="mailto:hallo@aerahealth.de" className="underline" style={{ color: "#6f5b53" }}>
            hallo@aerahealth.de
          </a>
        </p>
      </div>
    </div>
  );
}
