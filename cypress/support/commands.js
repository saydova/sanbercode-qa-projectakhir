import LoginPage from "../pages/LoginPage";

Cypress.Commands.add("openLogin", () => {
  LoginPage.visit();
});

Cypress.Commands.add("login", (username, password) => {
  LoginPage.inputUsername(username);
  LoginPage.inputPassword(password);
  LoginPage.submit();
});
