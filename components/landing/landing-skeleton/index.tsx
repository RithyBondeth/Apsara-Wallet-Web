/**
 * Route-level fallback for the home page. Mirrors the hero's split layout —
 * copy on the left, emerald showcase panel on the right — so the page does not
 * jump when the real sections stream in.
 */
export default function LandingSkeleton() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div className="min-h-screen bg-background pt-[72px]" aria-busy>
      {/* Hero Skeleton Section */}
      <div className="grid border-b border-border lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy Column */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="h-3 w-36 animate-pulse rounded bg-muted" />
          <div className="mt-7 h-12 w-3/4 animate-pulse rounded bg-muted" />
          <div className="mt-3 h-12 w-2/3 animate-pulse rounded bg-muted" />
          <div className="mt-7 h-4 w-full animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-11/12 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-muted" />

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-full animate-pulse rounded-full bg-muted sm:w-44" />
            <div className="h-12 w-full animate-pulse rounded-full bg-muted sm:w-44" />
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-7">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <div className="h-3 w-20 animate-pulse rounded bg-muted" />
                <div className="mt-2 h-4 w-24 animate-pulse rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>

        {/* Showcase Column */}
        <div className="brand-emerald-surface flex items-center justify-center border-t border-border px-6 py-16 sm:px-10 lg:border-l lg:border-t-0 lg:py-24">
          <div className="h-[420px] w-full max-w-[320px] animate-pulse rounded-[2.5rem] bg-white/10" />
        </div>
      </div>

      {/* Feature Ribbon Skeleton Section */}
      <div className="h-[53px] border-b border-border bg-emerald-deep" />

      {/* Feature Grid Skeleton Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-9 w-2/3 animate-pulse rounded bg-muted" />
        <div className="mt-5 h-4 w-1/2 animate-pulse rounded bg-muted" />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-4 bg-card p-7">
              <div className="size-11 animate-pulse rounded-xl bg-muted" />
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-3.5 w-full animate-pulse rounded bg-muted" />
              <div className="h-3.5 w-5/6 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
