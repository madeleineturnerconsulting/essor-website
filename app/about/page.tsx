import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-4">
              Our story
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight leading-tight">
              About ESSOR
            </h1>
          </div>

          <div className="space-y-6 pt-2 md:pt-14">
            <p className="text-base font-light text-black/70 leading-relaxed">
              ESSOR was born from two things: a deep love of movement, and first-hand experience of what happens when people don&apos;t have access to it. The numbers tell a clear story. New Zealand businesses lose $4.17 billion a year to absenteeism, and billions more to presenteeism, the quieter cost of people who show up every day but are running on empty. Regular movement during the workday is one of the most effective and accessible ways to change that. It is why ESSOR exists.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              Throughout a corporate career spanning Digital and Growth roles across the UK, US and Australian markets, I almost always chose to work for purpose-led businesses in the wellness sector. What I noticed across those roles was consistent: when companies actively encouraged movement, everything shifted. People showed up differently, for themselves, for their teams, and for the business.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              At a personalised nutrition scale-up, bonus incentives and lunchtime team workouts were part of the culture. At Nike, movement classes and physio during work hours were built into the day. The typical struggle of fitting in exercise around a commute simply wasn&apos;t an issue, and the culture reflected that. People were more willing to go above and beyond, and I genuinely believe that came down to senior leadership treating movement as a priority, not a perk.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              Movement has been central to my life since childhood. While others went to netball, I was at kids yoga. That translated into a career in health and wellness, and in 2021 I decided to formalise it. I completed my Mat Pilates training at Body Control Pilates in London, a world-leading and highly respected teacher training institution, and went on to complete my Pre and Post Natal qualification through Barre Body.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              I truly believe my purpose is to improve the lives of others through health and movement. Today, that takes shape through ESSOR. We come to your workplace, we run the session, and we make it easy for your people to show up. No gym memberships, no studio commute, no scheduling headaches. Just movement, where your team already is.
            </p>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-black text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-black/80 transition-colors"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>

        {/* values strip */}
        <div className="mt-28 pt-16 border-t border-black/8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Our mission", value: "Make workplace wellness the norm, not the exception." },
              { label: "Our method", value: "In-house Pilates, designed around your team and your space." },
              { label: "Our standard", value: "Qualified instructors. Programmes that fit real working weeks." },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-black/25 mb-3">{label}</p>
                <p className="font-serif text-xl font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
