angular.module("filterApp").controller("mainController", function($scope, mainService) {
	
	$scope.people = mainService.getData();

})