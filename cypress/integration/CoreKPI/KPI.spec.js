const { stageConfig } = require('../../../configs/stageEnvsConfig');
const stageEnv = stageConfig['demoStage'];


describe('KPI flow', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    beforeEach(function () {
        cy.viewport(1280, 720);
        cy.visit(stageEnv.url);
        cy.login('nicholas+luffy@play-consult.net', 'Perform0501%');
        cy.wait(3000);
        cy.checkWhatsNew();
    })
    

    it('KPI specific flow', () => {

        cy.get('.dropdown__toggle').click();
        cy.get('button').contains('Manage Teams').click();


    })

})