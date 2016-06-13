
(function () {
    'use strict';
    angular
        .module('program-studiow')
        .factory('ProgramStudiowService', ProgramStudiow);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    ProgramStudiow.$inject = ['$resource', 'CONFIG', '$http'];

    function ProgramStudiow($resource, CONFIG,$http) {
        return {
            getProgramStudiow: function(id) {
                return $resource(CONFIG.API_URL + "programy_studiow/:id").get({id: id}).$promise;
            },
            createZagadnienieEgzaminu: function(zagadnienie, program_studiow_id){
                var data = {zagadnienie: zagadnienie, program_studiow_id: program_studiow_id};
                return $http.post(CONFIG.API_URL + "zagadnienia_egzaminu_dyplomowego", data);
            },
            deleteZagadnienieEgzaminu: function(zagadnienie_id){
                $http.delete(CONFIG.API_URL + "zagadnienia_egzaminu_dyplomowego/"+zagadnienie_id);
            },
            updateProgramStudiow: function(programStudiow){
                $http.put(CONFIG.API_URL + "programy_studiow", programStudiow);
            }

        };
    }

})();
