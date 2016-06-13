/**
 * @ngdoc function
 * @name app.route:program-ksztalceniaRoute
 * @description
 * # program-ksztalceniaRoute
 * Route of the app
 */

angular.module('program-ksztalcenia')
	.config(['$stateProvider', function ($stateProvider) {
        'use strict';
		$stateProvider
			.state('program-ksztalcenia', {
				url:'/program-ksztalcenia',
				templateUrl: 'app/modules/program-ksztalcenia/program-ksztalcenia.html',
				controller: 'ProgramKsztalceniaCtrl',
				controllerAs: 'vm'
			});
	}]);
