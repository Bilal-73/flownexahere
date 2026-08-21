import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Footer } from "@/components/flownexa/Footer";
import { Mail, MessageCircle, Send, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FlowNexa" },
      { name: "description", content: "Book a free AI consultation with FlowNexa. Email or WhatsApp us anytime." },
      { property: "og:title", content: "Contact FlowNexa" },
      { property: "og:description", content: "Let's build something intelligent together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Chatbot & Conversational Agent",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Step 1: Attempt Netlify serverless endpoint
      let netlifySuccess = false;
      try {
        const response = await fetch("/.netlify/functions/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          netlifySuccess = true;
        }
      } catch (err) {
        console.warn("Netlify function endpoint not reachable, attempting direct email gateway...", err);
      }

      if (netlifySuccess) {
        setSent(true);
        setFormData({ name: "", email: "", service: "AI Chatbot & Conversational Agent", message: "" });
        setTimeout(() => setSent(false), 6000);
        return;
      }

      // Step 2: Fallback to direct FormSubmit email gateway to flownexahere@gmail.com
      const formSubmitResponse = await fetch("https://formsubmit.co/ajax/flownexahere@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `[FlowNexa Inquiry] ${formData.service} — ${formData.name}`,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _template: "table"
        }),
      });

      if (formSubmitResponse.ok) {
        setSent(true);
        setFormData({ name: "", email: "", service: "AI Chatbot & Conversational Agent", message: "" });
        setTimeout(() => setSent(false), 6000);
      } else {
        const data = await formSubmitResponse.json();
        setError(data.message || "Failed to deliver email. Please reach us at flownexahere@gmail.com.");
      }
    } catch (err) {
      setError("Network error sending inquiry. Please email flownexahere@gmail.com directly.");
      console.error("Email submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-between">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column — Title & Direct Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get In Touch
            </div>
            <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Let's build <br />
              something <br />
              <span className="text-accent">that scales.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Have an AI project, workflow automation, or custom LLM requirement? Send us a message and we'll reply within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <a 
                href="mailto:flownexahere@gmail.com" 
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Direct Email</div>
                  <div className="font-medium text-foreground group-hover:text-accent transition-colors">flownexahere@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/03174100973" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp Chat</div>
                  <div className="font-medium text-foreground group-hover:text-accent transition-colors">+92 (317) 410-0973</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            {sent && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-accent">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Inquiry Received!</p>
                  <p className="text-xs text-foreground/80">Thank you. Your message has been sent to flownexahere@gmail.com. We'll reply within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <input 
                    required 
                    type="text"
                    placeholder="Jane Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b-2 border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/40" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Work Email *
                  </label>
                  <input 
                    required 
                    type="email" 
                    placeholder="jane@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b-2 border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/40" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Service Scope
                </label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent"
                >
                  <option value="AI Chatbot & Conversational Agent" className="bg-card text-foreground">AI Chatbot & Conversational Agent</option>
                  <option value="Workflow & Process Automation" className="bg-card text-foreground">Workflow & Process Automation</option>
                  <option value="Custom LLM Solutions & Fine-Tuning" className="bg-card text-foreground">Custom LLM Solutions & Fine-Tuning</option>
                  <option value="Voice & Audio Intelligence" className="bg-card text-foreground">Voice & Audio Intelligence</option>
                  <option value="AI Strategy & Consulting" className="bg-card text-foreground">AI Strategy & Consulting</option>
                  <option value="Other Custom Requirement" className="bg-card text-foreground">Other Custom Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Project Details *
                </label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="Tell us about your current workflow, system stack, or goals…" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b-2 border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/40" 
                />
              </div>

              {error && <p className="text-sm font-medium text-red-600">{error}</p>}

              <div>
                <button 
                  type="submit" 
                  disabled={loading || sent}
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{sent ? "Message Sent!" : "Submit Inquiry"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
