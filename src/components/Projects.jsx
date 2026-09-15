import { ExternalLink, Github } from "lucide-react";
import { site } from "../data/site";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Locknest App",
    description:
      "Security-focused Locknest application for protecting access and sensitive data. Built as a dedicated product on GitHub.",
    tags: ["Software Engineering", "Security", "Mobile"],
    github: `${site.github}/locknest_se`,
    live: null,
  },
  {
    title: "Skill Exchange Platform",
    description:
      "Full-stack application for exchanging skills between users. Built with React, Node.js, Express, MySQL, and Tailwind CSS.",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    github: site.githubAlt,
    live: null,
  },
  {
    title: "Smart Park",
    description:
      "Operations app with login, dashboard, POS, inventory, products, and sales — backed by a Node.js server and SQL schema.",
    tags: ["JavaScript", "Node.js", "SQL"],
    github: `${site.githubAlt}/smart-park-`,
    live: null,
  },
  {
    title: "Student Management System",
    description:
      "PHP system for students, courses, enrollments, grades, authentication, and an admin dashboard.",
    tags: ["PHP", "MySQL"],
    github: `${site.githubAlt}/student-management-system`,
    live: null,
  },
  {
    title: "Restaurant App",
    description:
      "Full-stack restaurant application with separate frontend and backend for menus, orders, and service workflows.",
    tags: ["JavaScript", "Full-Stack"],
    github: `${site.githubAlt}/reastarant`,
    live: null,
  },
  {
    title: "Employee Management (EPRMS)",
    description:
      "Employee records system with a SQL database, frontend, and backend for staff data and operations.",
    tags: ["JavaScript", "SQL", "Full-Stack"],
    github: `${site.githubAlt}/employee`,
    live: null,
  },
  {
    title: "Django CRUD App",
    description:
      "Python/Django project for creating, reading, updating, and deleting records with a clean server-side workflow.",
    tags: ["Python", "Django"],
    github: `${site.githubAlt}/crud-using-jango`,
    live: null,
  },
  {
    title: "Developer Portfolio Website",
    description:
      "Modern personal portfolio showcasing experience, skills, and projects. Built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: site.github,
    live: "#home",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Builds from both GitHub accounts — web, mobile, and full-stack systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60"
            >
              <div className="relative h-36 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-emerald-500/10">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <p className="absolute right-4 bottom-4 font-mono text-5xl font-bold text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-500">
                      Live demo soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
