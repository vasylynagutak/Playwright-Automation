const { test, expect } = require('@playwright/test');

test('First test', async ({ browser }) => {
  
    //variables
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn =  page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

  // CSS selector and fill
    await userName.fill("rahulshettyacademy");
    await page.locator('[type="password"]').fill("learning");
    await signIn.click();

  // Log the text content of the element
    //console.log(await page.locator('[style*="block"]').textContent());
    //await expect(page.locator('[style*="block"]')).toContainText('Incorrect.');
//fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.nth(0).textContent()); //to get first element from the page or use .first()
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});


test.only('UI Controls', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control');
    const documentLink = page.locator("[href*='documents-request']");
    await dropdown.selectOption('consult');
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
 
    //checking if it is true, if not true will return failure
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    //second option is boolean - will return true or false
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    //will work only if the previous check is True
    //expect(await page.locator("'#terms'").isChecked()).toBeFalsy(); //return False

    //for blinking text 
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    


    //assertion - will open playwright board
    //await page.pause
    //await is when performing an action
    //to store variables = const and name of the variable
    //when action is performed inside brackets await will be in brackets and expect outside brackets at the beginning
});


test.only('Child windows handle', async ({ page }) => {
  
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentLink = page.locator("[href*='documents-request']");
  documentLink.click();
  




})