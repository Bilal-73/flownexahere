import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BellRing,
  Bot,
  CalendarCheck,
  ClipboardList,
  HeartPulse,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import clinifyBanner from "@/assets/clinify/clinifybanner-clean.png";
import clinifyProduct from "@/assets/clinify/clinify-clean.png";

export const Route = createFileRoute("/portfolio/clinify")({
  head: () => ({
    meta: [
      { title: "Clinify Case Study - FlowNexa" },
      {
        name: "description",
        content:
          "Clinify is a clinic workflow automation platform for patient management, appointment booking, doctors, notifications, and AI-driven assistance.",
      },
      { property: "og:title", content: "Clinify - Clinic Workflow Automation" },
      {
        property: "og:description",
        content:
          "A healthcare operations dashboard for appointments, patient records, medical teams, and clinic automation workflows.",
      },
    ],
  }),
  component: ClinifyCaseStudyPage,
});

const metadata = [
  { label: "Industry", value: "Healthcare & Clinic Operations" },
  { label: "Product Type", value: "Clinic management and automation dashboard" },
  { label: "Focus", value: "Patients, appointments, doctors, notifications, AI assistance" },
];

const features = [
  {
    title: "Clinic Dashboard",
    description: "A central screen for patient totals, today's appointments, completed appointments, and team status.",
    icon: ClipboardList,
  },
  {
    title: "Appointment Booking",
    description: "Booking workflows help clinics schedule visits and manage appointment activity.",
    icon: CalendarCheck,
  },
  {
    title: "Patient Management",
    description: "Patient records and status views give clinic teams a clearer operational picture.",
    icon: HeartPulse,
  },
  {
    title: "Doctor Directory",
    description: "Medical team cards display doctors, specialties, and availability indicators.",
    icon: Stethoscope,
  },
  {
    title: "Notifications",
    description: "Automated reminders and updates reduce missed appointments and manual follow-up.",
    icon: BellRing,
  },
  {
    title: "AI Assistance",
    description: "AI-driven assistance can support patient handling, admin workflows, and faster responses.",
    icon: Bot,
  },
];

const workflow = [
  "Clinic staff open the dashboard to review patients, appointments, and team availability.",
  "New appointments are booked and assigned to the relevant doctor or service flow.",
  "Patient records and appointment statuses are updated through the clinic dashboard.",
  "Automated notifications can remind patients and staff about upcoming or changed appointments.",
  "AI assistance supports routine handling, admin questions, and workflow guidance.",
  "Managers review completed appointments and clinic activity to keep operations moving smoothly.",
];

function ClinifyCaseStudyPage() {
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
              src={clinifyBanner}
              alt="Clinify clinic dashboard product banner"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 pt-10">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <Stethoscope className="h-4 w-4" />
                Healthcare Automation Product
              </div>
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                Clinify - Clinic Workflow Automation
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
                Clinify is a clinic workflow automation platform built to help healthcare teams manage
                patients, appointments, doctors, and routine communication from a focused operational
                dashboard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden rounded-2xl"
            >
              <img
                src={clinifyProduct}
                alt="Clinify healthcare dashboard screen"
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
              The Clinify dashboard gives clinics a clear view of core operations: total patients, today's
              appointments, completed appointments, patient records, and the medical team.
            </p>
            <p>
              It is designed for clinics that want a cleaner way to organize daily work, reduce manual
              coordination, and prepare for automated patient communication and AI-supported assistance.
            </p>
          </CaseSection>

          <CaseSection title="Client Challenge">
            <p>
              Clinics often rely on scattered scheduling notes, manual follow-ups, and disconnected patient
              information. This creates delays, missed reminders, and extra workload for front-desk and medical
              staff.
            </p>
          </CaseSection>

          <CaseSection title="Our Solution">
            <p>
              FlowNexa built Clinify as a clinic operations hub that brings appointment handling, patient
              visibility, doctor management, notifications, and AI-driven assistance into one responsive
              dashboard experience.
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
                  <UsersRound className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Impact" dark>
            <ul className="space-y-4 text-sm leading-6 text-white/85">
              <li>Improves clinic visibility with one dashboard for patients, appointments, and doctors.</li>
              <li>Reduces manual follow-up through notification-ready workflows.</li>
              <li>Helps staff coordinate appointments and patient activity more consistently.</li>
              <li>Creates a foundation for AI-assisted patient support and operational automation.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack" dark>
            <div className="grid gap-4 text-sm leading-6 text-white/85 md:grid-cols-2">
              <p>
                <strong className="text-white">Frontend:</strong> Responsive clinic dashboard
              </p>
              <p>
                <strong className="text-white">Automation:</strong> Appointment reminders, notifications, workflow triggers
              </p>
              <p>
                <strong className="text-white">Core Modules:</strong> Patients, doctors, appointments, clinic dashboard
              </p>
              <p>
                <strong className="text-white">AI Scope:</strong> Admin assistance, patient guidance, workflow support
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
    <section className="py-8">
      <SectionTitle title={title} />
      <div
        className={
          dark
            ? "mt-5 rounded-2xl border border-accent/20 bg-black/80 p-6 text-white shadow-2xl shadow-accent/5 md:p-8"
            : "mt-5 max-w-4xl space-y-4 text-base leading-8 text-muted-foreground"
        }
      >
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="flex items-center font-display text-2xl font-semibold">
      <span className="mr-3 h-7 w-1 rounded-full bg-accent" />
      {title}
    </h2>
  );
}
