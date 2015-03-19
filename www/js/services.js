angular.module('starter.services', [])

.factory('Blog', function($http, $q) {
  var blogs = [{
    id: 0,
    name: '前言'
  }, {
    id: 1,
    name: '无处不在的HTML'
  }, {
    id: 2,
    name: '无处不在的Javascript'
  }, {
    id: 3,
    name: '无处不在的CSS'
  }, {
    id: 4,
    name: '无处不在的三剑客'
  },{
    id: 5,
    name: 'GNU/Linux 强大且Free'
  }, {
    id: 6,
    name: 'Arduino 极客的玩具'
  }, {
    id: 8,
    name: 'Raspberry Pi'
  }, {
    id: 9,
    name: 'Server 一切皆为服务'
  }, {
    id: 10,
    name: 'Web服务'
  }, {
    id: 11,
    name: 'HTTP 熟悉&陌生'
  }, {
    id: 12,
    name: '设计RESTful API'
  }, {
    id: 13,
    name: '环境准备'
  }, {
    id: 14,
    name: '创建REST服务'
  },{
    id: 15,
    name: '前端显示'
  }, {
    id: 16,
    name: 'RESTful的CoAP协议'
  }, {
    id: 17,
    name: '使用IoT-CoAP构建物联网'
  }, {
    id: 18,
    name: '简单物联网'
  }, {
    id: 19,
    name: 'Android简单示例'
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
