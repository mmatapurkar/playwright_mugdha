import { Page,Locator,Expect, expect } from "@playwright/test";
export class loginsaucedemo {
    page:Page 
    username:Locator
    password:Locator
    signin:Locator
    pagetitle:Locator
    cartlink:Locator
    checkOut:Locator
    firstname:Locator
    lastname:Locator
    postcode:Locator
    continue:Locator
    finish:Locator
    //downloadPromise:Locator
    //cartitemnumber:Locator
constructor(page:Page)
{
    this.page=page
    this.username=page.locator('[id="user-name"]')
    this.password=page.locator('[id="password"]')
    this.signin=page.locator('[id="login-button"]')
    this.pagetitle=page.locator('[data-test="title"]')
    this.cartlink=page.locator('[data-test="shopping-cart-link"]')
    this.checkOut=page.locator('[data-test="checkout"]')
    this.firstname=page.locator('[data-test="firstName"]')
    this.lastname= page.locator('[data-test="lastName"]')
    this.postcode=page.locator('[data-test="postalCode"]')
    this.continue=page.locator('[data-test="continue"]')
    this.finish =page.locator('[data-test="finish"]')
    //this.downloadPromise = page.waitForEvent('download');
 // this.page.locator('[data-test="generate-pdf-order"]')
  
    
    //this.cartitemnumber=page
}

async login(usrnm:string, pwd:string){

   await  this.username.fill(usrnm)
   await  this.password.fill(pwd)
   await this.signin.click()
   await this.page.waitForTimeout(2000)
   await this.page.screenshot({path:`screenshots/cartpage.png`})
   
}
async verifypagetitle(){
await expect(this.pagetitle).toHaveText("Products");//hard assertion

}
async gotoCartPage(){
    
await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
await this.cartlink.waitFor({state:'visible'})
await this.page.waitForLoadState('load')
await this.cartlink.click()


}
async Checkout(){

  await this.cartlink.click()
  await this.checkOut.click();
  await this.firstname.click();
  await this.firstname.fill('test m');
  await this.firstname.press('Tab');
  await this.lastname.fill('testv');
  await this.postcode.click();
  await this.postcode.fill('123456');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
 // const downloadPromise = page.waitForEvent('download');
 // await page.locator('[data-test="generate-pdf-order"]').click();
 // const download = await downloadPromise;

}
}