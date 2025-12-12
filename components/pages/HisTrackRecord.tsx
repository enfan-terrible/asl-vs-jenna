"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Heart,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  MessageCircleQuestion,
  TrendingUp,
  History,
  Globe,
  HeartCrack,
  Quote,
} from "lucide-react";

// Track record data from pattern_data.json
const TRACK_RECORD_DATA = {
  total_references: 198,
  by_category: {
    MARRIAGE_DECEPTION: 93,
    CREDIBILITY_HISTORY: 76,
    OTHER_WOMEN: 26,
    COLOMBIA: 3,
  },
  marriage_deception: {
    // "I thought he was married" questions
    married_questions: [
      {
        id: "T002",
        username: "letstalk...godisnotreligio465",
        message: "I thought Aaron was married",
        source_chat: "asl",
      },
      {
        id: "T010",
        username: "s.w.9809",
        message: "I thought Aaron was married :thinking_face:.",
        source_chat: "asl",
      },
      {
        id: "T066",
        username: "abbynormal206",
        message: "is he still married?",
        source_chat: "asl",
      },
      {
        id: "T068",
        username: "abbynormal206",
        message: "is he still married to heather?",
        source_chat: "asl",
      },
      {
        id: "T069",
        username: "abbynormal206",
        message: "is aaron still married and co habiting with heather?",
        source_chat: "asl",
      },
      {
        id: "T083",
        username: "katies.3494",
        message: "I thought he was married, no?",
        source_chat: "jenna",
      },
      {
        id: "T137",
        username: "rodeaster",
        message: "wait he still married????????????????????????????????????????",
        source_chat: "jenna",
      },
      {
        id: "T138",
        username: "brooklynpesola",
        message:
          "Wait this man is married? You are dating some woman's husband. This is so toxic.",
        source_chat: "jenna",
      },
      {
        id: "T143",
        username: "rodeaster",
        message: "He married? No one is answering me",
        source_chat: "jenna",
      },
      {
        id: "T178",
        username: "rodeaster",
        message: "DUDE MARRIED DOE!!!!!!",
        source_chat: "jenna",
      },
    ],
    // "finish one relationship" advice
    relationship_advice: [
      {
        id: "T001",
        username: "ratherbeinmaui1",
        message:
          "Donations aren't the answer here. Get help and finish one relationship before you move on to others.",
        source_chat: "asl",
      },
      {
        id: "T072",
        username: "ratherbeinmaui1",
        message:
          "Unless he leaves his Marriage, he can never be in an HONEST relationship",
        source_chat: "jenna",
      },
      {
        id: "T194",
        username: "smallfry-j5c",
        message: "he's still married, what does that say, cheeter!",
        source_chat: "jenna",
      },
    ],
    // Heather mentions
    heather_mentions: [
      {
        id: "T019",
        username: "jenmac2403",
        message:
          "That's a boundary violation, Heather is the mother of your children.",
        source_chat: "asl",
      },
      {
        id: "T031",
        username: "joycegray4952",
        message: "Why is poor Heather involved in this...she has endured enough",
        source_chat: "asl",
      },
      {
        id: "T036",
        username: "jenniferstepps",
        message:
          "I will say this.....your wife is a saint. She has stood by with her head high, stood her ground, protected your children and you. I know this isn't her vs Jenna, but Heather has shown serious grace",
        source_chat: "asl",
      },
      {
        id: "T052",
        username: "fitzbits687",
        message: "wait are him and Heather divorced? I'm confused",
        source_chat: "asl",
      },
      {
        id: "T082",
        username: "chuck44442",
        message: "is Heather is wife??",
        source_chat: "jenna",
      },
      {
        id: "T100",
        username: "calincoop",
        message:
          "Heather is still under his control. That's why he likes Heather. If she stood up to him, it would be a totally different story.",
        source_chat: "jenna",
      },
      {
        id: "T122",
        username: "vanlo1178",
        message:
          "Yeah he's been in this situation with multiple people. We've never heard from heather, but. Mike R spilled the beans on how bad he was to her. The girl in Cali, Jenna, all one after another.",
        source_chat: "jenna",
      },
      {
        id: "T135",
        username: "annachristie377",
        message: "why hasn't Heather divorced him?",
        source_chat: "jenna",
      },
      {
        id: "T139",
        username: "lindaperales8907",
        message:
          "Heather hasn't divorced him because she's in the same boat as Jenna !!:face_holding_back_tears:",
        source_chat: "jenna",
      },
      {
        id: "T156",
        username: "tracy_b1-q2k",
        message:
          "Why does Heather not divorce him, he treats her like a POS and sleeps with other women :face_vomiting:",
        source_chat: "jenna",
      },
    ],
  },
  credibility_history: {
    // Track record mentions
    track_record: [
      {
        id: "T003",
        username: "casstaylorsversion",
        message: "Yes, I would believe Jenna. You have a terrible track record!",
        source_chat: "asl",
      },
    ],
    // Cheater/cheating
    cheating_accusations: [
      {
        id: "T007",
        username: "jenmac2403",
        message: "She's saying right now that you cheated :popcorn:",
        source_chat: "asl",
      },
      {
        id: "T008",
        username: "agoddess",
        message: "Bro is a cheater. Damn",
        source_chat: "asl",
      },
      {
        id: "T009",
        username: "seancommins172",
        message: "Once a CHEATER,,,,,, Right AAron. ?",
        source_chat: "asl",
      },
      {
        id: "T075",
        username: "seancommins172",
        message: "3 affairs.. He is a Lying piece of crap.",
        source_chat: "jenna",
      },
      {
        id: "T079",
        username: "seancommins172",
        message: "How did 3 Women have affairs with the Clown.",
        source_chat: "jenna",
      },
      {
        id: "T090",
        username: "calincoop",
        message:
          "If somebody has abandonment issues, the worst thing that could be done is being cheated on. There is no coming back from that.",
        source_chat: "jenna",
      },
      {
        id: "T140",
        username: "kristin1214",
        message:
          "If YOU cheated then YOU are in the wrong. You're an adult...it's called integrity and adulting.",
        source_chat: "jenna",
      },
      {
        id: "T181",
        username: "kristinakurf",
        message: "he cheated again??",
        source_chat: "jenna",
      },
    ],
    // Liar/lying
    liar_accusations: [
      {
        id: "T018",
        username: "jennahill6102",
        message:
          "ITS JENNA. THIS MAN IS A DISGUSTING LIAR AND THE MODS ARE BLOCKING ME",
        source_chat: "asl",
      },
      {
        id: "T064",
        username: "drifter2805",
        message: "Aaron still a liar",
        source_chat: "asl",
      },
      {
        id: "T071",
        username: "freespiritmermaid",
        message: "You're a liar !!!!",
        source_chat: "jenna",
      },
      {
        id: "T086",
        username: "debe.1868",
        message: "he is a HUGE liar. he's a pig.",
        source_chat: "jenna",
      },
      {
        id: "T095",
        username: "letsgokarla",
        message: "Master manipulator, and habitual liar too",
        source_chat: "jenna",
      },
      {
        id: "T132",
        username: "acabtruecrime",
        message:
          "He's a known liar and he sounds psycho rn. The people who are listening to him and agreeing with him are not worth your energy",
        source_chat: "jenna",
      },
    ],
    // "believe jenna" vs "don't believe"
    credibility_statements: [
      {
        id: "T006",
        username: "catherinebert",
        message: "she said don't believe him, cherry picked examples basically",
        source_chat: "asl",
      },
      {
        id: "T063",
        username: "secretsanta5530",
        message: "I believe Jenna. Aaron is an animal.",
        source_chat: "asl",
      },
      {
        id: "T085",
        username: "thejessicatate",
        message: "We believe Jenna",
        source_chat: "jenna",
      },
      {
        id: "T089",
        username: "gsp2472",
        message: "I believe Jenna and support her.",
        source_chat: "jenna",
      },
      {
        id: "T130",
        username: "letsgokarla",
        message:
          'Jenna, don\'t believe him, he calls all gis gfs "crazy", that\'s a pattern',
        source_chat: "jenna",
      },
      {
        id: "T155",
        username: "bigjmoney83",
        message:
          "I 100% believe Jenna. I'm sure yes at times things have been Jenna's fault but I know Jenna would honestly admit when she is at fault & not gaslight or spin the truth.",
        source_chat: "jenna",
      },
      {
        id: "T192",
        username: "veganostra7388",
        message: "I believe Jenna",
        source_chat: "jenna",
      },
    ],
  },
  other_women: {
    pattern_mentions: [
      {
        id: "T011",
        username: "professorivyleague",
        message: "That pattern has to be exhausting for both of you",
        source_chat: "asl",
      },
      {
        id: "T013",
        username: "luvpurecom",
        message:
          "$75 for therapy better than repeating this pattern? :thinking_face:",
        source_chat: "asl",
      },
      {
        id: "T058",
        username: "shanti853",
        message:
          "Aaron, there seems to be a pattern in the types of women you are attracted to these past few years. They all seem volatile. Maybe something worth exploring in therapy.",
        source_chat: "asl",
      },
      {
        id: "T059",
        username: "shanti853",
        message:
          "@markus5862 yes, I realize that they all experienced a lot of trauma in Scientology, but unless AAron realises the pattern in his life & gets help for it, he will keep getting into the same situations",
        source_chat: "asl",
      },
      {
        id: "T105",
        username: "thejessicatate",
        message: "He has a pattern of abusing women",
        source_chat: "jenna",
      },
      {
        id: "T164",
        username: "wilddandy-w8o",
        message:
          "I can't believe some people here don't see the pattern. Too many women accusing him. HE'S AN ABUSER! a violent one!",
        source_chat: "jenna",
      },
      {
        id: "T165",
        username: "thisismyinferno",
        message:
          "He has a pattern, and he did do a video. he change tactic to get back with you when it didn't work.",
        source_chat: "jenna",
      },
      {
        id: "T173",
        username: "veganostra7388",
        message:
          "He is exhibiting patterns of manipulation, lying and abusing Jenna, this is so disgusting",
        source_chat: "jenna",
      },
    ],
    not_the_first: [
      {
        id: "T093",
        username: "vanlo1178",
        message:
          "He was worried you'd get on here and beat him to it. So he's doing his best to save his behind. It's so obvious! You're not the first person to call him. Mike R said he treated heather the same.",
        source_chat: "jenna",
      },
      {
        id: "T106",
        username: "fortune.",
        message: "he's done this before. don't contact him again!",
        source_chat: "jenna",
      },
      {
        id: "T108",
        username: "letsgokarla",
        message: "not the first time he pushes a woman",
        source_chat: "jenna",
      },
      {
        id: "T163",
        username: "corvuscrux",
        message:
          "EXACTLY JENNA. Good lord you are not the first person, nor will you be the last.",
        source_chat: "jenna",
      },
      {
        id: "T169",
        username: "kristinakurf",
        message: "he does this to every woman in his life",
        source_chat: "jenna",
      },
    ],
    every_woman_crazy: [
      {
        id: "T130",
        username: "letsgokarla",
        message:
          'Jenna, don\'t believe him, he calls all gis gfs "crazy", that\'s a pattern',
        source_chat: "jenna",
      },
      {
        id: "T151",
        username: "wilddandy-w8o",
        message: "he's a serial abuser, should be in jail!",
        source_chat: "jenna",
      },
    ],
  },
  colombia: [
    {
      id: "T025",
      username: "sp-spanglish",
      message: "Cheer up Aaron. You'll always have Colombia.",
      source_chat: "asl",
    },
    {
      id: "T162",
      username: "wilddandy-w8o",
      message:
        "he's always the victim. if it was just one woman... but there are a lot of them... ohh and don't forget Colombia..",
      source_chat: "jenna",
    },
    {
      id: "T189",
      username: "wilddandy-w8o",
      message:
        "ohh Men too! she must be referring to the trans in Colombia. oops there is a police report",
      source_chat: "jenna",
    },
  ],
};

function StatCard({
  icon: Icon,
  value,
  label,
  color = "coral",
}: {
  icon: React.ElementType;
  value: number | string;
  label: string;
  color?: "coral" | "verdict" | "shame";
}) {
  const colorClass =
    color === "verdict"
      ? "text-verdict"
      : color === "shame"
      ? "text-shame"
      : "text-coral";

  return (
    <div className="bg-navy-deep p-6 rounded-lg text-center">
      <Icon className={`w-8 h-8 ${colorClass} mx-auto mb-3`} />
      <div className={`font-mono ${colorClass} text-3xl font-bold`}>{value}</div>
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
  source_chat,
  highlight = false,
}: {
  id: string;
  message: string;
  username: string;
  source_chat: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`bg-navy-deep border-l-4 p-5 rounded-r-lg ${
        source_chat === "asl" ? "border-verdict" : "border-coral"
      } ${highlight ? "ring-2 ring-coral/50" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-cream-muted/60">{id}</span>
        <span
          className={`font-mono text-xs px-2 py-0.5 rounded ${
            source_chat === "asl"
              ? "bg-verdict/20 text-verdict"
              : "bg-coral/20 text-coral"
          }`}
        >
          {source_chat === "asl" ? "HIS chat" : "Jenna's chat"}
        </span>
      </div>
      <blockquote className="font-mono text-cream text-sm leading-relaxed mt-3">
        &quot;{message}&quot;
      </blockquote>
      <span className="font-mono text-xs text-cream-muted mt-3 block">
        — @{username}
      </span>
    </div>
  );
}

function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  count,
  highlight = false,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
  count?: number;
  highlight?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border rounded-lg overflow-hidden ${
        highlight ? "border-verdict" : "border-coral/20"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-navy-deep hover:bg-navy-light/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${highlight ? "text-verdict" : "text-coral"}`} />
          <span className="font-mono text-cream text-sm uppercase tracking-wide">
            {title}
          </span>
          {count && (
            <span
              className={`font-mono text-xs px-2 py-0.5 rounded ${
                highlight ? "bg-verdict/20 text-verdict" : "bg-coral/20 text-coral"
              }`}
            >
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

export function HisTrackRecordPage() {
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
            {TRACK_RECORD_DATA.total_references} pattern references documented
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <History className="w-8 h-8 text-verdict" />
            <span className="font-mono text-verdict text-sm uppercase tracking-widest">
              His Own Audience Was Asking
            </span>
            <History className="w-8 h-8 text-verdict" />
          </div>

          <h1 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] uppercase">
            His Track Record
            <br />
            <span className="text-cream">In Their Own Words</span>
          </h1>

          <p className="font-mono text-cream-muted text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            These aren&apos;t accusations from Jenna. These are questions and
            observations from{" "}
            <span className="text-verdict font-bold">his own subscribers</span>,
            documented in real-time during his livestream.
          </p>

          {/* Key framing box */}
          <div className="mt-10 p-6 bg-verdict/10 border border-verdict rounded-lg max-w-2xl mx-auto text-left">
            <h3 className="font-mono text-verdict text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <MessageCircleQuestion className="w-4 h-4" />
              The Pattern His Audience Noticed
            </h3>
            <p className="font-mono text-cream text-sm leading-relaxed">
              Long before this incident, his own audience was asking questions:
              &quot;I thought he was married?&quot; &quot;Why is every woman he
              dates crazy?&quot; &quot;Isn&apos;t this a pattern?&quot;
            </p>
            <p className="font-mono text-cream-muted text-sm leading-relaxed mt-4">
              When the audience of a 252K channel keeps asking the same
              questions, it&apos;s worth examining why.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-6 bg-navy-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={Heart}
              value={TRACK_RECORD_DATA.by_category.MARRIAGE_DECEPTION}
              label="Marriage Questions"
              color="verdict"
            />
            <StatCard
              icon={AlertTriangle}
              value={TRACK_RECORD_DATA.by_category.CREDIBILITY_HISTORY}
              label="Credibility Questions"
              color="coral"
            />
            <StatCard
              icon={Users}
              value={TRACK_RECORD_DATA.by_category.OTHER_WOMEN}
              label="Pattern References"
              color="coral"
            />
            <StatCard
              icon={Globe}
              value={TRACK_RECORD_DATA.by_category.COLOMBIA}
              label="Colombia References"
              color="shame"
            />
          </div>
        </div>
      </section>

      {/* Marriage Deception Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <HeartCrack className="w-8 h-8 text-verdict" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-3xl uppercase">
              &quot;I Thought He Was Married?&quot;
            </h2>
          </div>
          <p className="font-mono text-cream-muted text-sm mb-4">
            {TRACK_RECORD_DATA.by_category.MARRIAGE_DECEPTION} references to his
            marriage status, Heather, and relationship timeline
          </p>

          {/* Context */}
          <div className="bg-navy-deep border border-verdict/30 p-6 rounded-lg mb-8">
            <h3 className="font-mono text-verdict text-sm uppercase tracking-widest mb-3">
              The Context
            </h3>
            <p className="font-mono text-cream text-sm leading-relaxed">
              ASL was{" "}
              <span className="text-verdict font-bold">still legally married</span>{" "}
              to Heather while dating Jenna. According to Jenna, he lied about
              this. His own audience kept asking about it during the stream.
            </p>
          </div>

          <div className="space-y-4">
            <CollapsibleSection
              title='"Is he still married?"'
              icon={MessageCircleQuestion}
              count={TRACK_RECORD_DATA.marriage_deception.married_questions.length}
              defaultOpen={true}
              highlight={true}
            >
              <p className="font-mono text-cream-muted text-xs mb-4">
                Questions from viewers who were confused about his marital status
              </p>
              {TRACK_RECORD_DATA.marriage_deception.married_questions.map((item) => (
                <QuoteCard key={item.id} {...item} />
              ))}
            </CollapsibleSection>

            <CollapsibleSection
              title="Heather Mentions"
              icon={Heart}
              count={TRACK_RECORD_DATA.marriage_deception.heather_mentions.length}
            >
              <p className="font-mono text-cream-muted text-xs mb-4">
                References to his wife Heather and her involvement
              </p>
              {TRACK_RECORD_DATA.marriage_deception.heather_mentions.map((item) => (
                <QuoteCard key={item.id} {...item} />
              ))}
            </CollapsibleSection>

            <CollapsibleSection
              title='"Finish one relationship first"'
              icon={TrendingUp}
              count={TRACK_RECORD_DATA.marriage_deception.relationship_advice.length}
            >
              <p className="font-mono text-cream-muted text-xs mb-4">
                Viewers advising him about his relationship patterns
              </p>
              {TRACK_RECORD_DATA.marriage_deception.relationship_advice.map(
                (item) => (
                  <QuoteCard key={item.id} {...item} />
                )
              )}
            </CollapsibleSection>
          </div>
        </div>
      </section>

      {/* Credibility History Section */}
      <section className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <AlertTriangle className="w-8 h-8 text-coral" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl uppercase">
              &quot;You Have a Terrible Track Record&quot;
            </h2>
          </div>
          <p className="font-mono text-cream-muted text-sm mb-8">
            {TRACK_RECORD_DATA.by_category.CREDIBILITY_HISTORY} references to his
            credibility, honesty, and past behavior
          </p>

          <div className="space-y-4">
            <CollapsibleSection
              title='"Once a cheater..."'
              icon={HeartCrack}
              count={TRACK_RECORD_DATA.credibility_history.cheating_accusations.length}
              defaultOpen={true}
            >
              <p className="font-mono text-cream-muted text-xs mb-4">
                Direct accusations of cheating from viewers
              </p>
              {TRACK_RECORD_DATA.credibility_history.cheating_accusations.map(
                (item) => (
                  <QuoteCard key={item.id} {...item} />
                )
              )}
            </CollapsibleSection>

            <CollapsibleSection
              title='"Liar" accusations'
              icon={AlertTriangle}
              count={TRACK_RECORD_DATA.credibility_history.liar_accusations.length}
            >
              {TRACK_RECORD_DATA.credibility_history.liar_accusations.map(
                (item) => (
                  <QuoteCard
                    key={item.id}
                    {...item}
                    highlight={item.username === "jennahill6102"}
                  />
                )
              )}
            </CollapsibleSection>

            <CollapsibleSection
              title="Credibility statements"
              icon={Quote}
              count={TRACK_RECORD_DATA.credibility_history.credibility_statements.length}
            >
              <p className="font-mono text-cream-muted text-xs mb-4">
                Who viewers said they believed
              </p>
              {TRACK_RECORD_DATA.credibility_history.credibility_statements.map(
                (item) => (
                  <QuoteCard key={item.id} {...item} />
                )
              )}
            </CollapsibleSection>
          </div>
        </div>
      </section>

      {/* Other Women / Pattern Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Users className="w-8 h-8 text-coral" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-3xl uppercase">
              &quot;Why Is Every Woman Crazy?&quot;
            </h2>
          </div>
          <p className="font-mono text-cream-muted text-sm mb-8">
            {TRACK_RECORD_DATA.by_category.OTHER_WOMEN} references to patterns
            with multiple women—without naming other victims
          </p>

          {/* Educational box about the pattern */}
          <div className="bg-shame/10 border border-shame p-6 rounded-lg mb-8">
            <h3 className="font-mono text-shame text-sm uppercase tracking-widest mb-3">
              Note About This Section
            </h3>
            <p className="font-mono text-cream text-sm leading-relaxed">
              These quotes reference a pattern that his audience noticed, without
              speculating about specific incidents or naming individuals. The
              point is that{" "}
              <span className="text-shame font-bold">his own viewers</span> kept
              asking why there were so many similar situations.
            </p>
          </div>

          <div className="space-y-4">
            <CollapsibleSection
              title='"There seems to be a pattern..."'
              icon={TrendingUp}
              count={TRACK_RECORD_DATA.other_women.pattern_mentions.length}
              defaultOpen={true}
            >
              {TRACK_RECORD_DATA.other_women.pattern_mentions.map((item) => (
                <QuoteCard key={item.id} {...item} />
              ))}
            </CollapsibleSection>

            <CollapsibleSection
              title='"Not the first..."'
              icon={Users}
              count={TRACK_RECORD_DATA.other_women.not_the_first.length}
            >
              <p className="font-mono text-cream-muted text-xs mb-4">
                Viewers noting this isn&apos;t the first time
              </p>
              {TRACK_RECORD_DATA.other_women.not_the_first.map((item) => (
                <QuoteCard key={item.id} {...item} />
              ))}
            </CollapsibleSection>
          </div>
        </div>
      </section>

      {/* Colombia Section */}
      <section className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Globe className="w-8 h-8 text-shame" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-shame text-3xl uppercase">
              Colombia References
            </h2>
          </div>
          <p className="font-mono text-cream-muted text-sm mb-8">
            {TRACK_RECORD_DATA.by_category.COLOMBIA} references to an incident in
            Colombia
          </p>

          <div className="bg-navy-deep border border-shame/30 p-6 rounded-lg mb-8">
            <h3 className="font-mono text-shame text-sm uppercase tracking-widest mb-3">
              Note
            </h3>
            <p className="font-mono text-cream text-sm leading-relaxed">
              These references appeared in the chat log. We&apos;re documenting
              that they exist without speculating about what they reference.
              Viewers can research if they want more context.
            </p>
          </div>

          <div className="space-y-4">
            {TRACK_RECORD_DATA.colombia.map((item) => (
              <QuoteCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* When Everyone Is "Crazy" - Educational Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-deep border-2 border-verdict p-8 rounded-lg">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-verdict text-3xl uppercase mb-4">
              When Everyone You Date Is &quot;Crazy&quot;
            </h2>

            <div className="space-y-6 font-mono text-sm">
              <p className="text-cream leading-relaxed">
                There&apos;s a common pattern in abusive relationships: the abuser
                characterizes every ex-partner as &quot;crazy,&quot;
                &quot;unstable,&quot; or &quot;mentally ill.&quot;
              </p>

              <div className="bg-verdict/10 p-4 rounded-lg">
                <p className="text-verdict font-bold mb-2">Consider the math:</p>
                <p className="text-cream-muted">
                  If one ex was &quot;crazy&quot; — maybe it was a bad match.
                  <br />
                  If two exes were &quot;crazy&quot; — concerning coincidence.
                  <br />
                  If three or more exes were &quot;crazy&quot; — the common
                  denominator is not them.
                </p>
              </div>

              <p className="text-cream leading-relaxed">
                This tactic serves multiple purposes:
              </p>

              <ul className="space-y-3 text-cream-muted">
                <li className="flex items-start gap-3">
                  <span className="text-verdict">1.</span>
                  <span>
                    <span className="text-cream font-bold">
                      Preemptive discrediting
                    </span>{" "}
                    — If you ever speak up, you&apos;ve already been labeled as
                    &quot;crazy&quot; to anyone who might listen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verdict">2.</span>
                  <span>
                    <span className="text-cream font-bold">Sympathy harvesting</span>{" "}
                    — The abuser positions themselves as a victim of &quot;crazy
                    exes,&quot; gaining sympathy from new partners
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verdict">3.</span>
                  <span>
                    <span className="text-cream font-bold">Pattern deflection</span>{" "}
                    — By pathologizing all exes, they avoid examining their own
                    behavior
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verdict">4.</span>
                  <span>
                    <span className="text-cream font-bold">Isolation setup</span> —
                    New partners are primed to distrust anyone who warns them
                  </span>
                </li>
              </ul>

              <div className="border-t border-verdict/30 pt-6 mt-6">
                <p className="text-verdict leading-relaxed font-bold">
                  His own audience noticed this pattern and asked about it in
                  real-time. That&apos;s not Jenna&apos;s narrative—it&apos;s what
                  252,000 subscribers were already thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-deep border border-coral p-8 rounded-lg">
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-coral text-2xl uppercase mb-4">
              What This Section Shows
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <p className="text-cream leading-relaxed">
                Every quote on this page came from the chat logs of the December
                2024 livestream. These aren&apos;t accusations from Jenna —
                they&apos;re observations from:
              </p>
              <ul className="space-y-2 text-cream-muted">
                <li className="flex items-start gap-3">
                  <span className="text-coral">•</span>
                  <span>His own subscribers in his own chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral">•</span>
                  <span>
                    Viewers who tuned in to hear his side and still had questions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral">•</span>
                  <span>People in Jenna&apos;s chat who connected the dots</span>
                </li>
              </ul>
              <p className="text-coral mt-6 leading-relaxed font-bold">
                198 references. His own audience. Their own words.
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
            <p className="text-verdict mt-1">
              {TRACK_RECORD_DATA.total_references} references documented.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
