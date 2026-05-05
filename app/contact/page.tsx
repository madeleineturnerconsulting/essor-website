"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const faqs: [string, string][] = [
  ["What does a first session look like?",
   "Your teacher arrives 15 minutes early. Mats are laid out. The team gathers. We move, breathe, and reset together. 30, 45 or 60 minutes."],
  ["Do we need any equipment?",
   "Mats can be provided on request. No reformers, no machinery. A clear, quiet space is enough."],
  ["Can sessions be virtual?",
   "Yes. Up to 100 participants on Zoom or Teams, on-site in Auckland, or a blend of both."],
  ["How is pricing structured?",
   "By session, with a small discount for ongoing weekly or fortnightly cadences. We send a written proposal within two working days."],
  ["Do you teach pre and postnatal?",
   "Yes. Your teacher is fully certified and adapts the practice as needed for any participant."],
];

function Field({
  label, name, placeholder, type = "text", textarea, required,
}: {
  label: string; name: string; placeholder?: string;
  type?: string; textarea?: boolean; required?: boolean;
}) {
  return (
    <label className="block border-b border-rule py-5">
      <div className="font-mono text-[10px] tracking-[0.2em] text-ink-mute mb-2">{label}</div>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required={required}
          className="field-underline resize-none"
          style={{ borderBottom: "none" }}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="field-underline"
          style={{ borderBottom: "none" }}
        />
      )}
    </label>
  );
}

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const get = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement)?.value ?? "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          company: get("company"),
          email: get("email"),
          message: get("message"),
        }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <>
      {/* ── Two-column layout ────────────────────────────────── */}
      <section className="px-14 py-[120px] grid md:grid-cols-[1fr_1.1fr] gap-24 min-h-[900px]">
        {/* Left */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
            Contact
          </div>
          <h1 className="font-serif font-light text-[clamp(44px,6.25vw,80px)] leading-none tracking-[-0.02em] mb-10">
            Get in <em className="italic">touch.</em>
          </h1>
          <p className="font-sans text-[16px] leading-[1.7] text-ink-soft max-w-[460px] mb-4">
            Tell us about your team and your workplace. We will get back to you
            within one business day.
          </p>
          <p className="font-sans text-[16px] leading-[1.7] text-ink-soft max-w-[460px] mb-12">
            Pricing on request.
          </p>
          <div className="border-t border-ink pt-8">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute mb-4">
              Or reach us directly
            </div>
            <div className="font-serif text-[28px] font-light tracking-[-0.01em]">
              hello@essor.co.nz
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {state === "success" ? (
            <div className="border-t border-ink pt-10">
              <p className="font-serif text-[32px] font-light tracking-[-0.02em]">
                Thank you. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-t border-ink">
              <div className="grid grid-cols-2 gap-6">
                <Field label="01 · YOUR NAME" name="name"    placeholder="Jane Doe"          required />
                <Field label="02 · COMPANY"   name="company" placeholder="Company name"      required />
              </div>
              <Field label="03 · EMAIL"   name="email"   placeholder="jane@company.co.nz" type="email" required />
              <Field label="04 · MESSAGE" name="message"
                     placeholder="Tell us about your team and your workplace."
                     textarea required />

              {state === "error" && (
                <p className="font-sans text-[13px] text-ink-soft py-4 border-b border-rule">
                  {errorMsg}
                </p>
              )}

              <div className="flex justify-between items-center pt-8">
                <span className="font-mono text-[10px] tracking-[0.18em] text-ink-mute">
                  REPLY · WITHIN 1 BUSINESS DAY
                </span>
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="inline-flex items-center gap-4 px-7 py-[18px] bg-ink text-paper font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors disabled:opacity-40"
                >
                  {state === "submitting" ? "Sending…" : "Send →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Pull quote ───────────────────────────────────────── */}
      <section className="bg-paper-deep px-14 py-[120px] text-center">
        <p className="font-serif italic font-light text-[clamp(24px,3.4vw,44px)] leading-[1.25] max-w-[1000px] mx-auto">
          &ldquo;Begin with a conversation. The right rhythm reveals itself once we have walked your floor.&rdquo;
        </p>
        <div className="font-mono text-[10px] tracking-[0.22em] text-ink-mute mt-8">
          · ESSOR PRACTICE NOTE
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="px-14 py-[120px]">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-8">
          § Frequently asked
        </div>
        <div className="border-t border-ink">
          {faqs.map(([question, answer]) => (
            <details key={question} className="border-b border-rule group">
              <summary className="flex justify-between items-center py-6 cursor-pointer">
                <span className="font-serif text-[clamp(18px,2vw,26px)] font-normal">{question}</span>
                <span className="font-serif italic text-[22px] text-accent ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="font-sans text-[15px] text-ink-soft leading-[1.7] max-w-[720px] pb-6">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
