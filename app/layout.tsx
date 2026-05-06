import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "ESSOR, Corporate Wellness",
  description: "In-house Pilates for NZ workplaces. Combat absenteeism and presenteeism with ESSOR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-burgundy-soft py-12 mt-24">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p className="font-serif text-xl tracking-[0.25em] text-burgundy">ESSOR</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
              © {new Date().getFullYear()} ESSOR. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
