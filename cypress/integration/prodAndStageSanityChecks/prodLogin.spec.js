const { prodConfig } = require('../../configs/prodEnvsConfig');

describe('Login Sanity Test for all production environments', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    for (const envName in prodConfig) {
        const prodEnv = prodConfig[envName];

        describe('Env name: ' + envName, function () {
            prodEnv.users.forEach((user) => {
                it('Logs in with user: ' + user.name, function () {
                    cy.visit(prodEnv.url);
                    cy.get('[name=email]').clear().type(user.username);
                    cy.get('[name=password]').clear().type(user.password);
                    cy.get('[type=submit]').click();

                    cy.wait(3000);
                    cy.url().should('include', '/dashboard');
                    cy.title().should('eq', 'PerformPlus');

                    // Gets rid of Terms and Conditions Dialog for new users
                    /*
                    cy.wait(2000);
                    cy.get('[class="btn dialog-form__button"]').click();
                    cy.wait(2000);
                    cy.get('[class="btn btn-accept"]').click();

                    */

                    // Gets rid of Whats New Dialog for new updates
                    /*
                    cy.wait(1000);
                    cy.get('[class="buttonExtra"]').click();
                    */

                    // Conditional search for "what's new" modal close button
                    /* cy.get('body').then(body => {
                        if (body.find('.whats-new-button-container').length) {
                            console.log('Found a button!!!! YAY');
                            body.find('.whats-new-button-container').forEach(button => button.click());
                        }
                        else {
                            console.log('no button found!!!')
                        }
                    }) */
                    
                    /*if (user.isTeamLeader) {
                        cy.url().should('include', '/employeeDashboard')
                    } else {
                        cy.url().should('include', '/dashboard')
                    }*/

                })
            });
        })

    }
})