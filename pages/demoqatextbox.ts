import { Page,Locator } from "@playwright/test";
export class Demoqatextbox {
    page:Page
    textboxnname:Locator
    textboxemail:Locator
    textboxcurrentadd:Locator
    textboxpermaddress:Locator
    button:Locator




constructor(page:Page)
{
    this.page=page
    this.textboxnname=page.getByRole('textbox', { name: 'Full Name' })
    this.textboxemail=page.getByRole('textbox', { name: 'name@example.com' })
    this.textboxcurrentadd=page.getByRole('textbox', { name: 'Current Address' })
    this.textboxpermaddress=page.locator('[id="permanentAddress"]')
    this.button=page.getByRole('button', { name: 'Submit' })
    this.textboxnname=page.getByPlaceholder('First Name')
}
async fillform(fname:string,email:string,currentadd:string,permadd:string){
    await this.textboxnname.fill(fname)
    await this.textboxemail.fill(email)
    await this.textboxcurrentadd.fill(currentadd)
    await this.textboxpermaddress.fill(permadd)
    await this.textboxpermaddress.clear()
    await this.textboxnname.click()
    await this.page.keyboard.press('Control+a')
    await this.page.keyboard.press('Control+c')
    await this.textboxpermaddress.click()
    await this.page.keyboard.press('Control+v')
    let text=await this.textboxpermaddress.inputValue()
    console.log(text)


}
}