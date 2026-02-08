import { strings as de } from "./de";
import { strings as en } from "./en";
import type { Locale } from "./locales";

export type Strings = typeof en;

const byLocale: Record<Locale, Strings> = {
  de,
  en,
};

export const getStrings = (locale: Locale): Strings => byLocale[locale] ?? de;
