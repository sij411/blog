import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sij411.github.io/sij411",
  base: "sij411/",
  integrations: [mdx(), sitemap(), tailwind()],
});
