'use strict';

angular.module('myYoProjectApp')
  .service('NavigationService', function (ChannelAPI) {

    var getMenus = function () {
      return ChannelAPI.getMenus();
    };

    var getData = function () {
      return ChannelAPI.getData();
    };

    return {
      getMenus: getMenus,
      getData: getData
    };
  });
