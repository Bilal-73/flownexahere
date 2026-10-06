import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EASE, Eyebrow, Magnetic, SplitText } from "./motion";
import { FlowDiagram } from "./FlowDiagram";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Soft warm glow behind the diagram */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[38rem] w-[38rem] rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.08 55 / 0.55), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <Eyebrow>AI Automation Studio</Eyebrow>
            </motion.div>

            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.6rem]">
              <SplitText
                text={"We build AI\nthat runs your\noperations — and ships."}
                accentWords={["ships"]}
                delay={0.2}
              />
            </h1>

            <motion.p
              {...fadeUp(0.7)}
              className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Chatbots, workflow engines and custom LLM tools — designed, built and deployed for
              businesses that need it working in production, not just demoed.
            </motion.p>

            <motion.div {...fadeUp(0.85)} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground"
                >
                  <span className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                  <span className="relative">Start a project</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-4 font-semibold text-foreground"
              >
                <span className="relative">
                  See our work
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-foreground/30 transition-transform duration-500 group-hover:scale-x-0" />
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform delay-100 duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </span>
              </Link>
            </motion.div>

            <motion.dl
              {...fadeUp(1)}
              className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6"
            >
              {[
                ["8", "Products shipped"],
                ["24h", "Reply time"],
                ["3", "Industries"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-semibold tracking-tight">{v}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          >
            <FlowDiagram />
          </motion.div>
        </div>

        <motion.a
          href="#marquee"
          {...fadeUp(1.4)}
          className="mt-20 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.span>
          </span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
