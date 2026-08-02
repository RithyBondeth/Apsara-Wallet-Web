"use client";

import { LucideRotateCcw } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  /* --------------------------------- Effects -------------------------------- */
  useEffect(() => {
    // No error-reporting service is wired up on the marketing site yet, so the
    // console is the only sink. Replace with Sentry if that changes.
    console.error(error);
  }, [error]);

  /* -------------------------------- Render UI ------------------------------- */
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6">
      <div className="text-center">
        <TypographyH2 className="text-emerald-deep">
          Something went wrong
        </TypographyH2>
        <TypographyMuted className="mx-auto mt-3 max-w-md">
          The page failed to load. Try again — if it keeps happening, let us
          know.
        </TypographyMuted>
        <Button type="button" onClick={reset} className="mt-8">
          <LucideRotateCcw />
          Try again
        </Button>
      </div>
    </main>
  );
}
