import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'da'],
  defaultLocale: 'en'
});

const isProtectedRoute = createRouteMatcher([
  "/(en|da)/learn(.*)",
  "/(en|da)/profile(.*)",
  "/(en|da)/admin(.*)",
  "/(en|da)/teach(.*)",
]);

export default function middleware(req: NextRequest) {
  // Skip Clerk completely during testing and just use i18n
  if (process.env.NODE_ENV === 'test' || process.env.PLAYWRIGHT_TEST === 'true') {
    return intlMiddleware(req);
  }

  // Use Clerk middleware in production
  return clerkMiddleware((auth, req) => {
    // Handle Clerk auth for protected routes
    if (isProtectedRoute(req)) {
      auth().protect();
    }
    
    // Handle internationalization
    return intlMiddleware(req);
  })(req);
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};