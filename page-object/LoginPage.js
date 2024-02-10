import { expect } from "@playwright/test"
import BasePage  from "./BasePage.js"

export default class LoginPage extends BasePage{
    constructor(page){
        super(page)
    this.usernameField = page.locator("#user-name"),
    this.pwdField = page.locator("#password"),
    this.loginBtn = page.locator("#login-button"),
    this.homePageTitle = page.locator(".title")
}

async performLogin(username="standard_user", password="secret_sauce") {
await this.visit("https://www.saucedemo.com/")
await this.usernameField.fill(username)
await this.pwdField.fill(password)
await this.loginBtn.click()
await expect(this.homePageTitle).toHaveText("Products")
}
}

