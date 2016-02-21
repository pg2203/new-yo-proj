'use strict';

angular.module('myYoProjectApp')
  .service('Endpoints', function () {

    var menusUrl = '/navgiation/getMenus';

    return {
      menusUrl: menusUrl
    };
  });
