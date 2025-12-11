"use client";

import { FLIP_FLOPPERS } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { ArrowLeftRight } from "lucide-react";

export function FlipFloppers() {
  return (
    <section className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="07" />
            <InfoPopover content={INTERPRETATIONS.flipFloppers} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            The Flip-Floppers
          </h2>
          <p className="font-mono text-cream-muted text-sm mt-4">
            Only 4 people changed sides. That&apos;s it. That&apos;s the whole
            list.
          </p>
        </div>

        {/* Flip-floppers cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FLIP_FLOPPERS.map((user) => (
            <div
              key={user.username}
              className="bg-navy-deep p-6 rounded-lg border border-coral/20 card-hover"
            >
              <h3 className="font-mono text-cream text-lg mb-4">
                {user.username}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 text-center">
                  <p className="font-mono text-xs text-cream-muted uppercase tracking-widest mb-1">
                    ASL Chat
                  </p>
                  <p
                    className={`font-mono text-sm font-bold ${
                      user.asl === "PRO_ASL"
                        ? "text-coral"
                        : user.asl === "PRO_JENNA"
                          ? "text-verdict"
                          : "text-cream-muted"
                    }`}
                  >
                    {user.asl.replace("_", " ")}
                  </p>
                </div>
                <ArrowLeftRight className="w-6 h-6 text-coral flex-shrink-0" />
                <div className="flex-1 text-center">
                  <p className="font-mono text-xs text-cream-muted uppercase tracking-widest mb-1">
                    Jenna Chat
                  </p>
                  <p
                    className={`font-mono text-sm font-bold ${
                      user.jenna === "PRO_ASL"
                        ? "text-coral"
                        : user.jenna === "PRO_JENNA"
                          ? "text-verdict"
                          : "text-cream-muted"
                    }`}
                  >
                    {user.jenna.replace("_", " ")}
                  </p>
                </div>
              </div>
              <div className="border-t border-coral/20 pt-4">
                <p className="font-mono text-xs text-cream-muted">
                  Verdict:{" "}
                  <span className="text-cream italic">{user.verdict}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="bg-navy-deep border border-coral/30 p-6 rounded-lg text-center">
          <p className="font-mono text-cream text-sm leading-relaxed">
            &quot;Only 2.7% of double-agents changed their position.
            <br />
            <span className="text-coral italic">
              Say what you will about internet commenters, but they&apos;re
              consistent.
            </span>
            &quot;
          </p>
        </div>
      </div>
    </section>
  );
}
