import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dukke — Creative Developer",
  description:
    "Dukke — creative development, interactive websites and selected projects.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/dukke-icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
