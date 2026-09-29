import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CoverChart from "@/components/CoverChart";
import { Counter, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { IMAGES, ORG, PILLARS, PROGRAMMES, ROADMAP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vision 2047",
  description: `From ${ORG.currentCover}% to ${ORG.finalTarget.value}% green cover by ${ORG.finalTarget.year} — AP-GREEN's roadmap under ${ORG.vision}.`,
};

const CATEGORIES = Array.from(new Set(PROGRAMMES.map((p) => p.category)));

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow={ORG.vision}
        title={
          <>
            Half of Andhra Pradesh <span className="text-leaf-300">under trees.</span>
          </>
        }
        text={`The state's forest cover stands at roughly ${ORG.currentCover}% of its geographical area. AP-GREEN's mandate is to lift green cover to ${ORG.interimTarget.value}% by ${ORG.interimTarget.year} as an interim milestone and ${ORG.finalTarget.value}% by ${ORG.finalTarget.year}.`}
        image={IMAGES.hero}
        imageAlt="Green landscape of Andhra Pradesh at golden hour"
      />

      {/* Chart */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <Reveal className="eyebrow mb-5">The trajectory</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
                More than doubling the canopy in a generation.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Going from {ORG.currentCover}% to {ORG.finalTarget.value}% means adding roughly{" "}
                <span className="text-white">{(ORG.finalTarget.value - ORG.currentCover).toFixed(2)} percentage points</span> of
                the state&apos;s area under trees — most of it outside notified forests, on farms, roadsides and
                restored land.
              </p>
            </Reveal>
            <StaggerGroup className="mt-10 grid grid-cols-3 gap-3">
              {[
                { v: ORG.currentCover, l: "Today" },
                { v: ORG.interimTarget.value, l: String(ORG.interimTarget.year) },
                { v: ORG.finalTarget.value, l: String(ORG.finalTarget.year) },
              ].map((s) => (
                <StaggerItem key={s.l} className="glass rounded-2xl p-4">
                  <p className="text-display text-3xl font-medium text-white">
                    <Counter value={s.v} suffix="%" />
                  </p>
                  <p className="mt-1 text-xs text-white/60">{s.l}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <Reveal delay={0.15} className="glass rounded-[2rem] p-6 sm:p-8">
            <CoverChart />
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full bg-leaf-500/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal className="eyebrow mb-5">Milestones</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
              Five dates, five promises.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5" amount={0.1}>
            {ROADMAP.map((m) => (
              <StaggerItem key={m.year} className="glass flex flex-col rounded-[2rem] p-6">
                <p className="text-display text-4xl font-medium text-white">{m.year}</p>
                <h3 className="mt-2 text-xs font-semibold uppercase tracking-widest text-leaf-300">{m.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{m.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How the strategies add up */}
      <section className="container-x py-24 sm:py-32">
        <Reveal className="eyebrow mb-5">How it adds up</Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
            Six strategies, one canopy.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
          {PILLARS.map((p, i) => (
            <StaggerItem key={p.slug}>
              <Link href={p.href} className="glass group flex h-full flex-col rounded-[2rem] p-7 transition hover:bg-white/12">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-leaf-300">{String(i + 1).padStart(2, "0")}</p>
                  <ArrowUpRight className="size-5 text-white/50 transition group-hover:text-white" />
                </div>
                <h3 className="text-display mt-4 text-2xl font-medium text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{p.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Programme register */}
      <section className="container-x pb-28">
        <div className="glass rounded-[2.5rem] p-8 sm:p-12">
          <Reveal className="eyebrow mb-3">Programme register</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display text-3xl font-medium text-white sm:text-4xl">Every programme, by strategy</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <Reveal key={cat}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-leaf-300">{cat}</h3>
                <ul className="mt-4 divide-y divide-white/10">
                  {PROGRAMMES.filter((p) => p.category === cat).map((p) => (
                    <li key={p.name} className="py-4">
                      <Link href={p.href} className="group block">
                        <p className="font-semibold text-white group-hover:text-leaf-300">{p.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">{p.summary}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
            >
              Be part of the movement
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
