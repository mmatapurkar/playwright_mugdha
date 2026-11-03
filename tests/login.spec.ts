import { test,expect } from "@playwright/test";
import { Utils } from "../pages/utils";  
import { chromium } from "@playwright/test";

test("title", async()=>{
  const browser = await chromium.launch()
  const context = await browser.newContext()//session
  const page1=await context.newPage()
  const loginPage1= new Utils(page1)
  await loginPage1.launch("https://www.saucedemo.com/")
  })
