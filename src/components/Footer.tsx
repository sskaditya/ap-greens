import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, ORG } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-forest-950">
      <div className="container-x py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-full bg-white/95">
                <Image
                  src="/images/ap-emblem.png"
                  alt="Government of Andhra Pradesh emblem"
                  width={52}
                  height={57}
                  className="size-12 object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-display text-2xl font-semibold text-white">
                  AP<span className="text-leaf-300">-GREEN</span>
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                  {ORG.parent}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              {ORG.full}. Expanding the state&apos;s forest and tree cover to {ORG.interimTarget.value}% by{" "}
              {ORG.interimTarget.year} and {ORG.finalTarget.value}% by {ORG.finalTarget.year} as part of{" "}
              {ORG.vision}.
            </p>
            <div className="mt-6 space-y-1 text-xs text-white/40">
              <p>
                {ORG.councilChairman.honorific} {ORG.councilChairman.name} · {ORG.councilChairman.role}
              </p>
              <p>
                {ORG.chairman.name} ({ORG.chairman.alias}) · {ORG.chairman.role}
              </p>
              <Link href="/leadership" className="inline-block pt-1 text-leaf-300/80 transition hover:text-leaf-300">
                Leadership &amp; governance →
              </Link>
            </div>
          </div>

          <div>
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.slice(0, 5).map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-white/70 transition hover:text-leaf-300">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">Programmes</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.slice(5).map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-white/70 transition hover:text-leaf-300">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">Reach us</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>AP-GREEN Secretariat, Amaravati</li>
              <li>Citizen services: 1902</li>
              <li>Forest emergency: 1800-425-4551</li>
              <li>
                <a href="mailto:info@apgreen.ap.gov.in" className="transition hover:text-leaf-300">
                  info@apgreen.ap.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {ORG.short} · {ORG.parent}. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/contact" className="hover:text-white/70">Accessibility</Link>
            <Link href="/contact" className="hover:text-white/70">Privacy</Link>
            <Link href="/contact" className="hover:text-white/70">RTI</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
