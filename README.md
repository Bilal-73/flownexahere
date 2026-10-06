# FlowNexa website

Source for [flownexahere.live](https://flownexahere.live), the site of FlowNexa, an AI engineering agency.

- **Stack:** [Astro](https://astro.build) (static output) + TypeScript + Tailwind CSS v4. No client framework; a few lines of vanilla TypeScript handle the menu, filters, forms and analytics consent.
- **Hosting:** Netlify (free tier). Forms: Netlify Forms. Analytics: Cloudflare Web Analytics (free, cookieless), optional GA4.
- Every page is pre-rendered HTML, so search engines and link previews (LinkedIn, Fiverr, WhatsApp) see the full content.

## Local setup

Requires Node.js 22.12+.

```bash
npm install
npm run dev        # http://localhost:4321 (drafts visible, with a yellow DRAFT banner)
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

## Project layout

```
src/
  config/site.ts          ← contact details, socials, pricing, toggles, FAQ, CricNexa copy
  content/projects/*.md   ← one file per project / case study (see docs/ADDING_A_PROJECT.md)
  content/services/*.md   ← the four service packages (prices come from site.ts)
  content/blog/           ← blog-ready collection (no public route yet)
  content.config.ts       ← Zod schemas for the collections
  pages/                  ← routes: /, /work, /work/[slug], /services, /about, /contact,
                             /cricnexa, /privacy, /thanks, 404, robots.txt, og/*.png
  components/             ← layout pieces, forms, cards; components/sections/ = page sections
  scripts/site.ts         ← progressive enhancements (forms, menu, consent, CTA tracking)
  styles/global.css       ← brand tokens (light + dark) and base styles
public/                   ← favicons and static files copied as-is
netlify.toml              ← build settings, redirects, headers
```

## Editing content

| To change… | Edit |
| --- | --- |
| Email, WhatsApp, booking link, socials | `src/config/site.ts` → `contact`, `social` |
| Prices and timelines | `src/config/site.ts` → `pricing.packages` |
| Founding-client banner on/off | `src/config/site.ts` → `foundingOffer.enabled` |
| FAQ, process steps, skills, credentials, team | `src/config/site.ts` |
| Service package copy | `src/content/services/*.md` |
| CricNexa teaser | `src/config/site.ts` → `cricnexa` |
| Projects | `src/content/projects/*.md`, see [docs/ADDING_A_PROJECT.md](docs/ADDING_A_PROJECT.md) |

Values starting with `TODO` are placeholders: links with a TODO value are hidden in production and flagged in dev. The full list is in [REVIEW_NEEDED.md](REVIEW_NEEDED.md).

## Deploying to Netlify

1. In Netlify: **Add new site → Import an existing project →** pick this GitHub repo.
2. Netlify reads `netlify.toml`: build command `npm run build`, publish directory `dist`, Node 22. Nothing else to configure.
3. Set the production branch (Site configuration → Build & deploy → Branches) to the branch you merge into, usually `main`.
4. Domain: Domain management → add `flownexahere.live` (already pointed at Netlify if the old site was live there). HTTPS is automatic.

Old URLs from the previous site (`/portfolio`, `/portfolio/<slug>`, `/team`) are 301-redirected in `netlify.toml`.

## Environment variables

All optional. Set them in **Netlify → Site configuration → Environment variables**, then redeploy (they are read at build time). For local testing, copy `.env.example` to `.env`.

| Variable | Purpose | Where to get it |
| --- | --- | --- |
| `PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics (free, no cookies). If empty, nothing loads. | Cloudflare dashboard (free account) → **Analytics & Logs → Web Analytics → Add a site** → enter `flownexahere.live` → choose the manual JavaScript snippet → copy the `token` value from `data-cf-beacon='{"token": "…"}'`. Your DNS does not need to be on Cloudflare. |
| `PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`). Off by default. When set, GA4 loads only after the visitor clicks "Allow analytics". | [analytics.google.com](https://analytics.google.com) → Admin → Data streams → Web → Measurement ID. |

Paid Netlify Analytics is not used.

**CTA tracking:** any element with a `data-track="name"` attribute sends a `cta_click` event to GA4 (only when GA4 is loaded and consented; otherwise a no-op). Form submissions send `form_submit`; video plays send `video_play`.

## Forms (Netlify Forms)

Two forms are detected automatically at deploy time because they're plain HTML in the build:

- `contact`: home, /contact, /services, /about
- `cricnexa-waitlist`: /cricnexa

Spam protection: a hidden honeypot field (`bot-field`) plus Netlify's built-in spam filter. With JavaScript, forms submit in place and show a success message; without it they post normally and land on `/thanks/`.

**Turn on email notifications (do this once):** Netlify → your site → **Forms** → enable form detection if asked → **Form notifications → Add notification → Email notification** → event "New form submission", form "Any form" (or one per form) → email `flownexahere@gmail.com`. Free tier: 100 submissions/month.

## Quality checks

- `npm run build` runs `astro check` (TypeScript) before building, and content schemas fail the build on bad frontmatter.
- Lighthouse (local production preview, Oct 2026): 100 / 100 / 100 / 100 (Performance, Accessibility, Best Practices, SEO) on the home page and `/work/salesmint/` (now `/work/posnexa/`), mobile and desktop.

## Adding interactivity later

If a real interactive demo (e.g. an embedded chatbot widget) needs a component framework, add React as an island:

```bash
npx astro add react
```

Then use it with `client:visible` only where needed, so the rest of the site stays zero-JS.

## History

The previous React/TanStack single-page app was removed in this migration; it remains in git history (see the commit before "Remove legacy SPA"). Rationale and decisions: [MIGRATION_PLAN.md](MIGRATION_PLAN.md).
