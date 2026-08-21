import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-16 pb-12 bg-background text-foreground">
      {/* Translucent Brand Watermark */}
      <div 
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none font-display text-[9rem] font-bold tracking-widest text-foreground/[0.04] whitespace-nowrap"
        aria-hidden="true"
      >
        FLOWNEXA
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3 font-display text-xl font-bold tracking-tight">
            <Logo className="h-8 w-8" />
            <span>FlowNexa</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-accent">Home</Link>
            <Link to="/about" className="transition-colors hover:text-accent">About</Link>
            <Link to="/services" className="transition-colors hover:text-accent">Services</Link>
            <Link to="/portfolio" className="transition-colors hover:text-accent">Products</Link>
            <Link to="/team" className="transition-colors hover:text-accent">Team</Link>
            <Link to="/contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FlowNexa. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with purpose in Pakistan <span className="text-accent">🇵🇰</span> • Serving Clients Globally
          </p>
        </div>
      </div>
    </footer>
  );
}
