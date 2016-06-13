var test = angular.module('test', []);

test.controller('test03Controller', function($http) {
    var vm = this;
    vm.visible = false;
    $http.get('mocks/mock_data_8000.json')
        .then(function(res){
            vm.data = res.data;
    });

    vm.start = function() {
        vm.entries = _.filter(vm.data, function(entry) {
            return entry.gender == 'Female';
        });
    };


});