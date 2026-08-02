import type { IStructuredDataProps } from "@/components/utils/structured-data/props";

/**
 * Emits a schema.org JSON-LD block. Rendered on the server so crawlers see it
 * in the initial HTML rather than after hydration.
 */
export default function StructuredData({ data }: IStructuredDataProps) {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <script
      type="application/ld+json"
      // The payload comes from our own constants and catalogs, but those are
      // marketing copy that non-engineers edit. Escaping `<` keeps a stray
      // "</script>" in a translation from closing this tag early; it stays
      // valid JSON, so consumers are unaffected.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
