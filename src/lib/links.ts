import { isTodo, site } from "@/config/site";

/**
 * Social links that are safe to render.
 * In production, TODO placeholders are dropped so visitors never hit a dead link.
 * In dev they are kept and flagged so the owner sees what's missing.
 */
export function visibleSocials() {
  return site.social
    .filter((s) => import.meta.env.DEV || !isTodo(s.href))
    .map((s) => ({ ...s, todo: isTodo(s.href) }));
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
