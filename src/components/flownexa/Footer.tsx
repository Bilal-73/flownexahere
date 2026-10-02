import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Magnetic, Reveal } from "./motion";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Services", to: "/services" },
      { label: "Products", to: "/portfolio" },
      { label: "SalesMint", to: "/portfolio/salesmint" },
      { label: "Clinify", to: "/portfolio/clinify" },
    ],
  },
] as const;

export function Footer({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {showCta && (
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Next step
            </p>
          </Reveal>
          <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={0.05}>
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl xl:text-7xl">
                Got a workflow that eats your week?{" "}
                <span className="text-accent-bright">Let's automate it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Magnetic>
                <Link
                  to="/contact"
                  className="group relative inline-flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent text-center font-semibold text-accent-foreground md:h-44 md:w-44"
                >
                  <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-background transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                  <span className="relative flex flex-col items-center gap-1 transition-colors duration-300 group-hover:text-foreground">
                    Start a project
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-t border-background/15 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-display text-xl font-bold tracking-tight"
            >
              <Logo className="h-9 w-9 ring-1 ring-background/30" />
              <span>FlowNexa</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
              An AI engineering studio building chatbots, workflow automation and custom LLM
              software that runs reliably in production.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href="mailto:flownexahere@gmail.com"
                className="inline-flex items-center gap-2 text-background/80 transition-colors hover:text-accent-bright"
              >
                <Mail className="h-4 w-4" /> flownexahere@gmail.com
              </a>
              <a
                href="https://wa.me/923174100973"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/80 transition-colors hover:text-accent-bright"
              >
                <MessageCircle className="h-4 w-4" /> +92 317 410 0973
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-background/75 transition-colors hover:text-background"
                    >
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
              Studio
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/75">
              Based in Pakistan.
              <br />
              Working with teams worldwide.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-background/15 px-3 py-1.5 text-xs text-background/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Taking on new projects
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-background/15 py-8 text-xs text-background/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FlowNexa. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="self-start transition-colors hover:text-background md:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the footer edge */}
      <div
        className="pointer-events-none select-none px-4 text-center font-display overflow-hidden whitespace-nowrap text-[17vw] leading-[0.75] font-bold tracking-tighter text-background/[0.05]"
        aria-hidden="true"
      >
        FLOWNEXA
      </div>
    </footer>
  );
}
