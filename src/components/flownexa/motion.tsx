import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";

/** House easing — a soft expo-out used for every entrance on the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/** Fades + lifts its children once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const Comp = motion[as];
  return (
    <Comp
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/**
 * Masked word-by-word headline reveal. Each word slides up from behind
 * its own clipping box, so the line feels typeset rather than faded in.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  accentWords = [],
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  accentWords?: string[];
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  let wordIndex = 0;

  const trigger = inView
    ? { initial: "hidden", whileInView: "show", viewport: { once: true } }
    : { initial: "hidden", animate: "show" };

  return (
    <motion.span className={className} {...trigger} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.split(" ").map((word) => {
            const i = wordIndex++;
            const isAccent = accentWords.includes(word.replace(/[.,]/g, ""));
            return (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
              >
                <motion.span
                  className={`inline-block ${isAccent ? "text-accent" : ""}`}
                  variants={{
                    hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
                    show: { y: "0%", opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: EASE, delay: delay + i * stagger }}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            );
          })}
        </span>
      ))}
    </motion.span>
  );
}

/** Pulls its child gently toward the cursor. Disabled for reduced motion. */
export function Magnetic({
  children,
  strength = 0.25,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  if (reduce) return <div className="inline-block">{children}</div>;

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Thin accent bar pinned to the top of the viewport that tracks page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}

/** Small uppercase label with an accent dot — the site's section eyebrow. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {children}
    </div>
  );
}
