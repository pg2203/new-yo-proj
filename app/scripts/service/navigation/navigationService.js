'use strict';

angular.module('myYoProjectApp')
  .service('NavigationService', function (ChannelAPI) {

    var getMenus = function () {
      return ChannelAPI.getMenus();
    };

    return {
      getMenus: getMenus
    };
  });
