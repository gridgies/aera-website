import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase-server";
import { CompanionChat } from "@/components/companion/CompanionChat";
import { WaitlistScreen } from "@/components/companion/WaitlistScreen";

export const metadata = {
  title: "Aera Companion (Beta)",
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
    .select("hormone_profile, secondary_profile, vorname, age_group, approved")
    .eq("id", user.id)
    .single();

  // First-time users who haven't completed the questionnaire go to /check
  if (!profile?.hormone_profile) redirect("/check?from=companion");

  // Users on the waitlist see a holding page instead of the companion
  if (!profile?.approved) {
    return <WaitlistScreen vorname={profile?.vorname ?? null} />;
  }

  return (
    <CompanionChat
      hormoneProfile={profile?.hormone_profile ?? null}
      secondaryProfile={profile?.secondary_profile ?? null}
      vorname={profile?.vorname ?? null}
      ageGroup={profile?.age_group ?? null}
    />
  );
}
