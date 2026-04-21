import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Target, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FlowNexa" },
      { name: "description", content: "FlowNexa is an AI agency building automation, chatbots, and intelligent systems for forward-thinking businesses." },
      { property: "og:title", content: "About FlowNexa" },
      { property: "og:description", content: "Meet the team building next-generation AI solutions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl font-bold md:text-6xl"
        >
          About <span className="text-gradient">FlowNexa</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We're a team of engineers, designers, and AI researchers obsessed with building intelligent systems that make businesses move faster, smarter, and further.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { Icon: Target, title: "Our Mission", text: "Democratize AI by shipping production-grade automation for every kind of business." },
            { Icon: Eye, title: "Our Vision", text: "A world where every team has an AI co-worker handling the busywork." },
            { Icon: Sparkles, title: "Our Edge", text: "Deep technical craft married to thoughtful design and rapid delivery." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <item.Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
