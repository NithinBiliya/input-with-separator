// Code goes here

angular.module('myApp', ['input.with.separator'])
  .controller('myBasicController', [function() {
      var vm = this;

      vm.assignGlobal=function(num) {
        vm.foo=num;
      }
      vm.assignIndian=function(num) {
        vm.doo=num;
      }

  }])
