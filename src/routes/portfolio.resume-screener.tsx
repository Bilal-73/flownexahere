import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Brain,
  Contact,
  Database,
  FileText,
  Server,
  Upload,
} from "lucide-react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import resumeBanner from "@/assets/resumeScrener/resumebanner-clean.png";
import resumeProduct from "@/assets/resumeScrener/ResumeScrener-clean.png";

export const Route = createFileRoute("/portfolio/resume-screener")({
  head: () => ({
    meta: [
      { title: "AI Resume Screener Case Study - FlowNexa" },
      {
        name: "description",
        content:
          "AI Resume Classification and Details Extraction automates resume screening, category prediction, and contact detail extraction through a FastAPI backend.",
      },
      { property: "og:title", content: "AI Resume Classification & Details Extraction" },
      {
        property: "og:description",
        content:
          "Production-ready resume screening API using FastAPI, Textract, TF-IDF, Random Forest classification, and regex contact extraction.",
      },
    ],
  }),
  component: ResumeScreenerCaseStudyPage,
});

const metadata = [
  { label: "Industry", value: "HR Tech & Recruitment" },
  { label: "Product Type", value: "AI Resume Screening API" },
  { label: "Backend", value: "Python, FastAPI, Textract, TF-IDF, Random Forest" },
];

const features = [
  {
    title: "Multi-Format Uploads",
    description: "Accepts PDF, DOCX, and TXT resumes through a simple upload flow.",
    icon: Upload,
  },
  {
    title: "Job Category Prediction",
    description: "Uses TF-IDF features and a trained Random Forest model to classify resumes by role category.",
    icon: Brain,
  },
  {
    title: "Contact Extraction",
    description: "Pulls key details such as emails and phone numbers with regex-based extraction.",
    icon: Contact,
  },
  {
    title: "REST API Endpoint",
    description: "Exposes a lightweight /upload-resume endpoint that can plug into HR dashboards.",
    icon: Server,
  },
  {
    title: "Runtime Model Loading",
    description: "Loads rf_classifier.pkl and tfidf_vectorizer.pkl at runtime for fast, portable inference.",
    icon: Database,
  },
  {
    title: "Recruitment Ready",
    description: "Designed as a clean backend service for React frontends and recruitment platforms.",
    icon: BadgeCheck,
  },
];

const workflow = [
  "A user uploads a resume in PDF, DOCX, or TXT format.",
  "The FastAPI backend receives the file through the /upload-resume endpoint.",
  "Textract parses the uploaded document and converts it into raw resume text.",
  "The text is transformed with a TF-IDF vectorizer and classified by a Random Forest model.",
  "Regex extraction identifies contact details such as email addresses and phone numbers.",
  "The API returns the predicted category and extracted details to the frontend or HR platform.",
];

function ResumeScreenerCaseStudyPage() {
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
              src={resumeBanner}
              alt="AI Resume Classification and Details Extraction product banner"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 pt-10">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <FileText className="h-4 w-4" />
                AI Resume Product
              </div>
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                AI Resume Classification & Details Extraction
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
                This project automates one of HR&apos;s most time-consuming tasks: screening resumes. Users
                upload a resume, and the system predicts the job category it belongs to while extracting key
                contact details such as emails and phone numbers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden rounded-2xl"
            >
              <img
                src={resumeProduct}
                alt="Resume Screener mobile and tablet screens"
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
              The system predicts whether a resume belongs to categories such as Data Science, Engineering,
              or Marketing, then returns structured details that can feed directly into recruitment platforms
              or HR dashboards.
            </p>
            <p>
              The result is a lightweight, production-ready API that helps HR teams reduce manual review time
              while keeping the screening workflow easy to integrate.
            </p>
          </CaseSection>

          <CaseSection title="Backend">
            <p>
              The backend is built in Python with FastAPI and exposes a REST endpoint named /upload-resume.
              Uploaded documents are parsed with Textract, converted into text, and transformed using a TF-IDF
              vectorizer.
            </p>
            <p>
              A pre-trained Random Forest classifier predicts the job category, while regex-based extraction
              identifies contact details. The rf_classifier.pkl and tfidf_vectorizer.pkl models are loaded at
              runtime to keep the service fast and easy to connect to frontend applications like React.
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
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Impact" dark>
            <ul className="space-y-4 text-sm leading-6 text-white/85">
              <li>Reduces manual resume screening effort for recruiters and HR teams.</li>
              <li>Standardizes classification and contact extraction across uploaded resumes.</li>
              <li>Provides a fast backend service that can be embedded into hiring dashboards.</li>
              <li>Creates a practical foundation for job matching, ranking, and applicant workflow automation.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack" dark>
            <div className="grid gap-4 text-sm leading-6 text-white/85 md:grid-cols-2">
              <p>
                <strong className="text-white">Backend:</strong> Python, FastAPI, REST API
              </p>
              <p>
                <strong className="text-white">Parsing:</strong> Textract for PDF, DOCX, and TXT resume text
              </p>
              <p>
                <strong className="text-white">Machine Learning:</strong> TF-IDF vectorizer, Random Forest classifier
              </p>
              <p>
                <strong className="text-white">Extraction:</strong> Regex-based email and phone detail parsing
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
