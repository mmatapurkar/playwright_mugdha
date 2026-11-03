import { Page,Locator } from "@playwright/test";
export class droppable {
    page:Page
    dragmeButton:Locator
    dropMeButton:Locator
    




constructor(page:Page)
{
    this.page=page
   //this.dragmeButton=page.locator('[id="draggable"]')
    this.dragmeButton=page.getByRole('tabpanel', { name: 'Simple' }).getByText('Drag Me')
    this.dropMeButton=page.locator('[id="droppable"]')
     
}
async draganddrop(){
      
    //await this.dragmeButton.press('ControlOrMeta+Shift+I');

     await this.dragmeButton.click()
     await this.dragmeButton.dragTo(this.dropMeButton)
     //await expect(dropMeButton).toHaveText('Dropped!');
     await this.page.pause()

    }
}