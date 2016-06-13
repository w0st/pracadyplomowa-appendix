(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.service:macierzsladowaniaService
	* @description
	* # macierzsladowaniaService
	* Service of the app
	*/
angular
		.module('macierzsladowania')
		.factory('MacierzSladowaniaService', MacierzSladowania);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		MacierzSladowania.$inject = ['$resource', 'CONFIG'];

		function MacierzSladowania ($resource, CONFIG) {
            return {
                set: function(macierz) {
                    return $resource(CONFIG.API_URL + "obszarowe_efekty_ksztalcenia/ustaw_powiazania", null, {
                        'update': {method: 'PUT'}
                    }).update(
                        {},
                        { powiazania: macierz }
                    ).$promise;
                },
                // jednoczesnie jest to macierz sladowania!
                getObszaroweEfektyKsztalcenia: function() {
                    return $resource(CONFIG.API_URL + "obszarowe_efekty_ksztalcenia", {}, {get: {isArray: true}}).get().$promise;
                },
                getKierunkoweEfektyKsztalcenia: function() {
                    return $resource(CONFIG.API_URL + "kierunkowe_efekty_ksztalcenia", {}, {get: {isArray: true}}).get().$promise;
                }
            };

		}

})();
