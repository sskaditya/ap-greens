import Image from "next/image";

type Props = {
  name: string;
  initials: string;
  photo?: string;
  size?: "sm" | "lg";
  tone?: "leaf" | "white";
  /** CSS object-position for the crop, e.g. "50% 25%". */
  focus?: string;
};

/** Portrait when a photo exists, otherwise a monogram tile. */
export default function LeaderAvatar({ name, initials, photo, size = "lg", tone = "leaf", focus = "50% 28%" }: Props) {
  const dims = size === "lg" ? "size-28 sm:size-32 rounded-3xl" : "size-16 rounded-2xl";
  const text = size === "lg" ? "text-3xl" : "text-xl";
  const bg = tone === "leaf" ? "bg-leaf-400 text-forest-950 shadow-glow" : "bg-white text-forest-950";

  if (photo) {
    return (
      <span className={`relative block shrink-0 overflow-hidden border border-white/20 ${dims}`}>
        <Image
          src={photo}
          alt={`Portrait of ${name}`}
          fill
          sizes={size === "lg" ? "128px" : "64px"}
          className="object-cover"
          style={{ objectPosition: focus }}
        />
      </span>
    );
  }

  return (
    <span className={`grid shrink-0 place-items-center ${dims} ${bg}`} aria-label={name}>
      <span className={`text-display font-semibold ${text}`}>{initials}</span>
    </span>
  );
}
