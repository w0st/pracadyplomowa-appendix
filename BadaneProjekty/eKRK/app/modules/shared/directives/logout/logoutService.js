(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:authenticationService
     * @description
     * # authenticationService
     * Service of the app
     */
    angular
        .module('app')
        .factory('LogoutService', Logout);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Logout.$inject = ['$resource', '$http', 'CONFIG', 'AuthorisationService'];

    function Logout ($resource, $http, CONFIG, AuthorisationService) {
        return {
            getUser: function() {
                return $resource(CONFIG.API_URL + "current_user").get().$promise;
            },
            logOut: function(token) {
                // logout from devise
                $http({
                    method : 'GET',
                    url : CONFIG.LOGOUT_URL
                }).then(function (responseDevise) {
                    // revokeToken(token) doorkeeper
                    $http.post(CONFIG.OAUTH_URL + 'revoke', {token: AuthorisationService.getToken()})
                        .then(function (responseDoorkeeper) {
                            // usun token
                            AuthorisationService.deleteToken();
                        });
                });
            }

        };
    }

})();
