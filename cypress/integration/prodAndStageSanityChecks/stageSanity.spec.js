const { currentConfig } = require('../../../configs/stageEnvsConfig');
const demoStageUrl = currentConfig.url;

describe('Navbar/Page Functionaity', () => {

    before(function () {
        cy.viewport(1280, 720);
        cy.visit(demoStageUrl);

    })

    it('should display error message', () => {
        cy.login('nicholas+luffy@play-consult.net', 'Perform#0401');

        cy.url().should('include', 'https://demo-stage-profile.performplus.pwc.com');
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
