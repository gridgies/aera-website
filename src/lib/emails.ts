/**
 * Transactional email templates for Aera.
 * All emails share the same earth-tone brand system.
 */

const BRAND = {
  primary:          "#6f5b53",
  primaryContainer: "#f8ddd2",
  background:       "#fbf9f4",
  surfaceLow:       "#f5f4ee",
  surface:          "#efeee8",
  onSurface:        "#31332e",
  onSurfaceVariant: "#5e605a",
  outlineVariant:   "#b2b2ab",
  onPrimary:        "#fff7f5",
};

function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:${BRAND.background};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.background};padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:${BRAND.primary};border-radius:16px 16px 0 0;padding:28px 40px;">
          <p style="margin:0;font-size:20px;font-weight:700;color:${BRAND.onPrimary};letter-spacing:-0.3px;">Aera</p>
          <p style="margin:4px 0 0;font-size:12px;color:${BRAND.onPrimary};opacity:0.7;letter-spacing:0.05em;">aera:companion Beta</p>
        </td></tr>

        ${content}

        <!-- Footer -->
        <tr><td style="background:${BRAND.surface};padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;">
          <p style="margin:0 0 8px;font-size:11px;color:${BRAND.onSurfaceVariant};line-height:1.6;">
            Aera ist kein Medizinprodukt und ersetzt keine ärztliche Beratung.
          </p>
          <p style="margin:0;font-size:11px;color:${BRAND.outlineVariant};">
            Aera ·
            <a href="https://www.aerahealth.de/datenschutz" style="color:${BRAND.onSurfaceVariant};text-decoration:none;">Datenschutz</a> ·
            <a href="https://www.aerahealth.de/impressum" style="color:${BRAND.onSurfaceVariant};text-decoration:none;">Impressum</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Waitlist confirmation ────────────────────────────────────────────────────

export function buildWaitlistEmailHtml(vorname: string | null): string {
  const greeting = vorname ? `Hallo ${vorname}` : "Hallo";

  const content = `
    <!-- Hero -->
    <tr><td style="background:${BRAND.primaryContainer};padding:36px 40px;text-align:center;">
      <div style="width:64px;height:64px;background:${BRAND.primary};border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
        <span style="font-size:28px;line-height:64px;display:block;text-align:center;">⏳</span>
      </div>
      <h1 style="margin:0 0 10px;font-size:24px;font-weight:700;color:${BRAND.primary};line-height:1.25;">Du bist auf der Warteliste!</h1>
      <p style="margin:0;font-size:14px;color:${BRAND.onSurfaceVariant};line-height:1.6;">${greeting}, wir freuen uns, dass du dabei bist.</p>
    </td></tr>

    <!-- Body -->
    <tr><td style="background:white;padding:36px 40px;">
      <p style="margin:0 0 16px;font-size:14px;color:${BRAND.onSurface};line-height:1.7;">
        Dein Konto ist angelegt und dein Hormonprofil gespeichert – du bist bereit.
        Wir schalten deinen Zugang zum <strong>aera:companion Beta</strong> frei, sobald
        wir Kapazitäten haben, und schicken dir dann sofort eine E-Mail.
      </p>
      <p style="margin:0 0 24px;font-size:14px;color:${BRAND.onSurface};line-height:1.7;">
        Damit du nicht einfach wartest: Auf <strong>aerahealth.de</strong> findest du schon
        jetzt fundierte Ratgeber zu Wechseljahren, Hashimoto, Hormonen und mehr –
        alles kostenlos und ohne Konto.
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.surfaceLow};border-radius:12px;margin-bottom:24px;">
        <tr><td style="padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${BRAND.onSurfaceVariant};">Was dich erwartet</p>
          ${[
            ["💬", "Persönlicher Chat", "Deine Begleiterin kennt dein Hormonprofil und antwortet individuell"],
            ["🔬", "Blutwerte erklären", "Laborwerte endlich verständlich – was sie bedeuten und was zu tun ist"],
            ["📋", "Nächste Schritte", "Konkrete Handlungsempfehlungen statt vager Tipps"],
          ].map(([icon, title, desc]) => `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
            <tr>
              <td style="width:36px;vertical-align:top;padding-top:2px;font-size:18px;">${icon}</td>
              <td style="padding-left:10px;">
                <p style="margin:0;font-size:13px;font-weight:600;color:${BRAND.onSurface};">${title}</p>
                <p style="margin:2px 0 0;font-size:12px;color:${BRAND.onSurfaceVariant};line-height:1.5;">${desc}</p>
              </td>
            </tr>
          </table>`).join("")}
        </td></tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <a href="https://www.aerahealth.de" style="display:inline-block;background:${BRAND.primary};color:${BRAND.onPrimary};padding:14px 32px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;letter-spacing:0.03em;">
              Ratgeber lesen →
            </a>
          </td>
        </tr>
      </table>
    </td></tr>`;

  return emailShell(content);
}

export function buildWaitlistEmailText(vorname: string | null): string {
  const greeting = vorname ? `Hallo ${vorname}` : "Hallo";
  return `${greeting},

du bist auf der Warteliste für den aera:companion Beta!

Dein Konto ist angelegt und dein Hormonprofil gespeichert. Wir schalten
deinen Zugang frei, sobald wir Kapazitäten haben, und schicken dir dann
sofort eine E-Mail.

Was dich erwartet:
  💬 Persönlicher Chat – deine Begleiterin kennt dein Hormonprofil
  🔬 Blutwerte erklären – endlich verständlich
  📋 Nächste Schritte – konkrete Handlungsempfehlungen

In der Zwischenzeit findest du auf aerahealth.de kostenlose Ratgeber
zu Wechseljahren, Hashimoto, Hormonen und mehr.

aerahealth.de →  https://www.aerahealth.de

──────────────────────────────────────────────
Aera · aerahealth.de
Datenschutz: https://www.aerahealth.de/datenschutz
Impressum: https://www.aerahealth.de/impressum
`;
}

// ─── Approval notification ────────────────────────────────────────────────────

export function buildApprovalEmailHtml(vorname: string | null): string {
  const greeting = vorname ? `Hallo ${vorname}` : "Hallo";

  const content = `
    <!-- Hero -->
    <tr><td style="background:${BRAND.primaryContainer};padding:36px 40px;text-align:center;">
      <div style="width:64px;height:64px;background:${BRAND.primary};border-radius:50%;margin:0 auto 20px;">
        <span style="font-size:28px;line-height:64px;display:block;text-align:center;">✅</span>
      </div>
      <h1 style="margin:0 0 10px;font-size:24px;font-weight:700;color:${BRAND.primary};line-height:1.25;">Dein Zugang ist freigeschaltet!</h1>
      <p style="margin:0;font-size:14px;color:${BRAND.onSurfaceVariant};line-height:1.6;">${greeting}, du kannst jetzt loslegen.</p>
    </td></tr>

    <!-- Body -->
    <tr><td style="background:white;padding:36px 40px;">
      <p style="margin:0 0 16px;font-size:14px;color:${BRAND.onSurface};line-height:1.7;">
        Wir haben deinen Zugang zum <strong>aera:companion Beta</strong> aktiviert.
        Deine Begleiterin kennt bereits dein Hormonprofil und ist bereit, deine Fragen
        zu beantworten – zu Blutwerten, Symptomen, Ernährung und nächsten Schritten.
      </p>
      <p style="margin:0 0 28px;font-size:14px;color:${BRAND.onSurface};line-height:1.7;">
        Da es sich um eine Beta-Version handelt, bitte wir dich um Verständnis für
        gelegentliche Limits oder Änderungen. Dein Feedback hilft uns, Aera
        besser zu machen.
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        <tr>
          <td align="center">
            <a href="https://www.aerahealth.de/companion" style="display:inline-block;background:${BRAND.primary};color:${BRAND.onPrimary};padding:16px 40px;border-radius:50px;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:0.03em;">
              Companion öffnen →
            </a>
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.surfaceLow};border-radius:12px;">
        <tr><td style="padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:${BRAND.onSurfaceVariant};">Tipps für den Start</p>
          ${[
            "Stelle konkrete Fragen – z.B. \"Was bedeutet mein TSH-Wert von 3,2?\"",
            "Teile relevante Symptome, die du gerade erlebst",
            "Frag nach nächsten Schritten oder welche Ärztin geeignet wäre",
            "Bei medizinischen Notfällen bitte immer direkt den Arzt oder 112 rufen",
          ].map((tip) => `
          <p style="margin:0 0 8px;font-size:13px;color:${BRAND.onSurfaceVariant};line-height:1.5;padding-left:16px;position:relative;">
            <span style="color:${BRAND.primary};font-weight:700;margin-right:6px;">→</span>${tip}
          </p>`).join("")}
        </td></tr>
      </table>
    </td></tr>`;

  return emailShell(content);
}

export function buildApprovalEmailText(vorname: string | null): string {
  const greeting = vorname ? `Hallo ${vorname}` : "Hallo";
  return `${greeting},

dein Zugang zum aera:companion Beta ist freigeschaltet!

Du kannst jetzt loslegen: https://www.aerahealth.de/companion

Deine Begleiterin kennt bereits dein Hormonprofil und ist bereit, deine
Fragen zu Blutwerten, Symptomen, Ernährung und nächsten Schritten
zu beantworten.

Tipps für den Start:
  → Stelle konkrete Fragen – z.B. "Was bedeutet mein TSH-Wert von 3,2?"
  → Teile relevante Symptome, die du gerade erlebst
  → Frag nach nächsten Schritten oder welche Ärztin geeignet wäre
  → Bei medizinischen Notfällen bitte immer direkt den Arzt oder 112 rufen

Da es sich um eine Beta-Version handelt, bitte wir um Verständnis für
gelegentliche Limits oder Änderungen. Dein Feedback ist wertvoll!

──────────────────────────────────────────────
Aera · aerahealth.de
Datenschutz: https://www.aerahealth.de/datenschutz
Impressum: https://www.aerahealth.de/impressum
`;
}
