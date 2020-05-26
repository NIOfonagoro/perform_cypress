const { stageConfig } = require('../../../configs/stageEnvsConfig');

describe('Login Sanity Test for all staging environments', function () {

    for (const envName in stageConfig) {
        const stageEnv = stageConfig[envName];

        describe('Env name: ' + envName, function () {
            stageEnv.users.forEach((user) => {
                it('Logs in with user: ' + user.name, function () {
                    cy.visit(stageEnv.url);
                    cy.get('[name=email]').clear().type(user.username);
                    cy.get('[name=password]').clear().type(user.password);
                    cy.get('[type=submit]').click();

                    cy.url().should('include', 'stage-profile.performplus.pwc.com');
                    cy.title().should('eq', 'PerformPlus');

                    if (user.isTeamLeader) {
                        cy.url().should('include', '/employeeDashboard')
                    } else {
                        cy.url().should('include', '/dashboard')
                    }


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
                })
            });
        })

    }
})