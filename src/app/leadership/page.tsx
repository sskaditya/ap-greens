import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import LeaderProfile, { type Leader } from "@/components/LeaderProfile";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ArrowRight, CheckIcon, PinIcon, ShieldIcon, TreeIcon } from "@/components/Icons";
import { IMAGES, ORG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
  description: `The multi-tier governance of AP-GREEN: Governing Council chaired by ${ORG.councilChairman.name}, Executive Committee chaired by ${ORG.chairman.name} (${ORG.chairman.alias}), and 26 District Green Development Agencies.`,
};

const LEADERS: Leader[] = [
  {
    index: "01 · Governing Council",
    tier: "Governing Council Chairman",
    honorific: ORG.councilChairman.honorific,
    name: ORG.councilChairman.name,
    designation: ORG.councilChairman.designation,
    role: ORG.councilChairman.role,
    summary:
      `As Chairman of the Governing Council, ${ORG.councilChairman.name} supervises the entire state-level programme and leads macro-policy formulation — setting the direction, targets and inter-departmental mandates that take Andhra Pradesh from ${ORG.currentCover}% to ${ORG.finalTarget.value}% green cover by ${ORG.finalTarget.year}, as part of ${ORG.vision}.`,
    duties: [
      "Supervision of the entire state-level programme",
      "Macro-policy formulation and target setting",
      "Approval of the annual state greening plan",
      "Inter-departmental mandates and budget priorities",
      "Alignment with Viksit Andhra Pradesh – 2047",
      "Review of state-wide progress",
    ],
    quote: "Green cover is not a statistic for Andhra Pradesh. It is the inheritance we leave every child of this state.",
    facts: [
      [`${ORG.finalTarget.value}%`, `green cover target · ${ORG.finalTarget.year}`],
      [`${ORG.interimTarget.value}%`, `interim milestone · ${ORG.interimTarget.year}`],
      ["Apex", "policy tier of AP-GREEN"],
    ],
    initials: ORG.councilChairman.initials,
    photo: ORG.councilChairman.photo,
    photoAlt: `${ORG.councilChairman.honorific} ${ORG.councilChairman.name}, Deputy Chief Minister of Andhra Pradesh and Chairman of the AP-GREEN Governing Council`,
    photoPosition: "50% 25%",
  },
  {
    index: "02 · Executive Committee",
    tier: "Executive Committee Chairman",
    honorific: ORG.chairman.honorific,
    name: ORG.chairman.name,
    alias: ORG.chairman.alias,
    designation: ORG.chairman.designation,
    role: ORG.chairman.role,
    note: ORG.chairman.note,
    summary:
      `Appointed in August 2026 with an official Cabinet rank, ${ORG.chairman.alias} directly oversees the day-to-day coordination, implementation and departmental synergy for the greening initiatives — the working link between policy at the Governing Council and plantations in all 26 districts.`,
    duties: [
      "Day-to-day coordination of the greening programme",
      "Implementation of Council policy as schemes and guidelines",
      "Synergy between forest, agriculture, rural, mining, roads and urban departments",
      "Oversight of District Green Development Agencies",
      "Nursery network and sapling supply chain",
      "Quarterly performance review of every district",
    ],
    quote: "Fifty percent green cover is not a forest department target. It is a promise every farmer, every school and every village in Andhra Pradesh will help keep.",
    facts: [
      ["26", "district agencies reviewed"],
      ["6", "strategies coordinated"],
      ["Aug 2026", "appointed with Cabinet rank"],
    ],
    initials: ORG.chairman.initials,
    photo: ORG.chairman.photo,
    photoAlt: `${ORG.chairman.honorific} ${ORG.chairman.name}, Chairman of the AP-GREEN Executive Committee, at his office`,
    photoPosition: "50% 15%",
  },
];

const TIERS = [
  {
    n: "01",
    icon: ShieldIcon,
    title: "Governing Council",
    lead: `${ORG.councilChairman.honorific} ${ORG.councilChairman.name}`,
    leadRole: "Chairman · Deputy Chief Minister & Forest Minister",
    scope: "State level",
    text: "The apex body. Supervises the entire state-level programme, sets macro-policy and the 2030 / 2047 targets, and aligns AP-GREEN with Viksit Andhra Pradesh – 2047.",
    duties: ["Macro-policy formulation", "Approval of the annual state greening plan", "Inter-departmental mandates", "Review of state-wide progress"],
  },
  {
    n: "02",
    icon: TreeIcon,
    title: "Executive Committee",
    lead: `${ORG.chairman.honorific} ${ORG.chairman.name} (${ORG.chairman.alias})`,
    leadRole: "Chairman · MLC · Cabinet rank",
    scope: "Implementation",
    text: "Turns policy into programmes. Oversees day-to-day coordination, implementation and synergy between the forest, agriculture, rural development, mining, roads and urban departments.",
    duties: ["Day-to-day coordination", "Programme design & implementation", "Departmental synergy", "District performance review"],
  },
  {
    n: "03",
    icon: PinIcon,
    title: "District Green Development Agencies",
    lead: "26 districts",
    leadRole: "District-level delivery",
    scope: "Ground level",
    text: "One agency per district converges departments on the ground: nurseries, farmer enrolment, avenue plantations, land restoration and citizen mobilisation.",
    duties: ["District greening plans", "Nursery & sapling supply", "Plantation & aftercare", "Community engagement"],
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            Governance built for <span className="text-leaf-300">a 2047 target.</span>
          </>
        }
        text={`${ORG.short} operates under a multi-tier governance model established by the ${ORG.parent}: a Governing Council for policy, an Executive Committee for implementation, and District Green Development Agencies for delivery.`}
        image={IMAGES.avenue}
        imageAlt="Tree-lined highway in Andhra Pradesh"
      />

      {/* Leadership profiles */}
      <section className="container-x py-24 sm:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal className="eyebrow mb-5">Key leadership</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
                Two chairs, one mission.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              The Governing Council sets the direction; the Executive Committee delivers it. Together they
              carry AP-GREEN from policy to plantation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-8">
          {LEADERS.map((leader, i) => (
            <LeaderProfile key={leader.name} leader={leader} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Governance model */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image src={IMAGES.forest} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
        <div className="container-x relative">
          <Reveal className="eyebrow mb-5">Governance model</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
              Three tiers, from policy to plantation.
            </h2>
          </Reveal>

          <ol className="relative mt-16 space-y-4">
            <div className="absolute left-[3.75rem] top-8 bottom-8 hidden w-px bg-gradient-to-b from-leaf-400 via-leaf-400/50 to-leaf-400/10 md:block" />
            {TIERS.map((t, i) => (
              <Reveal key={t.title} as="li" delay={i * 0.08} className="relative">
                <div className="glass grid gap-6 rounded-[2rem] p-7 md:grid-cols-[3.5rem_1.2fr_1fr] md:p-8">
                  <span className="relative z-10 grid size-14 place-items-center rounded-full border border-leaf-400/60 bg-forest-950 text-leaf-300">
                    <t.icon className="size-6" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-semibold text-leaf-300">{t.n}</p>
                      <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-white/80">{t.scope}</span>
                    </div>
                    <h3 className="text-display mt-3 text-2xl font-medium text-white sm:text-3xl">{t.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-white">{t.lead}</p>
                    <p className="text-xs text-white/55">{t.leadRole}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">{t.text}</p>
                  </div>
                  <ul className="grid content-start gap-2 text-sm text-white/80">
                    {t.duties.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-400/20 text-leaf-300">
                          <CheckIcon className="size-3.5" strokeWidth={2.2} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Decision flow */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal className="eyebrow mb-5">How decisions flow</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium text-white">
                Policy down, evidence up.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Targets and policy move from the Governing Council through the Executive Committee to the
                districts. Survival data, satellite cover estimates and citizen feedback move back up the same
                chain, so every review is based on what is actually growing.
              </p>
            </Reveal>
          </div>
          <StaggerGroup className="grid gap-3">
            {[
              ["Council sets direction", "Annual targets, policy and budget priorities approved by the Governing Council."],
              ["Committee designs programmes", "Executive Committee converts direction into schemes, guidelines and department roles."],
              ["Districts deliver", "District Green Development Agencies plan nurseries, plantations and community drives."],
              ["Evidence returns", "Geo-tagged survival audits and satellite cover maps feed quarterly reviews at every tier."],
            ].map(([t, d], i) => (
              <StaggerItem key={t} className="glass flex items-start gap-5 rounded-3xl p-6">
                <span className="text-display text-3xl font-medium text-leaf-300">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-display text-xl font-medium text-white">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12">
          <Image src={IMAGES.nursery} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-forest-950/75" />
          <div className="relative flex flex-col gap-8 p-8 sm:p-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal className="eyebrow mb-4">Work with us</Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-display max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium text-white">
                  Institutions, departments and citizens — the mission has a place for you.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
              >
                Get involved
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/about" className="glass-strong inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/25">
                About AP-GREEN
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
