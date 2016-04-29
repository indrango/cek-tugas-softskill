angular.module('dataServices', [])

.factory('Data', ['$http', function($http) {
  return {
    all: function() {
      return $http.get('/api/data');
    },
    create: function(data) {
      return $http.post('/api/data', data);
    },
    delete: function(id) {
      return $http.delete('/api/data', id);
    }
  }
}]);
