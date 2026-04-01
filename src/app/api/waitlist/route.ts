import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, topic } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    // Prüfen ob E-Mail bereits existiert
    const { data: existing } = await getSupabaseAdmin()
      .from("waitlist_entries")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (existing) {
      return NextResponse.json(
        { message: "Diese E-Mail-Adresse ist bereits auf der Warteliste." },
        { status: 200 }
      );
    }

    const { error } = await getSupabaseAdmin().from("waitlist_entries").insert({
      email: email.toLowerCase().trim(),
      topic: topic || null,
      source: "website_waitlist",
    });

    if (error) throw error;

    return NextResponse.json(
      { message: "Erfolgreich auf die Warteliste eingetragen!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
