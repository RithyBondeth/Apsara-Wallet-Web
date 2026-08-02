"use client";

import { LucideFileText } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  StaticBullet,
  StaticPageShell,
  StaticSection,
} from "@/components/static-content/static-page";
import { useLanguageStore } from "@/stores/languages/language-store";
import type { ILegalDocumentViewProps } from "@/components/static-content/legal-document/props";

/**
 * Renders a bilingual legal document. Privacy and Terms share this view — only
 * their source constant, page number and icon map differ.
 */
export default function LegalDocumentView({
  document,
  pageNumber,
  icons,
}: ILegalDocumentViewProps) {
  /* ---------------------------------- Utils --------------------------------- */
  const tCommon = useTranslations("common");

  /* ------------------------------- Store State ------------------------------ */
  const language = useLanguageStore((state) => state.language);

  /* ---------------------------------- Utils --------------------------------- */
  const active = document[language];

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <StaticPageShell
      pageNumber={pageNumber}
      title={active.pageTitle}
      subtitle={active.intro}
      meta={active.lastUpdated}
      tocHeading={tCommon("contents")}
      toc={active.sections.map((section) => ({
        id: section.id,
        label: section.title,
      }))}
    >
      {active.sections.map((section, index) => {
        const Icon = icons[section.id] ?? LucideFileText;

        return (
          <StaticSection
            key={section.id}
            id={section.id}
            number={String(index + 1).padStart(2, "0")}
            icon={<Icon className="size-5" strokeWidth={1.75} />}
            title={section.title}
          >
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.bullets ? (
              <ul className="flex flex-col gap-3">
                {section.bullets.map((bullet) => (
                  <StaticBullet key={bullet}>{bullet}</StaticBullet>
                ))}
              </ul>
            ) : null}
          </StaticSection>
        );
      })}
    </StaticPageShell>
  );
}
