import { TrendingUp, Calendar, DollarSign, Building2 } from "lucide-react";

const stats = [
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-lg leading-tight">
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

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {stats.map(({ icon: Icon, number, label, source }) => (
            <div key={number} className="bg-white p-10 flex flex-col gap-6">
              <Icon size={20} strokeWidth={1.5} className="text-black/30" />
              <div>
                <p className="text-5xl font-bold tracking-tight mb-4 leading-none">{number}</p>
                <p className="text-sm font-light text-black/60 leading-relaxed mb-4">{label}</p>
                <p className="text-[11px] font-medium tracking-wide uppercase text-black/25">
                  {source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Source note */}
        <div className="mt-12 pt-8 border-t border-black/8">
          <p className="text-xs font-light text-black/40 leading-relaxed max-w-3xl">
            All statistics sourced from the Southern Cross Health Insurance & BusinessNZ Workplace Wellness Report 2025, which surveyed 111 organisations covering 173,982 employees across NZ private and public sectors. Research conducted March to July 2025 using 2024 calendar year data.
          </p>
        </div>
      </div>
    </div>
  );
}
