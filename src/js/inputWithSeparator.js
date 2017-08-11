(function(){

angular.module('input.with.separator', [])

.directive('inputWithSeparator', function() {
  return {
    restrict: 'E',
    scope: {
      numberSystem: '=',
      model: '=ngModel',
      disabled: '=ngDisabled',
      required: '=ngRequired',
      clazz: '=ngClass'
    },
    require: "?ngModel",
    template: "<input ng-model='value'  ng-change='onChange()' ng-trim='false' ng-disabled='disabled' ng-required='required' ng-class='class'>",
    link: function(scope, element, attrs, ngModel) {

      scope.$watch("model", function() {
        scope.onChange();
      });

      scope.onChange = function() {
        if (!ngModel) return;
        var numberSystem = attrs.numberSystem;
        if (angular.isUndefined(scope.value)) {
          return;
        }
        var inputString = scope.value.toString();
        if (numberSystem == "International") {
          var inputNumber = inputString.replace(/[^0-9.]/g, '');
          var decimalCount = 0;
          var lastChac = "";
          var numberString = "";
          for (var i = 0; i < inputNumber.length; i++) {
            lastChac = inputNumber.charAt(i);
            if (lastChac == ".") {
              if (decimalCount <= 0) {
                numberString += lastChac;
                decimalCount++;
              }
            } else {
              numberString += lastChac;
            }
          }
          var decimalString = "";
          if (decimalCount > 0) {
            decimalString = "." + numberString.split(".")[1];
          }
          numberString = numberString.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          numberString += decimalString;
          scope.value = numberString;
          ngModel.$setViewValue(inputNumber);
        } else if (numberSystem == "Indian") {
          inputNumber = inputString.trim().replace(/[^0-9.]/g, '');
          decimalCount = 0;
          lastChac = "";
          numberString = "";
          for (i = 0; i < inputNumber.length; i++) {
            lastChac = inputNumber.charAt(i);
            if (lastChac == ".") {
              if (decimalCount <= 0) {
                numberString += lastChac;
                decimalCount++;
              }
            } else {
              numberString += lastChac;
            }
          }
          decimalString = "";
          if (decimalCount > 0) {
            decimalString = "." + numberString.split(".")[1];
          }
          numberString = numberString.split(".")[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
          numberString += decimalString;
          scope.value = numberString;
          ngModel.$setViewValue(inputNumber);
        }
      };

      ngModel.$render = function() {
        scope.value = ngModel.$modelValue;
        scope.separatorStyle = ngModel.$separatorStyle;
      };

    }
  };
});

})();
