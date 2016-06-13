(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:profilemodulowService
     * @description
     * # profilemodulowService
     * Service of the app
     */
    angular
        .module('profile-modulow')
        .factory('ProfileModulowService', ProfileModulow);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    ProfileModulow.$inject = ['$resource', 'CONFIG', '$http'];

    function ProfileModulow($resource, CONFIG, $http) {
        return {
            getProfileForPK: function (pkID) {
                return $resource(CONFIG.API_URL + "profile_modulow/program_ksztalcenia_pk/:id").query({id: pkID}).$promise;
            },

            updateProfilModulu: function (profilModulu) {
                return $http.put(CONFIG.API_URL + "profile_modulow", profilModulu);
            },

            addProfilModulu: function (profilModulu) {
                return $http.post(CONFIG.API_URL + "profile_modulow", profilModulu);
            },

            deleteProfilModulu: function (id) {
                return $http.delete(CONFIG.API_URL + "profile_modulow/" + id);
            }


        };

    }

})();
