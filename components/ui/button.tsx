import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* --------------------------------- Variants -------------------------------- */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-emerald-core/20 hover:bg-emerald-glow",
        gold: "bg-accent text-accent-foreground shadow-lg shadow-gold-core/25 hover:bg-gold-light",
        outline:
          "border border-primary/25 bg-transparent text-primary hover:bg-primary/5",
        ghost: "text-foreground hover:bg-muted",
        // For use on the emerald panel, where the default border is invisible.
        inverted:
          "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 [&_svg]:size-4",
        sm: "h-9 px-4 text-xs [&_svg]:size-3.5",
        lg: "h-12 px-8 text-base [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
