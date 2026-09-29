"use client";

import { animate, motion, useInView, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "p" | "h2" | "h3" | "li" | "span";
};

/** Fades and lifts children in when they enter the viewport. */
export function Reveal({ children, className, delay = 0, once = true, amount = 0.25, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/** Staggers direct children using the `fadeUp` variant. */
export function StaggerGroup({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/** Reveals a headline one word at a time. */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      className={className}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.7, ease } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </motion.span>
  );
}

/** Animated number that counts up when scrolled into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.8,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");
  const decimals = Math.min((String(value).split(".")[1] ?? "").length, 2);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toLocaleString("en-IN", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })),
    });
    return () => controls.stop();
  }, [inView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
