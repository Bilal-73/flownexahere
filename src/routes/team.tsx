import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { TeamsSlider } from "@/components/flownexa/TeamsSlider";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — FlowNexa" },
      { name: "description", content: "Meet the engineering and AI team behind FlowNexa." },
      { property: "og:title", content: "FlowNexa Team" },
      { property: "og:description", content: "Meet our passionate AI engineers and designers." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Engineering Team
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Meet the <span className="text-accent">Engineers</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A small, highly-focused group of AI engineers, software developers, and product designers building custom intelligent systems.
          </p>
        </motion.div>

        <div className="mt-16">
          <TeamsSlider />
        </div>
      </main>

      <Footer />
    </div>
  );
}
