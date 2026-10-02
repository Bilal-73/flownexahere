import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Database,
  Palette,
  ScanSearch,
  Shirt,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { NextCaseStudy } from "@/components/flownexa/NextCaseStudy";
import fashionBanner from "@/assets/Ai fashion Assistant/Ai-fashionbanner-clean.png";
import fashionProduct from "@/assets/Ai fashion Assistant/Ai-fashion-clean.png";

export const Route = createFileRoute("/portfolio/fashion-stylist")({
  head: () => ({
    meta: [
      { title: "AI Virtual Fashion Stylist Case Study - FlowNexa" },
      {
        name: "description",
        content:
          "AI-Based Virtual Fashion Stylist uses computer vision and machine learning to detect clothing, extract dominant colors, and recommend matching outfits.",
      },
      { property: "og:title", content: "AI-Based Virtual Fashion Stylist" },
      {
        property: "og:description",
        content:
          "Fashion recommendation system using YOLOv8, KMeans, Flask, and MySQL for wardrobe-based outfit suggestions.",
      },
    ],
  }),
  component: FashionStylistCaseStudyPage,
});

const metadata = [
  { label: "Industry", value: "Fashion Tech & Personal Styling" },
  { label: "Product Type", value: "AI outfit recommendation system" },
  { label: "Backend", value: "Flask, YOLOv8, KMeans, MySQL" },
];

const features = [
  {
    title: "Image-Based Styling",
    description: "Users upload clothing images so the system can analyze garments visually.",
    icon: Camera,
  },
  {
    title: "Garment Detection",
    description: "YOLOv8 detects clothing items from user-uploaded images for wardrobe understanding.",
    icon: ScanSearch,
  },
  {
    title: "Dominant Color Extraction",
    description: "KMeans extracts dominant colors from garments to support matching decisions.",
    icon: Palette,
  },
  {
    title: "Wardrobe Management",
    description: "Users can store and manage wardrobe items that power personalized recommendations.",
    icon: Shirt,
  },
  {
    title: "Personalized Suggestions",
    description: "Recommendations are based on color compatibility and user wardrobe data.",
    icon: WandSparkles,
  },
  {
    title: "User Accounts",
    description: "The Flask backend handles authentication and user-specific wardrobe records.",
    icon: UserRound,
  },
];

const workflow = [
  "The user uploads or selects a clothing image from the mobile application.",
  "The Flask API receives the request and communicates with the AI module.",
  "YOLOv8 detects the garment in the uploaded image.",
  "KMeans extracts dominant colors from the detected clothing item.",
  "The system compares colors against a predefined color compatibility model.",
  "Matching outfits are recommended using the user's saved wardrobe data.",
];

function FashionStylistCaseStudyPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />

      <main>
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
              src={fashionBanner}
              alt="AI Virtual Fashion Stylist product banner"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 pt-10">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <Sparkles className="h-4 w-4" />
                AI Fashion Product
              </div>
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                AI-Based Virtual Fashion Stylist
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
                This project develops an intelligent fashion recommendation system that assists users in
                selecting suitable outfits by analyzing clothing items with computer vision and machine
                learning. It simplifies daily outfit selection while showing how AI can power practical
                personal styling experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden rounded-2xl"
            >
              <img
                src={fashionProduct}
                alt="AI Virtual Fashion Stylist mobile and tablet screens"
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

          <CaseSection title="Purpose">
            <p>
              The system detects garments from user-uploaded images, extracts their dominant colors, and
              recommends matching outfits based on a predefined color compatibility model and user wardrobe
              data.
            </p>
            <p>
              It helps users make daily styling decisions faster, improves wardrobe usage, and demonstrates a
              real-world integration of computer vision, machine learning, and mobile product design.
            </p>
          </CaseSection>

          <CaseSection title="Backend">
            <p>
              The backend is developed using Flask with a Python API architecture. It handles user
              authentication, wardrobe management, and communication between the mobile application and the AI
              module.
            </p>
            <p>
              The AI layer integrates YOLOv8 for clothing detection and KMeans for dominant color extraction.
              A MySQL database stores user data, wardrobe items, and generated outfit recommendations.
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
                  <Shirt className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Impact" dark>
            <ul className="space-y-4 text-sm leading-6 text-white/85">
              <li>Simplifies outfit selection by turning wardrobe data into actionable recommendations.</li>
              <li>Uses garment detection and color extraction to make styling suggestions more contextual.</li>
              <li>Improves personalization through saved user wardrobe items and recommendation history.</li>
              <li>Creates a strong foundation for fashion retail, closet apps, and AI styling assistants.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack" dark>
            <div className="grid gap-4 text-sm leading-6 text-white/85 md:grid-cols-2">
              <p>
                <strong className="text-white">Backend:</strong> Flask, Python API architecture
              </p>
              <p>
                <strong className="text-white">Computer Vision:</strong> YOLOv8 garment detection
              </p>
              <p>
                <strong className="text-white">Machine Learning:</strong> KMeans dominant color extraction
              </p>
              <p>
                <strong className="text-white">Database:</strong> MySQL for users, wardrobe items, and recommendations
              </p>
            </div>
          </CaseSection>
        </div>
      </main>

      <NextCaseStudy current="fashion-stylist" />
      <Footer />
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
