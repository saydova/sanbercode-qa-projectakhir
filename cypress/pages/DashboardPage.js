import BasePage from "./BasePage";

class DashboardPage extends BasePage {
  dashboardHeader = "h6.oxd-text--h6";

  verifyDashboardLoaded() {
    this.verifyVisible(this.dashboardHeader);
    cy.contains("Dashboard").should("be.visible");
  }
}

export default new DashboardPage();
