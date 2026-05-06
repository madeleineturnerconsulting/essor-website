import { TrendingUp, Calendar, DollarSign, Building2, UserX } from "lucide-react";

const absenteeismStats = [
  {
    icon: DollarSign,
    number: "$4.17B",
    label: "Annual cost of absenteeism to NZ businesses in 2024, the highest ever recorded",
  },
  {
    icon: Calendar,
    number: "6.7 days",
    label: "Average days lost per employee in 2024, up from 5.5 days in 2022",
  },
  {
    icon: TrendingUp,
    number: "$1,319",
    label: "Median annual cost of absence per employee in 2024, up from $1,235 in 2022",
  },
  {
    icon: Building2,
    number: "13M",
    label: "Working days lost across New Zealand in 2024, up from 10 million in 2022",
  },
];

export default function TheDataPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-end">
            <div>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-px bg-burgundy" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
                  The numbers
                </p>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
                The <em className="italic text-burgundy">data</em>.
              </h1>
            </div>
            <p className="text-base md:text-lg font-light text-ink/70 leading-[1.85] md:pb-4">
              New Zealand businesses are losing billions to two distinct problems: people who do not show up, and people who do, but are not really there. The figures below come from independent industry research.
            </p>
          </div>
        </div>
      </section>

      {/* Featured disengagement stat */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="border-t border-b border-burgundy py-16 md:py-20 grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
            <div className="flex items-center gap-8">
              <UserX size={28} strokeWidth={1} className="text-burgundy flex-shrink-0" />
              <p className="font-serif text-[6rem] md:text-[10rem] font-light text-burgundy leading-none tracking-tight whitespace-nowrap">
                $7.5B
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-5 font-light">
                Lost to disengagement
              </p>
              <p className="font-serif text-2xl md:text-3xl font-light italic leading-snug text-ink mb-6">
                People showing up, but not really there.
              </p>
              <p className="text-base font-light text-ink/65 leading-[1.85] mb-5 max-w-xl">
                The broader cost of employees showing up but not performing: presenteeism, low productivity, higher turnover, errors, and weak culture. Physically present, mentally absent.
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40 font-light">
                Source · HRNZ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Absenteeism stats */}
      <section className="bg-cream pb-32 md:pb-44">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-px bg-burgundy" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
              And on top of that, absenteeism
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-burgundy-soft">
            {absenteeismStats.map(({ icon: Icon, number, label }) => (
              <div
                key={number}
                className="border-b border-r border-burgundy-soft p-8 md:p-10 flex flex-col gap-6 bg-cream"
              >
                <Icon size={18} strokeWidth={1.25} className="text-burgundy" />
                <div>
                  <p className="font-serif text-5xl md:text-6xl font-light text-burgundy mb-5 leading-none tracking-tight">
                    {number}
                  </p>
                  <p className="text-sm font-light text-ink/65 leading-[1.7]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Source note */}
          <div className="mt-16 pt-8 border-t border-burgundy-soft">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40 leading-[1.9] max-w-3xl font-light">
              Absenteeism statistics sourced from the Southern Cross Health Insurance &amp; BusinessNZ Workplace Wellness Report 2025, which surveyed 111 organisations covering 173,982 employees across NZ private and public sectors. Research conducted March to July 2025 using 2024 calendar year data. Disengagement figure sourced from HRNZ.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
