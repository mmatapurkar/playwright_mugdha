import{Page, Locator} from '@playwright/test';
export class ProductDescriptionPage {
page:Page
enterpincode:Locator
addToBagLocator
constructor(page:Page){
this.page=page
this.enterpincode=page.getByPlaceholder('Enter pincode')
this.addToBagLocator=page.getByText('ADD TO BAG')
}

async enterPincode(pincode:string){
    await this.enterpincode.click()
    await this.enterpincode.fill(pincode)

}
async clickAddToBag(){
    await this.addToBagLocator.click()
}

}