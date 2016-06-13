(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:header-notificationDirective
	* @description
	* # header-notificationDirective
	* Directive of the app
	*/
angular
		.module('app')
		.directive('headerNotification', headerNotification);

		function headerNotification () {

			var directive = {
				link: link,
				restrict: 'EA',
				templateUrl:'app/modules/shared/directives/header-notification/header-notification.html',
                replace: true,
			};

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
