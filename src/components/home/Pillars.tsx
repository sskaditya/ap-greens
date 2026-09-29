"use client";

import Image from "next/image";
import Link from "next/link";
import { PILLARS } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "../motion";
import { ArrowUpRight } from "../Icons";

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal className="eyebrow mb-5">Six strategies</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium text-white">
                One number, <br className="hidden sm:block" />
                six ways to reach it.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/vision-2047"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Vision 2047 <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
          {PILLARS.map((p, i) => (
            <StaggerItem key={p.slug} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
              <Link
                href={p.href}
                className="group relative block h-full min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/12"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="glass flex items-end justify-between gap-4 rounded-2xl p-5">
                    <div>
                      <h3 className="text-display text-2xl font-medium text-white">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{p.short}</p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-forest-950 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
