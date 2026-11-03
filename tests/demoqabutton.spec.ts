import { test,expect } from "@playwright/test";
import { Demoqabutton } from "../pages/Demoqabutton";
import { Utils } from "../pages/utils";
import { Demoqatextbox } from "../pages/demoqatextbox";
test("has button", async ({ page})=> {
   const buttons=new Demoqabutton(page)
   const utils=new Utils(page)
   await utils.launch('https://demoqa.com/buttons')
   await buttons.singleclick();
   await buttons.doubleclickaction();
   await buttons.rightclick1();
   await page.pause();
});

test("fill form", async({page})=>{
   const textbox=new Demoqatextbox(page)
   const utils=new Utils(page)
   await utils.launch('https://demoqa.com/text-box')
   await textbox.fillform("testname","test@gmail.com","12 abc street","12 abc street")
   await page.pause();
})