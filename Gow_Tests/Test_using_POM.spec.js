import { test, expect } from '@playwright/test'
import { loginpage_internet_herokuapp } from './Pages_for_POM/login_internet_herokuapp'

test('Test_using_POM @positive', async ({ page }) => {

    const login_class = new loginpage_internet_herokuapp(page)

    await login_class.goto_url()
    await login_class.login('tomsmith', 'SuperSecretPassword!')

    // await page.goto('https://the-internet.herokuapp.com/login')
    // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();

    await expect(page.getByText('You logged into a secure area')).toBeVisible();

    // await page.getByRole('link', { name: 'Logout' }).click();

    await login_class.logout()

})

test('Test_using_POM @Negative', async ({ page }) => {

    const login_class = new loginpage_internet_herokuapp(page)

    await login_class.goto_url()
    await expect(page.locator('h2')).toContainText('Login Page');
    // with Invalid Password
    await login_class.login('tomsmith', 'Invalid')
    await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
    // with Invalid username
    await login_class.login('gowtham', 'SuperSecretPassword!')
    await expect(page.getByText('Your username is invalid! ×')).toBeVisible();
   
})

