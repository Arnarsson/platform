import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import type { NextRequest } from 'next/server';

// Toggle to enforce role checks in middleware as well (default off for DX)
const STRICT_ROLE_CHECK_IN_MIDDLEWARE = false;

// Create i18n middleware
const handleI18n = createMiddleware({
  ...routing,
  localeDetection: true
});

// Protected routes with localized patterns
const isProtectedRoute = createRouteMatcher([
  "/(en|da)/learn(.*)",
  "/(en|da)/laer(.*)", 
  "/(en|da)/profile(.*)",
  "/(en|da)/profil(.*)",
  "/(en|da)/admin(.*)",
  "/(en|da)/teach(.*)",
  "/(en|da)/undervis(.*)",
  "/(en|da)/teacher-access(.*)",
  "/(en|da)/laerer-adgang(.*)",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // Handle auth for protected routes first
  const { userId, sessionId } = await auth();
  const url = req.nextUrl.pathname;
  const protectedHit = isProtectedRoute(req);
  
  if (protectedHit && !userId) {
    console.log("[MW] block unauthenticated", { url, protectedHit, userId, sessionId });
    await auth().protect();
  }

  // Optional example for strict role guards at the edge.
  if (STRICT_ROLE_CHECK_IN_MIDDLEWARE && userId) {
    const res = await fetch(new URL("/api/__role", req.url));
    const { role } = (await res.json()) as { role: string | null };
    
    // Check for admin routes (both EN and DA paths)
    if ((url.includes("/admin") || url.includes("/admin")) && role !== "admin") {
      const locale = url.startsWith('/da') ? 'da' : 'en';
      const profilePath = locale === 'da' ? '/da/profil' : '/en/profile';
      return Response.redirect(new URL(profilePath, req.url));
    }
    
    // Check for teacher routes (both EN and DA paths)  
    if ((url.includes("/teach") || url.includes("/undervis") || url.includes("/teacher-access") || url.includes("/laerer-adgang")) 
        && !["teacher", "admin"].includes(String(role))) {
      const locale = url.startsWith('/da') ? 'da' : 'en';
      const profilePath = locale === 'da' ? '/da/profil' : '/en/profile';
      return Response.redirect(new URL(profilePath, req.url));
    }
  }

  // Handle i18n routing after auth checks
  const i18nResponse = handleI18n(req);
  if (i18nResponse) {
    return i18nResponse;
  }
});

export const config = {
  matcher: [
    // Skip static files, APIs, and other Next.js internals
    '/((?!_next|api|.*\\..*|opengraph-image|sitemap\\.xml|robots\\.txt).*)'
  ],
};

