import { Phone, ClipboardList, MapPin, PersonStanding } from "lucide-react";

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
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-4">
          Getting started
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-20 max-w-lg leading-tight">
          Our Process
        </h1>

        <div className="relative">
          {/* vertical line */}
          <div className="hidden md:block absolute left-[2.75rem] top-0 bottom-0 w-px bg-black/8" />

          <div className="flex flex-col gap-16">
            {steps.map(({ number, icon: Icon, title, body }) => (
              <div key={number} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                {/* step indicator */}
                <div className="flex-shrink-0 flex items-center justify-center w-[5.5rem] h-[5.5rem] border border-black/10 bg-white relative z-10">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div className="pt-4">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-black/25 mb-3 block">
                    Step {number}
                  </span>
                  <h2 className="font-serif text-2xl font-semibold mb-3">{title}</h2>
                  <p className="text-sm font-light text-black/60 leading-relaxed max-w-xl">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
