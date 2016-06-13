(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:macierzsladowaniaCtrl
	* @description
	* # macierzsladowaniaCtrl
	* Controller of the app
	*/
	angular
		.module('macierzsladowania')
		.controller('MacierzSladowaniaCtrl', MacierzSladowania);

		MacierzSladowania.$inject = ['MacierzSladowaniaService', '$scope'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function MacierzSladowania(MacierzSladowaniaService, $scope) {
            /*jshint validthis: true */
            var vm = this;

            var init = function() {
                $scope.kierunkoweEfekty= {};
                $scope.obszaroweEfekty= {};
                $scope.ms= {};
                $scope.listKierunkoweEfekty = [];

                MacierzSladowaniaService.getKierunkoweEfektyKsztalcenia().then(function(response) {
                    $scope.kierunkoweEfekty = response;
                    $scope.listKierunkoweEfekty = response;
                    angular.forEach($scope.listKierunkoweEfekty, function(value){
                        value.drag = true;
                    });
                    console.log("kierunkowe efekty ksztalcenia = ", response);
                }, function(reason) {
                    console.log("Nie udalo sie pobrac kierunkowych efektow ksztalcenia");
                });

                MacierzSladowaniaService.getObszaroweEfektyKsztalcenia().then(function(response) {
                    vm.macierz = response;
                    $scope.obszaroweEfekty=response;
                    angular.forEach($scope.obszaroweEfekty, function(efektObszarowy){
                        angular.forEach(efektObszarowy.kierunkowe_efekty_ksztalcenia, function(efektKsztalcenia){
                            // var i = parseInt(efektKsztalcenia.id,10)-1;
                            efektKsztalcenia.drag = true;
                            //console.log($scope.kierunkoweEfekty[i]);
                            //efektKsztalcenia["kod"] = $scope.kierunkoweEfekty[i];
                            // efektKsztalcenia["allInf"] = $scope.kierunkoweEfekty[i];
                        });
                    });

                }, function(reason) {
                    console.log("Nie udalo sie pobrac macierzy");
                });
            };

            init();

            $scope.canDrop = function(obszarowyEfekt) {
                return {
                    accept: function (dragEl) {
                        console.log('obszarowy efekt =', obszarowyEfekt);
                        console.log('kierunkowy efekt =', dragEl);
                        return !_.some(obszarowyEfekt.kierunkowe_efekty_ksztalcenia,  function(kek) {
                            return dragEl[0].innerHTML.indexOf(kek.kod) > 0;
                        });
                    }
                };
            };

            $scope.selectEfekt = function(efekt, obszarKsztalcenia) {
                $scope.selectedEfekt = efekt; // copy ref
                $scope.selectedObszarKsztalcenia = obszarKsztalcenia; // copy ref
            };

            $scope.deleteEfekt = function() {
                $scope.selectedObszarKsztalcenia.kierunkowe_efekty_ksztalcenia =
                    _.reject($scope.selectedObszarKsztalcenia.kierunkowe_efekty_ksztalcenia, $scope.selectedEfekt);
            };

            $scope.save = function() {
                var result = [];
                angular.forEach($scope.obszaroweEfekty, function(obszarowyEfekt) {
                    result.push({
                        id: obszarowyEfekt.id,
                        kierunkowe_efekty_ksztalcenia: _.map(obszarowyEfekt.kierunkowe_efekty_ksztalcenia, function(efekt) {
                            return {id: efekt.id};
                        })
                    });
                });
                console.log('result  = ', result);
                MacierzSladowaniaService.set(result).then(function(response) {
                    console.log("Udalo sie zaktualizowac macierz sladowania");
                }, function(reason) {
                    console.log("Wystapil blad podczas proby aktualizacji macierzy sladowania");
                });
            };

            $scope.cancel = function() {
                init();
            };
		}
})();
