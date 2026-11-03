import{Page, Locator} from '@playwright/test';
export class ProductSareeHomePage {
page:Page
product:Locator

constructor(page:Page){
this.page=page
this.product=page.locator('[class="product-productMetaInfo"]')
}

async selectProduct(position:number){
    const newPagePromise=this.page.waitForEvent('popup') //sync call
    await this.product.nth(position).click()
    const newPage=await newPagePromise //async call
    return newPage
}

}