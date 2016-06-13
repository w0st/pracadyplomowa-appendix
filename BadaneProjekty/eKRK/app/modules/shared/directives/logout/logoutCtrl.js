(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:logoutCtrl
	* @description
	* # logoutCtrl
	* Controller of the app
	*/
angular
		.module('app')
		.controller('LogoutCtrl', Logout );

		Logout.$inject = ['LogoutService', 'CONFIG'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Logout(LogoutService, CONFIG) {
			/*jshint validthis: true */
			var logoutCtrl = this;

            logoutCtrl.username = undefined;
            logoutCtrl.CONFIG = CONFIG;

            logoutCtrl.logout = function() {
                LogoutService.logOut();
                logoutCtrl.username = undefined;
            };

            LogoutService.getUser().then(function(response) {
                if (_.has(response, 'email')) {
                    logoutCtrl.username = response.email;
                }
                console.log('response = ', response);
            }, function(reason) {
                console.log('problem = ', reason);
            });


		}

})();
