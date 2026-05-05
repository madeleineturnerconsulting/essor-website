import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    n: "I",
    title: "A conversation",
    desc: "We begin with a 20-minute call. We learn the shape of your team, your space, and what you would like Pilates to do for them.",
    meta: "20 MINUTES · VIDEO OR IN PERSON",
  },
  {
    n: "II",
    title: "A tailored proposal",
    desc: "Within two working days, we send a written proposal covering session length, frequency, capacity, and pricing, designed for the rhythm of your workplace.",
    meta: "DELIVERED BY EMAIL · TWO WORKING DAYS",
  },
  {
    n: "III",
    title: "A first session",
    desc: "Your teacher arrives 15 minutes early. Mats are laid out. Lights are dimmed. The team gathers. We move, breathe, and reset together.",
    meta: "30, 45 OR 60 MINUTES · ON SITE OR VIRTUAL",
  },
  {
    n: "IV",
    title: "An ongoing rhythm",
    desc: "Most teams settle into a weekly or fortnightly cadence. We refine the practice as your needs change, with modifications for pre-natal, injury, and seasonal pacing.",
    meta: "WEEKLY · FORTNIGHTLY · MONTHLY",
  },
];

const weBring = [
  "A fully qualified Mat Pilates teacher",
  "Pre- and postnatal certified",
  "Mats provided on request",
  "Music, where appropriate",
  "Modifications for every level",
  "Insurance and full compliance",
];

const youBring = [
  "A clear, quiet space — boardroom, breakout, foyer",
  "Roughly 2.5m² per participant",
  "A nominated point of contact",
  "Comfortable clothing, no shoes required",
  "An open mind",
  "(Mats, if you have them — we will bring the rest)",
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
            From first<br />conversation<br />to <em className="italic">first session.</em>
          </h1>
        </div>
        <p className="font-sans text-[17px] leading-[1.65] text-ink-soft max-w-[480px] md:pb-4">
          A considered, four-step process designed to fit around the cadence of
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

      {/* ── Four steps ──────────────────────────────────────── */}
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

      {/* ── What we bring / What you bring ──────────────────── */}
      <section className="bg-paper-deep px-14 py-[120px] grid md:grid-cols-2 gap-20">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
            — What we bring
          </div>
          <ul className="m-0 p-0 list-none">
            {weBring.map((item) => (
              <li
                key={item}
                className="font-serif text-[22px] font-normal py-4 border-b border-rule"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
            — What you bring
          </div>
          <ul className="m-0 p-0 list-none">
            {youBring.map((item) => (
              <li
                key={item}
                className="font-serif text-[22px] font-normal py-4 border-b border-rule"
              >
                {item}
              </li>
            ))}
          </ul>
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
          Book a discovery call &nbsp;→
        </Link>
      </section>
    </>
  );
}
