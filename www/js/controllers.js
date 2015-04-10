angular.module('starter.controllers', [])

  .controller('HomeCtrl', function ($scope) {
    if (typeof analytics !== 'undefined') {
      analytics.trackView("Home Controller");
    }
  })

  .controller('FlaskCtrl', function ($scope, $http, transformRequestAsFormPost) {
    if (typeof analytics !== 'undefined') {
      analytics.trackView("FlaskCtrl");
    }
    $scope.master = {};
    $scope.url = 'http://mqtt.phodal.com/topics/';

    $scope.getData = function (uid) {
      $http.get($scope.url + uid).success(function (data) {
        $scope.master = angular.copy(data);
      });
    };
    $scope.postData = function (data) {
      $scope.master = angular.copy(data);
      var url = $scope.url + data.uid,
        data = data.data,
        postCfg = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest: transformRequestAsFormPost
        };

      $http.post(url, data, postCfg)
        .success(function () {
          $scope.master = {'status': 'success'};
        });
    };
  })

  .controller('BlogCtrl', function ($scope, Blog) {
    if (typeof analytics !== 'undefined') {
      analytics.trackView("BlogCtrl");
    }
    $scope.blogs = Blog.all();
  })

  .controller('BlogDetailCtrl', function ($scope, $stateParams, Blog) {
    if (typeof analytics !== 'undefined') {
      analytics.trackView("BlogDetailCtrl");
    }
    $scope.md = 'assets/' + $stateParams.blogId + '.md';
    $scope.blog = Blog.get($stateParams.blogId);
  })

  .controller('AccountCtrl', function ($scope, $cordovaAppRate, $cordovaEmailComposer) {
    if (typeof analytics !== 'undefined') {
      analytics.trackView("AccountCtrl");
    }
    $scope.promptRating = function () {
      $cordovaAppRate.promptForRating(true).then(function (result) {
        $scope.words = result;
      }, function (error) {
        $scope.words = result;
      })
    };

    $scope.sendMail = function () {
      $cordovaEmailComposer.isAvailable().then(function () {
        // is available
      }, function () {
        // not available
      });


      var email = {
        to: 'h@phodal.com',
        subject: '关于《教你设计物联网》',
        body: '',
        isHtml: true
      };

      $cordovaEmailComposer.open(email).then(null, function () {
        // user cancelled email
      });
    }
  });
