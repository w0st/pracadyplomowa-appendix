var test = angular.module('test', []);

test.controller('test02Controller', function($http) {
    var vm = this;
    vm.visible = false;
    $http.get('mocks/mock_data_500.json')
        .then(function(res){
            vm.entries = res.data;
    });

    vm.change = function() {
        vm.visible = ! vm.visible;
    };


});