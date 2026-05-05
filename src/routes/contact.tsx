import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { Mail, MessageCircle, Send } from "lucide-react";

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
    service: "AI Chatbot",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // For local development, simulate success
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSent(true);
        setFormData({ name: "", email: "", service: "AI Chatbot", message: "" });
        setTimeout(() => setSent(false), 5000);
        setLoading(false);
        console.log("📧 Demo mode - Message logged:", formData);
        return;
      }

      // For production, use Netlify function
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", service: "AI Chatbot", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(data.error || "Failed to send message");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl font-bold md:text-6xl"
        >
          Let's <span className="text-gradient">Talk</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Tell us about your project. We reply within 24 hours.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-8 lg:col-span-2"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input 
                required 
                placeholder="Your name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-lg border border-border/60 bg-background/40 px-4 py-3 outline-none focus:border-accent" 
              />
              <input 
                required 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-lg border border-border/60 bg-background/40 px-4 py-3 outline-none focus:border-accent" 
              />
            </div>
            <select 
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="mt-5 w-full rounded-lg border border-border/60 bg-background/40 px-4 py-3 outline-none focus:border-accent"
            >
              <option>AI Chatbot</option>
              <option>Workflow Automation</option>
              <option>Custom LLM Solution</option>
              <option>AI Strategy & Consulting</option>
              <option>Other</option>
            </select>
            <textarea 
              required 
              rows={6} 
              placeholder="Tell us about your project…" 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-5 w-full rounded-lg border border-border/60 bg-background/40 px-4 py-3 outline-none focus:border-accent" 
            />
            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
            <button 
              type="submit" 
              disabled={loading || sent}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/40 transition-all hover:shadow-primary/70 hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              {sent ? "✓ Message sent!" : loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <div className="space-y-4">
            <a href="mailto:hello@flownexa.ai" className="glass-strong flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-accent/50">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">flownexahere@gmail.com</div>
              </div>
            </a>
            <a href="https://wa.me/03174100973" className="glass-strong flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-accent/50">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Chat with our team</div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
