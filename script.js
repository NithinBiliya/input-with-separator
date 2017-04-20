// Code goes here

angular.module('myApp', ['input.with.separator'])
  .controller('myCtrl', ['$scope', function($scope) {

      $scope.assignGlobal=function(num) {
        $scope.foo=num;
      }
      $scope.assignIndian=function(num) {
        $scope.doo=num;
      }

  }])