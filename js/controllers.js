angular.module('starter.controllers', [])

.controller('ComicCtrl', function($scope, $http) {

  $http({
    method: 'GET',
    url: 'https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=spider&apikey=ec932d4f8ac858b0f832d6d75e903324'
  }).then(function successCallback(response) {
    $scope.comics = response.data.data.results;
    console.log(response.data.data.results);
  }, function errorCallback(response) {
    console.log(response);
  });

  $scope.$watch("query", function(newValue, oldValue) {
    $http({
      method: 'GET',
      url: 'https://gateway.marvel.com:443/v1/public/comics?titleStartsWith='+$scope.query+'&apikey=ec932d4f8ac858b0f832d6d75e903324'
    }).then(function successCallback(response) {
      $scope.comics = response.data.data.results;
      // console.log(response.data.data.results);
    }, function errorCallback(response) {
      console.log(response);
    });
  });

})

.controller('ComicDetalleCtrl', function($scope, $stateParams, $http) {
  // console.log($stateParams);
  $http({
    method: 'GET',
    url: 'https://gateway.marvel.com:443/v1/public/comics/'+$stateParams.comicId+'?apikey=ec932d4f8ac858b0f832d6d75e903324'
  }).then(function successCallback(response) {
    $scope.comic = response.data.data.results[0];
    // console.log($scope);
    // console.log(response.data.data.results);
  }, function errorCallback(response) {
    console.log(response);
  });
});
