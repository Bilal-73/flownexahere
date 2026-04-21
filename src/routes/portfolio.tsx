import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FlowNexa" },
      { name: "description", content: "Selected AI projects and case studies delivered by FlowNexa." },
      { property: "og:title", content: "FlowNexa Portfolio" },
      { property: "og:description", content: "Case studies of chatbots, automation, and AI products we've shipped." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "NovaChat AI", tag: "Conversational AI", desc: "Multilingual support bot reducing ticket volume by 62% for a fintech.", gradient: "from-primary/40 to-accent/40" },
  { title: "PulseFlow", tag: "Workflow Automation", desc: "Autonomous agent orchestrating 14 SaaS tools for an e-commerce ops team.", gradient: "from-accent/40 to-primary/40" },
  { title: "InsightLens", tag: "AI Analytics", desc: "Natural-language BI dashboard for a logistics company tracking 2M+ events/day.", gradient: "from-primary/30 to-accent/50" },
  { title: "VoxAssist", tag: "Voice AI", desc: "Real-time voice agent handling 80% of inbound calls for a healthtech startup.", gradient: "from-accent/50 to-primary/30" },
  { title: "DocuMind", tag: "RAG / LLM", desc: "Document-grounded AI for a legal firm answering on 50k+ contracts.", gradient: "from-primary/40 to-accent/30" },
  { title: "RetailGenie", tag: "Recommendation AI", desc: "Personalization engine lifting conversion by 28% for a DTC brand.", gradient: "from-accent/30 to-primary/40" },
];

function PortfolioPage() {
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
          Our <span className="text-gradient">Portfolio</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A selection of AI products and automations we've crafted for ambitious teams.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong group cursor-pointer overflow-hidden rounded-2xl"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute right-4 top-4 rounded-full bg-background/30 p-2 backdrop-blur transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-accent">{p.tag}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
