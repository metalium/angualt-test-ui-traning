var UsersCtrl = function($uibModal, $timeout, $scope) {

  $scope.name = '';

  $scope.usersList = [
    {
      name: 'Kolya'
    },
    {
      name: 'Vasya'
    },
    {
      name: 'Akakiy'
    }
  ];


  $scope.addUser = function() {
    $scope.usersList.push({
      name: $scope.name
    });
  };

  $scope.edit = function() {
    alert('ok');
  };

  $scope.delete = function(index) {
    $scope.usersList.splice(index, 1);
  };


  $scope.openPopup = function(data) {
    var popup = $uibModal.open({
        templateUrl: 'popup.html',
        size: 'sm',
        controller: function($scope, $uibModalInstance) {
          
          $scope.name = '';
          $scope.error = false;

          var check = function(callBack) {
            if ($scope.name !== '') {
                  callBack();
                  $scope.error = false;
                } else {
                  $scope.error = true;
                }
          };


          if (data) {
            $scope.name = data.name;
          }

            $scope.ok = function () {
              if (data) {
          check(function() {
                  $scope.$resolve.items[data.index].name = $scope.name;
                  $uibModalInstance.close($scope.$resolve.items[data.index]);
               });
              } else {
                check(function() {
                  $uibModalInstance.close($scope.name);
                });
             
              }


            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };



        },
        resolve: {
          items: function () {
            return $scope.usersList;
          }
        }
      });    


    popup.result.then(function (selectedItem) {
      if (typeof selectedItem !== 'string') {
      
        $scope.usersList[data.index].name = selectedItem.name;
      } else {
        $scope.usersList.push({
          name: selectedItem
        });
      }

    }, function () {
      console.info('Modal dismissed at: ' + new Date());
    });
  };



};

var users = angular.module('users', ['ui.bootstrap']).
    controller('UsersCtrl', UsersCtrl);
