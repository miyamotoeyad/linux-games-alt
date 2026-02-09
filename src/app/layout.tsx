import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
};

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://linuxgamesalt.com";

export const metadata: Metadata = {
  title: {
    default: "Linux Games Alt | Tactical Gaming Alternatives",
    template: "%s | Linux Games Alt",
  },
  description:
    "Deploy superior gaming alternatives. Verify anti-cheat compatibility, Proton tiers, and tactical game data for Linux and Steam Deck.",
  keywords: [
    "Gaming Alternatives",
    "Anti-cheat Compatibility",
    "Linux Gaming",
    "Steam Deck Verified",
    "ProtonDB",
    "Linux Games Alt",
  ],
  authors: [{ name: "Linux Games Alt Team" }],
  creator: "Linux Games Alt",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "phsyYqmauz0IEuSeMX3muiHhjWBOp6bBZDGmi8QNHXw",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Linux Games Alt",
    title: "Linux Games Alt | Tactical Gaming Alternatives",
    description:
      "Find playable alternatives for games with restrictive anti-cheats on Linux and Steam Deck.",
    images: [
      {
        url: "/main.webp",
        width: 1200,
        height: 630,
        alt: "Linux Games Alt Interface Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linux Games Alt",
    description:
      "Deploy superior gaming alternatives with verified compatibility.",
    creator: "@linuxgamesalt",
    images: ["/main.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon1.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 selection:bg-indigo-500/30">
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-3QK5Z4LMJQ" />
    </html>
  );
}
