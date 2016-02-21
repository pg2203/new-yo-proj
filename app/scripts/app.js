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
  'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider){
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
    .state("logout", {
      url:"/main",
      views:{
        "main": {
          templateUrl: "views/main.html"
        }
      }
    });
});


