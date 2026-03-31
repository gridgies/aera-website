import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Aera | Verstehe deinen Körper",
  description:
    "Personalisierte Unterstützung für deine Hormone, Energie und langfristige Gesundheit. Wissenschaftlich fundiert, empathisch begleitet.",
  keywords: ["Frauengesundheit", "Hormone", "Menopause", "Zyklus", "Gesundheit"],
  authors: [{ name: "Aera Health" }],
  openGraph: {
    title: "Aera | Verstehe deinen Körper",
    description:
      "Personalisierte Unterstützung für deine Hormone, Energie und langfristige Gesundheit.",
    siteName: "Aera Health",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
