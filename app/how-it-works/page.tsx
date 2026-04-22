import Link from "next/link";
import { Phone, ClipboardList, MapPin, PersonStanding } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book a Discovery Call",
    body: "We start with a conversation — no obligation, no pressure. Tell us about your team, your workplace, and what you are hoping to achieve. We will ask a few questions and share what we think could work.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "We Build Your Programme",
    body: "Based on your goals, team size, and available space, we design a session schedule that fits your working week. We sort the logistics so you do not have to.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "We Come to You",
    body: "Your instructor arrives at your office ready to go. No equipment hire, no venue booking, no commute for your team. Pilates happens in your space, on your time.",
  },
  {
    number: "04",
    icon: PersonStanding,
    title: "Your Team Moves",
    body: "Sessions run for 45 to 60 minutes. Suitable for all fitness levels, no experience needed. We guide your people through every movement, whether it is their first class or their fiftieth.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-12 h-px bg-[#6B2737] mb-10" />
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-6">
            Getting started
          </p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] italic font-normal leading-tight tracking-tight max-w-2xl text-[#1a1a1a]">
            Our process, in four steps.
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* Steps */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col">
            {steps.map(({ number, icon: Icon, title, body }, i) => (
              <div
                key={number}
                className={`grid md:grid-cols-[140px_1fr] gap-8 md:gap-16 py-16 ${
                  i !== steps.length - 1 ? "border-b border-[#6B2737]/15" : ""
                }`}
              >
                <div className="flex flex-row md:flex-col items-center md:items-start gap-5">
                  <span className="font-serif text-5xl font-normal text-[#6B2737]/25 leading-none tabular-nums">
                    {number}
                  </span>
                  <Icon size={18} strokeWidth={1} className="text-[#1a1a1a]/30 md:mt-4" />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="font-serif text-2xl font-normal mb-4 text-[#1a1a1a]">{title}</h2>
                  <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8] max-w-xl">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* CTA */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-serif text-[clamp(1.75rem,4vw,3rem)] italic font-normal text-[#1a1a1a] leading-tight max-w-2xl mb-12">
            Ready to bring movement to your workplace?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#6B2737] text-[#FAF8F5] text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#5a1f2d] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
