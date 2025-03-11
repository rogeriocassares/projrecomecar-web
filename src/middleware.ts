import { auth } from "@/auth"
import { MiddlewareConfig, NextResponse } from "next/server";
import { locales, getPathnameLocale, getHeaderLocale } from "./locale";


export default auth(({ auth, nextUrl, headers }) => {
  
  var locale = ""
  const { pathname } = nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) {
    console.log(`pathnameHasLocale: ${pathnameHasLocale}`);
    locale = getPathnameLocale(pathname)
  } else {
    // Redirect if there is no locale
    locale = getHeaderLocale(headers);
    nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(nextUrl);
  }

  // IF NOT AUTH, AND TRY DASHBOARD, ACCESS LOGIN
  if (!auth && nextUrl.pathname.startsWith(`/${locale}/dashboard`)) {
    const newUrl = new URL(`/${locale}/login`, nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (auth && nextUrl.pathname.startsWith(`/${locale}/login`)) {
    const newUrl = new URL(`/${locale}/dashboard`, nextUrl.origin)
    return Response.redirect(newUrl)
  }
})


export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|images|public|favicon.ico|assets).*)",
  ],
};
