"use client";

import { useState, useMemo } from "react";
import {
  ENABLER_PROFILES,
  ENABLER_STATS,
  CLASSIFICATION_INFO,
  TACTIC_INFO,
  type Classification,
  type EnablerProfile,
} from "@/lib/enabler-data";
import {
  Search,
  Filter,
  ArrowUpDown,
  Users,
  MessageSquare,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Home,
} from "lucide-react";
import Link from "next/link";

type SortField = "score" | "username" | "asl_messages" | "jenna_messages";
type SortDirection = "asc" | "desc";

export function TheEnablersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClassification, setSelectedClassification] = useState<
    Classification | "ALL"
  >("ALL");
  const [sortField, setSortField] = useState<SortField>("score");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  // Filter and sort profiles
  const filteredProfiles = useMemo(() => {
    let profiles = [...ENABLER_PROFILES];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      profiles = profiles.filter((p) =>
        p.username.toLowerCase().includes(query)
      );
    }

    // Filter by classification
    if (selectedClassification !== "ALL") {
      profiles = profiles.filter(
        (p) => p.classification === selectedClassification
      );
    }

    // Sort
    profiles.sort((a, b) => {
      let aVal: number | string;
      let bVal: number | string;

      switch (sortField) {
        case "score":
          aVal = a.enabler_score;
          bVal = b.enabler_score;
          break;
        case "username":
          aVal = a.username.toLowerCase();
          bVal = b.username.toLowerCase();
          break;
        case "asl_messages":
          aVal = a.asl_message_count;
          bVal = b.asl_message_count;
          break;
        case "jenna_messages":
          aVal = a.jenna_message_count;
          bVal = b.jenna_message_count;
          break;
        default:
          return 0;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return sortDirection === "asc"
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });

    return profiles;
  }, [searchQuery, selectedClassification, sortField, sortDirection]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getClassificationColor = (classification: Classification) => {
    const colors: Record<Classification, string> = {
      INFILTRATOR: "bg-toxic/20 text-toxic border-toxic/30",
      FALSE_NEUTRAL: "bg-coral/20 text-coral border-coral/30",
      ENABLER: "bg-shame/20 text-shame border-shame/30",
      CENSOR: "bg-verdict/20 text-verdict border-verdict/30",
      FLYING_MONKEY: "bg-toxic/30 text-toxic border-toxic/50",
    };
    return colors[classification];
  };

  return (
    <main className="min-h-screen bg-navy-deep">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-coral/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-cream hover:text-coral transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-widest">
              Back
            </span>
          </Link>
          <span className="font-mono text-xs text-cream-muted">
            {filteredProfiles.length} of {ENABLER_PROFILES.length} profiles
          </span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(3rem,10vw,6rem)] uppercase leading-none">
            The Enablers
          </h1>
          <p className="font-mono text-cream-muted text-sm mt-4 max-w-3xl leading-relaxed">
            These users appeared in both chats. Many supported ASL in his
            moderated chat, then went to Jenna&apos;s unmoderated chat to push
            &quot;move on&quot; narratives, &quot;both sides&quot; false
            equivalences, and discourage legal action. This is a coordinated
            pressure campaign, whether intentional or not.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {(
              Object.entries(ENABLER_STATS.byClassification) as [
                Classification,
                number
              ][]
            ).map(([classification, count]) => (
              <button
                key={classification}
                onClick={() =>
                  setSelectedClassification(
                    selectedClassification === classification
                      ? "ALL"
                      : classification
                  )
                }
                className={`p-4 rounded-lg border transition-all ${
                  selectedClassification === classification
                    ? getClassificationColor(classification)
                    : "bg-navy-light border-coral/10 hover:border-coral/30"
                }`}
              >
                <div className="font-mono text-2xl font-bold text-coral">
                  {count}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-1">
                  {CLASSIFICATION_INFO[classification].label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Search and Filter Bar */}
      <div className="sticky top-16 z-40 bg-navy-deep/95 backdrop-blur-sm border-y border-coral/20 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-muted" />
              <input
                type="text"
                placeholder="Search by username (find yourself?)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-navy-light border border-coral/20 rounded-lg font-mono text-sm text-cream placeholder:text-cream-muted/50 focus:outline-none focus:border-coral/50"
              />
            </div>

            {/* Classification Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-muted" />
              <select
                value={selectedClassification}
                onChange={(e) =>
                  setSelectedClassification(
                    e.target.value as Classification | "ALL"
                  )
                }
                className="pl-10 pr-8 py-3 bg-navy-light border border-coral/20 rounded-lg font-mono text-sm text-cream appearance-none cursor-pointer focus:outline-none focus:border-coral/50"
              >
                <option value="ALL">All Classifications</option>
                {Object.keys(CLASSIFICATION_INFO).map((c) => (
                  <option key={c} value={c}>
                    {CLASSIFICATION_INFO[c as Classification].label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              <button
                onClick={() => toggleSort("score")}
                className={`px-4 py-3 rounded-lg border font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors ${
                  sortField === "score"
                    ? "bg-coral/20 border-coral/50 text-coral"
                    : "bg-navy-light border-coral/20 text-cream-muted hover:border-coral/40"
                }`}
              >
                <ArrowUpDown className="w-4 h-4" />
                Score
              </button>
              <button
                onClick={() => toggleSort("username")}
                className={`px-4 py-3 rounded-lg border font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors ${
                  sortField === "username"
                    ? "bg-coral/20 border-coral/50 text-coral"
                    : "bg-navy-light border-coral/20 text-cream-muted hover:border-coral/40"
                }`}
              >
                A-Z
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredProfiles.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-mono text-cream-muted">
                No profiles found matching &quot;{searchQuery}&quot;
              </p>
              <p className="font-mono text-sm text-cream-muted/50 mt-2">
                Lucky you. Or maybe you used a different username?
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProfiles.map((profile) => (
                <EnablerCard
                  key={profile.username}
                  profile={profile}
                  isExpanded={expandedUser === profile.username}
                  onToggle={() =>
                    setExpandedUser(
                      expandedUser === profile.username
                        ? null
                        : profile.username
                    )
                  }
                  getClassificationColor={getClassificationColor}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Educational Footer */}
      <footer className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-shame text-2xl uppercase mb-6">
            Understanding These Classifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(Object.entries(CLASSIFICATION_INFO) as [Classification, typeof CLASSIFICATION_INFO[Classification]][]).map(
              ([key, info]) => (
                <div
                  key={key}
                  className="bg-navy-deep p-6 rounded-lg border border-coral/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded text-xs font-mono uppercase border ${getClassificationColor(
                        key
                      )}`}
                    >
                      {info.label}
                    </span>
                    <span className="font-mono text-coral font-bold">
                      {ENABLER_STATS.byClassification[key]}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-cream-muted">
                    {info.description}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-12 p-6 bg-shame/10 border border-shame rounded-lg">
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-shame text-xl uppercase mb-4">
              Why This Matters
            </h3>
            <p className="font-mono text-sm text-cream leading-relaxed">
              In abuse situations, the pressure to &quot;move on&quot; and
              &quot;be the bigger person&quot; is a form of silencing. When
              people push &quot;both sides&quot; narratives in domestic abuse
              situations, they are not being neutral &mdash; they are enabling
              the abuser. These messages may seem well-intentioned, but their
              effect is to discourage victims from speaking out and seeking
              justice.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface EnablerCardProps {
  profile: EnablerProfile;
  isExpanded: boolean;
  onToggle: () => void;
  getClassificationColor: (c: Classification) => string;
}

function EnablerCard({
  profile,
  isExpanded,
  onToggle,
  getClassificationColor,
}: EnablerCardProps) {
  return (
    <div className="bg-navy-light rounded-lg border border-coral/10 overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 flex flex-col md:flex-row md:items-center gap-4 text-left hover:bg-navy-deep/30 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-lg text-cream font-bold truncate">
              @{profile.username}
            </span>
            <span
              className={`px-2 py-1 rounded text-xs font-mono uppercase border ${getClassificationColor(
                profile.classification
              )}`}
            >
              {CLASSIFICATION_INFO[profile.classification].label}
            </span>
            {profile.is_moderator && (
              <span className="px-2 py-1 rounded text-xs font-mono uppercase bg-verdict/20 text-verdict border border-verdict/30">
                MOD
              </span>
            )}
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 mt-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cream-muted" />
              <span className="font-mono text-xs text-cream-muted">
                ASL: {profile.asl_message_count}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-coral" />
              <span className="font-mono text-xs text-coral">
                Jenna: {profile.jenna_message_count}
              </span>
            </div>
            {profile.gaslighting_count > 0 && (
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-toxic" />
                <span className="font-mono text-xs text-toxic">
                  {profile.gaslighting_count} gaslighting
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Score and expand */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted">
              Score
            </div>
            <div className="font-mono text-3xl font-bold text-toxic">
              {profile.enabler_score}
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-cream-muted" />
          ) : (
            <ChevronDown className="w-6 h-6 text-cream-muted" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-coral/10">
          {/* Categories */}
          <div className="mt-4 mb-6">
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mb-3">
              Tactics Used
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.categories_triggered.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded bg-coral/10 text-coral font-mono text-xs"
                  title={TACTIC_INFO[cat].description}
                >
                  {TACTIC_INFO[cat].label}
                  {profile.category_counts[cat] &&
                    profile.category_counts[cat]! > 1 &&
                    ` (${profile.category_counts[cat]})`}
                </span>
              ))}
            </div>
          </div>

          {/* Worst messages */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mb-3">
              Their Messages
            </div>
            <div className="space-y-3">
              {profile.worst_messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-navy-deep p-4 rounded-lg border-l-4"
                  style={{
                    borderLeftColor:
                      msg.source === "asl_chat" ? "#e8dfd0" : "#e85d3b",
                  }}
                >
                  <blockquote className="font-mono text-sm text-cream leading-relaxed">
                    &quot;{msg.message}&quot;
                  </blockquote>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-cream-muted">
                      in{" "}
                      {msg.source === "asl_chat"
                        ? "ASL's chat"
                        : "Jenna's chat"}
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded bg-coral/20 text-coral">
                      {TACTIC_INFO[msg.category].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
