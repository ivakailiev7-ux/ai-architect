export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Layers ── */}
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[150px] orb-1 pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple/12 blur-[130px] orb-2 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] rounded-full bg-pink/8 blur-[120px] orb-3 pointer-events-none" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* ── Floating 3D Elements ── */}

      {/* Top-right floating element */}
      <div className="hidden lg:block absolute right-[15%] top-[20%] animate-float-slow opacity-30">
        <div className="h-20 w-20 rounded-2xl border border-accent/20 bg-accent/5 flex items-center justify-center rotate-12">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        </div>
      </div>

      {/* Bottom-left floating circle */}
      <div className="hidden lg:block absolute left-[12%] bottom-[20%] animate-float-slow opacity-20">
        <div className="h-16 w-16 rounded-full border border-purple/30 bg-purple/5 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-purple/50" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm px-5 py-2 text-sm text-accent animate-fade-in-up">
          <span className="relative h-2 w-2 rounded-full bg-accent">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
          </span>
          <span className="font-display tracking-wide">AI-Powered Video Ads</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] animate-fade-in-up delay-100">
          <span className="text-shimmer">Video ads that</span>
          <br />
          <span className="text-shimmer">make </span>
          <span className="ai-text gradient-text-animated text-glow">fitness brands</span>
          <br />
          <span className="text-shimmer">sell more</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed animate-fade-in-up delay-300">
          I create scroll-stopping AI video ads for supplement &amp; fitness Shopify
          brands. You send me your product &mdash; I send you ready-to-run ads.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full btn-gradient px-8 py-4 text-base font-semibold text-background glow-multi"
          >
            Get Your Free Demo Ad
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2.5 rounded-full border border-surface-border/60 px-8 py-4 text-base font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground backdrop-blur-sm"
          >
            See My Work
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform group-hover:translate-y-0.5">
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 animate-fade-in-up delay-600">
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: "48h", label: "Turnaround" },
              { value: "5–10+", label: "Ad Variations" },
              { value: "From $99", label: "Per Video" },
            ].map((stat, i) => (
              <div key={stat.label} className="relative group">
                <div className="glass-card rounded-2xl p-5 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold font-display gradient-text-animated">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-muted font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
}
