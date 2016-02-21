// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-06-22 using
// generator-karma 1.0.0

'use strict';
module.exports = function (config) {

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // base path, that will be used to resolve files and exclude
        basePath: '.',

        // testing framework to use (jasmine/mocha/qunit/...)
        // as well as any additional frameworks (requirejs/chai/sinon/...)
        frameworks: [
            'jasmine'
        ],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/angular-translate/angular-translate.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-mocks/angular-mocks.js',

            // endbower
            'app/scripts/app.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'test/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [
            'app/scripts/vendors/*.js',
            'app/scripts/vendors/**/*.js'
        ],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS2'
        ],

        // Code coverage report
        reporters: ['spec', 'coverage'],

        preprocessors: {
            'app/scripts/**/!(*.spec).js': ['coverage']
        },

        coverageReporter: {
            // specify a common output directory
            dir: 'coverage',
            reporters: [
                // reporters not supporting the `file` property
                {
                    type: 'html',
                    subdir: '.'
                }, {
                    type: 'json',
                    subdir: 'json'
                }, {
                    type: 'text-summary'
                }
            ]
        },

        specReporter: {
            maxLogLines: 5,              // limit number of lines logged per test
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false,       // do not print information about failed tests
            suppressPassed: false,       // do not print information about passed tests
            suppressSkipped: true        // do not print information about skipped tests
        },

        // the configuration for threshold
        // thresholdReporter:{
        //   statements: 60,
        //   branches: 60,
        //   functions: 60,
        //   lines: 60
        // },

        // Which plugins to enable
        plugins: [
            'karma-phantomjs2-launcher',
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-coverage' // required for coverage
            // ,'karma-threshold-reporter'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
