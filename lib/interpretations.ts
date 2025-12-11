export const INTERPRETATIONS = {
  hero: `No interpretation needed - this is just the dramatic entrance.
But if you're reading this, you're already invested. Welcome to the chaos.`,

  taleOfTape: `THE DATA SPEAKS:

ASL has 5x the subscribers but only 32% fewer chatters showed up to Jenna's stream.
That's a massive engagement gap.

Jenna's smaller audience punches WAY above its weight.
ASL's larger audience is... quieter. Make of that what you will.

The sentiment and toxicity gaps are striking: ASL's chat was genuinely more positive
and significantly less toxic. Whether that's moderation, audience culture, or
something else entirely - the numbers don't lie.`,

  engagementParadox: `THE MATH:

ASL: 252,000 subscribers -> 634 chatters = 0.25% showed up
Jenna: 47,100 subscribers -> 531 chatters = 1.13% showed up

Jenna's participation rate is 4.48x higher relative to her audience size.

This could mean:
- Her audience is more dedicated/parasocial
- Her audience has stronger opinions about this drama
- ASL's larger audience includes more casual subscribers who weren't online
- All of the above

The "Messages per 1K Subs" metric (78 vs 9.9) shows Jenna's audience
isn't just showing up - they're TALKING. A lot.`,

  paretoRule: `PARETO IN ACTION:

Both chats follow the classic internet power law distribution:
- Top 10% of users = ~51% of all messages

This is normal. What's interesting is the LURKER disparity:
- ASL: 48% posted once and vanished
- Jenna: Only 33% were one-and-done

Jenna's audience is stickier. They show up and they STAY in the conversation.

The top power users (arkansasflamingo with 140 msgs, doaisaracist with 104)
represent individual humans who typed over 100 messages during a livestream.
That's... dedication? Obsession? You decide.`,

  doubleAgents: `THE 150 CLUB:

These are people who actively participated in BOTH streams simultaneously
or switched between them. They represent the true "drama tourists."

Key finding: 50% were CONSISTENT NEUTRAL. They weren't picking sides -
they were just... watching. Digital rubbernecking.

The IMPACT ANALYSIS is the real story:
Removing all 150 cross-chat users barely moves the needle on either chat's metrics.
But notably, Jenna's toxicity gets WORSE without them (0.358 -> 0.389).

Translation: The tourists were actually a civilizing force in Jenna's chat.
The real toxicity was coming from inside the house.`,

  hallOfFame: `THE PEACEKEEPERS:

These 11 humans tried to bring sanity to chaos.
Combined positive sentiment above 0.4 across BOTH chats.

What makes a peacemaker:
- Messages like "I hope you both heal" instead of picking sides
- Discouraging armchair diagnosis
- Reminding people that real humans are involved

meowdy-there deserves special recognition: 105 messages across both streams,
consistently neutral, actively discouraging toxic behavior.

They represent 7.3% of cross-chat users.
The other 92.7% had other priorities.`,

  wallOfShame: `THE TROUBLEMAKERS:

These users had the highest average toxicity scores across both chats.
"Toxicity" here means: insults, personal attacks, armchair diagnosis,
name-calling, excessive caps, and inflammatory language.

Note: Nobody hit "severe" toxicity (9-10). The worst averaged around 2.0/10.
This is actually... not that bad? Internet standards are low.

The VOLUME + VENOM award goes to doaisaracist:
104 messages at 1.43 average toxicity = sustained low-grade hostility.
When your username is a statement, you're not here for reconciliation.`,

  flipFloppers: `THE POLITICIANS:

Only 4 people (2.7%) changed their faction stance between chats.
All of them went FROM a position TO neutral. Nobody switched sides entirely.

What this tells us:
- Internet commenters are remarkably consistent in their loyalties
- People who showed up to both were either neutral or committed
- Nobody was convinced to change teams by what they saw

The most interesting: genxray went PRO_ASL in ASL's chat but NEUTRAL in Jenna's.
Tactical? Polite? We may never know.`,

  finalVerdict: `THE SUMMARY:

By the numbers, ASL "wins" on quality metrics:
- 5x more positive sentiment
- 3.8x less toxic
- Cleaner, calmer chat

Jenna "wins" on engagement metrics:
- 47% more messages
- 4.48x higher participation rate per subscriber
- More active, vocal audience

What does this mean? That's subjective.

One interpretation: ASL's audience is more supportive, Jenna's is more engaged.
Another: ASL's moderation is tighter, Jenna's audience is more emotionally invested.
A third: This whole thing is parasocial drama and we should all go outside.

The data doesn't tell you who's "right." It just tells you what happened.`,

  methodology: `HOW WE SCORED:

Sentiment (-1 to +1):
Positive words/phrases push toward +1, negative toward -1.
"Love you both" = positive. "This is ridiculous" = negative.

Toxicity (0-10):
Additive scoring based on detected markers:
- Severe insults: +4
- Personal attacks: +3
- Armchair diagnosis: +2
- Name-calling: +2
- All caps: +1
- Excessive punctuation: +1

Faction Detection:
Keyword matching for explicit support/attacks.
Most messages (90%+) were neutral - not taking sides.

Limitations:
- Sarcasm detection is imperfect
- Context matters and algorithms miss nuance
- This is entertainment, not a court of law`,
} as const;

export type InterpretationKey = keyof typeof INTERPRETATIONS;
