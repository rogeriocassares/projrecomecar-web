import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export const locales = ["en-US", "pt-BR", "es-ES", "ar-IQ"];

export function getHeaderLocale(headers: Headers) {
  // const headers = new Headers(request.headers);
  const defaultLocale = "pt-BR";
  const preferredLocale = headers.get("Accept-Language");
  if (preferredLocale) {
    const preferredLocales = preferredLocale.replace(";", ",").split(",");
    for (const lang of preferredLocales) {
      if (lang.startsWith("q=")) continue;
      else if (locales.includes(lang)) {
        return lang;
      }
    }
  }
  return defaultLocale;
}

export function getPathnameLocale(pathname: string) {
  const locale = pathname.split("/").filter((c) => c !== "")
  console.log(`getPathnameLocale: ${locale[0]}`);

  return locale[0];
}
