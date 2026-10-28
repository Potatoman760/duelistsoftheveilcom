// Rebuilds description.paste.txt from description.html: one line per block,
// image tags on a single line with no self-closing slash. Images are served
// from public/itch/ on the live site, so deploy before pasting.
// Run: node itch/make-paste.cjs
const fs = require("fs");
const path = require("path");

const HOST = "https://www.duelistsoftheveil.com/itch/";

const html = fs.readFileSync(path.join(__dirname, "description.html"), "utf8");

let p = html
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*\/>/g, ">")
  .replace(/>\s+</g, "><")
  .replace(/<(p|li|h2|h3)>\s+/g, "<$1>")
  .replace(/\s+<\/(p|li|h2|h3)>/g, "</$1>")
  .replace(/&middot;<a/g, "&middot; <a")
  .replace(/(<\/p>|<\/h2>|<\/h3>|<\/ul>|<\/ol>|<hr>|<ul>|<ol>|<\/li>)/g, "$1\n")
  .trim();

fs.writeFileSync(path.join(__dirname, "description.paste.txt"), p + "\n");

const esc = HOST.replace(/[.\/]/g, "\\$&");
const imgs = [...p.matchAll(/<img [^>]*>/g)].map((m) => m[0]);
const bad = imgs.filter((tag) => !new RegExp(`^<img src="${esc}[\\w.-]+" alt="[^"<>]*">$`).test(tag));
console.log(`description.paste.txt: ${p.split("\n").length} lines, ${imgs.length} images`);
for (const tag of bad) console.log("check this tag:", tag);
for (const m of p.matchAll(new RegExp(`${esc}([\\w.-]+)`, "g"))) {
  const f = m[1];
  if (!fs.existsSync(path.join(__dirname, "..", "public", "itch", f))) console.log("missing from public/itch:", f);
}
