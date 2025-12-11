"use client";

import { useState } from "react";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-coral/20 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 font-mono text-sm text-cream hover:text-coral transition-colors"
      >
        <span className="uppercase tracking-widest">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 font-mono text-xs text-cream-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export function Methodology() {
  return (
    <footer className="py-24 px-6 bg-navy-light">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="09" />
            <InfoPopover content={INTERPRETATIONS.methodology} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2rem,6vw,3rem)] uppercase leading-tight mt-2">
            Methodology
          </h2>
          <p className="font-mono text-cream-muted text-xs mt-2">
            For the nerds who want receipts
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-navy-deep rounded-lg p-6 mb-12">
          <AccordionItem title="Sentiment Analysis" defaultOpen={true}>
            <ul className="space-y-2 list-disc list-inside">
              <li>Score range: -1 (negative) to +1 (positive)</li>
              <li>Based on presence of sentiment-bearing words and phrases</li>
              <li>Support phrases weighted higher for positive sentiment</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Toxicity Scoring">
            <ul className="space-y-2 list-disc list-inside">
              <li>Score range: 0 (civil) to 10 (severe)</li>
              <li>Markers:</li>
              <ul className="ml-6 mt-2 space-y-1">
                <li>Severe insults: +4</li>
                <li>Personal attacks: +3</li>
                <li>Armchair diagnosis: +2</li>
                <li>Name-calling: +2</li>
                <li>ALL CAPS: +1</li>
              </ul>
            </ul>
          </AccordionItem>

          <AccordionItem title="Faction Classification">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <span className="text-coral">PRO_ASL:</span> Explicitly supports
                Aaron, defends him
              </li>
              <li>
                <span className="text-verdict">PRO_JENNA:</span> Explicitly
                supports Jenna, defends her
              </li>
              <li>
                <span className="text-cream">NEUTRAL:</span> No clear side
              </li>
              <li>
                <span className="text-toxic">DRAMA_TOURIST:</span> Here for
                entertainment
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Data Collection">
            <ul className="space-y-2 list-disc list-inside">
              <li>Total messages analyzed: 6,176</li>
              <li>ASL&apos;s chat: 2,501 messages from 634 unique users</li>
              <li>Jenna&apos;s chat: 3,675 messages from 531 unique users</li>
              <li>Cross-chat users identified: 150</li>
              <li>Data analyzed: December 2024</li>
            </ul>
          </AccordionItem>
        </div>

        {/* Final note */}
        <div className="text-center">
          <p className="font-mono text-cream text-sm leading-relaxed">
            &quot;No YouTubers were harmed in the making of this analysis.
            <br />
            <span className="text-coral italic">
              Their reputations, however, are another matter.
            </span>
            &quot;
          </p>
          <p className="font-mono text-cream-muted text-xs mt-6">
            Data analyzed: December 2024
            <br />
            Regrets: None
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-coral/20 text-center">
          <p className="font-mono text-cream-muted text-xs">
            Built with data, irony, and questionable life choices.
          </p>
        </div>
      </div>
    </footer>
  );
}
