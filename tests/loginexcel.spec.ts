import { Utils } from "../pages/utils";  
import { chromium } from "@playwright/test";
import {test} from "./fixtures/fixtures.ts"
import { readExcel } from "../pages/excelReader.ts";
import { loginsaucedemo } from "../pages/loginsaucedemo";

const users=readExcel("C:/Users/mugdh.MMDELL/OneDrive/Desktop/Playwright/testdata/playwrighttest.xlsx")
const id = process.env.ID||"all"

let filtereduser= users
if (id !== "all") {

const usernames = id
.split(",")
.map(r => r.trim());

 filtereduser = users.filter(
   (user: any) =>
usernames.includes(user.id)
 );
}
for(const user of filtereduser){
  test(`title ${user.username}`, async({login,page})=>{
 // const browser = await chromium.launch()
  //const context = await browser.newContext()//session
  //const page1=await context.newPage()
  const loginPage1= new Utils(page)
  await loginPage1.launch("https://www.saucedemo.com/")
  await login.login(user.username,user.password)

  })
}

