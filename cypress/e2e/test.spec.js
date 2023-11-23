/// <reference types="cypress" />

import { URL } from "../fixtures/urls";
import { OBJECT_CLASS_NAME } from "../fixtures/testIds";
import stx from "../fixtures/stx.json";

describe("My First Test", () => {
  context.only("Search article on blog page", () => {
    before(() => {
      cy.visit("/");
    });

    it("Article has been found in blog pop up", () => {
      cy.contains('[role="menuitem"]', stx.blog).click();
      cy.get(`[id="newSearchId"]`).should("be.visible");
      cy.enterValueIntoField(`[id="newSearchId"]`, "test");
      cy.get('[class="blogSearchSubmit"] a').click();
      cy.get('[class="pBoxSechB"]').within(() => {
        cy.get('[class="postItemBottom"]').should("have.length", 4);
        cy.get('[class="postItemBottom"] a')
          .should("contain", stx.title)
          .and("be.visible");
      });
    });
  });

  context("Example tests", () => {
    it("Enter value into field", () => {
      cy.visit(URL);
      cy.enterValueIntoField(`[data-testid=${OBJECT_CLASS_NAME}]`, "Name");
    });

    it("Enter value into field on Ipad-2", () => {
      cy.viewport("ipad-2");
      cy.visit(URL);
      cy.enterValueIntoField(`[data-testid=${OBJECT_CLASS_NAME}]`, "Name");
    });
  });
});
