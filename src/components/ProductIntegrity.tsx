const guarantees = [
  {
    title: "Locked Product References",
    description:
      "Every ad is built around your real product photos — never an AI guess. Packaging, colors, and proportions stay pixel-accurate.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Logos & Labels Untouched",
    description:
      "Your branding is treated as locked. Logos, text, and claims are preserved frame by frame — no melting, no distortion.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3" />
        <rect x="7" y="8" width="10" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Human-Reviewed Before Delivery",
    description:
      "Before any video reaches you, I personally check every frame for product accuracy. No surprises, ever.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export function ProductIntegrity() {
  return (
    <section id="accuracy" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background — blueprint signature */}
      <div className="absolute inset-0 bg-surface/40" />
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/6 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px line-gradient" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
            Product Accuracy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Always 100% <span className="ai-text gradient-text-animated">your product</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted text-lg leading-relaxed">
            The biggest worry with AI ads is a warped logo or a label that
            isn&apos;t quite right. So I engineered the process to make that
            impossible &mdash; your product shows up exactly as it is in real life.
          </p>
        </div>

        {/* Framed blueprint container with corner crosshairs */}
        <div className="relative rounded-3xl border border-accent/15 p-6 sm:p-10">
          {/* Corner marks */}
          <span className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl" />
          <span className="absolute -top-px -right-px h-6 w-6 border-t-2 border-r-2 border-accent/50 rounded-tr-3xl" />
          <span className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-accent/50 rounded-bl-3xl" />
          <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-accent/50 rounded-br-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((item) => (
              <div
                key={item.title}
                className="group glass-card rounded-2xl p-8 text-center md:text-left"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-display mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance footer line */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full glass-card !px-5 !py-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-muted font-display tracking-wide">
              Not happy with a single frame? I re-cut it free &mdash; every package includes revisions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
