import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { ArrowRight } from "lucide-react";

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

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  capabilities: string[];
}

const servicesList: ServiceItem[] = [
  {
    num: "01",
    title: "AI Chatbots & Conversational Agents",
    description: "24/7 intelligent conversational interfaces trained on your internal documentation and product catalogs, seamlessly integrated into Web, WhatsApp, and Slack.",
    capabilities: [
      "Custom RAG Document Memory",
      "Multi-platform (WhatsApp, Slack, Web)",
      "Human Agent Escalation Rules",
      "Multilingual Dialogue Processing"
    ]
  },
  {
    num: "02",
    title: "Workflow & Process Automation",
    description: "Eliminate repetitive manual data entry, lead routing, and document handling by wiring autonomous AI agents directly into your existing software stack.",
    capabilities: [
      "n8n & Zapier Custom Pipelines",
      "Automated CRM & ERP Syncing",
      "Intelligent Ticket & Email Triaging",
      "Webhook & API Orchestrations"
    ]
  },
  {
    num: "03",
    title: "Custom LLM Solutions & Fine-Tuning",
    description: "Domain-specific AI models engineered for your exact business requirements, security standards, and edge-case operational workflows.",
    capabilities: [
      "Domain-Specific Model Fine-Tuning",
      "Vector Database & Embeddings Setup",
      "Enterprise Data Privacy Compliance",
      "Structured Output Schemas & Validation"
    ]
  },
  {
    num: "04",
    title: "Voice & Audio Intelligence",
    description: "Real-time voice assistants and audio processing engines for patient consultation transcription, call quality auditing, and phone support.",
    capabilities: [
      "Medical & Technical Speech-to-Text",
      "Real-Time Quality & Compliance Auditing",
      "Interactive Voice Response (IVR) Bots",
      "Sentiment & Tone Analytics"
    ]
  },
  {
    num: "05",
    title: "Predictive AI Analytics & Insights",
    description: "Transform complex operational datasets into actionable insights using predictive ML models and natural-language query dashboards.",
    capabilities: [
      "Natural Language SQL Querying",
      "Automated Sales & Inventory Insights",
      "Custom Business KPI Dashboards",
      "Anomaly Detection & Alerts"
    ]
  },
  {
    num: "06",
    title: "AI Strategy & Technical Consulting",
    description: "From discovery to deployment — we map high-leverage AI opportunities, evaluate technical feasibility, and architect scalable AI product roadmaps.",
    capabilities: [
      "AI ROI & Feasibility Audits",
      "Architecture & Infrastructure Specs",
      "Security & Data Governance Advisory",
      "Hands-On Team Training & Handoff"
    ]
  }
];

function ServicesPage() {
  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Core Capabilities
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Engineering Capabilities & <span className="text-accent">Services</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We don't deliver generic advice. We build, ship, and maintain custom AI software tailored to your technology stack.
          </p>
        </motion.div>

        {/* Numbered Editorial List */}
        <div className="mt-20 border-t border-border">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border-b border-border py-12 transition-colors hover:bg-card/40"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Numeral */}
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl font-semibold text-accent/80 transition-colors group-hover:text-accent md:text-6xl">
                    {service.num}
                  </span>
                </div>

                {/* Service Overview */}
                <div className="lg:col-span-5">
                  <h2 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities Bullets */}
                <div className="lg:col-span-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Deliverables & Scope
                  </div>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface mt-20 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-3xl font-semibold">Have a custom requirement?</h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              We frequently architect bespoke AI pipelines that cross multiple domains. Let's discuss your specific infrastructure needs.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:opacity-90 shrink-0"
          >
            Schedule Technical Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
