import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  Brain,
  CalendarCheck,
  Dumbbell,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import aiphaBanner from "@/assets/Aipha/Aiphabanner-clean.png";
import aiphaProduct from "@/assets/Aipha/Aipha-product-clean.png";

export const Route = createFileRoute("/portfolio/aipha")({
  head: () => ({
    meta: [
      { title: "AIPHA Case Study - FlowNexa" },
      {
        name: "description",
        content:
          "AIPHA is an AI fitness and nutrition assistant by FlowNexa that gives personalized workout, diet, and wellness guidance through a simple chat interface.",
      },
      { property: "og:title", content: "AIPHA - AI Fitness Assistant" },
      {
        property: "og:description",
        content:
          "Personalized fitness, meal, and wellness recommendations powered by conversational AI.",
      },
    ],
  }),
  component: AiphaCaseStudyPage,
});

const metadata = [
  { label: "Industry", value: "Health, Fitness & Wellness" },
  { label: "Product Type", value: "AI Assistant / Mobile Experience" },
  { label: "Focus", value: "Workouts, nutrition, reminders, and chat guidance" },
];

const features = [
  {
    title: "Conversational Guidance",
    description:
      "Users can ask health and fitness questions in a chat format and receive practical, goal-based responses.",
    icon: MessageCircle,
  },
  {
    title: "Workout Recommendations",
    description:
      "AIPHA suggests exercise plans for fat loss, strength, cardio, and full-body training based on user goals.",
    icon: Dumbbell,
  },
  {
    title: "Meal Suggestions",
    description:
      "The assistant recommends calorie-conscious meals with protein, carbs, and balanced food options.",
    icon: Utensils,
  },
  {
    title: "Personal Goal Support",
    description:
      "Plans can adapt around age, weight-loss goals, lifestyle needs, and daily health activity tracking.",
    icon: Activity,
  },
  {
    title: "Smart Reminders",
    description:
      "The product is designed to support daily reminders for hydration, meals, workouts, and wellness habits.",
    icon: CalendarCheck,
  },
  {
    title: "Safe Product Foundation",
    description:
      "AIPHA keeps recommendations structured and readable so users can understand the advice before acting on it.",
    icon: ShieldCheck,
  },
];

const steps = [
  "User asks a fitness, diet, or wellness question in the AIPHA chat.",
  "The assistant interprets goals such as weight loss, activity level, or preferred food choices.",
  "AIPHA returns a structured plan with workout and diet recommendations.",
  "The user can continue the conversation to refine routines, meals, and daily habits.",
];

function AiphaCaseStudyPage() {
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
              src={aiphaBanner}
              alt="AIPHA product banner showing mobile and tablet AI assistant screens"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 pt-10">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <Sparkles className="h-4 w-4" />
                AI Fitness Product
              </div>
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                AIPHA - AI Fitness Assistant
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
                AIPHA is a conversational AI assistant for fitness, nutrition, and daily wellness. The product
                gives users a simple chat experience where they can ask for goal-based workouts, meal ideas,
                and health activity support without moving through complicated screens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden rounded-2xl"
            >
              <img
                src={aiphaProduct}
                alt="AIPHA mobile and tablet chat screens"
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
              The AIPHA screens show a clean mobile-first assistant that responds to questions about exercise
              and food choices. Users can describe a goal such as weight loss and receive customized workout
              recommendations, diet suggestions, and practical next steps in one readable answer.
            </p>
            <p>
              The product is built around quick guidance: ask a question, receive a structured plan, then refine
              the recommendation through follow-up prompts.
            </p>
          </CaseSection>

          <CaseSection title="Client Challenge">
            <p>
              Fitness users often jump between separate apps, search results, calorie notes, and workout lists.
              That makes planning inconsistent and hard to maintain, especially for people who need simple daily
              direction.
            </p>
            <p>
              AIPHA solves this by turning the planning experience into a single assistant that can explain what
              to do, what to eat, and how to adjust the plan from the same conversation.
            </p>
          </CaseSection>

          <CaseSection title="Our Solution">
            <p>
              FlowNexa designed AIPHA as an AI-powered fitness companion with a focused chat interface. The
              assistant presents workout routines, diet recommendations, and habit support in structured blocks
              that are easy to scan on phones and tablets.
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
              {steps.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-white/85">
                  <Brain className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Impact" dark>
            <ul className="space-y-4 text-sm leading-6 text-white/85">
              <li>Creates a simpler way to get fitness and nutrition advice from one assistant.</li>
              <li>Reduces time spent searching for workouts, diet ideas, and goal-based routines.</li>
              <li>Supports personalized planning for users who want practical daily health direction.</li>
              <li>Provides a scalable product foundation for future tracking, reminders, and deeper personalization.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack" dark>
            <div className="grid gap-4 text-sm leading-6 text-white/85 md:grid-cols-2">
              <p>
                <strong className="text-white">AI:</strong> Conversational AI, recommendation logic, prompt workflows
              </p>
              <p>
                <strong className="text-white">Product:</strong> Mobile-first assistant, chat UI, structured responses
              </p>
              <p>
                <strong className="text-white">Wellness Scope:</strong> Workout planning, diet guidance, daily habits
              </p>
              <p>
                <strong className="text-white">Experience:</strong> Responsive screens for phone and tablet usage
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
