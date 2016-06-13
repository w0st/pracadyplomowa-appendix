(function () {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:zajeciaService
     * @description
     * # zajeciaService
     * Service of the app
     */
    angular
        .module('zajecia')
        .factory('ZajeciaService', Zajecia);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Zajecia.$inject = ['$http', 'CONFIG', '$resource'];

    function Zajecia($http, CONFIG, $resource) {
        return {
            getKursy: function (id) {
                return $resource(CONFIG.API_URL + "przedmioty_ksztalcenia/:id/kursy",
                    {id: '@id'},
                    {'get': {method: 'GET', isArray: true}}
                ).get({id: id}).$promise;
            },
            getGrupaKursow: function (id) {
                return $resource(CONFIG.API_URL + "przedmioty_ksztalcenia/:id/grupa_kursow",
                    {id: '@id'},
                    {'get': {method: 'GET'}}
                ).get({id: id}).$promise;
            },
            addGrupaKursow: function (grupaKursow) {
                return $http.post(CONFIG.API_URL + "/zajecia/grupa_kursow", grupaKursow);
            },
            updateGrupaKursow: function (grupaKursow) {
                return $http.put(CONFIG.API_URL + "/zajecia/grupa_kursow", grupaKursow);
            },
            deleteZajecie: function (id) {
                return $resource(CONFIG.API_URL + 'zajecia/:id',
                    {id: '@id'},
                    {'delete': {method: 'DELETE'}}
                ).delete({id: id}).$promise;
            },
            getKurs: function (id) {
                return $resource(CONFIG.API_URL + "zajecia/kurs/:id").get({id: id}).$promise;
            },
            updateKurs: function (kurs) {
                return $http.put(CONFIG.API_URL + "/zajecia/kurs", kurs);
            },
            addKurs: function (kurs) {
                return $http.post(CONFIG.API_URL + "/zajecia/kurs", kurs);
            },
            getFormyKursow: function () {
                return [
                    {value: 'Wyklad', label: "formy_kursow_wyklad"},
                    {value: 'Cwiczenia', label: "formy_kursow_cwiczenia"},
                    {value: 'Laboratorium', label: "formy_kursow_laboratorium"},
                    {value: 'Seminarium', label: "formy_kursow_seminarium"},
                    {value: 'Projekt', label: "formy_kursow_projekt"},
                    {value: 'Praktyka', label: "formy_kursow_praktyka"},
                    {value: 'PracaDyplomowa', label: "formy_kursow_praca_dyplomowa"}
                ];
            },
            getSposobyZaliczenia: function () {
                return [
                    {value: 'Zaliczenie', label: "sposoby_zaliczenia_zaliczenie"},
                    {value: 'Egzamin', label: "sposoby_zaliczenia_egzamin"}
                ];
            },
            getRodzajeKursu: function () {
                return [
                    {value: 'KsztalceniaOgolnego', label: "rodzaje_kursow_ksztalcenia_ogolnego"},
                    {value: 'Podstawowy', label: "rodzaje_kursow_podstawowy"},
                    {value: 'Kierunkowy', label: "rodzaje_kursow_kierunkowy"},
                    {value: 'Specjalnosciowy', label: "rodzaje_kursow_specjalnosciowy"}
                ];
            },
            getTypyKursu: function () {
                return [
                    {value: 'Wybieralny', label: "typy_kursow_wybieralny"},
                    {value: 'Obowiazkowy', label: "typy_kursow_obowiazkowy"}
                ];
            }

        };

    }

})();
