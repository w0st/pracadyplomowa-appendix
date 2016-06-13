	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('app')
	.config(['$stateProvider', function ($stateProvider) {
        'use strict';
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
	}]);
