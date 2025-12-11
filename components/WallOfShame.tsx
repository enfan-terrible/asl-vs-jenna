"use client";

import { TOXIC_TOURISTS } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { AlertTriangle } from "lucide-react";

function getFlames(count: number) {
  return "🔥".repeat(count);
}

export function WallOfShame() {
  return (
    <section className="py-24 px-6 bg-navy-deep">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="06" />
            <InfoPopover content={INTERPRETATIONS.wallOfShame} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-toxic text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            Wall of Shame: The Toxic Tourists
          </h2>
        </div>

        {/* Leaderboard table */}
        <div className="bg-navy-light rounded-lg overflow-hidden mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-shame/30">
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-widest text-toxic">
                  Rank
                </th>
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-widest text-toxic">
                  Username
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest text-toxic">
                  Toxicity
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest text-toxic">
                  Messages
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest text-toxic">
                  Heat
                </th>
              </tr>
            </thead>
            <tbody>
              {TOXIC_TOURISTS.map((user) => (
                <tr
                  key={user.rank}
                  className="border-b border-shame/10 last:border-b-0 hover:bg-navy-deep/30 transition-colors"
                >
                  <td className="px-4 py-4 font-mono text-lg text-cream-muted">
                    {user.rank}
                  </td>
                  <td className="px-4 py-4 font-mono text-sm text-cream">
                    {user.username}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-lg text-toxic font-bold">
                    {user.toxicity.toFixed(3)}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-sm text-cream-muted">
                    {user.messages}
                  </td>
                  <td className="px-4 py-4 text-right text-lg">
                    {getFlames(user.flames)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Special callout card */}
        <div className="bg-navy-light border-2 border-toxic p-8 rounded-lg mb-12">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-toxic" />
            <div>
              <p className="font-mono text-toxic text-sm uppercase tracking-widest">
                Volume + Venom Award
              </p>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-toxic text-3xl uppercase">
                doaisaracist
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-navy-deep p-4 rounded">
              <div className="font-mono text-toxic text-2xl font-bold">104</div>
              <div className="font-mono text-xs text-cream-muted uppercase tracking-widest mt-1">
                messages in Jenna&apos;s chat alone
              </div>
            </div>
            <div className="bg-navy-deep p-4 rounded">
              <div className="font-mono text-toxic text-2xl font-bold">
                1.43
              </div>
              <div className="font-mono text-xs text-cream-muted uppercase tracking-widest mt-1">
                average toxicity
              </div>
            </div>
            <div className="bg-navy-deep p-4 rounded flex items-center justify-center">
              <div className="font-mono text-cream text-sm text-center">
                Username energy:{" "}
                <span className="text-toxic font-bold">MAXIMUM</span>
              </div>
            </div>
          </div>

          <p className="font-mono text-cream text-sm leading-relaxed">
            &quot;When your username is a statement and you have triple-digit
            messages,
            <br />
            <span className="text-toxic italic">
              you&apos;re not participating in drama. You ARE the drama.
            </span>
            &quot;
          </p>
        </div>
      </div>
    </section>
  );
}
