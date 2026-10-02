import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, CalendarCheck, Database, MessageCircle, Send } from "lucide-react";
import { EASE } from "./motion";

/*
 * Hero illustration: a live-looking automation pipeline.
 * Nodes are HTML (crisp text), connectors are SVG in the same 560×400
 * coordinate space, positioned with percentages so it scales fluidly.
 */

const W = 560;
const H = 400;

const pct = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

const outputs = [
  { y: 70, icon: Database, title: "CRM updated", meta: "Lead scored · 92" },
  { y: 200, icon: CalendarCheck, title: "Call booked", meta: "Thu · 3:30 PM" },
  { y: 330, icon: Send, title: "Team notified", meta: "#sales · Slack" },
];

const paths = [
  "M158 200 L210 200",
  ...outputs.map((o) => `M330 200 C362 200 352 ${o.y} 384 ${o.y}`),
];

const logLines = [
  "New WhatsApp message received",
  "Intent detected → book a demo",
  "Context pulled from 14 documents",
  "HubSpot contact created",
  "Calendar slot confirmed",
  "Summary posted to #sales",
];

export function FlowDiagram() {
  const reduce = useReducedMotion();
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setLine((l) => (l + 1) % logLines.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-[0_30px_80px_-30px_oklch(0.3_0.05_50/0.35)] sm:p-6">
        {/* Window chrome */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            lead-intake.flow · running
          </div>
        </div>

        {/* Dotted canvas */}
        <div
          className="relative aspect-[560/400] w-full rounded-2xl bg-background/60"
          style={{
            backgroundImage: "radial-gradient(oklch(0.15 0.01 75 / 0.09) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            {paths.map((d, i) => (
              <g key={d}>
                <motion.path
                  d={d}
                  stroke="var(--color-border)"
                  strokeWidth={2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.6 + i * 0.12 }}
                />
                {!reduce && (
                  <circle r={4} fill="var(--color-accent)">
                    <animateMotion
                      dur={i === 0 ? "1.4s" : "1.8s"}
                      begin={`${1.4 + i * 0.35}s`}
                      repeatCount="indefinite"
                      path={d}
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                  </circle>
                )}
              </g>
            ))}
          </svg>

          {/* Trigger node */}
          <Node x={8} y={200} delay={0.3} width={27}>
            <IconTile className="bg-emerald-500/10 text-emerald-700">
              <MessageCircle className="h-4 w-4" />
            </IconTile>
            <div className="min-w-0">
              <div className="truncate text-[10px] font-semibold sm:text-xs">WhatsApp</div>
              <div className="hidden truncate text-[11px] text-muted-foreground sm:block">
                "Can I book a demo?"
              </div>
            </div>
          </Node>

          {/* Agent node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            className="absolute flex w-[21%] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-foreground px-2 py-3 text-center text-background shadow-xl sm:py-4"
            style={pct(270, 200)}
          >
            <div className="relative mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-accent sm:h-11 sm:w-11">
              <Bot className="h-5 w-5" />
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-xl border border-accent"
                  animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </div>
            <div className="text-[11px] font-semibold sm:text-sm">AI Agent</div>
            <div className="text-[9px] text-background/60 sm:text-[11px]">RAG · tools</div>
          </motion.div>

          {outputs.map((o, i) => (
            <Node key={o.title} x={384} y={o.y} delay={0.9 + i * 0.12} width={31}>
              <IconTile className="bg-accent/10 text-accent">
                <o.icon className="h-4 w-4" />
              </IconTile>
              <div className="min-w-0">
                <div className="truncate text-[10px] font-semibold sm:text-xs">{o.title}</div>
                <div className="hidden truncate text-[11px] text-muted-foreground sm:block">
                  {o.meta}
                </div>
              </div>
            </Node>
          ))}
        </div>

        {/* Live log */}
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 font-mono text-[11px] text-muted-foreground sm:text-xs">
          <span className="text-accent">›</span>
          <div className="relative h-4 flex-1 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={line}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="absolute inset-0 truncate"
              >
                {logLines[line]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="hidden tabular-nums sm:inline">~1.2s</span>
        </div>
      </div>

      {/* Floating stat chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
        className="absolute top-20 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block"
      >
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Manual steps removed
        </div>
        <div className="mt-1 font-display text-2xl font-semibold">
          6 <span className="text-base text-muted-foreground">→</span>{" "}
          <span className="text-accent">0</span>
        </div>
      </motion.div>
    </div>
  );
}

function Node({
  x,
  y,
  delay,
  width,
  children,
}: {
  x: number;
  y: number;
  delay: number;
  width: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="absolute flex -translate-y-1/2 items-center gap-2 rounded-xl border border-border bg-card p-1.5 shadow-sm sm:p-2.5"
      style={{ ...pct(x, y), width: `${width}%` }}
    >
      {children}
    </motion.div>
  );
}

function IconTile({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:flex ${className}`}
    >
      {children}
    </div>
  );
}
