/**
 * Build-time Open Graph images (1200×630 PNG) with satori → SVG → sharp → PNG.
 * Runs only during `astro build` / dev requests; nothing ships to the browser.
 */
import fs from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";

const root = process.cwd();
const fontDir = path.join(root, "node_modules/@fontsource/inter/files");

let fontsPromise: Promise<{ name: string; data: Buffer; weight: 400 | 600 | 700; style: "normal" }[]> | undefined;
const loadFonts = () =>
  (fontsPromise ??= Promise.all(
    ([400, 600, 700] as const).map(async (weight) => ({
      name: "Inter",
      data: await fs.readFile(path.join(fontDir, `inter-latin-${weight}-normal.woff`)),
      weight,
      style: "normal" as const,
    })),
  ));

const C = {
  bg: "#F5F0EB",
  fg: "#1A1A1A",
  muted: "#5F5852",
  accent: "#B4491C",
  border: "#D6CFC6",
};

const LOGO = `data:image/svg+xml;base64,${Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/><circle cx="50" cy="50" r="42" fill="#fff"/><g stroke="#000" stroke-width="8.5" stroke-linecap="round" fill="none"><path d="M12 50C12 28 40 22 66 36"/><path d="M12 50C12 72 40 78 66 64"/><path d="M12 50H52"/></g><circle cx="66" cy="50" r="15" fill="#fff" stroke="#000" stroke-width="8"/></svg>',
).toString("base64")}`;

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export interface OgOptions {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Absolute path to an image shown on the right (optional). */
  imagePath?: string;
  footer?: string;
}

export async function renderOg({ eyebrow, title, subtitle, imagePath, footer = "flownexahere.live" }: OgOptions) {
  let image: string | undefined;
  if (imagePath) {
    try {
      const buf = await sharp(imagePath).resize(520, 520, { fit: "cover", position: "centre" }).jpeg({ quality: 80 }).toBuffer();
      image = `data:image/jpeg;base64,${buf.toString("base64")}`;
    } catch {
      image = undefined;
    }
  }

  const textWidth = image ? 560 : 1040;
  const tree = h(
    "div",
    { width: 1200, height: 630, display: "flex", backgroundColor: C.bg, fontFamily: "Inter", color: C.fg, padding: 72, position: "relative" },
    [
      h("div", { position: "absolute", top: -160, right: -160, width: 520, height: 520, borderRadius: 9999, backgroundColor: "rgba(180,73,28,0.12)", display: "flex" }),
      h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: textWidth, height: "100%" }, [
        h("div", { display: "flex", alignItems: "center", gap: 16 }, [
          h("img", { width: 56, height: 56 }, undefined, { src: LOGO, width: 56, height: 56 }),
          h("div", { fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }, "FlowNexa"),
        ]),
        h("div", { display: "flex", flexDirection: "column" }, [
          h("div", { fontSize: 22, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: 3 }, eyebrow),
          h("div", { fontSize: title.length > 48 ? 50 : 62, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5, marginTop: 18 }, title),
          subtitle ? h("div", { fontSize: 26, color: C.muted, lineHeight: 1.35, marginTop: 22 }, subtitle) : null,
        ].filter(Boolean)),
        h("div", { display: "flex", fontSize: 22, color: C.muted }, footer),
      ]),
      image
        ? h("div", { display: "flex", marginLeft: 48, alignItems: "center" }, [
            h("img", { width: 480, height: 480, borderRadius: 28, border: `2px solid ${C.border}`, objectFit: "cover" }, undefined, {
              src: image,
              width: 480,
              height: 480,
            }),
          ])
        : null,
    ].filter(Boolean),
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], { width: 1200, height: 630, fonts: await loadFonts() });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}

export const pngResponse = (buf: Buffer) =>
  new Response(new Uint8Array(buf), { headers: { "Content-Type": "image/png" } });

/** Convention: covers live at src/assets/projects/<slug>/cover.png */
export async function coverPathFor(slug: string) {
  for (const ext of ["png", "jpg", "jpeg", "webp"]) {
    const p = path.join(root, "src/assets/projects", slug, `cover.${ext}`);
    try {
      await fs.access(p);
      return p;
    } catch {
      /* try next */
    }
  }
  return undefined;
}
