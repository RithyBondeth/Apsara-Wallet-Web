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
      // The payload is built from our own constants and message catalogs, never
      // from user input, so there is nothing here to escape.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
