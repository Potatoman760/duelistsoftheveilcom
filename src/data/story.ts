import type { ImageMetadata } from "astro";

// Story art from the game project: game/assets/art/scenes/.
import officeSkyline from "../assets/scenes/office-skyline.webp";
import sylvieMap from "../assets/scenes/photo-sylvie-map.webp";
import lightsOut from "../assets/scenes/scene-lights-out.webp";
import anchorReseated from "../assets/scenes/scene-anchor-reseated.webp";
import cityRemade from "../assets/scenes/scene-city-remade.webp";

export interface Act {
  /** "Prologue", "Act I"... */
  number: string;
  title: string;
  body: string;
  art: ImageMetadata;
  alt: string;
}

/** The story, act by act, spoiler-light. Follows docs/story/outline.md. */
export const acts: Act[] = [
  {
    number: "Prologue",
    title: "Starter Deck",
    body: "A Friday duel against Cade at MB Collectibles teaches you the game. That night, a woman in black armour visits your dreams. In the morning, her card is on your pillow, and you don't own it.",
    art: officeSkyline,
    alt: "A city of glass towers at sunset, seen from high above",
  },
  {
    number: "Act I",
    title: "Small Things",
    body: "You set out to win the Seedblossom Keeper circuit: six rings across six districts. Cards warm in your hand. A printer prints the same card over and over. Every strange thing has an ordinary explanation, and you're the only one keeping a list.",
    art: sylvieMap,
    alt: "A hand-drawn map of the city with six districts circled in red",
  },
  {
    number: "Act II",
    title: "Strange Things",
    body: "A wolf made of brambles stalks Riverside Park, and fades when you beat it in a duel. The news starts calling them Bloom events. Then you win the sixth ring, the six rings meet on one table, and every light in the city goes out.",
    art: lightsOut,
    alt: "A packed arena in darkness, with six rings glowing on a table at its centre",
  },
  {
    number: "Act III",
    title: "The Bleed",
    body: "The rings were keys, the card shops sit on ancient anchor-stones, and the Gilded Court is coming through. Your rivals become allies, and a duel is the only way to send what crosses back.",
    art: anchorReseated,
    alt: "A man and a woman press their hands to a standing stone carved with glowing runes",
  },
  {
    number: "Act IV",
    title: "The Veil",
    body: "Sovereign Morthaul begins pulling Seedblossom into the Dreaming's shape. The final run goes down from the Gloaming to the deepest anchor of all.",
    art: cityRemade,
    alt: "A city street overgrown with giant glowing flowers under a violet sky",
  },
];
