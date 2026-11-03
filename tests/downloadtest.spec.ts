import { test,expect } from "@playwright/test";
import { demoqauploadfile } from "../pages/demoqauploadfile";
import { Utils } from "../pages/utils";
test("@daily downloadfile", async({page})=>{

   const Downlaodbutton=new demoqauploadfile(page)
   const utils=new Utils(page)
   await utils.launch('https://demoqa.com/upload-download')
   await Downlaodbutton.downloadfile()
}
)