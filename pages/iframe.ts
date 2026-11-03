import { Page,Locator,expect } from "@playwright/test";
export class selectorhub {
    page:Page 
    UserEmail:Locator
    dareforyou:Locator
    //Password:Locator
    //Company:Locator
    //Country:Locator
    //Submit:Locator
    //SlectorhubChannel:Locator

    constructor(page:Page)
{
    this.page=page
    this.UserEmail=page.locator('[id="inp_val"]')

  
}
async fillForm(){
    const parentframe= this.page.frameLocator('[id="pact1"]').first()
    const childframe1=await parentframe.frameLocator('[id="pact2"]')
    const childframe2=await parentframe.frameLocator('[id="pact3"]')
   //await this.page.waitForTimeout(1000)
 
    await parentframe.locator('[id="inp_val"]').fill('testusername')
    await this.page.waitForTimeout(1000)

    await childframe1.locator('[id="jex"]').fill("I am here")
  //  locator('[id="pact2"]').contentFrame().locator('[id="jex"]')
    await childframe2.locator('[id="glaf"]').fill("testingthis")
    
     
}
}


