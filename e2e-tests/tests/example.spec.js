
// @ts-check
const { test, expect } = require('@playwright/test');

test('Pressing "Fetch message" shows message.', async ({ page }) => {
  await page.goto("/");

  // Hydration hack
  await page.waitForTimeout(1000);

  // Click the get started link.
  await page.getByRole('button', { name: 'Fetch message' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText("Message is: Hello, World!")).toBeVisible();
});