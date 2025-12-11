"use client";

import { PEACEMAKERS } from "@/lib/data";
import { SectionMarker } from "./ui/SectionMarker";
import { InfoPopover } from "./ui/InfoPopover";
import { INTERPRETATIONS } from "@/lib/interpretations";
import { Award } from "lucide-react";

function getMedalEmoji(medal: string) {
  switch (medal) {
    case "gold":
      return "🥇";
    case "silver":
      return "🥈";
    case "bronze":
      return "🥉";
    default:
      return "";
  }
}

export function HallOfFame() {
  return (
    <section className="py-24 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <SectionMarker number="05" />
            <InfoPopover content={INTERPRETATIONS.hallOfFame} />
          </div>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-peacemaker text-[clamp(2.5rem,8vw,5rem)] uppercase leading-tight mt-2">
            Hall of Fame: The Peacemakers
          </h2>
        </div>

        {/* Leaderboard table */}
        <div className="bg-navy-deep rounded-lg overflow-hidden mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-peacemaker/30">
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-widest text-peacemaker">
                  Rank
                </th>
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-widest text-peacemaker">
                  Username
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest text-peacemaker">
                  Sentiment
                </th>
                <th className="px-4 py-4 text-right font-mono text-xs uppercase tracking-widest text-peacemaker">
                  Messages
                </th>
              </tr>
            </thead>
            <tbody>
              {PEACEMAKERS.map((user) => (
                <tr
                  key={user.rank}
                  className="border-b border-peacemaker/10 last:border-b-0 hover:bg-navy-light/30 transition-colors"
                >
                  <td className="px-4 py-4 font-mono text-lg">
                    {getMedalEmoji(user.medal) || (
                      <span className="text-cream-muted">{user.rank}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 font-mono text-sm text-cream">
                    {user.username}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-lg text-peacemaker font-bold">
                    +{user.sentiment.toFixed(3)}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-sm text-cream-muted">
                    {user.messages}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Special recognition card */}
        <div className="bg-navy-deep border-2 border-peacemaker p-8 rounded-lg mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-12 h-12 text-peacemaker" />
            <div>
              <p className="font-mono text-peacemaker text-sm uppercase tracking-widest">
                Special Recognition
              </p>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-peacemaker text-3xl uppercase">
                meowdy-there
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-navy-light p-4 rounded">
              <div className="font-mono text-peacemaker text-2xl font-bold">
                105
              </div>
              <div className="font-mono text-xs text-cream-muted uppercase tracking-widest mt-1">
                total messages across both chats
              </div>
            </div>
            <div className="bg-navy-light p-4 rounded">
              <div className="font-mono text-cream text-sm">
                Behavior Class:{" "}
                <span className="text-peacemaker font-bold">
                  CONSISTENT_NEUTRAL
                </span>
              </div>
              <div className="font-mono text-xs text-cream-muted mt-2 italic">
                Sample: &quot;Please no psycho analyzing 🤦‍♀️&quot;
              </div>
            </div>
          </div>

          <p className="font-mono text-cream text-sm leading-relaxed">
            &quot;This person showed up to BOTH streams and just... tried to
            help.
            <br />
            <span className="text-peacemaker italic">
              We don&apos;t deserve them.
            </span>
            &quot;
          </p>
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="font-mono text-cream text-sm leading-relaxed">
            &quot;These 11 people tried to bring peace.
            <br />
            They represent 7.3% of cross-chat users.
            <br />
            <span className="text-peacemaker italic">Humanity is doomed.</span>
            &quot;
          </p>
        </div>
      </div>
    </section>
  );
}
