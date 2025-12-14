import BasePage from "./BasePage";

class LoginPage extends BasePage {
  constructor() {
    super(); 
    this.username = "input[name='username']";
    this.password = "input[name='password']";
    this.loginBtn = "button[type='submit']";
    this.forgotPasswordBtn = '.oxd-text.oxd-text--p.orangehrm-login-forgot-header';
    this.titleResetSuccess = '.oxd-text.oxd-text--h6.orangehrm-forgot-password-title';  
    this.errorAlert = "div[role='alert'], .oxd-input-field-error, .error, .validation-error";
    this.requiredText = "Required";
  }

  visit() {
    cy.visit("/web/index.php/auth/login");
    this.visible(this.username);
  }

  inputUsername(username) {
    if (username !== null && username !== undefined) {
      this.type(this.username, username);
    }
  }

  inputPassword(password) {
    if (password !== null && password !== undefined) {
      this.type(this.password, password);
    }
  }

  submit() {
    this.click(this.loginBtn);
  }

  verifyInvalidCredential() {
    cy.contains("Invalid credentials").should("be.visible");
  }

  verifyRequiredOrInlineError() {
    cy.get("body").then(($body) => {
      if ($body.find(this.errorAlert).length) {
        cy.get(this.errorAlert).should("be.visible");
      } else {
        cy.contains(this.requiredText).should("be.visible");
      }
    });
  }

  clickForgotPassword(){
    this.click(this.forgotPasswordBtn)
  }

  verifyChangePasswordSuccesfully(){
    this.visible(this.titleResetSuccess)
  }
}

export default new LoginPage();
