import { MapPin, Code2, GraduationCap } from "lucide-react";
import { site } from "../data/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Software engineer with a builder’s mindset"
          description="I care about clean interfaces, reliable APIs, and shipping work that holds up in real products."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              I am {site.name}, a full-stack and mobile developer based in {site.location}.
              My work covers React interfaces, Node.js services, mobile apps with
              Kotlin, React Native, and Flutter. I also work with Vue.js and Bootstrap,
              train AI models, and have working knowledge of machine learning,
              blockchain, and quality assurance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              {site.bio} I enjoy collaborative engineering, learning in
              production-minded teams, and turning practical problems into
              software people can actually use.
            </p>
          </article>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <MapPin className="mb-3 text-cyan-400" size={20} />
              <p className="text-sm font-semibold text-white">Based in Kigali</p>
              <p className="mt-1 text-sm text-slate-400">
                Building with teams across Rwanda’s tech ecosystem.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <Code2 className="mb-3 text-emerald-400" size={20} />
              <p className="text-sm font-semibold text-white">Web, mobile, and design</p>
              <p className="mt-1 text-sm text-slate-400">
                React, Node.js, Figma, Photoshop, Illustrator, Canva, and Archicad.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <GraduationCap className="mb-3 text-teal-300" size={20} />
              <p className="text-sm font-semibold text-white">Hands-on training</p>
              <p className="mt-1 text-sm text-slate-400">
                Industry apprenticeship and internship experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
