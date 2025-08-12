import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Toggle to enforce role checks in middleware as well (default off for DX)
const STRICT_ROLE_CHECK_IN_MIDDLEWARE = false;

const isProtectedRoute = createRouteMatcher([
  "/learn(.*)",
  "/profile(.*)",
  "/admin(.*)",
  "/teach(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
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
    if (url.startsWith("/admin") && role !== "admin") return Response.redirect(new URL("/profile", req.url));
    if (url.startsWith("/teach") && !["teacher", "admin"].includes(String(role)))
      return Response.redirect(new URL("/profile", req.url));
  }
});

export const config = {
  matcher: [
    // Skip static files and APIs you don't need to protect
    "/((?!.+\.[\w]+$|_next).*)",
    "/(api|trpc)(.*)",
  ],
};

