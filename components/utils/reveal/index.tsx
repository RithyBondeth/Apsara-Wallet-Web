"use client";

import { useEffect, useRef, useState } from "react";

import type { IRevealProps, TRevealState } from "@/components/utils/reveal/props";

/**
 * Fades its `.reveal-item` descendants up as the block scrolls into view.
 * Stagger them by setting `--reveal-index` on each item. The styles live in
 * globals.css under "SCROLL REVEAL".
 */
export default function Reveal({ className, children }: IRevealProps) {
  /* -------------------------------- All States ------------------------------ */
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<TRevealState>("idle");

  /* --------------------------------- Effects -------------------------------- */
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only hide what the reader cannot see yet. Anything already on screen at
    // hydration stays as the server rendered it, so nothing blinks out and back.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("shown");
        observer.disconnect();
      },
      // Starts just after the block enters, so it is already moving by the
      // time the reader looks at it — a later trigger left empty space.
      { rootMargin: "0px 0px -4% 0px" },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div ref={ref} data-reveal={state} className={className}>
      {children}
    </div>
  );
}
