import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Aera Health bei Fragen zur Plattform, Datenschutz, Presse oder Kooperationen.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Aera Health",
    description:
      "Kontaktiere Aera Health bei Fragen zur Plattform, Datenschutz, Presse oder Kooperationen.",
    url: "https://www.aerahealth.de/kontakt",
    type: "website",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
