const { currentConfig } = require('../../../configs/stageEnvsConfig');
const { qaConfig } = require('../../../configs/qatestConfig');
const demoStageUrl = currentConfig.url;
const qaStageEnvDetails = qaConfig.stage;
describe('Navbar/Page Functionaity', () => {

    before(function () {
        cy.viewport(1280, 720);
        cy.visit(qaStageEnvDetails.url);

    })

    it('navigate to all pages', () => {
        cy.login(qaStageEnvDetails.adminUser.email, qaStageEnvDetails.password);

        cy.wait(3000);
        cy.url().should('include', '/dashboard');
        //cy.url().contains(/^b\w+/);
        cy.title().should('eq', 'PerformPlus');

        cy.get('#nav-bar-Dashboard').click();
        cy.wait(1000);
        cy.url().should('include', 'dashboard');

        /* cy.get('#nav-bar-Pre\ huddle').click();
        cy.wait(1000);
        cy.url().should('include', 'pre-huddle'); */

        cy.get('#nav-bar-Huddle').click();
        cy.wait(1000);
        cy.url().should('include', 'huddle');

        /* cy.get('#nav-bar-Team Performance').click();
        cy.wait(1000);
        cy.url().should('include', 'edit-stats'); */

        cy.get('#Arcade').click();
        cy.wait(1000);
        cy.url().should('include', 'spotlight-challenges');

        cy.get('#Skills').click();
        cy.wait(1000);
        cy.url().should('include', 'skills');



    })
})
