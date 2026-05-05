import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "We Tailor A Plan for You",
    body: "Based on your team size, and available space, we design a session schedule that fits your working week. We sort the logistics so you don't have to.",
  },
  {
    number: "02",
    title: "We Come to You",
    body: "Your teacher arrives at your office ready to go. No equipment hire, no venue booking, no commute for your team. Pilates happens in your space, on your time.",
  },
  {
    number: "03",
    title: "Your Team Moves",
    body: "Sessions run for 45 to 60 minutes. Suitable for all fitness levels, no experience needed. We guide your people through every movement, whether it is their first class or their fiftieth.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-6">
            Getting started
          </p>
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-normal leading-tight tracking-tight max-w-2xl text-black">
            How it works.
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Steps */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col">
            {steps.map(({ number, title, body }, i) => (
              <div
                key={number}
                className={`grid md:grid-cols-[100px_1fr] gap-6 md:gap-16 py-10 ${
                  i !== steps.length - 1 ? "border-b border-black/8" : ""
                }`}
              >
                <span className="font-serif text-4xl font-normal text-black/15 leading-none tabular-nums">
                  {number}
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-normal mb-4 text-black">{title}</h2>
                  <p className="text-sm font-light text-black/55 leading-[1.8] max-w-xl">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image */}
      <div className="max-w-6xl mx-auto px-6 pb-14 md:pb-20">
        <Image
          src="https://images.pexels.com/photos/31509822/pexels-photo-31509822.jpeg?auto=compress&cs=tinysrgb&w=1400&q=80"
          alt="Woman performing Pilates on a reformer machine in a minimalist studio"
          width={1400}
          height={600}
          className="object-cover w-full h-[38vw] min-h-[220px] max-h-[440px]"
        />
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* CTA */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/contact"
            className="inline-block bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
