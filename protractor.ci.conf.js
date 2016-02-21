/* global jasmine, exports, require, browser */
'use strict';

exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // chromeDriver: './node_modules/protractor/selenium/chromedriver',

    seleniumServerJar: './node_modules/selenium-standalone/.selenium/selenium-server/2.48.2-server.jar',

    // Spec patterns are relative to the location of this config.
    specs: [
        './e2e/**/{,*/}*_spec.js'
    ],

    capabilities: {
        'browserName': 'firefox',
        firefoxOptions: {
            'binary': '/Applications/Firefox.app/Contents/MacOS/firefox-bin'
        }
    },

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:9000/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: function () {},
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 60000
    },

    onPrepare: function () {

        browser.driver.manage().window().setSize(1080, 1920);

        var jasmineReporters = require('jasmine-reporters');

        var tapReporter = new jasmineReporters.TapReporter({
            consolidateAll: true
        });

        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'coverage/e2e'
        });

        jasmine.getEnv().addReporter(tapReporter);
        jasmine.getEnv().addReporter(junitReporter);

    }

};
