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
    

    it('Pre-Huddle Morning Flow', () => {
        
        cy.get('nav').within(() => {
            cy.get('[id="nav-bar-Pre huddle"]').click();
        })
        cy.get('div').contains('I’m getting started!').click();
        cy.get('h1').contains('Daily Goal').should('be.visible')


    })

    it('Pre-Huddle Evening Flow', () => {

        cy.get('nav').within(() => {
            cy.get('[id="nav-bar-Pre huddle"]').click();
        })
        cy.get('div').contains('I’m winding down…').click();
        cy.get('h1').contains('Daily Goal').should('be.visible');


    })

})