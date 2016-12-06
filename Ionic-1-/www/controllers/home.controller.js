(function() {
'use strict';

    angular
        .module('main')
        .controller('HomeController', HomeController);

    function HomeController($scope) {
        var vm = this;
        
        $scope.produtos = [
            {title: 'Licro', value:50},
            {title: 'Licro', value:50},
            {title: 'Licro', value:50}
        ];

   
    }
})();