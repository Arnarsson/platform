import { test, expect } from "@playwright/test";

test("landing renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("HARKA")).toBeVisible();
  await expect(page.getByText(/Learn|Lær/)).toBeVisible();
});

