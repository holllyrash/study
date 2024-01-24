import { test, expect, chromium } from "@playwright/test";

const website = "https://forbes.ua/";

test("Subscribe to the newsletter", async ({ page }) => {
  await page.goto(website);
  await page.locator("#subscriptionEmail").fill("test.test@test.test");
  await page.getByRole("button", { name: "Підписатися" }).click();
  await expect(page.getByText("Дякуємо за підписку")).toBeVisible();
});

test("Visit Ґроші page and verify title", async ({ page }) => {
  await page.goto(website);
  await page
    .locator(
      '.c-header-nav .c-header-nav__item a[href="https://forbes.ua/money"]'
    )
    .click();

  await page.waitForURL("**/money");
  await expect(page.locator(".c-feed-title.c-feed-title--lg")).toHaveText(
    "Гроші"
  );
});
