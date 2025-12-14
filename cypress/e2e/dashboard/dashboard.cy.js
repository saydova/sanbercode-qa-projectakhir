import DashboardPage from "../../pages/DashboardPage";

describe("OrangeHRM - Dashboard Feature", () => {

  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      // login dulu (pre-condition: already logged in)
      cy.openLogin();
      cy.login(
        data.validUser.username,
        data.validUser.password
      );
    });

    cy.url().should("include", "/dashboard");
  });

  it("SCN-001-dashboard-Feature-TC001 - Success Open Dashboard Landing", () => {
    DashboardPage.clickMenu("Dashboard");
    DashboardPage.verifyLanding("Dashboard");
  });

  it("SCN-001-dashboard-Feature-TC002 - Success Open Admin Landing", () => {
    DashboardPage.clickMenu("Admin");
    DashboardPage.verifyLanding("Admin");
  });

  it("SCN-001-dashboard-Feature-TC003 - Success Open PIM Landing", () => {
    DashboardPage.clickMenu("PIM");
    DashboardPage.verifyLanding("PIM");
  });

  it("SCN-001-dashboard-Feature-TC004 - Success Open Leave Landing", () => {
    DashboardPage.clickMenu("Leave");
    DashboardPage.verifyLanding("Leave");
  });

  it("SCN-001-dashboard-Feature-TC005 - Success Open Time Landing", () => {
    DashboardPage.clickMenu("Time");
    DashboardPage.verifyLanding("Time");
  });

  it("SCN-001-dashboard-Feature-TC006 - Success Open Recruitment Landing", () => {
    DashboardPage.clickMenu("Recruitment");
    DashboardPage.verifyLanding("Recruitment");
  });

  it("SCN-001-dashboard-Feature-TC007 - Success Open My Info Landing", () => {
    DashboardPage.clickMenu("My Info");
    DashboardPage.verifyLanding("My Info");
  });

  it("SCN-001-dashboard-Feature-TC008 - Success Open Directory Landing", () => {
    DashboardPage.clickMenu("Directory");
    DashboardPage.verifyLanding("Directory");
  });

  it("SCN-001-dashboard-Feature-TC009 - Success Open Claim Landing", () => {
    DashboardPage.clickMenu("Claim");
    DashboardPage.verifyLanding("Claim");
  });

  it("SCN-001-dashboard-Feature-TC010 - Success Open Buzz Landing", () => {
    DashboardPage.clickMenu("Buzz");
    DashboardPage.verifyLanding("Buzz");
  });
});
