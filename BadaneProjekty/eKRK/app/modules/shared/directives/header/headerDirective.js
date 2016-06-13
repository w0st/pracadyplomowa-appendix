(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:headerDirective
	* @description
	* # headerDirective
	* Directive of the app
	*/
angular
		.module('app')
		.directive('header', header);

		function header () {

			var directive = {
				link: link,
				restrict: 'EA',
				templateUrl: 'app/modules/shared/directives/header/header.html',
                replace: true
			};

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
