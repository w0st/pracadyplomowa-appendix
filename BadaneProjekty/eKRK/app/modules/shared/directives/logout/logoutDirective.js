(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:logoutDirective
	* @description
	* # logoutDirective
	* Directive of the app
	*/
angular
		.module('app')
		.directive('directiveLogout', logout);

		function logout () {

			var directive = {
				link: link,
				restrict: 'EA',
				controller: 'LogoutCtrl',
                controllerAs: 'logoutCtrl',
				templateUrl:'app/modules/shared/directives/logout/logout.html',
                replace: true

			};

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
