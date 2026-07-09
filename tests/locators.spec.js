import {test, expect} from '@playwright/test';

test( 'locators_test' ,  async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.pause();
  // using objects property
   // await page.click('data-test=username');
    await page.fill('data-test=username' , 'standard_user');
   // await page.click('data-test=password');
    await page.fill('data-test=password', 'secret_sauce');
    await page.click('id=login-button');
    await page.click('id=react-burger-menu-btn');
    await page.click('id=logout_sidebar_link');
    

  // using xpath  //*[@id="login-button"]
    await page.locator('//input[@id="user-name"]').fill('problem_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    await page.locator('//button[@id="react-burger-menu-btn"]').click();
    await page.locator('//a[@id="logout_sidebar_link"]').click();

// using css
    await page.locator('input#user-name').fill('performance_glitch_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await page.locator('button#react-burger-menu-btn').click();
    await page.locator('a#logout_sidebar_link').click();  

    //using Text
    // await page.locator('text=standard_user').fill('standard_user');
    // await page.locator('text=secret_sauce').fill('secret_sauce');
    // await page.locator('text=login-button').click();
    // await page.locator('text=react-burger-menu-btn').click();
    // await page.locator('text=logout_sidebar_link').click();


});