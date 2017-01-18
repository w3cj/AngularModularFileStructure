(function () {
	'use strict';

	angular
		.module('reddit.posts')
		.controller('PostsController', PostsController);


	function PostsController() {
		const vm = this;

		console.log('Hello from the posts controller!');
	}

})();
