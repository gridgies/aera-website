import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";

/**
 * POST /api/companion/profile-save
 * Saves quiz results to an already-authenticated user's profile.
 */
export async function POST(request: NextRequest) {
  const supabase = await getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Nicht eingeloggt" }, { status: 401 });
  }

  const body = await request.json();
  const { profile } = body;

  if (!profile) {
    return NextResponse.json({ error: "Fehlende Profildaten" }, { status: 400 });
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      hormone_profile:   profile.primaryKey ?? null,
      secondary_profile: profile.secondaryKey ?? null,
      endo_flag:         profile.endoFlag ?? false,
      poi_warning:       profile.poiWarning ?? false,
      hp_overlap:        profile.hpOverlap ?? false,
      quiz_scores:       profile.scores ?? null,
      quiz_answers:      profile.answers ?? null,
      age_group:         profile.ageGroup ?? null,
      klarheit:          profile.klarheit ?? null,
    })
    .eq("id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
