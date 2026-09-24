"use client";

import { LucideLanguages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/stores/languages/language-store";
import type { ILanguageToggleProps } from "@/components/utils/languages/props";

export function LanguageToggle({ className, variant = "ghost" }: ILanguageToggleProps) {
  /* ------------------------------- Store State ------------------------------ */
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <Button
      type="button"
      variant={variant}
      size="sm"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Khmer" : "ប្ដូរទៅភាសាអង់គ្លេស"}
      className={cn("gap-2 font-semibold uppercase tracking-wide", className)}
    >
      <LucideLanguages />
      {/* Names the other language, so it is tagged with that language —
          otherwise the Khmer label on English pages gets Latin tracking. */}
      <span lang={language === "en" ? "km" : "en"}>
        {language === "en" ? "ខ្មែរ" : "EN"}
      </span>
    </Button>
  );
}
