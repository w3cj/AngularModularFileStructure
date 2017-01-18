(function () {
	'use strict';

	angular
		.module('reddit.posts')
		.component('posts', {
			controller: 'PostsController',
			templateUrl: 'app/posts/posts.html'
		});

})();
