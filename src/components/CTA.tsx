"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function CTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px] orb-1 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-purple/8 blur-[130px] orb-2 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="relative rounded-2xl gradient-border">
          <div className="relative rounded-2xl glass-card !bg-surface-light/70 p-8 sm:p-12">
            {/* Noise inside card */}
            <div className="absolute inset-0 rounded-2xl noise pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  Ready to <span className="ai-text gradient-text-animated">scale your brand?</span>
                </h2>
                <p className="mt-5 text-muted text-lg leading-relaxed">
                  Get a free demo video ad for your product. No commitment, no
                  payment info needed. Just see what AI can do for your brand.
                </p>
              </div>

              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="relative mx-auto h-18 w-18 rounded-full bg-gradient-to-br from-accent/15 to-purple/15 border border-accent/20 flex items-center justify-center mb-5">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display gradient-text">Message Sent!</h3>
                  <p className="mt-3 text-muted leading-relaxed">
                    I&apos;ll get back to you within 24 hours with your free demo ad
                    concept.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold font-display mb-2 tracking-wide"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-surface-border/60 bg-surface/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted/40 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-surface"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold font-display mb-2 tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@yourbrand.com"
                        className="w-full rounded-xl border border-surface-border/60 bg-surface/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted/40 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-surface"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold font-display mb-2 tracking-wide"
                    >
                      Your Store / Product URL
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      required
                      placeholder="https://yourstore.com"
                      className="w-full rounded-xl border border-surface-border/60 bg-surface/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted/40 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-surface"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold font-display mb-2 tracking-wide"
                    >
                      Tell me about your brand
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What products do you sell? What's your target audience? Any specific goals for video ads?"
                      className="w-full rounded-xl border border-surface-border/60 bg-surface/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted/40 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-surface resize-none"
                    />
                  </div>

                  {/* Honeypot — hidden from humans, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: "none" }}
                    aria-hidden="true"
                  />

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full btn-gradient py-4 text-base font-bold font-display text-background tracking-wide glow-multi disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Get My Free Demo Ad"}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-sm text-pink font-display">
                      Something went wrong. Please try again, or email me directly at{" "}
                      <a
                        href="mailto:ivakailiev7@gmail.com"
                        className="underline hover:text-accent transition-colors"
                      >
                        ivakailiev7@gmail.com
                      </a>
                      .
                    </p>
                  )}

                  <p className="text-center text-xs text-muted/60 font-display">
                    100% free. No credit card required. I&apos;ll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
