import Link from "next/link";
import {
  Armchair,
  Wind,
  Users,
  Brain,
  Heart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

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
      <section className="min-h-[calc(100vh-5rem)] flex items-center bg-cream">
        <div className="max-w-6xl mx-auto px-8 py-32 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-px bg-burgundy" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
                Corporate Wellness, Aotearoa
              </p>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-12 text-ink">
              Movement is the <em className="italic font-normal text-burgundy">missing variable</em> in workplace performance.
            </h1>

            <p className="text-lg font-light text-ink/70 max-w-xl mb-14 leading-[1.8]">
              ESSOR brings in-house Pilates to New Zealand workplaces. We make it effortless for your people to move during the day, so they show up sharper, healthier, and more invested in the work.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="/contact"
                className="inline-block bg-burgundy text-cream text-[11px] uppercase tracking-[0.25em] font-light px-12 py-5 hover:bg-ink transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-light text-burgundy hover:gap-5 transition-all"
              >
                See how it works
                <ArrowRight size={14} strokeWidth={1.25} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote divider */}
      <section className="bg-cream py-32 md:py-40">
        <div className="max-w-5xl mx-auto px-8">
          <div className="w-16 h-px bg-burgundy mb-12" />
          <p className="font-serif text-3xl md:text-5xl font-light italic leading-[1.3] text-ink/85 max-w-4xl">
            &ldquo;The workplace should not make people unwell. We think it should make them better.&rdquo;
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mt-12 font-light">
            ESSOR
          </p>
        </div>
      </section>

      {/* Stat block */}
      <section className="bg-cream-warm py-32 md:py-44">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-6 mb-20">
            <div className="w-16 h-px bg-burgundy" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
              The cost of standing still
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-0 mb-20">
            {[
              {
                amount: "$4.17B",
                label: "Lost to absenteeism in 2024",
                detail: "The annual cost of absent employees to NZ businesses, the highest figure ever recorded.",
              },
              {
                amount: "$7.5B",
                label: "Lost to disengagement",
                detail: "The broader cost of employees who show up, but are not really there. Presenteeism, low productivity, weak culture.",
              },
            ].map(({ amount, label, detail }, i) => (
              <div
                key={amount}
                className={`md:px-16 ${i === 0 ? "md:border-r md:border-burgundy-soft" : ""} ${i === 1 ? "md:pl-16" : "md:pr-16"}`}
              >
                <p className="font-serif text-[5.5rem] md:text-[8rem] font-light text-burgundy leading-none tracking-tight mb-8">
                  {amount}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-ink mb-5 font-light">
                  {label}
                </p>
                <p className="text-base font-light text-ink/65 leading-[1.8] max-w-sm">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-burgundy-soft pt-12">
            <p className="font-serif text-2xl md:text-3xl font-light italic leading-relaxed text-ink/75 max-w-3xl">
              Movement at work addresses both.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream py-32 md:py-44">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl mb-24">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-px bg-burgundy" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
                The case for Pilates
              </p>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-ink">
              What Pilates does for <em className="italic text-burgundy">your team</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t border-burgundy pt-10">
                <Icon size={20} strokeWidth={1.25} className="text-burgundy mb-8" />
                <h3 className="font-serif text-2xl font-medium mb-5 leading-tight">{title}</h3>
                <p className="text-sm font-light text-ink/65 leading-[1.9]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-32 md:py-44 border-t border-burgundy-soft">
        <div className="max-w-5xl mx-auto px-8">
          <div className="w-16 h-px bg-burgundy mb-12" />
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-10 leading-[1.05] text-ink max-w-3xl">
            Invest in your people.
            <br />
            <em className="italic text-burgundy">Protect your bottom line.</em>
          </h2>
          <p className="text-lg font-light text-ink/65 max-w-xl mb-14 leading-[1.8]">
            The case for workplace wellness has never been stronger. ESSOR makes it easy to act on it.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="inline-block bg-burgundy text-cream text-[11px] uppercase tracking-[0.25em] font-light px-12 py-5 hover:bg-ink transition-colors"
            >
              Start the conversation
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-light text-burgundy hover:gap-5 transition-all border border-burgundy px-12 py-5"
            >
              Our process
              <ArrowRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
