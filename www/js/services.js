angular.module('starter.services', [])

.factory('Blog', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
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
