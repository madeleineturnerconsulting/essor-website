import { TrendingUp, Calendar, DollarSign, Building2, UserX } from "lucide-react";

const absenteeismStats = [
  {
    icon: DollarSign,
    number: "$4.17B",
    label: "The annual cost of absenteeism to New Zealand businesses in 2024, the highest ever recorded",
    source: "Southern Cross & BusinessNZ, 2025",
  },
  {
    icon: Calendar,
    number: "6.7",
    unit: "days",
    label: "Average days lost per employee in 2024, a record high, up from 5.5 days in 2022",
    source: "Southern Cross & BusinessNZ, 2025",
  },
  {
    icon: TrendingUp,
    number: "$1,319",
    label: "Median annual cost of absence per employee in 2024, up from $1,235 in 2022",
    source: "Southern Cross & BusinessNZ, 2025",
  },
  {
    icon: Building2,
    number: "13M",
    unit: "days",
    label: "Working days lost across New Zealand in 2024, up from 10 million in 2022",
    source: "Southern Cross & BusinessNZ, 2025",
  },
];

export default function TheDataPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-12 h-px bg-[#6B2737] mb-10" />
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-6">
            The numbers
          </p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] italic font-normal leading-tight tracking-tight max-w-2xl text-[#1a1a1a]">
            The data doesn&apos;t lie.
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* Intro + stats */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-6 mb-20">
            <p className="text-base font-light text-[#1a1a1a]/65 leading-[1.8]">
              Absenteeism cost New Zealand businesses $4.17 billion in 2024 — the highest figure ever recorded — according to the Southern Cross Health Insurance and BusinessNZ Workplace Wellness Report. The average employee missed 6.7 days of work, up from 5.5 days in 2022. Sedentary work environments, chronic stress, and poor physical health are driving people out of their chairs and onto sick leave, often before anyone sees it coming.
            </p>
            <p className="text-base font-light text-[#1a1a1a]/65 leading-[1.8]">
              Pilates is not just a wellness trend. It is a proven intervention that targets the exact problems desk workers face: tight hips, a weak core, poor posture, shallow breathing, and high stress. When people feel better in their bodies, they show up differently at work.
            </p>
          </div>

          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-10">
            Absenteeism
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#6B2737]/15 border border-[#6B2737]/15">
            {absenteeismStats.map(({ icon: Icon, number, unit, label, source }) => (
              <div key={number} className="bg-[#FAF8F5] p-10 flex flex-col gap-6">
                <Icon size={16} strokeWidth={1} className="text-[#6B2737]/40" />
                <div>
                  <p className="font-serif text-[clamp(3rem,6vw,4.5rem)] font-normal text-[#6B2737] leading-none tracking-tight mb-1">
                    {number}
                  </p>
                  {unit && (
                    <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/35 mb-3">
                      {unit}
                    </p>
                  )}
                  <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8] mb-4">{label}</p>
                  <p className="text-[10px] font-normal tracking-[0.1em] uppercase text-[#1a1a1a]/25">
                    {source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* Disengagement */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-10">
            And then there is presenteeism
          </p>
          <div className="max-w-3xl mb-16">
            <p className="text-base font-light text-[#1a1a1a]/65 leading-[1.8]">
              Absenteeism is only one half of the story. The cost of disengagement is separate, and it is even larger. These figures sit alongside the absenteeism numbers above, not within them.
            </p>
          </div>

          <div className="border border-[#6B2737]/20 p-12 md:p-16 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
            <div className="flex items-start gap-5">
              <UserX size={18} strokeWidth={1} className="text-[#6B2737]/40 flex-shrink-0 mt-5" />
              <p className="font-serif text-[clamp(4rem,10vw,8rem)] font-normal text-[#6B2737] leading-none tracking-tight whitespace-nowrap">
                $7.5B
              </p>
            </div>
            <div className="pt-2">
              <p className="text-base font-light text-[#1a1a1a]/65 leading-[1.8] mb-6 max-w-lg">
                The cost of disengagement to NZ businesses. This is the broader cost of employees showing up but not performing: presenteeism, low productivity, higher turnover, errors, and weak culture. These people are physically present but mentally absent.
              </p>
              <p className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#1a1a1a]/30">
                HRNZ
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="font-serif text-xl font-normal italic text-[#1a1a1a]/60 leading-snug">
              These figures are additive, not overlapping. Together they represent the full cost of poor employee health and wellbeing to New Zealand businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Source note */}
      <div className="max-w-6xl mx-auto px-6 pb-[120px]">
        <div className="h-px bg-[#6B2737]/20 mb-10" />
        <p className="text-[11px] font-light text-[#1a1a1a]/30 leading-[1.8] max-w-3xl">
          Absenteeism statistics sourced from the Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025, which surveyed 111 organisations covering 173,982 employees across NZ private and public sectors. Research conducted March to July 2025 using 2024 calendar year data. Disengagement figure sourced from HRNZ.
        </p>
      </div>
    </>
  );
}
