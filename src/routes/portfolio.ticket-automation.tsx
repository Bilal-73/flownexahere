import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeAlert,
  BellRing,
  Brain,
  Inbox,
  Route as RouteIcon,
  TicketCheck,
  Workflow,
} from "lucide-react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import ticketAutomationBanner from "@/assets/ticketAutomation/ticket-automation-banner.png";
import ticketAutomationProduct from "@/assets/ticketAutomation/ticket-automation.png";

export const Route = createFileRoute("/portfolio/ticket-automation")({
  head: () => ({
    meta: [
      { title: "Ticket Automation Case Study - FlowNexa" },
      {
        name: "description",
        content:
          "AI-powered ticket automation for support intake, classification, priority detection, routing, notifications, and SLA escalation.",
      },
      { property: "og:title", content: "Ticket Automation - AI Support Workflow" },
      {
        property: "og:description",
        content:
          "A support automation workflow that uses AI triage and n8n-style orchestration to reduce manual ticket handling.",
      },
    ],
  }),
  component: TicketAutomationCaseStudyPage,
});

const metadata = [
  { label: "Industry", value: "Customer Support & Operations" },
  { label: "Product Type", value: "AI ticket routing and workflow automation" },
  { label: "Focus", value: "Intake, classification, routing, notifications, escalation" },
];

const features = [
  {
    title: "Ticket Intake",
    description: "Support requests can enter from forms, email, chat, or connected helpdesk systems.",
    icon: Inbox,
  },
  {
    title: "AI Classification",
    description: "The system reads ticket content and predicts issue type, intent, and relevant department.",
    icon: Brain,
  },
  {
    title: "Priority Detection",
    description: "Urgency signals are identified so high-impact issues can be handled before routine requests.",
    icon: BadgeAlert,
  },
  {
    title: "Smart Routing",
    description: "Tickets are assigned to the right queue, agent, or team based on category and workload rules.",
    icon: RouteIcon,
  },
  {
    title: "Workflow Automation",
    description: "n8n-style workflows trigger updates, CRM syncs, and operational steps without manual handoff.",
    icon: Workflow,
  },
  {
    title: "Notifications",
    description: "Agents, managers, and customers can receive timely alerts for priority changes and SLA events.",
    icon: BellRing,
  },
];

const workflow = [
  "A ticket enters through a form, email, chat widget, or helpdesk integration.",
  "AI analyzes the ticket text to extract the issue, intent, category, and urgency.",
  "The system assigns a priority level and recommends the best team or owner.",
  "Automation routes the ticket to support, sales, technical, billing, or a custom queue.",
  "Notifications and escalations trigger when SLA timing or priority rules require attention.",
  "Status updates keep the dashboard, CRM, and team communication channels aligned.",
];

function TicketAutomationCaseStudyPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />

      <main className="pb-20">
        <section className="relative overflow-hidden pt-28">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              to="/portfolio"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to products
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden border-y border-border/50 bg-white"
          >
            <img
              src={ticketAutomationBanner}
              alt="Ticket Automation workflow product banner"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 pt-10">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <TicketCheck className="h-4 w-4" />
                AI Support Automation Product
              </div>
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                Ticket Automation - AI Support Workflow
              </h1>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <section className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl leading-8 text-muted-foreground">
                Ticket Automation is an AI-powered support workflow that classifies incoming requests,
                detects priority, routes work to the right team, and triggers follow-up actions without
                repetitive manual triage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden rounded-2xl"
            >
              <img
                src={ticketAutomationProduct}
                alt="Ticket Automation support dashboard screen"
                className="h-full min-h-[280px] w-full object-contain"
              />
            </motion.div>
          </section>

          <section className="grid overflow-hidden rounded-2xl border border-border/60 bg-foreground text-background md:grid-cols-3">
            {metadata.map((item) => (
              <div key={item.label} className="border-border/20 p-6 md:border-r md:last:border-r-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
                  {item.label}
                </div>
                <div className="mt-2 text-base font-semibold leading-6">{item.value}</div>
              </div>
            ))}
          </section>

          <CaseSection title="Overview">
            <p>
              The platform reduces manual support handling by turning every new ticket into a structured
              workflow: classify the request, score urgency, assign ownership, notify the right people, and
              keep downstream tools updated.
            </p>
            <p>
              It is designed for teams that want faster first response, more consistent routing, and clear
              visibility into tickets that need escalation.
            </p>
          </CaseSection>

          <CaseSection title="Client Challenge">
            <p>
              Support teams often lose time reading every new request, deciding the category, choosing the
              right owner, and manually notifying stakeholders. High-priority issues can sit in the wrong
              queue while routine tickets interrupt specialist teams.
            </p>
          </CaseSection>

          <CaseSection title="Our Solution">
            <p>
              FlowNexa built a ticket automation workflow that combines AI triage with automation logic. The
              system interprets each ticket, applies priority and routing rules, and triggers n8n-style actions
              for assignment, notifications, CRM updates, and escalation handling.
            </p>
          </CaseSection>

          <section className="py-8">
            <SectionTitle title="Key Features" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-surface hover-lift rounded-2xl p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <CaseSection title="How It Works" dark>
            <ul className="space-y-4">
              {workflow.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-white/85">
                  <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Impact" dark>
            <ul className="space-y-4 text-sm leading-6 text-white/85">
              <li>Reduces repetitive ticket reading, tagging, and assignment work for support teams.</li>
              <li>Improves first response speed by moving new tickets to the correct queue faster.</li>
              <li>Helps managers catch high-priority and SLA-sensitive tickets earlier.</li>
              <li>Creates a scalable automation layer for helpdesk, CRM, and team notification systems.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack" dark>
            <div className="grid gap-4 text-sm leading-6 text-white/85 md:grid-cols-2">
              <p>
                <strong className="text-white">Automation:</strong> n8n-style workflow orchestration, webhooks, API triggers
              </p>
              <p>
                <strong className="text-white">AI Layer:</strong> NLP classification, urgency detection, routing recommendation
              </p>
              <p>
                <strong className="text-white">Integrations:</strong> Helpdesk, CRM, email, Slack-style notifications
              </p>
              <p>
                <strong className="text-white">Workflow Scope:</strong> Intake, assignment, escalation, status updates
              </p>
            </div>
          </CaseSection>
        </div>
      </main>
    </div>
  );
}

function CaseSection({
  title,
  children,
  dark = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "my-8 rounded-2xl border border-white/10 bg-foreground p-6 text-background md:p-8"
          : "py-8"
      }
    >
      <SectionTitle title={title} dark={dark} />
      <div className={dark ? "mt-6 space-y-4 text-white/85" : "mt-6 space-y-4 text-muted-foreground"}>
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ title, dark = false }: { title: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-1 rounded-full bg-accent" />
      <h2 className={`font-display text-3xl font-bold ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
    </div>
  );
}
