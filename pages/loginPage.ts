import { Page,Locator } from "@playwright/test";
export class LoginPage {
    page:Page 
    username:Locator
    password:Locator
    signin:Locator
constructor(page:Page)
{
    this.page=page
    this.username=page.locator('[data-test="username"]')
    this.password=page.locator('[data-test="password"]')
    this.signin=page.locator('[data-test="login-button"]')
}

}