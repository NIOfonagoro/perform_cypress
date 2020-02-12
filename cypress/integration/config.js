const CURRENT_ENV_STRING = 'absaProd';

const fullConfig = {
    /*
    staging: {
        url: 'https://demo-stage-profile.performplus.pwc.com/',
        password: 'Perform0102$',
        users: [
            {
                name: "Admin",
                username: "nicholas+luffy@play-consult.net"

            },
            {
                name: "Team Manager",
                username: "nicholas+zoro@play-consult.net"

            },
            {
                name: "Team Leader",
                username: "nicholas+sanji@play-consult.net",
                isTeamLeader: true
            },
            {
                name: "Employee",
                username: "nicholas+nami@play-consult.net"
            }
        ]
    },
    
    absaProd: {
        url: 'https://absa-profile.performplus.pwc.com/',
        password: 'Performplus123',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus"

            },
            {
                name: "Team Manager",
                username: "absamanager@perform.plus"

            },
            {
                name: "Team Leader",
                username: "absaleader@perform.plus",
                isTeamLeader: true
            },
            {
                name: "Employee",
                username: "absaemployee@perform.plus"
            }
        ]
    },
    */
    adeccoProd: {
        url: 'https://adecco-profile.performplus.pwc.com/',
        password: 'Performplus123',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: "Perform0102$"

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: "Perform0205!"
            },
            {
                name: "Team Manager",
                username: "adeccomanager@perform.plus"

            },
            {
                name: "Team Leader",
                username: "adeccoleader@perform.plus",
                isTeamLeader: true
            },
            {
                name: "Employee",
                username: "adeccoemployee@perform.plus"
            }
        ]
    },

    aibProd: {
        url: 'https://adecco-profile.performplus.pwc.com/',
        password: 'Performplus123',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: "Perform0102$"

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: "Perform0102$"
            },
            {
                name: "Team Manager",
                username: "aibmanager@perform.plus"

            },
            {
                name: "Team Leader",
                username: "aibleader@perform.plus",
                isTeamLeader: true
            },
            {
                name: "Employee",
                username: "aibemployee@perform.plus"
            }
        ]
    },

    busOpsProd: {
        url: 'https://bus-ops-profile.performplus.pwc.com/',
        password: 'Performplus123',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: "Perform0102$"

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: "Perform0102$"
            },
            {
                name: "Team Manager",
                username: "busopsmanager@perform.plus"

            },
            {
                name: "Team Leader",
                username: "busopsleader@perform.plus",
                isTeamLeader: true
            },
            {
                name: "Employee",
                username: "busopsemployee@perform.plus"
            }
        ]
    }
};

module.exports = {
    CURRENT_ENV_STRING,
    fullConfig,
    currentConfig: fullConfig[CURRENT_ENV_STRING]
};


module.exports = {
    CURRENT_ENV_STRING,
    fullConfig,
    currentConfig: fullConfig[CURRENT_ENV_STRING]
};