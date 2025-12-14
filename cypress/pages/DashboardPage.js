import BasePage from "./BasePage";

class DashboardPage extends BasePage {
  constructor() {
    super(); // panggil constructor parent
    // sidebar menu item (by text)
    this.sidebarItem = ".oxd-main-menu-item--name";
    // top breadcrumb title
    this.breadcrumbTitle = "h6.oxd-topbar-header-breadcrumb-module";
  }

  /**
   * Click sidebar menu by name
   * @param {string} menuName
   */
  clickMenu(menuName) {
    cy.contains(this.sidebarItem, menuName)
      .should("be.visible")
      .click();
  }

  /**
   * Validate landing page by breadcrumb title
   * @param {string} expectedTitle
   */
  verifyLanding(expectedTitle) {
    cy.get(this.breadcrumbTitle)
      .should("be.visible")
      .and("have.text", expectedTitle);
  }
}

export default new DashboardPage();
