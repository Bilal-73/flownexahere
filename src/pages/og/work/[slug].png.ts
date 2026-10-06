import type { APIRoute, GetStaticPaths } from "astro";
import { getCaseStudies, typeLabel, type Project } from "@/lib/projects";
import { coverPathFor, renderOg, pngResponse } from "@/lib/og";

export const getStaticPaths = (async () =>
  (await getCaseStudies()).map((project) => ({ params: { slug: project.id }, props: { project } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { project } = props as { project: Project };
  return pngResponse(
    await renderOg({
      eyebrow: `${typeLabel(project)} · ${project.data.tag ?? "Case study"}`,
      title: project.data.title,
      subtitle: project.data.summary.length > 120 ? `${project.data.summary.slice(0, 117)}…` : project.data.summary,
      imagePath: await coverPathFor(project.id),
      footer: `flownexahere.live/work/${project.id}`,
    }),
  );
};
