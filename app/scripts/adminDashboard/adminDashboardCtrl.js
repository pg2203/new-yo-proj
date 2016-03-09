'use strict';
angular.module('myYoProjectApp')
  .controller('AdminDashboardCtrl', function ($modal, NavigationService) {
    var warningModalInstance;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function callData(){
      this.data = NavigationService.getData().then(function (data) {
        showDialogModal();
      });

    }
    function showDialogModal() {
      var dialogModalInstance;
      dialogModalInstance = $modal.open({
        backdrop: 'static',
        windowClass: 'dialog-model',
        templateUrl: 'scripts/adminDashboard/dialogModal.html',
        controller: 'DialogModalCtrl',
        resolve: {
          'ModalParameters': function () {
            return {
              modalMessage: 'my message'
            };
          }
        }
      });
      return dialogModalInstance.result;
    }
    this.callData = callData;
    this.showDialogModal = showDialogModal;
  });
