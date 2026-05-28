const stats = [
  {
    stat: "93%",
    label: "of marketers say video increases ROI",
    color: "from-accent to-accent-light",
  },
  {
    stat: "4x",
    label: "higher click-through rate with UGC ads",
    color: "from-purple to-accent",
  },
  {
    stat: "80%",
    label: "lower production cost vs traditional agencies",
    color: "from-accent to-purple",
  },
  {
    stat: "50%",
    label: "lower CPA with UGC-style video creatives",
    color: "from-pink to-purple",
  },
];

const comparisons = [
  {
    feature: "Cost per video",
    traditional: "$500 — $2,000+",
    aiArchitect: "From $99",
  },
  {
    feature: "Turnaround time",
    traditional: "1 — 3 weeks",
    aiArchitect: "48 hours",
  },
  {
    feature: "Variations per concept",
    traditional: "1 — 2",
    aiArchitect: "5 — 10+",
  },
  {
    feature: "Monthly creative refresh",
    traditional: "Rarely",
    aiArchitect: "Included",
  },
  {
    feature: "Fitness niche expertise",
    traditional: "Generic",
    aiArchitect: "Specialized",
  },
];

export function WhyAI() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] rounded-full bg-purple/5 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
            Why AI Video Ads
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            The numbers <span className="ai-text gradient-text-animated">don&apos;t lie</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {stats.map((item) => (
            <div
              key={item.stat}
              className="group glass-card rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-display gradient-text-animated mb-3">
                {item.stat}
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.label}</p>

              {/* Bottom accent */}
              <div className={`mx-auto mt-5 h-0.5 w-8 rounded-full bg-gradient-to-r ${item.color} opacity-30 group-hover:w-16 group-hover:opacity-60 transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-surface-border/50">
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-wide">
              Traditional Agency vs{" "}
              <span className="gradient-text">AI Architect</span>
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-surface-border/30">
                  <th className="text-left p-4 sm:p-6 text-xs font-display font-semibold text-muted/60 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="text-left p-4 sm:p-6 text-xs font-display font-semibold text-muted/60 uppercase tracking-wider">
                    Traditional Agency
                  </th>
                  <th className="text-left p-4 sm:p-6 text-xs font-display font-semibold gradient-text uppercase tracking-wider">
                    AI Architect
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-surface-border/20 last:border-0 group hover:bg-accent/3 transition-colors"
                  >
                    <td className="p-4 sm:p-6 text-sm font-semibold">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 text-sm text-muted/70">
                      {row.traditional}
                    </td>
                    <td className="p-4 sm:p-6 text-sm font-semibold gradient-text">
                      {row.aiArchitect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
