import { expect } from "@playwright/test"

export default class Header{
    constructor(page){
        this.page = page
        this.primaryHeaderContainer = page.locator(`//div[@class="primary_header"]`),
        this.menuBtn = page.locator(`//div[@class="bm-burger-button"]`),
        this.logo = page.locator(`//div[@class="app_logo"]`),
        this.shoppingCartBtn = page.locator(`//div[@id="shopping_cart_container"]`)
    }

    async goToCart(){
        await this.shoppingCartBtn.click()
        expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html")

}
}