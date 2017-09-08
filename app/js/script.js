angular.module("app", ['ui.ace'])
    .controller("controller", ["$scope", function($scope) {
        $scope.code = "default code";
        $scope.output= "output";
    }]);
