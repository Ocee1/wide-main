import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
  variable: "--font-philosopher",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WideAngu — Capture Every Moment, Anywhere",
  description:
    "Find professional photographers for weddings, portraits, events, and more. Book sessions, communicate directly, and enjoy secure payments with guaranteed stunning results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${philosopher.variable} ${mulish.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
