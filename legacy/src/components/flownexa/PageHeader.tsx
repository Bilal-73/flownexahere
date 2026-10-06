import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, Eyebrow, SplitText } from "./motion";

/**
 * Shared header for inner pages. `title` uses "\n" for line breaks;
 * any word listed in `accent` is set in the accent colour.
 */
export function PageHeader({
  eyebrow,
  title,
  accent = [],
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string[];
  children?: ReactNode;
}) {
  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl lg:text-7xl">
        <SplitText text={title} accentWords={accent} delay={0.1} />
      </h1>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
