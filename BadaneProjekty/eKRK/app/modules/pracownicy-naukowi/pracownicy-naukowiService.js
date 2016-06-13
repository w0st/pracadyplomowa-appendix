(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.service:pracownicy-naukowiService
	* @description
	* # pracownicy-naukowiService
	* Service of the app
	*/
angular
		.module('pracownicy-naukowi')
		.factory('PracownicyNaukowiService', PracownicyNaukowi);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		PracownicyNaukowi.$inject = ['CONFIG', '$resource'];

		function PracownicyNaukowi (CONFIG, $resource) {
            return $resource(
                CONFIG.API_URL + 'pracownicy_naukowi',
                null,
                {
                    'get': {method: 'GET', isArray: true}
                }
            );

		}

})();
