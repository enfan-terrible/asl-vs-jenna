export const INTERPRETATIONS = {
  hero: `This site documents abuse tactics observed in real-time during two YouTube livestreams in December 2024.

What you'll find here:
- How chat moderation was used to control narrative
- How infiltrators ran a coordinated pressure campaign
- What DARVO (Deny, Attack, Reverse Victim and Offender) looks like in practice
- Evidence that "positive sentiment" in a censored chat means nothing

This is not entertainment. This is documentation.`,

  censorship: `THE CENSORSHIP EVIDENCE:

While ASL's chat appeared "positive" and "supportive," that positivity was manufactured through active suppression of dissent.

Key findings:
- 44+ references to deleted comments
- Jenna herself was blocked from responding to accusations against her
- A paid superchat saying "we love Jenna" was deleted
- Mod announced: "Any comments about what Jenna is saying will be deleted"
- Questions about his pattern with women were removed

When you delete all criticism, what remains looks like support.
That's not community health - that's narrative control.`,

  darvo: `DARVO IN ACTION:

DARVO stands for Deny, Attack, Reverse Victim and Offender.
It's a manipulation tactic used by abusers to deflect accountability.

What we documented:
- 145 instances of weaponized "therapy" and "mental health" language
- 16 armchair BPD diagnoses directed at the accuser
- 5 explicit reversals ("SHE called the cops?!")
- Coordinated messaging that treated seeking help as pathology

When strangers on the internet diagnose a woman as mentally ill
while she's accusing a man of abuse - that's not concern.
That's a silencing tactic as old as time.`,

  infiltrators: `THE PRESSURE CAMPAIGN:

50 users who appeared in ASL's chat then went to Jenna's chat
and deployed specific pressure tactics:

- 103 "both sides" false equivalences
- 71 "just move on" / "let it go" / "be the bigger person"
- 8 credibility attacks ("dirty laundry")
- 5 explicit attempts to discourage legal action

These weren't neutral observers. They were running interference.

The message was clear: Don't press charges. Don't defend yourself.
Be quiet. Move on. Let him control the narrative.

That's not peacemaking. That's enabling.`,

  patterns: `HIS OWN AUDIENCE ASKED QUESTIONS:

The most damning evidence comes from ASL's own chat:
- 93 references to marriage deception ("isn't he married?")
- 76 credibility concerns ("cheater," "liar," "track record")
- 26 pattern references ("not the first," "other women")
- 3 Colombia incident references

His audience was asking the same questions Jenna was.
Those questions were deleted.`,

  theReframe: `WHAT THE DATA ACTUALLY SHOWS:

The original analysis of this chat data drew wrong conclusions
by treating censored data as truth:

| Metric | Wrong Reading | Correct Reading |
|--------|---------------|-----------------|
| ASL's "positive" sentiment | Supportive community | Censored chat |
| Jenna's "negative" sentiment | Toxic audience | Authentic emotion |
| ASL's low toxicity | Healthy moderation | Deleted dissent |
| Jenna's high toxicity | Drama-seeking | Infiltrators + real feelings |
| "Neutral" cross-chat users | Observers | Infiltrators running tactics |
| "Peacemakers" | Good actors | Silencing campaign |

When you understand the context, the data tells a different story.`,

  finalVerdict: `THE DOCUMENTED RECORD:

This site exists so that:

1. Someone searching for ASL finds documentation of tactics used
2. Enablers can see exactly what they participated in
3. Abuse survivors recognize these patterns and feel validated
4. The "positive sentiment" myth is debunked with evidence
5. People learn to identify these tactics in their own lives

This is what narrative control looks like.
This is what a pressure campaign looks like.
This is what DARVO looks like in real time.

The chat logs don't lie - but they can be manipulated.
We're showing you how.`,

  methodology: `HOW THIS ANALYSIS WAS CONDUCTED:

Data Sources:
- Full chat logs from both livestreams (December 2024)
- Cross-referencing usernames between chats
- Keyword matching for abuse tactics

Classifications:
- DARVO_ATTACK: Weaponized mental health language
- PATHOLOGIZE: Armchair diagnoses
- DARVO_REVERSE: Victim-blaming reversals
- FALSE_EQUIVALENCE: "Both sides" framing
- WEAPONIZED_MOVE_ON: Pressure to stay silent
- DISCOURAGE_LEGAL: Explicit attempts to prevent charges
- INFILTRATOR: Cross-chat users deploying tactics

Limitations:
- This documents public chat behavior only
- Usernames are as they appeared in chat
- Context for individual messages may be incomplete

Purpose:
Educational documentation of abuse tactics for advocacy purposes.`,
} as const;

export type InterpretationKey = keyof typeof INTERPRETATIONS;
