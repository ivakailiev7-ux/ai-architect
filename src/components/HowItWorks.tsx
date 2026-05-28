const steps = [
  {
    number: "01",
    title: "Send Your Product",
    description:
      "Share your product link, photos, or brand assets. That's all I need to get started.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    color: "from-accent to-accent-light",
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    number: "02",
    title: "I Create Your Ads",
    description:
      "Using AI + professional editing, I craft scroll-stopping video ads tailored to your brand and audience.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    color: "from-purple to-purple-light",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    number: "03",
    title: "You Run & Scale",
    description:
      "Get your ready-to-run ads. Drop them into Meta, TikTok, or Instagram and watch your sales grow.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "from-pink to-accent",
    glowColor: "rgba(236, 72, 153, 0.15)",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/60" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px line-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-px line-gradient" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
            How It Works
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Simple. Fast. <span className="ai-text gradient-text-animated">Effective.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted text-lg leading-relaxed">
            No complicated briefs. No weeks of waiting. Just high-converting
            video ads delivered to your inbox.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-accent/20 via-purple/15 to-transparent" />
                  {/* Animated dot on line */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
                </div>
              )}

              <div className="glass-card rounded-2xl p-8 h-full">
                {/* Step icon + number */}
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 text-white/90 transition-all duration-500 group-hover:scale-110`}
                    style={{ background: step.glowColor }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-sm font-display font-bold tracking-wider text-muted/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display mb-3 tracking-wide">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>

                {/* Bottom accent line */}
                <div className={`mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r ${step.color} opacity-40 group-hover:w-full group-hover:opacity-70 transition-all duration-700`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
