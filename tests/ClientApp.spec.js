const { test, expect } = require('@playwright/test');


test('WebPage test', async ({ page }) => {
    
    await page.goto('https://rahulshettyacademy.com/client');
    console.log(await page.title());
    
    //name the variables and locate elements
    const userName = page.locator('#userEmail');
    const userPass = page.locator('#userPassword')
    const signIn =  page.locator('#login');
    const cardTitles = page.locator(".card-body b");
    
    await userName.fill("faina@gmail.com");
    await userPass.fill("fainalock/1F");
    await signIn.click();

    //will wait until network in idle state, when all calls are made
    //await page.waitForLoadState('networkidle');
    
    //console.log(await cardTitles.nth(0).textContent()); //to get first element from the page or use .first()
    
    //works only for single element
    await cardTitles.first().waitFor();
    console.log(await cardTitles.allTextContents());  
});


//fainalock/1F
//faina@gmail.com

//to run specific file : npx playwright test tests/ClientApp.spec.js