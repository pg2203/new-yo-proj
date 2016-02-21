'use strict';

angular.module('myYoProjectApp')
  .controller('TopNavCtrl', function ($scope, NavigationService) {
    NavigationService.getMenus().then(function (results) {
      $scope.navItems = results;
    });

    $scope.selected = $scope.selected || 0;
    $scope.select = function (index) {
      $scope.selected = index;
    };
  })
  .directive('topNav', function () {
    return {
      templateUrl: 'views/topNav.html',
      restrict: 'E',
      controller: 'TopNavCtrl'
    };

  });
