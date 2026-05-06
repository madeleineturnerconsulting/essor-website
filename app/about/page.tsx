import Link from "next/link";
import { ArrowRight } from "lucide-react";

const paragraphs = [
  "ESSOR was born from two things: a deep love of movement, and first-hand experience of what happens when people don't have access to it. The numbers tell a clear story. New Zealand businesses lose $4.17 billion a year to absenteeism, and billions more to presenteeism, the quieter cost of people who show up every day but are running on empty. Regular movement during the workday is one of the most effective and accessible ways to change that. It is why ESSOR exists.",
  "Throughout a corporate career spanning Digital and Growth roles across the UK, US and Australian markets, I almost always chose to work for purpose-led businesses in the wellness sector. What I noticed across those roles was consistent: when companies actively encouraged movement, everything shifted. People showed up differently, for themselves, for their teams, and for the business.",
  "At a personalised nutrition scale-up, bonus incentives and lunchtime team workouts were part of the culture. At Nike, movement classes and physio during work hours were built into the day. The typical struggle of fitting in exercise around a commute simply wasn't an issue, and the culture reflected that. People were more willing to go above and beyond, and I genuinely believe that came down to senior leadership treating movement as a priority, not a perk.",
  "Movement has been central to my life since childhood. While others went to netball, I was at kids yoga. That translated into a career in health and wellness, and in 2021 I decided to formalise it. I completed my Mat Pilates training at Body Control Pilates in London, a world-leading and highly respected teacher training institution, and went on to complete my Pre and Post Natal qualification through Barre Body.",
  "I truly believe my purpose is to improve the lives of others through health and movement. Today, that takes shape through ESSOR. We come to your workplace, we run the session, and we make it easy for your people to show up. No gym memberships, no studio commute, no scheduling headaches. Just movement, where your team already is.",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-px bg-burgundy" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
              Our story
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] max-w-4xl">
            A career in wellness, <em className="italic text-burgundy">brought home</em> to Aotearoa.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream pb-32 md:pb-44">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start border-t border-burgundy-soft pt-16 md:pt-20">
            <div className="md:sticky md:top-32">
              <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-5 font-light">
                Founder
              </p>
              <p className="font-serif text-2xl md:text-3xl font-light italic leading-snug text-burgundy mb-8">
                Why ESSOR exists.
              </p>
              <p className="text-sm font-light text-ink/60 leading-[1.85] max-w-xs">
                Five paragraphs on the corporate career, the training, and the conviction that movement at work changes everything.
              </p>
            </div>

            <div className="space-y-10 max-w-2xl">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`font-light text-ink/80 leading-[1.95] ${
                    i === 0 ? "text-lg md:text-xl text-ink first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:text-burgundy first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:mt-1" : "text-base"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-cream-warm py-32 md:py-44">
        <div className="max-w-5xl mx-auto px-8">
          <div className="w-16 h-px bg-burgundy mb-12" />
          <p className="font-serif text-3xl md:text-5xl font-light italic leading-[1.3] text-ink/85">
            &ldquo;I truly believe my purpose is to improve the lives of others through health and movement.&rdquo;
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-32 md:py-44">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { label: "Our mission", value: "Make workplace wellness the norm, not the exception." },
              { label: "Our method", value: "In-house Pilates, designed around your team and your space." },
              { label: "Our standard", value: "Qualified instructors. Programmes that fit real working weeks." },
            ].map(({ label, value }) => (
              <div key={label} className="border-t border-burgundy pt-10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-6 font-light">{label}</p>
                <p className="font-serif text-2xl md:text-3xl font-light leading-snug">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-burgundy-soft">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-burgundy text-cream text-[11px] uppercase tracking-[0.25em] font-light px-12 py-5 hover:bg-ink transition-colors"
            >
              Work with us
              <ArrowRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
