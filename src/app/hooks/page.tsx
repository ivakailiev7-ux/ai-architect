import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Scroll-Stopping Hooks for Supplement & Fitness Ads | AI Architect",
  description:
    "Steal 10 proven ad hooks that stop the scroll for supplement and fitness brands — with examples and how to use them. A free playbook by AI Architect.",
  openGraph: {
    title: "10 Scroll-Stopping Hooks for Supplement & Fitness Ads",
    description:
      "10 proven ad hooks that stop the scroll — with examples. Free playbook by AI Architect.",
    type: "article",
  },
};

const hooks = [
  {
    n: "01",
    type: "The Direct Callout",
    line: "“If you take protein every day but still feel bloated — stop scrolling.”",
    why: "Speaks to one person with one specific problem, and the pattern-interrupt freezes the thumb. Generic ads talk to everyone and reach no one.",
    eg: "Gut / protein: “If your protein leaves you bloated by lunch, this 15 seconds is for you.”",
  },
  {
    n: "02",
    type: "The Contrarian Myth-Bust",
    line: "“Everyone's wrong about when to take their greens.”",
    why: "Challenging a belief creates an itch the viewer has to scratch — they watch to find out if they're the one doing it wrong.",
    eg: "Greens: “Stop taking your greens on an empty stomach. Here's what to do instead.”",
  },
  {
    n: "03",
    type: "The Problem-Reveal (No-Blame)",
    line: "“Your pre-workout stopped hitting — and it's not your fault.”",
    why: "Names a real frustration, then removes the blame. That combination makes people lean in instead of feeling attacked.",
    eg: "Pre-workout: “The reason your pre-workout feels weaker now (and the 5-second fix).”",
  },
  {
    n: "04",
    type: "The Demonstration",
    line: "“No clumps. No chalk. Watch.”",
    why: "For anything you consume, showing beats telling. A satisfying visual in second one buys you the next ten.",
    eg: "Protein: “Watch this dissolve in 3 seconds — zero clumps, zero blender.”",
  },
  {
    n: "05",
    type: "The 3PM POV",
    line: "“POV: it's 3pm, the crash is coming… except today it isn't.”",
    why: "Drops the viewer straight into a moment they live every day. Relatability equals retention.",
    eg: "Energy / ketones: “POV: the whole office hits the 3pm wall — except you.”",
  },
  {
    n: "06",
    type: "The Social-Proof Number",
    line: "“12,000 women switched to this for bloating. Here's why.”",
    why: "A specific number signals credibility, and “here's why” opens a curiosity loop they want closed.",
    eg: "Women's wellness: “Why 12,000 women quietly ditched their old multivitamin.”",
  },
  {
    n: "07",
    type: "The 30-Day Test",
    line: "“I tried 7 protein powders for 30 days. Only one didn't wreck my stomach.”",
    why: "Sounds like an honest review, not an ad, and opens a gap — which one? — that pulls them through.",
    eg: "Protein: use the line as-is, then reveal the product at the end.",
  },
  {
    n: "08",
    type: "The Price Comparison",
    line: "“$80 greens vs our $35 — same 6 ingredients. Let me prove it.”",
    why: "Value framing plus a proof promise. People stay to see the reveal and the label-to-label.",
    eg: "Greens: film the two labels side by side, circle the matching ingredients.",
  },
  {
    n: "09",
    type: "The Founder Truth",
    line: "“I made this because every other sleep aid left me groggy.”",
    why: "An origin story delivers authenticity and the core problem in a single breath. Founders sell.",
    eg: "Sleep / recovery: a talking-head or voiceover over a calm night routine.",
  },
  {
    n: "10",
    type: "The Before / After Diary",
    line: "“Day 1 vs Day 30 of fixing my afternoon energy.”",
    why: "Transformation is the most-watched format on the internet because it promises a payoff worth waiting for.",
    eg: "Any daily supplement: diary-style cuts, same time and place each day.",
  },
];

export default function HooksPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-[6%] left-[12%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px] orb-1 pointer-events-none" />
      <div className="absolute top-[40%] right-[8%] w-[420px] h-[420px] rounded-full bg-purple/8 blur-[140px] orb-2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 sm:py-28">
        {/* Header */}
        <a
          href="/"
          className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent font-display mb-8"
        >
          AI Architect
        </a>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple font-display mb-4">
          Free Playbook
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08]">
          10 <span className="ai-text gradient-text-animated">scroll-stopping hooks</span> for
          supplement &amp; fitness ads
        </h1>
        <p className="mt-6 text-muted text-lg leading-relaxed">
          The first 3 seconds decide whether your ad sells or gets skipped. If your ads
          &ldquo;look nice&rdquo; but don&apos;t convert, it&apos;s almost never the product
          &mdash; it&apos;s the hook. The hook is ~80% of an ad&apos;s performance. Swipe these.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/#packages"
            className="rounded-full btn-gradient px-6 py-3 text-sm font-bold font-display text-background tracking-wide glow-multi"
          >
            See plans
          </a>
          <a
            href="/10-hooks.html"
            className="rounded-full border border-surface-border/60 px-6 py-3 text-sm font-medium text-muted hover:text-foreground hover:border-accent/30 transition-all"
          >
            Download as PDF
          </a>
        </div>

        {/* Hooks */}
        <div className="mt-14 space-y-5">
          {hooks.map((h) => (
            <div key={h.n} className="glass-card rounded-2xl p-7">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-sm font-extrabold font-display text-accent">{h.n}</span>
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted font-display">
                  {h.type}
                </span>
              </div>
              <p className="mb-3 text-lg sm:text-xl font-bold tracking-tight">{h.line}</p>
              <p className="mb-4 text-muted leading-relaxed">{h.why}</p>
              <p className="border-l-2 border-accent/50 pl-4 text-sm text-muted/90">{h.eg}</p>
            </div>
          ))}
        </div>

        {/* Formula */}
        <div className="mt-8 glass-card rounded-2xl p-7">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-purple font-display">
            The universal formula
          </h3>
          <p className="text-lg font-semibold leading-relaxed">
            [specific person] + [specific problem] + [pattern interrupt] &mdash; all inside the
            first 2 seconds. And for anything consumable: show it, don&apos;t say it.
          </p>
        </div>

        {/* How to use */}
        <div className="mt-5 glass-card rounded-2xl p-7">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-purple font-display">
            How to actually use these
          </h3>
          <ol className="list-decimal space-y-2 pl-5 text-muted">
            <li>
              <span className="text-foreground font-semibold">Match the hook to ONE problem</span>{" "}
              your product solves. Specific beats clever.
            </li>
            <li>
              <span className="text-foreground font-semibold">Lead with it.</span> The hook goes
              before the logo and the pretty shots.
            </li>
            <li>
              <span className="text-foreground font-semibold">Test 3&ndash;5 hooks</span> on the
              same product and let the numbers pick the winner.
            </li>
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-10 relative rounded-2xl gradient-border">
          <div className="relative rounded-2xl glass-card !bg-surface-light/70 p-8 sm:p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              Want these turned into actual ads &mdash;{" "}
              <span className="ai-text gradient-text-animated">done for you?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
              Producing 10+ scroll-stopping video ads a month &mdash; without actors, studios, or a
              $3,000 agency bill &mdash; is the hard part. That&apos;s what I do. Ready in 48 hours,
              from $129/mo, money-back guarantee.
            </p>
            <a
              href="/#packages"
              className="mt-7 inline-flex rounded-full btn-gradient px-8 py-4 text-base font-bold font-display text-background tracking-wide glow-multi"
            >
              See plans
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted/60 font-display">
          <a href="/" className="hover:text-accent transition-colors">
            &larr; AI Architect &mdash; AI video ads that sell
          </a>
        </p>
      </div>
    </main>
  );
}
