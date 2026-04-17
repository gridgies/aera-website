import { redirect } from "next/navigation";
import Link from "next/link";
import { getSupabaseServer } from "@/lib/supabase-server";

export const metadata = {
  title: "Gesprächsverlauf · Aera",
  robots: { index: false },
};

export default async function JournalPage() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login?redirect=/companion/journal");

  const { data: conversations } = await supabase
    .from("conversations")
    .select("id, title, created_at, updated_at")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(50);

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-headline font-bold text-on-surface">
          Gesprächsverlauf
        </h1>
        <Link
          href="/companion"
          className="flex items-center gap-2 text-sm font-body text-primary hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Zurück
        </Link>
      </div>

      {!conversations || conversations.length === 0 ? (
        <div className="text-center py-16 text-on-surface-variant font-body text-sm">
          <span className="material-symbols-outlined text-4xl mb-3 block opacity-40">chat_bubble_outline</span>
          Noch keine Gespräche
        </div>
      ) : (
        <div className="space-y-2">
          {conversations.map((conv) => (
            <Link
              key={conv.id}
              href={`/companion`}
              className="flex items-center justify-between px-5 py-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors"
            >
              <div>
                <p className="font-body font-semibold text-sm text-on-surface">{conv.title}</p>
                <p className="font-body text-xs text-on-surface-variant mt-0.5">
                  {new Date(conv.updated_at).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/50">
                chevron_right
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
