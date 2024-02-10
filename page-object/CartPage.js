import { expect } from "@playwright/test"
import BasePage from "./BasePage.js"

export default class CartPage extends BasePage{
    constructor(page){
        super(page)
this.cartList = page.locator(`//div[@class="cart_list"]`)
this.cartContent = page.locator(`//div[@class="cart_item"]`),
this.checkoutBtn = page.locator(`//button[@id="checkout"]`),
this.firstNameField = page.locator("#first-name"),
this.lastNameField = page.locator("#last-name"),
this.zipField = page.locator("#postal-code"),
this.continueBtn = page.locator("#continue"),
this.orderInfo = page.locator(`//div[@class="summary_info"]`),
this.finishCheckoutBtn = page.locator(`//button[@class="btn btn_action btn_medium cart_button"]`),
this.checkoutCompleteContent = page.locator(`//h2[@class="complete-header"]`)
    }


    async placingAnOrder(){
        await this.checkoutBtn.click()
        await this.firstNameField.fill("test")
        await this.lastNameField.fill("test")
        await this.zipField.fill("test")
        await this.continueBtn.click()  
        expect(this.orderInfo).toBeVisible()  
    }

    async finishOrderPlacing(){
        await this.finishCheckoutBtn.click()
        expect(this.checkoutCompleteContent).toBeVisible()
        expect(this.checkoutCompleteContent).toHaveText("Thank you for your order!")
    }
}