"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          Aera
        </Link>

        {/* Desktop nav links */}
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

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link href="/check" className="btn-primary hidden md:inline-block">
            Jetzt starten
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-on-surface" style={{ fontSize: "22px" }}>
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant/10">
          <div className="px-6 pt-6 pb-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm transition-colors ${
                  pathname === link.href
                    ? "bg-primary-container text-primary font-semibold"
                    : "text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-outline-variant/10">
              <Link
                href="/check"
                className="block w-full text-center bg-primary text-on-primary px-6 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Jetzt starten
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
