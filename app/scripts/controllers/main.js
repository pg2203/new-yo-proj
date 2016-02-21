'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.signIn = function () {
      $state.go('dashboard.home');
    };
  });
