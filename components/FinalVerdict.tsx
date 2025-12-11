"use client";

import { FINAL_VERDICTS } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { Scale, Crown } from "lucide-react";

export function FinalVerdict() {
  return (
    <section className="py-24 px-6 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="08" />
            <InfoPopover content={INTERPRETATIONS.finalVerdict} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            The Final Verdict
          </h2>
        </div>

        {/* Verdicts table */}
        <div className="bg-navy-light rounded-lg overflow-hidden mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-verdict/30">
                <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-widest text-verdict">
                  Category
                </th>
                <th className="px-6 py-4 text-center font-mono text-xs uppercase tracking-widest text-verdict">
                  Winner
                </th>
                <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-widest text-verdict">
                  Margin
                </th>
              </tr>
            </thead>
            <tbody>
              {FINAL_VERDICTS.map((verdict, index) => (
                <tr
                  key={index}
                  className="border-b border-verdict/10 last:border-b-0 hover:bg-navy-deep/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-sm text-cream">
                    {verdict.category}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center gap-2 font-mono text-sm font-bold uppercase ${
                        verdict.winner === "asl" ? "text-coral" : "text-verdict"
                      }`}
                    >
                      <Crown className="w-4 h-4" />
                      {verdict.winner}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-sm text-cream-muted">
                    {verdict.margin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Final verdict banner */}
        <div className="bg-verdict/10 border-2 border-verdict p-8 md:p-12 rounded-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Scale className="w-10 h-10 text-verdict" />
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-4xl md:text-5xl uppercase">
              The Court Has Decided
            </h3>
            <Scale className="w-10 h-10 text-verdict" />
          </div>

          <div className="space-y-4 mb-8">
            <p className="font-mono text-cream text-sm md:text-base leading-relaxed">
              ASL&apos;s chat was smaller but significantly cleaner.
            </p>
            <p className="font-mono text-cream text-sm md:text-base leading-relaxed">
              Jenna&apos;s chat was louder, angrier, and more engaged per
              subscriber.
            </p>
          </div>

          <div className="border-t border-verdict/30 pt-6 mt-6">
            <p className="font-mono text-cream-muted text-sm leading-relaxed">
              The 150 people who showed up to both?
              <br />
              <span className="text-verdict italic">
                They didn&apos;t change anything. Classic internet.
              </span>
            </p>
          </div>

          <div className="mt-8">
            <p className="font-[family-name:var(--font-bebas-neue)] text-verdict text-2xl md:text-3xl uppercase">
              Case Dismissed.
            </p>
            <p className="font-mono text-cream-muted text-xs mt-2">
              (Until next time, which is probably tomorrow)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
