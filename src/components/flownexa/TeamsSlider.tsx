import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TeamCard } from "./TeamCard";
import bilalImage from "../../assets/a/Bilal.jpg";
import sattiImage from "../../assets/a/Satti.jpeg";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image?: string;
  email?: string;
  phone?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  facebook?: string;
  github?: string;
}

// Demo team data
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Bilal Imran",
    title: "Founder | AI Engineer",
    image: bilalImage,
    email: "acc.bilalimran@gmail.com",
    phone: "+92 (317) 410-0973",
    instagram: "https://instagram.com/bilalimran45",
    linkedin: "https://linkedin.com/bilalimran73ai",
    github: "https://github.com/Bilal-73",
    website: "https://portfoliobilalimran.netlify.app",
    facebook: "https://facebook.com",
  },
  {
    id: "2",
    name: "Ijtaba Satti",
    title: "Co-Founder | Full Stack AI Developer",
    image: sattiImage,
    email: "iijtaba.hasan@gmail.com",
    phone: "+92 (333) 064-3251",
    instagram: "https://instagram",
    linkedin: "https://linkedin.com/jtaba-hasan-509b58308",
    github: "https://github.com",
    website: "https://demo.com",
    facebook: "https://facebook.com",
  }
];

export function TeamsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Responsive items per slide
  const itemsPerSlide = isMobile ? 1 : 2;
  const maxSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, maxSlides]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxSlides);
    setAutoplay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
    setAutoplay(false);
  };

  // Get current slide members
  const startIdx = currentIndex * itemsPerSlide;
  const currentMembers = teamMembers.slice(startIdx, startIdx + itemsPerSlide);

  // For infinite loop effect, wrap around
  const displayMembers = currentMembers.length < itemsPerSlide
    ? [...currentMembers, ...teamMembers.slice(0, itemsPerSlide - currentMembers.length)]
    : currentMembers;

  return (
    <div className="space-y-8">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-2xl bg-background/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`grid gap-6 p-8 ${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {displayMembers.map((member, idx) => (
              <TeamCard key={member.id} member={member} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="glass-strong group flex h-12 w-12 items-center justify-center rounded-full transition-all hover:border-accent/50 hover:bg-background/80"
        >
          <ChevronLeft className="h-5 w-5 transition-colors group-hover:text-accent" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: maxSlides }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                setAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "w-8 bg-accent"
                  : "w-2 bg-muted hover:bg-muted-foreground"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="glass-strong group flex h-12 w-12 items-center justify-center rounded-full transition-all hover:border-accent/50 hover:bg-background/80"
        >
          <ChevronRight className="h-5 w-5 transition-colors group-hover:text-accent" />
        </button>
      </div>

      {/* Demo Link Note */}
      <div className="text-center text-sm text-muted-foreground">
        <p>🚀 Demo data placeholder — <span className="text-accent">Replace with actual team information manually</span></p>
      </div>
    </div>
  );
}
