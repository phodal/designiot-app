angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('FlaskCtrl', function($scope, $http) {
    $scope.get_id = 'phodal';
    $scope.get = function(uid) {
      $scope.master = angular.copy(uid);
    };
    $scope.post = function(data) {
      console.log(data);
      $scope.master = angular.copy(data);
    };
  })

.controller('BlogCtrl', function($scope, Blog) {
  $scope.blogs = Blog.all();
})

.controller('BlogDetailCtrl', function($scope, $stateParams, Blog) {
    $scope.md ='assets/' + $stateParams.blogId + '.md';
    $scope.blog = Blog.get($stateParams.blogId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
