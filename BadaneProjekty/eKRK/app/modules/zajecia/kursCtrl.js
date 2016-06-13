(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:kursCtrl
     * @description
     * # kursCtrl
     * Controller of the app
     */
    angular
        .module('zajecia')
        .controller('KursCtrl', Kurs);

    Kurs.$inject = ['PrzedmiotyKsztalceniaService', 'ZajeciaService', '$state', '$stateParams', '$timeout'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Kurs(PrzedmiotyKsztalceniaService, ZajeciaService, $state, $stateParams, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        var przedmiotKsztalceniaId = $stateParams['przedmiot-ksztalcenia-id'];
        var kursId = $stateParams['kurs-id'];
        vm.isUpdateAlertVisible = false;
        vm.przedmiotKsztalceniaId = przedmiotKsztalceniaId;
        vm.isValid = true;


        console.log(przedmiotKsztalceniaId);

        if (przedmiotKsztalceniaId === undefined) {
            $state.go("home");
        }

        vm.isEditMode = function () {
            return kursId !== undefined;
        };

        PrzedmiotyKsztalceniaService.get({id: przedmiotKsztalceniaId}).$promise.then(function(response) {
            vm.przedmiot = response;
        }, function(reason) {
            console.log(reason);
        });

        if (vm.isEditMode()) {
            vm.kurs = ZajeciaService.getKurs(kursId).then(
                function (result) {
                    vm.kurs = result;
                    console.log(result);
                }, function (reason) {
                    vm.error = reason;
                });
        }
        else {
            vm.kurs = {przedmiot_ksztalcenia_id: przedmiotKsztalceniaId};
        }

        console.log('KursId: ' + kursId + ' IsEditMode:' + (vm.isEditMode() === true));

        vm.formyKursow = ZajeciaService.getFormyKursow();

        vm.sposobyZaliczenia = ZajeciaService.getSposobyZaliczenia();

        vm.rodzaje = ZajeciaService.getRodzajeKursu();

        vm.typy = ZajeciaService.getTypyKursu();

        vm.save = function () {
            if(vm.validate()){
                if(vm.isEditMode()) {
                    console.log('Update Kurs');
                    vm.updateKurs();
                }
                else{
                    console.log('Add new Kurs');
                    vm.addKurs();
                }
            }
            console.log(vm.kurs);
            console.log(vm.errors);

        };

        vm.reset = function() {
            $state.reload();
        };

        vm.validate = function() {
            var kurs = vm.kurs;
            vm.errors = [];
            // Pola wymagane
            if(vm.kurs.formaKursu === undefined) {
                vm.errors.push('validate_forma_kursu_require');
            }
            if(vm.kurs.kodZajec === undefined) {
                vm.errors.push('validate_kodZajec_require');
            }
            if(vm.kurs.nazwaZajec === undefined) {
                vm.errors.push('validate_nazwaZajec_require');
            }
            if(vm.kurs.punktyECTS === undefined) {
                vm.errors.push('validate_punktyECTS_require');
            }
            if(vm.kurs.punktyECTSBK === undefined) {
                vm.errors.push('validate_punktyECTSBK_require');
            }
            if(vm.kurs.punktyECTSP === undefined) {
                vm.errors.push('validate_punktyECTSP_require');
            }
            if(vm.kurs.sposobZaliczenia === undefined) {
                vm.errors.push('validate_sposobZaliczenia_require');
            }
            if(vm.kurs.rodzaj === undefined) {
                vm.errors.push('validate_rodzaj_require');
            }
            if(vm.kurs.typ === undefined) {
                vm.errors.push('validate_typ_require');
            }
            if(vm.kurs.godzinyZZU === undefined) {
                vm.errors.push('validate_godzinyZZU_require');
            }
            if(vm.kurs.godzinyCNPS === undefined) {
                vm.errors.push('validate_godzinyCNPS_require');
            }


            // Godziny ZZU CPNS
            if(vm.kurs.godzinyZZU <= 0) {
                vm.errors.push('validate_godzinyZZU_Z_3');
            }
            if(vm.kurs.godzinyCNPS <= 0) {
                vm.errors.push('validate_godzinyCNPS_Z_4');
            }
            if(vm.kurs.godzinyCNPS < vm.kurs.godzinyZZU) {
                vm.errors.push('validate_godzinyCNPS_Z_5');
            }

            // ECTS
            if(vm.kurs.punktyECTS <= 0) {
                vm.errors.push('validate_punktyECTS_Z_6');
            }
            if(vm.kurs.punktyECTSBK <= 0 && vm.kurs.formaKursu != 'Praktyka') {
                vm.errors.push('validate_punktyECTSBK_Z_7');
            }
            if(vm.kurs.punktyECTS < vm.kurs.punktyECTSBK) {
                vm.errors.push('validate_punktyECTSBK_Z_8');
            }
            if(vm.kurs.punktyECTSP <= 0) {
                vm.errors.push('validate_punktyECTSP_Z_11');
            }
            if(vm.kurs.punktyECTS < vm.kurs.punktyECTSP) {
                vm.errors.push('validate_punktyECTSP_Z_12');
            }
            vm.isValid = vm.errors.length === 0;
            return vm.isValid;
        };

        vm.updateKurs = function() {
            ZajeciaService.updateKurs(vm.kurs).then(
                function (result) {
                    console.log(result);
                    vm.dispaySuccessAlert();
                }, function (reason) {
                    console.log(reason);
                    if(reason.data.kodZajec !== undefined) {
                        vm.errors.push('validate_kodZajec_Z_2');
                        vm.isValid = false;
                    }
                });
        };

        vm.addKurs = function() {
          //  vm.kurs.przedmiot_ksztalcenia_id = przedmiotKsztalceniaId;
            ZajeciaService.addKurs(vm.kurs).then(
                function (result) {
                    console.log(result);
                    vm.dispaySuccessAlert();
                }, function (reason) {
                    console.log(reason);
                    if(reason.data.kodZajec !== undefined) {
                        vm.errors.push('validate_kodZajec_Z_2');
                        vm.isValid = false;
                    }
                });
        };

        vm.dispaySuccessAlert = function() {
            vm.isUpdateAlertVisible = true;
            $timeout(function() {
                vm.isUpdateAlertVisible = false;
            }, 3000);
        };

    }

})();
