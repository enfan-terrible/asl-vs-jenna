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
            <SectionMarker number="05" />
            <InfoPopover content={INTERPRETATIONS.methodology} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2rem,6vw,3rem)] uppercase leading-tight mt-2">
            Methodology
          </h2>
          <p className="font-mono text-cream-muted text-xs mt-2">
            How this analysis was conducted
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-navy-deep rounded-lg p-6 mb-12">
          <AccordionItem title="Data Sources" defaultOpen={true}>
            <ul className="space-y-2 list-disc list-inside">
              <li>Full chat logs from both livestreams (December 2024)</li>
              <li>ASL&apos;s chat: 2,501 messages from 634 unique users</li>
              <li>Jenna&apos;s chat: 3,675 messages from 531 unique users</li>
              <li>Cross-chat user identification through username matching</li>
              <li>150 users appeared in both chats</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Abuse Tactic Classification">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <span className="text-coral">DARVO_ATTACK:</span> Weaponized
                mental health language (&quot;get therapy,&quot; &quot;she needs
                help&quot;)
              </li>
              <li>
                <span className="text-toxic">PATHOLOGIZE:</span> Armchair
                diagnoses (BPD, abandonment issues)
              </li>
              <li>
                <span className="text-shame">DARVO_REVERSE:</span> Making
                victim&apos;s response seem unreasonable (&quot;she called the
                cops?!&quot;)
              </li>
              <li>
                <span className="text-coral">FALSE_EQUIVALENCE:</span>{" "}
                &quot;Both sides&quot; framing
              </li>
              <li>
                <span className="text-coral">WEAPONIZED_MOVE_ON:</span> Pressure
                to stay silent
              </li>
              <li>
                <span className="text-shame">DISCOURAGE_LEGAL:</span> Attempts
                to prevent legal action
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem title="User Classification">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <span className="text-toxic">INFILTRATOR:</span> Appeared in
                ASL&apos;s chat, then deployed pressure tactics in Jenna&apos;s
                chat
              </li>
              <li>
                <span className="text-cream-muted">FALSE_NEUTRAL:</span> Used
                &quot;both sides&quot; framing as silencing tactic
              </li>
              <li>
                <span className="text-cream-muted">ENABLER:</span> Supported
                abuser narrative
              </li>
              <li>
                <span className="text-shame">CENSOR:</span> Moderator who
                actively suppressed dissent
              </li>
              <li>
                <span className="text-shame">FLYING_MONKEY:</span> Direct attack
                agent
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Censorship Evidence">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Tracked meta-references to deletion (&quot;my comment was
                deleted&quot;)
              </li>
              <li>Tracked timeout/mute references</li>
              <li>Tracked blocking references</li>
              <li>Documented moderator policy statements</li>
              <li>Total censorship references: 83</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Limitations">
            <ul className="space-y-2 list-disc list-inside">
              <li>Analysis covers public chat behavior only</li>
              <li>Usernames are as they appeared in chat</li>
              <li>
                Deleted messages can only be identified through viewer
                references
              </li>
              <li>Context for individual messages may be incomplete</li>
              <li>This is documentation, not a legal proceeding</li>
            </ul>
          </AccordionItem>
        </div>

        {/* Purpose statement */}
        <div className="bg-navy-deep border border-coral/30 p-6 rounded-lg mb-12">
          <h3 className="font-[family-name:var(--font-bebas-neue)] text-coral text-lg uppercase mb-3">
            Purpose of This Documentation
          </h3>
          <p className="font-mono text-cream text-sm leading-relaxed">
            This site serves as educational documentation of abuse tactics for
            advocacy purposes. The goal is to help people recognize these
            patterns when they encounter them, whether in online spaces or in
            their own lives.
          </p>
        </div>

        {/* Final note */}
        <div className="text-center">
          <p className="font-mono text-cream-muted text-xs">
            Site created: December 12, 2025
            <br />
            Analysis framework: Abuse tactic identification
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-coral/20 text-center">
          <p className="font-mono text-cream-muted text-xs">
            Built for documentation and education.
          </p>
        </div>
      </div>
    </footer>
  );
}
