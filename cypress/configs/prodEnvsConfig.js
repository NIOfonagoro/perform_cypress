const CURRENT_ENV_STRING = 'demoProd';
const password1 = 'Perform#0401';
const password2 = 'Performplus123';

const prodConfig = {
    demoProd: {
        url: 'https://demo-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1

            },
            /* {
                name: "Team manager",
                username: "nicholas+luffy@play-consult.net",
                isTeamLeader: true,
                password: password1
            }, */
            {
                name: "Team Leader",
                username: "nicholas+luffy@play-consult.net",
                isTeamLeader: true,
                password: password1
            },
            {
                name: "Employee",
                username: "nicholas+nami@play-consult.net",
                password: password1
            }
        ]
    },

    absaProd: {
        url: 'https://absa-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1

            },
            {
                name: "Team Manager",
                username: "absamanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "absaleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "absaemployee@perform.plus",
                password: password2
            }
        ]
    },

    adeccoProd: {
        url: 'https://adecco-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "adeccomanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "adeccoleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "adeccoemployee@perform.plus",
                password: password2
            }
        ]
    },

    bpProd: {
        url: 'https://bp-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /* {
                name: "Team Manager",
                username: "bpmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "bpleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "bpemployee@perform.plus",
                password: password2
            } */
        ]
    },

    haringeyProd: {
        url: 'https://haringey-profile.performplus.pwc.com/',
        users: [
            /* {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            }, */
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "haringeymanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "haringeyleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "haringeyemployee@perform.plus",
                password: password2
            }
        ]
    },

    harrowProd: {
        url: 'https://harrow-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /* {
                name: "Team Manager",
                username: "harrowmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "harrowleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "harrowemployee@perform.plus",
                password: password2
            } */
        ]
    },

    lambethProd: {
        url: 'https://lambeth-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /* {
                name: "Team Manager",
                username: "lambethmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "lambethleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "lambethemployee@perform.plus",
                password: password2
            } */
        ]
    },

    operateProd: {
        url: 'https://operate-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /* {
                name: "Team Manager",
                username: "operatemanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "operateleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "operateemployee@perform.plus",
                password: password2
            } */
        ]
    },

    omfProd: {
        url: 'https://omf-profile.performplus.pwc.com/',
        users: [
            /* {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "omfmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "omfleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "omfemployee@perform.plus",
                password: password2
            } */
        ]
    },

    pcseProd: {
        url: 'https://pcse-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "pcsemanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "pcseleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "pcseemployee@perform.plus",
                password: password2
            }
        ]
    },

    perftestProd: {
        url: 'https://perftest-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /* {
                name: "Team Manager",
                username: "perftestmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "perftestleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "perftestemployee@perform.plus",
                password: password2
            } */
        ]
    },

    pwcukProd: {
        url: 'https://pwcuk-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /*  {
                 name: "Team Manager",
                 username: "pwcukmanager@perform.plus",
                 password: password2
 
             },
             {
                 name: "Team Leader",
                 username: "pwcukleader@perform.plus",
                 isTeamLeader: true,
                 password: password2
             },
             {
                 name: "Employee",
                 username: "pwcukemployee@perform.plus",
                 password: password2
             } */
        ]
    },

    pwcnzProd: {
        url: 'https://pwcnz-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            /* {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "pwcnzmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "pwcnzleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "pwcnzemployee@perform.plus",
                password: password2
            } */
        ]
    },

    rotherhamProd: {
        url: 'https://rotherham-profile.performplus.pwc.com/',
        users: [
            /* {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            }, */
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "rotherhammanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "rotherhamleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "rotherhamemployee@perform.plus",
                password: password2
            }
        ]
    },

    sageProd: {
        url: 'https://sage-profile.performplus.pwc.com/',
        users: [
            /* {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "sagemanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "sageleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "sageemployee@perform.plus",
                password: password2
            } */
        ]
    },

    southernWaterProd: {
        url: 'https://southernwater-profile.performplus.pwc.com/',
        users: [
            /* {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "southernmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "southernleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "southernemployee@perform.plus",
                password: password2
            } */
        ]
    },

    tdProd: {
        url: 'https://td-profile.performplus.pwc.com/',
        users: [
            {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            },
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            /* {
                name: "Team Manager",
                username: "tdmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "tdleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "tdemployee@perform.plus",
                password: password2
            } */
        ]
    },

    walsallProd: {
        url: 'https://walsall-profile.performplus.pwc.com/',
        users: [
            /* {
                name: "Admin",
                username: "admin@perform.plus",
                password: password1

            }, */
            {
                name: "Coach",
                username: "coach@perform.plus",
                password: password1
            },
            {
                name: "Team Manager",
                username: "walsallmanager@perform.plus",
                password: password2

            },
            {
                name: "Team Leader",
                username: "walsallleader@perform.plus",
                isTeamLeader: true,
                password: password2
            },
            {
                name: "Employee",
                username: "walsallemployee@perform.plus",
                password: password2
            }
        ]
    }
};

module.exports = {
    CURRENT_ENV_STRING,
    prodConfig,
    currentConfig: prodConfig[CURRENT_ENV_STRING]
};