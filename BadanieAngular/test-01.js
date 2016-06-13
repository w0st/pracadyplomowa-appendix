var test = angular.module('test', []);

test.controller('test01Controller', function($http) {
    var vm = this;
    $http.get('mocks/mock_data_4000.json')
        .then(function(res){
            vm.data = res.data;
    });

    $http.get('mocks/mock_data_8000.json')
        .then(function(res){
            vm.data2 = res.data;
        });

    vm.start = function() {
        vm.entries = vm.data;
    };

    vm.update = function() {
        vm.entries = vm.data2;
    }

});