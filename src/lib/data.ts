export type NavItem = { label: string; href: string };

export const ORG = {
  short: "AP-GREEN",
  full: "Andhra Pradesh Society for Greening and Reforestation for Ecological Enrichment",
  parent: "Government of Andhra Pradesh",
  councilChairman: {
    name: "Pawan Kalyan",
    honorific: "Hon'ble",
    designation: "Deputy Chief Minister & Minister for Environment, Forests, Science & Technology, Andhra Pradesh",
    role: "Chairman, AP-GREEN Governing Council",
    note: "Supervises the state-level programme and macro-policy formulation",
    initials: "PK",
    photo: "/images/leaders/pawan-kalyan.jpg" as string | undefined,
  },
  chairman: {
    name: "Konidela Nagendra Rao",
    honorific: "Sri",
    alias: "Naga Babu",
    designation: "Hon'ble Member of Legislative Council, Andhra Pradesh",
    role: "Chairman, AP-GREEN Executive Committee",
    note: "Cabinet rank · Appointed August 2026",
    detail: "Directly oversees day-to-day coordination, implementation and departmental synergy for the greening initiatives",
    initials: "KN",
    photo: "/images/leaders/nagababu.jpg" as string | undefined,
  },
  currentCover: 22.96,
  interimTarget: { value: 33, year: 2030 },
  finalTarget: { value: 50, year: 2047 },
  vision: "Viksit Andhra Pradesh – 2047",
};

/** The 10 primary tabs. Each maps to its own route under src/app. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision 2047", href: "/vision-2047" },
  { label: "Farm Forestry", href: "/farm-forestry" },
  { label: "Agro-Forestry", href: "/agro-forestry" },
  { label: "Avenues", href: "/avenue-plantations" },
  { label: "Restoration", href: "/land-restoration" },
  { label: "Nurseries", href: "/nurseries" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const IMAGES = {
  hero: "/images/hero.jpg",
  forest: "/images/forest.jpg",
  farm: "/images/farm.jpg",
  nursery: "/images/nursery.jpg",
  avenue: "/images/avenue.jpg",
  restore: "/images/restore.jpg",
  coast: "/images/coast.jpg",
  city: "/images/city.jpg",
} as const;

export type Stat = { value: number; suffix?: string; prefix?: string; label: string; note?: string };

export const HOME_STATS: Stat[] = [
  { value: 22.96, suffix: "%", label: "Forest cover today", note: "Share of the state's geographical area" },
  { value: 33, suffix: "%", label: "Interim milestone", note: "Green cover target by 2030" },
  { value: 50, suffix: "%", label: "Final target", note: "Green cover by 2047 · Viksit AP" },
  { value: 26, label: "District Green Development Agencies", note: "One in every district" },
];

export type Pillar = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  href: string;
  accent: string;
};

export const PILLARS: Pillar[] = [
  {
    slug: "farm-forestry",
    title: "Farm Forestry",
    short: "Trees as a crop on private farmland.",
    description:
      "Helping farmers grow timber, fruit and fodder trees on bunds, field edges and fallow plots — a second income that also builds green cover outside notified forests.",
    image: IMAGES.farm,
    href: "/farm-forestry",
    accent: "from-lime-300/30 to-leaf-400/10",
  },
  {
    slug: "agro-forestry",
    title: "Agro-Forestry",
    short: "Crops, trees and livestock on the same land.",
    description:
      "Integrating native and commercial tree species into cropping systems to improve soil, water retention and farm resilience while sequestering carbon.",
    image: IMAGES.hero,
    href: "/agro-forestry",
    accent: "from-leaf-300/30 to-forest-600/10",
  },
  {
    slug: "avenue-plantations",
    title: "Avenue Plantations",
    short: "Green corridors along every road and canal.",
    description:
      "Shade-giving native avenues along national and state highways, rural roads, canal bunds and railway lines — maintained until they are self-sustaining.",
    image: IMAGES.avenue,
    href: "/avenue-plantations",
    accent: "from-leaf-500/30 to-forest-700/10",
  },
  {
    slug: "land-restoration",
    title: "Land Restoration",
    short: "Healing degraded and mining-affected land.",
    description:
      "Reclaiming eroded wastelands, abandoned quarries and mine spoil through soil work, water harvesting and native species plantation, led by district agencies.",
    image: IMAGES.restore,
    href: "/land-restoration",
    accent: "from-amber-300/30 to-leaf-400/10",
  },
  {
    slug: "nurseries",
    title: "Nursery Network",
    short: "Quality saplings, close to every village.",
    description:
      "A statewide network of high-tech and community nurseries producing native, climate-suited planting stock with traceable quality standards.",
    image: IMAGES.nursery,
    href: "/nurseries",
    accent: "from-leaf-300/30 to-lime-300/10",
  },
  {
    slug: "movement",
    title: "People's Movement",
    short: "Greening as a mass public movement.",
    description:
      "Schools, self-help groups, industry, temples and citizens planting and adopting trees together — because 50% green cover cannot be achieved by government alone.",
    image: IMAGES.forest,
    href: "/get-involved",
    accent: "from-fuchsia-300/25 to-leaf-400/10",
  },
];

export type Milestone = { year: string; title: string; text: string };

export const ROADMAP: Milestone[] = [
  { year: "2025", title: "Foundation", text: "AP-GREEN constituted with an Executive Committee of cabinet rank. District Green Development Agencies set up in all 26 districts. Baseline green cover mapped at 22.96%." },
  { year: "2027", title: "Mobilise", text: "Statewide nursery network operational. Farm and agro-forestry enrolment opens in every mandal. Avenue plantation on priority highway and canal stretches." },
  { year: "2030", title: "33% Milestone", text: "Interim target: one-third of the state's geographical area under green cover, verified through satellite monitoring and geo-tagged plantations." },
  { year: "2040", title: "Consolidate", text: "Restored mining and degraded landscapes reach canopy closure. Tree-based farming becomes a mainstream income source across Rayalaseema and coastal districts." },
  { year: "2047", title: "50% Green Cover", text: "Half of Andhra Pradesh under forest and tree cover — the AP-GREEN contribution to Viksit Andhra Pradesh – 2047." },
];

export type Programme = {
  name: string;
  category: string;
  href: string;
  summary: string;
};

export const PROGRAMMES: Programme[] = [
  { name: "Tree Bund Scheme", category: "Farm Forestry", href: "/farm-forestry", summary: "Free saplings and maintenance support for planting timber and fruit species along field bunds." },
  { name: "Block Plantation on Fallows", category: "Farm Forestry", href: "/farm-forestry", summary: "Support for farmers to convert uncultivated plots into managed tree blocks with assured buy-back linkages." },
  { name: "Timber Value Chain", category: "Farm Forestry", href: "/farm-forestry", summary: "Simplified felling and transit rules for farm-grown timber, and market linkages with wood-based industry." },
  { name: "Agro-Forestry Demonstration Plots", category: "Agro-Forestry", href: "/agro-forestry", summary: "Model plots in every mandal showing crop–tree combinations suited to local soil and rainfall." },
  { name: "Horti-Forestry Belts", category: "Agro-Forestry", href: "/agro-forestry", summary: "Mango, tamarind, jamun and drumstick belts integrated with intercrops for year-round income." },
  { name: "Silvi-Pasture for Livestock", category: "Agro-Forestry", href: "/agro-forestry", summary: "Fodder trees and grasses on common lands to support dairy and small-ruminant households." },
  { name: "Highway Green Corridors", category: "Avenue Plantations", href: "/avenue-plantations", summary: "Native shade avenues along national and state highways with three-year maintenance contracts." },
  { name: "Canal & Bund Greening", category: "Avenue Plantations", href: "/avenue-plantations", summary: "Plantations along irrigation canals and tank bunds, protecting embankments and shading water." },
  { name: "Green Villages & Streets", category: "Avenue Plantations", href: "/avenue-plantations", summary: "Every rural road and village street lined with trees adopted by local households." },
  { name: "Mine Spoil Reclamation", category: "Land Restoration", href: "/land-restoration", summary: "Contour work, topsoil rebuilding and pioneer species plantation on abandoned mining zones." },
  { name: "Wasteland Afforestation", category: "Land Restoration", href: "/land-restoration", summary: "Restoring degraded revenue and common lands through district agencies with community protection." },
  { name: "Watershed-linked Planting", category: "Land Restoration", href: "/land-restoration", summary: "Trenching, check dams and percolation tanks paired with plantation to bring back groundwater." },
  { name: "Hi-Tech Central Nurseries", category: "Nurseries", href: "/nurseries", summary: "Climate-controlled nurseries producing tall, hardy saplings of native species at scale." },
  { name: "Community & SHG Nurseries", category: "Nurseries", href: "/nurseries", summary: "Village nurseries run by women's self-help groups, creating local livelihoods and local stock." },
  { name: "Sapling Quality Standards", category: "Nurseries", href: "/nurseries", summary: "Species, height and root-health norms with QR-based traceability from nursery to planting site." },
];

export type Sector = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  image: string;
  stats: Stat[];
  highlights: { title: string; text: string }[];
  gallery: { src: string; caption: string }[];
  quote: { text: string; by: string };
};

export const SECTORS: Record<string, Sector> = {
  "farm-forestry": {
    slug: "farm-forestry",
    title: "Farm Forestry",
    eyebrow: "Trees as a crop",
    tagline: "A second harvest that grows taller every year.",
    intro:
      "Most of Andhra Pradesh's land is farmland, not forest. Reaching 50% green cover means trees must grow on private fields too. Farm forestry gives farmers free saplings, technical guidance and market linkages to grow timber, fruit and fodder species on bunds, edges and fallow plots — building income and green cover at the same time.",
    image: IMAGES.farm,
    stats: [
      { value: 26, label: "Districts enrolling farmers" },
      { value: 3, suffix: " yrs", label: "Maintenance support" },
      { value: 100, suffix: "%", label: "Sapling cost covered" },
      { value: 2047, label: "Target horizon" },
    ],
    highlights: [
      { title: "Tree Bund Scheme", text: "Farmers receive saplings of teak, red sanders, neem, mahogany and fruit species for field bunds, with survival-linked incentives." },
      { title: "Fallow-to-forest blocks", text: "Uncultivated and rain-fed plots are converted into managed tree blocks with drip support and buy-back tie-ups." },
      { title: "Timber-friendly rules", text: "Simplified felling and transit permissions for farm-grown timber so that trees are an asset, not a liability." },
      { title: "Farmer field schools", text: "Mandal-level training on spacing, pruning, pest management and harvesting with demonstration farmers." },
    ],
    gallery: [
      { src: IMAGES.farm, caption: "Tree-lined paddy bunds at dawn" },
      { src: IMAGES.hero, caption: "Coconut and mixed-tree farms, Godavari region" },
      { src: IMAGES.nursery, caption: "Saplings ready for farmer distribution" },
    ],
    quote: { text: "When a farmer plants a tree on a bund, the state gains a forest without losing a field.", by: "AP-GREEN Farm Forestry Cell" },
  },
  "agro-forestry": {
    slug: "agro-forestry",
    title: "Agro-Forestry",
    eyebrow: "Crops, trees and livestock together",
    tagline: "Farms that feed people, soil and climate at once.",
    intro:
      "Agro-forestry integrates trees into cropping and livestock systems rather than replacing them. Shade, leaf litter and deep roots improve soil carbon, hold moisture through dry spells and shelter crops from wind and heat. AP-GREEN promotes proven crop–tree combinations for every agro-climatic zone of the state.",
    image: IMAGES.hero,
    stats: [
      { value: 7, label: "Agro-climatic zones covered" },
      { value: 1, suffix: " per mandal", label: "Demonstration plots" },
      { value: 30, suffix: "%", label: "Typical soil-moisture gain" },
      { value: 365, suffix: " days", label: "Green cover on farms" },
    ],
    highlights: [
      { title: "Demonstration plots", text: "Model agro-forestry farms in every mandal show what works locally — from mango–groundnut to teak–turmeric systems." },
      { title: "Horti-forestry belts", text: "Mango, tamarind, jamun, custard apple and drumstick belts with intercrops for year-round household income." },
      { title: "Silvi-pasture", text: "Fodder trees and improved grasses on common lands for dairy and small-ruminant families." },
      { title: "Carbon & credit linkages", text: "Aggregating farmer plots into carbon projects so that ecological services are paid for." },
    ],
    gallery: [
      { src: IMAGES.hero, caption: "Mixed tree–crop landscape along the river" },
      { src: IMAGES.farm, caption: "Intercropped paddy and palms" },
      { src: IMAGES.forest, caption: "Shade belts protecting field margins" },
    ],
    quote: { text: "The most productive acre in Andhra Pradesh will have a tree on it.", by: "AP-GREEN Agro-Forestry Programme" },
  },
  "avenue-plantations": {
    slug: "avenue-plantations",
    title: "Avenue Plantations",
    eyebrow: "Green corridors",
    tagline: "Every road, canal and railway line shaded by native trees.",
    intro:
      "Andhra Pradesh has tens of thousands of kilometres of highways, rural roads, canal bunds and rail corridors — linear land that can carry millions of trees. AP-GREEN plants native, shade-giving avenues and, crucially, maintains them for years until they stand on their own.",
    image: IMAGES.avenue,
    stats: [
      { value: 26, label: "District avenue plans" },
      { value: 3, suffix: " yrs", label: "Guaranteed maintenance" },
      { value: 100, suffix: "%", label: "Native species mix" },
      { value: 2030, label: "Priority stretches complete" },
    ],
    highlights: [
      { title: "Highway green corridors", text: "Multi-row avenues along national and state highways with tree guards, drip and survival audits." },
      { title: "Canal and tank-bund greening", text: "Plantations that protect embankments, reduce evaporation and shade irrigation channels." },
      { title: "Railway and industrial belts", text: "Green buffers along rail lines and industrial estates to cut dust, noise and heat." },
      { title: "Green villages and streets", text: "Every village street lined with trees adopted and cared for by local households and schools." },
    ],
    gallery: [
      { src: IMAGES.avenue, caption: "Mature avenue canopy on a state highway" },
      { src: IMAGES.city, caption: "Tree-lined urban boulevard" },
      { src: IMAGES.hero, caption: "Canal bund plantation in the delta" },
    ],
    quote: { text: "A road with shade is a road people remember.", by: "AP-GREEN Avenue Programme" },
  },
  "land-restoration": {
    slug: "land-restoration",
    title: "Land Restoration",
    eyebrow: "Healing what was lost",
    tagline: "Bringing degraded and mining-affected land back to life.",
    intro:
      "Eroded wastelands, abandoned quarries and mine spoil heaps scar parts of every district. Through District Green Development Agencies, AP-GREEN rebuilds soil, harvests water and plants hardy pioneer species that pave the way for native forest to return — turning liabilities into green assets.",
    image: IMAGES.restore,
    stats: [
      { value: 26, label: "District Green Development Agencies" },
      { value: 5, suffix: " yrs", label: "Protection & aftercare" },
      { value: 100, suffix: "%", label: "Geo-tagged plantations" },
      { value: 2040, label: "Canopy closure target" },
    ],
    highlights: [
      { title: "Mine spoil reclamation", text: "Contour terracing, topsoil rebuilding and pioneer species on abandoned mining zones, in partnership with lessees." },
      { title: "Wasteland afforestation", text: "Restoring degraded revenue and common lands with community protection committees." },
      { title: "Watershed-linked planting", text: "Trenches, check dams and percolation tanks paired with plantation to recharge groundwater." },
      { title: "Monitoring from space", text: "Satellite and drone surveys track survival and canopy growth on every restored parcel." },
    ],
    gallery: [
      { src: IMAGES.restore, caption: "Reclaimed mining terraces returning to green" },
      { src: IMAGES.forest, caption: "Mature restored forest, Eastern Ghats" },
      { src: IMAGES.coast, caption: "Coastal shelter-belt afforestation" },
    ],
    quote: { text: "No land is too broken to grow again.", by: "District Green Development Agencies" },
  },
  nurseries: {
    slug: "nurseries",
    title: "Nursery Network",
    eyebrow: "Where the forest begins",
    tagline: "Quality saplings, close to every village.",
    intro:
      "Half the state cannot be greened with weak, mismatched saplings. AP-GREEN is building a statewide network of hi-tech central nurseries and village-level community nurseries that produce tall, hardy, native planting stock — with traceable quality from seed to site.",
    image: IMAGES.nursery,
    stats: [
      { value: 26, label: "District nursery hubs" },
      { value: 1, suffix: " per mandal", label: "Community nurseries" },
      { value: 100, suffix: "%", label: "QR-traceable stock" },
      { value: 50, suffix: "+", label: "Native species raised" },
    ],
    highlights: [
      { title: "Hi-tech central nurseries", text: "Climate-controlled facilities in every district producing tall saplings with high survival rates." },
      { title: "SHG-run village nurseries", text: "Women's self-help groups raise local species close to planting sites — local stock, local livelihoods." },
      { title: "Seed and species standards", text: "Certified seed sources and species lists matched to each agro-climatic zone." },
      { title: "Sapling traceability", text: "QR codes on every batch connect nursery, species, age and destination for survival audits." },
    ],
    gallery: [
      { src: IMAGES.nursery, caption: "Shade-net nursery at first light" },
      { src: IMAGES.farm, caption: "Saplings headed to farm bunds" },
      { src: IMAGES.avenue, caption: "Nursery stock as mature avenues" },
    ],
    quote: { text: "A forest is only as strong as the sapling it started from.", by: "AP-GREEN Nursery Mission" },
  },
};

export const DISTRICT_STRIP = [
  { name: "Srikakulam", image: IMAGES.coast },
  { name: "Visakhapatnam", image: IMAGES.city },
  { name: "Alluri Sitharama Raju", image: IMAGES.forest },
  { name: "Kakinada", image: IMAGES.coast },
  { name: "East Godavari", image: IMAGES.hero },
  { name: "Krishna", image: IMAGES.farm },
  { name: "Guntur", image: IMAGES.avenue },
  { name: "Prakasam", image: IMAGES.restore },
  { name: "Nandyal", image: IMAGES.forest },
  { name: "Kurnool", image: IMAGES.restore },
  { name: "Anantapur", image: IMAGES.nursery },
  { name: "Tirupati", image: IMAGES.forest },
];
