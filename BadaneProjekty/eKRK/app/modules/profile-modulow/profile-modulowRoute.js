/**
 * @ngdoc function
 * @name app.route:profilemodulowRoute
 * @description
 * # profilemodulowRoute
 * Route of the app
 */

angular.module('profile-modulow')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('profile-modulow', {
				url:'/moduly-ksztalcenia/profile-modulow',
				templateUrl: 'app/modules/profile-modulow/profile-modulow.html',
				controller: 'ProfileModulowCtrl',
				controllerAs: 'vm'
			});
	}]);
