import { Page,Locator } from "@playwright/test";
export class alerts {
    page:Page
    Button1:Locator
    Button2:Locator
    Button3:Locator
    Button4:Locator
    




constructor(page:Page)
{
    this.page=page
    this.Button1=page.locator('[id="alertButton"]')
    this.Button2=page.locator('[id="timerAlertButton"]')
    this.Button3=page.locator('[id="confirmButton"]')
    this.Button4=page.locator('[id="promtButton"]')
}
async alert(){

    this.page.once('dialog',async dialog=>{
    await dialog.accept()
    })
    await this.Button1.click()

}
async alert_dissmis(){

    this.page.once('dialog',async dialog=>{
    await dialog.dismiss()
    })
    await this.Button3.click()

}
async alert_accept(){

    this.page.once('dialog',async dialog=>{
    await dialog.accept("My name is test")
    })
    await this.Button4.click()

}
}