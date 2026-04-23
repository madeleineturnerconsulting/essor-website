import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en" className={`${poppins.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10 py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="font-serif text-lg tracking-[0.25em] text-black">ESSOR</span>
            <p className="text-[10px] font-light tracking-[0.1em] text-black/35">
              © {new Date().getFullYear()} ESSOR. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
