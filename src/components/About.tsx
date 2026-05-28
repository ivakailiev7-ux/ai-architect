export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left -- Photo placeholder */}
          <div className="relative">
            {/* Main frame */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-px rounded-2xl bg-surface-light overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-accent/15 to-purple/15 border border-accent/20 flex items-center justify-center">
                      <span className="text-4xl font-extrabold font-display gradient-text">AI</span>
                      <div className="absolute inset-0 rounded-full animate-spin-slow border border-dashed border-accent/10" />
                    </div>
                    <p className="mt-5 text-sm text-muted/50 font-display italic">
                      Your photo here
                    </p>
                  </div>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-accent/5 pointer-events-none" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-8 sm:-right-6 glass-card rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted">Turnaround</div>
                  <div className="text-sm font-bold font-display gradient-text">48 Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right -- Text */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
              About
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              The <span className="ai-text gradient-text-animated">AI Architect</span>
            </h2>

            <div className="mt-8 space-y-5 text-muted leading-relaxed">
              <p>
                I&apos;m a video content architect who combines AI technology with
                creative direction to build video ads that actually convert.
              </p>
              <p>
                While most agencies charge thousands for a single video and take
                weeks to deliver, I use cutting-edge AI tools to create
                high-performing ad creatives in hours &mdash; at a fraction of
                the cost.
              </p>
              <p>
                I specialize exclusively in{" "}
                <span className="text-foreground font-semibold">
                  fitness and supplement brands
                </span>{" "}
                because I understand the market, the audience psychology, and what
                makes fitness consumers click &ldquo;Buy Now.&rdquo;
              </p>
              <p>
                Every video I create is engineered for one thing:{" "}
                <span className="gradient-text font-semibold">
                  stopping the scroll and driving sales.
                </span>
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: "AI-First", sub: "Production" },
                { label: "Fitness", sub: "Specialized" },
                { label: "Results", sub: "Driven" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-lg font-bold font-display gradient-text">{stat.label}</div>
                  <div className="text-xs text-muted mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/ai_architectt_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-xl glass-card !p-0 transition-all hover:border-accent/30"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-muted group-hover:text-accent transition-colors">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
