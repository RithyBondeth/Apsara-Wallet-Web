import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";

import StaticPageSkeleton from "@/components/static-content/static-page-skeleton";
import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { ResetPasswordContent } from "./_content";

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  return {
    title: language === "km" ? "កំណត់ពាក្យសម្ងាត់ឡើងវិញ" : "Reset your password",
    description:
      language === "km"
        ? "បើកតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញរបស់អ្នកនៅក្នុងកម្មវិធី Apsara Wallet។"
        : "Open your password-reset link in the Apsara Wallet app.",
    alternates: { canonical: "/reset-password" },
    // A per-user link with a one-time token: never worth indexing.
    robots: { index: false, follow: false },
  };
}

export default function ResetPasswordPage() {
  // The content reads `?token=` on the client, which needs a Suspense boundary.
  return (
    <Suspense fallback={<StaticPageSkeleton />}>
      <ResetPasswordContent />
    </Suspense>
  );
}
