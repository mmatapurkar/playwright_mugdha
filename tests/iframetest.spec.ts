import {test,expect} from "./fixtures/fixtures.ts"
import { chromium } from "@playwright/test";



test("iframe", async({page,utils,iframenew})=>{

     await utils.launch('https://selectorshub.com/iframe-scenario/')
     await iframenew.fillForm();

})