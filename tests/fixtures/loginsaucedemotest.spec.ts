//import { test,expect } from "@playwright/test";
import { test,expect} from "./fixtures/fixtures"; 
//import { Utils } from "../pages/utils";  
import { chromium } from "@playwright/test";
//import { loginsaucedemo } from "../pages/loginsaucedemo";
//import { Itemstocart } from "../pages/additemstocart";


test("@daily @smoke  login", async({page,utils,login,itemstocart})=>{

//const utils=new Utils(page)
 await utils.launch('https://www.saucedemo.com/')
  // const loginpage=new loginsaucedemo(page)
   //const Itemstocart1=new Itemstocart(page)
   await login.login("standard_user","secret_sauce")
   await itemstocart.additemstocart()
   await login.verifypagetitle()
   await login.gotoCartPage()
   await page.pause()
   await itemstocart.verifycartitems()
   await login.Checkout()
}
)