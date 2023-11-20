/// <reference types="cypress" />

import { LoginPage } from "../support/LoginPage";
describe("My First Test", () => {
  let loginPage;
  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.loginWithCredentials();
  });
  context("Test", () => {
    it("Visits the homepage", () => {
      cy.visit("/workspace/tasks");
      cy.contains("Tasks").should("be.visible");
    });
  });
});
