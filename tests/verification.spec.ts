import { test, expect } from '@playwright/test';

test('verify custom package banner on web application service page', async ({ page }) => {
  await page.goto('http://localhost:3000/services/web-application');
  
  // Verify heading
  const heading = page.locator('h2', { hasText: 'Get a Quote Today & Fortify Your Web Applications' });
  await expect(heading).toBeVisible();
  
  // Verify description
  const description = page.locator('p', { hasText: "Cyber threats evolve every day. Waiting until after a breach is not a strategy." });
  await expect(description).toBeVisible();
  
  // Verify CTA button
  const ctaBtn = page.getByRole('link', { name: 'Get a Quote' });
  await expect(ctaBtn).toBeVisible();
  await expect(ctaBtn).toHaveAttribute('href', '/contact');
  
  // Verify gradient background
  const banner = page.locator('section').filter({ hasText: 'Get a Quote Today & Fortify Your Web Applications' }).locator('div').first();
  const background = await banner.evaluate((el) => window.getComputedStyle(el).backgroundImage);
  expect(background).toContain('linear-gradient');
  
  // Check text color
  const color = await heading.evaluate((el) => window.getComputedStyle(el).color);
  expect(color).toBe('rgb(255, 255, 255)');
});
