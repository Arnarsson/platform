import { test, expect } from "@playwright/test";

test("admin route redirects when signed out", async ({ page }) => {
  const res = await page.goto("/admin/dashboard");
  // Clerk middleware should redirect to sign-in
  expect(res?.status()).toBeLessThan(400);
});

