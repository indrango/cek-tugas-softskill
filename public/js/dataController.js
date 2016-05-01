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
  $scope.createData = function(data) {
    if (($scope.data.judul != null) && ($scope.data.nama != null)) {
      Data.create(data).success(function(data) {
        // console.log(data);
        all();
      });
    }
  };

  // delete data
  $scope.deleteData = function(id) {
    Data.delete(id).success(function(data) {
      all();
    });
  };

  $scope.editData = function(id) {
    Data.get(id).success(function(datas) {
      $scope.data = datas;
    });
    $scope.nilai = "edit";
  };

  // update data
  $scope.updateData= function(id) {
    Data.update($scope.data._id, $scope.data).success(function(data) {
      all();
    });
  };

}]);
