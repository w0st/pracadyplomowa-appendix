(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:program-ksztalceniaCtrl
     * @description
     * # program-ksztalceniaCtrl
     * Controller of the app
     */
    angular
        .module('program-ksztalcenia')
        .controller('ProgramKsztalceniaCtrl', ProgramKsztalcenia);

    ProgramKsztalcenia.$inject = ['ProgramKsztalceniaService', 'CONFIG'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function ProgramKsztalcenia(ProgramKsztalceniaService, CONFIG) {
        /*jshint validthis: true */
        var vm = this;
        ProgramKsztalceniaService.get(1).then(function(result) {
            vm.content = result;
            vm.pdfLink = CONFIG.RAILS_URL.concat('/programy_studiow/1.pdf');
        }, function(reason) {
            vm.error = reason;
        });

    }

})();
