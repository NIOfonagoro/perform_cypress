describe('My First Test', function () {
    it('Does not do much!', function () {
        cy.visit('https://demo-stage-profile.performplus.pwc.com/')
        cy.get(':nth-child(2) > .form-control').type(`nicholas@play-consult.net`)
        cy.get(':nth-child(3) > .form-control').type(`Perform0102$`)
        cy.get('.btn').click()

        cy.url().should('include', '/dashboard')
        //cy.get('url').should('contain.te','dashboard')
    })
})