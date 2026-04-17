import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase-server";
import { CompanionChat } from "@/components/companion/CompanionChat";

export const metadata = {
  title: "Aera Companion",
  description: "Deine persönliche KI-Begleiterin für Hormongesundheit",
  robots: { index: false },
};

export default async function CompanionPage() {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login?redirect=/companion");

  // Load user profile for personalised welcome screen and sidebar card
  const { data: profile } = await supabase
    .from("profiles")
    .select("hormone_profile, secondary_profile, vorname, age_group")
    .eq("id", user.id)
    .single();

  return (
    <CompanionChat
      hormoneProfile={profile?.hormone_profile ?? null}
      secondaryProfile={profile?.secondary_profile ?? null}
      vorname={profile?.vorname ?? null}
      ageGroup={profile?.age_group ?? null}
    />
  );
}
