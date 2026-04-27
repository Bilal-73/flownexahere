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
      className="glass-strong rounded-2xl p-8 flex flex-col items-center text-center hover-glow group"
    >
      {/* Profile Picture - Circular */}
      <div className="relative mb-6">
        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
              {member.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/10" />
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
