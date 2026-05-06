import Link from "next/link";
import Image from "next/image";

const values = [
  ["Our mission", "Make workplace wellness the norm, not the exception."],
  ["Our method",  "In-house Pilates, designed around your team and your space."],
  ["Our standard","Qualified teachers. Sessions that fit real working weeks."],
];

const credentials = [
  "Mat Pilates · Body Control Pilates, London",
  "Pre and Post Natal Pilates · Barre Body",
  "In-house Pilates for Auckland workplaces",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="px-14 pt-[120px] pb-[80px] grid md:grid-cols-2 gap-24 items-end">
        <div>
          <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-accent mb-10">
            Our story
          </div>
          <h1 className="font-serif font-light text-[clamp(52px,7.5vw,96px)] leading-none tracking-[-0.02em]">
            About ESSOR.
          </h1>
        </div>
        <p className="font-serif italic text-[22px] font-light text-ink-mute leading-snug md:pb-4 tracking-wide">
          ESSOR: to flourish, to take flight, to grow rapidly.
        </p>
      </section>

      {/* ── Full-width image ─────────────────────────────────── */}
      <section className="px-14 pb-[100px]">
        <div className="relative h-[520px] bw-photo">
          <Image
            src="https://images.pexels.com/photos/8436598/pexels-photo-8436598.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Group mat Pilates session"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────────── */}
      <section className="px-14 py-[120px] grid md:grid-cols-[1fr_1.4fr] gap-20">
        <div className="relative h-[620px] bw-photo self-start">
          <Image
            src="https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Mat Pilates movement"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
            The story
          </div>
          <h2 className="font-serif font-light text-[clamp(36px,4.4vw,56px)] leading-[1.05] tracking-[-0.02em] mb-20">
            Movement is the<br />missing variable.
          </h2>
          {/* Each paragraph has explicit bottom margin; double spacing (mb-16)
              applied after paragraphs ending at the four specified sentences */}
          <div>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft mb-24">
              ESSOR was born from two things: a deep love of movement, and
              first-hand experience of what happens when people don&apos;t have
              access to it. The numbers tell a clear story. New Zealand
              businesses lose $4.17 billion a year to absenteeism, and billions
              more to presenteeism, the quieter cost of people who show up every
              day but are running on empty. Regular movement during the workday
              is one of the most effective and accessible ways to change that.
              It is why ESSOR exists.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft mb-24">
              Throughout a corporate career spanning Digital and Growth roles
              across the UK, US and Australian markets, I almost always chose to
              work for purpose-led businesses in the wellness sector. What I
              noticed across those roles was consistent: when companies actively
              encouraged movement, everything shifted. People showed up
              differently, for themselves, for their teams, and for the business.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft mb-24">
              At a personalised nutrition scale-up, bonus incentives and
              lunchtime team workouts were part of the culture. At Nike, movement
              classes and physio during work hours were built into the day. The
              typical struggle of fitting in exercise around a commute simply
              wasn&apos;t an issue, and the culture reflected that. People were more
              willing to go above and beyond, and I genuinely believe that came
              down to senior leadership treating movement as a priority, not a
              perk.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft mb-24">
              Movement has been central to my life since childhood. While others
              went to netball, I was at kids yoga. That translated into a career
              in health and wellness, and in 2021 I decided to formalise it. I
              completed my Mat Pilates training at Body Control Pilates in
              London, a world-leading and highly respected teacher training
              institution, and went on to complete my Pre and Post Natal
              qualification through Barre Body.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft mb-10">
              I truly believe my purpose is to improve the lives of others
              through health and movement.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft">
              Today, that takes shape through ESSOR.
              We come to your workplace, we run the session, and we make it easy
              for your people to show up. No gym memberships, no studio commute,
              no scheduling headaches. Just movement, where your team already is.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="bg-paper-deep px-14 py-[120px]">
        <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-accent mb-8 text-center">
          What we stand for
        </div>
        <h2 className="font-serif font-light text-[clamp(36px,5vw,64px)] leading-none tracking-[-0.02em] text-center mb-4">
          What we <em className="italic">believe in.</em>
        </h2>
        <div className="grid md:grid-cols-3 border-t border-ink mt-14">
          {values.map(([label, value], i) => (
            <div
              key={label}
              className="p-8 min-h-[280px] border-b border-ink"
              style={{ borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}
            >
              <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-6">{label}</div>
              <h3 className="font-serif text-[26px] font-light leading-[1.2] mt-4">{value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── Qualifications ──────────────────────────────────── */}
      <section className="px-14 py-[140px]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-20 items-start">
          <div>
            <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
              Qualifications
            </div>
            <h2 className="font-serif font-light text-[48px] leading-[1.05] tracking-[-0.02em] mb-10">
              The teacher,<br />in detail.
            </h2>
          </div>
          <ul className="m-0 p-0 list-none border-t border-ink">
            {credentials.map((item) => (
              <li
                key={item}
                className="font-serif text-[22px] font-light py-5 border-b border-rule"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-14 py-[140px] text-center border-t border-ink">
        <h2 className="font-serif font-light text-[clamp(36px,5vw,64px)] leading-none tracking-[-0.02em] max-w-[800px] mx-auto mb-24">
          Invest in your people.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-4 px-7 py-[22px] bg-ink text-white font-sans text-[12px] tracking-[0.18em] uppercase rounded-full hover:bg-ink-soft transition-colors"
        >
          Get in touch &nbsp;→
        </Link>
      </section>
    </>
  );
}
