"use client";

import { Reveal, WordReveal } from "../motion";
import { LeafIcon } from "../Icons";

const TICKER = [
  "Farm Forestry",
  "Agro-Forestry",
  "Avenue Plantations",
  "Land Restoration",
  "Nursery Network",
  "26 Districts",
  "People's Movement",
  "50% by 2047",
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-leaf-500/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="eyebrow mb-8">Our commitment</Reveal>
        <h2 className="text-display max-w-5xl text-[clamp(2rem,5.2vw,4.75rem)] font-light text-white">
          <WordReveal text="Half of Andhra Pradesh under trees by 2047. Not only inside notified forests, but on farms, along roads and canals, on healed mining land and in every village — planted and protected by the people who live there." />
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            ["01", "Plant", "Farm forestry, agro-forestry and avenue plantations that add tree cover far beyond forest boundaries."],
            ["02", "Restore", "Degraded lands and mining-affected zones brought back to life by District Green Development Agencies."],
            ["03", "Mobilise", "A statewide nursery network and a mass public movement so every citizen has a tree to care for."],
          ].map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.1} className="border-t border-white/15 pt-5">
              <p className="text-xs font-semibold text-leaf-300">{n}</p>
              <h3 className="text-display mt-2 text-2xl font-medium text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-y border-white/10 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="text-display inline-flex items-center gap-10 text-3xl font-light text-white/80 sm:text-5xl">
              {t}
              <LeafIcon className="size-6 text-leaf-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
