import type { ImageMetadata } from "astro";

// Captured from the game at 1920x1080 with its dev flags
// (BreedhavenCard/game/autoload/DevTools.gd: --battle, --packs, --map, --shot).
import duelMidgame from "../assets/screenshots/duel-midgame.jpg";
import duelOpening from "../assets/screenshots/duel-opening-hand.jpg";
import cardPreview from "../assets/screenshots/card-preview.jpg";
import packOpening from "../assets/screenshots/pack-opening.jpg";
import deckBuilder from "../assets/screenshots/deck-builder.jpg";
import mbCollectibles from "../assets/screenshots/mb-collectibles.jpg";
import lanternRow from "../assets/screenshots/lantern-row.jpg";
import neonRow from "../assets/screenshots/neon-row.jpg";
import malvorenDream from "../assets/screenshots/malvoren-dream.jpg";

export interface Screenshot {
  image: ImageMetadata;
  title: string;
  /** Which part of the game it shows. */
  mode: "Duel" | "Cards" | "Adventure" | "Story";
  alt: string;
}

export const screenshots: Screenshot[] = [
  {
    image: duelMidgame,
    title: "Mid-duel against Elowen",
    mode: "Duel",
    alt: "A duel in progress against Elowen: units facing off in the Waking World, a pegasus in the Dreaming, and the two Anchors in the middle",
  },
  {
    image: packOpening,
    title: "A First Bloom booster",
    mode: "Cards",
    alt: "Sixteen cards from a freshly opened booster laid out in two rows, with a leader and an Anchor first",
  },
  {
    image: mbCollectibles,
    title: "MB Collectibles",
    mode: "Adventure",
    alt: "A top-down card shop interior with a glass counter, shelves of cards and Mabel speaking in a dialogue box",
  },
  {
    image: deckBuilder,
    title: "The deck builder",
    mode: "Cards",
    alt: "The deck builder: faction, cost and type filters on the left, a grid of cards, and the deck list on the right",
  },
  {
    image: neonRow,
    title: "Neon Row at night",
    mode: "Adventure",
    alt: "A top-down neon-lit street with a tattoo parlour, a record shop and people out for the night",
  },
  {
    image: cardPreview,
    title: "Malvoren, up close",
    mode: "Cards",
    alt: "The Malvoren leader card shown full size, beside her deployed unit side",
  },
  {
    image: duelOpening,
    title: "Opening hand against Cade",
    mode: "Duel",
    alt: "The start of a duel against Cade: an empty board, the opening hand fanned along the bottom, and a keep or mulligan choice",
  },
  {
    image: lanternRow,
    title: "Lantern Row",
    mode: "Adventure",
    alt: "A top-down street in Seedblossom with brick shopfronts, street lamps and a quest tracker",
  },
  {
    image: malvorenDream,
    title: "A visitor in your dreams",
    mode: "Story",
    alt: "Malvoren in black armour in front of a dreamscape of floating cards and a glowing horizon",
  },
];
