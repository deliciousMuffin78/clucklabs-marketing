import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terms of Service - Cluck Labs",
  description: "Terms of Service for Cluck Labs",
  // Prevent indexing of mobile version
  robots: "noindex, nofollow",
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-white dark:bg-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
