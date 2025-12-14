class BasePage {
    get(locator, timeout = 10000) {
      return cy.get(locator, { timeout });
    }
  
    visible(locator) {
      this.get(locator).should("be.visible");
    }
  
    click(locator) {
      this.visible(locator);
      this.get(locator).click();
    }
  
    type(locator, text) {
      this.visible(locator);
      this.get(locator).clear().type(text);
    }
  }
  
  export default BasePage;
  