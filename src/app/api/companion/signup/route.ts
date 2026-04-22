import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { buildWaitlistEmailHtml, buildWaitlistEmailText } from "@/lib/emails";

/**
 * POST /api/companion/signup
 * Creates a Supabase auth user (auto-confirmed) and writes quiz profile data.
 * Users land on the waitlist (approved = false) until manually approved.
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { vorname, email, password, profile } = body;

  if (!email || !password || !vorname) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Create user with admin API — email_confirm: true skips Supabase confirmation email
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { vorname },
  });

  if (authError) {
    const msg = authError.message.includes("already registered")
      ? "Diese E-Mail-Adresse ist bereits registriert."
      : authError.message;
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const userId = authData.user.id;

  // Upsert profile — approved = false (waitlisted)
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
      approved:           false,
      waitlisted_at:      new Date().toISOString(),
    });

  if (profileError) {
    console.error("Profile upsert error:", profileError.message);
  }

  // Send waitlist confirmation email
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Aera Health <check@aerahealth.de>",
        to: email,
        subject: "Du bist auf der Warteliste für aera:companion Beta!",
        html: buildWaitlistEmailHtml(vorname),
        text: buildWaitlistEmailText(vorname),
      });
    } catch (emailErr) {
      console.error("Waitlist email error:", emailErr);
    }
  }

  return NextResponse.json({ userId, waitlisted: true }, { status: 201 });
}
