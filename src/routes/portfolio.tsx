import { createFileRoute, Outlet, useRouterState, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { ArrowUpRight, Eye, Mic, ShieldCheck } from "lucide-react";
import aiphaPreview from "@/assets/Aipha/Aipha-product-clean.png";
import resumePreview from "@/assets/resumeScrener/ResumeScrener-clean.png";
import salesmintPreview from "@/assets/salesmint/Salesmint-clean.png";
import fashionPreview from "@/assets/Ai fashion Assistant/Ai-fashion-clean.png";
import clinifyPreview from "@/assets/clinify/clinify-clean.png";
import ticketAutomationPreview from "@/assets/ticketAutomation/ticket-automation.png";

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

interface Project {
  title: string;
  tag: string;
  desc: string;
  href?: string;
  image?: string;
  watermarkText?: string;
  IllustrationIcon?: React.ComponentType<{ className?: string }>;
}

const featuredProject: Project = {
  title: "SalesMint",
  tag: "Featured • AI POS System",
  desc: "An AI-powered POS and billing platform engineered for high-throughput retail checkout, automated inventory tracking, and real-time sales intelligence.",
  image: salesmintPreview,
  href: "/portfolio/salesmint",
};

const remainingProjects: Project[] = [
  { 
    title: "NeuroSymbolic VQA", 
    tag: "Neuro-Symbolic AI", 
    desc: "Visual question answering system combining deep learning perception with symbolic reasoning for complex visual analysis.",
    watermarkText: "VQA",
    IllustrationIcon: Eye,
  },
  { 
    title: "MediTranscribe", 
    tag: "Speech-to-Text AI", 
    desc: "Real-time doctor-patient conversation transcription system converting clinical dialogue into structured EHR notes.",
    watermarkText: "STT",
    IllustrationIcon: Mic,
  },
  { 
    title: "AI Resume Screener & Job Matcher", 
    tag: "NLP / ML", 
    desc: "High-volume resume classification API that predicts candidate role match scores and extracts structured contact entities.",
    image: resumePreview,
    href: "/portfolio/resume-screener",
  },
  { 
    title: "Clinify", 
    tag: "Automation / n8n", 
    desc: "Clinic workflow automation platform integrating patient appointment scheduling, WhatsApp alerts, and AI receptionist tasks.",
    image: clinifyPreview,
    href: "/portfolio/clinify",
  },
  { 
    title: "Ticket Automation", 
    tag: "AI Automation", 
    desc: "Intelligent support ticket classification and routing system built on n8n to eliminate manual support triaging.",
    image: ticketAutomationPreview,
    href: "/portfolio/ticket-automation",
  },
  { 
    title: "AuditX", 
    tag: "Call Auditing AI", 
    desc: "Automated QA call auditing engine that analyzes support and sales conversations for compliance and agent performance.",
    watermarkText: "QA",
    IllustrationIcon: ShieldCheck,
  },
  { 
    title: "AIPHA", 
    tag: "AI Healthcare Assistant", 
    desc: "Personalized fitness and nutrition assistant converting user goals into customized workout routines and daily meal plans.",
    image: aiphaPreview,
    href: "/portfolio/aipha",
  },
  { 
    title: "AI Virtual Fashion Stylist", 
    tag: "Computer Vision", 
    desc: "Computer vision outfit recommendation engine analyzing user clothing items to suggest personalized style combinations.",
    image: fashionPreview,
    href: "/portfolio/fashion-stylist",
  },
];

function PortfolioPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/portfolio") {
    return <Outlet />;
  }

  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Selected Work
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Products & <span className="text-accent">Automations</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A curated index of production AI software, custom models, and automation workflows engineered for clients worldwide.
          </p>
        </motion.div>

        {/* Featured Project Banner (Full Width Horizontal Split) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            to={featuredProject.href!}
            className="card-surface hover-lift group grid overflow-hidden rounded-2xl md:grid-cols-12"
          >
            <div className="flex flex-col justify-between p-8 md:col-span-6 md:p-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {featuredProject.tag}
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featuredProject.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-accent">
                <span>Explore Case Study</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            <div className="relative min-h-[260px] bg-muted md:col-span-6 overflow-hidden border-t border-border md:border-t-0 md:border-l">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        </motion.div>

        {/* Remaining Projects (Staggered Grid) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {remainingProjects.map((p, i) => {
            const CardShell = p.href ? Link : "div";

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="h-full"
              >
                <CardShell
                  {...(p.href ? { to: p.href } : {})}
                  className="card-surface hover-lift group flex flex-col h-full overflow-hidden rounded-2xl transition-all"
                >
                  {/* Card Header Illustration / Screenshot Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted border-b border-border">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Editorial Line Art + Ghost Watermark Illustration */
                      <div className="relative flex h-full w-full items-center justify-center bg-card p-6 overflow-hidden">
                        {/* Oversized Ghost Watermark Text */}
                        <span className="pointer-events-none absolute -right-2 -bottom-4 select-none font-display text-8xl font-bold tracking-tighter text-foreground/[0.06]">
                          {p.watermarkText}
                        </span>

                        {/* Line Art Icon Motif */}
                        <div className="relative z-10 flex items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 p-4 text-accent">
                          {p.IllustrationIcon && <p.IllustrationIcon className="h-8 w-8 stroke-[1.5]" />}
                        </div>
                      </div>
                    )}

                    {p.href && (
                      <div className="absolute top-4 right-4 rounded-full border border-border bg-card/90 p-2 shadow-sm backdrop-blur-sm transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4 text-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col justify-between p-7 flex-1">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {p.tag}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>

                    {p.href && (
                      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                        <span>Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                </CardShell>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
