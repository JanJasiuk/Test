// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("enterValueIntoField", (fieldTestId, value) => {
  cy.get(fieldTestId).as("field");
  cy.get("@field").click();
  cy.get("@field").type("{selectall}{backspace}");
  cy.get("@field").type(value);
  cy.get("@field").should(($el) => {
    expect(Cypress.dom.isDetached($el)).to.eq(false);
  });
  cy.get("@field").should("have.value", value);
  cy.get("@field").blur();
});
