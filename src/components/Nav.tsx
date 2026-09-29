"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_ITEMS } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./Icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="container-x pt-4 sm:pt-5">
          <div
            className={`pointer-events-auto flex items-center justify-between gap-3 rounded-full px-3 py-2 transition-all duration-500 ${
              scrolled ? "glass-dark shadow-glass" : "bg-transparent"
            }`}
          >
            <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5 pl-1.5 pr-3">
              <span className="grid size-11 place-items-center rounded-full bg-white/95 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/ap-emblem.png"
                  alt="Government of Andhra Pradesh emblem"
                  width={40}
                  height={44}
                  priority
                  className="size-9 object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-display text-[1.3rem] font-semibold tracking-tight text-white">
                  AP<span className="text-leaf-300">-GREEN</span>
                </span>
                <span className="mt-0.5 hidden text-[9.5px] font-medium uppercase tracking-[0.16em] text-white/60 sm:block">
                  Government of Andhra Pradesh
                </span>
              </span>
            </Link>

            {/* Desktop tabs */}
            <nav
              aria-label="Primary"
              className="glass hidden items-center gap-0.5 rounded-full p-1 xl:flex"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      active ? "text-forest-950" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.6)]"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="glass hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:inline-flex"
              >
                Contact
              </Link>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="glass grid size-11 place-items-center rounded-full text-white transition hover:bg-white/20 xl:hidden"
              >
                {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-forest-950/70 backdrop-blur-2xl" onClick={() => setOpen(false)} />
            <motion.nav
              aria-label="Mobile"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="container-x relative flex h-full flex-col justify-center pt-24 pb-12"
            >
              <ul className="grid gap-1 sm:grid-cols-2">
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-baseline gap-4 rounded-2xl px-4 py-3 transition hover:bg-white/8 ${
                          active ? "bg-white/10" : ""
                        }`}
                      >
                        <span className="text-xs font-semibold tabular-nums text-leaf-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-display text-3xl font-medium text-white sm:text-4xl">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <p className="mt-10 text-sm text-white/50">
                Andhra Pradesh Society for Greening and Reforestation for Ecological Enrichment · Government of Andhra Pradesh
              </p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
