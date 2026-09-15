import { Layout, Server, Database, Wrench, Smartphone, Palette, Brain, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Frontend",
    icon: Layout,
    items: ["React.js", "Vue.js", "Vite", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "PHP", "Python", "Django"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Kotlin", "React Native", "Flutter"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    items: ["AI Training", "Machine Learning"],
  },
  {
    title: "Blockchain & QA",
    icon: ShieldCheck,
    items: ["Blockchain", "Quality Assurance"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Netlify", "Vercel"],
  },
];

const designTools = [
  { name: "Adobe Photoshop", hint: "Photo editing & visuals" },
  { name: "Canva", hint: "Fast brand graphics" },
  { name: "Adobe Illustrator", hint: "Logos & vector art" },
  { name: "Figma", hint: "UI/UX product design" },
  { name: "Archicad", hint: "Architecture & CAD" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship"
          description="A practical stack for web, mobile, AI, design, data, and quality."
        />

        <article className="relative mb-5 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 text-cyan-300">
              <Palette size={20} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">Design & Architecture</h3>
              <p className="text-sm text-slate-400">Visual design, UI kits, and architectural drafting.</p>
            </div>
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {designTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950"
              >
                <p className="text-sm font-semibold text-white">{tool.name}</p>
                <p className="mt-1 text-xs text-slate-400">{tool.hint}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-400/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
