"use client";

import { COMPARISON } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { VerdictBanner } from "./ui/VerdictBanner";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { cn } from "@/lib/utils";

export function TaleOfTape() {
  return (
    <section id="exhibit-a" className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="01" />
            <InfoPopover content={INTERPRETATIONS.taleOfTape} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            Exhibit A: The Tale of the Tape
          </h2>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-coral/30">
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-widest text-coral">
                  Metric
                </th>
                <th className="px-4 py-4 text-center font-mono text-xs uppercase tracking-widest text-coral">
                  ASL
                </th>
                <th className="px-4 py-4 text-center font-mono text-xs uppercase tracking-widest text-coral">
                  Jenna
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest text-coral">
                  Difference
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-coral/10 hover:bg-navy-deep/30 transition-colors"
                >
                  <td className="px-4 py-4 font-mono text-sm text-cream">
                    {row.metric}
                  </td>
                  <td
                    className={cn(
                      "px-4 py-4 text-center font-mono text-lg font-bold",
                      row.winner === "asl" ? "text-verdict" : "text-cream",
                    )}
                  >
                    {row.asl}
                    {row.winner === "asl" && (
                      <span className="ml-2 text-verdict">*</span>
                    )}
                  </td>
                  <td
                    className={cn(
                      "px-4 py-4 text-center font-mono text-lg font-bold",
                      row.winner === "jenna" ? "text-verdict" : "text-cream",
                    )}
                  >
                    {row.jenna}
                    {row.winner === "jenna" && (
                      <span className="ml-2 text-verdict">*</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-xs text-cream-muted">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-verdict">*</span>
          <span className="font-mono text-xs text-cream-muted">= winner</span>
        </div>

        {/* Verdict */}
        <div className="mt-12">
          <VerdictBanner
            title="Verdict: Jenna's Audience Chose Violence"
            subtitle="18.7% of the subscribers. 147% of the chaos."
            accent="coral"
          />
        </div>
      </div>
    </section>
  );
}
