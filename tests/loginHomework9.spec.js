import { test } from "@playwright/test"
import { chromium } from "@playwright/test"
import { LoginPageLocators } from "../page-object/LoginPage"

let loginData = [
    {
        username: "standard_user",
        password: "secret_sauce"
    },
    {
        username: "performance_glitch_user",
        password: "secret_sauce" 
    },
    {
        username: "visual_user",
        password: "secret_sauce" 
    }

]
test("Login to test website with diferent accounts", async()=>{
loginData.forEach(async ({username, password})=>{
        const browser = await chromium.launch();
        const page = await browser.newPage();
        let loginPageLocators = new LoginPageLocators(page);
        await loginPageLocators.performLogin(username, password);
        await page.close();
        await browser.close()
    
})
})
