import { test, expect } from '@playwright/test';

test.describe('Navbar Services Mega Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should show all 8 requested categories on hover', async ({ page }) => {
    // Hover over the Services link
    const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
    await servicesLink.hover();

    // Verify the mega menu is visible
    const megaMenu = page.locator('div[class$="_megaMenu"]');
    await expect(megaMenu).toBeVisible();

    // Verify all 8 categories are present
    const expectedCategories = [
      'Network & Systems',
      'Cloud Platforms',
      'Data Storage',
      'Applications',
      'Communication & Code',
      'Devices & Hardware',
      'Security Testing',
      'Human Risk Testing'
    ];

    for (const category of expectedCategories) {
      const categoryBtn = page.locator('button[class*="categoryBtn"]').filter({ hasText: category });
      await expect(categoryBtn).toBeVisible();
    }
  });

  test('should keep menu open when moving cursor to categories', async ({ page }) => {
    const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
    await servicesLink.hover();

    // Move to "Cloud Platforms" category
    const cloudBtn = page.getByRole('button', { name: 'Cloud Platforms' });
    await cloudBtn.hover();

    // Verify menu is still visible
    const megaMenu = page.locator('div[class$="_megaMenu"]');
    await expect(megaMenu).toBeVisible();
    
    // Verify title on the right changed/is correct
    const contentTitle = page.locator('p[class*="contentTitle"]');
    await expect(contentTitle).toHaveText('Cloud Platforms');
  });
});
