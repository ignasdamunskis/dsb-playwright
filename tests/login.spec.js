// @ts-check
const { test, expect } = require('@playwright/test');
const Homepage = require('../pages/Homepage');

test('Mobile dafabet login', async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  await homepage.header.isLoggedOut();
  await homepage.header.login('AUTODAFATEST002', 'Qat456123');
  await homepage.header.isLoggedIn();
});
