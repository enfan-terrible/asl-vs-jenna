"use client";

import { useEffect, useRef, useState } from "react";
import { Scale } from "lucide-react";
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
    const section = document.getElementById("exhibit-a");
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
        {/* Scale icon */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Scale className="w-8 h-8 text-coral" />
          <span className="font-mono text-coral text-sm uppercase tracking-widest">
            [00] Court of Public Opinion
          </span>
          <InfoPopover content={INTERPRETATIONS.hero} />
          <Scale className="w-8 h-8 text-coral" />
        </div>

        {/* Main headline */}
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(4rem,15vw,12rem)] leading-[0.9] uppercase">
          ASL vs. JENNA
        </h1>

        {/* Subheadline */}
        <p className="font-[family-name:var(--font-bebas-neue)] text-cream text-[clamp(1.5rem,4vw,3rem)] uppercase mt-4">
          The Data Doesn&apos;t Lie
        </p>
        <p className="font-mono text-cream-muted text-sm mt-2">
          (But both of them might)
        </p>

        {/* Animated counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="font-mono text-coral text-4xl md:text-5xl font-bold">
              <AnimatedCounter end={HERO_STATS.messagesAnalyzed} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              messages analyzed
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-coral text-4xl md:text-5xl font-bold">
              <AnimatedCounter end={HERO_STATS.armchairPsychologists} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              armchair psychologists
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-coral text-4xl md:text-5xl font-bold">
              <AnimatedCounter end={HERO_STATS.doubleAgents} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              double agents
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToSection}
          className="mt-16 px-8 py-4 bg-coral hover:bg-coral-dark text-navy-deep font-mono uppercase tracking-widest text-sm font-bold transition-colors rounded"
        >
          Enter the Courtroom
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
