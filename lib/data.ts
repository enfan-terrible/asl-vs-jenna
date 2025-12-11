export const COMPARISON = [
  { metric: "Subscribers", asl: "252,000", jenna: "47,100", winner: "asl", note: "5.3x more" },
  { metric: "Messages", asl: "2,501", jenna: "3,675", winner: "jenna", note: "+47%" },
  { metric: "Unique Chatters", asl: "634", jenna: "531", winner: "asl", note: "+19%" },
  { metric: "Avg Sentiment", asl: "+0.193", jenna: "+0.039", winner: "asl", note: "5x more positive" },
  { metric: "Avg Toxicity", asl: "0.094", jenna: "0.358", winner: "asl", note: "3.8x cleaner" },
  { metric: "Msgs per 1K Subs", asl: "9.93", jenna: "78.03", winner: "jenna", note: "7.8x engaged" },
];

export const PARETO = {
  asl: {
    top1: { users: 6, pct: 17.11 },
    top10: { users: 63, pct: 51.14 },
    lurkers: { users: 304, pct: 47.9 }
  },
  jenna: {
    top1: { users: 5, pct: 12.22 },
    top10: { users: 53, pct: 50.88 },
    lurkers: { users: 175, pct: 33.0 }
  }
};

export const POWER_USERS = {
  asl: [
    { username: "arkansasflamingo", messages: 140, pct: 5.6 },
    { username: "northerngirl4", messages: 85, pct: 3.4 },
    { username: "meowdy-there", messages: 64, pct: 2.56 },
    { username: "marceypoeckes1968", messages: 58, pct: 2.32 },
    { username: "jamaicazipfel9088", messages: 44, pct: 1.76 },
  ],
  jenna: [
    { username: "doaisaracist", messages: 104, pct: 2.83 },
    { username: "motomechanic97", messages: 101, pct: 2.75 },
    { username: "queenofkarma", messages: 86, pct: 2.34 },
    { username: "rodeaster", messages: 85, pct: 2.31 },
    { username: "thejessicatate", messages: 73, pct: 1.99 },
  ],
};

export const CROSS_CHAT = [
  { name: "Switzerland Energy", value: 75, pct: 50.0, key: "consistentNeutral" },
  { name: "Loyal Soldiers (ASL)", value: 27, pct: 18.0, key: "aslDefender" },
  { name: "Ride-or-Dies (Jenna)", value: 20, pct: 13.3, key: "jennaDefender" },
  { name: "Chaos Agents", value: 13, pct: 8.7, key: "dramaAmplifier" },
  { name: "Actual Adults", value: 11, pct: 7.3, key: "peacemaker" },
  { name: "Politicians", value: 4, pct: 2.7, key: "flipFlopper" },
];

export const IMPACT = {
  asl: {
    with: { sentiment: 0.193, toxicity: 0.094 },
    without: { sentiment: 0.216, toxicity: 0.089 },
    verdict: "MINIMAL_IMPACT"
  },
  jenna: {
    with: { sentiment: 0.039, toxicity: 0.358 },
    without: { sentiment: 0.034, toxicity: 0.389 },
    verdict: "MINIMAL_IMPACT"
  }
};

export const PEACEMAKERS = [
  { rank: 1, username: "meghanisacat", sentiment: 0.750, messages: 7, medal: "gold" },
  { rank: 2, username: "craigerst", sentiment: 0.666, messages: 7, medal: "silver" },
  { rank: 3, username: "fjo9492", sentiment: 0.643, messages: 8, medal: "bronze" },
  { rank: 4, username: "kikilhibou", sentiment: 0.625, messages: 5, medal: "" },
  { rank: 5, username: "jasminedabs", sentiment: 0.600, messages: 6, medal: "" },
  { rank: 6, username: "muma6559", sentiment: 0.591, messages: 12, medal: "" },
  { rank: 7, username: "tina-y7y", sentiment: 0.541, messages: 7, medal: "" },
  { rank: 8, username: "dcourt_1", sentiment: 0.535, messages: 15, medal: "" },
  { rank: 9, username: "great-gig-tcb", sentiment: 0.450, messages: 17, medal: "" },
  { rank: 10, username: "markus5862", sentiment: 0.423, messages: 25, medal: "" }
];

export const TOXIC_TOURISTS = [
  { rank: 1, username: "drifter2805", toxicity: 2.100, messages: 6, flames: 3 },
  { rank: 2, username: "freespiritmermaid", toxicity: 2.000, messages: 5, flames: 3 },
  { rank: 3, username: "kateashley950", toxicity: 2.000, messages: 3, flames: 2 },
  { rank: 4, username: "jewelssa874", toxicity: 1.583, messages: 5, flames: 2 },
  { rank: 5, username: "stefsmith-c6k", toxicity: 1.500, messages: 5, flames: 2 },
  { rank: 6, username: "type1dialectic731", toxicity: 1.500, messages: 3, flames: 1 },
  { rank: 7, username: "soulie1971", toxicity: 1.250, messages: 4, flames: 1 },
  { rank: 8, username: "genxray", toxicity: 1.208, messages: 49, flames: 1 },
  { rank: 9, username: "richisle5504", toxicity: 1.000, messages: 4, flames: 1 },
  { rank: 10, username: "jan-marc", toxicity: 1.000, messages: 3, flames: 1 }
];

export const FLIP_FLOPPERS = [
  { username: "genxray", asl: "PRO_ASL", jenna: "NEUTRAL", verdict: "Tactical retreat" },
  { username: "casstaylorsversion", asl: "PRO_JENNA", jenna: "NEUTRAL", verdict: "Reconsidered" },
  { username: "josephgriffey6604", asl: "PRO_JENNA", jenna: "NEUTRAL", verdict: "Lost interest" },
  { username: "janvan-oe1qv", asl: "PRO_ASL", jenna: "NEUTRAL", verdict: "Cooled off" }
];

export const FINAL_VERDICTS = [
  { category: "Raw Engagement", winner: "jenna", margin: "+47% messages" },
  { category: "Relative Engagement", winner: "jenna", margin: "4.48x per subscriber" },
  { category: "Positive Vibes", winner: "asl", margin: "5x more positive" },
  { category: "Least Toxic", winner: "asl", margin: "3.8x cleaner" },
  { category: "Most Lurkers", winner: "asl", margin: "48% one-and-done" },
  { category: "Drama Tourists", winner: "jenna", margin: "4.2% vs 3.1%" }
];

export const HERO_STATS = {
  messagesAnalyzed: 6176,
  armchairPsychologists: 1015,
  doubleAgents: 150,
};
