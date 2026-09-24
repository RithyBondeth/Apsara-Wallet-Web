import { cn } from "@/lib/utils";
import type { IBrandWavesProps } from "@/components/utils/brand-waves/props";

/* --------------------------------- Constants -------------------------------- */
// Flowing contour lines in the spirit of the waves in the app's dashboard
// backdrop. Drawn as vectors on purpose: that backdrop is a small, compressed
// portrait photo that turns visibly soft when stretched across a wide hero or
// a high-density screen — the owner flagged exactly that.
const LINES = Array.from({ length: 16 }, (_, index) => {
  const y = 150 + index * 15;
  const lift = 64 + index * 5;
  return {
    d: `M-80 ${y} C 280 ${y - lift}, 620 ${y + lift}, 940 ${y - lift * 0.35} S 1360 ${y + lift * 0.55}, 1540 ${y - 24}`,
    // A few brighter strands among fainter ones, so the set reads as mist.
    opacity: 0.06 + (index % 4) * 0.04,
  };
});

export default function BrandWaves({ className }: IBrandWavesProps) {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 420"
      // Never stretched: the lines keep their shape and the sides are cropped,
      // so a narrow screen shows calm waves rather than a squeezed contour map.
      preserveAspectRatio="xMidYMax slice"
      className={cn("brand-fade-in-top pointer-events-none text-emerald-glow", className)}
    >
      {LINES.map((line) => (
        <path
          key={line.d}
          d={line.d}
          fill="none"
          stroke="currentColor"
          strokeOpacity={line.opacity}
          strokeWidth={1.25}
          // Keeps every line a crisp hairline however far the box stretches.
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
