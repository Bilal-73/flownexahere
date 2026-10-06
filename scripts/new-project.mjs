#!/usr/bin/env node
/**
 * Scaffold a new project / case study.
 *
 *   npm run new:project -- my-project-slug "My Project Title"
 *
 * Creates src/content/projects/<slug>.md (status: draft) from _template.md
 * and an image folder at src/assets/projects/<slug>/.
 */
import fs from "node:fs";
import path from "node:path";

const [, , rawSlug, ...titleParts] = process.argv;
if (!rawSlug) {
  console.error('Usage: npm run new:project -- <slug> "Title"');
  process.exit(1);
}
const slug = rawSlug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const title = titleParts.join(" ").trim() || "TODO: Project title";
const root = process.cwd();
const target = path.join(root, "src/content/projects", `${slug}.md`);
if (fs.existsSync(target)) {
  console.error(`✗ ${path.relative(root, target)} already exists.`);
  process.exit(1);
}
let md = fs.readFileSync(path.join(root, "src/content/projects/_template.md"), "utf8");
md = md
  .replace(/^# Copy this file.*\n# The file name.*\n/m, "")
  .replace('title: "TODO: Project title"', `title: ${JSON.stringify(title)}`)
  .replaceAll("SLUG", slug)
  .replace(/^# date: .*$/m, `date: ${new Date().toISOString().slice(0, 10)}`);
fs.writeFileSync(target, md);
fs.mkdirSync(path.join(root, "src/assets/projects", slug), { recursive: true });
console.log(`✓ Created ${path.relative(root, target)} (status: draft)`);
console.log(`✓ Put images in src/assets/projects/${slug}/ (e.g. cover.png)`);
console.log(`→ Run "npm run dev" and open http://localhost:4321/work/${slug}/`);
