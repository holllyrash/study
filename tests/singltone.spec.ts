import { test, expect, chromium } from "@playwright/test";
import { Credentials } from "../page-object/Credentials";

test.only("Login test using singltone pattern", async ({ page }) => {
await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@id="user-name"]').fill(Credentials.getEmail())
await page.locator('//input[@id="password"]').fill(Credentials.getPassword())
await page.locator('//input[@id="login-button"]').click()
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
});
