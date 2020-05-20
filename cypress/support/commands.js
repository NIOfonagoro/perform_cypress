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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('[name=email]').type(username)
    cy.get('[name=password]').type(password)
    cy.get('[type=submit]').click()

});

Cypress.Commands.add('checkWhatsNew', () => {
    
    //Conditional search for "what's new" modal close button
    cy.wait(3000);
    // cy.get('body').then(body => {
    //     if (body.find('.whats-new-button-container')) {
    //         // console.log('Found a button!!!! YAY');
    //         // cy.get('.buttonExtra').click();
    //     }
    //     else {
    //         // console.log('no button found!!!')
    //     }
    // })
});
