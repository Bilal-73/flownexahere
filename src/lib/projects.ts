import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** Drafts are visible in `astro dev` only, never in production builds. */
export const SHOW_DRAFTS = import.meta.env.DEV;

const STATUS_LABEL: Record<Project["data"]["status"], string> = {
  live: "Live",
  demo: "Demo",
  "in-development": "In development",
  draft: "Draft",
};

const TYPE_LABEL: Record<Project["data"]["type"], string> = {
  client: "Client project",
  demo: "Demo build",
  product: "FlowNexa product",
  internal: "Internal tool",
};

export const statusLabel = (p: Project) => STATUS_LABEL[p.data.status];
export const typeLabel = (p: Project) => TYPE_LABEL[p.data.type];

/** All publishable projects, sorted by `order` then title. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection("projects", (p) => SHOW_DRAFTS || p.data.status !== "draft");
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Projects shown in listings (/work, home page, products), sorted like getProjects. */
export async function getListedProjects(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.listed);
}

/** Projects that get their own /work/[slug] page. */
export async function getCaseStudies(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.caseStudy);
}

export const projectHref = (p: Project): string | undefined =>
  p.data.href ?? (p.data.caseStudy ? `/work/${p.id}/` : undefined);

export const ogImageFor = (p: Project) => `/og/work/${p.id}.png`;
