(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:tokenInterceptorService
     * @description
     * # authorisationService
     * Service of the app
     */
    angular
        .module('authorisation')
        .factory('TokenInterceptorService', TokenInterceptor);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    TokenInterceptor.$inject = ['AuthorisationService', 'CONFIG'];

    function TokenInterceptor (AuthorisationService, CONFIG) {
        return {
            request: function(config) {
                if (config.url.indexOf(CONFIG.RAILS_URL) === 0) {
                    var token = AuthorisationService.getToken();
                    if (_.isString(token)) {
                        console.log("TI: Jest token", token);
                        config.headers.Authorization = "Bearer " + token;
                    } else {
                        console.log("TI: Brak tokena", token);
                    }
                }
                return config;
            }
        };
    }

})();

