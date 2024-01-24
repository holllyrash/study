import { test, expect, chromium } from "@playwright/test";
test("Has platypus picture", async ({ page }) => {
  await page.goto(
    "https://www.nationalgeographic.com/animals/mammals/facts/platypus"
  );

  await expect(page.getByAltText("a platypus")).toBeVisible();
});

test("Has photograph name indicated", async ({ page }) => {
  await page.goto(
    "https://www.nationalgeographic.com/animals/mammals/facts/platypus"
  );
  await expect(
    page.getByText("Photograph by Joel Sartore, National Geographic Photo Ark")
  ).toBeVisible();
});
