export interface IStructuredDataProps {
  /** A schema.org object graph. Serialised into the JSON-LD script tag. */
  data: Record<string, unknown>;
}
