import { expect } from "@playwright/test"
export class HomePage {
    constructor(page){
        this.page = page
        this.loginBtn = '[href="/w/index.php?title=Special:UserLogin&returnto=Main+Page"]'
        this.usernameInput = '[name="wpName"]'
        this.passInput = '[name="wpPassword"]'
        this.sendLogin = '[name="wploginattempt"]'
        this.usernameHolder = '[class="new"] > span'
        this.accountIcon = '[data-event-name="ui.dropdown-vector-user-links-dropdown"]'
        this.logoutBtn = '[title="Log out"]'

        }
    async gotoHomePage(){
        await this.page.goto('https://en.wikipedia.org/wiki/Main_Page')

    }
    async login(username, password){
        await this.page.getByRole('link', { name: 'Log in' }).click()
        await this.page.locator(this.usernameInput).fill(username)
        await this.page.locator(this.passInput).fill(password)
        await this.page.locator(this.sendLogin).click()
    }
    async verifyLogin(username){
        await expect(this.page.locator(this.usernameHolder)).toHaveText(username)
    }
    async logOut(){
        await this.page.locator(this.accountIcon).click()
        await this.page.click('text=Log out');

    }
}