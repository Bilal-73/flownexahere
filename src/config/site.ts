/**
 * FlowNexa site configuration — the one file to edit for contact details,
 * pricing, toggles and copy that appears in several places.
 *
 * Conventions
 * - Any string starting with "TODO" is a placeholder. Links with a TODO value
 *   are hidden in production builds and shown with a visible TODO marker in
 *   `npm run dev`. Every TODO is listed in REVIEW_NEEDED.md.
 * - Never put personal accounts here: agency accounts only.
 * - Analytics IDs are NOT stored here; they come from environment variables
 *   (see .env.example and README.md). Only the variable names live here.
 */

export type ServiceKey = "rag-chatbot" | "workflow-automation" | "data-insights" | "custom-software";

export interface PackagePrice {
  /** Starting price, in `pricing.currency`. Edit freely. */
  from: number;
  /** Short note under the price, e.g. "one-off". */
  note: string;
  /** Typical delivery time shown on the card. */
  timeline: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Icon name from src/components/Icon.astro */
  icon: "linkedin" | "instagram" | "github" | "x" | "upwork" | "fiverr" | "link";
}

export const site = {
  name: "FlowNexa",
  legalName: "FlowNexa",
  url: "https://flownexahere.live",
  tagline: "AI chatbots and automations that handle your repetitive work",
  description:
    "FlowNexa is an AI engineering agency. We build RAG chatbots, AI agents, n8n and Python automations, data insights and custom software for small businesses and founders.",
  locale: "en",
  /** Where the agency is based (used in JSON-LD and the footer). */
  location: { country: "Pakistan", countryCode: "PK", servesWorldwide: true },

  contact: {
    /** Agency inbox. Rendered obfuscated (assembled by JS) to deter scrapers. */
    email: "flownexahere@gmail.com",
    /**
     * WhatsApp number in international format, digits only.
     * TODO(owner): confirm this is the agency WhatsApp (ideally WhatsApp Business),
     * not a personal number. See REVIEW_NEEDED.md.
     */
    whatsappNumber: "923174100973",
    whatsappDisplay: "+92 317 410 0973",
    whatsappMessage: "Hi FlowNexa, I'd like to talk about a project.",
    /**
     * Free booking link (e.g. Cal.com free plan or Google Calendar appointment page).
     * While this is a TODO, "Book a call" buttons go to the contact form instead.
     */
    bookingUrl: "TODO_BOOKING_URL",
    /** Expected reply time. Only promise what you can keep. */
    replyTime: "within 24 hours",
  },

  /** Agency social accounts (never personal ones). */
  social: [
    { label: "LinkedIn", href: "TODO_AGENCY_LINKEDIN_URL", icon: "linkedin" },
    { label: "Instagram", href: "TODO_AGENCY_INSTAGRAM_URL", icon: "instagram" },
    { label: "Fiverr", href: "TODO_FIVERR_PROFILE_URL", icon: "fiverr" },
    { label: "Contra", href: "TODO_CONTRA_PROFILE_URL", icon: "link" },
    { label: "PeoplePerHour", href: "TODO_PEOPLEPERHOUR_PROFILE_URL", icon: "link" },
    { label: "Freelancer", href: "TODO_FREELANCER_PROFILE_URL", icon: "link" },
  ] satisfies SocialLink[],

  /**
   * Environment variable NAMES for analytics. Values are read at build time
   * from Netlify → Site configuration → Environment variables.
   */
  analytics: {
    cloudflareTokenEnv: "PUBLIC_CF_BEACON_TOKEN",
    ga4IdEnv: "PUBLIC_GA_ID",
  },

  /** Founding-client offer banner on the home page. Set `enabled: false` to hide it. */
  foundingOffer: {
    enabled: true,
    text: "Founding-client pricing for our first 3 projects.",
    detail: "You pay the starting price; in return we ask for honest feedback we can quote.",
  },

  /** "Starting from" pricing. TODO(owner): confirm every number before launch. */
  pricing: {
    currency: "USD",
    currencySymbol: "$",
    packages: {
      "rag-chatbot": { from: 300, note: "fixed scope", timeline: "1–2 weeks" },
      "workflow-automation": { from: 200, note: "per workflow", timeline: "3–10 days" },
      "data-insights": { from: 250, note: "fixed scope", timeline: "1–2 weeks" },
      "custom-software": { from: 600, note: "quoted after a call", timeline: "from 3 weeks" },
    } satisfies Record<ServiceKey, PackagePrice>,
  },

  /** Process steps shown on the home and services pages. */
  process: [
    {
      title: "Discovery",
      time: "Day 1–2",
      body: "A free 15-minute call, then a short written scope: what we will build, what it connects to, what “done” means and the fixed price.",
    },
    {
      title: "Build",
      time: "Week 1–2",
      body: "We build on your real tools and data (or safe sample data) and share progress as we go, so there are no surprises at the end.",
    },
    {
      title: "Review",
      time: "2–3 days",
      body: "You test it. We fix what you find and tune answers or rules until it behaves the way your business needs.",
    },
    {
      title: "Handover",
      time: "Final day",
      body: "Code, credentials and a short walkthrough video or call. You own everything; we stay reachable for questions.",
    },
  ],

  /** FAQ. TODO(owner): confirm the policy answers (deposits, ownership). */
  faq: [
    {
      q: "How much does a project cost?",
      a: "Each package has a fixed “starting from” price shown on this page. After a short call we send a written scope with a fixed quote, so you know the total before any work starts.",
    },
    {
      q: "How long does it take?",
      a: "Most chatbot and automation packages ship in one to two weeks. Custom software takes longer; we give you a timeline in the written scope.",
    },
    {
      q: "What happens to my data?",
      a: "We only use the data needed for the project, keep it in your accounts wherever possible, never use it to train public models, and delete our working copies after handover. We are happy to sign an NDA.",
    },
    {
      q: "Who owns the code and workflows?",
      a: "You do. On final payment you receive the source code, workflow exports and admin access. Nothing is locked to our accounts.",
    },
    {
      q: "How do deposits work?",
      a: "We ask for a 50% deposit to book the work and the remaining 50% at handover, once you have reviewed it. Freelance-platform orders follow that platform’s payment protection instead.",
    },
    {
      q: "Can we work through Fiverr, Contra or another platform?",
      a: "Yes. If you found us on a freelance platform, we can run the project there. The scope and pricing stay the same.",
    },
  ],

  /**
   * Credentials strip on the About section. Use the exact wording of each
   * certificate; never embellish. Empty list = strip hidden.
   * TODO(owner): add DataCamp certifications, e.g.
   * { issuer: "DataCamp", title: "Exact certificate title", year: 2025, url: "https://www.datacamp.com/certificate/..." }
   */
  credentials: [] as { issuer: string; title: string; year?: number; url?: string }[],

  /** Founder / team block on About. Agency-safe info only (no personal contact details). */
  founder: {
    name: "Bilal Imran",
    role: "Founder & AI Engineer",
    story: [
      "I started FlowNexa to build AI that does real work for small teams: answering the same customer questions, moving data between tools, and turning spreadsheets into decisions.",
      "We treat every AI feature as a software engineering problem: clear inputs and outputs, fallbacks when the model is unsure, logging, and documentation you can hand to anyone. We work from Pakistan with clients worldwide.",
    ],
  },

  team: [
    { name: "Bilal Imran", role: "Founder & AI Engineer", photo: "bilal-imran" },
    { name: "Ijtaba Satti", role: "Co-Founder & Full Stack AI Developer", photo: "ijtaba-satti" },
    { name: "Usama Tahir", role: "AI Lead & ML Engineer", photo: "usama-tahir" },
  ],

  /** Tools shown in the skills strip. Only list tools you actually use. */
  skills: [
    "Python",
    "n8n",
    "LangChain",
    "OpenAI API",
    "Vector databases",
    "FastAPI",
    "WhatsApp API",
    "PostgreSQL",
    "React",
    "Electron",
    "Pandas",
    "scikit-learn",
  ],

  /** CricNexa teaser copy (route /cricnexa). Keep claims modest. */
  cricnexa: {
    name: "CricNexa",
    status: "In development",
    headline: "Cricket scoring and match analytics for clubs, academies and tournaments.",
    intro:
      "CricNexa is a product we are building at FlowNexa. The goal is simple: make it easy to score a match ball by ball and turn those scores into useful stats for players, coaches and organisers.",
    plannedFeatures: [
      { title: "Ball-by-ball scoring", body: "A simple scoring screen designed for match-day use." },
      { title: "Player and team stats", body: "Batting, bowling and match summaries built from the scores you enter." },
      { title: "Tournament tools", body: "Fixtures, results and standings for club and academy tournaments." },
    ],
    audience: ["Cricket clubs", "Academies and coaches", "Tournament organisers"],
    disclaimer:
      "There is no launch date yet, and the planned features may change as we test with early users. People on the waitlist hear first.",
  },
} as const;

/** True when a config value is still a placeholder. */
export const isTodo = (value: string | undefined | null): boolean =>
  !value || value.trim().toUpperCase().startsWith("TODO");

export const whatsappUrl = (message: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Booking URL if configured, otherwise the contact form with the call option preselected. */
export const bookingHref = (): string =>
  isTodo(site.contact.bookingUrl) ? "/contact/?topic=call#contact-form" : site.contact.bookingUrl;

/**
 * The one primary call-to-action label used site-wide. Honest about what
 * happens: until a real booking link exists, visitors request a call by form.
 */
export const callCta = (short = false): string =>
  isTodo(site.contact.bookingUrl)
    ? short
      ? "Request a call"
      : "Request a free 15-min call"
    : short
      ? "Book a call"
      : "Book a free 15-min call";

/** Small line under the primary CTA explaining what happens next. */
export const callCtaNote = (): string =>
  isTodo(site.contact.bookingUrl)
    ? `We'll reply ${site.contact.replyTime} with a few times that suit you.`
    : "Pick a time that suits you. No preparation needed.";

export const formatPrice = (amount: number) =>
  `${site.pricing.currencySymbol}${amount.toLocaleString("en-US")}`;
