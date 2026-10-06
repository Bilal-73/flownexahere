import { Outlet, Link, createRootRoute, useRouterState } from "@tanstack/react-router";
import { MotionConfig, motion } from "framer-motion";
import { EASE, ScrollProgress } from "@/components/flownexa/motion";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[8rem] font-semibold leading-none tracking-tighter text-accent/20">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FlowNexa — AI Automation Agency" },
      { name: "description", content: "FlowNexa builds production AI — chatbots, workflow automation, and custom LLM solutions." },
      { name: "author", content: "FlowNexa" },
      { property: "og:title", content: "FlowNexa — AI Automation Agency" },
      { property: "og:description", content: "Production AI — chatbots, workflow automation, and custom LLM solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FlowNexa — AI Automation Agency" },
      { name: "twitter:description", content: "Production AI — chatbots, workflow automation, and custom LLM solutions." },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {/* Keyed on pathname so every navigation gets a soft entrance. */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <Outlet />
      </motion.div>
    </MotionConfig>
  );
}
