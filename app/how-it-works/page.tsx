import Link from "next/link";
import { Phone, ClipboardList, MapPin, PersonStanding, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book a Discovery Call",
    body: "We start with a conversation, no obligation, no pressure. Tell us about your team, your workplace, and what you are hoping to achieve. We will ask a few questions and share what we think could work.",
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
      {/* Header */}
      <section className="bg-cream pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-px bg-burgundy" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
              Our process
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] max-w-3xl">
            Simple by design. <em className="italic text-burgundy">Effortless by intention.</em>
          </h1>
          <p className="text-lg font-light text-ink/65 max-w-xl mt-12 leading-[1.8]">
            From first call to first session, we make it easy. Four steps stand between you and a healthier workplace.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream pb-32 md:pb-44">
        <div className="max-w-6xl mx-auto px-8">
          <div className="border-t border-burgundy-soft">
            {steps.map(({ number, icon: Icon, title, body }) => (
              <div
                key={number}
                className="grid md:grid-cols-[10rem_4rem_1fr] gap-8 md:gap-12 py-16 md:py-20 border-b border-burgundy-soft"
              >
                <div>
                  <p className="font-serif text-6xl md:text-7xl font-light text-burgundy leading-none">
                    {number}
                  </p>
                </div>
                <div className="flex items-start">
                  <Icon size={22} strokeWidth={1.25} className="text-burgundy mt-3" />
                </div>
                <div className="max-w-xl">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-4 font-light">
                    Step {number}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 leading-tight">
                    {title}
                  </h2>
                  <p className="text-base font-light text-ink/65 leading-[1.9]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 max-w-3xl">
            <p className="font-serif text-3xl md:text-4xl font-light italic leading-snug text-ink/85 mb-12">
              When the logistics disappear, the consistency follows.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-burgundy text-cream text-[11px] uppercase tracking-[0.25em] font-light px-12 py-5 hover:bg-ink transition-colors"
            >
              Book a discovery call
              <ArrowRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
