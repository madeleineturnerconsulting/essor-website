import Link from "next/link";
import Image from "next/image";
import { Users, Clock, Package, Award, MapPin, Zap } from "lucide-react";
import { Armchair, Wind, Brain, Heart, ShieldCheck } from "lucide-react";

const atAGlance = [
  { icon: Users,   label: "Capacity",     value: "Up to 30 people in person, or up to 100 virtually" },
  { icon: Zap,     label: "Experience",   value: "All fitness levels welcome" },
  { icon: Clock,   label: "Duration",     value: "30, 45 or 60 minute sessions tailored to your workplace" },
  { icon: Package, label: "Equipment",    value: "Mats can be provided on request" },
  { icon: Award,   label: "Your teacher", value: "Fully qualified Mat Pilates teacher, Pre and Postnatal certified" },
  { icon: MapPin,  label: "Available",    value: "On-site in Auckland or virtually around NZ" },
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
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
            {/* Text */}
            <div>
              <h1 className="font-serif text-[clamp(2.6rem,7vw,5.5rem)] font-normal leading-[1.06] tracking-tight max-w-2xl mb-7 text-black">
                Your team deserves to feel good at work.
              </h1>
              <p className="text-base font-light text-black/55 max-w-xl mb-9 leading-[1.8]">
                ESSOR brings in-house Pilates to New Zealand workplaces, reducing absenteeism, easing stress, and building the kind of culture that keeps people around.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Image — desktop */}
            <div className="hidden md:block w-[320px] lg:w-[380px] flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/25599826/pexels-photo-25599826.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Woman exercising on a Pilates tower in a bright white studio"
                width={380}
                height={520}
                className="object-cover w-full h-[460px] lg:h-[520px]"
                priority
              />
            </div>
          </div>

          {/* Image — mobile */}
          <div className="mt-8 md:hidden">
            <Image
              src="https://images.pexels.com/photos/25599826/pexels-photo-25599826.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
              alt="Woman exercising on a Pilates tower in a bright white studio"
              width={800}
              height={480}
              className="object-cover w-full h-60"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Two stats */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0">
            <Link
              href="/the-data"
              className="group pb-12 md:pb-0 md:pr-16 block"
            >
              <p className="font-serif text-[clamp(4rem,11vw,8rem)] font-normal text-black leading-none tracking-tight mb-4 group-hover:opacity-60 transition-opacity">
                <span className="font-sans">$</span>4.17B
              </p>
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/40 group-hover:text-black/70 transition-colors">
                Lost to absenteeism in NZ in 2024
              </p>
            </Link>

            <Link
              href="/the-data"
              className="group pt-12 md:pt-0 md:pl-16 border-t md:border-t-0 md:border-l border-black/10 block"
            >
              <p className="font-serif text-[clamp(4rem,11vw,8rem)] font-normal text-black leading-none tracking-tight mb-4 group-hover:opacity-60 transition-opacity">
                <span className="font-sans">$</span>7.5B
              </p>
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/40 group-hover:text-black/70 transition-colors">
                Lost to disengagement in NZ in 2024
              </p>
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/the-data"
              className="inline-flex items-center gap-3 text-xs font-normal uppercase tracking-[0.15em] text-black/40 hover:text-black transition-colors group"
            >
              View the data
              <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* At a glance — infographic grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-normal uppercase tracking-[0.15em] text-black/40 mb-12">
            At a glance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
            {atAGlance.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-4">
                <Icon size={20} strokeWidth={1} className="text-black/50" />
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black">
                  {label}
                </p>
                <p className="text-sm font-light text-black/55 leading-[1.7] mt-1">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-6">
            The case for Pilates
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight mb-14 max-w-2xl leading-tight text-black">
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
      <section className="bg-white py-16 md:py-24">
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
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight mb-8 max-w-2xl leading-tight text-black">
            Invest in your people. Protect your bottom line.
          </h2>
          <p className="text-base font-light text-black/55 max-w-lg mb-10 leading-[1.8]">
            The case for workplace wellness has never been stronger. ESSOR makes it easy to act on it.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block border border-black text-black text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black hover:text-white transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
