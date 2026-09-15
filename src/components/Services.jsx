import { Layers3, PenTool, Network, Smartphone, Brain, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Full-Stack Web Development",
    icon: Layers3,
    text: "End-to-end web apps with React or Vue on the frontend, Bootstrap or Tailwind CSS, and Node.js/Express APIs on the backend.",
  },
  {
    title: "UI/UX & Visual Design",
    icon: PenTool,
    text: "Brand-ready visuals and product interfaces with Figma, Photoshop, Illustrator, and Canva — plus Archicad for architectural layouts.",
  },
  {
    title: "Database & API Architecture",
    icon: Network,
    text: "RESTful API design with MySQL, PostgreSQL, SQLite, and MongoDB — structured for maintainable growth.",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    text: "Native and cross-platform mobile apps using Kotlin, React Native, and Flutter for Android and iOS.",
  },
  {
    title: "AI Training & Machine Learning",
    icon: Brain,
    text: "Hands-on AI model training, with growing work in machine learning workflows for practical product features.",
  },
  {
    title: "Blockchain & Quality Assurance",
    icon: ShieldCheck,
    text: "Working knowledge of blockchain concepts, plus QA practices that keep releases stable and well tested.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="Practical engineering for web, mobile, design, AI, and quality."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/35"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-emerald-400/10 text-cyan-300">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
