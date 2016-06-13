/**
 * @ngdoc function
 * @name app.route:przedmioty-ksztalceniaRoute
 * @description
 * # przedmioty-ksztalceniaRoute
 * Route of the app
 */

angular.module('przedmioty-ksztalcenia')
	.config(['$stateProvider', function ($stateProvider) {
        'use strict';
		$stateProvider
			.state('przedmioty-ksztalcenia', {
				url:'/przedmioty-ksztalcenia',
				templateUrl: 'app/modules/przedmioty-ksztalcenia/przedmioty-ksztalcenia.html',
				controller: 'PrzedmiotyKsztalceniaCtrl',
				controllerAs: 'vm'
			})
            .state('przedmiot-ksztalcenia', {
                url:'/przedmiot-ksztalcenia/:id',
                templateUrl: 'app/modules/przedmioty-ksztalcenia/przedmiot-ksztalcenia.html',
                controller: 'PrzedmiotKsztalceniaCtrl',
                controllerAs: 'vm'
            })
            .state('przedmiot-ksztalcenia-szczegoly', {
                url:'/przedmiot-ksztalcenia-szczegoly/:id',
                views: {
                    '':
                    {
                        templateUrl: 'app/modules/przedmioty-ksztalcenia/przedmiot-ksztalcenia-szczegoly.html',
                        controller: 'PrzedmiotKsztalceniaSzczegolyCtrl',
                        controllerAs: 'vm'
                    }
                }
            });
	}]);
