(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:authorisationCtrl
	* @description
	* # authorisationCtrl
	* Controller of the app
	*/
	angular
		.module('authorisation')
		.controller('AuthorisationCtrl', Authorisation);

		Authorisation.$inject = ['AuthorisationService', '$stateParams', '$state', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Authorisation(AuthorisationService, $stateParams, $state, $timeout) {
			/*jshint validthis: true */
            var token = $stateParams.response.match(/^(.*?)&/)[1];
            AuthorisationService.setToken(token);
            console.log("Token = ", token);
			var vm = this;
            this.token = token;
            $timeout(function() {
                $state.go('home');
            }, 3000);


		}

})();
