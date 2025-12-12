"use client";

import { useState } from "react";
import { DARVO_DATA } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { Brain, AlertTriangle, RotateCcw, Volume2 } from "lucide-react";

const CATEGORY_INFO = {
  DARVO_ATTACK: {
    label: "Weaponized Therapy",
    description: "Using mental health language to pathologize the accuser",
    icon: Brain,
    color: "coral",
  },
  PATHOLOGIZE: {
    label: "Armchair Diagnosis",
    description: "Diagnosing BPD, abandonment issues, etc. without credentials",
    icon: AlertTriangle,
    color: "toxic",
  },
  DARVO_REVERSE: {
    label: "Victim Reversal",
    description: "Making the victim's response to abuse seem unreasonable",
    icon: RotateCcw,
    color: "shame",
  },
  MINIMIZE: {
    label: "Minimization",
    description: "Downplaying the severity of accusations",
    icon: Volume2,
    color: "cream-muted",
  },
};

export function DarvoEvidence() {
  const [showOffenders, setShowOffenders] = useState(false);

  return (
    <section className="py-24 px-6 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="02" />
            <InfoPopover content={INTERPRETATIONS.darvo} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            The Gaslighting
          </h2>
          <p className="font-mono text-cream-muted text-sm mt-4 max-w-2xl">
            DARVO: Deny, Attack, Reverse Victim and Offender. A manipulation tactic
            where the abuser becomes the victim and the victim becomes the problem.
          </p>
        </div>

        {/* Total count */}
        <div className="bg-navy-light p-8 rounded-lg mb-12 text-center">
          <div className="font-mono text-coral text-6xl md:text-7xl font-bold">
            {DARVO_DATA.totalInstances}
          </div>
          <div className="font-mono text-cream text-lg uppercase tracking-widest mt-2">
            Documented DARVO Instances
          </div>
          <p className="font-mono text-cream-muted text-sm mt-4 max-w-lg mx-auto">
            In a single livestream, this many comments weaponized mental health
            language to discredit the accuser.
          </p>
        </div>

        {/* Category breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Object.entries(DARVO_DATA.byCategory).map(([category, count]) => {
            const info = CATEGORY_INFO[category as keyof typeof CATEGORY_INFO];
            const IconComponent = info.icon;
            return (
              <div
                key={category}
                className={`bg-navy-light border-l-4 p-6 rounded-r-lg border-${info.color}`}
                style={{
                  borderLeftColor: info.color === "coral" ? "#e85d3b" :
                                   info.color === "toxic" ? "#ef4444" :
                                   info.color === "shame" ? "#991b1b" :
                                   "#e8dfd0"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent className="w-6 h-6 text-coral" />
                  <span className="font-mono text-coral text-2xl font-bold">
                    {count}
                  </span>
                </div>
                <h4 className="font-[family-name:var(--font-bebas-neue)] text-cream text-xl uppercase">
                  {info.label}
                </h4>
                <p className="font-mono text-cream-muted text-xs mt-2">
                  {info.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Example quotes */}
        <div className="space-y-6 mb-12">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase">
            What DARVO Looks Like
          </h3>

          {DARVO_DATA.examples.map((example, index) => (
            <div
              key={index}
              className="bg-navy-light p-6 rounded-lg"
            >
              <blockquote className="font-mono text-cream text-sm md:text-base leading-relaxed border-l-2 border-coral pl-4">
                &quot;{example.quote}&quot;
              </blockquote>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="font-mono text-xs px-2 py-1 rounded bg-coral/20 text-coral">
                  {example.category.replace("_", " ")}
                </span>
                <span className="font-mono text-xs text-cream-muted">
                  Tactic: {example.tactic}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Top offenders toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowOffenders(!showOffenders)}
            className="font-mono text-sm uppercase tracking-widest text-coral hover:text-coral-dark transition-colors"
          >
            {showOffenders ? "[-] Hide" : "[+] Show"} Top DARVO Offenders
          </button>

          {showOffenders && (
            <div className="mt-6 bg-navy-light rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-coral/30">
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-coral">
                      Username
                    </th>
                    <th className="px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-coral">
                      Instances
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-coral">
                      Classification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DARVO_DATA.topOffenders.map((offender, index) => (
                    <tr
                      key={index}
                      className="border-b border-coral/10 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-mono text-sm text-cream">
                        @{offender.username}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-lg font-bold text-coral">
                        {offender.count}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={`font-mono text-xs px-2 py-1 rounded ${
                          offender.classification === "FLYING_MONKEY"
                            ? "bg-shame/20 text-shame"
                            : offender.classification === "INFILTRATOR"
                            ? "bg-toxic/20 text-toxic"
                            : "bg-cream-muted/20 text-cream-muted"
                        }`}>
                          {offender.classification.replace("_", " ")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* The pattern explained */}
        <div className="bg-shame/10 border border-shame p-8 rounded-lg">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-shame text-xl uppercase mb-4">
            Why This Matters
          </h3>
          <div className="space-y-4 font-mono text-sm text-cream leading-relaxed">
            <p>
              When a woman accuses a man of abuse and strangers immediately start
              diagnosing her with BPD, that&apos;s not concern for mental health.
              That&apos;s a silencing tactic.
            </p>
            <p>
              When &quot;get therapy&quot; is used as a weapon against someone reporting abuse,
              that&apos;s DARVO. The accuser becomes the problem. The abuse becomes
              a &quot;relationship issue.&quot;
            </p>
            <p className="text-shame font-bold">
              145 times in one chat, this pattern repeated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
