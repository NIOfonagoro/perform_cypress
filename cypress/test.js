const config = {
    staging: [
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
            password: "Perform0102$",
            isTeamLeader: true
        },
        {
            name: "Employee",
            username: "nicholas+nami@play-consult.net",
            password: "Perform0102$"
        }
    ],
    prod: {
        user: 'prdtest',
        pass: 'prdtest'
    },
}

const currentEnv = process.env['PERFORM_TEST_ENV'];

const configToUse = config[currentEnv];

console.log(configToUse);


