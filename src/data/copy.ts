/**
 * Every user-facing string that is not already structured data.
 *
 * The rule: `.astro` files hold layout, not words. Cards, characters,
 * screenshots, rules and FAQ entries stay in their own data files because they
 * are records; everything else — headings, prose, button labels — lives here so
 * copy edits never mean touching markup.
 *
 * A couple of fields are marked "rich": they permit a little inline HTML and
 * are rendered with `set:html`. They are author-controlled, never user input.
 */
import { keepers } from "./cast";
import { factions } from "./factions";

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
/** 6 -> "Six", so headings that count things stay in step with the data. */
const Word = (n: number) => {
  const w = WORDS[n] ?? String(n);
  return w.charAt(0).toUpperCase() + w.slice(1);
};

export const copy = {
  hero: {
    /** rich: <strong> marks the card game's name */
    pitch:
      "You spend your evenings and your paychecks on <strong>Bloom Wars: The Veil</strong>, the card game everyone in Seedblossom plays. Then a card you don't own turns up on your pillow, and the game starts leaking into the city.",
    pitchDim: "Walk the streets. Open packs. Build a deck. Duel your way to the Veil.",
    cta: "Follow development",
    secondary: "How duels work",
  },

  pillars: {
    kicker: "Two games in one",
    heading: "An adventure you walk, a card game you master",
    adventure: {
      label: "The adventure",
      title: "A city to explore",
      body: "Walk Seedblossom in classic top-down style: six districts, the roads between them, card shops, cafés, parks and a place of your own. Talk to everyone. Some of them want a duel.",
      points: ["Six districts to unlock", "Friends, rivals and side duels", "A phone for contacts, quests and saves"],
    },
    duel: {
      label: "The card game",
      title: "A real TCG at its heart",
      body: "Bloom Wars: The Veil is a complete trading card game: leaders, Anchors, two battlefields, resources and initiative. Open boosters, chase rares and build any deck you can imagine.",
      points: ["250+ cards in First Bloom", "Six factions to mix", "AI opponents with their own decks and styles"],
    },
  },

  cards: {
    kicker: "First Bloom",
    heading: "Cards worth chasing",
    lede: "Every card in the base set is illustrated, and every ability is scripted and tested. A few from the set:",
    railLabel: "Cards from First Bloom",
  },

  factionsSection: {
    kicker: `${Word(factions.length)} factions`,
    heading: "Pick a side, or two",
    lede: "Each faction is a philosophy for fighting in both worlds. Your leader and your Anchor decide which ones your deck plays cheaply.",
  },

  keepersSection: {
    kicker: "The Keeper circuit",
    heading: `${Word(keepers.length)} districts. ${Word(keepers.length)} rings.`,
    lede: "Every district has a card shop, and every shop has a Keeper who holds a ring. Beat them in order and the road to the next district opens. Nobody has ever wondered what the rings are for.",
    ringLabel: "Ring",
  },

  charactersSection: {
    kicker: "Friends and foes",
    heading: "Who you'll meet",
    sub: "A best friend who keeps a tally of his losses, a streamer with a chat full of goblins, a slime in the park, and a woman who visits your dreams.",
    railLabel: "Characters",
  },

  screenshots: {
    kicker: "In the game",
    heading: "See it in action",
    lede: "Captured straight from the current build.",
    railLabel: "Screenshots",
  },

  storyTeaser: {
    kicker: "The story",
    heading: "The game is a window",
    body: "Bloom Wars' designer really did dream it. Its cards are glimpses of real beings in the Dreaming, and the Veil that keeps the two worlds apart is slipping. Where it thins, the Dreaming has one law: two wills, two hosts, one field. So you fight with cards.",
    cta: "Read the story",
  },

  patreon: {
    heading: "Help shape the game",
    body: "Patrons help decide where the game goes next, and higher tiers get early builds.",
    cta: "Become a patron",
  },

  footer: {
    blurb: "A top-down RPG adventure built around a full trading card game. One city, six rings, and a Veil that's slipping.",
    siteHeading: "The site",
    elsewhereHeading: "Elsewhere",
  },

  howToPlay: {
    pageTitle: "How to play",
    kicker: "Bloom Wars: The Veil",
    heading: "How a duel works",
    lede: "Easy to start, deep enough to keep you building decks. Here's the whole game on one page.",
    description:
      "The rules of Bloom Wars: The Veil — leaders, Anchors, the Waking World and the Dreaming, resources, initiative and the six factions.",
    flowKicker: "A round",
    flowHeading: "From the first draw",
    conceptsKicker: "The essentials",
    conceptsHeading: "What makes it tick",
    worldsKicker: "Two battlefields",
    worldsHeading: "The Waking World and the Dreaming",
    waking: {
      title: "The Waking World",
      motto: "Reality · Order · Technology",
      body: "The physical world: the University, guilds, courts and laboratories. Its units are students, knights, inventors, mercenaries, golems and armoured war-beasts.",
    },
    dreaming: {
      title: "The Dreaming",
      motto: "Dreams · Emotion · Possibility",
      body: "A realm beside our own, shaped by desire, memory and fear, where thoughts become physical facts. Its units are mythical beasts and monsters, shaped by the faction they serve.",
    },
    learnKicker: "Learn by playing",
    learnBody: "The prologue's duel against Cade walks you through all of this one step at a time. In every duel, everything you can do glows green.",
  },

  story: {
    pageTitle: "Story",
    kicker: "A prologue and four acts",
    heading: "The Story",
    lede: "Warm slice-of-life with a goofy streak that grows into urban fantasy. The stakes are real, but nobody gets gored: in the Dreaming, defeat means being sent back.",
    description:
      "The story of Bloom Wars: Duelists of the Veil — a card player, six rings, and a card game that turns out to be a window into the Dreaming.",
  },

  faq: {
    pageTitle: "FAQ",
    kicker: "Questions",
    heading: "Frequently asked",
    lede: "What the game is, how far along it is, and what to expect from it.",
    description:
      "Common questions about Bloom Wars: Duelists of the Veil — what it is, how the card game works, how far along it is, and how to support it.",
  },

  notFound: {
    pageTitle: "Not found",
    kicker: "Lost in the Dreaming",
    code: "404",
    heading: "This card isn't in the set.",
    lede: "The page you asked for doesn't exist. Head back to the shop and try another pack.",
    cta: "Back to Bloom Wars",
    description: "That page does not exist.",
  },

  /** Chrome and screen-reader labels — content too, just not prose. */
  ui: {
    skipToContent: "Skip to content",
    header: {
      patreonShort: "Patreon",
      patreonLong: "Support on Patreon",
      navLabel: "Main",
      menuLabel: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      /** Suffixed to the site name for the home link. */
      homeSuffix: "home",
    },
    card: {
      cost: "Cost",
      power: "Power",
      hp: "HP",
      legendary: "Legendary",
    },
    lightbox: {
      dialogLabel: "Gallery",
      close: "Close",
    },
    carousel: {
      prev: "Previous",
      next: "Next",
      /** Joins the range and the total: "1–6 of 10". */
      of: "of",
    },
  },
} as const;
