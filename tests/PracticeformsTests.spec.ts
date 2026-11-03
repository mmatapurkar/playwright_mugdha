import { test,expect } from "@playwright/test";
import { PracticeForm} from "../pages/PracticeForm";
import { Utils } from "../pages/utils";

test("has button", async ({ page})=> {
   const buttons=new PracticeForm(page)
   const utils=new Utils(page)
   await utils.launch('https://demoqa.com/buttons')
   
});

test("fill form", async({page})=>{

   const textbox=new PracticeForm(page)
   const utils=new Utils(page)
   await utils.launch('https://demoqa.com/automation-practice-form')
   await textbox.fillform("firstname","Lastname","test@gmail.com","12 abc street","Maths","0123456789")
   
  //  this.city=page.locator('["]')
  //  this.state=page.locator('["]')
    
})