const { stageConfig } = require('../../configs/stageEnvsConfig');

const stageEnv = stageConfig['qaTestStage'];


describe('Create New User', () => {

    const username = stageEnv.user;
    const password = stageEnv.password

})


//login (which credentials - admin and coach)

//Go to manage users

//create new user

//check they're created - list/database? api query?

//logout

