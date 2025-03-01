"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

import { type Locale, usePathname, useRouter } from "@/i18n";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const reversedLocale = locale === "cs" ? "en" : "cs";

  const switchLanguage = () => {
    router.replace(pathname, { locale: reversedLocale });
  };

  return (
    <button type="button" onClick={switchLanguage} className="block px-3 py-4">
      <Image
        src={`/flag-${reversedLocale}.png`}
        alt={`flag-${reversedLocale}`}
        width={30}
        height={20}
      />
    </button>
  );
}
