import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte fülle alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    const { error } = await getSupabaseAdmin().from("contact_submissions").insert({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject?.trim() || null,
      message: message.trim(),
      status: "new",
    });

    if (error) throw error;

    return NextResponse.json(
      { message: "Deine Nachricht wurde erfolgreich gesendet. Wir melden uns bald!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
