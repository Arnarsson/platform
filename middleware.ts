import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from 'next-intl/middleware';

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

export default clerkMiddleware((auth, req) => {
  // Handle Clerk auth for protected routes
  if (isProtectedRoute(req)) {
    auth().protect();
  }
  
  // Handle internationalization
  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};