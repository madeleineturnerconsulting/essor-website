import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    n: "I",
    title: "We Tailor A Plan for You",
    desc: "Based on your team size, and available space, we design a session schedule that fits your working week. We sort the logistics so you don't have to.",
    meta: "TAILORED TO YOUR TEAM",
  },
  {
    n: "II",
    title: "We Come to You",
    desc: "Your teacher arrives at your office ready to go. No equipment hire, no venue booking, no commute for your team. Pilates happens in your space, on your time.",
    meta: "ON-SITE · NO FUSS",
  },
  {
    n: "III",
    title: "Your Team Moves",
    desc: "Sessions run for 45 to 60 minutes. Suitable for all fitness levels, no experience needed. We guide your people through every movement, whether it is their first class or their fiftieth.",
    meta: "45–60 MINUTES · ALL LEVELS",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Page hero ───────────────────────────────────────── */}
      <section className="px-14 pt-[120px] pb-[80px] grid md:grid-cols-2 gap-24 items-end">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
            How it works
          </div>
          <h1 className="font-serif font-light text-[clamp(52px,7.5vw,96px)] leading-none tracking-[-0.02em]">
            How it <em className="italic">works.</em>
          </h1>
        </div>
        <p className="font-sans text-[17px] leading-[1.65] text-ink-soft max-w-[480px] md:pb-4">
          A considered, three-step process designed to fit around the cadence of
          your team and the dimensions of your workplace. No machinery, no fuss.
          Just a teacher, a mat, and the better part of an hour.
        </p>
      </section>

      {/* ── Image ───────────────────────────────────────────── */}
      <section className="px-14 pb-[100px]">
        <div className="relative h-[520px] bw-photo">
          <Image
            src="https://images.pexels.com/photos/4325446/pexels-photo-4325446.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="In-house mat Pilates, boardroom conversion"
            fill
            className="object-cover"
          />
        </div>
        <div className="font-mono text-[10px] tracking-[0.18em] text-ink-mute mt-3">
          FIG. I — IN-HOUSE, BOARDROOM CONVERSION
        </div>
      </section>

      {/* ── Three steps ─────────────────────────────────────── */}
      <section className="px-14 pb-[140px]">
        <div className="border-t border-ink">
          {steps.map(({ n, title, desc, meta }) => (
            <div
              key={n}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr_280px] gap-8 md:gap-14 py-14 border-b border-rule items-start"
            >
              <div className="font-serif italic text-[64px] text-accent leading-none font-light">{n}</div>
              <div>
                <h3 className="font-serif text-[36px] font-normal mb-4">{title}</h3>
                <p className="font-sans text-[16px] text-ink-soft leading-[1.65] max-w-[560px]">{desc}</p>
              </div>
              <div className="hidden md:block font-mono text-[10px] tracking-[0.18em] text-ink-mute pt-4">
                — {meta}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-14 py-[140px] text-center">
        <h2 className="font-serif font-light text-[clamp(36px,5vw,64px)] leading-none tracking-[-0.02em] max-w-[800px] mx-auto mb-12">
          Begin with a <em className="italic">conversation.</em>
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 px-7 py-[18px] bg-ink text-paper font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
        >
          Get in touch &nbsp;→
        </Link>
      </section>
    </>
  );
}
