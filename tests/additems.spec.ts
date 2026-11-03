import { test,expect } from "@playwright/test";
import { Utils } from "../pages/utils";  
import { chromium } from "@playwright/test";
import { Itemstocart } from "../pages/additemstocart";
import {loginsaucedemo}from "../pages/loginsaucedemo"
    test("has button", async ({ page})=> {
  
   const additemstocart1=new Itemstocart(page)
  
   const utils=new Utils(page)
   await utils.launch("https://www.saucedemo.com/")
   additemstocart1.additemstocart()
   
});




