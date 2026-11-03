import { Page,Locator } from "@playwright/test";
export class demoqauploadfile {
    page:Page
    upload:Locator
    download:Locator
    




constructor(page:Page)
{
    this.page=page
    this.download=page.locator('[id="downloadButton"]')
    this.upload=page.locator('[id="uploadFile"]')
}
async downloadfile(){
    const downloadpromise=this.page.waitForEvent('download')    
    await this.download.click()
    const downloadfile=await downloadpromise
    const filename= await downloadfile.suggestedFilename()
    const timestamp=Date.now()
    let finalfilename=`${filename}_${timestamp}`
    await downloadfile.saveAs(`download/${finalfilename}`)
}
}