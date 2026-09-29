"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export const HOME_SECTIONS = [
  { id: "hero", label: "Welcome" },
  { id: "manifesto", label: "Commitment" },
  { id: "impact", label: "Target" },
  { id: "pillars", label: "Strategies" },
  { id: "farms", label: "Farms" },
  { id: "restoration", label: "Restoration" },
  { id: "avenues", label: "Avenues" },
  { id: "roadmap", label: "Roadmap" },
  { id: "districts", label: "Districts" },
  { id: "join", label: "Join" },
] as const;

/** Thin progress bar along the very top plus 10 dots for the home sections. */
export default function ScrollUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const els = HOME_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section.
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-leaf-400 via-lime-300 to-leaf-400"
      />
      <nav
        aria-label="Page sections"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 lg:flex"
      >
        {HOME_SECTIONS.map((s, i) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`${i + 1}. ${s.label}`}
              className="group flex items-center gap-3"
            >
              <span
                className={`text-[11px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "translate-x-0 text-white opacity-100" : "translate-x-2 text-white/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-400 ${
                  isActive ? "h-6 w-1.5 bg-leaf-400" : "h-1.5 w-1.5 bg-white/35 group-hover:bg-white/70"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
