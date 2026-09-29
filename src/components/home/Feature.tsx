"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Reveal } from "../motion";
import { ArrowRight, CheckIcon } from "../Icons";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  reverse?: boolean;
  badge?: { value: string; label: string };
};

export default function Feature({ id, eyebrow, title, text, bullets, image, imageAlt, href, cta, reverse, badge }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div ref={ref} className="relative">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 sm:aspect-[5/6]" amount={0.2}>
              <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
                <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
            </Reveal>
            {badge && (
              <motion.div
                style={{ y: badgeY }}
                className={`glass-strong absolute bottom-8 rounded-3xl px-6 py-5 ${reverse ? "-left-3 sm:-left-8" : "-right-3 sm:-right-8"}`}
              >
                <p className="text-display text-4xl font-medium text-white">{badge.value}</p>
                <p className="mt-1 text-xs text-white/70">{badge.label}</p>
              </motion.div>
            )}
          </div>

          <div>
            <Reveal className="eyebrow mb-5">{eyebrow}</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">{title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{text}</p>
            </Reveal>
            <ul className="mt-8 space-y-3">
              {bullets.map((b, i) => (
                <Reveal key={b} as="li" delay={0.12 + i * 0.05} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-400/20 text-leaf-300">
                    <CheckIcon className="size-3.5" strokeWidth={2.2} />
                  </span>
                  {b}
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3} className="mt-10">
              <Link
                href={href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-forest-950 transition hover:bg-leaf-300"
              >
                {cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
