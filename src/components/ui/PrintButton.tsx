"use client";

interface Props {
  className?: string;
}

export function PrintButton({ className }: Props) {
  return (
    <button
      onClick={() => window.print()}
      className={className}
    >
      <span className="material-symbols-outlined text-base">print</span>
      Als PDF speichern
    </button>
  );
}
