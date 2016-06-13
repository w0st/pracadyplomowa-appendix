

(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:changelanguageCtrl
	* @description
	* # changelanguageCtrl
	* Controller of the app
	*/
angular
		.module('app')
		.controller('ChangeLanguageCtrl', ChangeLanguage );

		ChangeLanguage.$inject = ['$translate', '$localStorage'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function ChangeLanguage($translate, $localStorage) {
			/*jshint validthis: true */
			var vm = this;

            vm.getLanguage = function() {
                return $translate.use();
            };

            vm.setLanguage = function(language) {
                $translate.use(language);
                $localStorage.language = language;
            };

		}

})();
