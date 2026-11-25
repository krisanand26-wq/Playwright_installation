const { test, expect } = require('@playwright/test');

test('Register User', async ({ page }) => {

  await page.goto('https://automationexercise.com');

//   await expect(page).toHaveTitle(/Automation Exercise/);

//   await page.click('a[href="/login"]');

//   await expect(page.locator('h2')).toContainText('New User Signup!');

//   await page.locator('[data-qa="signup-name"]').fill('Test User');

//   await page.locator('[data-qa="signup-email"]')
//       .fill(test${Date.now()}@mail.com);

//   await page.locator('[data-qa="signup-button"]').click();

});