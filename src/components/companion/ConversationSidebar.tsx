"use client";

import { useState } from "react";
import Link from "next/link";

export interface Conversation {
  id: string;
  title: string;
  updated_at: string;
}

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

interface Props {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onSignOut: () => void;
  isLoading?: boolean;
  userProfile?: UserProfile;
}

export function ConversationSidebar({
  conversations,
  activeId,
  onSelect,
  onNew,
  onSignOut,
  isLoading,
  userProfile,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#e8e6df" }}>
      {/* Header */}
      <div className="px-4 pt-5 pb-4 flex items-center justify-between">
        <Link href="/" className="font-headline text-lg font-bold text-primary">
          Aera
        </Link>
        <button
          onClick={onNew}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
          title="Neues Gespräch"
        >
          <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
            edit_square
          </span>
        </button>
      </div>

      {/* Profile card */}
      {userProfile && (userProfile.hormoneProfile || userProfile.ageGroup) && (
        <div className="mx-3 mb-3 px-3 py-3 rounded-2xl bg-primary/8 border border-primary/15">
          {userProfile.vorname && (
            <p className="text-sm font-semibold text-on-surface font-body mb-2">
              {userProfile.vorname}
            </p>
          )}
          <div className="flex flex-col gap-1">
            {userProfile.hormoneProfile && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "14px" }}>
                  biotech
                </span>
                <span className="text-xs text-on-surface-variant font-body">
                  {PROFILE_LABELS[userProfile.hormoneProfile] ?? userProfile.hormoneProfile}
                </span>
              </div>
            )}
            {userProfile.secondaryProfile && userProfile.secondaryProfile !== userProfile.hormoneProfile && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary/60" style={{ fontSize: "14px" }}>
                  add_circle
                </span>
                <span className="text-xs text-on-surface-variant/80 font-body">
                  {PROFILE_LABELS[userProfile.secondaryProfile] ?? userProfile.secondaryProfile}
                </span>
              </div>
            )}
            {userProfile.ageGroup && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary/60" style={{ fontSize: "14px" }}>
                  calendar_today
                </span>
                <span className="text-xs text-on-surface-variant/80 font-body">
                  {AGE_LABELS[userProfile.ageGroup] ?? userProfile.ageGroup}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Section label */}
      <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-widest text-on-surface-variant/60 font-body">
        Gespräche
      </p>

      {/* Conversation list */}
      <div className="flex-1 overflow-y-auto px-2 space-y-0.5">
        {isLoading ? (
          <div className="space-y-2 px-2 pt-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-9 rounded-xl bg-outline-variant/20 animate-pulse" />
            ))}
          </div>
        ) : conversations.length === 0 ? (
          <p className="px-4 py-3 text-sm text-on-surface-variant/60 font-body">
            Noch keine Gespräche
          </p>
        ) : (
          conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelect(conv.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-body transition-colors truncate ${
                conv.id === activeId
                  ? "bg-primary/15 text-primary font-semibold"
                  : "text-on-surface hover:bg-primary/8"
              }`}
            >
              {conv.title}
            </button>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-2 pb-4 pt-2 border-t border-outline-variant/20 mt-2">
        <Link
          href="/companion/journal"
          className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm font-body text-on-surface-variant hover:bg-primary/8 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
            history
          </span>
          Verlauf
        </Link>
        <button
          onClick={onSignOut}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm font-body text-on-surface-variant hover:bg-primary/8 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
            logout
          </span>
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
          <span className="material-symbols-outlined text-on-surface" style={{ fontSize: "20px" }}>
            menu
          </span>
        </button>

        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed left-0 top-0 bottom-0 w-72 z-50 shadow-2xl">
              {content}
            </div>
          </>
        )}
      </div>
    </>
  );
}
