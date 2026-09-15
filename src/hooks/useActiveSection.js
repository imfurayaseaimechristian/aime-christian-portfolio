import { useEffect, useState } from "react";

export function useActiveSection(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      const positions = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Number.POSITIVE_INFINITY };
        return { id, top: Math.abs(el.getBoundingClientRect().top - offset) };
      });

      positions.sort((a, b) => a.top - b.top);
      setActiveId(positions[0].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
