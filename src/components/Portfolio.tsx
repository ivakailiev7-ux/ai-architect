"use client";

import { useRef, useState } from "react";

type Video = {
  src: string;
  poster: string;
  title: string;
  category: "UGC" | "Product" | "Brand";
};

const videos: Video[] = [
  {
    src: "/portfolio/ugc-app-presenter.mp4",
    poster: "/portfolio/ugc-app-presenter.jpg",
    title: "Fitness App UGC Ad",
    category: "UGC",
  },
  {
    src: "/portfolio/product-tracksuit.mp4",
    poster: "/portfolio/product-tracksuit.jpg",
    title: "Tracksuit Product Showcase",
    category: "Product",
  },
  {
    src: "/portfolio/brand-night-city.mp4",
    poster: "/portfolio/brand-night-city.jpg",
    title: "Night City Brand Film",
    category: "Brand",
  },
  {
    src: "/portfolio/product-sneakers.mp4",
    poster: "/portfolio/product-sneakers.jpg",
    title: "Sneaker Launch Ad",
    category: "Product",
  },
  {
    src: "/portfolio/lifestyle-steps.mp4",
    poster: "/portfolio/lifestyle-steps.jpg",
    title: "Streetwear Lifestyle Reel",
    category: "UGC",
  },
  {
    src: "/portfolio/brand-studio-campaign.mp4",
    poster: "/portfolio/brand-studio-campaign.jpg",
    title: "Tracksuit Brand Campaign",
    category: "Brand",
  },
];

const categoryColors: Record<Video["category"], string> = {
  UGC: "from-accent to-accent-light",
  Product: "from-purple to-purple-light",
  Brand: "from-pink to-accent",
};

function VideoCard({ video }: { video: Video }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const v = ref.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  }

  function stop() {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  }

  return (
    <div
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden card-3d cursor-pointer bg-surface-light"
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={() => (playing ? stop() : play())}
    >
      <video
        ref={ref}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={video.title}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video.src} type="video/mp4" />
      </video>

      {/* Border ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-surface-border/50 transition-all duration-500 group-hover:ring-accent/40" />

      {/* Bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

      {/* Play indicator (fades out while playing) */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-background/40 backdrop-blur-sm border border-accent/30 transition-transform duration-500 group-hover:scale-110">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-accent ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pulse-ring" />
        </div>
      </div>

      {/* Title + category */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span
          className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[video.category]} px-3 py-1 text-xs font-bold text-background`}
        >
          {video.category}
        </span>
        <h3 className="mt-2.5 text-sm font-semibold text-foreground font-display tracking-wide">
          {video.title}
        </h3>
      </div>
    </div>
  );
}

export function Portfolio() {
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
            Real AI-generated video ads, engineered for fitness and supplement
            brands. Every video is crafted to convert browsers into buyers.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
          {videos.map((video) => (
            <VideoCard key={video.src} video={video} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-sm text-muted font-display tracking-wide">
            Want scroll-stopping ads like these?{" "}
            <a href="#contact" className="text-accent font-semibold hover:text-accent-light transition-colors">
              Claim your free demo &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
