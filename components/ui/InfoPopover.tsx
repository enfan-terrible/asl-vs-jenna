"use client";

import * as Popover from "@radix-ui/react-popover";
import { Info } from "lucide-react";

interface InfoPopoverProps {
  content: string;
}

export function InfoPopover({ content }: InfoPopoverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="inline-flex items-center justify-center ml-2 text-cream-muted hover:text-coral transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep rounded"
          aria-label="View interpretation"
        >
          <Info className="w-[18px] h-[18px]" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-50 max-w-[400px] bg-navy-light border border-coral text-cream font-[family-name:var(--font-inter)] text-sm leading-relaxed p-4 rounded shadow-lg shadow-black/20 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          sideOffset={8}
          align="start"
          side="top"
        >
          <div className="whitespace-pre-line">{content}</div>
          <Popover.Arrow className="fill-coral" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
