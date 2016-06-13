

(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:przedmioty-ksztalceniaCtrl
	* @description
	* # przedmioty-ksztalceniaCtrl
	* Controller of the app
	*/
	angular
		.module('przedmioty-ksztalcenia')
		.controller('PrzedmiotyKsztalceniaCtrl', PrzedmiotyKsztalcenia);

        PrzedmiotyKsztalcenia.$inject = ['PrzedmiotyKsztalceniaService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function PrzedmiotyKsztalcenia(PrzedmiotyKsztalceniaService) {
			/*jshint validthis: true */
			var vm = this;

            this.load = function() {
                PrzedmiotyKsztalceniaService.getAll().$promise.then(function (response) {
                    vm.przedmiotyKsztalcenia = response;
                    angular.forEach(vm.przedmiotyKsztalcenia, function(przedmiot) {
                        var kodyZajec = _.map(
                            _.filter(przedmiot.zajecia, function(z) {return z.kodZajec !== null;}),
                            function(zajecie) {
                                return zajecie.kodZajec;
                            }
                        );
                        przedmiot.kodyZajec = kodyZajec.join(', ');
                    });
                }, function (reason) {
                    console.log("problem = ", reason);
                    vm.error = 'global_problem_server';
                });
            };

            this.delete = function(id) {
                PrzedmiotyKsztalceniaService.delete({id: id}).$promise.then(function (response) {
                    console.log('usunieto');
                    vm.load();
                }, function (reason) {
                    console.log('problem = ', reason);
                });
            };

            this.load();

            this.select = function(przedmiot) {
                vm.selected = przedmiot;
            };
            /*PrzedmiotyKsztalceniaService.add( {
                nazwaPrzedmiotu: "Angielski B2",
                program_ksztalcenia_id: 1,
                pracownik_naukowy_id: 1
            }).$promise.then(function(response) {

            }, function(reason) {

            });

            PrzedmiotyKsztalceniaService.delete({
                id: 4
            }).$promise.then(function (response) {
                console.log('usunieto');
            }, function (reason) {
                console.log('problem = ', reason);
            });*/
		}

})();
