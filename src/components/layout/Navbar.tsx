"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          Aera
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-body text-xs uppercase tracking-[0.2em]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary-container pb-1"
                  : "text-on-surface/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/check" className="btn-primary">
          Jetzt starten
        </Link>
      </div>
    </nav>
  );
}
