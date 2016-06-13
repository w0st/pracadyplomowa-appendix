angular.module('program-studiow')
	.config(['$stateProvider', function ($stateProvider) {
        'use strict';
		$stateProvider
			.state('program-studiow', {
				url:'/program-studiow',
				templateUrl: 'app/modules/program-studiow/program-studiow.html',
				controller: 'ProgramStudiowCtrl',
				controllerAs: 'vm'
			});
	}]);
