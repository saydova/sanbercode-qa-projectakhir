import BasePage from "./BasePage";

class LoginPage extends BasePage {
  username = "input[name='username']";
  password = "input[name='password']";
  loginBtn = "button[type='submit']";

  errorAlert =
    "div[role='alert'], .oxd-input-field-error, .error, .validation-error";
  requiredText = "Required";

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
}

export default new LoginPage();
