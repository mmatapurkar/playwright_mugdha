import { Page,Locator } from "@playwright/test";
export class Demoqabutton {
    page:Page
    doubleclick:Locator
    rightclick:Locator
    clickme:Locator
    




constructor(page:Page)
{
    this.page=page
    this.doubleclick=page.locator('[id="doubleClickBtn"]')
    this.clickme=page.getByRole('button', { name: 'Click Me', exact: true })
    this.rightclick=page.locator('[id="rightClickBtn"]')
   
}
 async doubleclickaction(){
    await this.doubleclick.dblclick();
 }
 async singleclick(){
    await this.clickme.click();
 }
 async rightclick1(){
    await this.rightclick.click({button:'right'})
 }
}