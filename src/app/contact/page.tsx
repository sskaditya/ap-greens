import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PledgeForm from "@/components/PledgeForm";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { IMAGES, ORG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach AP-GREEN or your District Green Development Agency.",
};

const OFFICES = [
  { region: "Head office", place: "AP-GREEN Secretariat, Amaravati", note: "Executive Committee & programme cells" },
  { region: "North Coastal", place: "Visakhapatnam", note: "Srikakulam · Vizianagaram · Manyam · ASR · Visakhapatnam · Anakapalli" },
  { region: "Godavari & Krishna", place: "Rajamahendravaram", note: "Kakinada · East & West Godavari · Konaseema · Eluru · Krishna · NTR" },
  { region: "South Coastal", place: "Guntur", note: "Guntur · Palnadu · Bapatla · Prakasam · Nellore" },
  { region: "Rayalaseema", place: "Kurnool", note: "Kurnool · Nandyal · Anantapur · Sri Sathya Sai · Kadapa · Annamayya · Chittoor · Tirupati" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="text-leaf-300">AP-GREEN.</span>
          </>
        }
        text="Questions about a programme, a plantation drive near you, or a partnership? Write to us or reach your regional office."
        image={IMAGES.hero}
        imageAlt="Green fields and hills of Andhra Pradesh"
      />

      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal className="eyebrow mb-5">Reach us</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium text-white">
                We reply within seven working days.
              </h2>
            </Reveal>
            <StaggerGroup className="mt-10 space-y-3">
              {[
                { icon: PinIcon, t: "Address", d: "AP-GREEN Secretariat, Amaravati, Andhra Pradesh" },
                { icon: PhoneIcon, t: "Phone", d: "Citizen services 1902 · Forest emergency 1800-425-4551" },
                { icon: MailIcon, t: "Email", d: "info@apgreen.ap.gov.in" },
              ].map((c) => (
                <StaggerItem key={c.t} className="glass flex items-start gap-4 rounded-3xl p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-leaf-400/15 text-leaf-300">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{c.t}</p>
                    <p className="mt-1 text-sm text-white">{c.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.2} className="mt-8 text-sm leading-relaxed text-white/55">
              {ORG.full} · {ORG.parent}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <PledgeForm variant="contact" />
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12">
          <Image src={IMAGES.forest} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-forest-950/80" />
          <div className="relative p-8 sm:p-14">
            <Reveal className="eyebrow mb-5">District Green Development Agencies</Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display max-w-3xl text-[clamp(2.2rem,4.5vw,3.75rem)] font-medium text-white">
                Regional offices across 26 districts.
              </h2>
            </Reveal>
            <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
              {OFFICES.map((o) => (
                <StaggerItem key={o.region} className="glass rounded-3xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-leaf-300">{o.region}</p>
                  <h3 className="text-display mt-2 text-2xl font-medium text-white">{o.place}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{o.note}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
    </>
  );
}
