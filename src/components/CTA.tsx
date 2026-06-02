export function CTA() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px] orb-1 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-purple/8 blur-[130px] orb-2 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="relative rounded-2xl gradient-border">
          <div className="relative rounded-2xl glass-card !bg-surface-light/70 p-8 sm:p-12 text-center">
            {/* Noise inside card */}
            <div className="absolute inset-0 rounded-2xl noise pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Ready to <span className="ai-text gradient-text-animated">scale your brand?</span>
              </h2>
              <p className="mt-5 mx-auto max-w-xl text-muted text-lg leading-relaxed">
                Pick a plan, send a short brief, and get scroll-stopping AI video
                ads within 48 hours. No calls, no contracts. Not happy with your
                first month? Full refund &mdash; no questions asked.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2.5 rounded-full btn-gradient px-8 py-4 text-base font-bold font-display text-background tracking-wide glow-multi"
                >
                  View Plans
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2.5 rounded-full border border-surface-border/60 px-8 py-4 text-base font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground backdrop-blur-sm"
                >
                  See My Work
                </a>
              </div>

              <p className="mt-8 text-xs text-muted/60 font-display">
                Questions before you subscribe? Email me at{" "}
                <a
                  href="mailto:ivakailiev7@gmail.com"
                  className="underline hover:text-accent transition-colors"
                >
                  ivakailiev7@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
