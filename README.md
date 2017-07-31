protractor-demo
===============

Demo test application and protractor tests.

Setup
-----

    git clone https://github.com/trae-op/angualt-test-ui-traning.git
    cd angualt-test-ui-traning
    npm install
    cd app/
    bower install

To run
------
Get ChromeDriver set up: Run `./node_modules/.bin/webdriver-manager update`.

Start the test application server with
`node app/expressserver.js`
Or if you're feeling lazy, just `npm start`.

Run the tests with
`node_modules/.bin/protractor test/conf.js`
Or if you're feeling lazy, just `npm test`.

Watch them go!
