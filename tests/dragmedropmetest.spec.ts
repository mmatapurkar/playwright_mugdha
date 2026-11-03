import { test,expect } from "@playwright/test";
import { droppable} from "../pages/droppable"

import { Utils } from "../pages/utils";
test("dragdrop", async({page})=>{
 
   const downlaodbutton=new droppable(page)
   const utils=new Utils(page)
   await utils.launch('https://demoqa.com/droppable')
   await downlaodbutton.draganddrop()
   await page.pause()

}
)