export type Locale = "de" | "en";

export const locales: Record<Locale, { label: string; pathPrefix: string }> = {
  de: { label: "DE", pathPrefix: "/" },
  en: { label: "EN", pathPrefix: "/en/" },
};

export const defaultLocale: Locale = "de";
