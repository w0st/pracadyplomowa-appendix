(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:program-ksztalceniaService
     * @description
     * # program-ksztalceniaService
     * Service of the app
     */
    angular
        .module('program-ksztalcenia')
        .factory('ProgramKsztalceniaService', ProgramKsztalcenia);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    ProgramKsztalcenia.$inject = ['$resource', 'CONFIG'];

    function ProgramKsztalcenia($resource, CONFIG) {
        return {
            get: function(id) {
                return $resource(CONFIG.API_URL + "programy_ksztalcenia/:id").get({id: id}).$promise;
            }
        };
    }

})();
