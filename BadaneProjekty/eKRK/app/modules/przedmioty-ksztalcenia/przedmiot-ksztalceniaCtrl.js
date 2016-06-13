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
		.controller('PrzedmiotKsztalceniaCtrl', PrzedmiotKsztalcenia);

        PrzedmiotKsztalcenia.$inject = ['PrzedmiotyKsztalceniaService', 'PracownicyNaukowiService', '$state', '$stateParams'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function PrzedmiotKsztalcenia(PrzedmiotyKsztalceniaService, PracownicyNaukowiService, $state, $stateParams) {
			/*jshint validthis: true */
            this.przedmiot = {nazwaPrzedmiotu: undefined, pracownik_naukowy_id: undefined };
            var vm = this;
            var id = $stateParams.id;

            if (id.match(/^\d+$/)) {
                vm.editmode = true;
                PrzedmiotyKsztalceniaService.get({id: id}).$promise.then(function(response) {
                    vm.przedmiot = {
                        nazwaPrzedmiotu: response.nazwaPrzedmiotu,
                        pracownik_naukowy_id: response.pracownik_naukowy_id
                    };
                }, function(reason) {
                    console.log("fail get(1)");
                    vm.error = 'global_problem_server';
                });
            }

            PracownicyNaukowiService.get().$promise.then(function (response) {
                vm.pracownicyNaukowi = response;
            }, function(reason) {
                console.log("Wystapil blad z pobraniem danych");
                vm.error = 'global_problem_server';
            });

            this.save = function() {
                if (_.isEmpty(this.przedmiot.nazwaPrzedmiotu)) {
                    console.log("Proszę podaj nazwę przedmiotu");
                } else if (! _.isInteger(this.przedmiot.pracownik_naukowy_id)) {
                    console.log("Proszę wybierz pracownika");
                } else if (id.match(/^\d+$/)) {
                    vm.update();
                } else {
                    vm.add();
                }
            };

            this.update = function() {
                // sprawdz pola
                // wyslij request
                PrzedmiotyKsztalceniaService.update( {
                    id: id,
                    nazwaPrzedmiotu: this.przedmiot.nazwaPrzedmiotu,
                    program_ksztalcenia_id: 1,
                    pracownik_naukowy_id: parseInt(this.przedmiot.pracownik_naukowy_id, 10)
                }).$promise.then(function(response) {
                    console.log("SUKCES");
                    $state.go('przedmioty-ksztalcenia');
                }, function(reason) {
                    console.log("PORAŻKA = ", reason);
                    vm.errorUnique = reason.data.error;
                });
            };

            this.add = function() {
                // sprawdz pola
                // wyslij request
                PrzedmiotyKsztalceniaService.add( {
                 nazwaPrzedmiotu: this.przedmiot.nazwaPrzedmiotu,
                 program_ksztalcenia_id: 1,
                 pracownik_naukowy_id: this.przedmiot.pracownik_naukowy_id
                 }).$promise.then(function(response) {
                    console.log("SUKCES");
                    $state.go('przedmioty-ksztalcenia');
                 }, function(reason) {
                    console.log("PORAŻKA = ", reason);
                    vm.errorUnique = reason.data.error;
                 });

            };
		}

})();
