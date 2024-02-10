import { expect } from "@playwright/test"
import CartPage from "./CartPage.js"


export default class ProguctsPage extends CartPage{
    constructor(page){
        super(page)
this.page = page
this.addBackpackItemBtn = page.locator(`//button[@id="add-to-cart-sauce-labs-backpack"]`),
this.removeBackpackItemBtn = page.locator(`//button[@id="remove-sauce-labs-backpack"]`),
this.addBikeLightItemBtn = page.locator(`//button[@id="add-to-cart-sauce-labs-bike-light"]`),
this.removeBikeLightItemBtn = page.locator(`//button[@id="remove-sauce-labs-bike-light"]`),
this.addTShirtItemBtn = page.locator(`//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]`),
this.removeTShirtItemBtn = page.locator(`//button[@id="remove-sauce-labs-bolt-t-shirt"]`)
 }

    async addBackpackItemToCart(){
        await this.addBackpackItemBtn.click()
        expect (this.removeBackpackItemBtn).toBeVisible()
        expect (this.removeBackpackItemBtn).toHaveText("Remove")
    }

    async addBikeLightItemToCart(){
        await this.addBikeLightItemBtn.click()
        expect (this.removeBikeLightItemBtn).toBeVisible()
        expect (this.removeBikeLightItemBtn).toHaveText("Remove")
    }

    async addTShirtItemToCart(){
        await this.addTShirtItemBtn.click()
        expect (this.removeTShirtItemBtn).toBeVisible()
        expect (this.removeTShirtItemBtn).toHaveText("Remove")
    }

    async checkItemsInCart(){
        await this.header.goToCart()
        expect (this.cartContent).toBeVisible()
    }
}