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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              About ESSOR
            </h1>
          </div>

          <div className="space-y-6 pt-2 md:pt-14">
            <p className="text-base font-light text-black/70 leading-relaxed">
              ESSOR was founded on a straightforward belief: the workplace should not make people unwell. Too many organisations accept high absence rates and low energy as the cost of doing business. We think that is the wrong way to look at it.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              We bring in-house Pilates directly to New Zealand workplaces, removing every barrier between your team and regular, meaningful movement. No gym memberships. No commuting to a studio. No scheduling headaches. We come to you, we run the session, and we make it easy for your people to show up.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              Pilates was our method of choice because it works. It targets the physical toll that desk work takes on the body — the tight hips, the compressed spine, the shallow breathing — and it does so in a way that is accessible to everyone, regardless of fitness background or experience. You do not need to be athletic to benefit. You just need to be willing to move.
            </p>
            <p className="text-base font-light text-black/70 leading-relaxed">
              ESSOR exists to make that easy. For employers who want to invest in their people in a way that has a measurable impact on health, culture, and retention — we are the simplest way to do it.
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
                <p className="text-base font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
