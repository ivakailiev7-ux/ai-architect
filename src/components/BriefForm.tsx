"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// Labels for the plan the customer just subscribed to. The plan arrives as a
// ?plan= query param set by the Stripe Payment Link's post-payment redirect.
const PLAN_LABELS: Record<string, string> = {
  starter: "Starter — $129/mo",
  growth: "Growth — $349/mo",
  scale: "Scale — $799/mo",
};

const inputClass =
  "w-full rounded-xl border border-surface-border/60 bg-surface/80 backdrop-blur-sm px-4 py-3.5 text-sm text-foreground placeholder:text-muted/40 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-surface";
const labelClass = "block text-sm font-semibold font-display mb-2 tracking-wide";

export function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [plan, setPlan] = useState("");

  // Read the plan from the URL on the client only (no server search params, so
  // the page stays static). Endorsed in the Next.js docs for client-side reads.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("plan");
    if (p) setPlan(p.toLowerCase());
  }, []);

  const planLabel = PLAN_LABELS[plan] ?? "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/brief", {
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
    <section className="relative py-24 sm:py-32 overflow-hidden min-h-screen">
      {/* Background orbs */}
      <div className="absolute top-[15%] left-[18%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px] orb-1 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[12%] w-[400px] h-[400px] rounded-full bg-purple/8 blur-[130px] orb-2 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="text-center mb-8">
          <a
            href="/"
            className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display"
          >
            AI Architect
          </a>
        </div>

        <div className="relative rounded-2xl gradient-border">
          <div className="relative rounded-2xl glass-card !bg-surface-light/70 p-8 sm:p-12">
            {/* Noise inside card */}
            <div className="absolute inset-0 rounded-2xl noise pointer-events-none" />

            <div className="relative z-10">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="relative mx-auto h-18 w-18 rounded-full bg-gradient-to-br from-accent/15 to-purple/15 border border-accent/20 flex items-center justify-center mb-5">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display gradient-text">Brief received &mdash; thank you!</h3>
                  <p className="mt-3 text-muted leading-relaxed">
                    Your brief is in. I&apos;ll start building your ads and deliver
                    the first batch{" "}
                    <span className="text-foreground font-semibold">within 48 hours</span>{" "}
                    &mdash; often sooner. You&apos;ll receive them by email.
                  </p>
                  <a href="/" className="mt-6 inline-block text-sm text-accent font-display tracking-wide hover:text-glow transition-all">
                    Back to home
                  </a>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                      Tell me about your <span className="ai-text gradient-text-animated">brand</span>
                    </h1>
                    <p className="mt-4 text-muted leading-relaxed">
                      A few quick details and I&apos;ll start building your ads.
                      Takes about two minutes.
                    </p>
                    {planLabel && (
                      <span className="mt-5 inline-block rounded-full btn-gradient px-5 py-1.5 text-xs font-bold text-background font-display tracking-wider uppercase">
                        {planLabel}
                      </span>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="plan" value={plan} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="brand" className={labelClass}>
                          Brand name
                        </label>
                        <input id="brand" name="brand" type="text" required placeholder="Your brand" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input id="email" name="email" type="email" required placeholder="you@yourbrand.com" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="website" className={labelClass}>
                        Store / Product URL
                      </label>
                      <input id="website" name="website" type="url" required placeholder="https://yourstore.com" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="products" className={labelClass}>
                        Which product(s) should I feature?
                      </label>
                      <textarea id="products" name="products" rows={2} placeholder="Link or name the hero product(s) you want the ads to push." className={`${inputClass} resize-none`} />
                    </div>

                    <div>
                      <label htmlFor="audience" className={labelClass}>
                        Target audience
                      </label>
                      <input id="audience" name="audience" type="text" placeholder="e.g. women 25-40 into clean fitness supplements" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="usp" className={labelClass}>
                        Key benefit (what makes it different)
                      </label>
                      <textarea id="usp" name="usp" rows={2} placeholder="The one thing that makes your product worth buying." className={`${inputClass} resize-none`} />
                    </div>

                    <div>
                      <label htmlFor="references" className={labelClass}>
                        Reference ads or a vibe you like (optional)
                      </label>
                      <input id="references" name="references" type="text" placeholder="Paste a link, or describe the style/tone." className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="avoid" className={labelClass}>
                        Anything to avoid? (optional)
                      </label>
                      <input id="avoid" name="avoid" type="text" placeholder="Claims, words, or styles to stay away from." className={inputClass} />
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
                      {status === "submitting" ? "Sending..." : "Send my brief"}
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
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
