"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  AlertTriangle,
  RotateCcw,
  Volume2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Search,
} from "lucide-react";

// ============================================================================
// GASLIGHTING DATA - 167 instances from gaslight_data.json
// ============================================================================

const GASLIGHTING_STATS = {
  total: 167,
  byCategory: {
    DARVO_ATTACK: 145,
    PATHOLOGIZE: 16,
    DARVO_REVERSE: 5,
    MINIMIZE: 1,
  },
};

// Category metadata
const CATEGORY_INFO = {
  DARVO_ATTACK: {
    label: "Weaponized Therapy",
    count: 145,
    description:
      "Using 'therapy', 'mental health', and 'get help' language to pathologize an accuser rather than address their accusations.",
    icon: Brain,
    color: "#e85d3b",
    examples: [
      {
        message:
          "Jenna please just concentrate on your kids and your mental health, hun",
        username: "cathyw6735",
        id: "G001",
      },
      {
        message:
          "She needs therapy not a relationship. she needs onw tih herself. That's all thios sounds like.",
        username: "jamaicazipfel9088",
        id: "G022",
      },
      {
        message:
          "Donations aren't the answer here. Get help and finish one relationship before you move on to others.",
        username: "ratherbeinmaui1",
        id: "G002",
      },
      {
        message:
          "You know deep down that this is Toxic af love Jenna but she needs help and its not you",
        username: "tinamcbride63",
        id: "G065",
      },
      {
        message:
          "dude- you're a saint for putting up with numerous multi-hour phone calls. I'd have been light years away long ago. Therapy and meds can do actual good.",
        username: "freeasaneagle",
        id: "G070",
      },
    ],
  },
  PATHOLOGIZE: {
    label: "Armchair Diagnosis",
    count: 16,
    description:
      "Unqualified strangers diagnosing BPD, abandonment issues, and personality disorders to discredit an accuser's claims.",
    icon: AlertTriangle,
    color: "#ef4444",
    examples: [
      {
        message:
          "I am listening to the start and a few minutes in it is clear she has borderline Personality disorder. two choices for you learn about BPD and know its from trauma or stay away from her full stop NOW",
        username: "genxray",
        id: "G016",
      },
      {
        message: "Taht is classic BPD. I'm sorry",
        username: "danc3488",
        id: "G008",
      },
      {
        message: "Has she been diagnosed with borderline personality disorder?",
        username: "scho553",
        id: "G167",
      },
      {
        message:
          "You know what's she doing here right? She has abandonment issues right? So she sets things up so she's abandoned.",
        username: "dianejarest-z6d",
        id: "G054",
      },
      {
        message:
          "She CAN control it. She CHOOSES not to. That's the saddest part",
        username: "danc3488",
        id: "G083",
      },
    ],
  },
  DARVO_REVERSE: {
    label: "Victim Reversal",
    count: 5,
    description:
      "Making the victim's response to abuse seem unreasonable. Portraying him as the victim for her calling police.",
    icon: RotateCcw,
    color: "#991b1b",
    examples: [
      {
        message:
          "holy cow she called the cops?!?!?! five min after you finally got out?! wow",
        username: "juwlz",
        id: "G013",
      },
      {
        message: "Did she threaten Natalie and Cheryl as well?",
        username: "stephendolson-andrew3256",
        id: "G085",
      },
      {
        message:
          "Isnt there a Section 5150 sort of thing in Florida? If she threatens self ham. Put up cameras all over and forget they are there; then keep a record of her crazy actions.",
        username: "1234cheerful",
        id: "G076",
      },
      {
        message:
          "She has NO IDEA that's she's abusing you...no concept...so terribly sad",
        username: "goodjujutravels",
        id: "G149",
      },
      {
        message:
          "If she threatens herself you should call her ex husband to check on her, if all of this is true he should be aware of all this for their kids sake",
        username: "nanettekancianic719",
        id: "G116",
      },
    ],
  },
  MINIMIZE: {
    label: "Minimization",
    count: 1,
    description:
      "Downplaying the severity of accusations. Dismissing battery charges as exaggeration.",
    icon: Volume2,
    color: "#e8dfd0",
    examples: [
      {
        message:
          'Her exaggerating the whole "battery" thing really is right out of scientology...',
        username: "pixiestar123",
        id: "G134",
      },
    ],
  },
};

// Top offenders with complete message history
const TOP_OFFENDERS = {
  spongebobsqueeze: {
    count: 9,
    categories: ["DARVO_ATTACK", "PATHOLOGIZE"],
    messages: [
      "I'm so sorry. I can see how much you and Jenna liked each other and i know you hoped it would work.i was hoping that the therapy she was seeking for her abandonment issues was helping her more.",
      "A lot of times people who have abandonment issues also have attachment issues and when they feel abandoned they use anger in place of love. It is the only emotion that feels as strong as love.",
    ],
    note: "Repeated the same message multiple times across the stream",
  },
  "meowdy-there": {
    count: 7,
    categories: ["DARVO_ATTACK", "PATHOLOGIZE"],
    messages: [
      "Please don't diagnose in the comments. Encourage to seek help and support",
      "Let's keep it clear, for the people spewing off, having abandonment issues doesn't make you a dirty, unworthy person! It's how you choose to heal from that.",
      "Therapy doesn't FIX but it gives you the TOOLS to heal. You still have to do the work yourself and a lot of self acknowledgement and introspection.",
      "Please no psycho analyzing",
      "I will say some therapists were not helpful to me but it's worth a shot. Group therapy helped me the most personally!",
      "@AmberUnderground78 aw that's so sweet. Maybe we can help support Aaron with finding some low cost therapy when and if he is ready",
      "Aaron we really want you to get help for yourself too. When you're ready of course, but we are rooting for you.",
    ],
    note: "Also an INFILTRATOR - 64 messages in ASL's chat, 41 in Jenna's chat",
  },
  pixiestar123: {
    count: 4,
    categories: ["DARVO_ATTACK", "PATHOLOGIZE", "MINIMIZE"],
    messages: [
      "Both of you are great, but together it's just toxic... Jenna needs help with her abandonment issues if she wants to have healthy relationships in the future. Please let this be the end of it.",
      "I'm with you Aaron... however sleeping with someone that clearly has a history of abandonment issues, among other things, probably wasn't the best idea, especially when the relationship is done.",
      'Her exaggerating the whole "battery" thing really is right out of scientology...',
    ],
    note: "THE ONLY PERSON TO MINIMIZE THE BATTERY ACCUSATION",
  },
};

// ============================================================================
// EDUCATIONAL CONTENT
// ============================================================================

const EDUCATIONAL_CONTENT = {
  whatIsDarvo: {
    title: "What is DARVO?",
    content: [
      "DARVO stands for Deny, Attack, Reverse Victim and Offender. It's a reaction that some perpetrators display when confronted with their abusive behavior.",
      "The perpetrator first Denies the behavior, then Attacks the person confronting them, and finally Reverses the roles of Victim and Offender so that the perpetrator assumes the victim role and the actual victim is painted as the offender.",
      "Research by Dr. Jennifer Freyd at the University of Oregon has documented this pattern extensively in cases of sexual assault and domestic abuse.",
    ],
  },
  weaponizedTherapy: {
    title: "Why Weaponized Mental Health Language is Abusive",
    content: [
      "When someone accuses a person of abuse, and the response is 'they need therapy' rather than addressing the accusation, that's not genuine concern—it's a silencing tactic.",
      "Telling an accuser to 'get help' reframes the accusation as a symptom of mental illness rather than a legitimate claim requiring investigation.",
      "This tactic is particularly insidious because it co-opts the language of mental health advocacy to discredit accusers while appearing compassionate.",
    ],
  },
  armchairDiagnosis: {
    title: "The Problem with Armchair Diagnosis",
    content: [
      "BPD (Borderline Personality Disorder) has become a weaponized label, disproportionately applied to women who display strong emotions or report abuse.",
      "Diagnosing strangers from chat messages is not only unethical—it's impossible. Yet 16 people in this chat felt qualified to diagnose Jenna with personality disorders.",
      "When accusers are labeled with BPD, their accusations become symptoms of their 'disorder' rather than potential truths requiring investigation.",
      "This pattern has historical roots: women reporting abuse have long been labeled 'hysterical' or mentally ill to discredit their claims.",
    ],
  },
  coordinatedPattern: {
    title: "Coordinated vs Organic Gaslighting",
    content: [
      "167 instances of DARVO in a single chat is not organic conversation—it's a pattern.",
      "When the same talking points ('she needs therapy', 'BPD', 'abandonment issues') repeat across dozens of users, it creates an echo chamber that reinforces the abuser's narrative.",
      "Whether coordinated or emergent, the effect is the same: the accuser is painted as mentally ill, and the abuse allegations disappear under a flood of concern-trolling.",
    ],
  },
};

// ============================================================================
// COMPONENT
// ============================================================================

export function TheGaslightingPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "DARVO_ATTACK"
  );
  const [expandedOffender, setExpandedOffender] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter offenders by search
  const filteredOffenders = Object.entries(TOP_OFFENDERS).filter(([username]) =>
    username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-navy-deep">
      {/* Header */}
      <header className="py-8 px-6 border-b border-coral/20">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-cream-muted hover:text-coral transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-coral text-[clamp(3rem,10vw,6rem)] uppercase leading-none">
            The Gaslighting
          </h1>
          <p className="font-mono text-cream text-lg mt-4 max-w-3xl">
            167 documented instances of DARVO tactics from ASL&apos;s chat.
            Weaponized therapy language, armchair diagnoses, and victim reversal—all
            used to discredit an accuser.
          </p>
        </div>
      </header>

      {/* Total Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-navy-light p-8 md:p-12 rounded-lg text-center mb-12">
            <div className="font-mono text-coral text-7xl md:text-9xl font-bold">
              {GASLIGHTING_STATS.total}
            </div>
            <div className="font-mono text-cream text-xl uppercase tracking-widest mt-4">
              DARVO Instances Documented
            </div>
            <p className="font-mono text-cream-muted text-sm mt-6 max-w-xl mx-auto">
              In a single livestream, 167 comments used psychological manipulation
              tactics to discredit Jenna&apos;s accusations. This is not support.
              This is coordinated character assassination.
            </p>
          </div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-16 px-6 bg-navy-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-cream text-4xl uppercase mb-8">
            By Category
          </h2>

          <div className="space-y-4">
            {Object.entries(CATEGORY_INFO).map(([key, category]) => {
              const IconComponent = category.icon;
              const isExpanded = expandedCategory === key;

              return (
                <div key={key} className="bg-navy-light rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : key)
                    }
                    className="w-full p-6 flex items-center justify-between hover:bg-navy-deep/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{ color: category.color }}
                        />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-3">
                          <span
                            className="font-mono text-3xl font-bold"
                            style={{ color: category.color }}
                          >
                            {category.count}
                          </span>
                          <span className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase">
                            {category.label}
                          </span>
                        </div>
                        <p className="font-mono text-cream-muted text-xs mt-1 max-w-xl">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-coral" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-cream-muted" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-4">
                      <div className="border-t border-coral/20 pt-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
                          Example Messages
                        </h4>
                        {category.examples.map((example, idx) => (
                          <div
                            key={idx}
                            className="bg-navy-deep p-4 rounded-lg mb-3 last:mb-0"
                          >
                            <blockquote className="font-mono text-cream text-sm leading-relaxed border-l-2 pl-4" style={{ borderColor: category.color }}>
                              &quot;{example.message}&quot;
                            </blockquote>
                            <div className="mt-3 flex items-center gap-3">
                              <span className="font-mono text-xs text-cream-muted">
                                @{example.username}
                              </span>
                              <span className="font-mono text-xs px-2 py-0.5 rounded bg-coral/20 text-coral">
                                {example.id}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Offenders */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-coral text-4xl uppercase mb-4">
            Top Offenders
          </h2>
          <p className="font-mono text-cream-muted text-sm mb-8 max-w-2xl">
            These users contributed the most DARVO messages. Their complete
            message histories are documented below.
          </p>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-muted" />
            <input
              type="text"
              placeholder="Search by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-light border border-coral/30 rounded-lg pl-12 pr-4 py-3 font-mono text-sm text-cream placeholder:text-cream-muted/50 focus:outline-none focus:border-coral"
            />
          </div>

          <div className="space-y-4">
            {filteredOffenders.map(([username, data]) => {
              const isExpanded = expandedOffender === username;

              return (
                <div
                  key={username}
                  className="bg-navy-light rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedOffender(isExpanded ? null : username)
                    }
                    className="w-full p-6 flex items-center justify-between hover:bg-navy-deep/50 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="font-mono text-4xl font-bold text-coral">
                          {data.count}
                        </div>
                        <div className="font-mono text-xs text-cream-muted uppercase">
                          instances
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-mono text-cream text-lg">
                          @{username}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {data.categories.map((cat) => (
                            <span
                              key={cat}
                              className="font-mono text-xs px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: `${CATEGORY_INFO[cat as keyof typeof CATEGORY_INFO].color}20`,
                                color:
                                  CATEGORY_INFO[cat as keyof typeof CATEGORY_INFO]
                                    .color,
                              }}
                            >
                              {CATEGORY_INFO[cat as keyof typeof CATEGORY_INFO].label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-coral" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-cream-muted" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-coral/20 pt-6">
                        {data.note && (
                          <div className="bg-shame/10 border border-shame p-4 rounded-lg mb-4">
                            <p className="font-mono text-sm text-shame">
                              {data.note}
                            </p>
                          </div>
                        )}
                        <h4 className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
                          Complete Message History
                        </h4>
                        <div className="space-y-3">
                          {data.messages.map((msg, idx) => (
                            <blockquote
                              key={idx}
                              className="font-mono text-cream text-sm leading-relaxed bg-navy-deep p-4 rounded-lg border-l-2 border-coral"
                            >
                              &quot;{msg}&quot;
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 px-6 bg-navy-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-cream text-4xl uppercase mb-8">
            Understanding the Tactics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(EDUCATIONAL_CONTENT).map(([key, section]) => (
              <div key={key} className="bg-navy-light p-6 rounded-lg">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-coral text-xl uppercase mb-4">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="font-mono text-cream text-sm leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pattern */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-shame/10 border-2 border-shame p-8 md:p-12 rounded-lg">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-shame text-4xl uppercase mb-6">
              Why This Matters
            </h2>
            <div className="space-y-6 font-mono text-cream leading-relaxed">
              <p>
                When a woman accuses a man of abuse and strangers immediately start
                diagnosing her with BPD, that&apos;s not concern for mental
                health. That&apos;s a silencing tactic.
              </p>
              <p>
                When &quot;get therapy&quot; is used as a weapon against someone
                reporting abuse, that&apos;s DARVO. The accuser becomes the
                problem. The abuse becomes a &quot;relationship issue.&quot;
              </p>
              <p>
                When someone calls the police to report being abused and the
                response is &quot;she called the cops?! wow&quot;—the victim has
                been reversed. Seeking legal protection becomes evidence of
                instability.
              </p>
              <div className="pt-6 border-t border-shame/30">
                <p className="text-xl text-shame font-bold">
                  167 times in one chat, this pattern repeated.
                </p>
                <p className="text-cream-muted mt-4">
                  This is documented evidence of how abuse accusations get buried
                  under concern-trolling. It&apos;s not about helping Jenna get
                  therapy. It&apos;s about making her accusations go away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 border-t border-coral/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <Link
              href="/the-censored-chat"
              className="bg-navy-light p-6 rounded-lg hover:bg-navy-deep transition-colors group flex-1"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-coral mb-2">
                Previous Section
              </div>
              <div className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase group-hover:text-coral transition-colors">
                The Censored Chat
              </div>
            </Link>
            <Link
              href="/the-pressure-campaign"
              className="bg-navy-light p-6 rounded-lg hover:bg-navy-deep transition-colors group flex-1 text-right"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-coral mb-2">
                Next Section
              </div>
              <div className="font-[family-name:var(--font-bebas-neue)] text-cream text-2xl uppercase group-hover:text-coral transition-colors">
                The Pressure Campaign
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
