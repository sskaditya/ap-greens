"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "./Icons";

const DISTRICTS = [
  "Alluri Sitharama Raju", "Anakapalli", "Anantapur", "Annamayya", "Bapatla", "Chittoor", "East Godavari",
  "Eluru", "Guntur", "Kakinada", "Konaseema", "Krishna", "Kurnool", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam",
  "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam",
  "Vizianagaram", "West Godavari", "YSR Kadapa",
];

const ROLES = ["Farmer / landowner", "Resident / RWA", "Student / volunteer", "Self-help group", "Institution / company", "Other"];

const input =
  "w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-leaf-400/70 focus:bg-white/12";

/** Client-side only; wire `onSubmit` to a route handler or form service when a backend exists. */
export default function PledgeForm({ variant = "pledge" }: { variant?: "pledge" | "contact" }) {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="glass rounded-[2rem] p-8 sm:p-10">
        <div className="flex items-start gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-leaf-400 text-forest-950">
            <CheckIcon className="size-5" strokeWidth={2.4} />
          </span>
          <div>
            <h3 className="text-display text-2xl font-medium text-white">
              {variant === "pledge" ? "Pledge received." : "Message received."}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {variant === "pledge"
                ? "Thank you for joining the movement. Your District Green Development Agency will be in touch before the next plantation window."
                : "Thank you for writing to AP-GREEN. We aim to respond within seven working days."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input required name="name" placeholder="Full name" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Mobile number</span>
          <input required name="phone" type="tel" inputMode="tel" placeholder="Mobile number" className={input} />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Email</span>
          <input name="email" type="email" placeholder="Email (optional)" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">District</span>
          <select required name="district" defaultValue="" className={`${input} appearance-none`}>
            <option value="" disabled>
              Select district
            </option>
            {DISTRICTS.map((d) => (
              <option key={d} value={d} className="bg-forest-900">
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">{variant === "pledge" ? "I am a" : "Subject"}</span>
          {variant === "pledge" ? (
            <select required name="role" defaultValue="" className={`${input} appearance-none`}>
              <option value="" disabled>
                I am a…
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r} className="bg-forest-900">
                  {r}
                </option>
              ))}
            </select>
          ) : (
            <input required name="subject" placeholder="Subject" className={input} />
          )}
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder={variant === "pledge" ? "How would you like to contribute? (optional)" : "Your message"}
            required={variant === "contact"}
            className={`${input} resize-none`}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-2xl bg-leaf-400 px-4 py-3.5 text-sm font-semibold text-forest-950 shadow-glow transition hover:bg-leaf-300"
      >
        {variant === "pledge" ? "Take the pledge" : "Send message"}
      </button>
      <p className="mt-3 text-[11px] leading-relaxed text-white/45">
        Your details are used only to contact you about AP-GREEN programmes in your district.
      </p>
    </form>
  );
}
