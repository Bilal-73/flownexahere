// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { AnimatedBackground } from "@/components/flownexa/Background";
// import { Navbar } from "@/components/flownexa/Navbar";
// import { ArrowUpRight } from "lucide-react";

// export const Route = createFileRoute("/portfolio")({
//   head: () => ({
//     meta: [
//       { title: "Portfolio — FlowNexa" },
//       { name: "description", content: "Selected AI projects and case studies delivered by FlowNexa." },
//       { property: "og:title", content: "FlowNexa Portfolio" },
//       { property: "og:description", content: "Case studies of chatbots, automation, and AI products we've shipped." },
//     ],
//   }),
//   component: PortfolioPage,
// });

// const projects = [
//   { 
//     title: "AI Resume Screener & Job Matcher", 
//     tag: "NLP / ML", 
//     desc: "AI system that classifies resumes, extracts skills using NER, and matches candidates with relevant job roles.", 
//     gradient: "from-primary/40 to-accent/40" 
//   },
//   { 
//     title: "SalesMint", 
//     tag: "AI POS System", 
//     desc: "AI-powered POS and billing platform with inventory, sales tracking, and intelligent business insights.", 
//     gradient: "from-accent/40 to-primary/40" 
//   },
//   { 
//     title: "AIPHA", 
//     tag: "AI Healthcare Assistant", 
//     desc: "AI-based personal health assistant for tracking daily health activities, reminders, and intelligent recommendations.", 
//     gradient: "from-primary/30 to-accent/50" 
//   },
//   { 
//     title: "AI Virtual Fashion Stylist", 
//     tag: "Computer Vision", 
//     desc: "Fashion recommendation system analyzing clothing items using computer vision to suggest personalized outfits.", 
//     gradient: "from-accent/50 to-primary/30" 
//   },
//   { 
//     title: "Clinify", 
//     tag: "Automation / n8n", 
//     desc: "Workflow automation platform for clinics integrating appointment handling, notifications, and AI-driven assistance.", 
//     gradient: "from-primary/40 to-accent/30" 
//   },
//   { 
//     title: "Ticket Automation", 
//     tag: "AI Automation", 
//     desc: "AI-powered ticket routing and automation workflow using n8n to reduce manual support handling.", 
//     gradient: "from-accent/30 to-primary/40" 
//   },
//   { 
//     title: "MediTranscribe", 
//     tag: "Speech-to-Text AI", 
//     desc: "Doctor-patient conversation transcription system converting medical discussions into structured notes.", 
//     gradient: "from-primary/40 to-accent/40" 
//   },
//   { 
//     title: "AuditX", 
//     tag: "Call Auditing AI", 
//     desc: "AI call auditing system analyzing conversations for quality assurance, compliance, and insights.", 
//     gradient: "from-accent/40 to-primary/40" 
//   },
//   { 
//     title: "NeuroSymbolic VQA", 
//     tag: "Neuro-Symbolic AI", 
//     desc: "Visual question answering system combining deep learning perception with symbolic reasoning.", 
//     gradient: "from-primary/30 to-accent/50" 
//   }
// ];


// function PortfolioPage() {
//   return (
//     <div className="relative min-h-screen text-foreground">
//       <AnimatedBackground />
//       <Navbar />
//       <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="font-display text-5xl font-bold md:text-6xl"
//         >
//           Our <span className="text-gradient">Products</span>
//         </motion.h1>
//         <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
//           A selection of AI products and automations we've crafted for ambitious teams.
//         </p>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//               className="glass-strong group cursor-pointer overflow-hidden rounded-2xl"
//             >
//               <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
//                 <div className="absolute inset-0 grid-bg opacity-30" />
//                 <div className="absolute right-4 top-4 rounded-full bg-background/30 p-2 backdrop-blur transition-transform group-hover:rotate-45">
//                   <ArrowUpRight className="h-4 w-4" />
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="text-xs uppercase tracking-wider text-accent">{p.tag}</div>
//                 <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/flownexa/Background";
import { Navbar } from "@/components/flownexa/Navbar";
import { ArrowUpRight } from "lucide-react";
import aiphaPreview from "@/assets/Aipha/Aipha-product-clean.png";
import resumePreview from "@/assets/resumeScrener/ResumeScrener-clean.png";
import salesmintPreview from "@/assets/salesmint/Salesmint-clean.png";
import fashionPreview from "@/assets/Ai fashion Assistant/Ai-fashion-clean.png";
import clinifyPreview from "@/assets/clinify/clinify-clean.png";
import ticketAutomationPreview from "@/assets/ticketAutomation/ticket-automation.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FlowNexa" },
      { name: "description", content: "Selected AI projects and case studies delivered by FlowNexa." },
      { property: "og:title", content: "FlowNexa Portfolio" },
      { property: "og:description", content: "Case studies of chatbots, automation, and AI products we've shipped." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
    { 
    title: "SalesMint", 
    tag: "AI POS System", 
    desc: "AI-powered POS and billing platform with inventory, sales tracking, and intelligent business insights.", 
    gradient: "from-accent/40 to-primary/40",
    image: salesmintPreview,
    href: "/portfolio/salesmint",
  },
   { 
    title: "NeuroSymbolic VQA", 
    tag: "Neuro-Symbolic AI", 
    desc: "Visual question answering system combining deep learning perception with symbolic reasoning.", 
    gradient: "from-primary/30 to-accent/50" 
  },
   { 
    title: "MediTranscribe", 
    tag: "Speech-to-Text AI", 
    desc: "Doctor-patient conversation transcription system converting medical discussions into structured notes.", 
    gradient: "from-primary/40 to-accent/40" 
  },
  { 
    title: "AI Resume Screener & Job Matcher", 
    tag: "NLP / ML", 
    desc: "AI resume classification API that predicts job category and extracts contact details from uploaded resumes.",
    gradient: "from-primary/40 to-accent/40",
    image: resumePreview,
    href: "/portfolio/resume-screener",
  },
  { 
    title: "Clinify", 
    tag: "Automation / n8n", 
    desc: "Workflow automation platform for clinics integrating appointment handling, notifications, and AI-driven assistance.", 
    gradient: "from-primary/40 to-accent/30",
    image: clinifyPreview,
    href: "/portfolio/clinify",
  },
  { 
    title: "Ticket Automation", 
    tag: "AI Automation", 
    desc: "AI-powered ticket routing and automation workflow using n8n to reduce manual support handling.", 
    gradient: "from-accent/30 to-primary/40",
    image: ticketAutomationPreview,
    href: "/portfolio/ticket-automation",
  },
 
  { 
    title: "AuditX", 
    tag: "Call Auditing AI", 
    desc: "AI call auditing system analyzing conversations for quality assurance, compliance, and insights.", 
    gradient: "from-accent/40 to-primary/40" 
  },
  { 
    title: "AIPHA", 
    tag: "AI Healthcare Assistant", 
    desc: "AI fitness and nutrition assistant that turns user goals into workout plans, meal suggestions, and chat-based guidance.",
    gradient: "from-primary/30 to-accent/50",
    image: aiphaPreview,
    href: "/portfolio/aipha",
  },
  { 
    title: "AI Virtual Fashion Stylist", 
    tag: "Computer Vision", 
    desc: "Fashion recommendation system analyzing clothing items using computer vision to suggest personalized outfits.", 
    gradient: "from-accent/50 to-primary/30",
    image: fashionPreview,
    href: "/portfolio/fashion-stylist",
  },

 
];


function PortfolioPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/portfolio") {
    return <Outlet />;
  }

  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl font-bold md:text-6xl"
        >
          Our <span className="text-gradient">Portfolio</span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A selection of AI products and automations we've crafted for ambitious teams.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const CardShell = p.href ? Link : "div";

            return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <CardShell
                {...(p.href ? { to: p.href } : {})}
                className="glass-strong block h-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} product preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 grid-bg opacity-30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent opacity-80" />
                  <div className="absolute right-4 top-4 rounded-full bg-background/40 p-2 backdrop-blur transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  {p.href && (
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-background/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      View case study
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-accent">{p.tag}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </CardShell>
            </motion.div>
          )})}
        </div>
      </main>
    </div>
  );
}
