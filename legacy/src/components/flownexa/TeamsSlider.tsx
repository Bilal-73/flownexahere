import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";
import bilalImage from "../../assets/a/Bilal.png";
import sattiImage from "../../assets/a/Satti.jpeg";
import usamaImage from "../../assets/a/Usama.jpeg";

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

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Bilal Imran",
    title: "Founder & AI Engineer",
    image: bilalImage,
    email: "acc.bilalimran@gmail.com",
    phone: "+92 (317) 410-0973",
    instagram: "https://instagram.com/bilalimran45",
    linkedin: "https://linkedin.com/in/bilalimran73ai",
    github: "https://github.com/Bilal-73",
    website: "https://portfoliobilalimran.netlify.app",
  },
  {
    id: "2",
    name: "Ijtaba Satti",
    title: "Co-Founder & Full Stack AI Developer",
    image: sattiImage,
    email: "iijtaba.hasan@gmail.com",
    phone: "+92 (333) 064-3251",
    linkedin: "https://linkedin.com/in/jtaba-hasan-509b58308",
  },
  {
    id: "3",
    name: "Usama Tahir",
    title: "AI Lead & ML Engineer",
    image: usamaImage,
    email: "iijtaba.hasan@gmail.com",
    phone: "+92 (333) 064-3251",
  }
];

export function TeamsSlider() {
  return (
    <div className="space-y-12">
      {/* Grid of Team Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <TeamCard key={member.id} member={member} index={idx} />
        ))}
      </div>

      {/* Founder & Team Quote Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-surface p-8 md:p-10 rounded-2xl"
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          Team Philosophy • FlowNexa
        </div>

        <p className="font-display text-2xl font-semibold leading-snug">
          “Build with purpose. Stay grounded. Deliver quality over quantity in every line of code.”
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 pt-6 border-t border-border">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Founder's Note • Bilal Imran
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              Stay close to the engineering team, lead from the front, and ensure every project ships with clean production architecture.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Location & Standards
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              Proudly engineered in Pakistan <span className="text-accent">🇵🇰</span>, delivering high-reliability software for clients worldwide.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
