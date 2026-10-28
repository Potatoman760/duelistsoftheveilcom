export interface FaqEntry {
  q: string;
  /** One or more answer paragraphs. */
  a: string[];
}

/** How many entries start expanded. */
export const faqOpenCount = 4;

export const faq: FaqEntry[] = [
  {
    q: "What is Bloom Wars: Duelists of the Veil?",
    a: [
      "A top-down RPG adventure built around a full trading card game. You walk the city of Seedblossom, talk to people, buy booster packs, build decks and duel your way up a circuit of six Keepers, until the card game starts leaking into the real world.",
    ],
  },
  {
    q: "Is the card game a real card game?",
    a: [
      "Yes. Bloom Wars: The Veil has a complete rules engine with leaders, Anchors, two battlefields, resources, initiative and keywords. Its first set, First Bloom, has over 250 cards, and every one with an ability has its own scripted, tested effect.",
      "You can open packs, trade up your collection and build any deck you like in the deck builder.",
    ],
  },
  {
    q: "Do I need to know card games to play?",
    a: [
      "No. The prologue is a tutorial duel against your best friend, and in battle everything you can do glows green. Hover any card to read it up close.",
      "If you've played other trading card games, you'll feel at home quickly: the depth is there when you want it.",
    ],
  },
  {
    q: "How long is it, and is it finished?",
    a: [
      "It's in active development. The prologue and all four acts are playable, with six Keepers, the Gilded Court's lieutenants, wild beasts and trainers to duel along the way. Art, balance and polish are still improving.",
    ],
  },
  {
    q: "Who am I up against?",
    a: [
      "The AI. Every opponent plays their own deck with their own style, from aggro to control, and the six Keepers get harder in order: the last plays the strongest deck in the city.",
    ],
  },
  {
    q: "What's there to do outside duels?",
    a: [
      "Explore six districts and the roads between them, visit shops, cafés and venues, make friends, take on side duels, and furnish a place of your own. A phone keeps your contacts, saves and quests.",
    ],
  },
  {
    q: "Can I use a controller?",
    a: [
      "Yes. Keyboard and mouse or an Xbox-layout gamepad, and a Steam Controller works through Steam Input. On the card screens the left stick drives a pointer, and prompts switch to your pad's buttons once you use it.",
    ],
  },
  {
    q: "What platforms will it run on?",
    a: ["It's built in Godot, which runs on Windows, macOS and Linux. Development and testing happen on Windows."],
  },
  {
    q: "Does this game use AI?",
    a: [
      "Yes. It's a side project by one developer, and AI tools are used for the art and to help build it, which is how it moves as fast as it does.",
    ],
  },
  {
    q: "How can I support it?",
    a: ["Patreon. Patrons help shape where the game goes, and higher tiers get early builds."],
  },
];
