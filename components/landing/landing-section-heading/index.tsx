import { cn } from "@/lib/utils";
import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import type { ILandingSectionHeadingProps } from "@/components/landing/landing-section-heading/props";

export default function LandingSectionHeading({
  badge,
  heading,
  description,
  className,
  align = "left",
  tone = "light",
}: ILandingSectionHeadingProps) {
  /* ---------------------------------- Utils --------------------------------- */
  const isDark = tone === "dark";

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      {/* Badge Section */}
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide",
          isDark
            ? "border-white/15 bg-white/5 text-gold-light"
            : "border-primary/15 bg-primary/5 text-primary",
        )}
      >
        <span className="size-1.5 rounded-full bg-gold-core" />
        {badge}
      </span>

      {/* Heading Section */}
      <TypographyH2
        className={cn(
          "mt-6 text-balance text-3xl font-bold !leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-emerald-deep",
        )}
      >
        {heading}
      </TypographyH2>

      {/* Description Section */}
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/65" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
