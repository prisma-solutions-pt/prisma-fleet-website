import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["pt", "en"] as const;
export const defaultLocale = "pt" as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const locale: Locale =
    localeCookie && (locales as readonly string[]).includes(localeCookie)
      ? (localeCookie as Locale)
      : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
