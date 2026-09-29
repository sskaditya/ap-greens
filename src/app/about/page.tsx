import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import LeaderAvatar from "@/components/LeaderAvatar";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ArrowRight, ArrowUpRight, LeafIcon, PinIcon, ShieldIcon, SproutIcon } from "@/components/Icons";
import { IMAGES, ORG } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `${ORG.full} — the Government of Andhra Pradesh body expanding forest and tree cover to 50% by 2047.`,
};

const STRUCTURE = [
  {
    icon: ShieldIcon,
    title: "Governing Council",
    text: "Chaired by the Deputy Chief Minister and Forest Minister, the Council supervises the state-level programme and formulates macro-policy and the 2030 / 2047 targets.",
  },
  {
    icon: LeafIcon,
    title: "Executive Committee",
    text: "Chaired with Cabinet rank, the Committee oversees day-to-day coordination, implementation and synergy between the departments delivering greening on the ground.",
  },
  {
    icon: PinIcon,
    title: "District Green Development Agencies",
    text: "One agency in each of the 26 districts converges forest, agriculture, horticulture, rural development and mining departments to deliver plantations on the ground.",
  },
  {
    icon: SproutIcon,
    title: "Nursery Network",
    text: "Hi-tech central nurseries and SHG-run village nurseries supply certified native saplings close to every planting site.",
  },
];

const VALUES = [
  ["Measured", "One number — the share of the state under forest and tree cover — tracked by satellite and geo-tagged plantations."],
  ["Native", "Species chosen for local soil, rainfall and wildlife, not for speed of growth alone."],
  ["Maintained", "Every sapling is funded for years of aftercare, because survival matters more than planting counts."],
  ["Shared", "Farmers, women's groups, students and industry are partners with a stake in the outcome."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AP-GREEN"
        title={
          <>
            A society with one <span className="text-leaf-300">measurable</span> mission.
          </>
        }
        text={`${ORG.full} is the Government of Andhra Pradesh body tasked with expanding the state's forest and tree cover from ${ORG.currentCover}% today to ${ORG.interimTarget.value}% by ${ORG.interimTarget.year} and ${ORG.finalTarget.value}% by ${ORG.finalTarget.year}.`}
        image={IMAGES.forest}
        imageAlt="Misty forest in the Eastern Ghats"
      />

      {/* Mandate */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal className="eyebrow mb-5">Mandate</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
                Greening beyond the forest boundary.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-white/70">
            <Reveal delay={0.1}>
              <p>
                Notified forests alone cannot take Andhra Pradesh to half its area under trees. AP-GREEN
                exists to grow tree cover everywhere else: on private farmland through farm forestry and
                agro-forestry, along roads, canals and railway lines through avenue plantations, and on
                degraded and mining-affected land through restoration.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                It does this through District Green Development Agencies in all 26 districts, a statewide
                nursery network that supplies quality native saplings, and a deliberate effort to turn
                ecological conservation into a mass public movement aligned with {ORG.vision}.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                [`${ORG.currentCover}%`, "forest cover today"],
                [`${ORG.interimTarget.value}%`, `interim milestone · ${ORG.interimTarget.year}`],
                [`${ORG.finalTarget.value}%`, `final target · ${ORG.finalTarget.year}`],
              ].map(([v, l]) => (
                <div key={l} className="glass rounded-3xl p-5">
                  <p className="text-display text-4xl font-medium text-white">{v}</p>
                  <p className="mt-2 text-xs text-white/60">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-leaf-500/10 blur-3xl" />
        <div className="container-x relative">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal className="eyebrow mb-5">Leadership</Reveal>
            <Reveal delay={0.05}>
              <Link href="/leadership" className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-300 transition hover:text-white">
                Full leadership &amp; governance <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal delay={0.05} className="glass rounded-[2rem] p-8">
              <LeaderAvatar
                name={ORG.councilChairman.name}
                initials={ORG.councilChairman.initials}
                photo={ORG.councilChairman.photo}
                size="sm"
                tone="leaf"
                focus="48% 25%"
              />
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-leaf-300">Governing Council Chairman</p>
              <h3 className="text-display mt-2 text-2xl font-medium text-white">
                {ORG.councilChairman.honorific} {ORG.councilChairman.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{ORG.councilChairman.designation}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{ORG.councilChairman.note}.</p>
            </Reveal>
            <Reveal delay={0.1} className="glass rounded-[2rem] p-8">
              <LeaderAvatar
                name={ORG.chairman.name}
                initials={ORG.chairman.initials}
                photo={ORG.chairman.photo}
                size="sm"
                tone="white"
                focus="50% 18%"
              />
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-leaf-300">Executive Committee Chairman</p>
              <h3 className="text-display mt-2 text-2xl font-medium text-white">
                {ORG.chairman.honorific} {ORG.chairman.name}
              </h3>
              <p className="text-sm text-white/60">({ORG.chairman.alias})</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{ORG.chairman.designation}</p>
              <p className="mt-1 text-sm text-white/55">{ORG.chairman.note}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{ORG.chairman.detail}.</p>
            </Reveal>
            <Reveal delay={0.15} className="glass rounded-[2rem] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-leaf-300">Convergence</p>
              <h3 className="text-display mt-2 text-3xl font-medium text-white">Departments working as one</h3>
              <ul className="mt-6 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                {[
                  "Environment, Forests, Science & Technology",
                  "Agriculture & Horticulture",
                  "Panchayat Raj & Rural Development",
                  "Mines & Geology",
                  "Roads & Buildings · Water Resources",
                  "Municipal Administration & Urban Development",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <LeafIcon className="mt-0.5 size-4 shrink-0 text-leaf-300" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="container-x py-24 sm:py-32">
        <Reveal className="eyebrow mb-5">How we are organised</Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
            From the Secretariat to every mandal.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2" amount={0.1}>
          {STRUCTURE.map((s) => (
            <StaggerItem key={s.title} className="glass rounded-[2rem] p-8">
              <span className="grid size-11 place-items-center rounded-full bg-leaf-400/15 text-leaf-300">
                <s.icon className="size-5" />
              </span>
              <h3 className="text-display mt-5 text-2xl font-medium text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{s.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Values */}
      <section className="container-x pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12">
          <Image src={IMAGES.nursery} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-forest-950/75" />
          <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Reveal className="eyebrow mb-5">How we work</Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium text-white">
                  Four principles behind every sapling.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-8">
                <Link
                  href="/vision-2047"
                  className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
                >
                  Read the 2047 vision
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {VALUES.map(([t, d]) => (
                <StaggerItem key={t} className="glass rounded-3xl p-6">
                  <h3 className="text-display text-xl font-medium text-white">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </>
  );
}
