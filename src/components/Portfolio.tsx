export function Portfolio() {
  const videos = [
    { id: 1, title: "Fitness Apparel UGC Ad", category: "UGC" },
    { id: 2, title: "Supplement Product Showcase", category: "Product" },
    { id: 3, title: "Athletic Wear Brand Story", category: "Brand" },
    { id: 4, title: "Pre-Workout Launch Ad", category: "Product" },
    { id: 5, title: "Gym Wear Lifestyle Reel", category: "UGC" },
    { id: 6, title: "Protein Brand Campaign", category: "Brand" },
  ];

  const categoryColors: Record<string, string> = {
    UGC: "from-accent to-accent-light",
    Product: "from-purple to-purple-light",
    Brand: "from-pink to-accent",
  };

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Ads that <span className="ai-text gradient-text-animated">stop the scroll</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted text-lg leading-relaxed">
            AI-generated video ads, engineered for fitness and supplement brands.
            Every video is crafted to convert browsers into buyers.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden card-3d"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-surface-border/60 via-surface-border/30 to-surface-border/60 group-hover:from-accent/40 group-hover:via-purple/30 group-hover:to-pink/20 transition-all duration-500">
                <div className="h-full w-full rounded-2xl bg-surface-light" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Play button */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/15 to-purple/15 border border-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-accent ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pulse-ring" />
                </div>

                <h3 className="mt-5 text-sm font-semibold text-foreground text-center font-display tracking-wide">
                  {video.title}
                </h3>
                <span className={`mt-3 inline-flex rounded-full bg-gradient-to-r ${categoryColors[video.category]} px-4 py-1 text-xs font-bold text-background`}>
                  {video.category}
                </span>
              </div>

              {/* Bottom gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Launch CTA */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-sm text-muted font-display tracking-wide">
            First demo reels dropping soon &mdash;{" "}
            <a href="#contact" className="text-accent font-semibold hover:text-accent-light transition-colors">
              claim a free one for your brand
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
