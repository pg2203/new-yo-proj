'use strict';

angular.module('myYoProjectApp')
  .service('ChannelAPI', function ($q,$http, $resource, Endpoints) {

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

    function getData(){
      return $http.get('http://jsonplaceholder.typicode.com/posts').success(successCall).error(errorcallback)
    }

    function   successCall(data){
      return data
    }
    function   errorcallback(data){
      return data
    }
    return {
      getMenus: getMenus,
      getData:getData
    };
  });
