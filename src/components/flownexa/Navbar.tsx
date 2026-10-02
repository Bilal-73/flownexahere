import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { EASE } from "./motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/portfolio" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

function isActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname.startsWith(to);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollY } = useScroll();

  // Hide on scroll down, reveal on scroll up — keeps the content unobstructed.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > 240 && y > prev && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const indicatorFor = hovered ?? links.find((l) => isActive(pathname, l.to))?.to;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
              scrolled || open
                ? "border border-border bg-card/85 shadow-[0_8px_30px_-12px_oklch(0_0_0/0.18)] backdrop-blur-md"
                : "border border-transparent bg-transparent"
            }`}
          >
            <Link
              to="/"
              className="relative z-10 flex items-center gap-3 font-display text-xl font-bold tracking-tight"
              onClick={() => setOpen(false)}
            >
              <Logo className="h-9 w-9" />
              <span className="text-foreground">FlowNexa</span>
            </Link>

            <nav className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onMouseEnter={() => setHovered(l.to)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(pathname, l.to)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {indicatorFor === l.to && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-foreground/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              ))}
            </nav>

            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent md:inline-flex"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <motion.span
                className="absolute h-[1.5px] w-5 bg-foreground"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
              <motion.span
                className="absolute h-[1.5px] w-5 bg-foreground"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-background px-6 pt-28 pb-10 md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <div key={l.to} className="overflow-hidden border-b border-border">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline justify-between py-4 font-display text-4xl font-semibold tracking-tight ${
                        isActive(pathname, l.to) ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {l.label}
                      <span className="font-body text-xs font-medium text-muted-foreground">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
              className="mt-auto space-y-4"
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-accent-foreground"
              >
                Book a free call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:flownexahere@gmail.com"
                className="block text-center text-sm text-muted-foreground"
              >
                flownexahere@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
