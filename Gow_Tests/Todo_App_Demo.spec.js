import { test, expect } from '@playwright/test';

test('Todo_app_Demo @sanitytest', async ({ page }) => {
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
  await expect(page.locator('.todo-list li')).toHaveCount(3);
});