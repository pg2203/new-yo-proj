'use strict';

angular.module('myYoProjectApp')
  .config(function ($stateProvider, $urlRouterProvider) {
   // $urlRouterProvider.when('/dashboard', '/dashboard/home');
    $stateProvider
      .state('dashboard.home',{
        parent: 'dashboard',
        url: '/home',
        views: {
          'dashboard':{
            templateUrl: 'views/dashboard/home/home.html'

          }
        }
      })
      .state('dashboard.about', {
        parent: 'dashboard',
        url:'/about',
        views:{
          'dashboard': {
            templateUrl: 'views/dashboard/home/about.html'
          }
        }
      })
  });
