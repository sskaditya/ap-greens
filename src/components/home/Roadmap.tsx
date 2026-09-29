"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ROADMAP } from "@/lib/data";
import { Reveal } from "../motion";

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="roadmap" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-leaf-500/10 blur-3xl" />
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal className="eyebrow mb-5">Roadmap</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium text-white">
              The road to <span className="text-leaf-300">50% green cover</span> by 2047.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              From 22.96% today to one-third of the state by 2030 and half of it by 2047 — AP-GREEN&apos;s
              contribution to Viksit Andhra Pradesh – 2047. Each milestone is a promise with a date on it.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* Progress line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 lg:left-0 lg:top-5 lg:h-px lg:w-full" />
          <motion.div
            style={{ scaleY: lineScale, scaleX: lineScale }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-leaf-400 lg:left-0 lg:top-5 lg:h-px lg:w-full lg:origin-left"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {ROADMAP.map((m, i) => (
              <Reveal key={m.year} as="li" delay={i * 0.08} className="relative pl-12 lg:pl-0 lg:pt-12">
                <span className="absolute left-[9px] top-1 grid size-4 place-items-center rounded-full border border-leaf-400 bg-forest-950 lg:left-0 lg:top-3">
                  <span className="size-1.5 rounded-full bg-leaf-400" />
                </span>
                <p className="text-display text-4xl font-medium text-white">{m.year}</p>
                <h3 className="mt-2 text-sm font-semibold uppercase tracking-widest text-leaf-300">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
