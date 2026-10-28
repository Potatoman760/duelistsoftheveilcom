/**
 * Single place for the handful of facts that live outside the design:
 * links, the studio, and the strings shown in the footer.
 * Everything marked TODO is a real-world value I could not invent.
 */
export const site = {
  name: "Bloom Wars: Duelists of the Veil",
  /** Used where the full title would not fit: the header, the tab suffix. */
  shortName: "Bloom Wars",
  tagline: "A card-battling RPG adventure",
  description:
    "Walk the city, collect cards, build decks and duel your way up the Keeper circuit, until the card game you love starts leaking into the real world. A top-down RPG adventure built around a full trading card game.",

  /** TODO: these are Breedhaven's Patreon and Discord; swap in Bloom Wars' own if it gets them. */
  patreonUrl:
    "https://patreon.com/Potatoman760?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",

  discordUrl: "https://discord.gg/BsgA9Tb4F",

  /** TODO: the itch.io or Steam page, once there is one. "#" renders as a placeholder. */
  storeUrl: "#",

  studio: "Potatoman760",
} as const;

export interface SiteLink {
  label: string;
  href: string;
  /** Renders with the dashed "still to fill in" treatment. */
  placeholder?: boolean;
  /** Brand mark drawn before the label. */
  icon?: "discord";
}

/** Shown in the footer under "Elsewhere". Drop an entry to hide it. */
export const links: SiteLink[] = [
  { label: "Patreon", href: site.patreonUrl },
  { label: "Discord", href: site.discordUrl, icon: "discord" },
  { label: "Store page (soon)", href: site.storeUrl, placeholder: site.storeUrl === "#" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "How to play", href: "/how-to-play/" },
  { label: "Story", href: "/story/" },
  { label: "FAQ", href: "/faq/" },
] as const;
