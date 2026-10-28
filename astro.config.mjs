// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Used for canonical URLs, sitemaps and RSS. Update if the domain differs.
	site: 'https://bloomwars.com',

	// Prerender everything to plain HTML. No adapter, no Cloudflare Functions —
	// `dist/` is uploaded to Cloudflare Pages as-is.
	output: 'static',

	build: {
		// /about -> dist/about/index.html, which Cloudflare Pages serves directly.
		format: 'directory',
	},
});
