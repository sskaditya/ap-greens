import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "AP-GREEN — Government of Andhra Pradesh",
    template: "%s · AP-GREEN",
  },
  description:
    "AP-GREEN (Andhra Pradesh Society for Greening and Reforestation for Ecological Enrichment) is the state body expanding Andhra Pradesh's forest and tree cover to 33% by 2030 and 50% by 2047 through farm forestry, agro-forestry, avenue plantations, land restoration and a statewide nursery network.",
  keywords: ["AP-GREEN", "Andhra Pradesh", "greening", "reforestation", "tree cover", "farm forestry", "agro-forestry", "Viksit Andhra Pradesh 2047"],
  openGraph: {
    title: "AP-GREEN — Growing a greener Andhra Pradesh",
    description: "Raising the state's forest and tree cover from 22.96% to 50% by 2047.",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
