
// TODO Dodać tłumaczenia dla tabeli
// TODO Konfiguracja Datatable

(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:modulyksztalceniaCtrl
     * @description
     * # modulyksztalceniaCtrl
     * Controller of the app
     */
    angular
        .module('moduly-ksztalcenia')
        .controller('ModulyKsztalceniaCtrl', ModulyKsztalcenia);

    ModulyKsztalcenia.$inject = ['$scope', 'ModulyKsztalceniaService', 'DTOptionsBuilder', '$translate'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function ModulyKsztalcenia($scope, ModulyKsztalceniaService, DTOptionsBuilder, $translate) {
        /*jshint validthis: true */
        var vm = this;

        // Moduł wybrany do usuniecia
        vm.modulToDelete = null;

        // index zaznaczonego tab-panelu z modulem
        vm.selectedTab = 0;

        // Datatables configuration
        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withLanguage({
                "sSearch": "	🔎",
                "sInfo":         "",
                "sInfoEmpty":    "",
                "sLengthMenu":   "_MENU_"
            })
            .withPaginationType('numbers');


        // Pobranie danych dla modulu
        ModulyKsztalceniaService.getProfileForPK(1).then(function (result) {
            vm.profile_modulow = result;
        }, function (reason) {
            vm.error = reason;
        });


        // Ustawianie wybranej zakładki
        this.setTab = function (tabId) {
            vm.selectedTab = tabId;
        };


        // Ustawia modul do usuniacia
        // Po akceptacji usuniecia modulu wywolywana jest funkcja: deleteSelectedModul
        this.selectModulToDelete = function (modul) {
            console.log("select modul to delete: ");
            console.log(modul);
            vm.modulToDelete = modul;
        };


        // Usuwa wybrany wczesnie modul
        this.deleteSelectedModul = function () {
            ModulyKsztalceniaService.deleteModulKsztalcenia(vm.modulToDelete.id);
            vm.profile_modulow.forEach(function (profile) {
                console.log(profile);
                var index = profile.moduly_ksztalcenia.indexOf(vm.modulToDelete);
                if (index != -1) {
                    console.log('delete index: ' + index);
                    profile.moduly_ksztalcenia.splice(index, 1);
                }

            });
        };

    }
})();
