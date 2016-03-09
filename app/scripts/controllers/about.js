'use strict';

/**
 * @ngdoc function
 * @name myYoProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYoProjectApp
 */
angular.module('myYoProjectApp')
  .controller('AboutCtrl', function (NavigationService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.data = NavigationService.getData();
  });
