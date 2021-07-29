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

/**
 * Browser authentication
 */

Cypress.Commands.add('login', () => {
    cy.visit('/', {
        auth: {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
        },
    });
});

/**
 * Ignore uncaught exceptions
 * https://docs.cypress.io/api/events/catalog-of-events#App-Events
 */

Cypress.Commands.add('ignoreUncaughtException', () => {
    Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    });
});
