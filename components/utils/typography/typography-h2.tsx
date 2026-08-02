import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const TypographyH2 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h2">
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
});

TypographyH2.displayName = "TypographyH2";
