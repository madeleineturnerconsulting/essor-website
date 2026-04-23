import Link from "next/link";
import Image from "next/image";
import { Armchair, Wind, Users, Brain, Heart, ShieldCheck } from "lucide-react";

const atAGlance = [
  { label: "Capacity", value: "Up to 30 people in person, or up to 100 virtually" },
  { label: "Experience", value: "All fitness levels welcome" },
  { label: "Duration", value: "30, 45 or 60 minute sessions tailored to your workplace" },
  { label: "Equipment", value: "Mats can be provided on request" },
  { label: "Your teacher", value: "Fully qualified Mat Pilates instructor, Pre and Postnatal certified" },
  { label: "Available", value: "On-site in Auckland or virtually around NZ" },
];

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
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-20 md:pt-16 md:pb-28">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">
            {/* Text */}
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/40 mb-2">
                Corporate Wellness · New Zealand
              </p>
              <p className="text-[11px] italic font-serif text-black/40 mb-8 leading-relaxed">
                essor (n.) — rapid development, growth, expansion, or the act of taking flight
              </p>
              <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-normal leading-[1.06] tracking-tight max-w-2xl mb-8 text-black">
                Your team deserves to feel good at work.
              </h1>
              <p className="text-base font-light text-black/55 max-w-xl mb-10 leading-[1.8]">
                ESSOR brings in-house Pilates to New Zealand workplaces, reducing absenteeism, easing stress, and building the kind of culture that keeps people around.
              </p>
              <Link
                href="/the-data"
                className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
              >
                See The Data
              </Link>
            </div>

            {/* Image */}
            <div className="hidden md:block w-[340px] lg:w-[400px] flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
                alt="Woman in a yoga and pilates stretch, natural light studio"
                width={400}
                height={540}
                className="object-cover w-full h-[480px] lg:h-[540px]"
                priority
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className="mt-10 md:hidden">
            <Image
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
              alt="Woman in a yoga and pilates stretch, natural light studio"
              width={800}
              height={500}
              className="object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* At a glance */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-12">
            At a glance
          </p>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-0">
            {atAGlance.map(({ label, value }) => (
              <div key={label} className="flex gap-8 py-5 border-b border-black/8 group">
                <span className="text-[10px] font-normal uppercase tracking-[0.12em] text-black/35 pt-1 w-32 flex-shrink-0 group-hover:text-black/60 transition-colors">
                  {label}
                </span>
                <span className="text-sm font-light text-black/70 leading-[1.7] group-hover:text-black transition-colors">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Stat callout */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-serif text-[clamp(3.5rem,10vw,8rem)] font-normal text-black leading-none tracking-tight mb-6 hover:opacity-70 transition-opacity cursor-default">
            $4.17B
          </p>
          <p className="text-sm font-light text-black/55 max-w-sm leading-[1.8] mb-8">
            Lost to absenteeism in NZ in 2024. The highest figure ever recorded.
          </p>
          <Link
            href="/the-data"
            className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.15em] text-black group"
          >
            See the full data
            <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Benefits */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-6">
            The case for Pilates
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight mb-16 max-w-2xl leading-tight text-black">
            What Pilates does for your team.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t border-black/10 pt-8 group hover:border-black/30 transition-colors">
                <Icon size={16} strokeWidth={1} className="text-black/30 mb-6 group-hover:text-black/60 transition-colors" />
                <h3 className="font-serif text-xl font-normal mb-3 text-black">{title}</h3>
                <p className="text-sm font-light text-black/55 leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Pull quote */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] italic font-normal text-black/40 max-w-3xl leading-snug">
            &ldquo;When companies actively encouraged movement, everything shifted. People showed up differently, for themselves, for their teams, and for the business.&rdquo;
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Bottom CTA */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight mb-8 max-w-2xl leading-tight text-black">
            Invest in your people. Protect your bottom line.
          </h2>
          <p className="text-base font-light text-black/55 max-w-lg mb-12 leading-[1.8]">
            The case for workplace wellness has never been stronger. ESSOR makes it easy to act on it.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <Link
              href="/contact"
              className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
            >
              Let&apos;s have a conversation.
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block border border-black text-black text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black hover:text-white transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/30">
            Pricing on request.
          </p>
        </div>
      </section>
    </>
  );
}
