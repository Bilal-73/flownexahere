# Adding a project (about 5 minutes)

Every project is one Markdown file in `src/content/projects/`. The file name becomes the URL:
`src/content/projects/invoice-bot.md` → `https://flownexahere.live/work/invoice-bot/`.

## 1. Create the file (30 seconds)

```bash
npm run new:project -- invoice-bot "Invoice Bot for a Bookkeeper"
```

This copies `src/content/projects/_template.md`, sets the title and date, marks it `status: draft`, and creates `src/assets/projects/invoice-bot/` for images. (You can also copy `_template.md` by hand.)

## 2. Add images (1 minute)

- Put a cover image at `src/assets/projects/invoice-bot/cover.png` (about 1260×768 works well; any size is optimised automatically to AVIF/WebP).
- Uncomment in the frontmatter:

  ```yaml
  cover: ../../assets/projects/invoice-bot/cover.png
  coverAlt: "Dashboard showing extracted invoice totals"   # describe the image for screen readers
  ```

- Optional: `banner` (wide image for the top of the case study) and `gallery` (extra screenshots, each with `alt`).
- No image yet? Leave `cover` out; a branded placeholder is shown.

## 3. Fill in the frontmatter (2 minutes)

| Field | What to put |
| --- | --- |
| `summary` | One or two sentences. Used on cards, Google results and the share image. Max 240 characters. |
| `tag` | Short label above the title, e.g. "Document AI". |
| `services` | One or more of `rag-chatbot`, `ai-agent`, `workflow-automation`, `data-insights`, `custom-software`, `machine-learning`. Drives the /work filter. |
| `tech` | e.g. `[Python, n8n, OpenAI API]`. Drives the tech filter. |
| `type` | `client` **only** for paid client work you're allowed to show; otherwise `demo`, `product` or `internal`. |
| `status` | `draft` (hidden in production) → `demo` / `live` / `in-development` when ready. |
| `featured` | `true` to show on the home page (the first 6 by `order` are shown). |
| `order` | Lower numbers appear first. |
| `links` | Optional `demo`, `repo`, `video` (YouTube/Vimeo URL, loads only when clicked). |
| `facts` | Optional key facts row, e.g. `- { label: "Industry", value: "Accounting" }`. |
| `caseStudy` | `false` for a card without its own page. |

The build fails with a clear message if a required field is missing or misspelled, so you can't publish a broken entry.

## 4. Write the case study (1–2 minutes for a first pass)

Keep the template headings: **Problem → What we built → How it works → Tech → Result**. The page adds the call-to-action, tech chips, video and gallery automatically.

Honesty rules: label demos as demos, never invent clients, testimonials, logos or numbers. If you don't have a metric, leave it out.

## 5. Preview and publish

```bash
npm run dev          # http://localhost:4321/work/invoice-bot/  (drafts are visible here, with a yellow banner)
```

When it looks right, change `status: draft` to `status: demo` (or `live`), commit and push. Netlify rebuilds automatically; the project appears on /work, in the sitemap, and gets its own share image at `/og/work/invoice-bot.png`.
