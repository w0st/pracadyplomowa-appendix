var test = angular.module('test', []);

test.controller('test04Controller', function($http) {
    var vm = this;
    vm.visible = false;
    $http.get('mocks/mock_data_4000.json')
        .then(function(res){
            vm.data = res.data;
    });

    vm.start = function() {
        vm.entries = vm.data;
    };


});