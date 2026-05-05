import Link from "next/link";
import Image from "next/image";

// Roman numeral Unicode chars: Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ
const ROMAN = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ"];

const atAGlance = [
  ["Ⅰ",  "Capacity",     "Up to 30 people in person, or up to 100 virtually."],
  ["Ⅱ",  "Experience",   "All fitness levels welcomed; beginners encouraged."],
  ["Ⅲ",  "Duration",     "30, 45 or 60 minute sessions, tailored to your workplace."],
  ["Ⅳ",  "Equipment",    "Mats provided on request."],
  ["Ⅴ",  "Your teacher", "Fully qualified Mat Pilates teacher; pre and postnatal certified."],
  ["Ⅵ",  "Availability", "On-site in Auckland, or virtually around Aotearoa."],
];

const caseItems = [
  ["Reduces physical pain",   "Addresses musculoskeletal issues caused by prolonged sitting, including back pain, tight hips and neck tension."],
  ["Lowers stress",           "Breath-focused movement activates the parasympathetic nervous system. Lower anxiety, better focus."],
  ["Builds team culture",     "Shared experiences create connection. A weekly session gives teams a reason to gather and move."],
  ["Improves focus",          "Movement increases blood flow to the brain. More productive, better at problem-solving."],
  ["Signals that you care",   "Offering wellness tells people: this company invests in us. Reduces turnover, attracts talent."],
  ["Reduces injury risk",     "Builds the strength and mobility that prevents the chronic injuries desk workers are prone to."],
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="grid md:grid-cols-[1.05fr_1fr] min-h-[760px]">
        {/* Left */}
        <div className="px-14 pt-[100px] pb-[80px] flex flex-col justify-between">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
            Corporate wellness · Auckland, NZ
          </div>

          <div>
            <h1 className="font-serif font-light text-[clamp(52px,7vw,92px)] leading-none tracking-[-0.022em] mb-12">
              Your team<br />
              deserves to<br />
              <em className="italic text-accent">feel good</em><br />
              at work.
            </h1>
            <p className="font-sans text-[17px] leading-[1.65] text-ink-soft max-w-[460px] mb-14">
              ESSOR brings in-house Pilates to New Zealand workplaces. Reducing
              absenteeism, easing stress, and building the kind of culture that
              keeps people around.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-7 py-[18px] bg-ink text-paper font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
            >
              Get in touch &nbsp;→
            </Link>
          </div>

          <div className="font-mono text-[10px] tracking-[0.18em] text-ink-mute flex justify-between mt-20">
            <span>EST. MMXXIV</span>
            <span>NZ-WIDE · IN-HOUSE</span>
            <span>I · VIII</span>
          </div>
        </div>

        {/* Right — B&W hero image */}
        <div className="relative border-l border-rule min-h-[480px] md:min-h-0">
          <Image
            src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Mat Pilates, minimal studio"
            fill
            className="object-cover bw-photo"
            priority
          />
        </div>
      </section>

      {/* ── Marquee strip ───────────────────────────────────── */}
      <div className="border-t border-ink border-b border-ink py-7 overflow-hidden">
        <div className="flex gap-12 justify-around px-8 flex-wrap">
          {[
            "Considered movement.",
            "Confident teaching.",
            "Quiet results.",
            "Made for the working week.",
          ].map((phrase, i) => (
            <span key={phrase} className="flex items-center gap-12 font-serif italic font-light text-[28px] text-ink">
              {i > 0 && <span className="text-accent not-italic">◦</span>}
              {phrase}
            </span>
          ))}
        </div>
      </div>

      {/* ── At a glance ─────────────────────────────────────── */}
      <section className="px-14 py-[140px]">
        {/* Header row */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-20 mb-20">
          <div>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
              § I &nbsp;· At a glance
            </div>
            <h2 className="font-serif font-light text-[56px] leading-none tracking-[-0.02em]">
              The shape<br />of a session.
            </h2>
          </div>
          <p className="font-sans text-[16px] leading-[1.7] text-ink-soft max-w-[540px] md:self-end md:pb-2">
            Each engagement is shaped to the cadence of your team and the
            dimensions of your space. Below, the parameters we work within.
          </p>
        </div>

        {/* Table */}
        <div className="border-t border-ink">
          {atAGlance.map(([n, label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_240px_1fr_180px] gap-4 md:gap-8 py-8 border-b border-rule items-baseline"
            >
              <span className="font-serif italic text-[22px] text-accent">{n}</span>
              <h3 className="font-serif text-[24px] font-normal">{label}</h3>
              <p className="font-sans text-[15px] text-ink-soft leading-[1.55] col-start-2 md:col-auto">{value}</p>
              <span className="hidden md:block font-mono text-[10px] text-ink-mute tracking-[0.18em] text-right">
                · DETAIL
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Diptych ─────────────────────────────────────────── */}
      <section className="px-14 pb-[120px] grid md:grid-cols-2 gap-8">
        <figure className="m-0">
          <div className="relative h-[540px] bw-photo">
            <Image
              src="https://images.pexels.com/photos/8436714/pexels-photo-8436714.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="In-house mat Pilates group session"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="font-mono text-[10px] tracking-[0.18em] text-ink-mute mt-3">
            FIG. II · IN-HOUSE GROUP, MORNING
          </figcaption>
        </figure>
        <figure className="m-0 md:pt-20">
          <div className="relative h-[540px] bw-photo">
            <Image
              src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Breath work detail"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="font-mono text-[10px] tracking-[0.18em] text-ink-mute mt-3">
            FIG. III · BREATH WORK, DETAIL
          </figcaption>
        </figure>
      </section>

      {/* ── The case for Pilates ────────────────────────────── */}
      <section className="bg-paper-deep px-14 py-[120px]">
        <div className="text-center mb-[100px]">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
            § II &nbsp;· The case for Pilates
          </div>
          <h2 className="font-serif font-light text-[clamp(44px,5.6vw,72px)] leading-[1.05] tracking-[-0.02em] max-w-[900px] mx-auto">
            What Pilates does <em className="italic">for your team.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3">
          {caseItems.map(([title, desc], i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div
                key={title}
                className="p-12 min-h-[280px]"
                style={{
                  borderRight: col !== 2 ? "1px solid var(--rule)" : "none",
                  borderBottom: row === 0 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div className="font-serif italic text-[26px] text-accent mb-7">
                  {ROMAN[i]}.
                </div>
                <h3 className="font-serif text-[26px] font-normal leading-[1.15] mb-4">
                  {title}
                </h3>
                <p className="font-sans text-[14px] text-ink-soft leading-[1.65]">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Pull quote over image ────────────────────────────── */}
      <section className="relative h-[720px] overflow-hidden">
        <div className="absolute inset-0 bw-photo">
          <Image
            src="https://images.pexels.com/photos/4325446/pexels-photo-4325446.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Studio floor mat Pilates"
            fill
            className="object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,14,12,0.05) 0%, rgba(15,14,12,0.55) 100%)" }} />
        {/* Quote */}
        <div className="absolute inset-0 flex flex-col justify-center px-14 md:px-[120px]">
          <div className="font-mono text-[10px] tracking-[0.18em] text-paper/70 mb-8">
            · ON PRACTICE
          </div>
          <p className="font-serif italic font-light text-[clamp(28px,4.4vw,56px)] leading-[1.2] text-paper max-w-[1000px]">
            &ldquo;When companies actively encouraged movement, everything shifted.
            People showed up differently. For themselves, for their teams,
            and for the business.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <section className="px-14 py-[160px] grid md:grid-cols-2 gap-20 items-end">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
            § III &nbsp;· Begin
          </div>
          <h2 className="font-serif font-light text-[clamp(44px,6.25vw,80px)] leading-none tracking-[-0.02em]">
            Invest in<br />your people.<br />
            <em className="italic">Protect</em><br />
            your bottom line.
          </h2>
        </div>
        <div>
          <p className="font-sans text-[17px] leading-[1.65] text-ink-soft max-w-[480px] mb-14">
            The case for workplace wellness has never been stronger. ESSOR makes
            it easy to act on it. Send a brief, and we&apos;ll reply with a tailored
            proposal within two working days.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-7 py-[18px] bg-ink text-paper font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-4 px-7 py-[18px] border border-ink text-ink font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-ink hover:text-paper transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
