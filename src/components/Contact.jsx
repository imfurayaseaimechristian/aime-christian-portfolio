import { useState } from "react";
import { Facebook, Github, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { site } from "../data/site";
import SectionHeading from "./SectionHeading";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please fill in every field.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm(initial);
    } catch {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
      window.location.href = mailto;
      setStatus("sent");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project, internship, or collaboration in mind? Send a message and I'll get back to you."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <Mail className="mt-0.5 text-cyan-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">Email</p>
                <p className="mt-1 text-sm text-slate-200 break-all">{site.email}</p>
              </div>
            </a>
            <a
              href={site.phoneHref}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <Phone className="mt-0.5 text-emerald-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">Phone</p>
                <p className="mt-1 text-sm text-slate-200">{site.phone}</p>
              </div>
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <MessageCircle className="mt-0.5 text-emerald-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">WhatsApp</p>
                <p className="mt-1 text-sm text-slate-200">{site.phone}</p>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <MapPin className="mt-0.5 text-teal-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">Location</p>
                <p className="mt-1 text-sm text-slate-200">{site.location}</p>
              </div>
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <Github className="mt-0.5 text-cyan-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">GitHub</p>
                <p className="mt-1 text-sm text-slate-200">github.com/imfurayaseaimechristian</p>
              </div>
            </a>
            <a
              href={site.githubAlt}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <Github className="mt-0.5 text-cyan-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">GitHub</p>
                <p className="mt-1 text-sm text-slate-200">github.com/imfuraaime</p>
              </div>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <Instagram className="mt-0.5 text-cyan-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">Instagram</p>
                <p className="mt-1 text-sm text-slate-200">@{site.instagramHandle}</p>
              </div>
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-cyan-400/30"
            >
              <Facebook className="mt-0.5 text-cyan-300" size={18} />
              <div>
                <p className="text-xs tracking-wide text-slate-500 uppercase">Facebook</p>
                <p className="mt-1 text-sm text-slate-200">{site.facebookName}</p>
              </div>
            </a>
          </aside>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                placeholder="How can I help?"
              />
            </label>
            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                placeholder="Tell me about the project..."
              />
            </label>

            {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
            {status === "sent" ? (
              <p className="mt-3 text-sm text-emerald-300">Message ready — thank you for reaching out.</p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:opacity-70"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
