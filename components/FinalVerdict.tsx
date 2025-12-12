"use client";

import { FINAL_VERDICTS } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { ShieldAlert, CheckCircle } from "lucide-react";

export function FinalVerdict() {
  return (
    <section className="py-24 px-6 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="04" />
            <InfoPopover content={INTERPRETATIONS.finalVerdict} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            The Documented Record
          </h2>
        </div>

        {/* Findings list */}
        <div className="space-y-4 mb-12">
          {FINAL_VERDICTS.map((verdict, index) => (
            <div
              key={index}
              className="bg-navy-light p-6 rounded-lg flex items-start gap-4"
            >
              <CheckCircle className="w-6 h-6 text-peacemaker flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-mono text-cream text-base font-bold">
                  {verdict.finding}
                </h4>
                <p className="font-mono text-cream-muted text-sm mt-2">
                  Evidence: {verdict.evidence}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final statement */}
        <div className="bg-coral/10 border-2 border-coral p-8 md:p-12 rounded-lg">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ShieldAlert className="w-10 h-10 text-coral" />
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl md:text-4xl uppercase">
              Why This Matters
            </h3>
            <ShieldAlert className="w-10 h-10 text-coral" />
          </div>

          <div className="space-y-6 font-mono text-sm md:text-base text-cream leading-relaxed max-w-3xl mx-auto">
            <p>
              This site exists because &quot;positive sentiment analysis&quot;
              of a censored chat is meaningless at best and harmful at worst.
            </p>
            <p>
              When the original analysis called ASL&apos;s chat
              &quot;healthier&quot; and Jenna&apos;s &quot;more toxic,&quot; it
              got the story backwards. Censorship looks like support. Authentic
              emotion looks like chaos.
            </p>
            <p>
              When infiltrators were labeled &quot;peacemakers,&quot; it missed
              that &quot;move on&quot; and &quot;both sides&quot; are silencing
              tactics, not neutral positions.
            </p>
          </div>

          <div className="border-t border-coral/30 pt-8 mt-8 text-center">
            <h4 className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase mb-4">
              This Documentation Exists So That:
            </h4>
            <ul className="space-y-3 font-mono text-sm text-cream-muted max-w-xl mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-coral">1.</span>
                <span>
                  Someone searching finds documentation, not just his narrative
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral">2.</span>
                <span>Enablers can see what they participated in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral">3.</span>
                <span>
                  Abuse survivors recognize these patterns and feel validated
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral">4.</span>
                <span>
                  People learn to identify these tactics in their own lives
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="font-mono text-cream-muted text-sm italic">
              Chat logs don&apos;t lie. But they can be manipulated.
              <br />
              <span className="text-coral">We&apos;re showing you how.</span>
            </p>
          </div>
        </div>

        {/* Resources section */}
        <div className="mt-12 bg-navy-light p-8 rounded-lg">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-xl uppercase mb-4">
            Learn More About These Tactics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-coral font-bold">DARVO</p>
              <p className="text-cream-muted">
                Deny, Attack, Reverse Victim and Offender. A manipulation tactic
                documented by Dr. Jennifer Freyd.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-coral font-bold">False Equivalence</p>
              <p className="text-cream-muted">
                Treating abuser and victim as equally responsible. &quot;Both
                sides&quot; framing that obscures power imbalances.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-coral font-bold">Flying Monkeys</p>
              <p className="text-cream-muted">
                People who do the abuser&apos;s bidding, often unknowingly.
                Named after the Wizard of Oz.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-coral font-bold">Narrative Control</p>
              <p className="text-cream-muted">
                Using platform power, moderation, and timing to control what
                information the public sees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
