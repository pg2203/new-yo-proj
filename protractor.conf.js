/* global jasmine, exports, require, browser */
'use strict';

exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    seleniumServerJar: './node_modules/selenium-standalone/.selenium/selenium-server/2.48.2-server.jar',

    // Spec patterns are relative to the location of this config.
    specs: [
        './e2e/**/{,*/}*_spec.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                '--disable-application-cache',
                '--disable-cache',
                '--disable-extensions',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off'
            ]
        }
    },

    // Test Suites
    suites: {
        main: './e2e/main/{,*/}*_spec.js'
    },

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:9000',

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

        var jasmineReporters = require('jasmine-reporters');
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        var tapReporter = new jasmineReporters.TapReporter({
            consolidateAll: true
        });

        var htmlReporter = new Jasmine2HtmlReporter({
            takeScreenshots: false,
            takeScreenshotsOnlyOnFailures: true,
            savePath: './coverage/e2e/',
            screenshotsFolder: 'images',
            filePrefix: 'index',
            consolidate: true,
            consolidateAll: true
        });

        jasmine.getEnv().addReporter(tapReporter);
        jasmine.getEnv().addReporter(htmlReporter);
    }

};
