
import { Page,Locator,expect } from "@playwright/test";
export class Itemstocart {
    page:Page 
    additems1:Locator
    additems2:Locator
    additems3:Locator
    cart:Locator
    shoppingcartItems:Locator
    checkout:Locator 
constructor(page:Page)
{
    this.page=page
    this.additems1=page.locator('[id="add-to-cart-sauce-labs-backpack"]')
    this.additems2=page.locator('[name="add-to-cart-sauce-labs-bike-light"]')
    this.additems3=page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    this.cart=page.locator('[data-test="shopping-cart-link"]')
    this.shoppingcartItems = page.locator('[data-test="shopping-cart-badge"]');
    this.checkout=page.locator('[id="checkout"]')



}
async additemstocart(){

  
  await this.additems1.click()
  await this.page.pause()
  await this.additems2.click();
  await this.additems3.click();
  await this.checkout.click();

}
async verifycartitems(){
 const itemtext=await this.shoppingcartItems.textContent()
 await expect(itemtext).toEqual("3")//hard assertion

}

}

