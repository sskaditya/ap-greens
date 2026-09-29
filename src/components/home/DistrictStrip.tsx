"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { DISTRICT_STRIP } from "@/lib/data";
import { Reveal } from "../motion";

/** Vertical scroll drives a horizontal gallery of district imagery. */
export default function DistrictStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section id="districts" ref={ref} className="relative h-[280svh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="container-x mb-10">
          <Reveal className="eyebrow mb-4">District Green Development Agencies</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium text-white">
              26 districts. <span className="text-white/50">One green agency each.</span>
            </h2>
          </Reveal>
        </div>

        <motion.div style={{ x }} className="flex gap-5 pl-[clamp(1rem,4vw,3rem)] will-change-transform">
          {DISTRICT_STRIP.map((d, i) => (
            <figure
              key={d.name + i}
              className="group relative h-[52svh] w-[70vw] shrink-0 overflow-hidden rounded-[2rem] border border-white/12 sm:w-[38vw] lg:w-[26vw]"
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 38vw, 70vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <span className="text-display text-2xl font-medium text-white">{d.name}</span>
                <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-white/85">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
