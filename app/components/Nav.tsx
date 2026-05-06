"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/the-data", label: "The Data" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-burgundy-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl text-burgundy tracking-[0.25em] font-medium"
        >
          ESSOR
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[11px] uppercase tracking-[0.2em] font-light transition-colors ${
                pathname === href
                  ? "text-burgundy"
                  : "text-ink/60 hover:text-burgundy"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-burgundy p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-burgundy-soft">
          <nav className="max-w-6xl mx-auto px-8 py-6 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-[11px] uppercase tracking-[0.2em] font-light ${
                  pathname === href ? "text-burgundy" : "text-ink/60"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
