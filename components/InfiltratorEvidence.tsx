"use client";

import { useState } from "react";
import { INFILTRATOR_DATA, PRESSURE_DATA } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { Users, Scale, Clock, Gavel } from "lucide-react";

const PRESSURE_CATEGORY_INFO = {
  FALSE_EQUIVALENCE: {
    label: '"Both Sides"',
    description: "Treating abuser and victim as equally at fault",
    color: "coral",
  },
  WEAPONIZED_MOVE_ON: {
    label: '"Move On"',
    description: "Pressuring victim to stay silent and drop it",
    color: "toxic",
  },
  CREDIBILITY_ATTACK: {
    label: '"Dirty Laundry"',
    description: "Shaming victim for speaking publicly",
    color: "shame",
  },
  DISCOURAGE_LEGAL: {
    label: '"Don\'t Press Charges"',
    description: "Explicit attempts to prevent legal action",
    color: "shame",
  },
};

export function InfiltratorEvidence() {
  const [showInfiltrators, setShowInfiltrators] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  return (
    <section className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="03" />
            <InfoPopover content={INTERPRETATIONS.infiltrators} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            The Pressure Campaign
          </h2>
          <p className="font-mono text-cream-muted text-sm mt-4 max-w-2xl">
            50 users appeared in ASL&apos;s chat, then went to Jenna&apos;s chat
            and deployed specific pressure tactics to discourage her from
            speaking out or pressing charges.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Users className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {INFILTRATOR_DATA.byClassification.INFILTRATOR}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Confirmed Infiltrators
            </div>
          </div>
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Scale className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {PRESSURE_DATA.byCategory.FALSE_EQUIVALENCE}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              &quot;Both Sides&quot;
            </div>
          </div>
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Clock className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {PRESSURE_DATA.byCategory.WEAPONIZED_MOVE_ON}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              &quot;Move On&quot;
            </div>
          </div>
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Gavel className="w-8 h-8 text-shame mx-auto mb-3" />
            <div className="font-mono text-shame text-3xl font-bold">
              {PRESSURE_DATA.byCategory.DISCOURAGE_LEGAL}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Discouraged Legal
            </div>
          </div>
        </div>

        {/* Pressure tactics breakdown */}
        <div className="bg-navy-deep p-8 rounded-lg mb-12">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase mb-6">
            Pressure Tactics Used
          </h3>
          <div className="space-y-4">
            {Object.entries(PRESSURE_DATA.byCategory).map(([category, count]) => {
              const info = PRESSURE_CATEGORY_INFO[category as keyof typeof PRESSURE_CATEGORY_INFO];
              const maxCount = Math.max(...Object.values(PRESSURE_DATA.byCategory));
              const percentage = (count / maxCount) * 100;

              return (
                <div key={category}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-mono text-cream text-sm">
                        {info.label}
                      </span>
                      <span className="font-mono text-cream-muted text-xs ml-2">
                        — {info.description}
                      </span>
                    </div>
                    <span className="font-mono text-coral font-bold">
                      {count}
                    </span>
                  </div>
                  <div className="h-2 bg-navy-light rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: info.color === "coral" ? "#e85d3b" :
                                        info.color === "toxic" ? "#ef4444" :
                                        "#991b1b"
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Example quotes toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowExamples(!showExamples)}
            className="font-mono text-sm uppercase tracking-widest text-coral hover:text-coral-dark transition-colors"
          >
            {showExamples ? "[-] Hide" : "[+] Show"} Example Quotes
          </button>

          {showExamples && (
            <div className="mt-6 space-y-4">
              {PRESSURE_DATA.examples.map((example, index) => (
                <div
                  key={index}
                  className="bg-navy-deep border-l-4 p-6 rounded-r-lg"
                  style={{
                    borderLeftColor: example.isInfiltrator ? "#ef4444" : "#e8dfd0"
                  }}
                >
                  <blockquote className="font-mono text-cream text-sm leading-relaxed">
                    &quot;{example.quote}&quot;
                  </blockquote>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="font-mono text-xs text-cream-muted">
                      — @{example.username}
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded bg-coral/20 text-coral">
                      {example.category.replace(/_/g, " ")}
                    </span>
                    {example.isInfiltrator && (
                      <span className="font-mono text-xs px-2 py-1 rounded bg-toxic/20 text-toxic">
                        INFILTRATOR
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top infiltrators toggle */}
        <div className="mb-12">
          <button
            onClick={() => setShowInfiltrators(!showInfiltrators)}
            className="font-mono text-sm uppercase tracking-widest text-coral hover:text-coral-dark transition-colors"
          >
            {showInfiltrators ? "[-] Hide" : "[+] Show"} Top Infiltrators
          </button>

          {showInfiltrators && (
            <div className="mt-6 bg-navy-deep rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-coral/30">
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-coral">
                      Username
                    </th>
                    <th className="px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-coral">
                      ASL Msgs
                    </th>
                    <th className="px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-coral">
                      Jenna Msgs
                    </th>
                    <th className="px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-coral">
                      Tactics
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-coral">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {INFILTRATOR_DATA.topInfiltrators.map((infiltrator, index) => (
                    <tr
                      key={index}
                      className="border-b border-coral/10 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-mono text-sm text-cream">
                        @{infiltrator.username}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-sm text-cream-muted">
                        {infiltrator.aslMessages}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-sm text-cream-muted">
                        {infiltrator.jennaMessages}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-sm text-cream-muted">
                        {infiltrator.gaslightingCount + infiltrator.pressureCount}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-lg font-bold text-toxic">
                        {infiltrator.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* The pattern */}
        <div className="bg-shame/10 border border-shame p-8 rounded-lg">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-shame text-xl uppercase mb-4">
            What a Pressure Campaign Looks Like
          </h3>
          <div className="space-y-4 font-mono text-sm text-cream leading-relaxed">
            <p>
              <span className="text-shame font-bold">Step 1:</span> Establish presence in abuser&apos;s chat
              (demonstrate loyalty, get context)
            </p>
            <p>
              <span className="text-shame font-bold">Step 2:</span> Move to victim&apos;s chat
            </p>
            <p>
              <span className="text-shame font-bold">Step 3:</span> Deploy pressure tactics:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-cream-muted">
              <li>&quot;Both sides are wrong&quot; (false equivalence)</li>
              <li>&quot;Just move on&quot; / &quot;Be the bigger person&quot; (silence pressure)</li>
              <li>&quot;This is embarrassing&quot; / &quot;Dirty laundry&quot; (shame for speaking)</li>
              <li>&quot;The cops won&apos;t do anything&quot; (discourage legal action)</li>
            </ul>
            <p className="text-cream-muted italic mt-4">
              This isn&apos;t peacemaking. This is enabling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
