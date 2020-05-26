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
        cy.login('nicholas+luffy@play-consult.net', 'Perform&0601');
        cy.wait(3000);
        cy.checkWhatsNew();
    })
    

    it('Pre-Huddle Morning Flow Sanity Check', () => {
        
        cy.get('nav').within(() => {
            cy.get('[id="nav-bar-Pre huddle"]').click();
        })
        cy.get('div').contains('I’m getting started!').click();
        cy.get('.preHuddle__title').contains('Daily Goal').should('be.visible');
        //Should have goal from last working day or last goal
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Update your team\'s performance').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Update your performance').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Let\'s set your teams targets').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Let\'s set your targets').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Here\'s a brief glance of your week so far').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Daily Goal').should('be.visible');
        //should show todays date
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Team Posts').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('How are you feeling today,').should('be.visible');
        cy.get('button').contains('COMPLETE').click();

        cy.url().should('include', '/dashboard')

    })

    it('Pre-Huddle Evening Flow Sanity Check', () => {

        cy.get('nav').within(() => {
            cy.get('[id="nav-bar-Pre huddle"]').click();
        })
        cy.get('div').contains('I’m winding down…').click();
        cy.get('.preHuddle__title').contains('Daily Goal').should('be.visible');
        //should show todays Daily Goal
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Update your team\'s performance').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Update your performance').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Let\'s set your teams targets').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Let\'s set your targets').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Here\'s a brief glance of your week so far').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Daily Goal').should('be.visible');
        //should show tomorrows date
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Team Posts').should('be.visible');
        cy.get('button').contains('NEXT').click();

        cy.get('.preHuddle__title').contains('Don’t forget to tell your team how you’re feeling').should('be.visible');
        cy.get('button').contains('COMPLETE').click();

        cy.url().should('include', '/dashboard')

    })

})