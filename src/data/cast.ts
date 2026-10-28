import type { ImageMetadata } from "astro";
import type { FactionId } from "./factions";

// Portraits lifted from the game project: game/assets/art/characters/<id>/portrait.webp.
// Bios follow game/data/characters/<id>.json and docs/story/outline.md.
import yuliaArt from "../assets/cast/yulia.webp";
import sylvieArt from "../assets/cast/sylvie.webp";
import marenArt from "../assets/cast/maren.webp";
import caelwenArt from "../assets/cast/caelwen.webp";
import seraphineArt from "../assets/cast/seraphine.webp";
import morwennaArt from "../assets/cast/morwenna.webp";
import playerArt from "../assets/cast/player.webp";
import cadeArt from "../assets/cast/cade.webp";
import elowenArt from "../assets/cast/elowen.webp";
import mabelArt from "../assets/cast/mabel.webp";
import sableArt from "../assets/cast/sable.webp";
import isoldeArt from "../assets/cast/isolde.webp";
import wolfArt from "../assets/cast/bramble-wolf.webp";
import malvorenArt from "../assets/cast/malvoren.webp";
import morthaulArt from "../assets/cast/morthaul.webp";
import ostraneArt from "../assets/cast/ostrane.webp";

export interface Keeper {
  id: string;
  /** Position on the circuit, 1 to 6. */
  ring: number;
  name: string;
  district: string;
  /** What the district is, in a few words. */
  spot: string;
  shop: string;
  blurb: string;
  /** Her deck's factions: the Anchor's first, then the leader's (game/data/decks.json). */
  deck: FactionId[];
  portrait: ImageMetadata;
}

/** The six Keepers of the Seedblossom circuit, in the order you face them. */
export const keepers: Keeper[] = [
  {
    id: "yulia",
    ring: 1,
    name: "Yulia",
    district: "Neon Row",
    spot: "The nightlife strip",
    shop: "Afterglow Games",
    blurb: "Runs the Friday tables at Afterglow and treats every duel like a party she's throwing.",
    deck: ["somnial", "gilded"],
    portrait: yuliaArt,
  },
  {
    id: "sylvie",
    ring: 2,
    name: "Sylvie Platt",
    district: "The Ironworks",
    spot: "The workshop yards",
    shop: "Gearbox Cards",
    blurb: "Builds tiny clockwork figures between customers, and plays a deck far louder than she is.",
    deck: ["unbound", "verdant", "gilded"],
    portrait: sylvieArt,
  },
  {
    id: "maren",
    ring: 3,
    name: "Maren",
    district: "Old Market",
    spot: "The Veyran quarter",
    shop: "Ribbon & Rune",
    blurb: "A foxkin in head-to-toe pink who pours tea between duels and is sharper than the frills suggest.",
    deck: ["iron", "verdant", "gilded"],
    portrait: marenArt,
  },
  {
    id: "caelwen",
    ring: 4,
    name: "Caelwen",
    district: "Cathedral Quarter",
    spot: "The old library district",
    shop: "The Gilded Page",
    blurb: "An elf of a hundred and thirty-two who keeps an old map of the city that nobody else can read.",
    deck: ["iron", "verdant", "gilded"],
    portrait: caelwenArt,
  },
  {
    id: "seraphine",
    ring: 5,
    name: "Seraphine",
    district: "Crownhill",
    spot: "The royal district",
    shop: "Crown & Card",
    blurb: "The newly crowned queen, who plays in a hooded cloak that fools no one.",
    deck: ["iron", "unbound", "astral"],
    portrait: seraphineArt,
  },
  {
    id: "morwenna",
    ring: 6,
    name: "Morwenna",
    district: "The Gloaming",
    spot: "The old gothic quarter",
    shop: "Black Lantern Games",
    blurb: "Holds the last ring, plays the strongest deck in the city, and has been waiting for you.",
    deck: ["iron", "somnial", "gilded"],
    portrait: morwennaArt,
  },
];

export interface Character {
  id: string;
  name: string;
  /** Who they are to you, shown under the name. */
  role: string;
  /** The kicker above the name in the profile. */
  side: "You" | "Friend" | "Rival" | "Ally" | "Wild" | "The Gilded Court";
  blurb: string;
  /** Card ground: [top, bottom] of a 163deg gradient, behind the cut-out portrait. */
  tint: [string, string];
  portrait: ImageMetadata;
}

/** The friends, rivals and threats the carousel shows, in order. */
export const characters: Character[] = [
  {
    id: "player",
    name: "You",
    role: "IT support, card player",
    side: "You",
    blurb:
      "Twenty-four, fixing printers in a glass tower by day and spending every evening and paycheck on Bloom Wars. Your starter deck is Rowan Brightwell. You name him.",
    tint: ["#3d4f6e", "#0e1320"],
    portrait: playerArt,
  },
  {
    id: "cade",
    name: "Cade",
    role: "Best friend and rival",
    side: "Friend",
    blurb:
      "Your best friend since school. Plays the same aggro deck from the starter box, refuses to change it, and keeps a tally on his phone of every game he's lost to you.",
    tint: ["#7a3a32", "#200d0b"],
    portrait: cadeArt,
  },
  {
    id: "mabel",
    name: "Mabel",
    role: "Owner, MB Collectibles",
    side: "Ally",
    blurb:
      "Runs the card shop on Lantern Row where it all starts. Sells you packs, hosts Friday duels, and knows more about what sits under her shop than she lets on.",
    tint: ["#7a5230", "#1f140a"],
    portrait: mabelArt,
  },
  {
    id: "elowen",
    name: "Elowen",
    role: "Bloom Wars streamer",
    side: "Rival",
    blurb:
      "Streams Bloom Wars most nights as elowen.exe to a small, devoted chat she calls her goblins. You meet her mid-stream, duel her live, and leave with her number.",
    tint: ["#5b3f7b", "#160f20"],
    portrait: elowenArt,
  },
  {
    id: "sable",
    name: "Sable",
    role: "Slime duelist",
    side: "Rival",
    blurb: "Holds court in the Lantern Row park and will duel anyone who sits down. A warm-up before the Keepers, and not an easy one.",
    tint: ["#2f4f8a", "#0a1226"],
    portrait: sableArt,
  },
  {
    id: "isolde",
    name: "Isolde Wren",
    role: "Designer of Bloom Wars",
    side: "Ally",
    blurb:
      "The woman who dreamed Bloom Wars, now a recluse in the scrapyards. She has been waiting for someone the anchors would listen to.",
    tint: ["#5b5f3a", "#16170c"],
    portrait: isoldeArt,
  },
  {
    id: "bramble-wolf",
    name: "Bramble Wolf",
    role: "The first wild beast",
    side: "Wild",
    blurb: "Something from the cards, prowling Riverside Park. It can't be fought with fists. It can be beaten in a duel, and it fades when it loses.",
    tint: ["#2f5a35", "#0a160c"],
    portrait: wolfArt,
  },
  {
    id: "ostrane",
    name: "Director Ostrane",
    role: "Gilded Court lieutenant",
    side: "The Gilded Court",
    blurb: "The first of the Court to come through, up out of Mabel's cellar. Aspiring to authority, and very close to it.",
    tint: ["#6b6a7a", "#16151c"],
    portrait: ostraneArt,
  },
  {
    id: "malvoren",
    name: "Malvoren",
    role: "Dread Lady of Warlocks",
    side: "The Gilded Court",
    blurb:
      "She finds you first, in your dreams, and leaves her card on your pillow. She is very interested in you, and not for your deckbuilding.",
    tint: ["#6e1f2a", "#1a070b"],
    portrait: malvorenArt,
  },
  {
    id: "morthaul",
    name: "Sovereign Morthaul",
    role: "Ruler of the Gilded Court",
    side: "The Gilded Court",
    blurb: "Means to remake the waking city in the Dreaming's shape: a Seedblossom that runs on Bloom Wars, ruled by the Court.",
    tint: ["#3e3156", "#0e0a16"],
    portrait: morthaulArt,
  },
];
