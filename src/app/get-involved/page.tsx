import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PledgeForm from "@/components/PledgeForm";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { BuildingIcon, LeafIcon, SproutIcon, TreeIcon } from "@/components/Icons";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join AP-GREEN's people's movement: plant, adopt, volunteer or partner to help Andhra Pradesh reach 50% green cover by 2047.",
};

const WAYS = [
  {
    icon: SproutIcon,
    title: "Plant on your land",
    who: "Farmers & landowners",
    text: "Enrol in farm forestry or agro-forestry to receive free saplings, three years of maintenance support and market linkages for timber and fruit.",
  },
  {
    icon: TreeIcon,
    title: "Adopt an avenue",
    who: "Residents & RWAs",
    text: "Take responsibility for the saplings on your street, colony or village road. AP-GREEN provides stock, tree guards and a survival tracker.",
  },
  {
    icon: LeafIcon,
    title: "Volunteer for drives",
    who: "Students, SHGs & citizens",
    text: "Join monsoon plantation drives, nursery days and restoration camps run by your District Green Development Agency.",
  },
  {
    icon: BuildingIcon,
    title: "Partner as an institution",
    who: "Industry, temples & schools",
    text: "Fund block plantations, sponsor a community nursery or green your campus, with geo-tagged reporting on every tree.",
  },
];

const STEPS = [
  ["Pledge", "Tell us who you are and how you would like to contribute."],
  ["Match", "Your District Green Development Agency connects you to a drive, plot or nursery."],
  ["Plant", "Receive saplings and guidance; plant with your community."],
  ["Track", "Follow survival and growth of your trees through geo-tagged updates."],
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="People's movement"
        title={
          <>
            Fifty percent needs <span className="text-leaf-300">five crore hands.</span>
          </>
        }
        text="Government can plan and supply saplings, but only citizens can plant and protect them at the scale Andhra Pradesh needs. AP-GREEN is designed as a mass public movement — here is how you can join."
        image={IMAGES.nursery}
        imageAlt="Rows of saplings in a shade-net nursery"
      />

      <section className="container-x py-24 sm:py-32">
        <Reveal className="eyebrow mb-5">Ways to join</Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
            Pick the role that fits you.
          </h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2" amount={0.1}>
          {WAYS.map((w) => (
            <StaggerItem key={w.title} className="glass rounded-[2rem] p-8 transition hover:bg-white/12">
              <span className="grid size-11 place-items-center rounded-full bg-leaf-400/15 text-leaf-300">
                <w.icon className="size-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-leaf-300">{w.who}</p>
              <h3 className="text-display mt-2 text-2xl font-medium text-white">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{w.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image src={IMAGES.avenue} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/70 to-forest-950" />
        <div className="container-x relative">
          <Reveal className="eyebrow mb-5">How it works</Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-white">
              From pledge to canopy in four steps.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
            {STEPS.map(([t, d], i) => (
              <StaggerItem key={t} className="glass rounded-3xl p-6">
                <p className="text-display text-4xl font-medium text-leaf-300">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-display mt-3 text-xl font-medium text-white">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="pledge" className="container-x pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal className="eyebrow mb-5">Take the green pledge</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium text-white">
                One form. One tree at least.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Tell us where you are and how you would like to help. Your District Green Development
                Agency will reach out with the next plantation drive or enrolment window near you.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <PledgeForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
