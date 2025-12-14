import LoginPage from "../../pages/LoginPage";

describe("OrangeHRM - Login Feature", () => {
  let loginData;

  beforeEach(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data;
    });

    cy.openLogin();
  });

  it("SCN001 - Login Success with valid credential - TC001", () => {
    cy.intercept("POST", "**/auth/validate").as("loginSuccess");
    cy.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    cy.url().should("include", "/dashboard");
  });

  it("SCN001 - Login Failed with invalid username - TC002", () => {
    cy.intercept("POST", "**/auth/validate").as("invalidUser");
    cy.login(
      loginData.invalidUser.username,
      loginData.validUser.password
    );

    LoginPage.verifyInvalidCredential();
  });

  it("SCN001 - Login Failed with invalid password - TC003", () => {
    cy.intercept("POST", "**/auth/validate").as("invalidUser");
    cy.login(
      loginData.validUser.username,
      loginData.invalidUser.password
    );

    LoginPage.verifyInvalidCredential();
  });

  it("SCN001 - Login Failed with empty username - TC004", () => {
    cy.login(null, loginData.validUser.password);

    LoginPage.verifyRequiredOrInlineError();
  });

  it("SCN001 - Login Failed with empty password - TC005", () => {
    cy.login(loginData.validUser.username, null);

    LoginPage.verifyRequiredOrInlineError();
  });

  it("SCN001 - Login Failed with both fields empty - TC006", () => {
    cy.login(null, null);

    LoginPage.verifyRequiredOrInlineError();
  });

  // -------------------------
  // Validation-focused tests
  // -------------------------

  it("SCN001 - Username must not accept symbol characters - TC007", () => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    cy.get("input[name='username']")
      .clear()
      .type(loginData.symbolsUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .should("not.match", symbolRegex);
  });

  it("SCN001 - Username must not accept emoticons / non-ascii characters - TC008", () => {
    cy.get("input[name='username']")
      .clear()
      .type(loginData.emojiUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .should("not.match", /[^\x00-\x7F]/);
  });

  it("SCN001 - Username must not contain spaces between characters - TC009", () => {
    cy.get("input[name='username']")
      .clear()
      .type(loginData.spacedUsername)
      .blur();

    cy.get("input[name='username']")
      .invoke("val")
      .should("not.include", " ");
  });

  it("SCN001 - Username must not exceed 200 characters - TC010", () => {
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

  it("SCN002 - Username Valid - TC001", () => {
    LoginPage.clickForgotPassword()
    LoginPage.inputUsername(loginData.validUser.username)
    LoginPage.submit()
    LoginPage.verifyChangePasswordSuccesfully()
  });

  it("SCN002 - Username Empty - TC001", () => {
    LoginPage.clickForgotPassword()
    LoginPage.submit()
    LoginPage.verifyRequiredOrInlineError()
  });
});
