var app = angular.module("mainApp", []);

mainApp.controller('CalcController', function($scope) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
       $scope.result = CalcService.square($scope.number);
    }
}); 