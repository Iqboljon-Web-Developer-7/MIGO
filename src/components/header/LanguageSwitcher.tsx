"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const changeLanguage = (newLocale: string) => {
    // Remove the current locale prefix (e.g., "/en" or "/uz") from pathname
    const currentLocalePrefix = `/${locale}`;
    const basePath = pathname.startsWith(currentLocalePrefix)
      ? pathname.slice(currentLocalePrefix.length) || "/"
      : pathname;

    // Construct new path with the new locale
    const newPath = `/${newLocale}${basePath}`;

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-background border border-input rounded-md py-2 pl-10 pr-4 text-sm font-medium text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="uz">O'zbek</option>
        <option value="ru">Русский</option>
      </select>
      <Image
        src={`https://flagicons.lipis.dev/flags/4x3/${locale === "en" ? "us" : locale}.svg`}
        alt={`${locale} flag`}
        width={20}
        height={15}
        className="absolute left-2 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}