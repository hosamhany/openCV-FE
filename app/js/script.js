var app = angular.module("app", ['ui.ace'])
    .controller("controller", ["$scope","$window","loginService", function($scope,$window,loginService) {
        $scope.code = "default code";
        $scope.output= "output";
        $scope.login= function()
        {
          $window.location.href = 'http://192.168.1.12:3000/login';
        };
        $scope.register= function()
        {
          $window.location.href = 'http://192.168.1.12:3000/register';
        };
    }]);

    app.service('loginService',['$http', function($http) {
      // delete $http.defaults.headers.common['X-Requested-With'];
      this.getData = function() {
        // $http() returns a $promise that we can add handlers with .then()
          return $http({
            method: 'GET',
            url: 'http://192.168.1.12:3000/login',
            params: '',
            headers: {}
         });
     };
}]);
app.service('registerService',['$http', function($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  this.getData = function() {
    // $http() returns a $promise that we can add handlers with .then()
      return $http({
        method: 'GET',
        url: 'http://192.168.1.12:3000/register',
        params: '',
        headers: {}
     }).success(function (data){
       console.log(data);
     })
     .error(function(data)
   {
    //  console.log(data);
   });
 };
}]);
