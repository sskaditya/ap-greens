import Image from "next/image";
import Link from "next/link";
import type { Sector } from "@/lib/data";
import { PROGRAMMES } from "@/lib/data";
import PageHero from "./PageHero";
import { Counter, Reveal, StaggerGroup, StaggerItem } from "./motion";
import { ArrowRight, ArrowUpRight } from "./Icons";

export default function SectorPage({ sector }: { sector: Sector }) {
  const related = PROGRAMMES.filter((p) => p.href === `/${sector.slug}`);

  return (
    <>
      <PageHero eyebrow={sector.eyebrow} title={sector.title} text={sector.tagline} image={sector.image} imageAlt={sector.title} />

      {/* Intro + stats */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="text-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-light leading-snug text-white">{sector.intro}</p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-4">
            {sector.stats.map((s) => (
              <StaggerItem key={s.label} className="glass rounded-3xl p-6">
                <p className="text-display text-4xl font-medium text-white sm:text-5xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/60">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-leaf-500/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal className="eyebrow mb-5">What we are doing</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
              Four programmes moving the needle.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2" amount={0.1}>
            {sector.highlights.map((h, i) => (
              <StaggerItem key={h.title} className="glass group rounded-[2rem] p-8 transition hover:bg-white/12">
                <p className="text-xs font-semibold text-leaf-300">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-display mt-3 text-2xl font-medium text-white">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{h.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-12 sm:py-20">
        <StaggerGroup className="grid gap-4 md:grid-cols-3" amount={0.1}>
          {sector.gallery.map((g, i) => (
            <StaggerItem key={g.caption} className={i === 0 ? "md:col-span-2" : ""}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/12 md:aspect-auto md:h-[26rem]">
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                <figcaption className="absolute bottom-5 left-5 text-sm font-medium text-white">{g.caption}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Quote */}
      <section className="container-x py-24 sm:py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <blockquote className="text-display text-[clamp(1.8rem,4vw,3.5rem)] font-light leading-tight text-white">
            “{sector.quote.text}”
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-leaf-300">{sector.quote.by}</p>
        </Reveal>
      </section>

      {/* Related programmes + CTA */}
      <section className="container-x pb-28">
        <div className="glass rounded-[2.5rem] p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-3">Programmes</p>
              <h2 className="text-display text-3xl font-medium text-white sm:text-4xl">Under this strategy</h2>
            </div>
            <Link href="/vision-2047" className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-300 hover:text-white">
              How it adds up to 2047 <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-white/10">
            {related.map((p) => (
              <li key={p.name} className="grid gap-2 py-5 sm:grid-cols-[1fr_2fr]">
                <h3 className="font-semibold text-white">{p.name}</h3>
                <p className="text-sm leading-relaxed text-white/65">{p.summary}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
            >
              Get involved <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className="glass-strong inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/25">
              Contact your district agency
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
