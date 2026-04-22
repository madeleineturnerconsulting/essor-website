"use client";

import { useState } from "react";

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

  return (
    <>
      {/* Page header */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-12 h-px bg-[#6B2737] mb-10" />
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#1a1a1a]/40 mb-6">
            Let&apos;s talk
          </p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] italic font-normal leading-tight tracking-tight max-w-2xl text-[#1a1a1a]">
            Get in touch.
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#6B2737]/25" />
      </div>

      {/* Form */}
      <section className="bg-[#FAF8F5] py-[120px] md:py-[160px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-20 items-start">
            <div>
              <p className="text-base font-light text-[#1a1a1a]/55 leading-[1.8] max-w-xs">
                Tell us about your team and what you are hoping to achieve. We will get back to you within one business day.
              </p>
            </div>

            <div>
              {state === "success" ? (
                <div className="border border-[#6B2737]/25 p-10">
                  <p className="font-serif text-xl font-normal mb-3 text-[#1a1a1a]">Message received.</p>
                  <p className="text-sm font-light text-[#1a1a1a]/55 leading-[1.8]">
                    Thank you for reaching out. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <div className="grid md:grid-cols-2 gap-7">
                    <label className="flex flex-col gap-3">
                      <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#1a1a1a]/40">
                        Name
                      </span>
                      <input
                        name="name"
                        type="text"
                        required
                        className="border border-[#1a1a1a]/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#6B2737] transition-colors bg-transparent text-[#1a1a1a] placeholder:text-[#1a1a1a]/30"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="flex flex-col gap-3">
                      <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#1a1a1a]/40">
                        Company
                      </span>
                      <input
                        name="company"
                        type="text"
                        required
                        className="border border-[#1a1a1a]/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#6B2737] transition-colors bg-transparent text-[#1a1a1a] placeholder:text-[#1a1a1a]/30"
                        placeholder="Your company"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-3">
                    <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#1a1a1a]/40">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="border border-[#1a1a1a]/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#6B2737] transition-colors bg-transparent text-[#1a1a1a] placeholder:text-[#1a1a1a]/30"
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="flex flex-col gap-3">
                    <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#1a1a1a]/40">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={7}
                      className="border border-[#1a1a1a]/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#6B2737] transition-colors bg-transparent resize-none text-[#1a1a1a] placeholder:text-[#1a1a1a]/30"
                      placeholder="Tell us about your team, your workplace, and what you are hoping to achieve."
                    />
                  </label>

                  {state === "error" && (
                    <p className="text-sm font-light text-[#1a1a1a]/55 border border-[#6B2737]/30 px-5 py-4">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="bg-[#6B2737] text-[#FAF8F5] text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#5a1f2d] transition-colors disabled:opacity-40 self-start"
                  >
                    {state === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
