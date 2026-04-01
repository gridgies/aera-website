/**
 * Dynamic OG Image Generator
 * Route: /og?title=...&subtitle=...
 *
 * Usage in metadata:
 *   openGraph: {
 *     images: [{
 *       url: `/og?title=${encodeURIComponent("Dein Titel")}&subtitle=${encodeURIComponent("Untertitel")}`,
 *       width: 1200,
 *       height: 630,
 *     }],
 *   }
 *
 * Example URL:
 *   /og?title=Wechseljahre+verstehen&subtitle=Symptome%2C+Ursachen+und+Behandlung
 */

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const BRAND = {
  bg: "#fbf9f4",
  bgCard: "#f8ddd2",
  primary: "#6f5b53",
  secondary: "#566350",
  onSurface: "#31332e",
  onSurfaceVariant: "#5e605a",
  accent: "#d4a99a",
};

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return res.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get("title") ?? "Aera Health";
  const subtitle =
    searchParams.get("subtitle") ??
    "Hormonelle Gesundheit für Frauen – wissenschaftlich fundiert";

  // Attempt to load Noto Serif Bold for headline (TTF required by satori)
  // For production: place NotoSerif-Bold.ttf in this directory and use:
  //   const fontData = await fetch(new URL('./NotoSerif-Bold.ttf', import.meta.url)).then(r => r.arrayBuffer());
  const notoSerifUrl =
    "https://fonts.gstatic.com/s/notoserif/v23/ga6Iaw1J5X9T9RW6j9bNfFIKq_y_Yo2KpD4.ttf";
  const fontData = await loadFont(notoSerifUrl);

  const fonts = fontData
    ? [{ name: "NotoSerif", data: fontData, weight: 700 as const, style: "normal" as const }]
    : [];

  const headlineFamily = fontData ? "NotoSerif" : "Georgia, serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: BRAND.bg,
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle gradient blob — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.bgCard}cc 0%, ${BRAND.bg}00 70%)`,
          }}
        />

        {/* Subtle gradient blob — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.bgCard}88 0%, ${BRAND.bg}00 70%)`,
          }}
        />

        {/* Thin accent bar — left edge */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            width: 5,
            height: 510,
            background: `linear-gradient(to bottom, ${BRAND.bgCard}, ${BRAND.accent}, ${BRAND.bgCard})`,
            borderRadius: "0 4px 4px 0",
          }}
        />

        {/* Content area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "60px 80px 60px 90px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Top: Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Logo mark */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: BRAND.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2.5px solid ${BRAND.bg}`,
                }}
              />
            </div>
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: BRAND.primary,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Aera Health
            </span>
          </div>

          {/* Center: Title + subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 900,
            }}
          >
            <h1
              style={{
                fontFamily: headlineFamily,
                fontSize: title.length > 50 ? 52 : title.length > 35 ? 62 : 72,
                fontWeight: 700,
                color: BRAND.onSurface,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: 26,
                color: BRAND.onSurfaceVariant,
                lineHeight: 1.4,
                margin: 0,
                maxWidth: 760,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Bottom: Trust badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 100,
                background: `${BRAND.primary}14`,
                border: `1px solid ${BRAND.primary}22`,
              }}
            >
              <span style={{ fontSize: 14, color: BRAND.secondary, fontWeight: 600 }}>
                ✓
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: BRAND.primary,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                Wissenschaftlich fundiert
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 100,
                background: `${BRAND.secondary}14`,
                border: `1px solid ${BRAND.secondary}22`,
              }}
            >
              <span style={{ fontSize: 14, color: BRAND.secondary, fontWeight: 600 }}>
                ✓
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: BRAND.secondary,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                }}
              >
                Entwickelt in Deutschland
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}
