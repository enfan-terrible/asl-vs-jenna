"use client";

import { CENSORSHIP_EVIDENCE } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { MessageSquareOff, Trash2, Clock, Ban } from "lucide-react";

export function CensorshipEvidence() {
  return (
    <section id="the-censorship" className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="01" />
            <InfoPopover content={INTERPRETATIONS.censorship} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            The Censored Chat
          </h2>
          <p className="font-mono text-cream-muted text-sm mt-4 max-w-2xl">
            ASL&apos;s chat appeared &quot;positive&quot; because dissent was actively deleted.
            Here&apos;s the evidence from viewers who noticed.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Trash2 className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {CENSORSHIP_EVIDENCE.deletionReferences}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Deletion References
            </div>
          </div>
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Clock className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {CENSORSHIP_EVIDENCE.timeoutReferences}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Timeout References
            </div>
          </div>
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <Ban className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {CENSORSHIP_EVIDENCE.blockingReferences}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Blocking References
            </div>
          </div>
          <div className="bg-navy-deep p-6 rounded-lg text-center">
            <MessageSquareOff className="w-8 h-8 text-coral mx-auto mb-3" />
            <div className="font-mono text-coral text-3xl font-bold">
              {CENSORSHIP_EVIDENCE.totalReferences}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
              Total References
            </div>
          </div>
        </div>

        {/* Key evidence quotes */}
        <div className="space-y-6">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase">
            Direct Quotes from the Chat
          </h3>

          {CENSORSHIP_EVIDENCE.keyEvidence.map((item) => (
            <div
              key={item.id}
              className={`bg-navy-deep border-l-4 p-6 rounded-r-lg ${
                item.severity === "critical"
                  ? "border-toxic"
                  : item.severity === "high"
                  ? "border-coral"
                  : "border-cream-muted"
              }`}
            >
              <blockquote className="font-mono text-cream text-sm md:text-base leading-relaxed">
                &quot;{item.quote}&quot;
              </blockquote>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="font-mono text-xs text-cream-muted">
                  — @{item.username}
                </span>
                <span className={`font-mono text-xs px-2 py-1 rounded ${
                  item.severity === "critical"
                    ? "bg-toxic/20 text-toxic"
                    : item.severity === "high"
                    ? "bg-coral/20 text-coral"
                    : "bg-cream-muted/20 text-cream-muted"
                }`}>
                  {item.context}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The pattern */}
        <div className="mt-12 bg-navy-deep border border-coral/30 p-8 rounded-lg">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-coral text-xl uppercase mb-4">
            The Pattern
          </h3>
          <ul className="space-y-3 font-mono text-sm text-cream">
            <li className="flex items-start gap-3">
              <span className="text-coral">1.</span>
              <span>Jenna tries to respond to accusations in his chat</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral">2.</span>
              <span>Her comments are deleted, she is timed out or blocked</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral">3.</span>
              <span>Viewers notice and comment on the deletions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral">4.</span>
              <span>Those comments are also deleted</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral">5.</span>
              <span>What remains looks like &quot;support&quot;</span>
            </li>
          </ul>
          <p className="mt-6 font-mono text-cream-muted text-sm italic">
            This is not community health. This is narrative control.
          </p>
        </div>

        {/* The mod policy */}
        <div className="mt-8 bg-shame/10 border border-shame p-6 rounded-lg">
          <h4 className="font-mono text-shame text-sm uppercase tracking-widest mb-3">
            Mod Policy Announced During Stream
          </h4>
          <blockquote className="font-mono text-cream text-base leading-relaxed">
            &quot;Any comments about what Jenna is saying on her channel will be deleted here.&quot;
          </blockquote>
          <p className="mt-4 font-mono text-cream-muted text-sm">
            — northerngirl4 (moderator)
          </p>
          <p className="mt-4 font-mono text-cream text-sm">
            This policy explicitly silenced any defense of or reference to Jenna&apos;s side of the story, while allowing attacks on her to continue.
          </p>
        </div>
      </div>
    </section>
  );
}
