

(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:modulyksztalceniaService
     * @description
     * # modulyksztalceniaService
     * Service of the app
     */
    angular
        .module('moduly-ksztalcenia')
        .factory('ModulyKsztalceniaService', ModulyKsztalcenia);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    ModulyKsztalcenia.$inject = ['$resource', 'CONFIG', '$http'];

    function ModulyKsztalcenia($resource, CONFIG, $http) {
        return {
            getProfileForPK: function (pkID) {
                return $resource(CONFIG.API_URL + "profile_modulow/program_ksztalcenia_pk/:id").query({id: pkID}).$promise;
            },

            deleteModulKsztalcenia: function (id) {
                $http.delete(CONFIG.API_URL + "moduly_ksztalcenia/" + id);
            }
        };
    }


})();
