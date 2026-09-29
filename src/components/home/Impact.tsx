"use client";

import Image from "next/image";
import { HOME_STATS, IMAGES } from "@/lib/data";
import { Counter, Reveal, StaggerGroup, StaggerItem } from "../motion";

export default function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src={IMAGES.forest}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end">
          <div>
            <Reveal className="eyebrow mb-5">The target</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium text-white">
                From <span className="text-leaf-300">22.96%</span> to half the state.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-base leading-relaxed text-white/70 lg:ml-auto">
              AP-GREEN&apos;s mandate is a single, measurable number: the share of Andhra Pradesh&apos;s
              geographical area under forest and tree cover. Progress is tracked district by district
              through satellite monitoring and geo-tagged plantations, and published in the open.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_STATS.map((s) => (
            <StaggerItem key={s.label} className="glass rounded-3xl p-7">
              <p className="text-display text-5xl font-medium text-white sm:text-6xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-sm font-semibold text-white">{s.label}</p>
              {s.note && <p className="mt-1 text-xs leading-relaxed text-white/55">{s.note}</p>}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
