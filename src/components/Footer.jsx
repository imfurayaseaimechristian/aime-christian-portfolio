import SocialIcons from "./SocialIcons";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="font-mono text-xs text-slate-500">{site.logo}</p>
        <SocialIcons />
        <p className="text-sm text-slate-500">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
