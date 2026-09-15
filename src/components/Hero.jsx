import { ArrowDownRight } from "lucide-react";
import { site } from "../data/site";
import { useTypewriter } from "../hooks/useTypewriter";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  const typed = useTypewriter(site.roles);

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[90px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            Available for new opportunities
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <p className="mt-4 min-h-[2rem] font-mono text-lg text-cyan-300 sm:text-xl">
            {typed}
            <span className="caret ml-0.5 inline-block w-[2px] bg-cyan-300 align-middle">
              &nbsp;
            </span>
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {site.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.28)] transition hover:brightness-110"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              View Projects
              <ArrowDownRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SocialIcons />
            <span className="text-sm text-slate-500">{site.location}</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="float-slow relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-400/30 to-emerald-400/20 blur-2xl" />
            <div className="glow-ring relative h-64 w-64 overflow-hidden rounded-full bg-slate-900 p-1.5 sm:h-80 sm:w-80">
              <img
                src={site.photo}
                alt={site.name}
                className="h-full w-full rounded-full object-cover object-[50%_15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
