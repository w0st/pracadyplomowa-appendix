(function() {
    'use strict';
	/**
	* @ngdoc function
	* @name app.controller:sidebarDirective
	* @description
	* # sidebarDirective
	* Directive of the app
	*/
angular
		.module('app')
		.directive('sidebar', sidebar);

		function sidebar () {

			var directive = {
				link: link,
				restrict: 'EA',
				controller: function($scope){
                    $scope.selectedMenu = 'dashboard';
                    $scope.collapseVar = 0;
                    $scope.multiCollapseVar = 0;

                    $scope.check = function(x){

                        if(x==$scope.collapseVar)
                            $scope.collapseVar = 0;
                        else
                            $scope.collapseVar = x;
                    };

                    $scope.multiCheck = function(y){

                        if(y==$scope.multiCollapseVar)
                            $scope.multiCollapseVar = 0;
                        else
                            $scope.multiCollapseVar = y;
                    };
                },

				templateUrl: 'app/modules/shared/directives/sidebar/sidebar.html',
                replace: true
			};

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
