angular.module('dataApp', ['dataServices'])

.controller('mainController', ['$scope', '$http', 'Data', function($scope, $http, Data) {

  // get all data
  var all = function() {
    Data.all().success(function(data) {
      $scope.dataList = data;
      $scope.data = "";
      console.log(data);
    });
  };

  // call function
  all();

  // create data
  $scope.createData = function() {
    Data.create($scope.data).success(function(data) {
      console.log(data);
      all();
    });
  };

}]);
