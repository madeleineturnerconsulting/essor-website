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
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/35 mb-6">
            Let&apos;s talk
          </p>
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-normal leading-tight tracking-tight max-w-2xl text-black">
            Get in touch.
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-black/10" />
      </div>

      {/* Form */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
            <div>
              <p className="text-sm font-light text-black/55 leading-[1.8] max-w-xs mb-6">
                Tell us about your team and your workplace. We will get back to you within one business day.
              </p>
              <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-black/30">
                Pricing on request.
              </p>
            </div>

            <div>
              {state === "success" ? (
                <div className="border border-black/10 p-10">
                  <p className="font-serif text-xl font-normal mb-3 text-black">Message received.</p>
                  <p className="text-sm font-light text-black/55 leading-[1.8]">
                    Thank you for reaching out. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <div className="grid md:grid-cols-2 gap-7">
                    <label className="flex flex-col gap-3">
                      <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-black/40">
                        Name
                      </span>
                      <input
                        name="name"
                        type="text"
                        required
                        className="border border-black/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent text-black placeholder:text-black/25"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="flex flex-col gap-3">
                      <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-black/40">
                        Company
                      </span>
                      <input
                        name="company"
                        type="text"
                        required
                        className="border border-black/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent text-black placeholder:text-black/25"
                        placeholder="Your company"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-3">
                    <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-black/40">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="border border-black/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent text-black placeholder:text-black/25"
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="flex flex-col gap-3">
                    <span className="text-[10px] font-normal tracking-[0.15em] uppercase text-black/40">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={7}
                      className="border border-black/15 px-5 py-4 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent resize-none text-black placeholder:text-black/25"
                      placeholder="Tell us about your team and your workplace."
                    />
                  </label>

                  {state === "error" && (
                    <p className="text-sm font-light text-black/55 border border-black/15 px-5 py-4">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="bg-black text-white text-xs font-normal uppercase tracking-[0.15em] px-10 py-4 hover:bg-black/75 transition-colors disabled:opacity-40 self-start"
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
