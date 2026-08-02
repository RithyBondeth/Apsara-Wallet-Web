import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";

/* ------------------------------ Max Width Variants ----------------------------- */
// Mirrors the mobile breakpoints used across the Apsara product family so the
// marketing site and the app agree on what "phone" and "tablet" mean.
const maxWidthVariants = {
  "phone-sm": "260px",
  "phone-md": "300px",
  "phone-lg": "360px",
  "phone-xl": "480px",
  "tablet-sm": "565px",
  "tablet-md": "650px",
  "tablet-lg": "865px",
  "tablet-xl": "1050px",
  "laptop-sm": "1280px",
} as const;

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // ── Brand scales ported from the mobile design system ──────────
        emerald: {
          deep: "hsl(var(--brand-emerald-deep))",
          core: "hsl(var(--brand-emerald-core))",
          glow: "hsl(var(--brand-emerald-glow))",
        },
        gold: {
          light: "hsl(var(--brand-gold-light))",
          core: "hsl(var(--brand-gold-core))",
          deep: "hsl(var(--brand-gold-deep))",
        },
        finance: {
          income: "hsl(var(--finance-income))",
          expense: "hsl(var(--finance-expense))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "marquee-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "coin-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(6deg)" },
        },
        "shine-sweep": {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        "marquee-scroll": "marquee-scroll 32s linear infinite",
        "coin-float": "coin-float 6s ease-in-out infinite",
        "shine-sweep": "shine-sweep 6s linear infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(({ addVariant }) => {
      Object.entries(maxWidthVariants).forEach(([name, width]) => {
        addVariant(name, `@media (max-width: ${width})`);
      });
    }),
  ],
} satisfies Config;
