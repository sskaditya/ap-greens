"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IMAGES } from "@/lib/data";
import { Counter, Reveal } from "../motion";
import { ArrowRight } from "../Icons";

const STATS = [
  { value: 26, suffix: "", label: "district avenue plans — every highway, canal and village street" },
  { value: 3, suffix: " yrs", label: "of guaranteed maintenance until saplings stand on their own" },
  { value: 100, suffix: "%", label: "native, shade-giving species suited to local soil and rainfall" },
];

export default function AvenueParallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="avenues" ref={ref} className="relative overflow-hidden py-32 sm:py-44">
      <motion.div style={{ y }} className="absolute -inset-y-[15%] inset-x-0 will-change-transform">
        <Image
          src={IMAGES.avenue}
          alt="Highway shaded by a canopy of mature avenue trees"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest-950/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-transparent to-forest-950" />

      <div className="container-x relative">
        <div className="glass-dark mx-auto max-w-4xl rounded-[2.5rem] p-8 text-center sm:p-14">
          <Reveal className="eyebrow mb-5">Avenue plantations</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-[clamp(2.4rem,5.5vw,5rem)] font-medium text-white">
              Every road a <br />
              <span className="text-leaf-300">green corridor.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75">
              Highways, rural roads, canal bunds and railway lines are linear land that can carry
              millions of trees. AP-GREEN plants native avenues along all of them — and maintains
              them for years, because a sapling planted is not a tree grown.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08} className="border-t border-white/15 pt-5">
                <p className="text-display text-4xl font-medium text-white sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{s.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-12">
            <Link
              href="/avenue-plantations"
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
            >
              Explore avenue plantations
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
