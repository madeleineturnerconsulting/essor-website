import Link from "next/link";
import { Armchair, Wind, Users, Brain, Heart, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Armchair,
    title: "Reduces Physical Pain",
    body: "Pilates directly addresses musculoskeletal issues caused by prolonged sitting, including lower back pain, tight hips, and neck tension. Fewer aches means fewer sick days.",
  },
  {
    icon: Wind,
    title: "Lowers Stress",
    body: "Breath-focused movement activates the parasympathetic nervous system, the body's rest and recovery mode. Employees who move regularly report lower anxiety and better focus.",
  },
  {
    icon: Users,
    title: "Builds Team Culture",
    body: "Shared experiences create connection. A weekly session gives teams a reason to get together, laugh, and move outside of a meeting room. Culture is built in moments like these.",
  },
  {
    icon: Brain,
    title: "Improves Focus and Productivity",
    body: "Physical movement increases blood flow to the brain. Studies consistently show that employees who exercise during the workday are more productive and better at problem-solving in the afternoon.",
  },
  {
    icon: Heart,
    title: "Signals That You Care",
    body: "Offering wellness as a benefit tells your people something important: this company invests in us. That kind of message reduces turnover and attracts talent.",
  },
  {
    icon: ShieldCheck,
    title: "Reduces Injury Risk",
    body: "Pilates builds the strength and mobility that prevents the chronic injuries desk workers are prone to. Fewer injuries means fewer ACC claims, less time off, and lower long-term costs for the business.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-[100px] md:pt-20 md:pb-[120px] w-full">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-3">
            Corporate Wellness · New Zealand
          </p>
          <p className="text-[10px] font-normal tracking-[0.12em] text-[#6B2737]/70 mb-8 italic font-serif">
            essor (n.) — to flourish, to take flight, to grow rapidly.
          </p>
          <div className="w-12 h-px bg-[#6B2737] mb-8" />
          <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.05] tracking-tight max-w-4xl mb-10 text-[#1a1a1a]">
            Your team is your greatest asset. Treat them like it.
          </h1>
          <p className="text-base font-light text-[#1a1a1a]/55 max-w-xl mb-14 leading-[1.8]">
            ESSOR brings in-house Pilates to New Zealand workplaces, reducing absenteeism, easing stress, and building the kind of culture that keeps people around.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <Link
              href="/contact"
              className="inline-block bg-[#6B2737] text-[#FAF8F5] text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#5a1f2d] transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.15em] text-[#6B2737] group"
            >
              See how it works
              <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* Stat block */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-16">
            The cost of standing still
          </p>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="pb-16 md:pb-0 md:pr-16 md:border-r border-[#6B2737]/20">
              <p className="font-serif text-[clamp(5rem,12vw,9rem)] font-normal text-[#6B2737] leading-none tracking-tight mb-6">
                $4.17B
              </p>
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-4">
                Lost to absenteeism in 2024
              </p>
              <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8] max-w-sm">
                Sick days, mental health leave, and the rising cost of an unwell workforce. The highest figure ever recorded in New Zealand.
              </p>
            </div>

            <div className="pt-16 md:pt-0 md:pl-16 border-t md:border-t-0 border-[#6B2737]/20">
              <p className="font-serif text-[clamp(5rem,12vw,9rem)] font-normal text-[#6B2737] leading-none tracking-tight mb-6">
                $7.5B
              </p>
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-4">
                Lost to disengagement
              </p>
              <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8] max-w-sm">
                Presenteeism, low productivity, higher turnover, errors, and weak culture. Physically present, mentally absent.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-[#6B2737]/20">
            <p className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] font-normal text-[#1a1a1a] leading-tight max-w-3xl">
              Movement at work addresses both.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote divider */}
      <div className="bg-[#FAF8F5] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-[#6B2737]/25 mb-16" />
          <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] italic font-normal text-[#1a1a1a]/45 max-w-3xl leading-snug">
            &ldquo;When companies actively encouraged movement, everything shifted. People showed up differently, for themselves, for their teams, and for the business.&rdquo;
          </p>
          <div className="h-px bg-[#6B2737]/25 mt-16" />
        </div>
      </div>

      {/* Benefits */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-6">
            The case for Pilates
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight mb-20 max-w-2xl leading-tight text-[#1a1a1a]">
            What Pilates does for your team.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t border-[#6B2737]/35 pt-8">
                <Icon size={16} strokeWidth={1} className="text-[#1a1a1a]/35 mb-6" />
                <h3 className="font-serif text-xl font-normal mb-4 text-[#1a1a1a]">{title}</h3>
                <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* CTA */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-12 h-px bg-[#6B2737] mb-10" />
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight mb-8 max-w-2xl leading-tight text-[#1a1a1a]">
            Invest in your people. Protect your bottom line.
          </h2>
          <p className="text-base font-light text-[#1a1a1a]/55 max-w-lg mb-14 leading-[1.8]">
            The case for workplace wellness has never been stronger. ESSOR makes it easy to act on it.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8 mb-8">
            <Link
              href="/contact"
              className="inline-block bg-[#6B2737] text-[#FAF8F5] text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#5a1f2d] transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block border border-[#6B2737] text-[#6B2737] text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#6B2737] hover:text-[#FAF8F5] transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/35">
            Pricing on request.
          </p>
        </div>
      </section>
    </>
  );
}
