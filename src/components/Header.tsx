"use client";

import { useState } from "react";

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#how-it-works", label: "Process" },
  { href: "#packages", label: "Packages" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient line at top */}
      <div className="line-gradient w-full" />

      <div className="glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-purple/20 border border-accent/20 group-hover:border-accent/40 transition-colors">
              <span className="text-base font-bold gradient-text font-display">A</span>
              <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              AI <span className="gradient-text">Architect</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted transition-colors hover:text-foreground group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent to-purple transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#packages"
            className="hidden md:inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2.5 text-sm font-semibold text-background"
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-surface-border/30 bg-background/95 backdrop-blur-2xl">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted transition-colors hover:text-foreground font-display"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#packages"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full btn-gradient px-5 py-3 text-sm font-semibold text-background"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
