import { TrendingUp, Calendar, DollarSign, Building2, UserX } from "lucide-react";

const absenteeismStats = [
  {
    icon: DollarSign,
    number: "$4.17B",
    label: "The annual cost of absenteeism to New Zealand businesses in 2024, the highest ever recorded",
    source: "Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025",
  },
  {
    icon: Calendar,
    number: "6.7 days",
    label: "Average days lost per employee in 2024, a record high, up from 5.5 days in 2022",
    source: "Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025",
  },
  {
    icon: TrendingUp,
    number: "$1,319",
    label: "Median annual cost of absence per employee in 2024, up from $1,235 in 2022",
    source: "Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025",
  },
  {
    icon: Building2,
    number: "13M",
    label: "Working days lost across New Zealand in 2024, up from 10 million in 2022",
    source: "Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025",
  },
];

export default function TheDataPage() {
  return (
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-4">
          The numbers
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-16 max-w-lg leading-tight">
          The Data
        </h1>

        <div className="max-w-3xl mb-24 space-y-5">
          <p className="text-base font-light text-black/70 leading-relaxed">
            Absenteeism cost New Zealand businesses $4.17 billion in 2024, the highest figure ever recorded, according to the Southern Cross Health Insurance and BusinessNZ Workplace Wellness Report. The average employee missed 6.7 days of work, up from 5.5 days in 2022. Sedentary work environments, chronic stress, and poor physical health are driving people out of their chairs and onto sick leave, often before anyone sees it coming.
          </p>
          <p className="text-base font-light text-black/70 leading-relaxed">
            Pilates is not just a wellness trend. It is a proven intervention that targets the exact problems desk workers face: tight hips, a weak core, poor posture, shallow breathing, and high stress. When people feel better in their bodies, they show up differently at work.
          </p>
        </div>

        {/* Absenteeism stats grid */}
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-6">
          Absenteeism
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {absenteeismStats.map(({ icon: Icon, number, label, source }) => (
            <div key={number} className="bg-white p-10 flex flex-col gap-6">
              <Icon size={20} strokeWidth={1.5} className="text-black/30" />
              <div>
                <p className="font-serif text-6xl font-medium tracking-tight mb-4 leading-none">{number}</p>
                <p className="text-sm font-light text-black/60 leading-relaxed mb-4">{label}</p>
                <p className="text-[11px] font-medium tracking-wide uppercase text-black/25">
                  {source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disengagement section */}
        <div className="mt-24">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-6">
            And then there is presenteeism
          </p>
          <div className="max-w-3xl mb-10">
            <p className="text-base font-light text-black/70 leading-relaxed">
              Absenteeism is only one half of the story. The cost of disengagement is separate, and it is even larger. These figures sit alongside the absenteeism numbers above, not within them.
            </p>
          </div>

          <div className="bg-black text-white p-12 md:p-16 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
            <div className="flex items-start gap-6">
              <UserX size={24} strokeWidth={1.5} className="text-white/40 flex-shrink-0 mt-2" />
              <p className="font-serif text-7xl md:text-8xl font-medium tracking-tight leading-none whitespace-nowrap">
                $7.5B
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg font-light text-white/80 leading-relaxed mb-6">
                The cost of disengagement to NZ businesses. This is the broader cost of employees showing up but not performing: presenteeism, low productivity, higher turnover, errors, and weak culture. These people are physically present but mentally absent.
              </p>
              <p className="text-[11px] font-medium tracking-wide uppercase text-white/40">
                HRNZ
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="text-base font-medium text-black leading-relaxed">
              These figures are additive, not overlapping. Together they represent the full cost of poor employee health and wellbeing to New Zealand businesses.
            </p>
          </div>
        </div>

        {/* Source note */}
        <div className="mt-16 pt-8 border-t border-black/8">
          <p className="text-xs font-light text-black/40 leading-relaxed max-w-3xl">
            Absenteeism statistics sourced from the Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025, which surveyed 111 organisations covering 173,982 employees across NZ private and public sectors. Research conducted March to July 2025 using 2024 calendar year data. Disengagement figure sourced from HRNZ.
          </p>
        </div>
      </div>
    </div>
  );
}
