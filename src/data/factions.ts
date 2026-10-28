/**
 * The six factions of Bloom Wars: The Veil. Names, mottos and colours follow
 * the game's lexicon (game/data/lexicon.json) and its aspect sigils
 * (game/assets/ui/aspects/*.svg), whose paths are copied here as-is.
 */
export type FactionId = "verdant" | "iron" | "unbound" | "somnial" | "astral" | "gilded";

export interface Faction {
  id: FactionId;
  name: string;
  motto: string;
  /** One line on how the faction plays. */
  playstyle: string;
  /** The beasts it fields in the Dreaming. */
  beasts: string;
  /** CSS colour token. */
  color: string;
  /** The sigil's SVG children on a 24x24 grid, stroked in the faction colour. */
  sigil: string;
}

export const factions: Faction[] = [
  {
    id: "verdant",
    name: "Verdant Covenant",
    motto: "Growth, life, transformation",
    playstyle: "Big bodies, healing and patience. Outlast the other side.",
    beasts: "Thorn ravens, moss stags, bramble wolves",
    color: "var(--verdant)",
    sigil: '<path d="M12 21v-9"/><path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7z"/><path d="M12 14c0-3-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5z"/>',
  },
  {
    id: "iron",
    name: "Iron Syndicate",
    motto: "Engineering, order, ingenuity",
    playstyle: "Ramp into resources, then land the biggest threats in the set.",
    beasts: "Armored wyverns, iron-scaled dragons",
    color: "var(--iron)",
    sigil: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  },
  {
    id: "unbound",
    name: "Unbound",
    motto: "Freedom, speed, improvisation",
    playstyle: "Cheap units, raids and burn. Hit the Anchor early and often.",
    beasts: "Flame falcons, fire imps, fang wyverns",
    color: "var(--unbound)",
    sigil: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2.5-5 .5 2 1.5 2.5 2.5 2.5 0-3-1-5 0-7.5z"/>',
  },
  {
    id: "somnial",
    name: "Somnial Veil",
    motto: "Dreams, illusion, transformation",
    playstyle: "Tricks, ambushes and tempo. Never quite where you expect.",
    beasts: "Shadow-stalkers, mirror-wraiths, mimics",
    color: "var(--somnial)",
    sigil: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/>',
  },
  {
    id: "astral",
    name: "Astral Collegium",
    motto: "Knowledge, memory, mastery",
    playstyle: "The heroic alignment. Pairs with any of the four above.",
    beasts: "Pegasi, starlit griffons, a phoenix-titan",
    color: "var(--astral)",
    sigil: '<path d="M12 3l2.4 5.6 6 .6-4.6 4 1.4 6-5.2-3.2-5.2 3.2 1.4-6-4.6-4 6-.6z"/>',
  },
  {
    id: "gilded",
    name: "Gilded Court",
    motto: "Ambition, influence, control",
    playstyle: "The villainous alignment, and the faction behind the story's threat.",
    beasts: "Nightmare dragons, the shadow-basilisk",
    color: "var(--gilded)",
    sigil: '<path d="M3 8l4 4 5-6 5 6 4-4-2 10H5z"/><path d="M5 21h14"/>',
  },
];

export const factionById = Object.fromEntries(factions.map((f) => [f.id, f])) as Record<FactionId, Faction>;
