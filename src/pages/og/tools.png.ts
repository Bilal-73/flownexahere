import type { APIRoute } from "astro";
import { renderOg, pngResponse } from "@/lib/og";
import { site } from "@/config/site";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderOg({
      eyebrow: "Free tools",
      title: "Free tools to size up your automation",
      subtitle: "Runs in your browser · no sign-up · nothing you type is sent anywhere",
      footer: `${site.url.replace("https://", "")}/tools`,
    }),
  );
