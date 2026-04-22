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
    <div className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-black/30 mb-4">
              Let&apos;s talk
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
              Get in touch
            </h1>
            <p className="text-base font-light text-black/60 leading-relaxed max-w-sm">
              Tell us about your team and what you are hoping to achieve. We will get back to you within one business day.
            </p>
          </div>

          <div>
            {state === "success" ? (
              <div className="border border-black/10 p-10">
                <p className="text-sm font-semibold mb-2">Message received.</p>
                <p className="text-sm font-light text-black/60">
                  Thank you for reaching out. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold tracking-widest uppercase text-black/40">
                      Name
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      className="border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold tracking-widest uppercase text-black/40">
                      Company
                    </span>
                    <input
                      name="company"
                      type="text"
                      required
                      className="border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent"
                      placeholder="Your company"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-black/40">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-black/40">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                    placeholder="Tell us about your team, your workplace, and what you are hoping to achieve."
                  />
                </label>

                {state === "error" && (
                  <p className="text-sm text-black/60 border border-black/15 px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="bg-black text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-black/80 transition-colors disabled:opacity-40 self-start"
                >
                  {state === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
