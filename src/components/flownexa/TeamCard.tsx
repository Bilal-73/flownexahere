import { motion } from "framer-motion";
import { TeamSocialIcons } from "./TeamSocialIcons";

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

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-surface hover-lift rounded-2xl p-8 flex flex-col items-center text-center group h-full"
    >
      {/* Profile Picture - Circular with subtle warm sepia tint */}
      <div className="relative mb-6">
        <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border shadow-sm">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-center transition-all duration-500 sepia-[0.25] contrast-[0.95] group-hover:sepia-0 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-accent/15 flex items-center justify-center font-display text-4xl font-bold text-accent">
              {member.name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      {/* Social Icons and Contact Info */}
      <TeamSocialIcons
        name={member.name}
        title={member.title}
        email={member.email}
        phone={member.phone}
        instagram={member.instagram}
        linkedin={member.linkedin}
        github={member.github}
        website={member.website}
        facebook={member.facebook}
      />
    </motion.div>
  );
}
