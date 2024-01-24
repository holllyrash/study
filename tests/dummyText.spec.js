import { test, expect, chromium } from "@playwright/test";

test("Has title", async ({ page }) => {
  await page.goto("https://www.blindtextgenerator.com/lorem-ipsum");
  await expect(page.getByTitle("Home [H]")).toBeVisible();
});

test("Check Lorem ipsum option selected", async ({ page }) => {
  await page.goto("https://www.blindtextgenerator.com/lorem-ipsum");
  await expect(page.getByLabel("Lorem ipsum")).toBeChecked();
});
