import { test} from "./fixtures/fixtures"; 


test("has alert", async({page,utils,alertwin})=> {
   
   await utils.launch('https://demoqa.com/alerts')
   await page.pause()
   await alertwin.alert()
   await alertwin.alert_dissmis()
   await alertwin.alert_accept()
   await page.pause()
   
});