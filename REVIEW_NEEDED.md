# Review needed (owner checklist)

Everything below is a placeholder, an assumption, or migrated content whose label needs your confirmation. Nothing here was invented as fact; where a value was needed to make the page work, it is marked so you can replace it.

Files to edit: `src/config/site.ts` (config), `src/content/projects/*.md` (projects), `src/content/services/*.md` (packages).

## 1. Placeholders in `src/config/site.ts`

Links with a `TODO` value are **hidden in production** and shown with a yellow TODO tag in `npm run dev`.

| Key | Current value | What to do |
| --- | --- | --- |
| `contact.bookingUrl` | `TODO_BOOKING_URL` | Add a free booking link (Cal.com free plan, Calendly free, or a Google Calendar appointment page). Until then, "Book a free call" buttons open the contact form with "Free 15-min call" preselected. |
| `contact.whatsappNumber` | `923174100973` | Carried over from the old site's footer. It is also the number listed as the founder's personal phone on the old Team page. Confirm it is the agency WhatsApp, or replace it with a WhatsApp Business number. |
| `social[LinkedIn]` | `TODO_AGENCY_LINKEDIN_URL` | Agency LinkedIn page URL (not personal). |
| `social[Instagram]` | `TODO_AGENCY_INSTAGRAM_URL` | Agency Instagram URL. |
| `social[Fiverr]` | `TODO_FIVERR_PROFILE_URL` | Fiverr profile, or delete the line. |
| `social[Contra]` | `TODO_CONTRA_PROFILE_URL` | Contra profile, or delete the line. |
| `social[PeoplePerHour]` | `TODO_PEOPLEPERHOUR_PROFILE_URL` | PeoplePerHour profile, or delete the line. |
| `social[Freelancer]` | `TODO_FREELANCER_PROFILE_URL` | Freelancer profile, or delete the line. |
| `credentials` | empty (strip hidden) | Add your DataCamp certifications with the **exact** certificate titles and verification URLs. |

## 2. Business decisions to confirm (shown on the site)

| Item | Where | Current text / value |
| --- | --- | --- |
| **Pricing** (placeholder numbers) | `pricing.packages` | RAG Chatbot from $300 (1–2 weeks) · Workflow Automation from $200 per workflow (3–10 days) · Data & AI Insights from $250 (1–2 weeks) · Custom Software from $600 (from 3 weeks). Currency USD. |
| Package scope | `src/content/services/*.md` | e.g. "Trained on up to 50 pages", "Dashboard with the 5–8 numbers that matter". Adjust to what you actually include. |
| Founding-client banner | `foundingOffer` | Enabled: "Taking 3 projects this month at founding-client pricing." Turn off (`enabled: false`) when it's no longer true. |
| Deposit policy | `faq` | "50% deposit, 50% at handover; platform orders follow the platform's protection." |
| Data policy | `faq` | "Keep data in your accounts where possible, never train public models on it, delete working copies after handover, happy to sign an NDA." |
| Code ownership | `faq` | "You own the code, workflow exports and admin access on final payment." |
| Process timelines | `process` | Discovery day 1–2, Build week 1–2, Review 2–3 days, Handover final day. |
| Reply time | `contact.replyTime` | "within 24 hours" (carried over from the old site). |
| Privacy retention | `src/pages/privacy.astro` | Enquiries deleted after 12 months if no project; waitlist emails deleted at launch or on request. |
| Founder story | `founder.story` | Short neutral text written from the old About page. Rewrite in your own words if you like. |
| Skills strip | `skills` | Python, n8n, LangChain, OpenAI API, Vector databases, FastAPI, WhatsApp API, PostgreSQL, React, Electron, Pandas, scikit-learn. Remove anything you don't actually use. |

## 3. Migrated projects: confirm type and status

None of the old copy names a client (the "Client Challenge" sections describe generic industry problems), so per the honesty rule **all are `type: demo`, `status: demo`**. If any was real paid client work you're allowed to show, change `type: client` (and consider adding what the client agreed you can say).

| Project | File | Type / status now | Notes |
| --- | --- | --- | --- |
| SalesMint: AI POS System | `salesmint.md` | demo / demo | Old page called it a "product". If it is your own product, use `type: product`. `tech` is empty because the old page named no technologies; the screenshot looks like a Windows desktop app. Is this the Electron POS? (see draft f) |
| Clinify: Clinic Workflow Automation | `clinify.md` | demo / demo | `tech: [n8n]` taken from the old card tag "Automation / n8n". |
| Ticket Automation | `ticket-automation.md` | demo / demo | Old copy said "n8n-style"; written here as n8n. Confirm. |
| AI Resume Classification & Details Extraction | `resume-screener.md` | demo / demo | |
| AIPHA: AI Fitness Assistant | `aipha.md` | demo / demo | Added the line "general wellness information, not medical advice". |
| AI-Based Virtual Fashion Stylist | `fashion-stylist.md` | demo / demo | |
| NeuroSymbolic VQA | `neurosymbolic-vqa.md` | demo / demo, card only | No images, no case study on the old site. |
| MediTranscribe | `meditranscribe.md` | demo / demo, card only | No images, no case study. |
| AuditX | `auditx.md` | demo / demo, card only | No images, no case study. |
| CricNexa | `cricnexa.md` | product / in-development | Links to /cricnexa. |

No dates, demo links, repos or videos existed for any project. Add `date`, `links.demo`, `links.repo` or `links.video` where you have them.

The old "Impact" bullets were rewritten as "designed to…" because no measured results were given. Replace them with real numbers only if you have them.

## 4. Draft case studies (hidden until you publish)

Each has `status: draft` and TODO sections. They show in `npm run dev` only.

| Draft | File |
| --- | --- |
| a. RAG chatbot for a business (demo placeholder) | `rag-chatbot-business.md` |
| b. n8n lead-capture automation | `n8n-lead-capture.md` |
| c. Local business lead scraper + gap analysis (sanitised sample only) | `local-lead-scraper.md` |
| d. Document extractor (PDF → JSON → Sheet) | `document-extractor.md` |
| e. Sales insights & forecasting dashboard (demo data) | `sales-insights-dashboard.md` |
| f. Offline/online POS (Electron) | `offline-online-pos.md` (may duplicate SalesMint; merge if so) |

## 5. Missing assets

| Asset | Status |
| --- | --- |
| Logo | Uses the orbital SVG mark already on the old site (`public/favicon.svg`, `src/components/Logo.astro`). The old `FlowNexalogo.png` was white-on-transparent and isn't used. Supply a master SVG wordmark if you have one. |
| General Sans font | Couldn't be downloaded (Fontshare blocked from the build environment). Site uses self-hosted Inter. To restore: add `GeneralSans-Variable.woff2` to `public/fonts/` and follow the note in `src/styles/global.css`. |
| Default OG image | Generated at build time (`/og/default.png`). Replace with a designed one by swapping the endpoint for a static `public/og/default.png` if you want. |
| Per-project OG images | Generated from title + cover. |
| Covers for card-only projects and drafts | Branded placeholder shown. Add `cover` images when available. |
| CricNexa visuals | Abstract graphic only (no fake screenshots). Add real screenshots when the product exists. |
| Team photos | Carried over (Bilal, Ijtaba, Usama). Personal emails, phones and social links from the old Team page were **removed** (agency site must not use personal accounts). |

## 6. Launch tasks (Netlify / DNS)

- [ ] Netlify → Forms → enable detection, then add an email notification to `flownexahere@gmail.com` (see README).
- [ ] Set `PUBLIC_CF_BEACON_TOKEN` (Cloudflare Web Analytics) in Netlify env vars and redeploy.
- [ ] (Optional) Set `PUBLIC_GA_ID` for GA4.
- [ ] Merge this branch into `main` (or set it as the production branch) and confirm the deploy.
- [ ] Check old links redirect: `/portfolio`, `/portfolio/salesmint`, `/team`.
- [ ] If the old Netlify Function env vars (`GMAIL_USER`, `GMAIL_PASSWORD`, `RESEND_API_KEY`) are set in Netlify, delete them: the function no longer exists. **Revoke that Gmail app password** in your Google account.
- [ ] Submit `https://flownexahere.live/sitemap-index.xml` in Google Search Console (free).
- [ ] Update the portfolio link on Fiverr, Freelancer, PeoplePerHour, Contra and LinkedIn, and test the preview card (LinkedIn Post Inspector).
