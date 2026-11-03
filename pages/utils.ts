import { Page,Locator,Expect} from "@playwright/test";
export class Utils {
    page:Page
    
constructor(page:Page)
{
    this.page=page
    

}
async launch(url:string){
    await this.page.goto(url)
    
}
}