import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://ytgiveawaypicker.com"),

  title: {
    default: "YT Giveaway Picker",
    template: "%s | YT Giveaway Picker",
  },

  description:
    "Free YouTube video and YouTube Shorts giveaway picker with keyword filters, emoji filters, verification pages, and downloadable winner cards.",

  keywords: [
    "youtube giveaway picker",
    "youtube comment picker",
    "youtube shorts giveaway picker",
    "random youtube comment picker",
    "youtube giveaway tool",
    "youtube winner picker",
  ],

  openGraph: {
    title: "YT Giveaway Picker",
    description:
      "Pick random winners from YouTube videos and Shorts comments.",
    url: "https://ytgiveawaypicker.com",
    siteName: "YT Giveaway Picker",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YT Giveaway Picker",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YT Giveaway Picker",
    description:
      "Free YouTube giveaway picker with verification pages and winner cards.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white">
        <SiteHeader />
        <Toaster position="top-center" />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}