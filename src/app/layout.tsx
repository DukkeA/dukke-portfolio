import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NESH® — Creative Developer",
  description:
    "A faithful Next.js recreation of the NESH creative developer portfolio.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/1101fef6-favicon.png" },
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
