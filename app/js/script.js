angular.module("app", ['ui.ace'])
    .controller("controller", ["$scope", 'OpenCVService', function($scope) {
        $scope.code = "default code";
        $scope.output= "output";      
    }]);
