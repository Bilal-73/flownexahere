import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Service tags used to filter /work and to link projects to packages. */
export const SERVICE_TAGS = [
  "rag-chatbot",
  "ai-agent",
  "workflow-automation",
  "data-insights",
  "custom-software",
  "machine-learning",
] as const;

export const SERVICE_TAG_LABELS: Record<(typeof SERVICE_TAGS)[number], string> = {
  "rag-chatbot": "RAG chatbot",
  "ai-agent": "AI agent",
  "workflow-automation": "Automation",
  "data-insights": "Data & insights",
  "custom-software": "Custom software",
  "machine-learning": "Machine learning",
};

/**
 * Projects / case studies. One Markdown file per project in src/content/projects.
 * The file name becomes the URL: src/content/projects/my-bot.md → /work/my-bot/.
 * See docs/ADDING_A_PROJECT.md.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences for cards, meta description and OG image. */
      summary: z.string().max(240),
      /** Short label shown above the title, e.g. "AI POS system". */
      tag: z.string().optional(),
      services: z.array(z.enum(SERVICE_TAGS)).min(1),
      tech: z.array(z.string()).default([]),
      /** client = paid client work the owner has confirmed; demo = built to show capability. */
      type: z.enum(["client", "demo", "product", "internal"]),
      /** draft = hidden from production builds, sitemap and OG images. */
      status: z.enum(["live", "demo", "in-development", "draft"]),
      featured: z.boolean().default(false),
      /** Lower numbers sort first. */
      order: z.number().default(100),
      /** Card / preview image. Optional for drafts; a branded placeholder is used instead. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Wide hero banner on the case-study page. */
      banner: image().optional(),
      bannerAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      links: z
        .object({
          demo: z.url().optional(),
          repo: z.url().optional(),
          /** YouTube or Vimeo URL. Rendered as a click-to-load, privacy-friendly embed. */
          video: z.url().optional(),
        })
        .default({}),
      /** Key facts row on the case-study page, e.g. Industry / Focus. */
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      /** false = card only (no /work/[slug] page). */
      caseStudy: z.boolean().default(true),
      /** Override where the card links to (e.g. "/cricnexa"). */
      href: z.string().optional(),
      date: z.coerce.date().optional(),
    }),
});

/** Service packages. Prices live in src/config/site.ts (pricing.packages[key]). */
const services = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/services" }),
  schema: z.object({
    key: z.enum(["rag-chatbot", "workflow-automation", "data-insights", "custom-software"]),
    title: z.string(),
    summary: z.string(),
    /** What the fixed-scope package includes. */
    includes: z.array(z.string()).min(1),
    /** Good fit for… */
    idealFor: z.string(),
    order: z.number(),
    /** Smaller "also available" card on the home page. */
    secondary: z.boolean().default(false),
    /** Matching tag on projects, used to show related work. */
    projectTag: z.enum(SERVICE_TAGS),
  }),
});

/** Blog-ready collection. No public route until the first non-draft post exists. */
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      draft: z.boolean().default(true),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { projects, services, blog };
