/**
 * Route-level fallback for the home page. Mirrors the hero — copy on the left,
 * the phone on its emerald disc on the right — and the start of the bento grid,
 * so the page does not jump when the real sections stream in.
 */
export default function LandingSkeleton() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <div className="min-h-screen overflow-x-clip bg-background pt-[72px]" aria-busy>
      {/* Hero Skeleton Section */}
      <div className="relative">
        <div className="brand-aurora pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-14 lg:pb-28 lg:pt-16">
          {/* Copy Column */}
          <div className="flex flex-col">
            <div className="h-8 w-44 animate-pulse rounded-full bg-muted" />
            <div className="mt-7 h-14 w-3/4 animate-pulse rounded-xl bg-muted lg:h-16" />
            <div className="mt-3 h-14 w-2/3 animate-pulse rounded-xl bg-muted lg:h-16" />
            <div className="mt-8 h-4 w-full max-w-xl animate-pulse rounded bg-muted" />
            <div className="mt-2 h-4 w-11/12 max-w-xl animate-pulse rounded bg-muted" />
            <div className="mt-2 h-4 w-2/3 max-w-xl animate-pulse rounded bg-muted" />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <div className="h-14 w-full animate-pulse rounded-full bg-muted sm:w-48" />
              <div className="h-14 w-full animate-pulse rounded-full bg-muted sm:w-52" />
            </div>

            <div className="mt-12 h-[74px] w-full max-w-xl animate-pulse rounded-2xl bg-muted" />
          </div>

          {/* Showcase Column */}
          <div className="relative mx-auto flex w-full max-w-[540px] justify-center py-6">
            <div className="brand-emerald-surface absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 sm:size-[460px]" />
            <div className="relative h-[569px] w-[270px] animate-pulse rounded-[2.7rem] bg-foreground/90 sm:h-[611px] sm:w-[290px]" />
          </div>
        </div>
      </div>

      {/* Feature Ribbon Skeleton Section */}
      <div className="h-[60px] bg-emerald-deep" />

      {/* Bento Grid Skeleton Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="h-8 w-28 animate-pulse rounded-full bg-muted" />
        <div className="mt-6 h-11 w-2/3 animate-pulse rounded-xl bg-muted" />
        <div className="mt-5 h-4 w-1/2 animate-pulse rounded bg-muted" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <div className="h-[22rem] animate-pulse rounded-[1.75rem] bg-muted sm:col-span-2" />
          <div className="h-[22rem] animate-pulse rounded-[1.75rem] bg-muted lg:row-span-2 lg:h-auto" />
          <div className="h-[22rem] animate-pulse rounded-[1.75rem] bg-muted" />
          <div className="h-[22rem] animate-pulse rounded-[1.75rem] bg-muted" />
        </div>
      </div>
    </div>
  );
}
