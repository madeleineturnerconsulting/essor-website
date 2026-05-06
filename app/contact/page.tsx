"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  const inputClasses =
    "w-full border-b border-burgundy-soft bg-transparent px-0 py-4 text-base font-light text-ink placeholder:text-ink/30 focus:outline-none focus:border-burgundy transition-colors";
  const labelClasses =
    "text-[11px] uppercase tracking-[0.25em] text-ink/50 font-light";

  return (
    <section className="bg-cream pt-32 pb-32 md:pt-44 md:pb-44">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 md:gap-28 items-start">
          {/* Left, intro */}
          <div className="md:sticky md:top-32">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-px bg-burgundy" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-burgundy font-light">
                Let&apos;s talk
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-10">
              Start the <em className="italic text-burgundy">conversation</em>.
            </h1>
            <p className="text-base font-light text-ink/65 leading-[1.85] max-w-sm mb-12">
              Tell us about your team and what you are hoping to achieve. We will get back to you within one business day.
            </p>

            <div className="border-t border-burgundy-soft pt-8 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 font-light">
                Or reach us directly
              </p>
              <p className="font-serif text-xl text-burgundy">hello@essor.co.nz</p>
            </div>
          </div>

          {/* Right, form */}
          <div>
            {state === "success" ? (
              <div className="border-t border-burgundy pt-12">
                <p className="font-serif text-3xl md:text-4xl font-light italic text-burgundy mb-6 leading-tight">
                  Thank you.
                </p>
                <p className="text-base font-light text-ink/70 leading-[1.85] max-w-md">
                  Your message has been received. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="space-y-3">
                    <label className={labelClasses}>Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className={labelClasses}>Company</label>
                    <input
                      name="company"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={labelClasses}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className={labelClasses}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className={`${inputClasses} resize-none leading-[1.8]`}
                    placeholder="Tell us about your team and your space."
                  />
                </div>

                {state === "error" && (
                  <p className="text-sm font-light text-burgundy border-t border-burgundy pt-4">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="inline-flex items-center gap-3 bg-burgundy text-cream text-[11px] uppercase tracking-[0.25em] font-light px-12 py-5 hover:bg-ink transition-colors disabled:opacity-40"
                  >
                    {state === "submitting" ? "Sending" : "Send message"}
                    {state !== "submitting" && <ArrowRight size={14} strokeWidth={1.25} />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
