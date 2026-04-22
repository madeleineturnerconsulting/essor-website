import Link from "next/link";
import {
  Armchair,
  Wind,
  Users,
  Brain,
  Heart,
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
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-32 md:py-48">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
            Corporate Wellness
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl mb-8">
            Your team deserves to feel good at work.
          </h1>
          <p className="text-lg md:text-xl font-light text-white/60 max-w-xl mb-12 leading-relaxed">
            ESSOR brings in-house Pilates to New Zealand workplaces — reducing absenteeism, easing stress, and building the kind of culture that keeps people around.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-white/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-4">
            The case for Pilates
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 max-w-xl leading-tight">
            What Pilates Does for Your Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 mb-6">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold mb-3">{title}</h3>
                <p className="text-sm font-light text-black/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Invest in Your People. Protect Your Bottom Line.
          </h2>
          <p className="text-lg font-light text-white/60 max-w-lg mx-auto mb-12 leading-relaxed">
            The case for workplace wellness has never been stronger. ESSOR makes it easy to act on it.
          </p>
          <Link
            href="/how-it-works"
            className="inline-block border border-white text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>
    </>
  );
}
