import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LANGUAGE_COOKIE, resolveLanguage } from "@/utils/types/app/language.type";

import { DeleteAccountContent } from "./_content";

export async function generateMetadata(): Promise<Metadata> {
  const language = resolveLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value);

  return {
    title: language === "km" ? "លុបគណនី" : "Delete your account",
    description:
      language === "km"
        ? "របៀបលុបគណនី Apsara Wallet របស់អ្នក និងទិន្នន័យរបស់វា — ពីក្នុងកម្មវិធី ឬតាមការស្នើសុំជាអ៊ីមែល។"
        : "How to delete your Apsara Wallet account and its data — from inside the app, or by email request.",
    alternates: { canonical: "/delete-account" },
  };
}

export default function DeleteAccountPage() {
  return <DeleteAccountContent />;
}
