import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full py-16 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          Aera
        </Link>

        <div className="flex flex-wrap justify-center gap-8 font-body text-[10px] uppercase tracking-[0.2em] text-on-surface/50">
          <Link href="#" className="hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Datenschutz
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            AGB
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Kontakt
          </Link>
        </div>

        <div className="font-body text-[10px] uppercase tracking-[0.1em] text-on-surface/40">
          © 2025 aera health
        </div>
      </div>
    </footer>
  );
}
