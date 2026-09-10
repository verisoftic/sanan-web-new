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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
