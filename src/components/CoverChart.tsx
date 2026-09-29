"use client";

import { motion } from "motion/react";
import { ORG } from "@/lib/data";

const POINTS = [
  { year: 2025, value: ORG.currentCover, label: "Today" },
  { year: ORG.interimTarget.year, value: ORG.interimTarget.value, label: "Interim" },
  { year: ORG.finalTarget.year, value: ORG.finalTarget.value, label: "Target" },
];

const W = 640;
const H = 300;
const PAD = { l: 48, r: 24, t: 24, b: 44 };
const MAX = 60;
const years = POINTS.map((p) => p.year);
const minY = Math.min(...years);
const maxY = Math.max(...years);
const x = (year: number) => PAD.l + ((year - minY) / (maxY - minY)) * (W - PAD.l - PAD.r);
const y = (v: number) => PAD.t + (1 - v / MAX) * (H - PAD.t - PAD.b);

const ease = [0.22, 1, 0.36, 1] as const;

/** Animated trajectory of green cover, 22.96% → 33% → 50%. */
export default function CoverChart() {
  const path = POINTS.map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.year)} ${y(p.value)}`).join(" ");
  const area = `${path} L ${x(maxY)} ${y(0)} L ${x(minY)} ${y(0)} Z`;

  return (
    <motion.svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Green cover from ${ORG.currentCover}% in 2025 to ${ORG.interimTarget.value}% in ${ORG.interimTarget.year} and ${ORG.finalTarget.value}% in ${ORG.finalTarget.year}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <defs>
        <linearGradient id="cover-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[0, 10, 20, 30, 40, 50, 60].map((v) => (
        <g key={v}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.08)" />
          <text x={PAD.l - 10} y={y(v) + 4} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.45)">
            {v}%
          </text>
        </g>
      ))}

      <motion.path
        d={area}
        fill="url(#cover-fill)"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1.2, delay: 0.6 } } }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#86efac"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 1.8, ease } } }}
      />

      {POINTS.map((p, i) => (
        <motion.g
          key={p.year}
          variants={{
            hidden: { opacity: 0, scale: 0.6 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 + i * 0.6, ease } },
          }}
          style={{ transformOrigin: `${x(p.year)}px ${y(p.value)}px` }}
        >
          <circle cx={x(p.year)} cy={y(p.value)} r="7" fill="#04100b" stroke="#4ade80" strokeWidth="3" />
          <text
            x={x(p.year)}
            y={y(p.value) - 18}
            textAnchor={i === 0 ? "start" : i === POINTS.length - 1 ? "end" : "middle"}
            fontSize="15"
            fontWeight="600"
            fill="white"
          >
            {p.value}%
          </text>
          <text
            x={x(p.year)}
            y={H - 14}
            textAnchor={i === 0 ? "start" : i === POINTS.length - 1 ? "end" : "middle"}
            fontSize="12"
            fill="rgba(255,255,255,0.6)"
          >
            {p.year} · {p.label}
          </text>
        </motion.g>
      ))}
    </motion.svg>
  );
}
