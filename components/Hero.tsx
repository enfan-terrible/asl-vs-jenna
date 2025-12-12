"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldAlert } from "lucide-react";
import { HERO_STATS } from "@/lib/data";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { InfoPopover } from "./ui/InfoPopover";

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("the-censorship");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-coral rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-coral rounded-full" />
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Shield icon */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <ShieldAlert className="w-8 h-8 text-coral" />
          <span className="font-mono text-coral text-sm uppercase tracking-widest">
            Documentation of Abuse Tactics
          </span>
          <InfoPopover content={INTERPRETATIONS.hero} />
          <ShieldAlert className="w-8 h-8 text-coral" />
        </div>

        {/* Main headline */}
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] uppercase">
          How Abusers Control
          <br />
          <span className="text-cream">The Narrative</span>
        </h1>

        {/* Subheadline */}
        <p className="font-mono text-cream-muted text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          A data-driven analysis of chat moderation as silencing, infiltrators
          running pressure campaigns, and DARVO in real time.
        </p>

        {/* Key stats - the damning numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-4 bg-navy-light/50 rounded-lg">
            <div className="font-mono text-coral text-3xl md:text-4xl font-bold">
              <AnimatedCounter end={HERO_STATS.infiltratorsIdentified} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Infiltrators
              <br />
              Identified
            </div>
          </div>
          <div className="text-center p-4 bg-navy-light/50 rounded-lg">
            <div className="font-mono text-coral text-3xl md:text-4xl font-bold">
              <AnimatedCounter end={HERO_STATS.deletionReferences} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Deletion
              <br />
              References
            </div>
          </div>
          <div className="text-center p-4 bg-navy-light/50 rounded-lg">
            <div className="font-mono text-coral text-3xl md:text-4xl font-bold">
              <AnimatedCounter end={HERO_STATS.darvoAttacks} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              DARVO
              <br />
              Attacks
            </div>
          </div>
          <div className="text-center p-4 bg-navy-light/50 rounded-lg">
            <div className="font-mono text-coral text-3xl md:text-4xl font-bold">
              <AnimatedCounter end={HERO_STATS.falseEquivalences} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              &quot;Both Sides&quot;
              <br />
              False Equivalences
            </div>
          </div>
        </div>

        {/* The key finding */}
        <div className="mt-12 p-6 bg-navy-light border border-coral/30 rounded-lg max-w-2xl mx-auto">
          <p className="font-mono text-cream text-sm leading-relaxed">
            <span className="text-coral font-bold">Key Finding:</span> Jenna was
            blocked from commenting on her own accusation in ASL&apos;s chat.
            His &quot;positive sentiment&quot; was manufactured through
            deletion. 50 users from his chat infiltrated hers to run a pressure
            campaign.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToSection}
          className="mt-12 px-8 py-4 bg-coral hover:bg-coral-dark text-navy-deep font-mono uppercase tracking-widest text-sm font-bold transition-colors rounded"
        >
          See the Evidence
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-muted rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream-muted rounded-full" />
        </div>
      </div>
    </section>
  );
}
