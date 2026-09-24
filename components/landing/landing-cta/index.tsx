"use client";

import { LucideArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import LandingPhoneMockup from "@/components/landing/landing-phone-mockup";
import LandingStoreButtons from "@/components/landing/landing-store-buttons";
import Reveal from "@/components/utils/reveal";
import { ROUTES } from "@/utils/constants/site.constant";

export default function LandingCta() {
  /* ---------------------------------- Utils --------------------------------- */
  const t = useTranslations("cta");

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <section id="download" className="scroll-mt-[72px] bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-10 lg:px-14 lg:pb-32">
        <Reveal>
          <div className="reveal-item brand-emerald-surface relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-emerald-deep/25">
            {/* Background Section */}
            <div className="brand-glow-gold pointer-events-none absolute -right-24 -top-24 size-[32rem]" />

            <div className="relative grid items-center lg:grid-cols-[1.1fr_0.9fr]">
              {/* Copy Section */}
              <div className="flex flex-col items-center px-6 py-16 text-center sm:px-12 lg:items-start lg:py-20 lg:pl-16 lg:pr-0 lg:text-left">
                <Image
                  src="/logo.png"
                  alt=""
                  width={80}
                  height={80}
                  className="size-16 drop-shadow-xl sm:size-20"
                />

                <h2 className="mt-7 max-w-xl text-balance text-4xl font-bold tracking-[-0.03em] text-white !leading-[1.1] sm:text-5xl">
                  {t("heading")}
                </h2>
                <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  {t("description")}
                </p>

                {/* Store Buttons Section */}
                {/* Frosted rather than gold: a disabled gold badge turns olive
                    on emerald, and the listings are not live yet. */}
                <LandingStoreButtons
                  variant="inverted"
                  className="mt-9 w-full justify-center sm:w-auto lg:justify-start"
                />

                {/* Secondary Action Section */}
                <div className="mt-7 flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-4 lg:items-start">
                  <Link
                    href={ROUTES.privacy}
                    className="inline-flex items-center gap-1.5 font-semibold text-gold-light underline-offset-4 hover:underline"
                  >
                    {t("secondary")}
                    <LucideArrowUpRight className="size-4" />
                  </Link>
                  <span className="hidden text-white/25 sm:inline">·</span>
                  <span className="text-white/55">{t("note")}</span>
                </div>
              </div>

              {/* Device Peek Section */}
              {/* The phone runs off the bottom edge of the panel on purpose — it
                  reads as the app rising out of the card. */}
              <div className="relative hidden h-full min-h-[30rem] lg:block">
                <div className="absolute left-1/2 top-16 w-[290px] -translate-x-1/2 rotate-[4deg]">
                  <LandingPhoneMockup />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
