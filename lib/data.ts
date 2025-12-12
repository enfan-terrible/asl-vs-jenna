// ============================================================================
// ABUSE TACTIC DOCUMENTATION DATA
// Reframed from "neutral entertainment" to advocacy/educational content
// ============================================================================

// Key statistics for the hero section
export const HERO_STATS = {
  infiltratorsIdentified: 50,
  deletionReferences: 44,
  darvoAttacks: 145,
  falseEquivalences: 103,
  pressureTactics: 187,
  gaslightingInstances: 167,
};

// Censorship evidence from ASL's chat
export const CENSORSHIP_EVIDENCE = {
  totalReferences: 83,
  deletionReferences: 44,
  timeoutReferences: 12,
  blockingReferences: 18,
  keyEvidence: [
    {
      id: "C016",
      quote:
        "ITS JENNA. THIS MAN IS A DISGUSTING LIAR AND THE MODS ARE BLOCKING ME",
      username: "jennahill6102",
      context: "Jenna herself, blocked from defending herself in his chat",
      severity: "critical",
    },
    {
      id: "C013",
      quote:
        "Did you really just delete the super chat simply stating 'we love jenna'? You are pieces of shit. That person said nothing wrong and even donated money and you go out of your way to delete it?",
      username: "jan-marc",
      context: "Paid superchat deleted for supporting Jenna",
      severity: "high",
    },
    {
      id: "C020",
      quote:
        "Any comments about what Jenna is saying on her channel will be deleted here. Thank you for your cooperation!",
      username: "northerngirl4",
      context: "Mod announcing one-sided deletion policy",
      severity: "high",
    },
    {
      id: "C021",
      quote:
        "so you remove an honest question he needs to answer why every woman in his life is crazy?",
      username: "sharonmartin1223",
      context: "Pattern questions suppressed",
      severity: "high",
    },
    {
      id: "C022",
      quote:
        "glad to see comments from the other side of this are being deleted. why cant we have a fair conversation in the comments?",
      username: "jakobpica",
      context: "Viewer noticing one-sided moderation",
      severity: "medium",
    },
  ],
};

// DARVO/Gaslighting data from ASL's chat
export const DARVO_DATA = {
  totalInstances: 167,
  byCategory: {
    DARVO_ATTACK: 145, // Weaponized therapy/mental health language
    PATHOLOGIZE: 16, // Armchair BPD diagnoses
    DARVO_REVERSE: 5, // "She called the cops?!" victim reversal
    MINIMIZE: 1,
  },
  topOffenders: [
    { username: "spongebobsqueeze", count: 9, classification: "FLYING_MONKEY" },
    { username: "meowdy-there", count: 7, classification: "INFILTRATOR" },
    { username: "pixiestar123", count: 4, classification: "ENABLER" },
    { username: "genxray", count: 3, classification: "INFILTRATOR" },
    { username: "christicovington", count: 3, classification: "INFILTRATOR" },
  ],
  examples: [
    {
      quote:
        "Jenna please just concentrate on your kids and your mental health, hun",
      category: "DARVO_ATTACK",
      tactic: "Weaponizing concern to pathologize the accuser",
    },
    {
      quote:
        "I am listening to the start and a few minutes in it is clear she has borderline Personality disorder.",
      category: "PATHOLOGIZE",
      tactic: "Armchair diagnosis to discredit",
    },
    {
      quote:
        "holy cow she called the cops?!?!?! five min after you finally got out?! wow",
      category: "DARVO_REVERSE",
      tactic: "Making the victim calling for help seem unreasonable",
    },
  ],
};

// Pressure campaign data from Jenna's chat
export const PRESSURE_DATA = {
  totalInstances: 187,
  byCategory: {
    FALSE_EQUIVALENCE: 103, // "both sides", "you're both toxic"
    WEAPONIZED_MOVE_ON: 71, // "just move on", "grow up", "let it go"
    CREDIBILITY_ATTACK: 8, // "dirty laundry" shaming
    DISCOURAGE_LEGAL: 5, // attempts to talk her out of pressing charges
  },
  examples: [
    {
      quote: "Did you seriously phone the cops? that's low. Just walk away.",
      category: "DISCOURAGE_LEGAL",
      username: "stephaniea925",
      isInfiltrator: true,
    },
    {
      quote:
        "People will NOT support you trying to get him arrested again. Just sayin. Just MOVE on.",
      category: "WEAPONIZED_MOVE_ON",
      username: "watchinglivestreams4352",
      isInfiltrator: false,
    },
    {
      quote:
        "I think there both at fault , but Jenna need to figure out how to handle her anger",
      category: "FALSE_EQUIVALENCE",
      username: "krisschumacher7707",
      isInfiltrator: true,
    },
  ],
};

// Infiltrator data - users who appeared in both chats using pressure tactics
export const INFILTRATOR_DATA = {
  totalProfiles: 100,
  byClassification: {
    INFILTRATOR: 50, // Appeared in both chats, used pressure tactics
    FALSE_NEUTRAL: 27, // "Both sides" false equivalence pushers
    ENABLER: 20, // Supported abuser narrative
    CENSOR: 2, // Active moderators suppressing dissent
    FLYING_MONKEY: 1, // Direct attack on victim
  },
  topInfiltrators: [
    {
      username: "meowdy-there",
      aslMessages: 64,
      jennaMessages: 41,
      gaslightingCount: 7,
      pressureCount: 2,
      score: 30,
    },
    {
      username: "genxray",
      aslMessages: 1,
      jennaMessages: 48,
      gaslightingCount: 1,
      pressureCount: 15,
      score: 38,
    },
    {
      username: "doesitmatter2unot2me46",
      aslMessages: 29,
      jennaMessages: 21,
      gaslightingCount: 1,
      pressureCount: 2,
      score: 12,
    },
    {
      username: "lindabedwell807",
      aslMessages: 14,
      jennaMessages: 41,
      gaslightingCount: 0,
      pressureCount: 4,
      score: 13,
    },
    {
      username: "krisschumacher7707",
      aslMessages: 11,
      jennaMessages: 15,
      gaslightingCount: 0,
      pressureCount: 2,
      score: 9,
    },
  ],
  moderatorsAsCensors: [
    {
      username: "arkansasflamingo",
      aslMessages: 140,
      role: "CENSOR",
      actions:
        "Deleted pro-Jenna comments, timed out dissenters, announced deletion policy",
    },
    {
      username: "jenkess",
      aslMessages: 31,
      role: "CENSOR",
      actions: "Announced 'respect for both sides' while deleting one side",
    },
  ],
};

// Track record evidence - his own audience questioning patterns
export const PATTERN_DATA = {
  totalReferences: 198,
  byCategory: {
    MARRIAGE_DECEPTION: 93, // "isn't he married?", Heather references
    CREDIBILITY_HISTORY: 76, // cheating accusations, "liar" labels
    OTHER_WOMEN: 26, // pattern references, "not the first"
    COLOMBIA: 3, // specific incident references
  },
  keyQuestions: [
    "I thought Aaron was married",
    "is he still married to heather?",
    "so you remove an honest question he needs to answer why every woman in his life is crazy?",
    "He has a pattern of abusing women",
    "not the first time he pushes a woman",
  ],
};

// The reframe - what the data actually shows
export const DATA_REFRAME = {
  wrongInterpretation: [
    {
      metric: "ASL positive sentiment",
      wrong: "Healthy, supportive chat",
      correct: "Evidence of censorship",
    },
    {
      metric: "Jenna negative sentiment",
      wrong: "Toxic, unhinged chat",
      correct: "Authentic, unfiltered emotion",
    },
    {
      metric: "ASL low toxicity",
      wrong: "Better community",
      correct: "Dissent was deleted",
    },
    {
      metric: "Jenna high toxicity",
      wrong: "She attracts drama",
      correct: "Infiltrators + real emotions",
    },
    {
      metric: "'Peacemakers' pushing 'move on'",
      wrong: "The good guys",
      correct: "Silencing tactics",
    },
    {
      metric: "Cross-chat 'neutral' users",
      wrong: "Observers",
      correct: "50 confirmed infiltrators",
    },
  ],
};

// Original comparison data - kept for reference but reframed
export const COMPARISON = [
  {
    metric: "Subscribers",
    asl: "252,000",
    jenna: "47,100",
    context: "5x platform power imbalance",
  },
  {
    metric: "Messages",
    asl: "2,501",
    jenna: "3,675",
    context: "Her audience more engaged despite being smaller",
  },
  {
    metric: "Mods Deleting",
    asl: "44+ references",
    jenna: "0",
    context: "One-sided censorship",
  },
  {
    metric: "Jenna Blocked",
    asl: "Yes",
    jenna: "N/A",
    context: "Victim silenced in abuser's space",
  },
  {
    metric: "Infiltrators",
    asl: "Origin",
    jenna: "50 identified",
    context: "Coordinated pressure campaign",
  },
];

// Power users - reframed with enabler context
export const POWER_USERS = {
  asl: [
    {
      username: "arkansasflamingo",
      messages: 140,
      role: "MOD/CENSOR",
      note: "Deleted dissent",
    },
    {
      username: "northerngirl4",
      messages: 85,
      role: "MOD/CENSOR",
      note: "Announced deletion policy",
    },
    {
      username: "meowdy-there",
      messages: 64,
      role: "INFILTRATOR",
      note: "7 gaslighting instances",
    },
    {
      username: "jamaicazipfel9088",
      messages: 44,
      role: "ENABLER",
      note: "3 DARVO attacks",
    },
    {
      username: "jenkess",
      messages: 31,
      role: "MOD/CENSOR",
      note: "'Respect both sides' while deleting one",
    },
  ],
  jenna: [
    {
      username: "motomechanic97",
      messages: 101,
      role: "INFILTRATOR",
      note: "Appeared in both chats",
    },
    {
      username: "queenofkarma",
      messages: 86,
      role: "SUPPORTER",
      note: "Defended Jenna",
    },
    {
      username: "rodeaster",
      messages: 85,
      role: "SUPPORTER",
      note: "Asked hard questions",
    },
    {
      username: "thejessicatate",
      messages: 73,
      role: "SUPPORTER",
      note: "Called out lies",
    },
    {
      username: "lindabedwell807",
      messages: 41,
      role: "INFILTRATOR",
      note: "4 false equivalences",
    },
  ],
};

// Final verdict - reframed
export const FINAL_VERDICTS = [
  {
    finding: "Jenna was blocked from commenting on her own accusation",
    evidence: "Direct quote from Jenna in chat",
  },
  {
    finding: "44+ comments were deleted in ASL's chat",
    evidence: "Meta-references from viewers",
  },
  {
    finding: "50 infiltrators ran pressure campaign in Jenna's chat",
    evidence: "Cross-chat analysis with tactic matching",
  },
  {
    finding: "145 DARVO attacks in ASL's chat",
    evidence: "Weaponized mental health language",
  },
  {
    finding: "103 'both sides' false equivalences",
    evidence: "Pressure tactics in Jenna's chat",
  },
  {
    finding: "5 explicit attempts to discourage legal action",
    evidence: "Direct quotes telling her not to press charges",
  },
];
