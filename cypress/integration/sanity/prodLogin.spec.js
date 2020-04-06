const { prodConfig } = require('../../../configs/prodEnvsConfig');

describe('Login Sanity Test for all production environments', function () {

    for (const envName in prodConfig) {
        const prodEnv = prodConfig[envName];

        describe('Env name: ' + envName, function () {
            prodEnv.users.forEach((user) => {
                it('Logs in with user: ' + user.name, function () {
                    cy.visit(prodEnv.url)
                    cy.get('[name=email]').type(user.username)
                    cy.get('[name=password]').type(user.password)
                    cy.get('[type=submit').click()

                    if (user.isTeamLeader) {
                        cy.url().should('include', '/employeeDashboard')
                    } else {
                        cy.url().should('include', '/dashboard')
                    }


                    // Conditional search for "what's new" modal close button
                    cy.get('body').then(body => {
                        if (body.find('.whats-new-button-container').length) {
                            console.log('Found a button!!!! YAY');
                            body.find('.whats-new-button-container').forEach(button => button.click());
                        }
                        else {
                            console.log('no button found!!!')
                        }
                    })
                })
            });
        })

    }
})