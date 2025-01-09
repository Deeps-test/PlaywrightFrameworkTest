const{test,expect} = require('@playwright/test');

test("Clent App login test", async ({page})=>{
const userName= "Postman@Postman.com";
const password="Aaaa@1234";
const productName = 'ADIDAS ORIGINAL';
const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(userName);
    await page.locator("[type='password']").fill(password);
    await page.locator("[type='submit']").click();
     //Api call to be idel
     await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);

});