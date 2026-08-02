"use client";

import Header from "@/components/header";
import LandingCta from "@/components/landing/landing-cta";
import LandingFeatures from "@/components/landing/landing-features";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHero from "@/components/landing/landing-hero";
import LandingHowItWorks from "@/components/landing/landing-how-it-works";
import LandingMarquee from "@/components/landing/landing-marquee";
import LandingSecurity from "@/components/landing/landing-security";

export function HomeContent() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <Header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl" />

      {/* Section 1: Hero */}
      <LandingHero />

      {/* Section 2: Feature Ribbon */}
      <LandingMarquee />

      {/* Section 3: Features */}
      <LandingFeatures />

      {/* Section 4: How It Works */}
      <LandingHowItWorks />

      {/* Section 5: Security & Privacy */}
      <LandingSecurity />

      {/* Section 6: Download CTA */}
      <LandingCta />

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
