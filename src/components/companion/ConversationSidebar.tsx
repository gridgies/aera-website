"use client";

import { useState } from "react";
import Link from "next/link";

const AGE_LABELS: Record<string, string> = {
  young:      "15–24 Jahre",
  thirties:   "25–34 Jahre",
  early_peri: "35–44 Jahre",
  peri:       "45–54 Jahre",
  post:       "55+ Jahre",
};

const PROFILE_LABELS: Record<string, string> = {
  PP: "PMS / Progesteron",
  M:  "Menopause",
  PM: "Perimenopause",
  H:  "Hashimoto",
  C:  "Cortisol / Stress",
  E:  "Östrogen-Dominanz",
  A:  "Androgene / PCOS",
  Fe: "Eisenmangel",
};

interface UserProfile {
  vorname: string | null;
  ageGroup: string | null;
  hormoneProfile: string | null;
  secondaryProfile: string | null;
}

export const NAV_ITEMS = [
  { key: "companion",  label: "Companion",  icon: "psychology",     locked: false },
  { key: "blutwerte",  label: "Blutwerte",  icon: "biotech",        locked: true  },
  { key: "fitness",    label: "Fitness",    icon: "fitness_center", locked: true  },
  { key: "schlaf",     label: "Schlaf",     icon: "bedtime",        locked: true  },
  { key: "ernaehrung", label: "Ernährung",  icon: "restaurant",     locked: true  },
] as const;

export type NavKey = (typeof NAV_ITEMS)[number]["key"];

interface Props {
  activeNav: NavKey;
  onNavChange: (key: NavKey) => void;
  onSignOut: () => void;
  userProfile?: UserProfile;
}

export function ConversationSidebar({ activeNav, onNavChange, onSignOut, userProfile }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#e8e6df" }}>
      {/* Profile card */}
      {userProfile && (userProfile.hormoneProfile || userProfile.ageGroup) && (
        <div className="mx-3 mt-4 mb-3 px-3 py-3 rounded-2xl bg-primary/8 border border-primary/15">
          {userProfile.vorname && (
            <p className="text-sm font-semibold text-on-surface font-body mb-2">
              {userProfile.vorname}
            </p>
          )}
          <div className="flex flex-col gap-1">
            {userProfile.hormoneProfile && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "14px" }}>biotech</span>
                <span className="text-xs text-on-surface-variant font-body">
                  {PROFILE_LABELS[userProfile.hormoneProfile] ?? userProfile.hormoneProfile}
                </span>
              </div>
            )}
            {userProfile.secondaryProfile && userProfile.secondaryProfile !== userProfile.hormoneProfile && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary/60" style={{ fontSize: "14px" }}>add_circle</span>
                <span className="text-xs text-on-surface-variant/80 font-body">
                  {PROFILE_LABELS[userProfile.secondaryProfile] ?? userProfile.secondaryProfile}
                </span>
              </div>
            )}
            {userProfile.ageGroup && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary/60" style={{ fontSize: "14px" }}>calendar_today</span>
                <span className="text-xs text-on-surface-variant/80 font-body">
                  {AGE_LABELS[userProfile.ageGroup] ?? userProfile.ageGroup}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation menu */}
      <nav className="px-2 pb-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavChange(item.key)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-body transition-colors ${
              activeNav === item.key
                ? "bg-primary/15 text-primary font-semibold"
                : "text-on-surface-variant hover:bg-primary/8 hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: "18px" }}>
              {item.icon}
            </span>
            <span className="flex-1 text-left">{item.label}</span>
            {item.locked && (
              <span className="material-symbols-outlined flex-shrink-0 text-on-surface-variant/40" style={{ fontSize: "16px" }}>
                lock
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <div className="px-2 pb-4 pt-2 border-t border-outline-variant/20">
        <Link
          href="/companion/journal"
          className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm font-body text-on-surface-variant hover:bg-primary/8 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>history</span>
          Verlauf
        </Link>
        <button
          onClick={onSignOut}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm font-body text-on-surface-variant hover:bg-primary/8 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>logout</span>
          Abmelden
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-72 flex-shrink-0 border-r border-outline-variant/20 h-full">
        {content}
      </aside>

      {/* Mobile: floating button + drawer */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-[4.5rem] left-4 z-30 w-9 h-9 rounded-full bg-surface shadow-md flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-on-surface" style={{ fontSize: "20px" }}>menu</span>
        </button>

        {mobileOpen && (
          <>
            <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setMobileOpen(false)} />
            <div className="fixed left-0 top-0 bottom-0 w-72 z-50 shadow-2xl">
              {content}
            </div>
          </>
        )}
      </div>
    </>
  );
}
