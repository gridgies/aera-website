import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary (Warm Brown)
        "primary": "#6f5b53",
        "primary-dim": "#624f47",
        "primary-container": "#f8ddd2",
        "primary-fixed": "#f8ddd2",
        "primary-fixed-dim": "#eacfc5",
        "on-primary": "#fff7f5",
        "on-primary-container": "#614e46",
        "on-primary-fixed": "#4d3b34",
        "on-primary-fixed-variant": "#6b574f",

        // Secondary (Sage Green)
        "secondary": "#566350",
        "secondary-dim": "#4b5745",
        "secondary-container": "#e8f5dd",
        "secondary-fixed": "#e8f5dd",
        "secondary-fixed-dim": "#d9e7d0",
        "on-secondary": "#f0fde5",
        "on-secondary-container": "#515e4c",
        "on-secondary-fixed": "#3f4b3a",
        "on-secondary-fixed-variant": "#5c6855",

        // Tertiary (Muted Purple)
        "tertiary": "#655b6f",
        "tertiary-dim": "#594f63",
        "tertiary-container": "#f4e6ff",
        "tertiary-fixed": "#f4e6ff",
        "tertiary-fixed-dim": "#e5d8f0",
        "on-tertiary": "#fef6ff",
        "on-tertiary-container": "#5c5367",
        "on-tertiary-fixed": "#4a4154",
        "on-tertiary-fixed-variant": "#675d71",

        // Surfaces
        "background": "#fbf9f4",
        "surface": "#fbf9f4",
        "surface-dim": "#dadad2",
        "surface-bright": "#fbf9f4",
        "surface-tint": "#6f5b53",
        "surface-variant": "#e3e3db",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f4ee",
        "surface-container": "#efeee8",
        "surface-container-high": "#e9e8e1",
        "surface-container-highest": "#e3e3db",

        // On-Surface
        "on-surface": "#31332e",
        "on-surface-variant": "#5e605a",
        "on-background": "#31332e",
        "inverse-surface": "#0e0e0c",
        "inverse-on-surface": "#9e9d99",
        "inverse-primary": "#fee2d8",

        // Outline
        "outline": "#7a7b75",
        "outline-variant": "#b2b2ab",

        // Error
        "error": "#aa371c",
        "error-dim": "#821a01",
        "error-container": "#fa7150",
        "on-error": "#fff7f6",
        "on-error-container": "#671200",
      },
      fontFamily: {
        headline: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
