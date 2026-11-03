import { Page,Locator } from "@playwright/test";
export class Links {
    page:Page
    home:Locator
    Homek8xNk:Locator
    created:Locator
    nocontent:Locator
    Moved:Locator
    BadREquest:Locator
    Unauthorised:Locator
    Forbidden:Locator
    Notfound:Locator   




constructor(page:Page)
{
    this.page=page
    this.home=page.locator('[id="simpleLink"]')
    this.Homek8xNk=page.locator('[id="dynamicLink"]')
    this.created=page.locator('[id="created"]')
    this.nocontent=page.locator('[id="no-content"]')
     this.Moved=page.locator('[id="moved"]')

    this.BadREquest=page.locator('[id="bad-request"]')
    this.Unauthorised=page.locator('[id="unauthorized"]')
    this.Forbidden=page.locator('[id="no-content"]')
    this.Notfound=page.locator('[id="no-content"]')


   
}
}