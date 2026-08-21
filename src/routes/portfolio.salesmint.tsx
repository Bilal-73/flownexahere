import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  CreditCard,
  Database,
  FileText,
  ReceiptText,
  Search,
  ShoppingCart,
} from "lucide-react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import salesmintBanner from "@/assets/salesmint/selesmintbanner-clean.png";
import salesmintProduct from "@/assets/salesmint/Salesmint-clean.png";

export const Route = createFileRoute("/portfolio/salesmint")({
  head: () => ({
    meta: [
      { title: "SalesMint Case Study - FlowNexa" },
      {
        name: "description",
        content:
          "SalesMint is an AI-powered POS and billing platform for product checkout, inventory control, sales tracking, and business reporting.",
      },
      { property: "og:title", content: "SalesMint - AI POS System" },
      {
        property: "og:description",
        content:
          "A modern POS and billing product with inventory, customer, sales history, and reporting workflows.",
      },
    ],
  }),
  component: SalesMintCaseStudyPage,
});

const metadata = [
  { label: "Industry", value: "Retail, POS & Inventory" },
  { label: "Product Type", value: "Billing and business management system" },
  { label: "Focus", value: "Checkout, products, inventory, customers, reports" },
];

const features = [
  {
    title: "POS & Billing",
    description: "A focused checkout screen for searching products, adding items, applying tax, and taking payment.",
    icon: ReceiptText,
  },
  {
    title: "Shopping Cart Workflow",
    description: "Line-item cart management with quantity, price, totals, and clean cashier interaction.",
    icon: ShoppingCart,
  },
  {
    title: "Product Search",
    description: "Fast product lookup helps cashiers find items quickly during active billing sessions.",
    icon: Search,
  },
  {
    title: "Inventory Control",
    description: "Inventory modules support stock visibility, product organization, and business operations.",
    icon: Boxes,
  },
  {
    title: "Sales History",
    description: "Sales records give teams a reliable view of completed transactions and store activity.",
    icon: BarChart3,
  },
  {
    title: "Payment Handling",
    description: "Cash, card, and other payment options are represented in a simple checkout flow.",
    icon: CreditCard,
  },
];

const workflow = [
  "The cashier opens the POS and searches for products from the billing screen.",
  "Selected products are added to the shopping cart with price, quantity, and line totals.",
  "The system calculates subtotal, tax, and final payable amount.",
  "The cashier selects a payment method such as cash, card, or other.",
  "The sale is recorded for sales history, reports, and inventory visibility.",
  "Managers can review products, customers, inventory, sales history, and reports from the dashboard.",
];

function SalesMintCaseStudyPage() {
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
              src={salesmintBanner}
              alt="SalesMint POS and billing product banner"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-6 pt-10">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <ReceiptText className="h-4 w-4" />
                AI POS Product
              </div>
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                SalesMint - AI POS System
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
                SalesMint is a modern POS and billing platform for businesses that need faster checkout,
                clearer inventory visibility, and practical sales tracking. The product brings cashier workflows,
                product management, customers, inventory, and reporting into one dashboard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-surface overflow-hidden rounded-2xl"
            >
              <img
                src={salesmintProduct}
                alt="SalesMint POS dashboard screen"
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
              The SalesMint screen shows a cashier-first billing interface with product search, cart totals,
              tax calculation, and payment choices. It is designed for everyday retail operations where speed
              and clarity matter at the counter.
            </p>
            <p>
              Beyond checkout, the sidebar organizes key business modules including dashboard, POS billing,
              products, categories, inventory, customers, sales history, reports, users, settings, and backup.
            </p>
          </CaseSection>

          <CaseSection title="Client Challenge">
            <p>
              Small and growing businesses often manage billing, inventory, and sales records across separate
              tools or manual spreadsheets. That creates slow checkout, missed stock updates, and limited insight
              into daily performance.
            </p>
          </CaseSection>

          <CaseSection title="Our Solution">
            <p>
              FlowNexa built SalesMint as a unified POS experience that keeps the checkout workflow simple while
              giving the business a stronger operational foundation. The interface supports quick product lookup,
              cart management, payment capture, and reporting-ready transaction data.
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
                  <ShoppingCart className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Impact" dark>
            <ul className="space-y-4 text-sm leading-6 text-white/85">
              <li>Speeds up billing with a direct cashier-focused checkout experience.</li>
              <li>Improves visibility across products, inventory, customers, and sales history.</li>
              <li>Reduces manual record keeping by storing transaction-ready sales data.</li>
              <li>Creates a scalable foundation for analytics, smarter stock alerts, and AI-assisted insights.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack" dark>
            <div className="grid gap-4 text-sm leading-6 text-white/85 md:grid-cols-2">
              <p>
                <strong className="text-white">Frontend:</strong> Responsive dashboard and POS interface
              </p>
              <p>
                <strong className="text-white">Core Modules:</strong> Billing, products, inventory, customers, reports
              </p>
              <p>
                <strong className="text-white">Data:</strong> Sales history, cart totals, tax, product records
              </p>
              <p>
                <strong className="text-white">AI Scope:</strong> Business insights, recommendations, and smart reporting foundation
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
