import { test, expect } from "@playwright/test"
import fs from "fs"

test(`Download "industry.csv" file`, async({page})=>{

await page.goto("https://wsform.com/knowledgebase/sample-csv-files/")
const downloadPromise = page.waitForEvent('download')
await page.locator('//a[@href="https://cdn.wsform.com/wp-content/uploads/2020/06/industry.csv"]').click()
const download = await downloadPromise
const folderPath = './downloads/'
const path = folderPath + download.suggestedFilename();
await download.saveAs(path);

expect(
    (await fs.promises.stat((await download.path()) as string)).size).toBeGreaterThan(5)
 })