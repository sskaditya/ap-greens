import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Impact from "@/components/home/Impact";
import Pillars from "@/components/home/Pillars";
import Feature from "@/components/home/Feature";
import AvenueParallax from "@/components/home/AvenueParallax";
import Roadmap from "@/components/home/Roadmap";
import DistrictStrip from "@/components/home/DistrictStrip";
import GetInvolvedCTA from "@/components/home/GetInvolvedCTA";
import ScrollUI from "@/components/home/ScrollUI";
import { IMAGES } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <ScrollUI />

      {/* 01 */}
      <Hero />
      {/* 02 */}
      <Manifesto />
      {/* 03 */}
      <Impact />
      {/* 04 */}
      <Pillars />
      {/* 05 */}
      <Feature
        id="farms"
        eyebrow="Farm & agro-forestry"
        title={
          <>
            Trees as a <span className="text-leaf-300">second harvest.</span>
          </>
        }
        text="Most of Andhra Pradesh is farmland, not forest — so half the state cannot be greened inside forest boundaries alone. AP-GREEN helps farmers grow timber, fruit and fodder trees on bunds, fallows and within cropping systems, adding income and canopy at the same time."
        bullets={[
          "Free saplings with three years of maintenance support",
          "Simplified felling and transit rules for farm-grown timber",
          "Agro-forestry demonstration plots in every mandal",
          "Buy-back and carbon-credit linkages for farmer groups",
        ]}
        image={IMAGES.farm}
        imageAlt="Paddy fields lined with palms at sunrise"
        href="/farm-forestry"
        cta="Explore farm forestry"
        badge={{ value: "26", label: "districts enrolling farmers" }}
      />
      {/* 06 */}
      <Feature
        id="restoration"
        reverse
        eyebrow="Land restoration"
        title={
          <>
            No land too broken <span className="text-leaf-300">to grow again.</span>
          </>
        }
        text="Eroded wastelands, abandoned quarries and mine spoil heaps scar every district. Through District Green Development Agencies, AP-GREEN rebuilds soil, harvests water and plants hardy pioneer species so that native forest can return."
        bullets={[
          "Mine-spoil reclamation in partnership with lessees",
          "Wasteland afforestation with community protection committees",
          "Watershed works paired with plantation to recharge groundwater",
          "Satellite and drone monitoring of every restored parcel",
        ]}
        image={IMAGES.restore}
        imageAlt="Former mining terraces being reclaimed with young plantations"
        href="/land-restoration"
        cta="Explore restoration"
        badge={{ value: "5 yrs", label: "protection & aftercare" }}
      />
      {/* 07 */}
      <AvenueParallax />
      {/* 08 */}
      <Roadmap />
      {/* 09 */}
      <DistrictStrip />
      {/* 10 */}
      <GetInvolvedCTA />
    </>
  );
}
