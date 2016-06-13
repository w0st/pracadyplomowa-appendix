/**
 * @ngdoc function
 * @name app.route:modulksztalceniaRoute
 * @description
 * # modulksztalceniaRoute
 * Route of the app
 */

angular.module('moduly-ksztalcenia')
	.config(['$stateProvider', function ($stateProvider) {
        'use strict';
		$stateProvider
			.state('modul-ksztalcenia', {
				url:'/moduly-ksztalcenia/modul-ksztalcenia',
				templateUrl: 'app/modules/moduly-ksztalcenia/modul-ksztalcenia.html',
				controller: 'ModulKsztalceniaCtrl',
				controllerAs: 'vm'
			});
	}]);
