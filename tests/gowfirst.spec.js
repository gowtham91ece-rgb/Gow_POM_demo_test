import{test,expect} from '@playwright/test';

test('Gowfirst_test' ,  async ({ page }) =>{

await page.goto('https://www.google.com/');
await expect(page).toHaveTitle('Google');

await page.locator('//textarea[@class="gLFyf"]').click();
await page.locator('//textarea[@class="gLFyf"]').fill('playwright');
await page.locator('//span[@class="lTxWLe"]').click();
await page.pause();
//await expect(page).toHaveTitle('playwright - Google Search');
//await expect(page).toContainURL('https://www.google.com/search?q=playwright');


});