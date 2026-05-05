import Link from "next/link";
import Image from "next/image";

const convictions = [
  ["I",   "Quiet over loud",      "Wellness should not announce itself. The best week is the one your team does not notice."],
  ["II",  "Practice over product", "We do not sell a programme. We hold a practice, week after week, with the same care as the first session."],
  ["III", "People over scale",     "We grow slowly, on the strength of relationships. Every workplace is taught by a teacher who knows it."],
];

const credentials = [
  "Polestar Mat Pilates · Comprehensive Certification",
  "Pre and Postnatal Pilates · Certified Practitioner",
  "Functional Movement Screen · Level II",
  "Ten years of teaching across Auckland and Wellington",
  "Insured and ACC compliant",
  "Member, Pilates Method Alliance",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="px-14 pt-[120px] pb-[80px] grid md:grid-cols-2 gap-24 items-end">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
            About
          </div>
          <h1 className="font-serif font-light text-[clamp(52px,7.5vw,96px)] leading-none tracking-[-0.02em]">
            A small studio<br />with a quiet<br /><em className="italic">conviction.</em>
          </h1>
        </div>
        <p className="font-sans text-[17px] leading-[1.65] text-ink-soft max-w-[480px] md:pb-4">
          ESSOR was founded in Auckland on a simple observation: that the
          working day is harder on the body than we admit, and that a quiet,
          consistent practice can change it.
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
        <div className="font-mono text-[10px] tracking-[0.18em] text-ink-mute mt-3">
          FIG. I · BOARDROOM, RESET
        </div>
      </section>

      {/* ── Founder / story ─────────────────────────────────── */}
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
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
            § I · The founder
          </div>
          <h2 className="font-serif font-light text-[clamp(36px,4.4vw,56px)] leading-[1.05] tracking-[-0.02em] mb-8">
            From the studio<br />into the workplace.
          </h2>
          <div className="space-y-6">
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft">
              Over a decade of teaching Mat Pilates across Auckland, the same
              conversation kept arriving on the mat. Tight shoulders from long
              meetings. Lower back pain that built through the week. A culture
              that nobody quite had the time to tend.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft">
              ESSOR began in 2024 as a way of bringing the studio inside the
              workplace. Considered, quiet, deeply qualified. Not a perk, but a
              practice.
            </p>
            <p className="font-sans text-[16px] leading-[1.7] text-ink-soft">
              Every session is taught personally. There is no franchise, no app,
              no roster. One teacher, one room, the better part of an hour.
            </p>
          </div>
        </div>
      </section>

      {/* ── Convictions ─────────────────────────────────────── */}
      <section className="bg-paper-deep px-14 py-[120px]">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6 text-center">
          § II · What we hold to
        </div>
        <h2 className="font-serif font-light text-[clamp(36px,5vw,64px)] leading-none tracking-[-0.02em] text-center mb-20">
          A short list of <em className="italic">convictions.</em>
        </h2>
        <div className="grid md:grid-cols-3 border-t border-ink">
          {convictions.map(([n, title, desc], i) => (
            <div
              key={n}
              className="p-8 min-h-[320px] border-b border-ink"
              style={{ borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}
            >
              <div className="font-serif italic text-[32px] text-accent mb-6">{n}.</div>
              <h3 className="font-serif text-[28px] font-normal leading-[1.15] mb-4">{title}</h3>
              <p className="font-sans text-[14px] text-ink-soft leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Credentials ─────────────────────────────────────── */}
      <section className="px-14 py-[140px]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-20 items-start">
          <div>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
              § III · Credentials
            </div>
            <h2 className="font-serif font-light text-[48px] leading-[1.05] tracking-[-0.02em]">
              The teacher,<br />in detail.
            </h2>
          </div>
          <ul className="m-0 p-0 list-none border-t border-ink">
            {credentials.map((item) => (
              <li
                key={item}
                className="font-serif text-[22px] font-normal py-5 border-b border-rule"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-14 py-[140px] text-center border-t border-ink">
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
