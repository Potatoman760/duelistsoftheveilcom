# duelistsoftheveil.com

Astro site for **Bloom Wars: Duelists of the Veil**, the card-battling RPG
adventure in `../BreedhavenCard`. Builds to fully static HTML and deploys to
Cloudflare Pages. Its structure follows `../breedhavencom`.

## Commands

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321`                       |
| `npm run build`   | Build static site to `./dist/`                       |
| `npm run preview` | Serve `./dist/` locally to check the built output    |
| `npm run check`   | Type-check `.astro` and `.ts` files                  |
| `npm run deploy`  | Build, then direct-upload `./dist/` to Cloudflare    |

## Pages

- `/`: hero with a fan of cards, the adventure and the card game side by side,
  the card gallery, the Keeper circuit, the six factions, characters, a story
  teaser, screenshots
- `/how-to-play/`: a round of a duel, the two worlds, the essentials, factions
- `/story/`: the prologue and four acts, then the Keepers
- `/faq/`

## Where the content lives

`.astro` files hold layout, not words. To change what the site says, edit these:

```
src/data/copy.ts         every heading, paragraph and button label
src/data/site.ts         links (Patreon, Discord, store page), studio name, nav
src/data/cards.ts        the card gallery (generated, see below)
src/data/factions.ts     the six factions: name, motto, colour, sigil
src/data/cast.ts         the six Keepers, and the friends and foes carousel
src/data/rules.ts        the How to Play steps and concepts
src/data/story.ts        the acts on the story page
src/data/screenshots.ts  the screenshot carousel
src/data/faq.ts          the FAQ, and how many start expanded
```

`copy.hero.pitch` is marked `rich` and rendered with `set:html`; it may carry a
little inline HTML. Headings that count things ("Six districts") read the count
from the data.

## Following the game

Everything on the site comes from `../BreedhavenCard`:

- **Cards**: `python -I scripts/gen_cards.py` writes `src/data/cards.ts` from
  `game/data/sets/sor.json` with `game/data/lexicon.json` applied, so names and
  rules text match the game, and copies the art from
  `game/assets/art/cards/SOR_###.webp`. Pick the cards in its `SHOWCASE` list. `CardFace.astro` draws the frame in CSS.
- **Factions**: names and mottos from the lexicon; colours and sigil paths from
  `game/assets/ui/aspects/*.svg`.
- **Characters**: portraits from `game/assets/art/characters/<id>/portrait.webp`;
  bios from `game/data/characters/<id>.json`. Keeper deck factions come from the
  leader and Anchor of their decks in `game/data/decks.json`.
- **Story art**: `game/assets/art/scenes/`.
- **Screenshots**: captured from the game with its dev flags, e.g.

  ```
  Godot_v4.7.2-stable_win64_console.exe --path game --resolution 1920x1080 -- --prologue=Ash --battle=elowen --autoplay --wait=25 --shot=out.png
  ```

  Dev-flag runs use `user://saves_dev/`, so they never touch real saves.

## Still to fill in

- `site.storeUrl`: the itch.io or Steam page. Until it's set, the footer shows
  it as a placeholder.
- `site.patreonUrl` and `site.discordUrl` currently point at Breedhaven's.
- `astro.config.mjs` `site` is `https://www.duelistsoftheveil.com`; `wrangler.jsonc`
  `name` assumes a `bloomwarscom` Pages project.
