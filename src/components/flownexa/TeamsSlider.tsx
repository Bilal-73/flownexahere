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
  },
  {
    id: "3",
    name: "Usama Tahir",
    title: "AI Leads | AI Engineer",
    image: usamaImage,
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
  return (
    <div className="space-y-8">
      {/* Static Team Grid with Staggered Animations */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
          >
            <TeamCard member={member} index={idx} />
          </motion.div>
        ))}
      </div>

      {/* Closing message */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="glass-strong relative overflow-hidden rounded-2xl border border-accent/20 p-6 text-center"
      >
        <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-accent/20 blur-2xl" />

        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          FlowNexa Vision
        </p>

        <p className="mt-3 text-base font-semibold text-foreground md:text-lg">
          Build with purpose. Stay grounded. Move as one team.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Proudly built in Pakistan <span className="text-accent">🇵🇰</span>, delivering globally.
        </p>

        <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

        <div className="mt-5 grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl border border-accent/25 bg-background/40 p-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
              Founder&apos;s Note • Bilal Imran
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              Stay on the ground, stay close to the team, and lead from the front in every project.
            </p>
          </div>

          <div className="rounded-xl border border-primary/25 bg-background/40 p-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
              Message From Team FlowNexa
            </p>
            <p className="mt-2 text-sm leading-relaxed font-medium text-foreground">
              Client satisfaction is our highest priority. We always choose quality over quantity.
            </p>
          </div>
        </div>
      </motion.div>


    </div>
  );
}
