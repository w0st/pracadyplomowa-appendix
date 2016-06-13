(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.service:przedmioty-ksztalceniaService
	* @description
	* # przedmioty-ksztalceniaService
	* Service of the app
	*/
angular
		.module('przedmioty-ksztalcenia')
		.factory('PrzedmiotyKsztalceniaService', PrzedmiotyKsztalcenia);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

        PrzedmiotyKsztalcenia.$inject = ['$resource', 'CONFIG'];

		function PrzedmiotyKsztalcenia ($resource, CONFIG) {
            return $resource(
                CONFIG.API_URL + 'przedmioty_ksztalcenia/:id',
                { id: '@id' },
                {
                    'get': {method: 'GET'},
                    'getAll': {method: 'GET', isArray: true},
                    'add': {method: 'POST'},
                    'update': {method: 'PUT'},
                    'delete': {method: 'DELETE'}
                }
            );
		}

})();
