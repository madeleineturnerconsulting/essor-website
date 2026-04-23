import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-6">
            Our story
          </p>
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-normal leading-tight tracking-tight max-w-2xl text-black mb-6">
            About ESSOR.
          </h1>
          <p className="font-serif italic text-lg text-black/40 font-normal tracking-wide">
            ESSOR — to flourish, to take flight, to grow rapidly.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Story body */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
            <div className="md:sticky md:top-[88px]">
              <p className="font-serif text-xl font-normal italic text-black/30 leading-snug">
                Movement is the missing variable.
              </p>
            </div>

            <div className="space-y-7">
              <p className="text-base font-light text-black/65 leading-[1.8]">
                ESSOR was born from two things: a deep love of movement, and first-hand experience of what happens when people don&apos;t have access to it. The numbers tell a clear story. New Zealand businesses lose $4.17 billion a year to absenteeism, and billions more to presenteeism, the quieter cost of people who show up every day but are running on empty. Regular movement during the workday is one of the most effective and accessible ways to change that. It is why ESSOR exists.
              </p>
              <p className="text-base font-light text-black/65 leading-[1.8]">
                Throughout a corporate career spanning Digital and Growth roles across the UK, US and Australian markets, I almost always chose to work for purpose-led businesses in the wellness sector. What I noticed across those roles was consistent: when companies actively encouraged movement, everything shifted. People showed up differently, for themselves, for their teams, and for the business.
              </p>
              <p className="text-base font-light text-black/65 leading-[1.8]">
                At a personalised nutrition scale-up, bonus incentives and lunchtime team workouts were part of the culture. At Nike, movement classes and physio during work hours were built into the day. The typical struggle of fitting in exercise around a commute simply wasn&apos;t an issue, and the culture reflected that. People were more willing to go above and beyond, and I genuinely believe that came down to senior leadership treating movement as a priority, not a perk.
              </p>
              <p className="text-base font-light text-black/65 leading-[1.8]">
                Movement has been central to my life since childhood. While others went to netball, I was at kids yoga. That translated into a career in health and wellness, and in 2021 I decided to formalise it. I completed my Mat Pilates training at Body Control Pilates in London, a world-leading and highly respected teacher training institution, and went on to complete my Pre and Post Natal qualification through Barre Body.
              </p>
              <p className="text-base font-light text-black/65 leading-[1.8]">
                I truly believe my purpose is to improve the lives of others through health and movement. Today, that takes shape through ESSOR. We come to your workplace, we run the session, and we make it easy for your people to show up. No gym memberships, no studio commute, no scheduling headaches. Just movement, where your team already is.
              </p>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
                >
                  Work with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Our mission", value: "Make workplace wellness the norm, not the exception." },
              { label: "Our method", value: "In-house Pilates, designed around your team and your space." },
              { label: "Our standard", value: "Qualified instructors. Programmes that fit real working weeks." },
            ].map(({ label, value }) => (
              <div key={label} className="border-t border-black/10 pt-8 group hover:border-black/30 transition-colors">
                <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-4">{label}</p>
                <p className="font-serif text-xl font-normal leading-snug text-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
