export class LoginPage {
  loginInput = "[data-testid=login-email]";
  passwordInput = "[data-testid=login-password]";
  logInButton = "[data-testid=button-submit]";
  topMenu = "[data-testid=top-menu-dropdown-account]";

  /**
   * @description Logins to app
   * @param {string} login - User login
   * @param {string} password - User password
   * @example loginPage.loginWithCredentials();
   */
  loginWithCredentials(
    login = Cypress.env("login"),
    password = Cypress.env("password")
  ) {
    cy.session(
      [login, password],
      () => {
        cy.visit("/");
        cy.get(this.loginInput).as("usernameInput");
        cy.get("@usernameInput").type(login);
        cy.get("@usernameInput").should("have.value", login);
        cy.get(this.passwordInput).as("passwordInput");
        cy.get("@passwordInput").type(password);
        cy.get("@passwordInput").should("have.value", password);
        cy.get(this.logInButton).click();
        cy.get(this.topMenu).should("be.visible");
      },
      { cacheAcrossSpecs: true }
    );
  }
}
