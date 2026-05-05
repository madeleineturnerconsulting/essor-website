"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/the-data",     label: "The Data"     },
  { href: "/about",        label: "About"         },
  { href: "/contact",      label: "Contact"       },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-paper sticky top-0 z-50 border-b border-rule">
      {/* Desktop nav */}
      <nav className="hidden md:grid grid-cols-[auto_1fr_auto] items-center px-14 py-7 gap-16">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif font-bold text-[26px] tracking-[0.36em] pl-[0.36em] text-ink hover:opacity-60 transition-opacity"
        >
          ESSOR
        </Link>

        {/* Centre links */}
        <div className="flex items-center justify-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-[13px] transition-colors pb-1 ${
                pathname === href
                  ? "text-ink border-b border-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Discovery link */}
        <Link
          href="/contact"
          className="font-mono text-[10px] tracking-[0.18em] text-accent hover:opacity-70 transition-opacity"
        >
          BOOK A DISCOVERY →
        </Link>
      </nav>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif font-bold text-[22px] tracking-[0.36em] pl-[0.36em] text-ink"
        >
          ESSOR
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-ink hover:opacity-60 transition-opacity"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-rule bg-paper px-6 py-8 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-sans text-[13px] transition-colors ${
                pathname === href ? "text-ink" : "text-ink-soft"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-[10px] tracking-[0.18em] text-accent mt-2"
          >
            BOOK A DISCOVERY →
          </Link>
        </nav>
      )}
    </header>
  );
}
