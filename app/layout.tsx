import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://oneforall360.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "One For All 360° | Everything. One Place.",
  description:
    "One For All 360° is building a connected business ecosystem across industries, products, services and opportunities — born from India, built for the world.",
  openGraph: {
    title: "One For All 360° | Everything. One Place.",
    description:
      "Building a connected business ecosystem across industries. Born from India. Built for the world.",
    url: SITE_URL,
    siteName: "One For All 360°",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One For All 360° | Everything. One Place.",
    description:
      "Building a connected business ecosystem across industries. Born from India. Built for the world.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

const FONT_URL = "https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap";

const skipClass = "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href={FONT_URL} />
      </head>
      <body>
        <a href="#main" className={skipClass}>Skip to content</a>
        {children}
      </body>
    </html>
  );
}