var test = angular.module('test', []);

test.controller('test03Controller', function($http, $filter) {
    var vm = this;
    vm.visible = false;
    $http.get('mocks/mock_data_8000.json')
        .then(function(res){
            vm.data = res.data;
    });

    vm.start = function() {
        vm.entries = $filter('filter')(vm.data, { gender: 'Female' });
    };


});