(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:changelanguageDirective
	* @description
	* # changelanguageDirective
	* Directive of the app
	*/
angular
		.module('app')
		.directive('changeLanguage', changeLanguage);

		function changeLanguage () {

			var directive = {
				link: link,
				restrict: 'EA',
				controller: 'ChangeLanguageCtrl',
                controllerAs: 'languageCtrl',
				templateUrl:'app/modules/shared/directives/change-language/change-language.html',
                replace: true,

			};

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
