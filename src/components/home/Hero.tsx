"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IMAGES } from "@/lib/data";
import { ArrowRight, MouseIcon, TreeIcon } from "../Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const line = (delay: number) => ({
  initial: { y: "110%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, ease, delay },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] overflow-hidden grain">
      {/* Background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image
          src={IMAGES.hero}
          alt="Golden-hour view of paddy fields, palms and the Eastern Ghats in Andhra Pradesh"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-transparent to-forest-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/40 via-transparent to-transparent" />

      {/* Glass panel */}
      <div className="container-x relative flex min-h-[100svh] items-stretch pt-24 pb-6 sm:pt-28 sm:pb-8">
        <motion.div
          style={{ y: panelY, opacity: panelOpacity }}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease }}
          className="glass relative flex w-full flex-col justify-between overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-14"
        >
          {/* Soft light beams */}
          <div className="pointer-events-none absolute -top-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 right-10 h-[26rem] w-[26rem] rounded-full bg-leaf-400/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="eyebrow mb-6"
              >
                AP-GREEN · Government of Andhra Pradesh
              </motion.p>
              <h1 className="text-display text-[clamp(3rem,9.5vw,8.5rem)] font-medium text-white">
                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span className="block" {...line(0.25)}>Growing</motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.06em] pl-[0.18em]">
                  <motion.span className="block" {...line(0.38)}>a Greener</motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.06em] pl-[0.05em]">
                  <motion.span className="block" {...line(0.51)}>
                    Andhra<span className="text-leaf-300">.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/vision-2047"
                  className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
                >
                  See the 2047 vision
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/get-involved"
                  className="glass-strong inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  Get involved
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="border-l border-white/30 pl-5 lg:mb-2"
            >
              <p className="max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
                AP-GREEN is the Andhra Pradesh Society for Greening and Reforestation for
                Ecological Enrichment — the state body tasked with raising forest and tree cover
                from 22.96% today to one-third by 2030 and half of Andhra Pradesh by 2047.
              </p>
            </motion.div>
          </div>

          {/* Bottom row */}
          <div className="relative mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="flex flex-col justify-between gap-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="max-w-xs border-l border-white/30 pl-4 text-sm leading-relaxed text-white/75"
              >
                Farm forestry, agro-forestry, avenues and restored land — greening as a mass movement.
              </motion.p>
              <motion.a
                href="#manifesto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="inline-flex items-center gap-2 text-xs font-medium text-white/70 transition hover:text-white"
              >
                <MouseIcon className="size-4 animate-pulse-soft" />
                Scroll down
              </motion.a>
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
                className="glass rounded-3xl p-5 sm:w-60"
              >
                <h3 className="text-display text-xl font-medium text-white">Green Cover</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">22.96% today → 33% by 2030 → 50% by 2047.</p>
                <div className="mt-5 flex h-20 items-end gap-2">
                  {[
                    { h: 46, label: "Now", hi: false },
                    { h: 66, label: "2030", hi: false },
                    { h: 100, label: "2047", hi: true },
                  ].map((b, i) => (
                    <div key={b.label} className="flex flex-1 flex-col items-center justify-end gap-1.5 self-stretch">
                      <motion.span
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.9, delay: 1.2 + i * 0.12, ease }}
                        style={{ height: `${b.h}%` }}
                        className={`w-full origin-bottom rounded-md border ${
                          b.hi ? "border-leaf-300/60 bg-leaf-400/50" : "border-white/30 bg-white/15"
                        }`}
                      />
                      <span className="text-[10px] font-medium text-white/60">{b.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
                className="glass rounded-3xl p-5 sm:w-60"
              >
                <h3 className="text-display text-xl font-medium text-white">26 Districts</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">A Green Development Agency and nursery hub in each.</p>
                <div className="mt-4 flex h-20 items-end justify-center">
                  <TreeIcon className="size-20 text-white/70 animate-float" strokeWidth={1.2} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
