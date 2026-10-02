import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { PageHeader } from "@/components/flownexa/PageHeader";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FlowNexa" },
      { name: "description", content: "FlowNexa is an AI engineering agency building custom automation, chatbots, and intelligent software." },
      { property: "og:title", content: "About FlowNexa" },
      { property: "og:description", content: "Meet the team building next-generation AI solutions." },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24 w-full">
        {/* Editorial Title */}
        <PageHeader
          eyebrow="Agency Manifesto"
          title={"Built for execution.\nGrounded in craft."}
          accent={["Grounded", "in", "craft"]}
        />

        {/* Large Manifesto Pull-Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface relative mt-16 p-8 md:p-14 overflow-hidden"
        >
          {/* Watermark Logo Mark */}
          <span 
            className="pointer-events-none absolute -right-6 -bottom-10 select-none font-display text-[14rem] font-bold text-foreground/[0.04]"
            aria-hidden="true"
          >
            FN
          </span>

          <div className="relative z-10 max-w-4xl">
            <blockquote className="font-display text-2xl font-medium leading-snug md:text-4xl">
              “We don’t build generic AI wrappers or hand off 80-page consulting decks. We design, test, and ship custom automation software that runs silently and reliably in production.”
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">
              — FlowNexa Core Engineering Principle
            </p>
          </div>
        </motion.div>

        {/* Agency Pillars */}
        <div className="mt-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            How We Differ
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Engineering First",
                text: "We approach every AI challenge as a software engineering problem: clear APIs, deterministic fallback handling, structured schemas, and robust logging."
              },
              {
                icon: ShieldCheck,
                title: "Production Reliability",
                text: "AI models hallucinate if unchecked. We build evaluation benchmarks, guardrails, and validation checks so outputs can be trusted in mission-critical flows."
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                text: "We ship working software in weeks, not months. We prioritize high-leverage bottlenecks to give your team immediate operational ROI."
              }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface hover-lift group p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-500 group-hover:-rotate-6 group-hover:bg-accent group-hover:text-accent-foreground">
                    <pillar.icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Origins & Team Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Based in Pakistan, <br />
              <span className="text-accent">delivering globally.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              FlowNexa was founded by AI engineers obsessed with practical automation. From our studio in Pakistan 🇵🇰, we collaborate directly with tech teams, healthcare operators, and retail businesses worldwide.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Whether it’s a doctor-patient conversation transcriber, an n8n clinic automation pipeline, or an intelligent POS billing machine like SalesMint, every system we build is designed for longevity and performance.
            </p>
            <p>
              We believe the future belongs to teams that leverage AI co-workers for repetitive tasks while focusing their human creative energy on high-value strategy.
            </p>
            <div className="pt-4">
              <Link
                to="/team"
                className="group inline-flex items-center gap-2 font-semibold text-accent"
              >
                Meet the engineering team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
