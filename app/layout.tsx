import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
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
    <html lang="en" className={`${poppins.variable} ${dmSerifDisplay.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5]">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#6B2737]/25 py-10 bg-[#FAF8F5]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="font-serif text-lg tracking-[0.25em] text-[#1a1a1a]">ESSOR</span>
            <p className="text-[10px] font-light tracking-[0.1em] text-[#1a1a1a]/35">
              © {new Date().getFullYear()} ESSOR. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
