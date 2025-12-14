import LoginPage from "../../pages/LoginPage";

describe("OrangeHRM - Login Feature", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data;
    });

    cy.openLogin();
  });

  it("TC001 - Login Success with valid credential", () => {
    cy.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    cy.url().should("include", "/dashboard");
  });

  it("TC002 - Login Failed with invalid username", () => {
    cy.login(
      loginData.invalidUser.username,
      loginData.validUser.password
    );

    LoginPage.verifyInvalidCredential();
  });

  it("TC003 - Login Failed with invalid password", () => {
    cy.login(
      loginData.validUser.username,
      loginData.invalidUser.password
    );

    LoginPage.verifyInvalidCredential();
  });

  it("TC004 - Login Failed with empty username", () => {
    cy.login(null, loginData.validUser.password);

    LoginPage.verifyRequiredOrInlineError();
  });

  it("TC005 - Login Failed with empty password", () => {
    cy.login(loginData.validUser.username, null);

    LoginPage.verifyRequiredOrInlineError();
  });

  it("TC006 - Login Failed with both fields empty", () => {
    cy.login(null, null);

    LoginPage.verifyRequiredOrInlineError();
  });

  // -------------------------
  // Validation-focused tests
  // -------------------------

  it("TC007 - Username must not accept symbol characters", () => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    cy.get("input[name='username']")
      .clear()
      .type(loginData.symbolsUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .should("not.match", symbolRegex);
  });

  it("TC008 - Username must not accept emoticons / non-ascii characters", () => {
    cy.get("input[name='username']")
      .clear()
      .type(loginData.emojiUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .should("not.match", /[^\x00-\x7F]/);
  });

  it("TC009 - Username must not contain spaces between characters", () => {
    cy.get("input[name='username']")
      .clear()
      .type(loginData.spacedUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .should("not.include", " ");
  });

  it("TC010 - Username must not exceed 200 characters", () => {
    const longUsername = loginData.longUsername.repeat(3);

    cy.get("input[name='username']")
      .clear()
      .type(longUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .its("length")
      .should("be.lte", 200);
  });
});
