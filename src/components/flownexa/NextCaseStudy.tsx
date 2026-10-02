import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
import { caseStudies } from "./projects";

/** "Next project" teaser shown at the end of each case study, looping back to the first. */
export function NextCaseStudy({ current }: { current: string }) {
  const idx = caseStudies.findIndex((c) => c.slug === current);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-28">
      <Reveal>
        <Link
          to={next.href}
          className="group grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 md:grid-cols-12 md:p-10"
        >
          <div className="md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Next case study
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-6xl">
              {next.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{next.tag}</p>
            <span className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-all duration-500 group-hover:rotate-45 group-hover:bg-accent">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted md:col-span-6">
            <img
              src={next.image}
              alt={`${next.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
