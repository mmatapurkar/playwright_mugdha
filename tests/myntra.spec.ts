import { from } from "node:stream/iter"

import{test,expect} from "./fixtures/fixtures";
import { ProductSareeHomePage } from "../pages/product_saree_homePge";
import { ProductDescriptionPage } from "../pages/proddesc";


test("has multiple products", async({page,utils,brokenlink})=> {
  
   await utils.launch('https://www.myntra.com/saree')
   const productsaree=new ProductSareeHomePage(page);
   const page2=await productsaree.selectProduct(1)
   const productdescr=new ProductDescriptionPage(page2)
   const page3=await productsaree.selectProduct(2)
   const productdescr1=new ProductDescriptionPage(page3)

}
)