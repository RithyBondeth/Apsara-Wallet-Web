/**
 * Route-level fallback for the long-form pages. Mirrors the real layout's
 * proportions (hero block, then a two-column body) so the page does not jump
 * when the content streams in.
 */
export default function StaticPageSkeleton() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div className="min-h-screen bg-background pt-[72px]" aria-busy>
      {/* Hero Skeleton Section */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10 lg:py-20">
          <div className="h-4 w-28 animate-pulse rounded bg-muted" />
          <div className="mt-8 h-3 w-40 animate-pulse rounded bg-muted" />
          <div className="mt-6 h-10 w-3/4 animate-pulse rounded bg-muted" />
          <div className="mt-5 h-4 w-full animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-muted" />
        </div>
      </div>

      {/* Body Skeleton Section */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[240px_1fr] lg:py-20">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-3.5 w-full animate-pulse rounded bg-muted"
            />
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="size-10 animate-pulse rounded-xl bg-muted" />
              <div className="h-6 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
