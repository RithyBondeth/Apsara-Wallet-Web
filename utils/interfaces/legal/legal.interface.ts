import type { TLanguage } from "@/utils/types/app/language.type";

/** One heading plus its body copy inside a legal document. */
export interface ILegalSection {
  /** Anchor id — also the key used to look up the section's icon. */
  id: string;
  title: string;
  paragraphs: string[];
  /** Rendered as a gold-bulleted list beneath the paragraphs. */
  bullets?: string[];
}

/** A full legal document: a stamp, a lead paragraph and ordered sections. */
export interface ILegalDocument {
  pageTitle: string;
  lastUpdated: string;
  intro: string;
  sections: ILegalSection[];
}

/** Both language editions of the same document, keyed by language code. */
export type TLegalDocumentByLanguage = Record<TLanguage, ILegalDocument>;
