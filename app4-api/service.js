angular.module("apiApp").service('mainService', function($http) {
	var baseUrl = 'http://smurfs.devmounta.in/smurfs/';

	this.getSmurfs = function() {
		return $http.get(baseUrl).then(function(smurfResponse) {
			return smurfResponse.data;
		})
	}
})