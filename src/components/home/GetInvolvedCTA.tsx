"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { IMAGES } from "@/lib/data";
import { Reveal } from "../motion";
import { ArrowRight, CheckIcon } from "../Icons";

export default function GetInvolvedCTA() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section id="join" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12">
          <Image src={IMAGES.farm} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/30" />
          <div className="relative grid gap-12 p-8 sm:p-14 lg:grid-cols-[1.2fr_1fr] lg:p-20">
            <div>
              <Reveal className="eyebrow mb-5">Join the mission</Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-display text-[clamp(2.4rem,5.5vw,5rem)] font-medium text-white">
                  Plant a tree. <br />
                  Adopt an avenue. <br />
                  <span className="text-leaf-300">Green a state.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
                  Half of Andhra Pradesh under trees is not a government target — it is a people&apos;s
                  movement. Volunteer for a plantation drive, adopt saplings on your street, or
                  partner your school, SHG, temple or company with AP-GREEN.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-involved"
                  className="group inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
                >
                  Ways to get involved
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="glass-strong inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  Talk to us
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-display text-2xl font-medium text-white">Green Bulletin</h3>
              <p className="mt-2 text-sm text-white/70">
                A monthly note on what changed on the ground — no noise, just progress.
              </p>
              {done ? (
                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-leaf-400/15 p-4 text-sm text-leaf-200">
                  <span className="grid size-8 place-items-center rounded-full bg-leaf-400 text-forest-950">
                    <CheckIcon className="size-4" strokeWidth={2.4} />
                  </span>
                  You&apos;re on the list. Welcome to AP Green.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-3">
                  <label className="block">
                    <span className="sr-only">Full name</span>
                    <input
                      required
                      name="name"
                      placeholder="Full name"
                      className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-leaf-400/70 focus:bg-white/12"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-leaf-400/70 focus:bg-white/12"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-forest-950 transition hover:bg-leaf-300"
                  >
                    Subscribe
                  </button>
                  <p className="text-[11px] leading-relaxed text-white/45">
                    By subscribing you agree to receive updates from the Government of Andhra Pradesh. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
