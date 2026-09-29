import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { SECTORS } from "@/lib/data";

const sector = SECTORS["farm-forestry"];

export const metadata: Metadata = {
  title: sector.title,
  description: sector.tagline,
};

export default function Page() {
  return <SectorPage sector={sector} />;
}
