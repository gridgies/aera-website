import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────
interface QuizSubmitBody {
  email: string;
  answers: { questionId: number; selectedOption: number | number[] }[];
  result: {
    primaryKey: string;
    primaryTitel: string;
    klarheit: number;
    ageGroup: string;
    scores: Record<string, number>;
    noPattern: boolean;
    lowScore: boolean;
  };
}

// ─── Email HTML template ──────────────────────────────────────────────────────
function buildEmailHtml(body: QuizSubmitBody): string {
  const { result } = body;

  const profileColors: Record<string, string> = {
    P: "#d97706", // amber
    H: "#2563eb", // blue
    C: "#7c3aed", // violet
    E: "#e11d48", // rose
  };

  const profileContent: Record<string, {
    signale: string[];
    bluttests: { wert: string; warum: string }[];
    naechsteSchritte: string[];
    conditionUrl: string;
  }> = {
    P: {
      signale: [
        "Vasomotorische Symptome (Hitzewallungen, Nachtschweiß) deuten auf Östrogenabfall hin",
        "Schlafstörungen durch Temperaturregulations-Veränderungen im Hypothalamus",
        "Zyklusveränderungen als frühes Zeichen nachlassender Ovarialfunktion",
      ],
      bluttests: [
        { wert: "FSH", warum: "Wichtigster Perimenopause-Marker" },
        { wert: "Östradiol (E2)", warum: "Aktueller Östrogenstatus" },
        { wert: "TSH, fT3, fT4", warum: "Schilddrüse ausschließen" },
        { wert: "AMH", warum: "Eierstockreserve messen" },
        { wert: "Ferritin & Vitamin D", warum: "Häufige Mangelzustände" },
      ],
      naechsteSchritte: [
        "Gynäkologin ansprechen – nach FSH, Östradiol und AMH fragen",
        "Symptomtagebuch führen: Wann treten Hitzewallungen auf?",
        "Hormontherapie (HRT) mit Ärztin besprechen",
        "Traubsilberkerze / Rotklee-Isoflavone als pflanzliche Alternativen prüfen",
      ],
      conditionUrl: "https://www.aerahealth.de/menopause",
    },
    H: {
      signale: [
        "Kälteempfindlichkeit und ständiges Frieren als klassisches Hypothyreose-Zeichen",
        "Diffuser Haarausfall als Folge gestörter Schilddrüsenhormon-Wirkung",
        "Erschöpfung, die durch Schlaf nicht besser wird",
        "Trockene Haut durch reduzierte Talgdrüsenaktivität",
      ],
      bluttests: [
        { wert: "TSH", warum: "Erstes Screening" },
        { wert: "fT3 & fT4", warum: "Aktive Schilddrüsenhormone" },
        { wert: "TPO-Antikörper", warum: "Hashimoto-Marker" },
        { wert: "Ferritin", warum: "Eisenspeicher bei Erschöpfung" },
        { wert: "Vitamin D & Selen", warum: "Autoimmunaktivität reduzieren" },
      ],
      naechsteSchritte: [
        "Beim Arzt explizit TPO-Antikörper anfragen",
        "Selen 200 µg täglich (Metaanalysen belegt)",
        "Vitamin D Zielwert 40–60 ng/ml",
        "Glutenfreier Selbstversuch für 3 Monate erwägen",
      ],
      conditionUrl: "https://www.aerahealth.de/hashimoto",
    },
    C: {
      signale: [
        "Tired-but-wired: Dysregulierter Cortisol-Tagesrhythmus",
        "Einschlafprobleme trotz Erschöpfung",
        "Innere Unruhe und Herzrasen",
      ],
      bluttests: [
        { wert: "Cortisol-Tagesprofil (Speichel)", warum: "Tagesrhythmus messen" },
        { wert: "DHEA-S", warum: "Resilienzmarker" },
        { wert: "Nüchterninsulin & HbA1c", warum: "Insulinresistenz ausschließen" },
        { wert: "Progesteron", warum: "Pregnenolon-Steal erkennen" },
      ],
      naechsteSchritte: [
        "Cortisol-Tagesprofil durchführen (Speicheltest)",
        "Magnesiumglycinat abends: 300–400 mg",
        "Ashwagandha (Cortisol-senkende Evidenz)",
        "Schlafzeit auf 22–23 Uhr vorziehen",
      ],
      conditionUrl: "https://www.aerahealth.de/hormone",
    },
    E: {
      signale: [
        "Zyklusabhängige Beschwerden",
        "Brustspannen und Wassereinlagerungen",
        "Stimmungsabstürze vor der Periode",
      ],
      bluttests: [
        { wert: "Progesteron (Tag 19–22)", warum: "Lutealphase messen" },
        { wert: "Östradiol (E2, Tag 3–5)", warum: "Basismessung" },
        { wert: "LH & FSH", warum: "Zyklusqualität prüfen" },
        { wert: "Schilddrüse (TSH, fT3, TPO)", warum: "Hashimoto stört Progesteron" },
      ],
      naechsteSchritte: [
        "Zyklusprotokoll führen: Symptome täglich notieren",
        "Mönchspfeffer (Vitex) bei PMS",
        "Bioidentisches Progesteron mit Ärztin besprechen",
        "Lebergesundheit unterstützen: weniger Alkohol, Kreuzblütler",
      ],
      conditionUrl: "https://www.aerahealth.de/hormone",
    },
  };

  const color = profileColors[result.primaryKey] ?? "#6366f1";
  const content = profileContent[result.primaryKey] ?? profileContent.H;

  const klarheitText =
    result.klarheit >= 60
      ? "Starkes Signal"
      : result.klarheit >= 40
      ? "Klares Muster"
      : "Gemischtes Bild";

  const testRows = content.bluttests
    .map(
      (t) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#1f2937;border-bottom:1px solid #f3f4f6;">${t.wert}</td><td style="padding:8px 12px;color:#6b7280;border-bottom:1px solid #f3f4f6;">${t.warum}</td></tr>`
    )
    .join("");

  const stepRows = content.naechsteSchritte
    .map(
      (s, i) =>
        `<tr><td style="padding:8px 0;vertical-align:top;width:28px;"><span style="display:inline-block;width:22px;height:22px;background:${color};color:white;border-radius:50%;text-align:center;line-height:22px;font-size:12px;font-weight:700;">${i + 1}</span></td><td style="padding:8px 0 8px 10px;color:#374151;font-size:14px;line-height:1.5;">${s}</td></tr>`
    )
    .join("");

  const signaleRows = content.signale
    .map(
      (s) =>
        `<li style="margin-bottom:8px;color:#374151;font-size:14px;line-height:1.5;">✓ ${s}</li>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dein Aera Symptom-Check: ${result.primaryTitel}</title>
</head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:white;border-radius:16px 16px 0 0;padding:32px 40px 24px;border-bottom:1px solid #f3f4f6;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#1f2937;letter-spacing:-0.5px;">Aera Health</p>
          <p style="margin:4px 0 0;font-size:13px;color:#9ca3af;">Dein persönlicher Symptom-Check</p>
        </td></tr>

        <!-- Hero -->
        <tr><td style="background:${color}12;padding:32px 40px;border-left:4px solid ${color};">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${color};opacity:.7;">Dein Hormonprofil</p>
          <h1 style="margin:0 0 12px;font-size:26px;font-weight:700;color:${color};line-height:1.2;">${result.primaryTitel}</h1>
          <p style="margin:0;font-size:14px;color:${color};opacity:.8;">${klarheitText} · Übereinstimmung: ${result.klarheit}%</p>
          ${result.lowScore ? `<p style="margin:12px 0 0;font-size:13px;color:#6b7280;background:white;padding:10px 14px;border-radius:8px;">Dein Signal ist schwach – diese Auswertung ist eine erste Orientierung. Bitte besprich deine Symptome mit einer Ärztin.</p>` : ""}
        </td></tr>

        <!-- Signals -->
        <tr><td style="background:white;padding:32px 40px;">
          <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#1f2937;">Signale aus deinen Antworten</h2>
          <ul style="margin:0;padding:0;list-style:none;">${signaleRows}</ul>
        </td></tr>

        <!-- Blood tests -->
        <tr><td style="background:#f9fafb;padding:32px 40px;">
          <h2 style="margin:0 0 8px;font-size:16px;font-weight:700;color:#1f2937;">Empfohlene Bluttests</h2>
          <p style="margin:0 0 16px;font-size:12px;color:#9ca3af;">Zeige diese Liste bei deinem nächsten Arzttermin.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:white;border-radius:12px;overflow:hidden;">
            <thead><tr>
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;border-bottom:2px solid #f3f4f6;">Wert</th>
              <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;border-bottom:2px solid #f3f4f6;">Warum</th>
            </tr></thead>
            <tbody>${testRows}</tbody>
          </table>
        </td></tr>

        <!-- Next steps -->
        <tr><td style="background:white;padding:32px 40px;">
          <h2 style="margin:0 0 16px;font-size:16px;font-weight:700;color:#1f2937;">Nächste Schritte</h2>
          <table width="100%" cellpadding="0" cellspacing="0">${stepRows}</table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="background:${color};padding:32px 40px;text-align:center;border-radius:0 0 0 0;">
          <p style="margin:0 0 16px;font-size:18px;font-weight:700;color:white;">Mehr erfahren auf aerahealth.de</p>
          <a href="${content.conditionUrl}" style="display:inline-block;background:white;color:${color};padding:12px 28px;border-radius:50px;font-weight:700;font-size:14px;text-decoration:none;">Ratgeber lesen →</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f3f4f6;padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;">
          <p style="margin:0 0 8px;font-size:12px;color:#9ca3af;">
            Diese Auswertung ersetzt keine ärztliche Diagnose. Sie dient als erste Orientierung.
          </p>
          <p style="margin:0;font-size:11px;color:#d1d5db;">
            Aera Health · <a href="https://www.aerahealth.de/datenschutz" style="color:#9ca3af;">Datenschutz</a> · <a href="https://www.aerahealth.de/impressum" style="color:#9ca3af;">Impressum</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: QuizSubmitBody = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const errors: string[] = [];

    // ── Supabase: store submission ──────────────────────────────────────────
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        const { error } = await supabase.from("quiz_submissions").insert({
          email: body.email,
          answers: body.answers,
          primary_profile: body.result.primaryKey,
          primary_titel: body.result.primaryTitel,
          klarheit: body.result.klarheit,
          age_group: body.result.ageGroup,
          scores: body.result.scores,
          no_pattern: body.result.noPattern,
          low_score: body.result.lowScore,
        });
        if (error) errors.push(`Supabase: ${error.message}`);
      } catch (e) {
        errors.push(`Supabase import failed: ${e}`);
      }
    }

    // ── Resend: send email ──────────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
          from: "Aera Health <check@aerahealth.de>",
          to: body.email,
          subject: `Dein Aera Check: ${body.result.primaryTitel}`,
          html: buildEmailHtml(body),
        });
        if (error) errors.push(`Resend: ${error.message}`);
      } catch (e) {
        errors.push(`Resend import failed: ${e}`);
      }
    }

    if (errors.length > 0) {
      console.error("quiz-submit errors:", errors);
    }

    // Always return 200 to the client — partial failures are logged server-side
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("quiz-submit fatal:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
