import { Page,Locator,expect } from "@playwright/test";



export class brokenlinks {
    page:Page 
    validimage:Locator
    brokenimage:Locator
    validlink:Locator
    brokenlink:Locator
constructor(page:Page)
{
    this.page=page
    this.validimage=page.locator('[src="/images/Toolsqa.jpg"]')
    this.brokenimage=page.locator('[src="/images/Toolsqa_1.jpg"]')
    this.validlink=page.locator('[href="http://demoqa.com"]')
    this.brokenlink=page.locator('[data-test="shopping-cart-link"]')
    




}
async identifyImage(link:Locator){

  const images = this.brokenimage

  const count = await images.count();

  for (let i = 0; i < count; i++) {

    const image = images.nth(i);

    const src = await image.getAttribute('src');

    // Check whether image loaded successfully
    const isLoaded = await image.evaluate((img: HTMLImageElement) => {
      return img.complete && img.naturalWidth > 0;
    });

    if (!isLoaded) {
      console.log(`Broken image found: ${src}`);
    }

    expect(isLoaded, `Broken image: ${src}`).toBeTruthy();
  }
}
}

