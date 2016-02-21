'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myYoProjectApp'));

  var MainCtrl,
    scope,state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $state) {
    scope = $rootScope.$new();
    state = $state;
    spyOn(state,'go');
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should call function signIn', function () {
    scope.signIn();

    expect(state.go).toHaveBeenCalledWith('dashboard.home');
  });


});
