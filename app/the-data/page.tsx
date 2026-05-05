import Link from "next/link";

const supportingStats = [
  {
    number: "6.7",
    unit: "days",
    label: "Average days lost per employee in 2024, a record high, up from 5.5 days in 2022",
    source: "Southern Cross & BusinessNZ, 2025",
  },
  {
    number: "$1,319",
    label: "Median annual cost of absence per employee in 2024, up from $1,235 in 2022",
    source: "Southern Cross & BusinessNZ, 2025",
  },
  {
    number: "13M",
    unit: "days",
    label: "Working days lost across New Zealand in 2024, up from 10 million in 2022",
    source: "Southern Cross & BusinessNZ, 2025",
  },
];

export default function TheDataPage() {
  return (
    <>
      {/* Page header + primary stats — all first fold */}
      <section className="bg-white pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-6">
            The numbers
          </p>
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-normal leading-tight tracking-tight max-w-3xl text-black mb-16 md:mb-20">
            The cost of an unwell workforce.
          </h1>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Disengagement */}
            <div className="pb-14 md:pb-0 md:pr-16">
              <p className="text-xs font-normal uppercase tracking-[0.15em] text-black/40 mb-5">
                Cost of disengagement
              </p>
              <p className="font-serif text-[clamp(5rem,13vw,9rem)] font-normal text-black leading-none tracking-tight mb-6 hover:opacity-60 transition-opacity cursor-default">
                <span className="font-sans">$</span>7.5B
              </p>
              <p className="text-sm font-light text-black/55 leading-[1.8] max-w-sm mb-4">
                The cost to NZ businesses of employees showing up but not performing. Presenteeism, low productivity, higher turnover. Physically present, mentally absent.
              </p>
              <p className="text-[10px] font-normal tracking-[0.12em] uppercase text-black/25">
                HRNZ
              </p>
            </div>

            {/* Absenteeism */}
            <div className="pt-14 md:pt-0 md:pl-16 border-t md:border-t-0 md:border-l border-black/10">
              <p className="text-xs font-normal uppercase tracking-[0.15em] text-black/40 mb-5">
                Cost of absenteeism, NZ 2024
              </p>
              <p className="font-serif text-[clamp(5rem,13vw,9rem)] font-normal text-black leading-none tracking-tight mb-6 hover:opacity-60 transition-opacity cursor-default">
                <span className="font-sans">$</span>4.17B
              </p>
              <p className="text-sm font-light text-black/55 leading-[1.8] max-w-sm mb-4">
                The highest figure ever recorded. Sick days, mental health leave, and the rising cost of an unwell workforce.
              </p>
              <p className="text-[10px] font-normal tracking-[0.12em] uppercase text-black/25">
                Southern Cross & BusinessNZ, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Context */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
            <div>
              <p className="font-serif text-xl font-normal italic text-black/30 leading-snug">
                Regular movement during the workday is one of the most effective and accessible ways to change that.
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-base font-light text-black/65 leading-[1.8]">
                Absenteeism cost New Zealand businesses $4.17 billion in 2024, the highest figure ever recorded, according to the Southern Cross Health Insurance and BusinessNZ Workplace Wellness Report. The average employee missed 6.7 days of work, up from 5.5 days in 2022. Sedentary work environments, chronic stress, and poor physical health are driving people out of their chairs and onto sick leave, often before anyone sees it coming.
              </p>
              <p className="text-base font-light text-black/65 leading-[1.8]">
                Pilates is not just a wellness trend. It is a proven intervention that targets the exact problems desk workers face: tight hips, a weak core, poor posture, shallow breathing, and high stress. When people feel better in their bodies, they show up differently at work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Absenteeism detail stats */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-normal uppercase tracking-[0.15em] text-black/40 mb-12">
            Absenteeism in detail
          </p>
          <div className="grid md:grid-cols-3 gap-0">
            {supportingStats.map(({ number, unit, label, source }, i) => (
              <div
                key={number}
                className={`py-10 ${i !== 0 ? "md:pl-12 md:border-l border-t md:border-t-0 border-black/10" : "md:pr-12"}`}
              >
                <p className="font-serif text-[clamp(3rem,6vw,5rem)] font-normal text-black leading-none tracking-tight mb-2 hover:opacity-60 transition-opacity cursor-default">
                  {number.startsWith("$") ? (
                    <><span className="font-sans">$</span>{number.slice(1)}</>
                  ) : number}
                </p>
                {unit && (
                  <p className="text-xs font-normal uppercase tracking-[0.15em] text-black/35 mb-4">
                    {unit}
                  </p>
                )}
                <p className="text-sm font-light text-black/55 leading-[1.8] mb-3">{label}</p>
                <p className="text-[10px] font-normal tracking-[0.1em] uppercase text-black/25">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source note + CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-24">
        <div className="h-px bg-black/10 mb-10" />
        <p className="text-[11px] font-light text-black/30 leading-[1.8] max-w-3xl mb-14">
          Absenteeism statistics sourced from the Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025, which surveyed 111 organisations covering 173,982 employees across NZ private and public sectors. Research conducted March to July 2025 using 2024 calendar year data. Disengagement figure sourced from HRNZ.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </>
  );
}
