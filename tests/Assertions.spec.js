import{test,expect} from '@playwright/test';

test('Test_Assertion', async({ page}) => {

    await page.goto('https://www.saucedemo.com/')
    // await page.pause()

    // await expect(page.locator('#root > div > div.login_logo')).toHaveCount(1)


})

