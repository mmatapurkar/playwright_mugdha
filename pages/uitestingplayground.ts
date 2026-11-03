import { Page,Locator } from "@playwright/test";
export class uitestingplayground {
    uitesting:Page
    mouseover:Locator
    linkbutton:Locator
    clickme:Locator
constructor(page:Page)
{
    this.uitesting=page
    this.mouseover=page.getByRole('heading', { name: 'Mouse Over' })
    this.linkbutton=page.getByText('Link Button')
    this.clickme=page.getByText('Click me')
}
}