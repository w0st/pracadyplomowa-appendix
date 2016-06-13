/**
 * @ngdoc function
 * @name app.route:modulyksztalceniaRoute
 * @description
 * # modulyksztalceniaRoute
 * Route of the app
 */

angular.module('moduly-ksztalcenia')
	.config(['$stateProvider', function ($stateProvider) {
        'use strict';
		$stateProvider
			.state('moduly-ksztalcenia', {
				url:'/moduly-ksztalcenia',
				templateUrl: 'app/modules/moduly-ksztalcenia/moduly-ksztalcenia.html',
				controller: 'ModulyKsztalceniaCtrl',
				controllerAs: 'vm'
			});
	}]);
