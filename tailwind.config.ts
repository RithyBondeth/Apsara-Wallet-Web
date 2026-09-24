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
          faint: "hsl(var(--muted-faint))",
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
          info: "hsl(var(--finance-info))",
          warning: "hsl(var(--finance-warning))",
        },
        ivory: "hsl(var(--brand-ivory))",
        wallet: {
          navy: "hsl(var(--wallet-navy))",
          sky: "hsl(var(--wallet-sky))",
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
        // Opacity is fully in by 40% while the rise carries on, so the stage
        // is never a long, ghostly half-fade.
        "hero-rise": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "40%": { opacity: "1" },
          "100%": { opacity: "1", transform: "none" },
        },
        "chip-in": {
          from: { opacity: "0", transform: "translateY(8px) scale(0.96)" },
          to: { opacity: "1", transform: "none" },
        },
        // Moves a full-height track, so the line inside it sweeps the whole
        // receipt without animating `top`.
        "scan-sweep": {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(100%)" },
        },
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "marquee-scroll": "marquee-scroll 48s linear infinite",
        "hero-rise": "hero-rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "chip-in": "chip-in 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "scan-sweep": "scan-sweep 2.6s ease-in-out infinite alternate",
        "caret-blink": "caret-blink 1.1s steps(1) infinite",
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
