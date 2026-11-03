import { droppable} from "../pages/droppable"
import { Fixtures } from "@playwright/test";
import { test } from "./fixtures/fixtures"; 


test("dragdrop", async({utils,download})=>{
   await utils.launch('https://demoqa.com/droppable')
   await download.draganddrop()
  }
)