const config = {
    staging: {
        user: 'test',
        pass: 'test'
    },
    prod: {
        user: 'prdtest',
        pass: 'prdtest'
    },
}

const currentEnv = process.env['PERFORM_TEST_ENV'];

const configToUse = config[currentEnv];

console.log(configToUse);


