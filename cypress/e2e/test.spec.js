/// <reference types="cypress" />

import { LoginPage } from "../support/LoginPage";
import { URL } from "../fixtures/urls";
import { OBJECT_CLASS_NAME } from "../fixtures/testIds";
describe("My First Test", () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.loginWithCredentials();
  });

  context("Test", () => {
    it("Open page", () => {
      cy.visit("/workspace/tasks");
      cy.contains("Tasks").should("be.visible");
    });

    it("Enter value into field", () => {
      cy.visit(URL);
      cy.enterValueIntoField(`[data-testid=${OBJECT_CLASS_NAME}]`, "Name");
    });

    it("Enter value into field on Ipad-2", () => {
      cy.viewport("ipad-2");
      cy.visit(URL);
      cy.enterValueIntoField(`[data-testid=${OBJECT_CLASS_NAME}]`, "Name");
    });

    it("Performance test", () => {
      cy.clock();
      cy.get("#button1").click();
      cy.get("#button2").click();
      cy.get("#button3").click();
      cy.clock().then((clock) => {
        const elapsedTime = clock.elapsed;

        expect(elapsedTime).to.be.lessThan(500);
      });
    });

    it("Send POST request", () => {
      cy.request({
        url: Cypress.config().baseUrl + urls.apiLogInUrl,
        method: "GET",
        retryOnStatusCodeFailure: true,
        retryOnNetworkFailure: true,
      }).then((res) => {
        expect(res.status).equal(StatusCodes.OK);
        const body = res.body;

        cy.wrap({ jwt: body.access, refresh: body.refresh });
      });
    });
  });
});
