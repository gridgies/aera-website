"use client";

import Link from "next/link";
import { useState } from "react";
import type { FrageData } from "@/data/fragenData";

type Category = "alle" | "menopause" | "hashimoto" | "schilddruese" | "hormone";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "alle", label: "Alle Fragen" },
  { id: "menopause", label: "Menopause" },
  { id: "hashimoto", label: "Hashimoto" },
  { id: "schilddruese", label: "Schilddrüse" },
  { id: "hormone", label: "Hormonstörungen" },
];

interface Props {
  questions: FrageData[];
}

export function FragenList({ questions }: Props) {
  const [active, setActive] = useState<Category>("alle");

  const counts: Record<Category, number> = {
    alle: questions.length,
    menopause: questions.filter((q) => q.relatedConditions.includes("menopause")).length,
    hashimoto: questions.filter((q) => q.relatedConditions.includes("hashimoto")).length,
    schilddruese: questions.filter((q) => q.relatedConditions.includes("schilddruese")).length,
    hormone: questions.filter((q) => q.relatedConditions.includes("hormone")).length,
  };

  const filtered =
    active === "alle"
      ? questions
      : questions.filter((q) => q.relatedConditions.includes(active));

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Kategorien">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body transition-colors ${
              active === cat.id
                ? "bg-primary text-on-primary font-semibold"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {cat.label}
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                active === cat.id
                  ? "bg-on-primary/20 text-on-primary"
                  : "bg-outline-variant/20 text-on-surface-variant"
              }`}
            >
              {counts[cat.id]}
            </span>
          </button>
        ))}
      </div>

      {/* Questions list */}
      <div className="space-y-3" role="tabpanel">
        {filtered.map((frage) => (
          <Link
            key={frage.slug}
            href={`/fragen/${frage.slug}`}
            className="flex items-center gap-4 p-6 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all group"
          >
            <span className="material-symbols-outlined text-primary font-extralight text-xl flex-shrink-0">
              help
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
                {frage.question}
              </p>
              <p className="text-xs text-on-surface-variant font-body mt-1 line-clamp-1">
                {frage.metaDescription}
              </p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant font-extralight flex-shrink-0 group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
