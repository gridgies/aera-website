import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EngagementTracker } from "@/components/ui/EngagementTracker";
import { organizationSchema, websiteSchema, jsonLd } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next";

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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "Aera Health | Frauengesundheit: Hormone, Wechseljahre & Hashimoto",
    template: "%s | Aera Health",
  },
  description:
    "Personalisierte Unterstützung für deine Hormone, Energie und langfristige Gesundheit. Wechseljahre, Hashimoto, hormonelle Balance – wissenschaftlich fundiert.",
  keywords: [
    "Frauengesundheit",
    "Hormone",
    "Menopause",
    "Wechseljahre",
    "Hashimoto",
    "Schilddrüse",
    "hormonelles Gleichgewicht",
    "Perimenopause",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: { google: "zuslK36IIa_TEif-K3sk9Z8nw7UjrelibJZwx0LZeAE" },
  authors: [{ name: "Aera Health" }],
  metadataBase: new URL("https://www.aerahealth.de"),
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  openGraph: {
    title: "Aera Health | Frauengesundheit: Hormone, Wechseljahre & Hashimoto",
    description:
      "Personalisierte Unterstützung für deine Hormone, Energie und langfristige Gesundheit.",
    siteName: "Aera Health",
    locale: "de_DE",
    type: "website",
    url: "https://www.aerahealth.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aera Health | Frauengesundheit",
    description:
      "Verstehe deine Hormone, Wechseljahre und hormonelle Balance. Wissenschaftlich fundiert.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteSchema())}
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <EngagementTracker />
        <Analytics />
      </body>
    </html>
  );
}
