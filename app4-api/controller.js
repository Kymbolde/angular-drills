angular.module("apiApp").controller("mainController", function($scope, mainService) {
	
mainService.getSmurfs().then(function(data) {
		$scope.smurfs = data;
	});

})