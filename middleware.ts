import createIntlMiddleware from "next-intl/middleware";

import { routing } from "@/i18n";

export default createIntlMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(cs|en)",
    "/(cs|en)/:path*",

    // Skip all internal paths (e.g. _next)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
