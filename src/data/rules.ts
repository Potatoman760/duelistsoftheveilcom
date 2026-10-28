/**
 * How a duel works, for the How to Play page. Follows the rules summary in
 * BreedhavenCard/README.md, in the player-facing terms of game/data/lexicon.json.
 */

export interface RuleStep {
  /** Short label for the step's number badge. */
  label: string;
  title: string;
  body: string;
}

/** A duel from the first draw to the last hit, in order. */
export const duelFlow: RuleStep[] = [
  {
    label: "Setup",
    title: "Draw six, resource two",
    body: "Each side has a leader and an Anchor. Draw six cards (one mulligan allowed), then put two of them face down as resources. Every card you resource is one you won't play, so choose carefully.",
  },
  {
    label: "Action",
    title: "Take turns, one action at a time",
    body: "Players alternate single actions: play a card by exhausting resources equal to its cost, attack with a ready unit, use an ability, or pass. The phase ends when both players pass in a row.",
  },
  {
    label: "Initiative",
    title: "Claim the initiative",
    body: "Claiming the initiative passes for the rest of the phase, but you act first next round. Sometimes going first matters more than one more play.",
  },
  {
    label: "Regroup",
    title: "Draw, resource, ready",
    body: "Draw two, resource a card if you want to, then ready everything. Then the next action phase begins.",
  },
];

export interface Concept {
  title: string;
  body: string;
}

/** The ideas that make the game what it is. */
export const concepts: Concept[] = [
  {
    title: "Two worlds",
    body: "Units fight in the Waking World (soldiers, knights, golems, war-beasts) or the Dreaming (pegasi, shadow-stalkers, iron-scaled dragons). They attack enemy units in the same world, or the enemy Anchor.",
  },
  {
    title: "Anchors",
    body: "Your Anchor is what holds your side to the world, with up to 30 HP. Bring the opposing Anchor to zero and the duel is yours.",
  },
  {
    title: "Leaders",
    body: "Your leader has abilities from the first turn, and once you have enough resources it deploys onto the battlefield as a unit.",
  },
  {
    title: "Damage sticks",
    body: "Combat damage is simultaneous and stays on a unit until it's healed or defeated, so a wounded unit can still matter three rounds later.",
  },
  {
    title: "Factions",
    body: "A card in a faction your leader and Anchor don't cover costs 2 more for each missing sigil. Build around your leader, or pay for the splash.",
  },
  {
    title: "Keywords",
    body: "Sentinel, Ambush, Raid, Overwhelm, Restore, Shielded, Saboteur and more. Hover any card in the game to read it in full.",
  },
];
