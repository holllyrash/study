import Header from "./components/Header.js"
export default class BasePage {
    constructor(page){
        this.page = page
        this.header = new Header(page)
    }
    async visit(url){
        await this.page.goto(url)
    }
}