import{test,except} from '@playwright/test';

test('Asserestion Test', async ({page}) => {

  await page.goto('https://playwright.dev/');
  await page.pause();
  await expect(page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/h1/text()')).toHaveCount(1);


})