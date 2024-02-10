import { test } from "@playwright/test"
import LoginPage from "../page-object/LoginPage.js"
import ProguctsPage from "../page-object/ProductsPage.js"
import CartPage from "../page-object/CartPage.js"
test.describe("Order Sauce Labs Backpack item", ()=>{
    test.beforeEach(async({page})=>{
        let loginPage = new LoginPage(page)
        await loginPage.performLogin()
        
    }),

    test("Order Sauce Labs Backpack", async({page})=>{
        let productsPage = new ProguctsPage(page)
        let cart = new ProguctsPage(page)
        let checkoutForm = new CartPage(page)
        await productsPage.addBackpackItemToCart()
        await cart.checkItemsInCart()
        await checkoutForm.placingAnOrder()
        await checkoutForm.finishOrderPlacing()
    })
    test("Order Sauce Labs Bike Light", async({page})=>{
        let productsPage = new ProguctsPage(page)
        let cart = new ProguctsPage(page)
        let checkoutForm = new CartPage(page)
        await productsPage.addBikeLightItemToCart()
        await cart.checkItemsInCart()
        await checkoutForm.placingAnOrder()
        await checkoutForm.finishOrderPlacing()
    })

    test("Order Sauce Labs Bolt T-Shirt", async({page})=>{
        let productsPage = new ProguctsPage(page)
        let cart = new ProguctsPage(page)
        let checkoutForm = new CartPage(page)
        await productsPage.addTShirtItemToCart()
        await cart.checkItemsInCart()
        await checkoutForm.placingAnOrder()
        await checkoutForm.finishOrderPlacing()
    })
})