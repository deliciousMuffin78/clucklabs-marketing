import { Archivo } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Cluck | Train Better Together: Clubs, Pros, Creators, Brands & Members",
  description: "Built with Next.js and TypeScript",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={archivo.className}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}
