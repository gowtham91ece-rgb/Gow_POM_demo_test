// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Demo groups and hooks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test.afterEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test.describe('Homepage checks', () => {
    test('shows the example heading', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('Example Domain');
    });

    test('has a working link', async ({ page }) => {
      const link = page.locator('a');
      await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example');
    });
  });

  test.describe('Navigation checks', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://playwright.dev/');
    });

    test('page title contains Playwright', async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
    });
  });
});
