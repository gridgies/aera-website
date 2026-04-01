// ─────────────────────────────────────────────
// Hier einmal ausfüllen – gilt für alle Rechtsseiten
// ─────────────────────────────────────────────

export const LEGAL = {
  name: "Maria Strunden | Graciella Dharmawan",
  street: "Heidestr. 36",
  zip: "60316",
  city: "Frankfurt am Main",
  country: "Deutschland",
  email: "hello@aerahealth.de",
  state: "Hessen",                // z.B. "Bayern"
  authority: "Landesbeauftragte für Datenschutz und Informationsfreiheit Hessen", // z.B. "Bayerisches Landesamt für Datenschutzaufsicht"
  hosting: "Vercel",                  // z.B. "Vercel"
  courtCity: "Frankfurt am Main",       // für AGB – i.d.R. deine Stadt
} as const;

// Fertige Adresszeilen (werden in den Seiten direkt verwendet)
export const LEGAL_ADDRESS = [
  LEGAL.name,
  LEGAL.street,
  `${LEGAL.zip} ${LEGAL.city}`,
  LEGAL.country,
] as const;
