import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const interTight = Inter_Tight({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetbrains = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "ESSOR — Corporate Wellness",
  description: "In-house Mat Pilates for New Zealand workplaces. Reduce absenteeism, ease stress, build culture.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-ink bg-paper px-14 py-14">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
            <div>
              <div className="font-serif font-bold text-[32px] tracking-[0.36em] pl-[0.36em] mb-6 text-ink">
                ESSOR
              </div>
              <p className="font-sans text-[13px] text-ink-soft max-w-[280px] leading-relaxed">
                Considered Pilates for the New Zealand workplace.
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-4">
                Studio
              </div>
              <div className="font-sans text-[13px] text-ink-soft space-y-2">
                <div><Link href="/how-it-works" className="hover:text-ink transition-colors">How It Works</Link></div>
                <div><Link href="/the-data" className="hover:text-ink transition-colors">The Data</Link></div>
                <div><Link href="/about" className="hover:text-ink transition-colors">About</Link></div>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-4">
                Reach
              </div>
              <div className="font-sans text-[13px] text-ink-soft space-y-2">
                <div>hello@essor.co.nz</div>
                <div>Auckland · NZ</div>
              </div>
            </div>

            <div className="md:self-end md:text-right">
              <span className="font-mono text-[10px] tracking-[0.18em] text-ink-mute">
                © MMXXVI ESSOR
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
