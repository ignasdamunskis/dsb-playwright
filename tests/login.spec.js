// @ts-check
const { test, expect } = require('@playwright/test');
const Homepage = require('../pages/Homepage');

test('Mobile dafabet login @important', async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  await homepage.header.isLoggedOut();
  await homepage.header.login('AUTODAFATEST002', 'Qat456123');
  await homepage.header.isLoggedIn();
});

test('Mobile dafabet logout', async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.navigate();
  await homepage.header.isLoggedOut();
  await homepage.header.login('AUTODAFATEST002', 'Qat456123');
  await homepage.header.isLoggedIn();
  await homepage.header.logout();
  await expect(page).toHaveURL(new RegExp('https://istg-m.elysium-dfbt.com/'));
});