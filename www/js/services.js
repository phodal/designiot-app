angular.module('starter.services', [])

.factory('Blog', function($http, $q) {
  var blogs = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    image: 'img/homepage.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
	  image: 'img/homepage.png'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
	  image: 'img/homepage.png'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
	  image: 'img/homepage.png'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
	  image: 'img/homepage.png'
  }];

  return {
    all: function() {
      return blogs;
    },
	  async: function(file_name) {
		  var def = $q.defer();
		  $http.get('assets/' + file_name + '.md')
			  .success(function (response) {
				  def.resolve(response);
			  }).error(function () {
				  def.reject("Failed to get albums");
			  });
		  return def.promise;
	  },
    get: function(blogId) {
      for (var i = 0; i < blogs.length; i++) {
        if (blogs[i].id === parseInt(blogId)) {
          return blogs[i];
        }
      }
      return null;
    }
  };
});
