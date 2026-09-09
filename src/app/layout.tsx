import type { Metadata, Viewport } from "next";
import { profile } from "@/content/profile";
import { isIndexable, site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s · Andrés Duque" },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: profile.fullName, url: site.url }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/dukke-icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/assets/dukke-icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = { themeColor: "#d5cfbe" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.language}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
