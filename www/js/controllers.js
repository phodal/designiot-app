angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BlogCtrl', function($scope, Blog) {
  $scope.blogs = Blog.all();
})

.controller('BlogDetailCtrl', function($scope, $stateParams, Blog) {
  $scope.blog = Blog.get($stateParams.blogId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
