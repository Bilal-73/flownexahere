import type { APIRoute } from "astro";
import { renderOg, pngResponse } from "@/lib/og";
import { site } from "@/config/site";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderOg({
      eyebrow: "Coming soon · A FlowNexa product",
      title: site.cricnexa.name,
      subtitle: site.cricnexa.headline,
      footer: "flownexahere.live/cricnexa · Join the waitlist",
    }),
  );
