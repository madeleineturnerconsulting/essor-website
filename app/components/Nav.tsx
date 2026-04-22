"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/the-data", label: "The Data" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#6B2737]/25 bg-[#FAF8F5] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.25em] text-[#1a1a1a] font-normal"
        >
          ESSOR
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-light uppercase tracking-[0.15em] transition-colors ${
                pathname === href
                  ? "text-[#6B2737]"
                  : "text-[#1a1a1a]/45 hover:text-[#1a1a1a]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[#6B2737]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#6B2737]/25 bg-[#FAF8F5]">
          <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-xs font-light uppercase tracking-[0.15em] ${
                  pathname === href ? "text-[#6B2737]" : "text-[#1a1a1a]/45"
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
