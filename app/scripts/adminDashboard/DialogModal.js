'use strict';

angular.module('myYoProjectApp')
  .controller('DialogModalCtrl', function ($scope, $modalInstance, ModalParameters) {
    $scope.modalMessage = ModalParameters.modalMessage;
    $scope.confirmText = ModalParameters.confirmText || 'answer-yes';
    $scope.cancelText = ModalParameters.cancelText || 'answer-no';

    function closeModal() {
      $modalInstance.dismiss();
    }

    function confirm() {
      $modalInstance.close();
    }

    $scope.closeModal = closeModal;
    $scope.confirm = confirm;
  });

