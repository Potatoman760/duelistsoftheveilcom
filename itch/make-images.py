# Rebuilds public/itch/ from the site's own art: screenshots and story art
# resized for the itch.io column, plus two composites (the Keepers lineup and
# a strip of card art). Run: python -I itch/make-images.py
import os
from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
ASSETS = os.path.join(ROOT, "src", "assets")
OUT = os.path.join(ROOT, "public", "itch")

NIGHT = (17, 12, 29)
NIGHT_3 = (43, 34, 70)
VEIL_DEEP = (79, 42, 163)


def src(*parts):
    return os.path.join(ASSETS, *parts)


def save(im, name, **opts):
    path = os.path.join(OUT, name)
    im.save(path, **opts)
    print(f"{name}: {im.size[0]}x{im.size[1]}, {os.path.getsize(path) // 1024} KB")


def fit_width(im, width):
    if im.width <= width:
        return im
    return im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)


def glow_ground(w, h):
    """Night fading up into a violet glow at the bottom centre, like the site's dark bands."""
    ground = Image.new("RGB", (w, h), NIGHT)
    glow = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(glow)
    for i in range(60):
        t = i / 60
        rx, ry = w * (0.75 - 0.5 * t), h * (1.1 - 0.7 * t)
        d.ellipse([w / 2 - rx, h - ry, w / 2 + rx, h + ry], fill=round(150 * t))
    return Image.composite(Image.new("RGB", (w, h), VEIL_DEEP), ground, glow)


def screenshot(name, out):
    im = Image.open(src("screenshots", name)).convert("RGB")
    save(fit_width(im, 1600), out, quality=82, method=6)


def scene(name, out):
    im = Image.open(src("scenes", name)).convert("RGB")
    save(fit_width(im, 1280), out, quality=84, optimize=True, progressive=True)


def logo():
    im = Image.open(src("brand", "bloom-wars-logo.png")).convert("RGBA")
    save(fit_width(im, 1200), "logo.webp", quality=90, method=6)


def keepers():
    """The six Keepers in ring order, overlapping, cut-outs on a night ground."""
    ids = ["yulia", "sylvie", "maren", "caelwen", "seraphine", "morwenna"]
    w, h = 1280, 520
    canvas = glow_ground(w, h).convert("RGBA")
    figure_h = 600  # taller than the canvas, so the figures are cropped at the knee
    step = (w - 40) / len(ids)
    for i, cid in enumerate(ids):
        fig = Image.open(src("cast", f"{cid}.webp")).convert("RGBA")
        fig = fig.resize((round(fig.width * figure_h / fig.height), figure_h), Image.LANCZOS)
        cx = 20 + step * (i + 0.5)
        canvas.alpha_composite(fig, (round(cx - fig.width / 2), 14))
    save(canvas.convert("RGB"), "keepers.jpg", quality=86, optimize=True, progressive=True)


def cards():
    """A row of First Bloom card art with rounded corners."""
    ids = ["040", "051", "102", "138", "147", "185"]
    w, gap, pad = 1280, 14, 20
    cw = (w - 2 * pad - gap * (len(ids) - 1)) // len(ids)
    ch = round(cw * 1006 / 720)
    h = ch + 2 * pad
    canvas = Image.new("RGB", (w, h), NIGHT)
    mask = Image.new("L", (cw, ch), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, cw - 1, ch - 1], radius=12, fill=255)
    border = Image.new("RGB", (cw + 4, ch + 4), NIGHT_3)
    bmask = Image.new("L", border.size, 0)
    ImageDraw.Draw(bmask).rounded_rectangle([0, 0, cw + 3, ch + 3], radius=14, fill=255)
    x0 = (w - (cw * len(ids) + gap * (len(ids) - 1))) // 2
    for i, cid in enumerate(ids):
        art = Image.open(src("cards", f"sor-{cid}.webp")).convert("RGB").resize((cw, ch), Image.LANCZOS)
        x = x0 + i * (cw + gap)
        canvas.paste(border, (x - 2, pad - 2), bmask)
        canvas.paste(art, (x, pad), mask)
    save(canvas, "cards.jpg", quality=86, optimize=True, progressive=True)


def main():
    os.makedirs(OUT, exist_ok=True)
    logo()
    screenshot("malvoren-dream.jpg", "malvoren-dream.webp")
    screenshot("duel-midgame.jpg", "duel.webp")
    screenshot("pack-opening.jpg", "pack-opening.webp")
    screenshot("deck-builder.jpg", "deck-builder.webp")
    screenshot("card-preview.jpg", "card-preview.webp")
    screenshot("mb-collectibles.jpg", "mb-collectibles.webp")
    screenshot("neon-row.jpg", "neon-row.webp")
    scene("scene-city-remade.webp", "city-remade.jpg")
    scene("scene-lights-out.webp", "lights-out.jpg")
    keepers()
    cards()


if __name__ == "__main__":
    main()
