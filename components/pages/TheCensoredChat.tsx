"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquareOff,
  Trash2,
  Clock,
  Ban,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  DollarSign,
  ShieldOff,
  Volume2,
  VolumeX,
} from "lucide-react";

// Full censorship data from censor_data.json
const CENSORSHIP_DATA = {
  total_references: 83,
  by_source: {
    asl_chat: 38,
    jenna_chat: 45,
  },
  key_evidence: [
    {
      id: "C016",
      timestamp: "2025-12-07T19:57:14",
      username: "jennahill6102",
      message:
        "ITS JENNA. THIS MAN IS A DISGUSTING LIAR AND THE MODS ARE BLOCKING ME",
      source_chat: "asl",
      severity: "critical",
      context: "The victim herself, blocked from defending herself",
    },
    {
      id: "C013",
      timestamp: "2025-12-07T19:38:35",
      username: "jan-marc",
      message:
        'Did you really just delete the super chat simply stating "we love jenna"? You are pieces of shit. That person said nothing wrong and even donated money and you go out of your way to delete it?',
      source_chat: "asl",
      severity: "critical",
      context: "A PAID superchat deleted for supporting Jenna",
    },
    {
      id: "C020",
      timestamp: "2025-12-07T20:17:53",
      username: "northerngirl4",
      message:
        "Any comments about what Jenna is saying on her channel will be deleted here. Thank you for your cooperation!",
      source_chat: "asl",
      severity: "critical",
      context: "Mod announces one-sided deletion policy",
    },
    {
      id: "C021",
      timestamp: "2025-12-07T20:19:04",
      username: "sharonmartin1223",
      message:
        "so you remove an honest question he needs to answer why every woman in his life is crazy?",
      source_chat: "asl",
      severity: "high",
      context: "Pattern questions suppressed",
    },
    {
      id: "C003",
      timestamp: "2025-12-07T19:24:46",
      username: "saramooncake",
      message:
        "Yeah mods. Allow people to have an opinion. Big difference in having an opinion and ugly comment. You delete all negative. Not cool.",
      source_chat: "asl",
      severity: "high",
      context: "Viewer calls out one-sided moderation",
    },
  ],
  mod_policy_quotes: [
    {
      id: "C020",
      username: "northerngirl4",
      message:
        "Any comments about what Jenna is saying on her channel will be deleted here. Thank you for your cooperation!",
      context: "Explicit policy to silence defense",
    },
    {
      id: "C019",
      username: "arkansasflamingo",
      message:
        "please be respectful, don't diagnose mental issues, and remember that we love them both. Negative comments will be deleted",
      context: "\"Negative\" = anything that questioned ASL",
    },
    {
      id: "C018",
      username: "northerngirl4",
      message: "Rude, and judgemental comments will continue to be deleted! They're unproductive!",
      context: "Questions framed as \"rude\"",
    },
    {
      id: "C024",
      username: "jenkess",
      message:
        "we are not deleting comments that show support for one side or the other. We are deleting items of disrespect. If you want to be here, we appreciate you but SHOW RESPECT for both sides",
      context: "Claimed balance while deleting pro-Jenna comments",
    },
  ],
  audience_noticed: [
    {
      id: "C008",
      username: "treehuggingbuddhist",
      message: "So many comments being deleted :crying_face:",
    },
    {
      id: "C009",
      username: "christine-49",
      message: "lots of deleted comments...not a great look...yikes",
    },
    {
      id: "C022",
      username: "jakobpica",
      message:
        "glad to see comments from the other side of this are being deleted. why cant we have a fair conversation in the comments?",
    },
    {
      id: "C023",
      username: "oleblue08.21",
      message:
        "yo mods be a little more judicious in deleting comments. many of them aren't attacking anyone",
    },
    {
      id: "C032",
      username: "justified444",
      message:
        "Helpful comments will be deleted as well, also anyone who is a channel member will be blocked too.",
    },
    {
      id: "C033",
      username: "jojopoint2",
      message:
        "Hi @arkansasflamingo ! Said hi earlier but to be fair your working your little delete fingers off !!",
    },
  ],
  jenna_silenced: [
    {
      id: "C016",
      username: "jennahill6102",
      message:
        "ITS JENNA. THIS MAN IS A DISGUSTING LIAR AND THE MODS ARE BLOCKING ME",
      source_chat: "asl",
    },
    {
      id: "C004",
      username: "catherinebert",
      message: "got deleted Jenna's comment!",
      source_chat: "asl",
    },
    {
      id: "C005",
      username: "catherinebert",
      message: "untime out jenna",
      source_chat: "asl",
    },
    {
      id: "C006",
      username: "blueocean7738",
      message: "what did Jenna write in the deleted message?",
      source_chat: "asl",
    },
    {
      id: "C057",
      username: "catherinebert",
      message:
        "I saw your message in the chat, I asked you to be untimed out, and got timed out myself",
      source_chat: "jenna",
    },
    {
      id: "C061",
      username: "kosg2",
      message:
        "I was there and I watched him remove your comment (or one of his mods removed your comment) crazy. Jenna please get some trusted moderators of your own, his flying monkeys were sent out.",
      source_chat: "jenna",
    },
    {
      id: "C081",
      username: "veganostra7388",
      message:
        "The only reason she is live because he is slandering her and has blocked her from being able to defend herself",
      source_chat: "jenna",
    },
  ],
  all_deletion_references: [
    { id: "C002", username: "catherinebert", message: "did they delete her comment?", timestamp: "19:23:34" },
    { id: "C003", username: "saramooncake", message: "Yeah mods. Allow people to have an opinion. Big difference in having an opinion and ugly comment. You delete all negative. Not cool.", timestamp: "19:24:46" },
    { id: "C004", username: "catherinebert", message: "got deleted Jenna's comment!", timestamp: "19:25:22" },
    { id: "C006", username: "blueocean7738", message: "what did Jenna write in the deleted message?", timestamp: "19:26:20" },
    { id: "C007", username: "richisle5504", message: "It does say a lot when she just says \"He's a monster\" and never says anything else to explain, and then deleted it.", timestamp: "19:27:44" },
    { id: "C008", username: "treehuggingbuddhist", message: "So many comments being deleted :crying_face:", timestamp: "19:29:15" },
    { id: "C009", username: "christine-49", message: "lots of deleted comments...not a great look...yikes", timestamp: "19:29:39" },
    { id: "C013", username: "jan-marc", message: "Did you really just delete the super chat simply stating \"we love jenna\"? You are pieces of shit. That person said nothing wrong and even donated money and you go out of your way to delete it?", timestamp: "19:38:35" },
    { id: "C018", username: "northerngirl4", message: "Rude, and judgemental comments will continue to be deleted! They're unproductive!", timestamp: "20:06:53" },
    { id: "C019", username: "arkansasflamingo", message: "please be respectful, don't diagnose mental issues, and remember that we love them both. Negative comments will be deleted", timestamp: "20:10:26" },
    { id: "C020", username: "northerngirl4", message: "Any comments about what Jenna is saying on her channel will be deleted here. Thank you for your cooperation!", timestamp: "20:17:53" },
    { id: "C021", username: "sharonmartin1223", message: "so you remove an honest question he needs to answer why every woman in his life is crazy?", timestamp: "20:19:04" },
    { id: "C022", username: "jakobpica", message: "glad to see comments from the other side of this are being deleted. why cant we have a fair conversation in the comments?", timestamp: "20:19:19" },
    { id: "C023", username: "oleblue08.21", message: "yo mods be a little more judicious in deleting comments. many of them aren't attacking anyone", timestamp: "20:20:47" },
    { id: "C024", username: "jenkess", message: "we are not deleting comments that show support for one side or the other. We are deleting items of disrespect. If you want to be here, we appreciate you but SHOW RESPECT for both sides", timestamp: "20:21:17" },
    { id: "C028", username: "butfirstcoffee_suzyoberholtz", message: "mods are doing amazing. I keep trying to delete comments lol.", timestamp: "20:35:21" },
    { id: "C031", username: "northerngirl4", message: "Rude comments wil continue too be deleted!", timestamp: "20:41:17" },
    { id: "C032", username: "justified444", message: "Helpful comments will be deleted as well, also anyone who is a channel member will be blocked too.", timestamp: "20:42:20" },
    { id: "C033", username: "jojopoint2", message: "Hi @arkansasflamingo ! Said hi earlier but to be fair your working your little delete fingers off !!", timestamp: "20:44:09" },
  ],
  timeout_references: [
    { id: "C005", username: "catherinebert", message: "untime out jenna", timestamp: "19:26:16" },
    { id: "C014", username: "arkansasflamingo", message: "people who are diagnosing either Jenna or Aaron will be put in timeout", timestamp: "19:50:02" },
    { id: "C026", username: "arkansasflamingo", message: "please be respectful of both Aaron and Jenna, don't diagnose them. If you do, time out will be in effect", timestamp: "20:33:28" },
    { id: "C027", username: "arkansasflamingo", message: "be kind in the comments or you will be put in time out", timestamp: "20:35:01" },
    { id: "C029", username: "arkansasflamingo", message: "I love Jenna and will put you in timeout for unkind comments about you. Same for Aaron. BE KIND", timestamp: "20:36:40" },
    { id: "C035", username: "amandasewell575", message: "I don't why I got timed out, but if she is easily influenced by friends and people she's a weak minded and that's a problem for you", timestamp: "20:58:14" },
    { id: "C037", username: "arkansasflamingo", message: "I love both Aaron and Jenna very much, if you are disrespectful to either of them, you will be put in time out", timestamp: "21:06:18" },
    { id: "C038", username: "nicoleczarnecki", message: "@oceanpier, I agree. I got put in time out by a moderator by pointing out that this goes back to Czerniecki dynamics on Miscavige & other sides that I'd've not guessed. I can't support Aaron anymore.", timestamp: "21:31:28" },
    { id: "C057", username: "catherinebert", message: "I saw your message in the chat, I asked you to be untimed out, and got timed out myself", source_chat: "jenna" },
    { id: "C060", username: "lisaharding7631", message: "He is totally trashing her over there. Then they gave me a time out. Whatever.....", source_chat: "jenna" },
    { id: "C063", username: "watchinglivestreams4352", message: "Ribguy TELL them in the other chat they hit me with friendly fire and put me in TIME OUT.", source_chat: "jenna" },
    { id: "C064", username: "hopeynay", message: "I was just put in time out in his live. Basically, I hope both of you decide to just be done.", source_chat: "jenna" },
  ],
  blocking_references: [
    { id: "C012", username: "julesblah", message: "I got accidentally muted lol I think the person above me was the target :face_with_tears_of_joy:", timestamp: "19:37:57" },
    { id: "C050", username: "genxray", message: "I have been married 17 years to someone with Borderline Personality Disorder. Both of you need to learn what it is and be real that your fears and trauma is because of the cult. His mod blocked me btw", source_chat: "jenna" },
    { id: "C056", username: "stephaniea925", message: "The mods in his chat blocked the smallest things, even light jokes", source_chat: "jenna" },
    { id: "C059", username: "katies.3494", message: "He blocked me too... POS", source_chat: "jenna" },
    { id: "C062", username: "katies.3494", message: "His own words before I got blocked \"I GRABBED HER ARMS AND HELD HER, TELLING HER SHE NEEDED TO LEAVE\" during an argument", source_chat: "jenna" },
    { id: "C071", username: "admiralsemmes6939", message: "I just got silenced on his channel for telling him to be quiet!", source_chat: "jenna" },
    { id: "C073", username: "karenm8239", message: "@QueenOfKarma I was silenced on his stream because I said they should both stop airing dirty laundry although I did say no offence but it needs to stop", source_chat: "jenna" },
    { id: "C074", username: "katies.3494", message: "No one taking sides?! the mods BLOCKED any criticism!!!", source_chat: "jenna" },
    { id: "C083", username: "un4givvn2", message: "I was blocked on his channel when I said what he did ( to get arrested ) was embarrassing. He is a prideful dog", source_chat: "jenna" },
  ],
};

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: number | string;
  label: string;
}) {
  return (
    <div className="bg-navy-deep p-6 rounded-lg text-center">
      <Icon className="w-8 h-8 text-coral mx-auto mb-3" />
      <div className="font-mono text-coral text-3xl font-bold">{value}</div>
      <div className="font-mono text-xs uppercase tracking-widest text-cream-muted mt-2">
        {label}
      </div>
    </div>
  );
}

function QuoteCard({
  id,
  message,
  username,
  context,
  severity,
  highlight = false,
}: {
  id: string;
  message: string;
  username: string;
  context?: string;
  severity?: "critical" | "high" | "medium";
  highlight?: boolean;
}) {
  const borderColor =
    severity === "critical"
      ? "border-toxic"
      : severity === "high"
      ? "border-coral"
      : "border-cream-muted";

  return (
    <div
      className={`bg-navy-deep border-l-4 p-6 rounded-r-lg ${borderColor} ${
        highlight ? "ring-2 ring-coral/50" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-cream-muted/60">{id}</span>
        {severity === "critical" && (
          <AlertTriangle className="w-5 h-5 text-toxic flex-shrink-0" />
        )}
      </div>
      <blockquote className="font-mono text-cream text-sm md:text-base leading-relaxed mt-3">
        &quot;{message}&quot;
      </blockquote>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="font-mono text-xs text-cream-muted">
          — @{username}
        </span>
        {context && (
          <span
            className={`font-mono text-xs px-2 py-1 rounded ${
              severity === "critical"
                ? "bg-toxic/20 text-toxic"
                : severity === "high"
                ? "bg-coral/20 text-coral"
                : "bg-cream-muted/20 text-cream-muted"
            }`}
          >
            {context}
          </span>
        )}
      </div>
    </div>
  );
}

function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  count,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
  count?: number;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-coral/20 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-navy-deep hover:bg-navy-light/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-coral" />
          <span className="font-mono text-cream text-sm uppercase tracking-wide">
            {title}
          </span>
          {count && (
            <span className="font-mono text-xs bg-coral/20 text-coral px-2 py-0.5 rounded">
              {count}
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cream-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-cream-muted" />
        )}
      </button>
      {isOpen && <div className="p-4 bg-navy-light/30 space-y-4">{children}</div>}
    </div>
  );
}

export function TheCensoredChatPage() {
  return (
    <main className="min-h-screen bg-navy-deep">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-coral/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-cream-muted hover:text-coral transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Overview</span>
          </Link>
          <span className="font-mono text-xs text-cream-muted">
            {CENSORSHIP_DATA.total_references} censorship references documented
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <VolumeX className="w-8 h-8 text-coral" />
            <span className="font-mono text-coral text-sm uppercase tracking-widest">
              Evidence of Suppression
            </span>
            <VolumeX className="w-8 h-8 text-coral" />
          </div>

          <h1 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] uppercase">
            The &quot;Positive&quot; Chat
            <br />
            <span className="text-cream">Was Censored</span>
          </h1>

          <p className="font-mono text-cream-muted text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            ASL&apos;s stream had &quot;positive sentiment&quot; because
            dissenting voices were actively deleted, timed out, and blocked. The
            evidence is in what viewers themselves documented in real time.
          </p>

          {/* Context box */}
          <div className="mt-10 p-6 bg-shame/10 border border-shame rounded-lg max-w-2xl mx-auto text-left">
            <h3 className="font-mono text-shame text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Why This Matters
            </h3>
            <p className="font-mono text-cream text-sm leading-relaxed">
              When analysis shows &quot;positive sentiment&quot; in a chat that
              was actively censoring dissent, that metric is meaningless. It
              doesn&apos;t measure genuine support—it measures successful
              suppression. The{" "}
              <span className="text-coral font-bold">38 references</span> from
              ASL&apos;s chat and{" "}
              <span className="text-coral font-bold">45 references</span> from
              Jenna&apos;s chat to censorship tell the real story.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-6 bg-navy-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={MessageSquareOff}
              value={CENSORSHIP_DATA.total_references}
              label="Total Censorship References"
            />
            <StatCard
              icon={Trash2}
              value={CENSORSHIP_DATA.all_deletion_references.length}
              label="Deletion References"
            />
            <StatCard
              icon={Clock}
              value={CENSORSHIP_DATA.timeout_references.length}
              label="Timeout References"
            />
            <StatCard
              icon={Ban}
              value={CENSORSHIP_DATA.blocking_references.length}
              label="Blocking References"
            />
          </div>
        </div>
      </section>

      {/* Critical Evidence */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl uppercase mb-2">
            Critical Evidence
          </h2>
          <p className="font-mono text-cream-muted text-sm mb-8">
            The most damning quotes, straight from the chat log.
          </p>

          <div className="space-y-6">
            {CENSORSHIP_DATA.key_evidence.map((item) => (
              <QuoteCard
                key={item.id}
                id={item.id}
                message={item.message}
                username={item.username}
                context={item.context}
                severity={item.severity as "critical" | "high" | "medium"}
                highlight={item.id === "C016"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Mods Said The Quiet Part Out Loud */}
      <section className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl uppercase mb-2">
            The Mods Said the Quiet Part Out Loud
          </h2>
          <p className="font-mono text-cream-muted text-sm mb-8">
            Moderators explicitly announced their one-sided deletion policy.
          </p>

          <div className="space-y-6">
            {CENSORSHIP_DATA.mod_policy_quotes.map((item) => (
              <div
                key={item.id}
                className="bg-navy-deep border border-shame/30 p-6 rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-shame">{item.id}</span>
                  <ShieldOff className="w-5 h-5 text-shame" />
                </div>
                <blockquote className="font-mono text-cream text-base leading-relaxed mt-3">
                  &quot;{item.message}&quot;
                </blockquote>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <span className="font-mono text-xs text-cream-muted">
                    — @{item.username} (moderator)
                  </span>
                  <span className="font-mono text-xs bg-shame/20 text-shame px-2 py-1 rounded">
                    {item.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Audience Noticed */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl uppercase mb-2">
            The Audience Noticed
          </h2>
          <p className="font-mono text-cream-muted text-sm mb-8">
            Real-time comments from viewers calling out the censorship as it
            happened.
          </p>

          <div className="space-y-4">
            {CENSORSHIP_DATA.audience_noticed.map((item) => (
              <div
                key={item.id}
                className="bg-navy-deep/50 border-l-2 border-cream-muted/50 p-4 rounded-r-lg"
              >
                <blockquote className="font-mono text-cream text-sm leading-relaxed">
                  &quot;{item.message}&quot;
                </blockquote>
                <span className="font-mono text-xs text-cream-muted mt-2 block">
                  — @{item.username}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jenna Was Silenced */}
      <section className="py-16 px-6 bg-shame/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Volume2 className="w-8 h-8 text-shame" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-shame text-3xl uppercase">
              Jenna Was Silenced
            </h2>
          </div>
          <p className="font-mono text-cream-muted text-sm mb-8">
            The victim was blocked from defending herself in his chat. Viewers
            documented it.
          </p>

          <div className="space-y-6">
            {CENSORSHIP_DATA.jenna_silenced.map((item) => (
              <div
                key={item.id}
                className={`bg-navy-deep border-l-4 p-6 rounded-r-lg ${
                  item.username === "jennahill6102"
                    ? "border-shame"
                    : "border-coral/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-cream-muted/60">
                    {item.id}
                  </span>
                  {item.username === "jennahill6102" && (
                    <span className="font-mono text-xs bg-shame text-cream px-2 py-0.5 rounded">
                      JENNA HERSELF
                    </span>
                  )}
                </div>
                <blockquote className="font-mono text-cream text-sm md:text-base leading-relaxed mt-3">
                  &quot;{item.message}&quot;
                </blockquote>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <span className="font-mono text-xs text-cream-muted">
                    — @{item.username}
                  </span>
                  <span className="font-mono text-xs bg-navy-light text-cream-muted px-2 py-1 rounded">
                    Reported in {item.source_chat === "asl" ? "ASL's" : "Jenna's"} chat
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Deleted Superchat */}
      <section className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-deep border-2 border-verdict p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-verdict" />
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-2xl uppercase">
                The Deleted Superchat
              </h3>
            </div>
            <p className="font-mono text-cream text-sm mb-6">
              A viewer paid money to send a superchat that simply said{" "}
              <span className="text-verdict font-bold">&quot;we love jenna&quot;</span>. The
              mods deleted it anyway.
            </p>
            <blockquote className="font-mono text-cream text-base leading-relaxed border-l-4 border-verdict pl-4">
              &quot;Did you really just delete the super chat simply stating
              &apos;we love jenna&apos;? You are pieces of shit. That person
              said nothing wrong and even donated money and you go out of your
              way to delete it?&quot;
            </blockquote>
            <span className="font-mono text-xs text-cream-muted mt-4 block">
              — @jan-marc (C013)
            </span>
            <p className="font-mono text-verdict text-sm mt-6 italic">
              When you delete paid support for someone, you&apos;re not
              moderating—you&apos;re censoring.
            </p>
          </div>
        </div>
      </section>

      {/* Full Timeline - Collapsible Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl uppercase mb-2">
            Full Timeline
          </h2>
          <p className="font-mono text-cream-muted text-sm mb-8">
            Every documented reference to censorship, organized by type.
          </p>

          <div className="space-y-4">
            <CollapsibleSection
              title="Deletion References"
              icon={Trash2}
              count={CENSORSHIP_DATA.all_deletion_references.length}
            >
              {CENSORSHIP_DATA.all_deletion_references.map((item) => (
                <div
                  key={item.id}
                  className="bg-navy-deep p-4 rounded-lg border-l-2 border-coral/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-xs text-cream-muted/60">
                      {item.id}
                    </span>
                    <span className="font-mono text-xs text-cream-muted/60">
                      {item.timestamp}
                    </span>
                  </div>
                  <p className="font-mono text-cream text-sm">&quot;{item.message}&quot;</p>
                  <span className="font-mono text-xs text-cream-muted mt-2 block">
                    — @{item.username}
                  </span>
                </div>
              ))}
            </CollapsibleSection>

            <CollapsibleSection
              title="Timeout References"
              icon={Clock}
              count={CENSORSHIP_DATA.timeout_references.length}
            >
              {CENSORSHIP_DATA.timeout_references.map((item) => (
                <div
                  key={item.id}
                  className="bg-navy-deep p-4 rounded-lg border-l-2 border-coral/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-xs text-cream-muted/60">
                      {item.id}
                    </span>
                  </div>
                  <p className="font-mono text-cream text-sm">&quot;{item.message}&quot;</p>
                  <span className="font-mono text-xs text-cream-muted mt-2 block">
                    — @{item.username}
                  </span>
                </div>
              ))}
            </CollapsibleSection>

            <CollapsibleSection
              title="Blocking References"
              icon={Ban}
              count={CENSORSHIP_DATA.blocking_references.length}
            >
              {CENSORSHIP_DATA.blocking_references.map((item) => (
                <div
                  key={item.id}
                  className="bg-navy-deep p-4 rounded-lg border-l-2 border-coral/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-xs text-cream-muted/60">
                      {item.id}
                    </span>
                  </div>
                  <p className="font-mono text-cream text-sm">&quot;{item.message}&quot;</p>
                  <span className="font-mono text-xs text-cream-muted mt-2 block">
                    — @{item.username}
                  </span>
                </div>
              ))}
            </CollapsibleSection>
          </div>
        </div>
      </section>

      {/* Context Box */}
      <section className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-deep border border-coral p-8 rounded-lg">
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-coral text-2xl uppercase mb-4">
              What &quot;Positive Sentiment&quot; Actually Means
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <p className="text-cream leading-relaxed">
                When you see analysis claiming ASL&apos;s chat was more
                &quot;positive&quot; or had &quot;better sentiment&quot; than
                Jenna&apos;s, remember what you&apos;ve seen here:
              </p>
              <ul className="space-y-3 text-cream-muted">
                <li className="flex items-start gap-3">
                  <span className="text-coral">1.</span>
                  <span>
                    <span className="text-cream font-bold">
                      83 documented references
                    </span>{" "}
                    to comments being deleted, users being timed out, or viewers
                    being blocked
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral">2.</span>
                  <span>
                    <span className="text-cream font-bold">
                      Jenna herself was blocked
                    </span>{" "}
                    from responding to accusations in his chat
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral">3.</span>
                  <span>
                    <span className="text-cream font-bold">
                      A paid superchat was deleted
                    </span>{" "}
                    for simply expressing support for Jenna
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral">4.</span>
                  <span>
                    <span className="text-cream font-bold">
                      Moderators announced explicit policy
                    </span>{" "}
                    to delete any reference to Jenna&apos;s stream
                  </span>
                </li>
              </ul>
              <p className="text-coral mt-6 leading-relaxed font-bold">
                &quot;Positive sentiment&quot; in a censored chat is not evidence
                of support. It&apos;s evidence of successful suppression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-12 px-6 border-t border-coral/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-cream-muted hover:text-coral transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Overview</span>
          </Link>
          <div className="font-mono text-xs text-cream-muted text-center md:text-right">
            <p>All quotes are directly from chat logs.</p>
            <p className="text-coral mt-1">
              {CENSORSHIP_DATA.total_references} references documented.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
