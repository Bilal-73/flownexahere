import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI Automation Agency
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-[4.5rem]">
              We build chatbots,{" "}
              <br className="hidden md:block" />
              workflow engines,{" "}
              <br className="hidden md:block" />
              and custom{" "}
              <span className="text-accent">AI tools</span>{" "}
              <br className="hidden md:block" />
              that actually ship.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              From WhatsApp bots to full LLM pipelines — we design, build, and
              deploy production AI for businesses that need it working, not just
              demoed.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 font-semibold text-foreground transition-all hover:border-foreground/40 hover:bg-foreground/5"
              >
                View our work
              </a>
            </div>
          </motion.div>

          {/* Right — Typographic lockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative select-none">
              {/* Large typographic "AI" */}
              <span
                className="font-display block text-[12rem] font-bold leading-none tracking-tighter text-accent/10"
                aria-hidden="true"
              >
                AI
              </span>
              {/* Overlapping accent bar */}
              <div className="absolute bottom-8 left-0 h-2 w-24 rounded-full bg-accent" />
              {/* Small descriptor */}
              <p className="absolute -bottom-2 left-0 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Built to ship
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}