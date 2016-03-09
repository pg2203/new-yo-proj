'use strict';
angular.module('myYoProjectApp')
  .controller('AdminDashboardCtrl', function (NavigationService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function callData(){
      this.data = NavigationService.getData();
    }
    this.callData = callData;
  });
