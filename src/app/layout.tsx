import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dukke — Software Engineer",
  description:
    "Andrés Duque, also known as Dukke. Software engineer building web applications across frontend and backend. A little about me and what I build.",
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
