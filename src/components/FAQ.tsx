"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly are AI video ads?",
    answer:
      "AI video ads are professional-quality video advertisements created using cutting-edge artificial intelligence tools. They look and feel like traditional UGC or studio-produced content, but are created faster and at a fraction of the cost. The AI handles the heavy lifting — from generating realistic presenters to creating dynamic product showcases — while I direct the creative strategy to make sure every video is optimized for conversions.",
  },
  {
    question: "Are AI-generated videos actually effective for ads?",
    answer:
      "Absolutely. UGC-style video ads consistently outperform polished brand creatives, delivering 4x higher click-through rates and 50% lower cost-per-acquisition. AI-generated UGC matches or outperforms traditional UGC on key metrics like CPA, CTR, and ROAS — and you get results in days instead of weeks.",
  },
  {
    question: "Do you only work with fitness and supplement brands?",
    answer:
      "Yes, that’s my specialization. By focusing exclusively on fitness and supplement brands, I understand your audience psychology, what hooks work, what visuals convert, and what the top performers in your space are doing. This specialization means better results for you.",
  },
  {
    question: "How fast will I receive my videos?",
    answer:
      "Standard turnaround is 48 hours from brief approval. Growth plan clients get 36-hour priority turnaround, and Scale plan clients get 24-hour priority. If you need something even faster, let’s talk — rush delivery is available.",
  },
  {
    question: "Can I use these videos for paid ads on Meta and TikTok?",
    answer:
      "Yes — all videos come with full commercial usage rights. You can run them on Facebook, Instagram, TikTok, YouTube, Google Ads, or any other platform. They’re delivered in the exact formats and resolutions each platform requires.",
  },
  {
    question: "What if I don’t like a video?",
    answer:
      "Every package includes revision rounds. If something doesn’t feel right, I’ll adjust it. My goal is to deliver ads you’re excited to run. If we can’t get it right, I’ll create a replacement at no extra cost.",
  },
  {
    question: "Do I need to provide anything besides my product?",
    answer:
      "Just your product link or photos, and any brand guidelines you have (logo, colors, tone of voice). If you don’t have brand guidelines, that’s fine too — I’ll work with what you have and create something that fits your brand naturally.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "No long-term contracts. All plans are month-to-month. You can cancel, upgrade, or downgrade at any time. I believe the work should speak for itself.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/60" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px line-gradient" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Got <span className="ai-text gradient-text-animated">questions?</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-400 ${
                openIndex === index ? "!border-accent/20 glow-cyan-sm" : ""
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-sm sm:text-base font-semibold font-display pr-4 tracking-wide">
                  {faq.question}
                </span>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-surface-border/50 transition-all duration-300 ${
                  openIndex === index ? "bg-accent/10 border-accent/30 rotate-180" : ""
                }`}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-colors ${openIndex === index ? "text-accent" : "text-muted"}`}
                  >
                    <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-surface-border/50 to-transparent mb-4" />
                    <p className="text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
