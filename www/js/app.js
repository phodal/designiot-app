angular.module('starter', ['ionic','hc.marked', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (typeof analytics !== 'undefined'){
      analytics.startTrackerWithId('UA-60917659-4');
    } else {
      console.log("Google Analytics plugin could not be loaded.")
    }
    if(window.plugins && window.plugins.AdMob) {
      var admob_key = device.platform == "Android" ? "ANDROID_PUBLISHER_KEY" : "IOS_PUBLISHER_KEY";
      var admob = window.plugins.AdMob;
      admob.createBannerView(
        {
          'publisherId': 'pub-3662578183051823',
          'adSize': admob.AD_SIZE.BANNER,
          'bannerAtTop': false
        },
        function() {
          admob.requestAd(
            { 'isTesting': false },
            function() {
              admob.showAd(true);
            },
            function() { console.log('failed to request ad'); }
          );
        },
        function() { console.log('failed to create banner view'); }
      );
    }
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
