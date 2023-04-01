// @ts-check
const Header = require('./components/Header');

class Homepage {
  constructor(page) {
    this.page = page;
    this.header = new Header(page);
  }

  async navigate() {
    await this.page.goto('/');
  }
}

module.exports = Homepage;
