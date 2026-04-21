import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, Zap, Brain, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Next-Gen AI Solutions
            </motion.div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              We Build <span className="text-gradient animate-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">AI</span> That
              <br />Works For You
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AI automation, chatbots, and intelligent systems engineered for modern businesses ready to scale beyond limits.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/40 transition-all hover:shadow-primary/70 hover:scale-105"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-border glass px-7 py-3.5 font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-accent/5"
              >
                <Play className="h-4 w-4" />
                View Our Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute h-80 w-80 rounded-full border border-primary/30 md:h-96 md:w-96"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute h-64 w-64 rounded-full border border-accent/30 md:h-72 md:w-72"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute h-48 w-48 rounded-full border border-primary/20"
              />

              <div className="relative flex h-40 w-40 animate-pulse-glow items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Brain className="h-20 w-20 text-white" strokeWidth={1.5} />
              </div>

              {[
                { Icon: Cpu, x: -180, y: -80, delay: 0 },
                { Icon: Zap, x: 180, y: -60, delay: 0.5 },
                { Icon: Code2, x: -160, y: 100, delay: 1 },
                { Icon: Brain, x: 170, y: 110, delay: 1.5 },
              ].map(({ Icon, x, y, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [x, x + 10, x],
                    y: [y, y - 10, y],
                  }}
                  transition={{
                    opacity: { delay: 0.5 + delay },
                    scale: { delay: 0.5 + delay },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
                  }}
                  className="absolute flex h-14 w-14 items-center justify-center rounded-2xl glass-strong glow-purple"
                >
                  <Icon className="h-6 w-6 text-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}