angular.module("arrayApp").controller("arrayController", function($scope, arrayService) {
	$scope.data = arrayService.myData;

	$scope.addNewPerson = function(name, email) {
		arrayService.addNewPerson(name, email);
	}

	})