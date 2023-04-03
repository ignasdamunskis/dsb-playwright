// @ts-check
const { expect } = require('@playwright/test');

class Header {
  constructor(page) {
    this.page = page;
    // pre login
    this.loginTrigger = this.page.locator('.header-button.login');
    this.loginModal = this.page.locator('.modal.login-modal');
    this.loginForm = this.page.locator('form#login');
    this.usernameInput = this.loginForm.locator('#login_username');
    this.passwordInput = this.loginForm.locator('#login_password');
    this.loginSubmit = this.loginForm.locator('#login_submit');
    this.loginError = this.page.locator('.popup.popup-component.error');
    this.loginLoader = this.page.locator('.login-modal-loading > .loading-overlay');
    // post login
    this.accountMenuDropdown = this.page.locator('.header-button.account');
    this.logoutButton = this.page.locator('.logout-section');
  }

  async isLoggedOut() {
    await expect(this.loginTrigger).toBeVisible();
    await expect(this.loginModal).toBeHidden();
    await expect(this.loginForm).toBeHidden();
    await expect(this.loginError).toHaveCount(0);
    await expect(this.page.locator('.header-buttons.logout')).toHaveCount(1);
    await expect(this.page.locator('.header-buttons.loggedin')).toHaveCount(0);
  }

  async login(username, password) {
    await this.loginTrigger.click();
    await expect(this.loginModal).toBeVisible();
    await expect(this.loginForm).toBeVisible();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginSubmit.click();
    await expect(this.loginLoader).toHaveCount(1);
  }

  async isLoggedIn() {
    await expect(this.loginLoader).toHaveCount(0);
    await this.page.reload();
    await expect(this.loginModal).toBeHidden();
    await expect(this.loginForm).toBeHidden();
    await expect(this.loginError).toHaveCount(0);
    await expect(this.loginTrigger).toBeHidden();
    await expect(this.page.locator('.header-buttons.logout')).toHaveCount(0);
    await expect(this.page.locator('.header-buttons.loggedin')).toHaveCount(1);
  };

  async logout() {
    await this.accountMenuDropdown.click();
    await this.logoutButton.click();
  };
}

module.exports = Header;
