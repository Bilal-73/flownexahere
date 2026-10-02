import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Hero } from "@/components/flownexa/Hero";
import { Footer } from "@/components/flownexa/Footer";
import {
  Process,
  ServicesPreview,
  StackMarquee,
  Statement,
  WorkShowcase,
} from "@/components/flownexa/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowNexa — AI Automation & Intelligent Systems" },
      { name: "description", content: "FlowNexa builds production AI — chatbots, workflow automation, and custom LLM tools for businesses that need it working, not just demoed." },
      { property: "og:title", content: "FlowNexa — AI Automation & Intelligent Systems" },
      { property: "og:description", content: "Production AI: chatbots, workflow engines, and custom LLM pipelines." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <StackMarquee />
        <Statement />
        <ServicesPreview />
        <WorkShowcase />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
