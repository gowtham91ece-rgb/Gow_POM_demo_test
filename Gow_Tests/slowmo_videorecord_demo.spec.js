import { test, expect, chromium } from "@playwright/test"

test('slowmo_videorecord_test', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'Recorded_video/',
            size: { width: 800, height: 600 }
        }
    });

    const page = await context.newPage();

    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('today task ');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('get batter');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('go for walk');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'today task' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await expect(page.getByText('get batter')).toBeVisible();
    await expect(page.getByTestId('todo-list')).toContainText('go for walk');

    await context.close();

})