import Link from "next/link";
import Image from "next/image";

const bigStats = [
  {
    n: "$4.17", u: "B",
    label: "Lost to absenteeism in NZ in 2024",
    source: "SOURCE: BUSINESSNZ WELLBEING REPORT",
  },
  {
    n: "$7.50", u: "B",
    label: "Lost to disengagement in NZ in 2024",
    source: "SOURCE: GALLUP, STATE OF THE WORKPLACE",
  },
];

const gridStats = [
  ["73%",    "of NZ workers report regular back, neck or shoulder pain"],
  ["6.6",    "average sick days per worker per year, NZ 2024"],
  ["1 in 4", "knowledge workers report burnout in the past 12 months"],
  ["$1.4k",  "average ACC claim, work-related musculoskeletal injury"],
  ["62%",    "say wellness benefits affect whether they stay at a job"],
  ["3×",     "more productive after 30 minutes of mid-day movement"],
  ["48%",    "lower turnover at companies with structured wellness"],
  ["£5.30",  "returned per £1 spent on workplace wellbeing — Deloitte UK"],
];

const roiBars = [
  { label: "Cost of doing nothing · per worker per year",       ratio: 1,    txt: "$2,800", strong: false },
  { label: "Investment · quarterly Pilates programme",           ratio: 0.36, txt: "$1,000", strong: false },
  { label: "Estimated return · reduced absenteeism + retention", ratio: 1.6,  txt: "$4,500", strong: true  },
];

export default function TheDataPage() {
  return (
    <>
      {/* ── Hero — type only ─────────────────────────────────── */}
      <section className="px-14 pt-[120px] pb-[80px] text-center">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
          The data
        </div>
        <h1 className="font-serif font-light text-[clamp(44px,7.5vw,96px)] leading-none tracking-[-0.02em] max-w-[1100px] mx-auto mb-10">
          The cost of doing nothing<br />
          is no longer <em className="italic">abstract.</em>
        </h1>
        <p className="font-sans text-[17px] leading-[1.65] text-ink-soft max-w-[600px] mx-auto">
          A short reading of the New Zealand workplace, drawn from public
          sources and our own conversations with HR teams across Auckland.
        </p>
      </section>

      {/* ── Two big numbers ──────────────────────────────────── */}
      <section className="px-14 pb-[80px]">
        <div
          className="grid md:grid-cols-2"
          style={{ borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}
        >
          {bigStats.map(({ n, u, label, source }, i) => (
            <div
              key={label}
              className="px-12 py-20 text-center"
              style={{ borderRight: i === 0 ? "1px solid var(--ink)" : "none" }}
            >
              <div className="flex justify-center items-baseline gap-1.5 mb-4">
                <span className="font-serif font-light text-[clamp(80px,14vw,180px)] leading-none tracking-[-0.04em]">
                  {n}
                </span>
                <span className="font-serif italic font-light text-[clamp(36px,5vw,64px)] text-accent">
                  {u}
                </span>
              </div>
              <p className="font-serif text-[24px] font-normal max-w-[360px] mx-auto mb-6">
                {label}
              </p>
              <div className="font-mono text-[10px] tracking-[0.18em] text-ink-mute">
                — {source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Context + image ──────────────────────────────────── */}
      <section className="px-14 py-[120px] grid md:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div className="relative h-[540px] bw-photo">
          <Image
            src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Mat Pilates practice"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6">
            — Reading the numbers
          </div>
          <p className="font-serif italic font-light text-[36px] leading-[1.25] mb-6">
            Together, that&apos;s{" "}
            <span className="text-accent">$11.67 billion</span> a year, roughly
            3.6% of New Zealand&apos;s GDP, quietly leaving the economy through
            tired, disengaged, sore people.
          </p>
          <p className="font-sans text-[15px] leading-[1.7] text-ink-soft">
            The numbers behind absenteeism and presenteeism are easy to glaze
            past. Read slowly. They describe a country where movement, rest,
            and care are quietly in deficit, and where a small, consistent
            intervention pays back many times over.
          </p>
        </div>
      </section>

      {/* ── Stats grid ───────────────────────────────────────── */}
      <section className="px-14 pb-[120px]">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
          § The fuller picture
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}
        >
          {gridStats.map(([n, label], i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            return (
              <div
                key={label}
                className="p-7 min-h-[200px]"
                style={{
                  borderRight: col !== 3 ? "1px solid var(--rule)" : "none",
                  borderBottom: row === 0 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div className="font-serif font-light text-[56px] leading-none text-accent mb-4">
                  {n}
                </div>
                <p className="font-sans text-[13px] text-ink-soft leading-[1.55]">{label}</p>
              </div>
            );
          })}
        </div>
        <div className="font-mono text-[10px] tracking-[0.18em] text-ink-mute mt-4">
          — SOURCES: BUSINESSNZ, STATS NZ, ACC, GALLUP, DELOITTE (2023–24)
        </div>
      </section>

      {/* ── ROI comparison ───────────────────────────────────── */}
      <section className="bg-paper-deep px-14 py-[120px]">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-6 text-center">
          § Return on movement
        </div>
        <h2 className="font-serif font-light text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] text-center max-w-[980px] mx-auto mb-20">
          For every dollar spent on workplace wellbeing,{" "}
          <em className="italic">studies suggest</em> a return of three to five.
        </h2>

        <div className="max-w-[1000px] mx-auto">
          {roiBars.map(({ label, ratio, txt, strong }, i) => (
            <div
              key={label}
              className="grid grid-cols-[1fr_1fr_80px] md:grid-cols-[1fr_480px_80px] gap-8 items-center py-5"
              style={{ borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}
            >
              <span className="font-sans text-[14px] text-ink-soft">{label}</span>
              <div className="relative h-8">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-rule" />
                <div
                  className="absolute top-0 bottom-0 left-0"
                  style={{
                    width: `${(ratio / 1.6) * 100}%`,
                    background: strong ? "var(--ink)" : "var(--accent)",
                    opacity: strong ? 1 : 0.55,
                  }}
                />
              </div>
              <span
                className="font-serif text-[22px] text-right"
                style={{ color: strong ? "var(--ink)" : "var(--ink-soft)" }}
              >
                {txt}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-14 py-[140px] text-center">
        <h2 className="font-serif font-light text-[clamp(36px,5.6vw,72px)] leading-none tracking-[-0.02em] max-w-[900px] mx-auto mb-8">
          The case has been<br />made for you.
        </h2>
        <p className="font-sans text-[16px] text-ink-soft max-w-[540px] mx-auto mb-12">
          ESSOR makes the next step simple.
        </p>
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
