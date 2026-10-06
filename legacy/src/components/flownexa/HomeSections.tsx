import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EASE, Eyebrow, Reveal, SplitText } from "./motion";
import { caseStudies } from "./projects";

/* ------------------------------------------------------------------ */
/* Stack marquee                                                       */
/* ------------------------------------------------------------------ */

const stack = [
  "OpenAI",
  "LangChain",
  "n8n",
  "Python",
  "FastAPI",
  "WhatsApp API",
  "Vector DBs",
  "React",
  "Zapier",
  "Slack",
  "Whisper",
  "PostgreSQL",
];

export function StackMarquee() {
  return (
    <section
      id="marquee"
      className="border-y border-border bg-card/50 py-8"
      aria-label="Tools we work with"
    >
      <div className="mx-auto mb-5 max-w-7xl px-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        The stack behind our builds
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {[...stack, ...stack].map((name, i) => (
            <div key={i} className="flex items-center" aria-hidden={i >= stack.length}>
              <span className="px-8 font-display text-2xl font-semibold tracking-tight text-foreground/70 md:text-3xl">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-accent/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-lit statement                                                */
/* ------------------------------------------------------------------ */

const statement =
  "Most AI projects stall between the demo and the real world. We close that gap — scoping the workflow, engineering the guardrails, and shipping software your team actually uses every day.";

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = statement.split(" ");

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Eyebrow>Our approach</Eyebrow>
        </div>
        <p
          ref={ref}
          className="font-display text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl lg:col-span-9"
        >
          {words.map((w, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Services preview                                                    */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: "AI Chatbots & Agents",
    body: "Assistants trained on your docs and catalog, live on Web, WhatsApp and Slack — with clean human handoff.",
    tags: ["RAG", "WhatsApp", "Multilingual"],
  },
  {
    title: "Workflow Automation",
    body: "Agents wired into your CRM, inbox and ERP so data entry, routing and follow-ups happen on their own.",
    tags: ["n8n", "Zapier", "Webhooks"],
  },
  {
    title: "Custom LLM Solutions",
    body: "Domain-tuned models with structured outputs, evaluations and privacy controls built in from day one.",
    tags: ["Fine-tuning", "Embeddings", "Evals"],
  },
  {
    title: "Voice & Audio AI",
    body: "Transcription, call auditing and voice agents for clinics, support desks and sales teams.",
    tags: ["Speech-to-text", "QA", "IVR"],
  },
];

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 md:pb-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>What we build</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            <SplitText text={"Four things,\ndone properly."} inView stagger={0.05} />
          </h2>
        </div>
        <Reveal>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            All services
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      </div>

      <ul className="mt-16 border-t border-border">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.06}>
            <Link
              to="/services"
              className="group relative grid gap-4 overflow-hidden border-b border-border py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10"
            >
              {/* Fill that sweeps up on hover */}
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <span className="relative font-mono text-sm text-muted-foreground transition-colors duration-500 group-hover:text-background/50 md:col-span-1 md:pl-4">
                0{i + 1}
              </span>
              <h3 className="relative font-display text-2xl font-semibold tracking-tight transition-all duration-500 group-hover:translate-x-2 group-hover:text-background md:col-span-4 md:text-3xl">
                {s.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-background/70 md:col-span-4">
                {s.body}
              </p>
              <div className="relative flex items-center justify-between gap-4 md:col-span-3 md:pr-4">
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors duration-500 group-hover:border-background/20 group-hover:text-background/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-accent-bright" />
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Work showcase — horizontal scroll on desktop, stacked on mobile     */
/* ------------------------------------------------------------------ */

export function WorkShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      {/* Desktop: pinned horizontal gallery */}
      <section
        ref={sectionRef}
        className="relative hidden bg-foreground text-background lg:block"
        style={{ height: `calc(100vh + ${distance}px)` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-12 flex w-full max-w-7xl items-end justify-between px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
                Selected work
              </p>
              <h2 className="mt-4 font-display text-6xl font-semibold tracking-tight">
                Shipped, not <span className="text-accent-bright">slideware.</span>
              </h2>
            </div>
            <div className="flex w-56 flex-col items-end gap-3">
              <Link
                to="/portfolio"
                className="text-sm font-semibold text-background/70 transition-colors hover:text-background"
              >
                View all products →
              </Link>
              <div className="h-px w-full bg-background/15">
                <motion.div className="h-px bg-accent-bright" style={{ width: bar }} />
              </div>
            </div>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-8 pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-24"
          >
            {caseStudies.map((p, i) => (
              <WorkCard key={p.slug} project={p} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile / tablet: simple stack */}
      <section className="bg-foreground py-24 text-background lg:hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Shipped, not <span className="text-accent-bright">slideware.</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {caseStudies.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <WorkCard project={p} index={i} compact />
              </Reveal>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-background/80"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function WorkCard({
  project,
  index,
  compact = false,
}: {
  project: (typeof caseStudies)[number];
  index: number;
  compact?: boolean;
}) {
  return (
    <Link
      to={project.href}
      className={`group block shrink-0 ${compact ? "w-full" : "w-[min(38rem,46vw)]"}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-background/5">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-5 bottom-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-background/55">{project.tag}</p>
        </div>
        <span className="font-mono text-sm text-background/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

const steps = [
  {
    title: "Discover",
    time: "Week 1",
    body: "We map the workflow end-to-end, find the bottleneck worth automating first, and agree on what success looks like in numbers.",
  },
  {
    title: "Prototype",
    time: "Week 2–3",
    body: "A working version on your real data. You click through it, we measure accuracy, and we cut what doesn't earn its place.",
  },
  {
    title: "Ship",
    time: "Week 3–6",
    body: "Production build with guardrails, logging and fallbacks, integrated into the tools your team already uses.",
  },
  {
    title: "Support",
    time: "Ongoing",
    body: "We monitor quality, tune prompts and models as your data changes, and hand over docs so you're never locked in.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl xl:text-6xl">
              <SplitText text={"From first call\nto production."} inView stagger={0.05} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Small team, short loops, no 80-page decks. You see working software within the first
                two weeks.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="relative lg:col-span-7">
          {/* Track + scroll-driven fill */}
          <div className="absolute top-2 bottom-2 left-[15px] w-px bg-border" aria-hidden="true" />
          <motion.div
            className="absolute top-2 left-[15px] w-px origin-top bg-accent"
            style={{ height: fill }}
            aria-hidden="true"
          />

          <ol className="space-y-14">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.8, ease: EASE }}
                className="relative pl-14"
              >
                <span className="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-medium">
                  {i + 1}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl font-semibold tracking-tight">{s.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {s.time}
                  </span>
                </div>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
