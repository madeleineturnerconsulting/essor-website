import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${poppins.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-black/40 font-light">
            © {new Date().getFullYear()} ESSOR. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
