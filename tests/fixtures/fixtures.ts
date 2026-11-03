import{test as base, expect} from "@playwright/test";
import { Utils } from "../../pages/utils";
import { loginsaucedemo } from "../../pages/loginsaucedemo";
import { Itemstocart } from "../../pages/additemstocart";
import { alerts } from "../../pages/alerts";
import {selectorhub} from "../../pages/iframe";
import { brokenlinks} from "../../pages/brokenlinks";
import { ProductDescriptionPage } from "../../pages/proddesc";
import { ProductSareeHomePage } from "../../pages/product_saree_homePge";
import { droppable } from "../../pages/droppable";

type Fixtures={
    utils:Utils
    login:loginsaucedemo
    itemstocart:Itemstocart
    alertwin:alerts
    iframenew:selectorhub
    brokenlink:brokenlinks
    productdescr:ProductDescriptionPage
    productsaree:ProductSareeHomePage
    download:droppable
}
export const test=base.extend<Fixtures>({
    utils:async({page},use)=>{
        const utils=new Utils (page)
        await use(utils)
    },
    login:async({page},use)=>{
        const login=new loginsaucedemo(page)
        await use(login)
    },
    itemstocart:async({page},use)=>{
        const itemstocart=new Itemstocart(page)
        await use(itemstocart)
    },
    alertwin:async({page},use)=>{
        const alertwin=new alerts(page)
        await use(alertwin)
    },
    iframenew:async({page},use)=>{
        const iframenew=new selectorhub(page)
        await use( iframenew)
    },
    brokenlink:async({page},use)=>{
        const brokenlink= new brokenlinks(page)
        await use(brokenlink)
    },
    download:async({page},use)=>{
        const download= new droppable(page)
        await use(download)
    }
    
})

export{expect} from "@playwright/test"