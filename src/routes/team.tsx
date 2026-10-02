import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { PageHeader } from "@/components/flownexa/PageHeader";
import { TeamsSlider } from "@/components/flownexa/TeamsSlider";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — FlowNexa" },
      { name: "description", content: "Meet the engineering and AI team behind FlowNexa." },
      { property: "og:title", content: "FlowNexa Team" },
      { property: "og:description", content: "Meet our passionate AI engineers and designers." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24 w-full">
        <PageHeader eyebrow="Engineering Team" title="Meet the engineers." accent={["engineers"]}>
          A small, highly-focused group of AI engineers, software developers, and product designers building custom intelligent systems.
        </PageHeader>

        <div className="mt-16">
          <TeamsSlider />
        </div>
      </main>

      <Footer />
    </div>
  );
}
