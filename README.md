npm init -y
cd /your/project/path
npm install cypress --save-dev

./node_modules/.bin/cypress open
$(npm bin)/cypress open
npm run cypress:open

export PERFORM_TEST_ENV="stg"
export PERFORM_TEST_ENV="prod"
node cypress/test.js
unset GANGGANG 

docker build -t performcypress .