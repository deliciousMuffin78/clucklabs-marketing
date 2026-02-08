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
    "Cluck | Move Better Together: Clubs, Pros, Creators, Members & Brands",
  description:
    "Cluck connects running, walking, training, recovery, food, sleep, and community so your next step is clear, simple, and easier to repeat.",
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
