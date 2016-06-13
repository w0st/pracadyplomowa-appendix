(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.service:authorisationService
	* @description
	* # authorisationService
	* Service of the app
	*/
angular
		.module('authorisation')
		.factory('AuthorisationService', Authorisation);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Authorisation.$inject = ['$localStorage'];

		function Authorisation ($localStorage) {
            return {
                getToken: function() {
                    return $localStorage.token;
                },
                setToken: function(token) {
                    $localStorage.token = token;
                },
                deleteToken: function() {
                    delete $localStorage.token;
                }
            };
		}

})();
