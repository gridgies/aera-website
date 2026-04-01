import Link from "next/link";

const CONDITION_LINKS = [
  { href: "/menopause", label: "Menopause" },
  { href: "/hashimoto", label: "Hashimoto" },
  { href: "/schilddruese", label: "Schilddrüse" },
  { href: "/hormone", label: "Hormone" },
];

const CONTENT_LINKS = [
  { href: "/themen", label: "Alle Themen" },
  { href: "/fragen", label: "Fragen & Antworten" },
  { href: "/wissenschaft", label: "Wissenschaft" },
  { href: "/experten", label: "Expert:innen" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full pt-16 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top: brand + link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-headline text-xl font-bold text-primary block mb-4">
              Aera
            </Link>
            <p className="text-xs text-on-surface-variant font-body leading-relaxed max-w-[200px]">
              Hormonelle Gesundheit für Frauen – wissenschaftlich fundiert.
            </p>
          </div>

          {/* Themen */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/40 mb-4">Themen</p>
            <ul className="space-y-3">
              {CONDITION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-on-surface-variant hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ratgeber */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/40 mb-4">Ratgeber</p>
            <ul className="space-y-3">
              {CONTENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-on-surface-variant hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/40 mb-4">Rechtliches</p>
            <ul className="space-y-3">
              {[
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
                { href: "/agb", label: "AGB" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-on-surface-variant hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[10px] uppercase tracking-[0.1em] text-on-surface/40">
            © 2025 Aera Health
          </p>
          <p className="font-body text-[10px] text-on-surface/30 text-center">
            Alle Inhalte dienen nur zu Informationszwecken und ersetzen keine ärztliche Beratung.
          </p>
        </div>
      </div>
    </footer>
  );
}
