import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ardigitallabs.com"),
  title: "AR Digital Labs, LLC | Purposeful Software for Families and Churches",
  description:
    "AR Digital Labs builds custom software, mobile apps, SaaS platforms, and AI-powered experiences that strengthen families, support spiritual growth, and equip ministry leaders.",
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png",
  },
  openGraph: {
    title: "AR Digital Labs, LLC",
    description:
      "Faith-driven software design and development for families, children, churches, and mission-minded organizations.",
    images: ["/brand/icon-side-name.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
