"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CROSS_CHAT, IMPACT } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { VerdictBanner } from "./ui/VerdictBanner";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";

const COLORS = [
  "#E8DFD0", // cream-muted - Switzerland
  "#E85D3B", // coral - ASL Defenders
  "#D4AF37", // verdict gold - Jenna Defenders
  "#EF4444", // toxic red - Chaos Agents
  "#10B981", // peacemaker green - Actual Adults
  "#991B1B", // shame red - Politicians
];

export function DoubleAgents() {
  const [showImpact, setShowImpact] = useState(false);

  return (
    <section className="py-24 px-6 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="04" />
            <InfoPopover content={INTERPRETATIONS.doubleAgents} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            Exhibit D: The Double Agents
          </h2>
          <p className="font-mono text-cream-muted text-sm mt-4">
            150 users appeared in BOTH chats. Here&apos;s what they were up to.
          </p>
        </div>

        {/* Pie chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CROSS_CHAT}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {CROSS_CHAT.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#243352",
                    border: "1px solid rgba(232, 93, 59, 0.3)",
                    borderRadius: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                  itemStyle={{ color: "#FFF8E7" }}
                  formatter={(value: number, name: string) => [
                    `${value} users (${CROSS_CHAT.find((c) => c.name === name)?.pct}%)`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col justify-center space-y-4">
            {CROSS_CHAT.map((item, index) => (
              <div key={item.key} className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <div className="flex-1">
                  <span className="font-mono text-cream text-sm">
                    {item.name}
                  </span>
                </div>
                <span className="font-mono text-coral text-sm font-bold">
                  {item.value}
                </span>
                <span className="font-mono text-cream-muted text-xs">
                  ({item.pct}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Analysis Toggle */}
        <div className="mb-12">
          <button
            onClick={() => setShowImpact(!showImpact)}
            className="font-mono text-sm uppercase tracking-widest text-coral hover:text-coral-dark transition-colors"
          >
            {showImpact ? "[-] Hide" : "[+] Show"} Impact Analysis
          </button>

          {showImpact && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ASL Impact */}
              <div className="bg-navy-light p-6 rounded-lg">
                <h4 className="font-[family-name:var(--font-bebas-neue)] text-cream text-xl uppercase mb-4">
                  ASL Chat
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-cream-muted">
                      With cross-chat users:
                    </span>
                    <span className="font-mono text-sm text-cream">
                      Sentiment: {IMPACT.asl.with.sentiment} | Toxicity:{" "}
                      {IMPACT.asl.with.toxicity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-cream-muted">
                      Without:
                    </span>
                    <span className="font-mono text-sm text-cream">
                      Sentiment: {IMPACT.asl.without.sentiment} | Toxicity:{" "}
                      {IMPACT.asl.without.toxicity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Jenna Impact */}
              <div className="bg-navy-light p-6 rounded-lg">
                <h4 className="font-[family-name:var(--font-bebas-neue)] text-cream text-xl uppercase mb-4">
                  Jenna Chat
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-cream-muted">
                      With cross-chat users:
                    </span>
                    <span className="font-mono text-sm text-cream">
                      Sentiment: {IMPACT.jenna.with.sentiment} | Toxicity:{" "}
                      {IMPACT.jenna.with.toxicity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-cream-muted">
                      Without:
                    </span>
                    <span className="font-mono text-sm text-cream">
                      Sentiment: {IMPACT.jenna.without.sentiment} | Toxicity:{" "}
                      {IMPACT.jenna.without.toxicity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Verdict */}
        <VerdictBanner title="Cross-Chat Impact: Negligible" accent="gold" />

        <div className="mt-8 bg-navy-light border border-coral/30 p-6 rounded-lg">
          <p className="font-mono text-cream text-sm leading-relaxed">
            Removing all 150 double-agents:
          </p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li className="text-cream">
              <span className="text-coral">ASL toxicity:</span> 0.094 → 0.089
              (barely moved)
            </li>
            <li className="text-cream">
              <span className="text-coral">Jenna toxicity:</span> 0.358 → 0.389
              (got <span className="text-toxic font-bold">WORSE</span>)
            </li>
          </ul>
          <p className="mt-4 font-mono text-cream-muted text-sm italic">
            &quot;The tourists were actually diluting Jenna&apos;s toxicity.
            <br />
            They weren&apos;t the problem. They were the solution nobody asked
            for.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
