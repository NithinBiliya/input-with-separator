// Code goes here

angular.module('myApp', ['input.with.separator'])
  .controller('myBasicController', ['$log',function($log) {
      var vm = this;

      vm.assignGlobal=function(num) {
        vm.foo=num;
      }
      vm.assignIndian=function(num) {
        vm.doo=num;
      }

      vm.blurHandler=function(para1,para2) {
        $log.info("inside blurHandler - "+para1+" - "+para2);
      }
      vm.focusHandler=function(para) {
        $log.info("inside focusHandler - "+para);
      }

  }])
