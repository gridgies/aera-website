import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { buildApprovalEmailHtml, buildApprovalEmailText } from "@/lib/emails";

/**
 * POST /api/admin/approve-user
 * Sets approved = true on a profile and sends the approval email.
 * Protected by ADMIN_SECRET bearer token.
 *
 * Body: { userId?: string; email?: string }
 * At least one of userId or email is required.
 */
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization") ?? "";
  const token = authHeader.replace("Bearer ", "");
  if (!token || token !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { userId, email } = body as { userId?: string; email?: string };

  if (!userId && !email) {
    return NextResponse.json({ error: "userId or email required" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // Resolve userId from email if needed
  let resolvedUserId = userId;
  let resolvedEmail = email;
  let vorname: string | null = null;

  if (!resolvedUserId && resolvedEmail) {
    const { data: users } = await supabase.auth.admin.listUsers();
    const match = users?.users.find((u) => u.email === resolvedEmail);
    if (!match) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    resolvedUserId = match.id;
  }

  // Load profile for vorname + email
  const { data: profile, error: profileReadError } = await supabase
    .from("profiles")
    .select("vorname, email, approved")
    .eq("id", resolvedUserId)
    .single();

  if (profileReadError || !profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  if (profile.approved) {
    return NextResponse.json({ message: "Already approved" }, { status: 200 });
  }

  vorname = profile.vorname ?? null;
  resolvedEmail = profile.email ?? resolvedEmail;

  // Set approved = true
  const { error: updateError } = await supabase
    .from("profiles")
    .update({ approved: true })
    .eq("id", resolvedUserId);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  // Send approval email
  if (process.env.RESEND_API_KEY && resolvedEmail) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Aera Health <check@aerahealth.de>",
        to: resolvedEmail,
        subject: "Dein Zugang zum aera:companion Beta ist freigeschaltet!",
        html: buildApprovalEmailHtml(vorname),
        text: buildApprovalEmailText(vorname),
      });
    } catch (emailErr) {
      console.error("Approval email error:", emailErr);
      return NextResponse.json({ approved: true, emailSent: false }, { status: 200 });
    }
  }

  return NextResponse.json({ approved: true, emailSent: !!process.env.RESEND_API_KEY }, { status: 200 });
}
