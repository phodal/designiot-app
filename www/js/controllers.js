angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('FlaskCtrl', function($scope) {})

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
