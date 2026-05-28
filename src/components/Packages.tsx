const packages = [
  {
    name: "Starter",
    price: "$497",
    period: "/month",
    description: "Perfect for brands testing video ads for the first time.",
    features: [
      "4 AI video ads per month",
      "4 ad copy variations",
      "9:16 vertical format (Reels/TikTok/Shorts)",
      "1 round of revisions per video",
      "48-hour turnaround",
      "Commercial usage rights",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$997",
    period: "/month",
    description: "For brands ready to scale with diverse creative angles.",
    features: [
      "8 AI video ads per month",
      "A/B hook variations for each",
      "Multiple formats (9:16 + 1:1)",
      "Monthly creative strategy call",
      "Competitor ad analysis",
      "2 rounds of revisions per video",
      "Priority turnaround (36h)",
      "Commercial usage rights",
    ],
    cta: "Scale Your Ads",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$1,997",
    period: "/month",
    description: "Full creative partnership for brands spending on ads.",
    features: [
      "16+ AI video ads per month",
      "Unlimited hook & CTA variations",
      "All formats (9:16, 1:1, 16:9)",
      "Weekly creative strategy",
      "Competitor & trend monitoring",
      "Unlimited revisions",
      "24-hour priority turnaround",
      "Dedicated Slack channel",
      "Commercial usage rights",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/60" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px line-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/4 blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
            Packages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Simple, <span className="ai-text gradient-text-animated">transparent</span> pricing
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted text-lg leading-relaxed">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl transition-all duration-500 ${
                pkg.highlighted
                  ? "gradient-border md:scale-[1.04] md:-my-2"
                  : ""
              }`}
            >
              <div
                className={`relative rounded-2xl p-8 h-full ${
                  pkg.highlighted
                    ? "glass-card !bg-surface-light/80 glow-multi"
                    : "glass-card"
                }`}
              >
                {/* Popular badge */}
                {pkg.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full btn-gradient px-5 py-1.5 text-xs font-bold text-background font-display tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold font-display tracking-wide">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-5xl font-extrabold font-display gradient-text-animated">
                      {pkg.price}
                    </span>
                    <span className="text-muted text-sm">{pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{pkg.description}</p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-surface-border to-transparent mb-8" />

                {/* Features */}
                <ul className="mb-10 space-y-3.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-purple/20">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-muted/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full rounded-full py-3.5 text-center text-sm font-bold font-display tracking-wide transition-all duration-400 ${
                    pkg.highlighted
                      ? "btn-gradient text-background"
                      : "border border-surface-border/60 text-foreground hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-muted font-display">
          Need a custom package?{" "}
          <a href="#contact" className="gradient-text font-semibold hover:text-glow transition-all">
            Let&apos;s talk
          </a>{" "}
          about what works for your brand.
        </p>
      </div>
    </section>
  );
}
