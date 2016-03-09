'use strict';

/**
 * @ngdoc overview
 * @name myYoProjectApp
 * @description
 * # myYoProjectApp
 *
 * Main module of the application.
 */
/*angular
  .module('myYoProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/transfers', {
        templateUrl: 'views/transfers/transfer.html',
        controller: 'TransferCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
angular.module("myYoProjectApp", [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'pascalprecht.translate',
  'angular-loading-bar'
  ])
  .config(function($stateProvider, $urlRouterProvider, $translateProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider
      .state("main", {
        url: "/main",
        views: {
          "main": {
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
          }
        }
      })
    .state("dashboard", {
      url:"/dashboard",
      abstract: true,
      views:{
        "main": {
          templateUrl: "views/dashboard/dashboard.html"
        }
      }
    })
      .state("admin", {
        url:"/admin",
        views:{
          "main": {
            templateUrl: "scripts/adminDashboard/admindashboard.html",
            controller: 'AdminDashboardCtrl as AdminDashboardCtrl'
          }
        }
      })
    .state("logout", {
      url:"/main",
      views:{
        "main": {
          templateUrl: "views/main.html"
        }
      }
    });
    $translateProvider.useStaticFilesLoader({
      prefix: 'lang/locale-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en-CA');
    $translateProvider.fallbackLanguage('en-CA');

    // sanitizes HTML in the translation text using $sanitize
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
})
  .config(function(cfpLoadingBarProvider) {
    //cfpLoadingBarProvider.includeBar = true;
    //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>'
  });


