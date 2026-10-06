import { Mail, Phone, Linkedin, Instagram, Facebook, Globe, Github } from "lucide-react";

interface TeamSocialIconsProps {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  facebook?: string;
  github?: string;
}

export function TeamSocialIcons({
  name,
  title,
  email,
  phone,
  instagram,
  linkedin,
  website,
  facebook,
  github,
}: TeamSocialIconsProps) {
  const socialLinks = [
    { icon: Instagram, href: instagram, label: "Instagram" },
    { icon: Linkedin, href: linkedin, label: "LinkedIn" },
    { icon: Github, href: github, label: "GitHub" },
    { icon: Globe, href: website, label: "Website" },
    { icon: Facebook, href: facebook, label: "Facebook" },
    { icon: Phone, href: phone ? `tel:${phone}` : "#", label: "Phone" },
    { icon: Mail, href: email ? `mailto:${email}` : "#", label: "Email" },
  ];

  return (
    <div className="mt-4 space-y-3">
      <div>
        <h4 className="font-display font-semibold text-lg">{name}</h4>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href && href !== "#" ? href : "#"}
            target={href && !href.startsWith("tel:") && !href.startsWith("mailto:") ? "_blank" : undefined}
            rel={href && !href.startsWith("tel:") && !href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted border border-border text-foreground transition-all duration-300 ${
              href && href !== "#" 
                ? "cursor-pointer hover:bg-accent hover:text-accent-foreground hover:border-accent" 
                : "opacity-40 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!href || href === "#") {
                e.preventDefault();
              }
            }}
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
