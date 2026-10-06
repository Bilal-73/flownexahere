import { createFileRoute, Outlet, useRouterState, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { ArrowUpRight, Eye, Mic, ShieldCheck } from "lucide-react";
import { caseStudies } from "@/components/flownexa/projects";
import { PageHeader } from "@/components/flownexa/PageHeader";
import { EASE, Reveal } from "@/components/flownexa/motion";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FlowNexa" },
      { name: "description", content: "Selected AI products and case studies delivered by FlowNexa." },
      { property: "og:title", content: "FlowNexa Portfolio" },
      { property: "og:description", content: "Case studies of chatbots, automation, and AI products we've shipped." },
    ],
  }),
  component: PortfolioPage,
});

/** Builds without a public case study yet — listed as an index. */
const otherBuilds = [
  {
    title: "NeuroSymbolic VQA",
    tag: "Neuro-Symbolic AI",
    desc: "Visual question answering combining deep-learning perception with symbolic reasoning for complex visual analysis.",
    icon: Eye,
  },
  {
    title: "MediTranscribe",
    tag: "Speech-to-Text AI",
    desc: "Real-time doctor–patient conversation transcription that turns clinical dialogue into structured EHR notes.",
    icon: Mic,
  },
  {
    title: "AuditX",
    tag: "Call Auditing AI",
    desc: "Automated QA engine that reviews support and sales calls for compliance and agent performance.",
    icon: ShieldCheck,
  },
];

const [featured, ...rest] = caseStudies;

function PortfolioPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/portfolio") {
    return <Outlet />;
  }

  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24 w-full">
        <PageHeader eyebrow="Selected Work" title={"Products &\nautomations."} accent={["automations"]}>
          A curated index of production AI software, custom models, and automation workflows engineered for clients worldwide.
        </PageHeader>

        {/* Featured */}
        <Reveal className="mt-20">
          <Link
            to={featured.href}
            className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-12"
          >
            <div className="flex flex-col justify-between p-8 md:col-span-5 md:p-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  Featured · {featured.tag}
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{featured.desc}</p>
              </div>
              <div className="mt-10 inline-flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-colors duration-300 group-hover:bg-accent">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </span>
                Explore case study
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden border-t border-border bg-muted md:col-span-7 md:border-t-0 md:border-l">
              <img
                src={featured.image}
                alt={`${featured.title} preview`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        </Reveal>

        {/* Case studies */}
        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.12 }}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              <Link to={p.href} className="group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{p.tag}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Other builds */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Also built</h2>
            <p className="mt-3 text-muted-foreground">Research and client systems without a public case study yet.</p>
          </Reveal>
          <ul className="mt-10 border-t border-border">
            {otherBuilds.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 0.06}>
                <div className="group grid gap-4 border-b border-border py-7 md:grid-cols-12 md:items-center">
                  <div className="flex items-center gap-4 md:col-span-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <b.icon className="h-5 w-5 stroke-[1.75]" />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{b.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">{b.desc}</p>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground md:col-span-2 md:text-right">
                    {b.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
