import type { APIRoute } from "astro";
import { renderOg, pngResponse } from "@/lib/og";
import { site } from "@/config/site";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderOg({
      eyebrow: "Free tool · AI ROI Calculator",
      title: "How much could automation save your team?",
      subtitle: "Hours and money saved per month and per year, in under a minute",
      footer: `${site.url.replace("https://", "")}/tools/roi-calculator`,
    }),
  );
