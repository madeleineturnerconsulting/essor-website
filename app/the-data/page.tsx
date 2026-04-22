import { TrendingUp, Calendar, DollarSign, Building2 } from "lucide-react";

const supportingStats = [
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
  {
    icon: DollarSign,
    number: "$4.17B",
    label: "Total cost of absenteeism to NZ businesses in 2024, the highest figure ever recorded",
    source: "Southern Cross & BusinessNZ, 2025",
  },
];

export default function TheDataPage() {
  return (
    <>
      {/* Page header with featured stats immediately visible */}
      <section className="bg-[#FAF8F5] pt-16 pb-[120px] md:pt-20 md:pb-[140px]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-6">
            The numbers
          </p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-normal leading-tight tracking-tight max-w-2xl text-[#1a1a1a] mb-16">
            The data doesn&apos;t lie.
          </h1>

          {/* Two hero stats — front and centre */}
          <div className="grid md:grid-cols-2 gap-0">
            <div className="pb-12 md:pb-0 md:pr-16 md:border-r border-[#6B2737]/20">
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-4">
                Cost of absenteeism · NZ 2024
              </p>
              <p className="font-serif text-[clamp(5rem,12vw,9rem)] font-normal text-[#6B2737] leading-none tracking-tight mb-4">
                $4.17B
              </p>
              <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8] max-w-sm">
                The highest figure ever recorded. Sick days, mental health leave, and the rising cost of an unwell workforce.
              </p>
              <p className="text-[10px] font-normal tracking-[0.12em] uppercase text-[#1a1a1a]/25 mt-4">
                Southern Cross & BusinessNZ, 2025
              </p>
            </div>

            <div className="pt-12 md:pt-0 md:pl-16 border-t md:border-t-0 border-[#6B2737]/20">
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-4">
                Cost of disengagement · NZ
              </p>
              <p className="font-serif text-[clamp(5rem,12vw,9rem)] font-normal text-[#6B2737] leading-none tracking-tight mb-4">
                $7.5B
              </p>
              <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8] max-w-sm">
                Presenteeism, low productivity, higher turnover, errors, and weak culture. Physically present, mentally absent.
              </p>
              <p className="text-[10px] font-normal tracking-[0.12em] uppercase text-[#1a1a1a]/25 mt-4">
                HRNZ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* Context + supporting stats */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-6 mb-20">
            <p className="text-base font-light text-[#1a1a1a]/65 leading-[1.8]">
              Absenteeism cost New Zealand businesses $4.17 billion in 2024, the highest figure ever recorded, according to the Southern Cross Health Insurance and BusinessNZ Workplace Wellness Report. The average employee missed 6.7 days of work, up from 5.5 days in 2022. Sedentary work environments, chronic stress, and poor physical health are driving people out of their chairs and onto sick leave, often before anyone sees it coming.
            </p>
            <p className="text-base font-light text-[#1a1a1a]/65 leading-[1.8]">
              Pilates is not just a wellness trend. It is a proven intervention that targets the exact problems desk workers face: tight hips, a weak core, poor posture, shallow breathing, and high stress. When people feel better in their bodies, they show up differently at work.
            </p>
          </div>

          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-10">
            Absenteeism in detail
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#6B2737]/15 border border-[#6B2737]/15">
            {supportingStats.map(({ icon: Icon, number, unit, label, source }) => (
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
