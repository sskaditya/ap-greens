"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
  compact?: boolean;
};

export default function PageHero({ eyebrow, title, text, image, imageAlt = "", children, compact }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden grain ${compact ? "min-h-[70svh]" : "min-h-[88svh]"}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <Image src={image} alt={imageAlt} fill priority quality={90} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/20 to-forest-950" />

      <div className={`container-x relative flex items-end pt-32 pb-10 ${compact ? "min-h-[70svh]" : "min-h-[88svh]"}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="glass w-full rounded-[2rem] p-7 sm:rounded-[2.5rem] sm:p-12"
        >
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="text-display max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] font-medium text-white">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
