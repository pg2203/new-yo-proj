'use strict';

angular.module('myYoProjectApp')
  .service('ChannelAPI', function ($q, $resource, Endpoints) {

   var getMenus = function () {
     //var url = Endpoints.testUrl;
     var mockMenus = [
       {
         name: 'Home',
         link: 'dashboard.home'
       },
       {
         name: 'About',
         link: 'dashboard.about'
       }
     ];
     var deferred = $q.defer();
     var promise = deferred.promise;
     deferred.resolve(mockMenus);
     return promise;
   };
    return {
      getMenus: getMenus
    };
  });
