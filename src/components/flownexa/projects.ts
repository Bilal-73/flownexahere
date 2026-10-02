import aiphaPreview from "@/assets/Aipha/Aipha-product-clean.png";
import resumePreview from "@/assets/resumeScrener/ResumeScrener-clean.png";
import salesmintPreview from "@/assets/salesmint/Salesmint-clean.png";
import fashionPreview from "@/assets/Ai fashion Assistant/Ai-fashion-clean.png";
import clinifyPreview from "@/assets/clinify/clinify-clean.png";
import ticketAutomationPreview from "@/assets/ticketAutomation/ticket-automation.png";

/** Products that have a full case study page, in display order. */
export interface CaseStudy {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "salesmint",
    title: "SalesMint",
    tag: "AI POS System",
    desc: "An AI-powered POS and billing platform engineered for high-throughput retail checkout, automated inventory tracking, and real-time sales intelligence.",
    image: salesmintPreview,
    href: "/portfolio/salesmint",
  },
  {
    slug: "clinify",
    title: "Clinify",
    tag: "Automation / n8n",
    desc: "Clinic workflow automation platform integrating patient appointment scheduling, WhatsApp alerts, and AI receptionist tasks.",
    image: clinifyPreview,
    href: "/portfolio/clinify",
  },
  {
    slug: "ticket-automation",
    title: "Ticket Automation",
    tag: "AI Automation",
    desc: "Intelligent support ticket classification and routing system built on n8n to eliminate manual support triaging.",
    image: ticketAutomationPreview,
    href: "/portfolio/ticket-automation",
  },
  {
    slug: "resume-screener",
    title: "AI Resume Screener",
    tag: "NLP / ML",
    desc: "High-volume resume classification API that predicts candidate role match scores and extracts structured contact entities.",
    image: resumePreview,
    href: "/portfolio/resume-screener",
  },
  {
    slug: "aipha",
    title: "AIPHA",
    tag: "AI Health Assistant",
    desc: "Personalized fitness and nutrition assistant converting user goals into customized workout routines and daily meal plans.",
    image: aiphaPreview,
    href: "/portfolio/aipha",
  },
  {
    slug: "fashion-stylist",
    title: "AI Fashion Stylist",
    tag: "Computer Vision",
    desc: "Computer vision outfit recommendation engine analyzing user clothing items to suggest personalized style combinations.",
    image: fashionPreview,
    href: "/portfolio/fashion-stylist",
  },
];
