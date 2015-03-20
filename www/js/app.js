angular.module('starter', ['ionic','hc.marked', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  })
}])

.config(function($ionicConfigProvider){
	$ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-homepage.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.blog', {
      url: '/blog',
      views: {
        'tab-blog': {
          templateUrl: 'templates/tab-blog.html',
          controller: 'BlogCtrl'
        }
      }
    })
    .state('tab.blog-detail', {
      url: '/blog/:blogId',
      views: {
        'tab-blog': {
          templateUrl: 'templates/blog-detail.html',
          controller: 'BlogDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.flask', {
    url: '/flask',
    views: {
      'tab-flask': {
        templateUrl: 'templates/tab-flask.html',
        controller: 'FlaskCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/home');

});
