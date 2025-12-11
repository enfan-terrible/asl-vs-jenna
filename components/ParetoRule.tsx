"use client";

import { PARETO, POWER_USERS } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";

export function ParetoRule() {
  return (
    <section className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="03" />
            <InfoPopover content={INTERPRETATIONS.paretoRule} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            Exhibit C: The 1% Rule
          </h2>
        </div>

        {/* Pareto visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* ASL */}
          <div className="bg-navy-deep p-6 rounded-lg">
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase mb-6">
              ASL&apos;s Chat
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-cream-muted">
                    Top 1% ({PARETO.asl.top1.users} users)
                  </span>
                  <span className="font-mono text-sm text-coral font-bold">
                    {PARETO.asl.top1.pct}%
                  </span>
                </div>
                <div className="h-6 bg-navy-light rounded overflow-hidden">
                  <div
                    className="h-full bg-coral"
                    style={{ width: `${PARETO.asl.top1.pct}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-cream-muted">
                    Top 10% ({PARETO.asl.top10.users} users)
                  </span>
                  <span className="font-mono text-sm text-coral font-bold">
                    {PARETO.asl.top10.pct}%
                  </span>
                </div>
                <div className="h-6 bg-navy-light rounded overflow-hidden">
                  <div
                    className="h-full bg-coral/70"
                    style={{ width: `${PARETO.asl.top10.pct}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-cream-muted">
                    Lurkers ({PARETO.asl.lurkers.users} users)
                  </span>
                  <span className="font-mono text-sm text-cream-muted font-bold">
                    {PARETO.asl.lurkers.pct}%
                  </span>
                </div>
                <div className="h-6 bg-navy-light rounded overflow-hidden">
                  <div
                    className="h-full bg-cream-muted/30"
                    style={{ width: `${PARETO.asl.lurkers.pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Jenna */}
          <div className="bg-navy-deep p-6 rounded-lg">
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase mb-6">
              Jenna&apos;s Chat
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-cream-muted">
                    Top 1% ({PARETO.jenna.top1.users} users)
                  </span>
                  <span className="font-mono text-sm text-coral font-bold">
                    {PARETO.jenna.top1.pct}%
                  </span>
                </div>
                <div className="h-6 bg-navy-light rounded overflow-hidden">
                  <div
                    className="h-full bg-coral"
                    style={{ width: `${PARETO.jenna.top1.pct}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-cream-muted">
                    Top 10% ({PARETO.jenna.top10.users} users)
                  </span>
                  <span className="font-mono text-sm text-coral font-bold">
                    {PARETO.jenna.top10.pct}%
                  </span>
                </div>
                <div className="h-6 bg-navy-light rounded overflow-hidden">
                  <div
                    className="h-full bg-coral/70"
                    style={{ width: `${PARETO.jenna.top10.pct}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-xs text-cream-muted">
                    Lurkers ({PARETO.jenna.lurkers.users} users)
                  </span>
                  <span className="font-mono text-sm text-cream-muted font-bold">
                    {PARETO.jenna.lurkers.pct}%
                  </span>
                </div>
                <div className="h-6 bg-navy-light rounded overflow-hidden">
                  <div
                    className="h-full bg-cream-muted/30"
                    style={{ width: `${PARETO.jenna.lurkers.pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ironic caption */}
        <div className="bg-navy-deep border border-coral/30 p-6 rounded-lg mb-12">
          <p className="font-mono text-cream text-sm leading-relaxed text-center">
            &quot;Democracy is a lie. 10% of you wrote half the comments.
            <br />
            <span className="text-coral italic">
              To the 304 people who posted once and vanished: we see you. We
              judge you.
            </span>
            &quot;
          </p>
        </div>

        {/* Power users tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ASL Power Users */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-xl uppercase mb-4">
              ASL Power Users
            </h3>
            <div className="bg-navy-deep rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-coral/20">
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-coral">
                      Username
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-coral">
                      Messages
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-coral">
                      % of Chat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {POWER_USERS.asl.map((user, index) => (
                    <tr
                      key={index}
                      className="border-b border-coral/10 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-mono text-sm text-cream">
                        {user.username}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-sm text-cream font-bold">
                        {user.messages}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-sm text-cream-muted">
                        {user.pct}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Jenna Power Users */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-cream text-xl uppercase mb-4">
              Jenna Power Users
            </h3>
            <div className="bg-navy-deep rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-coral/20">
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-coral">
                      Username
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-coral">
                      Messages
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-widest text-coral">
                      % of Chat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {POWER_USERS.jenna.map((user, index) => (
                    <tr
                      key={index}
                      className="border-b border-coral/10 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-mono text-sm text-cream">
                        {user.username}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-sm text-cream font-bold">
                        {user.messages}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-sm text-cream-muted">
                        {user.pct}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
