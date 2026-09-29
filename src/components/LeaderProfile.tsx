import Image from "next/image";
import { Reveal } from "./motion";
import { CheckIcon } from "./Icons";

export type Leader = {
  index: string;
  tier: string;
  honorific?: string;
  name: string;
  alias?: string;
  designation: string;
  role: string;
  note?: string;
  summary: string;
  duties: string[];
  quote: string;
  facts: [string, string][];
  initials: string;
  photo?: string;
  photoAlt?: string;
  photoPosition?: string;
  /** Source orientation; landscape photos render 4:3 on small screens to avoid heavy upscaling. */
  photoOrientation?: "portrait" | "landscape";
};

/** Full-width leadership profile: portrait panel + bio, responsibilities and quote. */
export default function LeaderProfile({ leader, reverse }: { leader: Leader; reverse?: boolean }) {
  const fullName = [leader.honorific, leader.name].filter(Boolean).join(" ");

  return (
    <article
      id={leader.name.toLowerCase().replace(/[^a-z]+/g, "-")}
      className={`grid gap-5 lg:grid-cols-[2fr_3fr] ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      {/* Portrait */}
      <Reveal amount={0.15}>
        <figure
          className={`relative overflow-hidden rounded-[2rem] border border-white/12 lg:aspect-auto lg:h-full lg:min-h-[36rem] ${
            leader.photoOrientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]"
          }`}
        >
          {leader.photo ? (
            <Image
              src={leader.photo}
              alt={leader.photoAlt ?? `Portrait of ${fullName}`}
              fill
              quality={90}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={{ objectPosition: leader.photoPosition ?? "50% 20%" }}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950">
              <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-leaf-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
              <div className="relative flex flex-col items-center gap-5">
                <span className="grid size-32 place-items-center rounded-full bg-white/95 p-3">
                  <Image src="/images/ap-emblem.png" alt="" width={112} height={123} className="size-24 object-contain" />
                </span>
                <span className="text-display text-6xl font-semibold text-white/90">{leader.initials}</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/60">
                  Official portrait to follow
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-leaf-300">{leader.tier}</p>
            <p className="text-display mt-1 text-2xl font-medium text-white sm:text-3xl">{fullName}</p>
            {leader.alias && <p className="text-sm text-white/70">({leader.alias})</p>}
          </figcaption>
        </figure>
      </Reveal>

      {/* Details */}
      <Reveal delay={0.08} amount={0.15} className="glass flex flex-col rounded-[2rem] p-7 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-leaf-300">{leader.index}</p>
            <h3 className="text-display mt-3 text-3xl font-medium text-white sm:text-4xl">{fullName}</h3>
            <p className="mt-3 text-base text-white/85">{leader.role}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/60">{leader.designation}</p>
            {leader.note && <p className="mt-1 text-sm text-white/50">{leader.note}</p>}
          </div>
          <span className="glass hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold text-white/80 sm:inline-block">
            {leader.tier}
          </span>
        </div>

        <p className="mt-7 text-sm leading-relaxed text-white/70 sm:text-base">{leader.summary}</p>

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Responsibilities</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
            {leader.duties.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-400/20 text-leaf-300">
                  <CheckIcon className="size-3.5" strokeWidth={2.2} />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-8 border-l-2 border-leaf-400 pl-5">
          <p className="text-display text-xl font-light leading-snug text-white sm:text-2xl">“{leader.quote}”</p>
          <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-leaf-300">{fullName}</footer>
        </blockquote>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {leader.facts.map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-display text-2xl font-medium text-white sm:text-3xl">{v}</p>
              <p className="mt-1 text-xs text-white/60">{l}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
