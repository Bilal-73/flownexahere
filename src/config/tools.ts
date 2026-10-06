/**
 * Free tools: one list drives the /tools/ hub, the home section and the
 * cards. A tool only links anywhere once `status` is "live", so unbuilt tools
 * never point at missing pages. To launch one: build src/pages/tools/<slug>.astro
 * with ToolLayout, then flip its status to "live".
 */
import type { ServiceKey } from "./site";

export type ToolStatus = "live" | "coming-soon";

export interface Tool {
  slug: string;
  title: string;
  blurb: string;
  status: ToolStatus;
  /** Icon name from src/components/Icon.astro */
  icon: "chart" | "bot" | "workflow";
  /** Contact-form topic the tool's CTA preselects (see ContactForm.astro). */
  contactTopic: ServiceKey;
}

export const tools: Tool[] = [
  {
    slug: "roi-calculator",
    title: "AI ROI Calculator",
    blurb: "Estimate the hours and money your team could save each month by automating repetitive work.",
    status: "live",
    icon: "chart",
    contactTopic: "workflow-automation",
  },
  {
    slug: "chatbot-demo",
    title: "Live Chatbot Demo",
    blurb: "Ask a sample business chatbot real questions and see how it answers from a knowledge base.",
    status: "coming-soon",
    icon: "bot",
    contactTopic: "rag-chatbot",
  },
  {
    slug: "automation-quiz",
    title: "What should you automate?",
    blurb: "A two-minute quiz that points you to the tasks most worth automating first.",
    status: "coming-soon",
    icon: "workflow",
    contactTopic: "workflow-automation",
  },
];

/** Page URL for a live tool; undefined while it is coming soon. */
export const toolHref = (tool: Tool): string | undefined =>
  tool.status === "live" ? `/tools/${tool.slug}/` : undefined;

export const getTool = (slug: string): Tool => {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) throw new Error(`Unknown tool: ${slug}`);
  return tool;
};
