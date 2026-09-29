"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Wraps the app in a Lenis instance bound to the window (root mode), so native
 * scroll APIs, `useScroll` from Motion and Next.js route scroll-restoration all
 * keep working while wheel/touch scrolling is smoothed.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.3,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
        anchors: { offset: -96 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
