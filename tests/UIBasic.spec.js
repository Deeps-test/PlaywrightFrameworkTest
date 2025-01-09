const{test,expect} = require('@playwright/test');
//Syntax for test
//java scrpit is asynchronous so use async
test.only("Playwright test error login",async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const username=page.locator("#username");;
const password =page.locator("[type='password']");
const signin =page.locator("#signInBtn");
const cardTitles =  page.locator(".card-body a");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

await username.fill("Pstman@Postman.com");
await password.fill("learning");
await signin.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

await username.fill("");
await password.fill("");
await username.fill("rahulshettyacademy");
await password.fill("learning");
await signin.click();


console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
   
   console.log(allTitles);

});

test("Playwright test page",async ({page})=>{

  await page.goto("https://google.com");
  console.log(await page.title());
});