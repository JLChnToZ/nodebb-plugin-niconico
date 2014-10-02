(function(module) {
	"use strict";

	var nico = {},
  embed = '<div class="embed-responsive embed-responsive-16by9"><iframe src="/plugins/nodebb-plugin-niconico/embed/plugin.html?$1" class="embed-responsive-item"></iframe></div>';

	nico.parse = function(postContent, callback) {
		postContent = postContent.replace(/<a href="(?:http:\/\/)?(?:www\.)?nicovideo.jp\/watch\/(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = nico;
}(module));
