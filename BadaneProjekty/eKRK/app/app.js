'use strict';

/**
 * @ngdoc index
 * @name app
 * @description
 * # app
 *
 * Main modules of the application.
 */

angular.module('app', [
        'ngResource',
        'ngAria',
        'ui.bootstrap',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ui.router',
        'angular-loading-bar',
        'ui.bootstrap',
        'pascalprecht.translate',
        'ngStorage',
        'selectionModel',
        'ngDragDrop',
        'authorisation',
        'home',
        'program-ksztalcenia',
        'program-studiow',
        'moduly-ksztalcenia',
        'macierzsladowania',
        'przedmioty-ksztalcenia',
        'profile-modulow',
        'pracownicy-naukowi',
        'zajecia',
    ])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        $urlRouterProvider
            .otherwise('/');

        $httpProvider.interceptors.push('TokenInterceptorService');
        $httpProvider.defaults.withCredentials = true;

    }])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
        $translateProvider.preferredLanguage('en');
    }])

    .run(['$rootScope', '$localStorage', '$translate', function ($rootScope, $localStorage, $translate) {

        'use strict';
        console.log('AngularJS run() function...');
        $translate.use($localStorage.language);

    }]);
