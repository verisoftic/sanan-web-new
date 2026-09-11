import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// 700 was loaded but never used anywhere in the app (audited: no `font-bold`
// or `<strong>` combined with `font-body`) — dropping it removes a whole
// font file with zero visual change.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Was ["500", "600"], but `font-bold` (700) is the weight actually used with
// `font-mono` throughout the site (stat values, spec codes) — without 700
// loaded, the browser was faking it with synthetic/algorithmic bold instead
// of real bold glyphs. Swapping 600→700 fixes that at the same file count.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sananmanufacturing.com"),
  title: {
    default: "Sanan Manufacturing — Precision Medical Device Manufacturing",
    template: "%s | Sanan Manufacturing",
  },
  description:
    "Precision-engineered syringes, IV systems and blood transfusion devices, manufactured to ISO 13485 & GMP standards in a Class 10,000 cleanroom.",
  keywords: [
    "medical device manufacturing",
    "syringes",
    "IV kits",
    "blood bags",
    "ISO 13485",
    "GMP",
    "cleanroom",
    "Pakistan",
  ],
  openGraph: {
    title: "Sanan Manufacturing — Precision Medical Device Manufacturing",
    description:
      "ISO 13485 & GMP certified syringes, IV systems and blood transfusion devices, engineered for global clinical trust.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

// Every Icon in the app renders at a fixed opsz(24)/wght(400)/GRAD(0) and only
// toggles FILL between 0 and 1 — so the font is requested pinned to exactly that
// instance, plus `icon_names` to subset it to only the glyphs actually used.
// This keeps the font at ~11KB instead of the ~4MB the unpinned/unsubsetted
// variable-font request would otherwise pull down (verified via direct fetch).
const ICON_NAMES = [
  "air", "arrow_forward", "arrow_right", "assignment", "biotech", "bolt", "build",
  "call", "category", "chat", "check_circle", "checklist", "checkroom",
  "chevron_left", "chevron_right", "close", "cyclone", "description", "domain",
  "download", "event", "event_available", "expand_more", "fact_check", "factory",
  "flag", "format_quote", "handshake", "health_and_safety", "help", "inventory",
  "inventory_2", "label", "language", "local_shipping", "location_on", "lock",
  "mail", "menu", "person", "photo_library", "pin_drop", "policy",
  "precision_manufacturing", "public", "receipt_long", "record_voice_over",
  "request_quote", "route", "sanitizer", "schedule", "science", "search",
  "search_off", "send", "straighten", "support_agent", "target", "timeline",
  "verified", "verified_user", "view_in_ar", "workspace_premium", "zoom_in",
].join(",");

const iconFontHref = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=${ICON_NAMES}&display=swap`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={iconFontHref} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
