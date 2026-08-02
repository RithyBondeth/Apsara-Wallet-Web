import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/utils/typography/typography-h2";
import { TypographyMuted } from "@/components/utils/typography/typography-muted";
import { ROUTES } from "@/utils/constants/site.constant";

export default function NotFoundPage() {
  /* -------------------------------- Render UI ------------------------------- */
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6">
      <div className="text-center">
        <p className="brand-gold-foil text-6xl font-extrabold tabular-nums">
          404
        </p>
        <TypographyH2 className="mt-4 text-emerald-deep">
          Page not found
        </TypographyH2>
        <TypographyMuted className="mx-auto mt-3 max-w-md">
          The page you were looking for does not exist, or it has moved.
        </TypographyMuted>
        <Button asChild className="mt-8">
          <Link href={ROUTES.home}>
            <LucideArrowLeft />
            Back to home
          </Link>
        </Button>
      </div>
    </main>
  );
}
