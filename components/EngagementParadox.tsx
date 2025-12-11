"use client";

import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { Trophy } from "lucide-react";

export function EngagementParadox() {
  return (
    <section className="py-24 px-6 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="02" />
            <InfoPopover content={INTERPRETATIONS.engagementParadox} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            Exhibit B: The Engagement Paradox
          </h2>
        </div>

        {/* Visual comparison bars */}
        <div className="space-y-8 mb-12">
          {/* ASL bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="font-mono text-cream text-lg">ASL</span>
              <span className="font-mono text-cream-muted text-sm">
                252K subs → 634 chatters
              </span>
            </div>
            <div className="h-12 bg-navy-light rounded overflow-hidden">
              <div
                className="h-full bg-coral/50 flex items-center justify-end px-4"
                style={{ width: "22%" }}
              >
                <span className="font-mono text-cream text-sm font-bold">
                  0.25%
                </span>
              </div>
            </div>
          </div>

          {/* Jenna bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="font-mono text-cream text-lg">Jenna</span>
              <span className="font-mono text-cream-muted text-sm">
                47K subs → 531 chatters
              </span>
            </div>
            <div className="h-12 bg-navy-light rounded overflow-hidden">
              <div
                className="h-full bg-verdict flex items-center justify-end px-4"
                style={{ width: "100%" }}
              >
                <span className="font-mono text-navy-deep text-sm font-bold">
                  1.13%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Winner card */}
        <div className="bg-navy-light border-2 border-verdict p-8 rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <Trophy className="w-12 h-12 text-verdict" />
            <div>
              <p className="font-mono text-verdict text-sm uppercase tracking-widest">
                Engagement Winner
              </p>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-4xl uppercase">
                Jenna
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-navy-deep p-4 rounded">
              <div className="font-mono text-coral text-3xl font-bold">
                4.48x
              </div>
              <div className="font-mono text-xs text-cream-muted uppercase tracking-widest mt-1">
                higher engagement per subscriber
              </div>
            </div>
            <div className="bg-navy-deep p-4 rounded">
              <div className="font-mono text-coral text-3xl font-bold">
                78.03 vs 9.93
              </div>
              <div className="font-mono text-xs text-cream-muted uppercase tracking-widest mt-1">
                messages per 1K subs
              </div>
            </div>
          </div>

          <p className="font-mono text-cream text-sm leading-relaxed">
            &quot;With 5x fewer subscribers, Jenna&apos;s chat was only 16%
            smaller. Her audience is either incredibly loyal or incredibly
            unhinged.{" "}
            <span className="text-coral italic">The data suggests: yes.</span>
            &quot;
          </p>
        </div>
      </div>
    </section>
  );
}
