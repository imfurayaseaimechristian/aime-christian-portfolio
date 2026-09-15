import { Briefcase, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Apprenticeship Developer",
    org: "Enoveta",
    orgUrl: "https://enoveta.com/",
    partner: "SolvIT Africa",
    partnerUrl: "https://solvit.africa/",
    period: "Industry training",
    points: [
      "Hands-on software development training in a professional environment.",
      "Collaborative team coding on industry-grade applications.",
      "Practiced delivery with real project workflows and code reviews.",
    ],
  },
  {
    title: "Internship Developer",
    org: "IPRC Huye",
    orgUrl: "https://www.huye.rp.ac.rw/",
    partner: null,
    partnerUrl: null,
    period: "Technical internship",
    points: [
      "Practical technical training across development and support tasks.",
      "Contributed to system maintenance and software development support.",
      "Strengthened fundamentals through day-to-day engineering work.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve been building"
          description="Training and internships that shaped how I work with teams and production code."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-cyan-400/60 via-emerald-400/30 to-transparent sm:left-[23px]" />

          <div className="space-y-6">
            {roles.map((role) => (
              <article
                key={role.title}
                className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 pl-14 sm:pl-16"
              >
                <span className="absolute top-7 left-4 grid h-4 w-4 place-items-center rounded-full border border-cyan-300 bg-slate-950 sm:left-5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-cyan-300">
                  <Briefcase size={14} />
                  <span>{role.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                <p className="mt-1 text-sm text-slate-400">
                  {role.orgUrl ? (
                    <a
                      href={role.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-slate-200 hover:text-cyan-300"
                    >
                      {role.org}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    role.org
                  )}
                  {role.partner ? (
                    <>
                      {" "}
                      · in collaboration with{" "}
                      <a
                        href={role.partnerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-200 hover:text-cyan-300"
                      >
                        {role.partner}
                      </a>
                    </>
                  ) : null}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
