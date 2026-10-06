// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical origin. Change here if the domain ever changes.
const SITE = "https://flownexahere.live";

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  image: {
    // Responsive srcset by default for every <Image>/<Picture>.
    layout: "constrained",
  },
  integrations: [
    sitemap({
      // Utility pages that shouldn't be indexed.
      filter: (page) => !/\/(thanks|404)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
