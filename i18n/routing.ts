import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["cs", "en"],
  defaultLocale: "cs",
  localePrefix: "as-needed",
});

export const locales = routing.locales;
export type Locale = (typeof locales)[number];
export const defaultLocale = routing.defaultLocale;
