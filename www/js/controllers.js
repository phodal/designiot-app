angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('BlogCtrl', function($scope, Blog) {
  $scope.blogs = Blog.all();
})

.controller('BlogDetailCtrl', function($scope, $stateParams, Blog) {
    Blog.async($stateParams.blogId).then(function(data){
      var blog = Blog.get($stateParams.blogId);
      blog.id = $stateParams.blogId;
      blog.lastText = data;
      $scope.blog = blog;
    })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
