import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experten für Frauengesundheit",
  description:
    "Spezialistinnen für Wechseljahre, Hashimoto, Schilddrüse und Hormongesundheit im Aera Health Experten-Netzwerk.",
  alternates: { canonical: "/experten" },
  openGraph: {
    title: "Experten für Frauengesundheit | Aera Health",
    description:
      "Spezialistinnen für Wechseljahre, Hashimoto, Schilddrüse und Hormongesundheit.",
    url: "https://www.aerahealth.de/experten",
    type: "website",
  },
};

export default function ExpertenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
