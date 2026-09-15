import { Facebook, Github, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "../data/site";

const itemClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300";

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={itemClass}>
        <Github size={18} />
      </a>
      <a
        href={site.githubAlt}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub (imfuraaime)"
        className={itemClass}
      >
        <Github size={18} />
      </a>
      <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={itemClass}>
        <Instagram size={18} />
      </a>
      <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={itemClass}>
        <Facebook size={18} />
      </a>
      <a href={`mailto:${site.email}`} aria-label="Email" className={itemClass}>
        <Mail size={18} />
      </a>
      <a href={site.phoneHref} aria-label="Phone" className={itemClass}>
        <Phone size={18} />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={itemClass}
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}
