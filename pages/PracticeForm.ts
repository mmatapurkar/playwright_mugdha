import { Page,Locator } from "@playwright/test";
export class PracticeForm{
   
    page:Page 
    fname :Locator
    lastname:Locator
    email:Locator
    gender:Locator
    mobile:Locator
    date:Locator
    subjects:Locator
    hobbies:Locator
    picture:Locator
    currentadd:Locator
    city:Locator
    state:Locator
    button:Locator
    subjectvalue:Locator
    subjectvalueclick:Locator
    statevalue:Locator

    constructor(page:Page)
{
    this.page=page
    this.fname=page.getByPlaceholder('First Name')
    this.lastname=page.getByPlaceholder('Last Name')
    this.email=page.getByPlaceholder('name@example.com')
    this.gender=page.locator('[id="gender-radio-1"]')
    this.subjects=page.locator('.subjects-auto-complete__input-container')
    this.mobile=page.locator('[placeholder="Mobile Number"]')
    this.date=page.locator('[id="dateOfBirthInput"]')
    this.hobbies=page.locator('[id=hobbies-checkbox-1]')
    this.picture=page.locator('[id="uploadPicture"]')
    this.currentadd=page.locator('[id="currentAddress"]')
    this.city=page.locator('["]')
    this.state=page.getByText("Select State")
    this.statevalue=page.getByText("Uttar Pradesh")


    this.button=page.locator('[id="submit"]')
    this.subjectvalue=page.locator('[id="subjectsInput"]')
    this.subjectvalueclick=page.getByRole('option', { name: 'Maths' })
    
}
async fillform(fname:string,lastname:string,email:string,currentadd:string,subject:string,mobile:string){
    await this.fname.fill(fname)
    await this.lastname.fill(lastname)
    await this.email.fill(email)
    await this.gender.check()
    await this.page.pause()
    await this.subjects.click()
    await this.subjectvalue.fill(subject)
    await this.subjectvalueclick.click()
    await this.mobile.fill(mobile)
    await this.hobbies.check()
    await this.picture.setInputFiles("pages/inventoryPage.ts")
    //await this.page.pause();
   // await this.currentadd.click()
    await this.currentadd.fill(currentadd)
    await this.state.click({force:true})
    await this.statevalue.click()
    await this.page.pause();
    await this.button.click()
}

}