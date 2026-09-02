import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const SITE_URL = "https://oneforall360.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "One For All 360° | Everything. One Place.",
  description:
    "One For All 360° is building a connected business ecosystem across industries, products, services and opportunities — starting from India and reaching the world.",
  openGraph: {
    title: "One For All 360° | Everything. One Place.",
    description:
      "Building a connected business ecosystem across industries, starting from India and reaching the world.",
    url: SITE_URL,
    siteName: "One For All 360°",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One For All 360° | Everything. One Place.",
    description:
      "Building a connected business ecosystem across industries, starting from India and reaching the world.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

const skipClass = "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" className={skipClass}>Skip to content</a>
        {children}
      </body>
    </html>
  );
}