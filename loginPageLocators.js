import { expect } from "@playwright/test"

export class LoginPageLocators {
    constructor(page){
    this.page = page
    this.usernameField = page.locator("#user-name"),
    this.pwdField = page.locator("#password"),
    this.loginBtn = page.locator("#login-button"),
    this.homePageTitle = page.locator(".title")
}

async performLogin(username, password) {
await this.page.goto("https://www.saucedemo.com/")
await this.usernameField.fill(username)
await this.pwdField.fill(password)
await this.loginBtn.click()
await expect (this.homePageTitle).toHaveText("Products")
}
}

