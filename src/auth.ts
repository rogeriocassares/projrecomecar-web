import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import type { Provider } from "next-auth/providers";
import { NextRequest, NextResponse } from "next/server";
import { locales, getPathnameLocale, getHeaderLocale } from "./locale";


// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

const providers: Provider[] = [
  Google,
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    authorized({ auth, request: { nextUrl, headers } }) {
     
      var locale = ""
      const { pathname } = nextUrl;

      const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
      );
      if (pathnameHasLocale) {
        console.log(`auth.ts pathnameHasLocale: ${pathnameHasLocale}`);
        locale = getPathnameLocale(pathname)
      } else {
        // Redirect if there is no locale
        locale = getHeaderLocale(headers);
        // nextUrl.pathname = `/${locale}${pathname}`;
        // return NextResponse.redirect(nextUrl);
      }

      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`);

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true; // Enter in Dashboard
        } else {
          return false; // Redirect unauthenticated users to login page // ok
        }
      } else if (isLoggedIn) {
        return true;
      }
      return true;
    },
  },

  providers,
  pages: {
    signIn: `/login`,
  },
});
