MyApp.controller('ContactController', function ($scope) {
   
  $scope.title = "Contact Us";


  $scope.submitForm = function () {
      if ($scope.myForm.$valid) {
          $scope.displayedStatement = 'Your Response is Recorded';
      } else {
          $scope.displayedStatement = 'Please fill out the Subject field.';
      }
  };

  
  $scope.reset = function () {
      $scope.info2 = '';
      $scope.info3 = '';
      $scope.displayedStatement = ''; 
      $scope.myForm.$setPristine(); 
      $scope.myForm.$setUntouched(); 
  };
});


// Custom validation  
app.directive('myCustomValidation', function () {
  return {
      require: 'ngModel',
      link: function (ngModelCtrl) {
          ngModelCtrl.$parsers.push(function (value) {
             
              var isValid = value && value.trim() !== '';

             
              ngModelCtrl.$setValidity('customValidation', isValid);

              return value;
          });
      }
  };
});
