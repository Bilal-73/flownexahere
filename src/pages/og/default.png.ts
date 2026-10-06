import type { APIRoute } from "astro";
import { renderOg, pngResponse } from "@/lib/og";
import { site } from "@/config/site";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderOg({
      eyebrow: "AI engineering agency",
      title: "AI chatbots and automations that handle your repetitive work",
      subtitle: "RAG chatbots · n8n & Python automation · data insights · custom software",
      footer: site.url.replace("https://", ""),
    }),
  );
