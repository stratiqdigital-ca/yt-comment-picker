import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";
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
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense — replace ca-pub-XXXXXXX with your publisher ID once approved */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
          crossOrigin="anonymous"
        />
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            try {
              var t = localStorage.getItem('theme');
              if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
              else if (window.matchMedia('(prefers-color-scheme: light)').matches) document.documentElement.setAttribute('data-theme', 'light');
              else document.documentElement.setAttribute('data-theme', 'dark');
            } catch(e){}
          })()
        `}} />
      </head>
      <body>
        <ThemeProvider>
          <SiteHeader />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
              },
            }}
          />
          {children}
          <SiteFooter />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
