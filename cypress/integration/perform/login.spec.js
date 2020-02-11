const demoStage = [
    {
        name: "Admin",
        username: "nicholas+luffy@play-consult.net",
        password: "Perform0102$"
    },
    {
        name: "Team Manager",
        username: "nicholas+zoro@play-consult.net",
        password: "Perform0102$"

    },
    {
        name: "Team Leader",
        username: "nicholas+sanji@play-consult.net",
        password: "Perform0102$"
    },
    {
        name: "Employee",
        username: "nicholas+nami@play-consult.net",
        password: "Perform0102$"
    }
]


describe('Login Test', function () {
    demoStage.forEach((user) => {
        it('Logs in with user: ' + user.name, function () {
            cy.visit(Cypress.env('demo-stage'))
            cy.get('[name=email]').type(user.username)
            cy.get('[name=password]').type(user.password)
            cy.get('[type=submit').click()

            cy.url().should('include', '/dashboard')
        })
    })
})