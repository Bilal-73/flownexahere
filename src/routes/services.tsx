import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Bot, Workflow, BrainCircuit, MessageSquare, BarChart3, Cpu } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — FlowNexa" },
      { name: "description", content: "AI chatbots, workflow automation, custom LLM integrations, and intelligent analytics by FlowNexa." },
      { property: "og:title", content: "FlowNexa Services" },
      { property: "og:description", content: "End-to-end AI solutions: chatbots, automation, LLM integrations, and analytics." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { Icon: Bot, title: "AI Chatbots", text: "24/7 conversational agents trained on your data, integrated across web, WhatsApp, and Slack." },
  { Icon: Workflow, title: "Workflow Automation", text: "Replace repetitive tasks with autonomous AI agents wired into your existing tools." },
  { Icon: BrainCircuit, title: "Custom LLM Solutions", text: "Fine-tuned models and RAG pipelines built for your domain, your data, your edge cases." },
  { Icon: MessageSquare, title: "Voice & Text AI", text: "Real-time voice assistants and multilingual text agents for support, sales, and ops." },
  { Icon: BarChart3, title: "AI Analytics", text: "Turn raw data into insights with predictive models and natural-language dashboards." },
  { Icon: Cpu, title: "AI Strategy & Consulting", text: "From discovery to deployment — we map the highest-leverage AI opportunities for your business." },
];

function ServicesPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl font-bold md:text-6xl"
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Practical AI, engineered to ship. Pick a service or combine them — we tailor every engagement to your stack and goals.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong group rounded-2xl p-6 transition-all hover:border-accent/50 hover:scale-[1.02]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <s.Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
