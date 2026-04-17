import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * POST /api/companion/signup
 * Creates a Supabase auth user (auto-confirmed) and writes quiz profile data.
 * Companion signup flow — bypasses email confirmation for immediate access.
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { vorname, email, password, profile } = body;

  if (!email || !password || !vorname) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Create user with admin API — email_confirm: true skips confirmation email
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { vorname },
  });

  if (authError) {
    // Return user-facing German error message
    const msg = authError.message.includes("already registered")
      ? "Diese E-Mail-Adresse ist bereits registriert."
      : authError.message;
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const userId = authData.user.id;

  // Upsert profile row with quiz data
  const { error: profileError } = await supabase
    .from("profiles")
    .upsert({
      id: userId,
      email,
      vorname,
      hormone_profile:    profile.primaryKey ?? null,
      secondary_profile:  profile.secondaryKey ?? null,
      endo_flag:          profile.endoFlag ?? false,
      poi_warning:        profile.poiWarning ?? false,
      hp_overlap:         profile.hpOverlap ?? false,
      quiz_scores:        profile.scores ?? null,
      quiz_answers:       profile.answers ?? null,
      age_group:          profile.ageGroup ?? null,
      klarheit:           profile.klarheit ?? null,
    });

  if (profileError) {
    // Don't fail the whole signup — profile write is best-effort
    console.error("Profile upsert error:", profileError.message);
  }

  return NextResponse.json({ userId }, { status: 201 });
}
