angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('FlaskCtrl', function($scope, $http, transformRequestAsFormPost) {
    $scope.master = {};
    $scope.url = 'http://mqtt.phodal.com/topics/';

    $scope.get = function(uid) {
      $http.get($scope.url + uid).success(function(data){
        $scope.master = angular.copy(data);
        console.log($scope.master);
      });
    };
    $scope.post = function(data) {
      $scope.master = angular.copy(data);
      var url = $scope.url + data.uid,
        data = data.data,
        postCfg = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest: transformRequestAsFormPost
        };

      console.log(url,data);
      $http.post(url, data, postCfg)
        .success(function(){
          $scope.master = {'status': 'success'};
        });
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
